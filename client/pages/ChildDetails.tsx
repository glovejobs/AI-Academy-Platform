import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, X } from "lucide-react";

export default function ChildDetails() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(true);

  const handleNext = () => {
    navigate("/emergency-contact");
  };

  const handleBack = () => {
    navigate("/");
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

      {/* Progress Bar - 20% */}
      <div className="w-full max-w-[864px] flex items-center gap-3 mb-8">
        <div className="flex-1 h-2 bg-[#EAECF0] rounded-lg relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[20%] bg-[#0A4D39] rounded-lg" />
        </div>
        <span className="text-sm text-black font-normal tracking-tight">20%</span>
      </div>

      {/* Main Form Card */}
      <div className="w-full max-w-[864px] bg-white rounded-[32px] border border-black/[0.08] p-8 sm:p-12 lg:p-16 mb-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-black leading-[1.2] mb-2 font-heading">
            Add Your Child's Details
          </h1>
          <p className="text-base sm:text-lg text-[#404040] leading-[1.5] tracking-[-0.36px] font-body">
            Tell us about your child so we can personalize their bootcamp experience
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black/10 mb-12" />

        {/* Form Fields */}
        <div className="space-y-6 mb-12">
          {/* Child's Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-black leading-[1.5]">
              Child's Full Name
            </label>
            <div className="flex items-center gap-2 px-4 py-4 h-[53px] rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <input
                type="text"
                placeholder="e.g., Alex Johnson"
                className="flex-1 bg-transparent outline-none text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-6 tracking-[-0.16px]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-black leading-[1.5]">
              Email
            </label>
            <div className="flex items-center gap-2 px-4 py-4 h-[53px] rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <input
                type="email"
                placeholder="example@email.com"
                className="flex-1 bg-transparent outline-none text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-6 tracking-[-0.16px]"
              />
            </div>
          </div>

          {/* Age */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-black leading-[1.5]">
              Age
            </label>
            <div className="flex items-center gap-2 px-4 py-4 h-[53px] rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <input
                type="text"
                placeholder="e.g., 14 years old"
                className="flex-1 bg-transparent outline-none text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-6 tracking-[-0.16px]"
              />
            </div>
          </div>

          {/* Grade */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-black leading-[1.5]">
              Grade
            </label>
            <div className="flex items-center gap-2 px-4 py-4 h-[53px] rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <input
                type="text"
                placeholder="e.g., 10th grade"
                className="flex-1 bg-transparent outline-none text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-6 tracking-[-0.16px]"
              />
            </div>
          </div>
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
