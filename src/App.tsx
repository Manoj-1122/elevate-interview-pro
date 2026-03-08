import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const SetupPage = lazy(() => import("./pages/SetupPage"));
const InterviewPage = lazy(() => import("./pages/InterviewPage"));
const ResultsPage = lazy(() => import("./pages/ResultsPage"));
const InterviewDetailPage = lazy(() => import("./pages/InterviewDetailPage"));
const LearningPage = lazy(() => import("./pages/LearningPage"));
const LearningDetailPage = lazy(() => import("./pages/LearningDetailPage"));
const LearningContentPage = lazy(() => import("./pages/LearningContentPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const JobRolesPage = lazy(() => import("./pages/JobRolesPage"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" /></div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/setup" element={<SetupPage />} />
            <Route path="/interview" element={<InterviewPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/interview/:id" element={<InterviewDetailPage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/learning/:id" element={<LearningDetailPage />} />
            <Route path="/learning/:id/content" element={<LearningContentPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
