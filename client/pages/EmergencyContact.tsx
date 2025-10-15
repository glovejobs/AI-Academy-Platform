import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, X } from "lucide-react";
import { OnboardingLayout } from "../components/onboarding/OnboardingLayout";

export default function EmergencyContact() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(true);

  const handleNext = () => {
    navigate("/child-login");
  };

  const handleBack = () => {
    navigate("/child-details");
  };

  return (
    <OnboardingLayout
      progress={40}
      footer={
        <div className="w-full bg-white rounded-[32px] border border-black/[0.08] p-6 sm:p-8 flex justify-between items-center">
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
      }
    >
      <div className="w-full bg-white rounded-[32px] border border-black/[0.08] p-8 sm:p-12 lg:p-16 mb-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-black leading-[1.2] mb-2 font-heading">
            Add an Emergency Contact
          </h1>
          <p className="text-base sm:text-lg text-[#404040] leading-[1.5] tracking-[-0.36px] font-body">
            For your child's safety, please provide a backup contact we can reach if needed."
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black/10 mb-12" />

        {/* Form Fields */}
        <div className="space-y-6 mb-12">
          {/* Contact Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-black leading-[1.5]">
              Contact Name
            </label>
            <div className="flex items-center gap-2 px-4 py-4 h-[53px] rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <input
                type="text"
                placeholder="e.g., Alex Johnson"
                className="flex-1 bg-transparent outline-none text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-6 tracking-[-0.16px]"
              />
            </div>
          </div>

          {/* Contact Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-black leading-[1.5]">
              Contact Phone
            </label>
            <div className="flex items-center gap-2 px-4 py-4 h-[53px] rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/6c270b03fdf4c426d84d7f861b008439be573134?width=42" 
                alt="Flag" 
                className="w-[21px] h-[21px] rounded-full"
              />
              <input
                type="tel"
                placeholder="(555) 555-5555"
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
    </OnboardingLayout>
  );
}
