import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, EyeOff, X } from "lucide-react";
import { OnboardingLayout } from "../components/onboarding/OnboardingLayout";

export default function Index() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(true);

  const handleNext = () => {
    navigate("/child-details");
  };

  return (
    <OnboardingLayout
      progress={0}
      progressLabel="0%"
      progressFillWidth={2.8}
      footer={
        <div className="w-full bg-white rounded-[32px] border border-black/[0.08] p-2 sm:p-3 flex justify-end">
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
            Create Your Parent Account
          </h1>
          <p className="text-sm sm:text-base text-[#404040] leading-[1.4] tracking-[-0.32px] font-body">
            Start by setting up your account so we can keep you informed every step of the way.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black/10 mb-6" />

        {/* Form Fields */}
        <div className="space-y-4 mb-4">
          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-semibold text-[#21231D] leading-[1.3] tracking-[-0.28px]">
              Full Name
            </label>
            <div className="flex items-center gap-2 px-3 py-2.5 h-10 rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <input
                type="text"
                placeholder="e.g, john doe"
                className="flex-1 bg-transparent outline-none text-sm text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-5 tracking-[-0.16px]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-semibold text-[#21231D] leading-[1.3] tracking-[-0.28px]">
              Email
            </label>
            <div className="flex items-center gap-2 px-3 py-2.5 h-10 rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <input
                type="email"
                placeholder="name@exmaple.com"
                className="flex-1 bg-transparent outline-none text-sm text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-5 tracking-[-0.16px]"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-semibold text-black leading-[1.3] tracking-[-0.28px]">
              Phone Number
            </label>
            <div className="flex items-center gap-2 px-3 py-2.5 h-10 rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6c270b03fdf4c426d84d7f861b008439be573134?width=42"
                alt="Flag"
                className="w-4 h-4 rounded-full"
              />
              <input
                type="tel"
                placeholder="(555) 555-5555"
                className="flex-1 bg-transparent outline-none text-sm text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-5 tracking-[-0.16px]"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-semibold text-black leading-[1.3] tracking-[-0.28px]">
              Password
            </label>
            <div className="flex items-center gap-2 px-3 py-2.5 h-10 rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <input
                type="password"
                placeholder="Enter your password"
                className="flex-1 bg-transparent outline-none text-sm text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-5 tracking-[-0.16px]"
              />
              <EyeOff className="w-4 h-4 text-black flex-shrink-0" />
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
