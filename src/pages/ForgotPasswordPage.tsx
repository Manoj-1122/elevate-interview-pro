import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Mail, ArrowLeft, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import loginBg from "@/assets/login-bg.jpg";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      setSent(true);
      toast.success("Password reset link sent to your email!");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={loginBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="h-10 w-10 rounded-xl gradient-bg flex items-center justify-center">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-white">InterviewAI</span>
          </Link>
          <h1 className="font-display text-2xl font-bold text-white">Reset your password</h1>
          <p className="text-white/60 text-sm mt-1">We'll send you a link to reset it</p>
        </div>

        <div className="rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          {sent ? (
            <div className="text-center py-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">Check your email</h3>
              <p className="text-white/50 text-sm mb-6">We sent a password reset link to <span className="text-white/80">{email}</span></p>
              <Link to="/login">
                <Button variant="heroOutline" size="lg" className="w-full">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Sign In
                </Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleReset}>
              <div className="mb-6">
                <label className="text-sm font-medium text-white/90 mb-1.5 block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required className="w-full h-11 pl-10 pr-4 rounded-xl bg-white/10 border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full py-5 mb-4" disabled={loading}>
                {loading ? "Sending..." : "Send Reset Link"} {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
              <Link to="/login" className="flex items-center justify-center gap-1 text-sm text-white/50 hover:text-white/70">
                <ArrowLeft className="h-3 w-3" /> Back to Sign In
              </Link>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
