import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Mic, MicOff, Send, Clock, ChevronRight } from "lucide-react";

const sampleQuestions = [
  "Tell me about yourself and your experience in software development.",
  "Can you explain the difference between REST and GraphQL APIs?",
  "Describe a challenging project you worked on and how you overcame obstacles.",
  "How do you approach debugging a complex issue in production?",
  "What is your experience with system design and scalability?",
];

type Message = { role: "ai" | "user"; content: string };

export default function InterviewPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: sampleQuestions[0] },
  ]);
  const [input, setInput] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => setTimer((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatTime = (s: number) => `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const nextIdx = questionIndex + 1;
    if (nextIdx < sampleQuestions.length) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "ai", content: sampleQuestions[nextIdx] }]);
        setQuestionIndex(nextIdx);
      }, 1000);
    } else {
      setTimeout(() => {
        navigate("/results");
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto flex items-center justify-between h-14 px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg gradient-bg flex items-center justify-center">
              <Brain className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-foreground">InterviewAI</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" /> {formatTime(timer)}
            </div>
            <div className="text-sm font-medium text-foreground">
              Question {questionIndex + 1}/{sampleQuestions.length}
            </div>
            {/* Progress bar */}
            <div className="w-24 h-1.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full gradient-bg rounded-full transition-all duration-500" style={{ width: `${((questionIndex + 1) / sampleQuestions.length) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto py-6 px-4">
        <div className="container mx-auto max-w-2xl space-y-4">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "gradient-bg text-primary-foreground"
                    : "glass-card text-foreground"
                }`}>
                  {msg.role === "ai" && (
                    <div className="flex items-center gap-2 mb-1">
                      <Brain className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-primary">Interviewer</span>
                    </div>
                  )}
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="border-t bg-background">
        <div className="container mx-auto max-w-2xl py-4 px-4">
          <div className="flex items-end gap-3">
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${
                isRecording ? "bg-destructive text-destructive-foreground animate-pulse-glow" : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </button>
            <div className="flex-1 glass-card rounded-xl overflow-hidden">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())}
                placeholder="Type your answer..."
                rows={2}
                className="w-full resize-none bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <Button variant="hero" size="icon" className="h-10 w-10 rounded-full" onClick={handleSend} disabled={!input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
