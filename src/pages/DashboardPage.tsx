import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Plus, TrendingUp, Target, Clock, Award, BarChart3 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

const stats = [
  { label: "Interviews", value: "12", icon: Target, change: "+3 this week" },
  { label: "Avg Score", value: "78", icon: Award, change: "+5 from last" },
  { label: "Practice Hours", value: "8.5", icon: Clock, change: "2.3h this week" },
  { label: "Improvement", value: "+23%", icon: TrendingUp, change: "Last 30 days" },
];

const trendData = [
  { date: "Jan", score: 58 }, { date: "Feb", score: 65 }, { date: "Mar", score: 62 },
  { date: "Apr", score: 70 }, { date: "May", score: 74 }, { date: "Jun", score: 78 },
  { date: "Jul", score: 82 },
];

const skillData = [
  { subject: "Technical", score: 85 }, { subject: "Communication", score: 70 },
  { subject: "Problem Solving", score: 80 }, { subject: "Confidence", score: 72 },
  { subject: "Grammar", score: 88 }, { subject: "Speed", score: 75 },
];

const recentInterviews = [
  { role: "Software Developer", type: "Technical", score: 82, date: "2 hours ago" },
  { role: "AI Engineer", type: "Behavioral", score: 76, date: "Yesterday" },
  { role: "Data Scientist", type: "Technical", score: 88, date: "3 days ago" },
  { role: "UX Designer", type: "HR", score: 71, date: "1 week ago" },
];

export default function DashboardPage() {
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
          <div className="flex items-center gap-3">
            <Link to="/setup">
              <Button variant="hero" size="sm"><Plus className="h-4 w-4 mr-1" /> New Interview</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="font-display text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground text-sm">Track your interview preparation progress.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <s.icon className="h-5 w-5 text-primary" />
                <span className="text-xs text-accent font-medium">{s.change}</span>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Trend chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2 glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-semibold text-foreground">Performance Trend</h3>
              <BarChart3 className="h-5 w-5 text-muted-foreground" />
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} />
                <YAxis domain={[40, 100]} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={2.5} dot={{ fill: "hsl(var(--primary))", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Skills radar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-2xl p-6">
            <h3 className="font-display font-semibold text-foreground mb-4">Skill Overview</h3>
            <ResponsiveContainer width="100%" height={220}>
              <RadarChart data={skillData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                <Radar dataKey="score" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.15} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Recent interviews */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card rounded-2xl p-6">
          <h3 className="font-display font-semibold text-foreground mb-4">Recent Interviews</h3>
          <div className="space-y-3">
            {recentInterviews.map((interview, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{interview.role}</p>
                    <p className="text-xs text-muted-foreground">{interview.type} · {interview.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-semibold ${interview.score >= 80 ? "text-accent" : "text-primary"}`}>{interview.score}/100</span>
                  <Link to="/results">
                    <Button variant="ghost" size="sm">View</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
