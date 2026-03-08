import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import aiBg from "@/assets/ai-interview-bg.jpg";
import { Button } from "@/components/ui/button";
import { Brain, Mic, BarChart3, MessageSquare, Sparkles, Target, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { supabase } from "@/integrations/supabase/client";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const features = [
  { icon: Brain, title: "AI-Generated Questions", desc: "Tailored questions based on your job role and experience level" },
  { icon: Target, title: "Real-time Evaluation", desc: "Instant AI-powered feedback on your answers and communication" },
  { icon: Mic, title: "Speech & Text Analysis", desc: "Voice recognition with NLP analysis for comprehensive review" },
  { icon: MessageSquare, title: "Personalized Feedback", desc: "Detailed suggestions to improve your interview performance" },
  { icon: BarChart3, title: "Performance Analytics", desc: "Track progress with visual charts and skill breakdowns" },
  { icon: TrendingUp, title: "Skill Improvement", desc: "Identify weak areas and strengthen them over time" },
  { icon: Sparkles, title: "Free Resources", desc: "Access curated resources for AI, ML, Data Science, Full Stack, Data Analytics, Cyber Security & more" },
];

const steps = [
  { num: "01", title: "Explore Job Roles", desc: "Browse available roles, required skills, and salary ranges" },
  { num: "02", title: "Learn & Prepare", desc: "Study with curated resources for AI, Data Science, Full Stack & more" },
  { num: "03", title: "Practice Interviews", desc: "Answer AI-generated questions via text or voice" },
  { num: "04", title: "Get Your Report", desc: "Receive detailed AI feedback with actionable improvements" },
];

export default function LandingPage() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const handleGetStarted = () => {
    navigate(user ? "/dashboard" : "/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial="hidden" animate="visible" variants={fadeUp} custom={0}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8"
              >
                <Sparkles className="h-4 w-4" /> Powered by Advanced AI
              </motion.div>

              <motion.h1
                initial="hidden" animate="visible" variants={fadeUp} custom={1}
                className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground"
              >
                AI Interview Preparation
                <br />
                <span className="gradient-text">& Evaluation System</span>
              </motion.h1>

              <motion.p
                initial="hidden" animate="visible" variants={fadeUp} custom={2}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
              >
                Practice interviews with AI and get instant, detailed feedback. Master every interview with personalized coaching.
              </motion.p>

              <motion.div
                initial="hidden" animate="visible" variants={fadeUp} custom={3}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button variant="hero" size="lg" className="text-base px-8 py-6" onClick={handleGetStarted}>
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/roles">
                  <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
                    Explore Job Roles
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="flex-1 hidden lg:block"
            >
              <img src={aiBg} alt="AI Interview concept" className="w-full rounded-2xl shadow-2xl glow" />
            </motion.div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute -right-4 top-20 glass-card rounded-2xl p-4 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Score: 92/100</p>
                <p className="text-xs text-muted-foreground">Technical Interview</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden lg:block absolute -left-4 top-40 glass-card rounded-2xl p-4 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">+35% Improvement</p>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Journey Path */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">Your Learning Path</h2>
            <p className="text-muted-foreground mb-8">Follow this simple journey to ace your interviews</p>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
            {[
              { label: "Job Roles", to: "/roles" },
              { label: "Resources", to: "/learning" },
              { label: "Practice", to: "/setup" },
              { label: "Evaluate", to: "/results" },
              { label: "Dashboard", to: "/dashboard" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-3">
                <Link to={step.to}>
                  <Button variant={i === 0 ? "hero" : "heroOutline"} size="sm" className="rounded-full px-5">
                    {step.label}
                  </Button>
                </Link>
                {i < 4 && <ArrowRight className="h-4 w-4 text-muted-foreground hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Everything You Need to Ace Interviews</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Comprehensive AI-powered tools to prepare, practice, and perfect your interview skills.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="glass-card rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-4 bg-muted/50">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Get interview-ready in four simple steps.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-5xl font-display font-bold gradient-text mb-4">{s.num}</div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="gradient-bg rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4 relative">Ready to Ace Your Next Interview?</h2>
            <p className="text-primary-foreground/80 text-lg max-w-lg mx-auto mb-8 relative">Start practicing today and get AI-powered feedback to boost your confidence and performance.</p>
            <div className="relative flex justify-center gap-4">
              <Button variant="heroOutline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base px-8 py-6" onClick={handleGetStarted}>
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg gradient-bg flex items-center justify-center">
              <Brain className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-foreground">InterviewAI</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 InterviewAI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
