import { useState } from "react";
import { AlertCircle, EyeOff, X } from "lucide-react";

export default function Index() {
  const [showAlert, setShowAlert] = useState(true);

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

      {/* Progress Bar */}
      <div className="w-full max-w-[864px] flex items-center gap-3 mb-8">
        <div className="flex-1 h-2 bg-[#EAECF0] rounded-lg relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[2.8%] bg-[#0A4D39] rounded-lg" />
        </div>
        <span className="text-sm text-black font-normal tracking-tight">0%</span>
      </div>

      {/* Main Form Card */}
      <div className="w-full max-w-[864px] bg-white rounded-[32px] border border-black/[0.08] p-8 sm:p-12 lg:p-16 mb-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-black leading-[1.2] mb-2 font-heading">
            Create Your Parent Account
          </h1>
          <p className="text-base sm:text-lg text-[#404040] leading-[1.5] tracking-[-0.36px] font-body">
            Start by setting up your account so we can keep you informed every step of the way.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black/10 mb-12" />

        {/* Form Fields */}
        <div className="space-y-6 mb-12">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#21231D] leading-[1.5] tracking-[-0.28px]">
              Full Name
            </label>
            <div className="flex items-center gap-2 px-4 py-4 h-[53px] rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <input
                type="text"
                placeholder="e.g, john doe"
                className="flex-1 bg-transparent outline-none text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-6 tracking-[-0.16px]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#21231D] leading-[1.5] tracking-[-0.28px]">
              Email
            </label>
            <div className="flex items-center gap-2 px-4 py-4 h-[53px] rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <input
                type="email"
                placeholder="name@exmaple.com"
                className="flex-1 bg-transparent outline-none text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-6 tracking-[-0.16px]"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-black leading-[1.5] tracking-[-0.28px]">
              Phone Number
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

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-black leading-[1.5] tracking-[-0.28px]">
              Password
            </label>
            <div className="flex items-center gap-2 px-4 py-4 h-[53px] rounded-full border border-black/[0.08] bg-[#FAFAFA]">
              <input
                type="password"
                placeholder="Enter your password"
                className="flex-1 bg-transparent outline-none text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-6 tracking-[-0.16px]"
              />
              <EyeOff className="w-4 h-4 text-black flex-shrink-0" />
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

      {/* Footer with Next Button */}
      <div className="w-full max-w-[864px] bg-white rounded-[32px] border border-black/[0.08] p-8 flex justify-end">
        <button className="px-8 py-4 h-14 bg-[#EDEFEB] rounded-full border border-black/[0.08] hover:bg-[#E0E5DC] transition-colors">
          <span className="text-lg font-bold text-[#163300] leading-[1.2] font-heading">
            Next
          </span>
        </button>
      </div>
    </div>
  );
}
