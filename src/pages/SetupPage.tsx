import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, Briefcase, ChevronRight, Upload, FileText, X, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const roles = [
  { id: "swe", label: "Software Developer" },
  { id: "ds", label: "Data Scientist" },
  { id: "ai", label: "AI Engineer" },
  { id: "ux", label: "UX/UI Designer" },
  { id: "pm", label: "Product Manager" },
  { id: "devops", label: "DevOps Engineer" },
  { id: "qa", label: "QA Engineer" },
];

const difficulties = ["Beginner", "Intermediate", "Advanced"];
const types = [
  { id: "technical", label: "Technical", desc: "Code & system design questions" },
  { id: "hr", label: "HR", desc: "General HR & workplace questions" },
  { id: "resume", label: "Resume", desc: "Upload your resume to get tailored questions" },
  { id: "behavioral", label: "Behavioral", desc: "Situational & mock interview" },
];

export default function SetupPage() {
  const [role, setRole] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const canStart = role && difficulty && type && (type !== "resume" || resumeText);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ["text/plain", "application/pdf"];
    if (!allowedTypes.includes(file.type) && !file.name.endsWith(".txt")) {
      toast.error("Please upload a PDF or TXT file");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File must be under 5MB");
      return;
    }

    setResumeFile(file);

    if (file.type === "text/plain" || file.name.endsWith(".txt")) {
      const text = await file.text();
      setResumeText(text);
    } else {
      // For PDF, read as base64 and send to AI for extraction
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = (reader.result as string).split(",")[1];
        // Store base64 temporarily; the edge function will handle parsing
        setResumeText(`[PDF_BASE64]${base64}`);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeFile = () => {
    setResumeFile(null);
    setResumeText("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleStart = async () => {
    const roleLabel = roles.find((r) => r.id === role)?.label || role;

    if (type === "resume" && resumeText) {
      setIsGenerating(true);
      try {
        const { data, error } = await supabase.functions.invoke("generate-resume-questions", {
          body: { resumeText, role: roleLabel, difficulty },
        });

        if (error) throw error;
        if (data?.error) throw new Error(data.error);

        const questions = data.questions;
        if (!questions || !Array.isArray(questions) || questions.length === 0) {
          throw new Error("No questions generated");
        }

        navigate(`/interview?role=${encodeURIComponent(roleLabel)}&difficulty=${encodeURIComponent(difficulty)}&type=${encodeURIComponent(type)}`, {
          state: { customQuestions: questions },
        });
      } catch (e) {
        console.error("Resume question generation error:", e);
        toast.error("Failed to generate questions from resume. Starting with default questions.");
        navigate(`/interview?role=${encodeURIComponent(roleLabel)}&difficulty=${encodeURIComponent(difficulty)}&type=${encodeURIComponent(type)}`);
      } finally {
        setIsGenerating(false);
      }
    } else {
      navigate(`/interview?role=${encodeURIComponent(roleLabel)}&difficulty=${encodeURIComponent(difficulty)}&type=${encodeURIComponent(type)}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container mx-auto flex items-center h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">InterviewAI</span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">Set Up Your Interview</h1>
          <p className="text-muted-foreground">Configure your interview session to get the most relevant questions.</p>
        </motion.div>

        {/* Role */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-10">
          <h2 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" /> Job Role
          </h2>
          <Select value={role} onValueChange={setRole}>
            <SelectTrigger className="w-full glass-card rounded-xl h-12 text-sm">
              <SelectValue placeholder="Select a job role" />
            </SelectTrigger>
            <SelectContent>
              {roles.map((r) => (
                <SelectItem key={r.id} value={r.id}>{r.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        {/* Difficulty */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-10">
          <h2 className="font-display font-semibold text-lg text-foreground mb-4">Difficulty Level</h2>
          <div className="flex gap-3">
            {difficulties.map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`flex-1 glass-card rounded-xl py-3 px-4 text-sm font-medium transition-all duration-200 ${
                  difficulty === d ? "ring-2 ring-primary text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Type */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-6">
          <h2 className="font-display font-semibold text-lg text-foreground mb-4">Interview Type</h2>
          <div className="grid gap-3">
            {types.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setType(t.id);
                  if (t.id !== "resume") {
                    removeFile();
                  }
                }}
                className={`glass-card rounded-xl p-4 text-left transition-all duration-200 ${
                  type === t.id ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md"
                }`}
              >
                <p className="font-medium text-sm text-foreground">{t.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.desc}</p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Resume Upload */}
        <AnimatePresence>
          {type === "resume" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12 overflow-hidden"
            >
              <h2 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> Upload Your Resume
              </h2>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.txt"
                onChange={handleFileChange}
                className="hidden"
              />
              {!resumeFile ? (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full glass-card rounded-xl p-8 border-2 border-dashed border-muted-foreground/30 hover:border-primary/50 transition-colors flex flex-col items-center gap-3"
                >
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">Click to upload your resume</p>
                    <p className="text-xs text-muted-foreground mt-1">PDF or TXT, max 5MB</p>
                  </div>
                </button>
              ) : (
                <div className="glass-card rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{resumeFile.name}</p>
                      <p className="text-xs text-muted-foreground">{(resumeFile.size / 1024).toFixed(1)} KB</p>
                    </div>
                  </div>
                  <button
                    onClick={removeFile}
                    className="h-8 w-8 rounded-full hover:bg-destructive/10 flex items-center justify-center transition-colors"
                  >
                    <X className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {type !== "resume" && <div className="mb-6" />}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Button
            variant="hero"
            size="lg"
            className="w-full py-6 text-base"
            disabled={!canStart || isGenerating}
            onClick={handleStart}
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Generating Questions from Resume...
              </>
            ) : (
              <>
                Start Interview <ChevronRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
