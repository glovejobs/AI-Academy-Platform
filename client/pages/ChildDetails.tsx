import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, X } from "lucide-react";
import { OnboardingLayout } from "../components/onboarding/OnboardingLayout";

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
    <OnboardingLayout
      progress={20}
      footer={
        <div className="w-full bg-white rounded-[32px] border border-black/[0.08] p-2 sm:p-3 flex justify-between items-center">
          <button
            onClick={handleBack}
            className="text-sm sm:text-base font-bold text-[#163300] leading-[1.2] font-heading underline hover:opacity-80 transition-opacity"
          >
            Go Back
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 h-11 bg-[#EDEFEB] rounded-full border border-black/[0.08] hover:bg-[#E0E5DC] transition-colors"
          >
            <span className="text-sm sm:text-base font-bold text-[#163300] leading-[1.2] font-heading">
              Next
            </span>
          </button>
        </div>
      }
    >
      <div className="w-full bg-white rounded-[32px] border border-black/[0.08] p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-black leading-[1.2] mb-1 font-heading">
            Add Your Child's Details
          </h1>
          <p className="text-sm sm:text-base text-[#404040] leading-[1.4] tracking-[-0.32px] font-body">
            Tell us about your child so we can personalize their bootcamp experience
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black/10 mb-6" />

        {/* Form Fields */}
        <div className="space-y-4 mb-4">
          {/* Child's Full Name */}
          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-semibold text-black leading-[1.3]">
              Child's Full Name
            </label>
            <div className="flex items-center gap-2 px-3 py-2.5 h-10 rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <input
                type="text"
                placeholder="e.g., Alex Johnson"
                className="flex-1 bg-transparent outline-none text-sm text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-5 tracking-[-0.16px]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-semibold text-black leading-[1.3]">
              Email
            </label>
            <div className="flex items-center gap-2 px-3 py-2.5 h-10 rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <input
                type="email"
                placeholder="example@email.com"
                className="flex-1 bg-transparent outline-none text-sm text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-5 tracking-[-0.16px]"
              />
            </div>
          </div>

          {/* Age */}
          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-semibold text-black leading-[1.3]">
              Age
            </label>
            <div className="flex items-center gap-2 px-3 py-2.5 h-10 rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <input
                type="text"
                placeholder="e.g., 14 years old"
                className="flex-1 bg-transparent outline-none text-sm text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-5 tracking-[-0.16px]"
              />
            </div>
          </div>

          {/* Grade */}
          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-semibold text-black leading-[1.3]">
              Grade
            </label>
            <div className="flex items-center gap-2 px-3 py-2.5 h-10 rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <input
                type="text"
                placeholder="e.g., 10th grade"
                className="flex-1 bg-transparent outline-none text-sm text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-5 tracking-[-0.16px]"
              />
            </div>
          </div>
        </div>

        {/* Safety First Alert */}
        {showAlert && (
          <div className="flex items-start gap-2 p-3 rounded-lg border border-black/[0.08] bg-[#F6FDF2] relative">
            <AlertCircle className="w-4 h-4 text-[#163300] flex-shrink-0 mt-0.5" strokeWidth={1.67} />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-[#163300] leading-[1.3] mb-0.5">
                Safety First
              </h3>
              <p className="text-xs text-[#163300] leading-[1.3] tracking-[-0.32px] font-body">
                We maintain a secure, monitored learning environment with verified instructors and age-appropriate content.
              </p>
            </div>
            <button
              onClick={() => setShowAlert(false)}
              className="flex items-center justify-center w-6 h-6 rounded-lg hover:bg-black/5 transition-colors flex-shrink-0 -mt-1 -mr-1"
              aria-label="Close alert"
            >
              <X className="w-4 h-4 text-[#163300]" strokeWidth={1.67} />
            </button>
          </div>
        )}
      </div>
    </OnboardingLayout>
  );
}
