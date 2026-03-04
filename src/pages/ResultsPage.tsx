import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, Download, RotateCcw, TrendingUp, MessageSquare, Lightbulb, Shield } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";

const overallScore = 82;

const skills = [
  { name: "Technical Knowledge", score: 88, color: "bg-primary" },
  { name: "Communication", score: 72, color: "bg-secondary" },
  { name: "Problem Solving", score: 85, color: "bg-accent" },
  { name: "Confidence", score: 78, color: "bg-primary" },
  { name: "Grammar & Vocabulary", score: 90, color: "bg-secondary" },
  { name: "Response Time", score: 75, color: "bg-accent" },
];

const radarData = skills.map((s) => ({ subject: s.name.split(" ")[0], score: s.score, fullMark: 100 }));

const feedback = [
  { icon: TrendingUp, title: "Strong Technical Foundation", text: "Your technical knowledge is impressive. You demonstrated clear understanding of system design concepts." },
  { icon: MessageSquare, title: "Improve Communication Clarity", text: "Try to structure your answers using the STAR method for behavioral questions. Be more concise in technical explanations." },
  { icon: Lightbulb, title: "Problem Solving Approach", text: "Great analytical thinking! Consider walking through your thought process more explicitly during interviews." },
  { icon: Shield, title: "Build Confidence", text: "Reduce filler words and maintain a steady pace. Practice speaking about your projects with more conviction." },
];

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">InterviewAI</span>
          </Link>
          <div className="flex gap-3">
            <Link to="/setup"><Button variant="heroOutline" size="sm"><RotateCcw className="h-4 w-4 mr-1" /> Retake</Button></Link>
            <Button variant="ghost" size="sm"><Download className="h-4 w-4 mr-1" /> Export</Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4 max-w-4xl">
        {/* Overall Score */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center mb-12">
          <p className="text-muted-foreground text-sm font-medium mb-4 uppercase tracking-wider">Overall Performance</p>
          <div className="relative inline-flex items-center justify-center">
            <svg className="h-40 w-40" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" fill="none" strokeWidth="8" className="stroke-muted" />
              <circle
                cx="60" cy="60" r="54" fill="none" strokeWidth="8"
                strokeDasharray={`${(overallScore / 100) * 339.3} 339.3`}
                strokeLinecap="round"
                className="stroke-primary"
                transform="rotate(-90 60 60)"
              />
            </svg>
            <div className="absolute">
              <span className="font-display text-4xl font-bold text-foreground">{overallScore}</span>
              <span className="text-muted-foreground text-sm">/100</span>
            </div>
          </div>
          <p className="text-accent font-semibold mt-4">Great Performance!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Radar Chart */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-2xl p-6">
            <h3 className="font-display font-semibold text-foreground mb-4">Skill Breakdown</h3>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar dataKey="score" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Score Bars */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-2xl p-6">
            <h3 className="font-display font-semibold text-foreground mb-6">Detailed Scores</h3>
            <div className="space-y-5">
              {skills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.score}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${s.score}%` }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                      className={`h-full rounded-full ${s.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feedback */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">AI Feedback & Suggestions</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {feedback.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="glass-card rounded-2xl p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <f.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm text-foreground">{f.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center gap-4">
          <Link to="/dashboard"><Button variant="hero" size="lg">View Dashboard <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
          <Link to="/setup"><Button variant="heroOutline" size="lg">New Interview</Button></Link>
        </div>
      </div>
    </div>
  );
}
