import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Briefcase, Code, Database, Palette, Bot, ChevronRight } from "lucide-react";

const roles = [
  { id: "swe", label: "Software Developer", icon: Code },
  { id: "ds", label: "Data Scientist", icon: Database },
  { id: "ai", label: "AI Engineer", icon: Bot },
  { id: "ux", label: "UX/UI Designer", icon: Palette },
];

const difficulties = ["Beginner", "Intermediate", "Advanced"];
const types = [
  { id: "technical", label: "Technical", desc: "Code & system design questions" },
  { id: "hr", label: "HR / Resume", desc: "Resume-based behavioral questions" },
  { id: "behavioral", label: "Behavioral", desc: "Situational & mock interview" },
];

export default function SetupPage() {
  const [role, setRole] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const canStart = role && difficulty && type;

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
          <div className="grid grid-cols-2 gap-3">
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setRole(r.id)}
                className={`glass-card rounded-xl p-4 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                  role === r.id ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md"
                }`}
              >
                <r.icon className={`h-6 w-6 mb-2 ${role === r.id ? "text-primary" : "text-muted-foreground"}`} />
                <p className="font-medium text-sm text-foreground">{r.label}</p>
              </button>
            ))}
          </div>
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">
          <h2 className="font-display font-semibold text-lg text-foreground mb-4">Interview Type</h2>
          <div className="grid gap-3">
            {types.map((t) => (
              <button
                key={t.id}
                onClick={() => setType(t.id)}
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

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Button
            variant="hero"
            size="lg"
            className="w-full py-6 text-base"
            disabled={!canStart}
            onClick={() => navigate("/interview")}
          >
            Start Interview <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
