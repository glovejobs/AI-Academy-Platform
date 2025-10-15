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
import NotFound from "./pages/NotFound";

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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
