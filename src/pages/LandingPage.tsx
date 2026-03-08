import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aiBg from "@/assets/ai-interview-bg.jpg";
import { Button } from "@/components/ui/button";
import { Brain, Mic, BarChart3, MessageSquare, Sparkles, Target, TrendingUp, Shield, ArrowRight, Star, CheckCircle2 } from "lucide-react";

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
];

const steps = [
  { num: "01", title: "Choose Your Role", desc: "Select from Software Developer, Data Scientist, AI Engineer, and more" },
  { num: "02", title: "Answer Questions", desc: "Respond to AI-generated interview questions via text or voice" },
  { num: "03", title: "AI Evaluates", desc: "Our AI analyzes content, communication, confidence, and accuracy" },
  { num: "04", title: "Get Your Report", desc: "Receive a detailed feedback report with actionable improvements" },
];

const testimonials = [
  { name: "Sarah Chen", role: "Software Engineer at Google", avatar: "SC", rating: 5, text: "This platform helped me prepare for my FAANG interviews. The AI feedback was incredibly accurate and actionable." },
  { name: "Marcus Johnson", role: "Data Scientist at Meta", avatar: "MJ", rating: 5, text: "The speech analysis feature is a game-changer. It helped me improve my communication skills significantly." },
  { name: "Priya Sharma", role: "Product Manager at Amazon", avatar: "PS", rating: 5, text: "I went from nervous to confident in just two weeks of practice. The detailed analytics really showed my progress." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">InterviewAI</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="hero" size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Text */}
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
                <Link to="/setup">
                  <Button variant="hero" size="lg" className="text-base px-8 py-6">
                    Start Interview <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/interview">
                  <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
                    Try Demo
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right: Image */}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div key={s.num} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="text-center">
                <div className="text-5xl font-display font-bold gradient-text mb-4">{s.num}</div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Loved by Candidates</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">See how InterviewAI has helped thousands land their dream jobs.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">{t.avatar}</div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
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
            <Link to="/setup" className="relative">
              <Button variant="heroOutline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base px-8 py-6">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
