import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, X } from "lucide-react";
import { OnboardingLayout } from "../components/onboarding/OnboardingLayout";

export default function Payment() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(true);

  const handlePayment = () => {
    navigate("/complete");
  };

  const handleBack = () => {
    navigate("/pricing");
  };

  return (
    <OnboardingLayout
      progress={100}
      footer={
        <div className="w-full bg-white rounded-[32px] border border-black/[0.08] p-2 sm:p-3 flex justify-between items-center">
          <button
            onClick={handleBack}
            className="text-sm sm:text-base font-bold text-[#163300] leading-[1.2] font-heading underline hover:opacity-80 transition-opacity"
          >
            Go Back
          </button>
          <button
            onClick={handlePayment}
            className="px-6 py-2 h-11 bg-[#EDEFEB] rounded-full border border-black/[0.08] hover:bg-[#E0E5DC] transition-colors"
          >
            <span className="text-sm sm:text-base font-bold text-[#163300] leading-[1.2] font-heading">
              Make Payment
            </span>
          </button>
        </div>
      }
    >
      <div className="w-full bg-white rounded-[32px] border border-black/[0.08] p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-black leading-[1.2] mb-1 font-heading">
            Payment Information
          </h1>
          <p className="text-sm sm:text-base text-[#404040] leading-[1.4] tracking-[-0.32px] font-body">
            Join our design bootcamp and watch them thrive
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black/10 mb-6" />

        {/* Payment Fields */}
        <div className="space-y-4 mb-4">
          {/* Card Number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-black leading-[1.5]">
              Card Number
            </label>
            <div className="flex items-center gap-2 px-4 py-4 h-[53px] rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <input
                type="text"
                placeholder="1234 4562 7890 2345"
                className="flex-1 bg-transparent outline-none text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-6 tracking-[-0.16px]"
              />
            </div>
          </div>

          {/* Expiry, CVC, Zip Code */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-black leading-[1.5]">
                Expiry Date
              </label>
              <div className="flex items-center gap-2 px-4 py-4 h-[53px] rounded-full border border-black/[0.08] bg-[#FAFAFA]">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="flex-1 bg-transparent outline-none text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-6 tracking-[-0.16px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-black leading-[1.5]">
                CVC
              </label>
              <div className="flex items-center gap-2 px-4 py-4 h-[53px] rounded-full border border-black/[0.08] bg-[#FAFAFA]">
                <input
                  type="text"
                  placeholder="123"
                  className="flex-1 bg-transparent outline-none text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-6 tracking-[-0.16px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-black leading-[1.5]">
                Zip Code
              </label>
              <div className="flex items-center gap-2 px-4 py-4 h-[53px] rounded-full border border-black/[0.08] bg-[#FAFAFA]">
                <input
                  type="text"
                  placeholder="900001"
                  className="flex-1 bg-transparent outline-none text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-6 tracking-[-0.16px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="p-8 rounded-[32px] bg-[#F7F7F7] space-y-3 mb-12">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-[#121511] leading-[1.5] font-heading">
              Subscription
            </span>
            <span className="text-[28px] font-bold text-[#121511] leading-[1.5] font-heading">
              $299
            </span>
          </div>
          
          <div className="w-full h-[1px] bg-black/10" />
          
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-[#121511] leading-[1.5] font-heading">
              Total Today
            </span>
            <span className="text-[56px] font-bold text-[#121511] leading-[1.2] font-heading">
              $299.00
            </span>
          </div>
        </div>

        {/* Secure Payment Alert */}
        {showAlert && (
          <div className="flex items-start gap-3 p-4 rounded-xl border border-black/[0.08] bg-[#F6FDF2] relative">
            <AlertCircle className="w-5 h-5 text-[#163300] flex-shrink-0 mt-0.5" strokeWidth={1.67} />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#163300] leading-[1.5] mb-1">
                Secure Payment
              </h3>
              <p className="text-base text-[#163300] leading-[1.5] tracking-[-0.32px] font-body">
                 Your payment information is encrypted and processed through Greenlight's secure platform.
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
