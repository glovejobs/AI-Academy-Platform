import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Award, X } from "lucide-react";

export default function Complete() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(true);

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center py-4 sm:py-8 px-4">
      {/* Logo */}
      <div className="w-full max-w-[864px] flex items-center gap-2.5 mb-8">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/7db5fae004e1db186d4348eeae009350c277e0e7?width=72" 
          alt="Logo" 
          className="w-9 h-9"
        />
      </div>

      {/* Main Completion Card */}
      <div className="w-full max-w-[864px] bg-white rounded-[32px] border border-black/[0.08] p-8 sm:p-12 lg:p-16 mb-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#121511] leading-[1.2] mb-4 font-heading">
            Enrollment Complete! 🎉
          </h1>
          <p className="text-xl text-[#7B7B7B] leading-[1.5] tracking-[-0.4px] opacity-80 font-body max-w-md mx-auto">
            ALEX is all set to begin their design journey
          </p>
        </div>

        {/* Enrollment Summary */}
        <div className="w-full max-w-[564px] mx-auto p-6 rounded-[32px] bg-[#F7F7F7] space-y-4 mb-6">
          <h2 className="text-lg font-bold text-[#121511] leading-[1.5] mb-4 font-heading">
            Enrollment Summary
          </h2>
          
          <div className="p-6 rounded-3xl border border-black/[0.08] bg-white space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#404040] leading-[1.5] tracking-[-0.42px] font-body">
                Student Name
              </span>
              <span className="text-sm font-bold text-black leading-[1.5] font-heading">
                ALEX
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#404040] leading-[1.5] tracking-[-0.42px] font-body">
                Grade Level
              </span>
              <span className="text-sm font-bold text-black leading-[1.5] font-heading">
                10th Grade
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#404040] leading-[1.5] tracking-[-0.42px] font-body">
                User Name
              </span>
              <span className="text-sm font-bold text-black leading-[1.5] font-heading">
                Alex_d
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#404040] leading-[1.5] tracking-[-0.42px] font-body">
                Subscription
              </span>
              <span className="text-sm font-bold text-black leading-[1.5] font-heading">
                2-Month
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#404040] leading-[1.5] tracking-[-0.42px] font-body">
                Rewards Type
              </span>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#FEE080]">
                <Award className="w-3.5 h-3.5 text-[#FF7323]" />
                <span className="text-xs text-[#FF7323] leading-[1.5] tracking-[-0.24px] font-body">
                  Badges only
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* What's Next Alert */}
        {showAlert && (
          <div className="w-full max-w-[564px] mx-auto flex items-start gap-3 p-4 rounded-xl border border-black/[0.08] bg-[#F6FDF2] relative">
            <AlertCircle className="w-5 h-5 text-[#163300] flex-shrink-0 mt-0.5" strokeWidth={1.67} />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#163300] leading-[1.5] mb-1">
                What's Next?
              </h3>
              <p className="text-base text-[#163300] leading-[1.5] tracking-[-0.32px] font-body">
                You'll receive a confirmation email with class schedule and login details. Your child can log in using their username: <span className="font-bold">ALex_d</span>
              </p>
            </div>
            <button
              onClick={() => setShowAlert(false)}
              className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-black/5 transition-colors flex-shrink-0 -mt-2 -mr-2"
              aria-label="Close alert"
            >
              <X className="w-5 h-5 text-[#163300]" strokeWidth={1.67} />
            </button>
          </div>
        )}
      </div>

      {/* Footer with Navigation */}
      <div className="w-full max-w-[864px] bg-white rounded-[32px] border border-black/[0.08] p-8 flex justify-between items-center">
        <button
          onClick={handleBack}
          className="text-lg font-bold text-[#163300] leading-[1.2] font-heading underline hover:opacity-80 transition-opacity"
        >
          Go Back
        </button>
        <button
          onClick={handleDashboard}
          className="px-8 py-4 h-14 bg-[#9FE870] rounded-full hover:bg-[#8FD860] transition-colors"
        >
          <span className="text-lg font-bold text-[#163300] leading-[1.2] font-heading">
            Go to Dashboard
          </span>
        </button>
      </div>
    </div>
  );
}
