import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, X } from "lucide-react";

export default function Rewards() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(true);
  const [selectedReward, setSelectedReward] = useState<string | null>(null);

  const handleNext = () => {
    navigate("/pricing");
  };

  const handleBack = () => {
    navigate("/child-login");
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center py-4 sm:py-8 px-4">
      {/* Logo */}
      <div className="w-full max-w-[864px] flex items-center gap-2.5 mb-8">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/7db5fae004e1db186d4348eeae009350c277e0e7?width=72" 
          alt="Logo" 
          className="w-9 h-9"
        />
      </div>

      {/* Progress Bar - 70% */}
      <div className="w-full max-w-[864px] flex items-center gap-3 mb-8">
        <div className="flex-1 h-2 bg-[#EAECF0] rounded-lg relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[70%] bg-[#0A4D39] rounded-lg" />
        </div>
        <span className="text-sm text-black font-normal tracking-tight">70%</span>
      </div>

      {/* Main Form Card */}
      <div className="w-full max-w-[864px] bg-white rounded-[32px] border border-black/[0.08] p-8 sm:p-12 lg:p-16 mb-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-black leading-[1.2] mb-2 font-heading">
            How should your child be rewarded?
          </h1>
          <p className="text-base sm:text-lg text-[#404040] leading-[1.5] tracking-[-0.36px] font-body">
            Pick a subscription and decide how your child will be rewarded  bonus payments or badges
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black/10 mb-12" />

        {/* Reward Options */}
        <div className="space-y-4 mb-12">
          {/* Badges Only */}
          <button
            onClick={() => setSelectedReward("badges")}
            className="w-full flex items-start justify-between p-6 rounded-3xl border border-[#EAECF0] bg-white hover:border-[#0A4D39] transition-colors"
          >
            <div className="flex items-start gap-4">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/18cbaa998b5bb72d9e168be5024b8e137e5fb603?width=96" 
                alt="Badge icon" 
                className="w-12 h-12"
              />
              <div className="text-left">
                <h3 className="text-sm font-bold text-black leading-[1.5] mb-1">
                  Badges Only
                </h3>
                <p className="text-sm text-[#404040] leading-[1.5] tracking-[-0.42px] font-body">
                  Non-monetary recognition within platform
                </p>
              </div>
            </div>
            <div className={`w-5 h-5 rounded-full border ${selectedReward === "badges" ? "border-[#0A4D39] bg-[#0A4D39]" : "border-[#D0D5DD] bg-white"}`} />
          </button>

          {/* Monetary Rewards */}
          <button
            onClick={() => setSelectedReward("monetary")}
            className="w-full flex items-start justify-between p-6 rounded-3xl border border-[#EAECF0] bg-white hover:border-[#0A4D39] transition-colors"
          >
            <div className="flex items-start gap-4">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/d45fe527f6694668013acedd4a46b3210d8d8971?width=96" 
                alt="Money icon" 
                className="w-12 h-12"
              />
              <div className="text-left">
                <h3 className="text-sm font-bold text-black leading-[1.5] mb-1">
                  Monetary Rewards
                </h3>
                <p className="text-sm text-[#404040] leading-[1.5] tracking-[-0.42px] font-body">
                  Via greenlight App
                </p>
              </div>
            </div>
            <div className={`w-5 h-5 rounded-full border ${selectedReward === "monetary" ? "border-[#0A4D39] bg-[#0A4D39]" : "border-[#D0D5DD] bg-white"}`} />
          </button>
        </div>

        {/* Safety First Alert */}
        {showAlert && (
          <div className="flex items-start gap-3 p-4 rounded-xl border border-black/[0.08] bg-[#F6FDF2] relative">
            <AlertCircle className="w-5 h-5 text-[#163300] flex-shrink-0 mt-0.5" strokeWidth={1.67} />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#163300] leading-[1.5] mb-1">
                Safety First
              </h3>
              <p className="text-base text-[#163300] leading-[1.5] tracking-[-0.32px] font-body">
                We maintain a secure, monitored learning environment with verified instructors and age-appropriate content.
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
          onClick={handleNext}
          className="px-8 py-4 h-14 bg-[#EDEFEB] rounded-full border border-black/[0.08] hover:bg-[#E0E5DC] transition-colors"
        >
          <span className="text-lg font-bold text-[#163300] leading-[1.2] font-heading">
            Next
          </span>
        </button>
      </div>
    </div>
  );
}
