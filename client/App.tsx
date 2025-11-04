import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChildDetails from "./pages/ChildDetails";
import EmergencyContact from "./pages/EmergencyContact";
import ChildLogin from "./pages/ChildLogin";
import Rewards from "./pages/Rewards";
import Pricing from "./pages/Pricing";
import Payment from "./pages/Payment";
import Complete from "./pages/Complete";
import Dashboard from "./pages/Dashboard";
import Progress from "./pages/Progress";
import Schedule from "./pages/Schedule";
import Messages from "./pages/Messages";
import SafetyCenter from "./pages/SafetyCenter";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import StudentSignup from "./pages/StudentSignup";
import StudentLogin from "./pages/StudentLogin";
import StudentWelcome from "./pages/StudentWelcome";
import StudentBootcamp from "./pages/StudentBootcamp";
import StudentOnboarding from "./pages/StudentOnboarding";
import StudentProjects from "./pages/StudentProjects";
import StudentDashboard from "./pages/StudentDashboard";
import AiMentor from "./pages/AiMentor";
import Achievements from "./pages/Achievements";
import StudentSchedule from "./pages/StudentSchedule";
import Portfolio from "./pages/Portfolio";
import MentorDashboard from "./pages/MentorDashboard";
import MentorStudents from "./pages/MentorStudents";
import MentorCurriculum from "./pages/MentorCurriculum";
import MentorProjects from "./pages/MentorProjects";
import MentorMessages from "./pages/MentorMessages";
import MentorAnalytics from "./pages/MentorAnalytics";
import MentorSettings from "./pages/MentorSettings";
import AdminDashboard from "./pages/AdminDashboard";
import AdminStudents from "./pages/AdminStudents";
import AdminMentors from "./pages/AdminMentors";
import MentorProfile from "./pages/MentorProfile";
import MentorModalsDemo from "./pages/MentorModalsDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/child-details" element={<ChildDetails />} />
          <Route path="/emergency-contact" element={<EmergencyContact />} />
          <Route path="/child-login" element={<ChildLogin />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/safety-center" element={<SafetyCenter />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/student-signup" element={<StudentSignup />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/student-welcome" element={<StudentWelcome />} />
          <Route path="/student-bootcamp" element={<StudentBootcamp />} />
          <Route path="/student-onboarding" element={<StudentOnboarding />} />
          <Route path="/student-projects" element={<StudentProjects />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/ai-mentor" element={<AiMentor />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/schedule" element={<StudentSchedule />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
          <Route path="/mentor-students" element={<MentorStudents />} />
          <Route path="/mentor-curriculum" element={<MentorCurriculum />} />
          <Route path="/mentor-projects" element={<MentorProjects />} />
          <Route path="/mentor-messages" element={<MentorMessages />} />
          <Route path="/mentor-analytics" element={<MentorAnalytics />} />
          <Route path="/mentor-settings" element={<MentorSettings />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-students" element={<AdminStudents />} />
          <Route path="/admin-mentors" element={<AdminMentors />} />
          <Route path="/mentor-profile/:id" element={<MentorProfile />} />
          <Route path="/mentor-modals-demo" element={<MentorModalsDemo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
