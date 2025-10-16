import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeOff } from "lucide-react";

export default function StudentSignup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    navigate("/student-welcome");
  };

  const handleSignIn = () => {
    navigate("/student-login");
  };

  const isFormValid = fullName && email && password;

  return (
    <div className="min-h-screen bg-white flex p-4">
      {/* Left Side - Form */}
      <div className="w-full lg:w-[587px] flex-shrink-0 rounded-[28px] relative flex items-center justify-center">
        <div className="w-full max-w-[440px] flex flex-col gap-8 py-12">
          {/* Logo */}
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/7db5fae004e1db186d4348eeae009350c277e0e7?width=72" 
            alt="Logo" 
            className="w-9 h-9 absolute left-8 top-8"
          />

          {/* Header */}
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-bold text-black leading-[1.2]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Create an Account
            </h1>
            <p className="text-base text-[#8C8C8C] leading-[1.5] tracking-[-0.32px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Create an Account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-black leading-[1.5] tracking-[-0.24px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Full Name
                </label>
                <div className="flex items-center gap-2 px-4 h-[53px] rounded-full border border-black/[0.05] bg-[#F7F7F7]">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g john doe"
                    className="flex-1 bg-transparent outline-none text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-[1.5] tracking-[-0.32px]"
                    style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-black leading-[1.5] tracking-[-0.24px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Email
                </label>
                <div className="flex items-center gap-2 px-4 h-[53px] rounded-full border border-black/[0.05] bg-[#F7F7F7]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Name@example@gmail"
                    className="flex-1 bg-transparent outline-none text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-[1.5] tracking-[-0.32px]"
                    style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-black leading-[1.5] tracking-[-0.24px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Password
                </label>
                <div className="flex items-center gap-2 px-4 h-[53px] rounded-full border border-black/[0.05] bg-[#F7F7F7]">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="AZBDTWRYGHTDAE123"
                    className="flex-1 bg-transparent outline-none text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] leading-[1.5] tracking-[-0.32px]"
                    style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}
                  />
                  <EyeOff className="w-4 h-4 text-black" />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-2.5 h-[18px]">
              <div className="h-px flex-1 bg-black/10" />
              <span className="text-xs text-black text-center leading-[1.5] tracking-[-0.24px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                OR
              </span>
              <div className="h-px flex-1 bg-black/10" />
            </div>

            {/* Social Buttons */}
            <div className="flex items-start gap-4 h-14">
              <button
                type="button"
                className="flex items-center justify-center gap-2 flex-1 h-14 px-6 rounded-full border border-black/10"
              >
                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.6259 11.7139C20.6259 10.9225 20.5604 10.345 20.4186 9.74609H11.1974V13.318H16.61C16.501 14.2057 15.9117 15.5425 14.6021 16.4408L14.5838 16.5603L17.4993 18.7738L17.7013 18.7936C19.5565 17.1145 20.6259 14.6441 20.6259 11.7139Z" fill="#4285F4"/>
                  <path d="M11.1968 21.1248C13.8485 21.1248 16.0747 20.2692 17.7007 18.7934L14.6015 16.4405C13.7722 17.0073 12.659 17.403 11.1968 17.403C8.59958 17.403 6.39524 15.724 5.60945 13.4033L5.49427 13.4129L2.46262 15.7122L2.42297 15.8202C4.03803 18.9644 7.35548 21.1248 11.1968 21.1248Z" fill="#34A853"/>
                  <path d="M5.61006 13.4038C5.40272 12.805 5.28273 12.1632 5.28273 11.5002C5.28273 10.8371 5.40272 10.1955 5.59915 9.59661L5.59366 9.46906L2.524 7.13281L2.42357 7.17963C1.75792 8.48437 1.37598 9.94953 1.37598 11.5002C1.37598 13.0509 1.75792 14.516 2.42357 15.8207L5.61006 13.4038Z" fill="#FBBC05"/>
                  <path d="M11.1968 5.59664C13.041 5.59664 14.2851 6.37733 14.9944 7.02974L17.7662 4.3775C16.0639 2.82681 13.8486 1.875 11.1968 1.875C7.35551 1.875 4.03804 4.03526 2.42297 7.1794L5.59856 9.59638C6.39526 7.27569 8.59961 5.59664 11.1968 5.59664Z" fill="#EB4335"/>
                </svg>
                <span className="text-base font-bold text-[#0D0D12] text-center leading-[1.5] tracking-[0.32px]" style={{ fontFamily: 'Inter Tight, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Google
                </span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 flex-1 h-14 px-6 rounded-full border border-black/10"
              >
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.79745 3.5L10.3262 13.4282L2.75 21.5H4.45523L11.0883 14.4328L16.4474 21.5H22.25L14.2975 11.0135L21.3494 3.5H19.6442L13.5357 10.0085L8.6 3.5H2.79745ZM5.30506 4.73896H7.97073L19.7421 20.2614H17.0764L5.30506 4.73896Z" fill="#010101"/>
                </svg>
                <span className="text-base font-bold text-[#0D0D12] text-center leading-[1.5] tracking-[0.32px]" style={{ fontFamily: 'Inter Tight, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Twitter
                </span>
              </button>
            </div>

            {/* Submit Button - Active state when form is valid */}
            <button
              type="submit"
              className={`h-14 px-8 rounded-full transition-all ${
                isFormValid
                  ? 'bg-[#9FE870] hover:bg-[#8FD860]'
                  : 'bg-[#EDEFEB] border border-black/[0.08]'
              }`}
            >
              <span className="text-lg font-bold text-[#163300] leading-[1.2]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Create Account
              </span>
            </button>

            {/* Sign In Link */}
            <p className="text-base leading-[1.5] tracking-[-0.32px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
              <span className="text-[#8C8C8C]">Already have an account? </span>
              <button
                type="button"
                onClick={handleSignIn}
                className="text-[#0A4D39] font-bold hover:underline"
              >
                Sign In
              </button>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex flex-1 rounded-[32px] overflow-hidden relative">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/13119dcbb0abd94300c660cdf83fe1dad0b6a7d3?width=1610" 
          alt="Student learning" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
