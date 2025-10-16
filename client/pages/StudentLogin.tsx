import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeOff } from "lucide-react";

export default function StudentLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    navigate("/student-welcome");
  };

  const handleSignUp = () => {
    navigate("/student-signup");
  };

  const isFormValid = email && password;

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
              Welcome Back!
            </h1>
            <p className="text-base text-[#8C8C8C] leading-[1.5] tracking-[-0.32px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Create an Account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
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
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.6259 11.2139C20.6259 10.4225 20.5604 9.84497 20.4186 9.24609H11.1974V12.818H16.61C16.501 13.7057 15.9117 15.0425 14.6021 15.9408L14.5838 16.0603L17.4993 18.2738L17.7013 18.2936C19.5565 16.6145 20.6259 14.1441 20.6259 11.2139Z" fill="#4285F4"/>
                  <path d="M11.1968 20.6248C13.8485 20.6248 16.0747 19.7692 17.7007 18.2934L14.6015 15.9405C13.7722 16.5073 12.659 16.903 11.1968 16.903C8.59958 16.903 6.39524 15.224 5.60945 12.9033L5.49427 12.9129L2.46262 15.2122L2.42297 15.3202C4.03803 18.4644 7.35548 20.6248 11.1968 20.6248Z" fill="#34A853"/>
                  <path d="M5.61006 12.9038C5.40272 12.305 5.28273 11.6632 5.28273 11.0002C5.28273 10.3371 5.40272 9.69549 5.59915 9.09661L5.59366 8.96906L2.524 6.63281L2.42357 6.67963C1.75792 7.98437 1.37598 9.44953 1.37598 11.0002C1.37598 12.5509 1.75792 14.016 2.42357 15.3207L5.61006 12.9038Z" fill="#FBBC05"/>
                  <path d="M11.1968 5.09664C13.041 5.09664 14.2851 5.87733 14.9944 6.52974L17.7662 3.8775C16.0639 2.32681 13.8486 1.375 11.1968 1.375C7.35551 1.375 4.03804 3.53526 2.42297 6.6794L5.59856 9.09638C6.39526 6.77569 8.59961 5.09664 11.1968 5.09664Z" fill="#EB4335"/>
                </svg>
                <span className="text-base font-bold text-[#0D0D12] text-center leading-[1.5] tracking-[0.32px]" style={{ fontFamily: 'Inter Tight, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Google
                </span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 flex-1 h-14 px-6 rounded-full border border-black/10"
              >
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.79745 3L10.3262 12.9282L2.75 21H4.45523L11.0883 13.9328L16.4474 21H22.25L14.2975 10.5135L21.3494 3H19.6442L13.5357 9.50852L8.6 3H2.79745ZM5.30506 4.23896H7.97073L19.7421 19.7614H17.0764L5.30506 4.23896Z" fill="#010101"/>
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
                Login
              </span>
            </button>

            {/* Sign Up Link */}
            <p className="text-base leading-[1.5] tracking-[-0.32px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
              <span className="text-[#8C8C8C]">Don't have an account? </span>
              <button
                type="button"
                onClick={handleSignUp}
                className="text-[#0A4D39] font-bold hover:underline"
              >
                Sign up
              </button>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex flex-1 rounded-[32px] overflow-hidden relative bg-[#0A4D39]">
        <svg className="absolute right-[-57px] top-[347px] w-[824px] h-[299px] stroke-[#CFD1D3] opacity-25" viewBox="0 0 768 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-5.5 1H-57V50.75M-5.5 1V50.75M-5.5 1H46M-5.5 50.75H-57M-5.5 50.75V100.5M-5.5 50.75H46M-57 50.75V100.5M-5.5 100.5H-57M-5.5 100.5V150.25M-5.5 100.5H46M-57 100.5V150.25M-5.5 150.25H-57M-5.5 150.25V200M-5.5 150.25H46M-57 150.25V200M-5.5 200H-57M-5.5 200V249.75M-5.5 200H46M-57 200V249.75M-5.5 249.75H-57M-5.5 249.75V299.5M-5.5 249.75H46M-57 249.75V299.5H-5.5M-5.5 299.5H46M46 1V50.75M46 1H97.5M46 50.75V100.5M46 50.75H97.5M46 100.5V150.25M46 100.5H97.5M46 150.25V200M46 150.25H97.5M46 200V249.75M46 200H97.5M46 249.75V299.5M46 249.75H97.5M46 299.5H97.5M97.5 1V50.75M97.5 1H149M97.5 50.75V100.5M97.5 50.75H149M97.5 100.5V150.25M97.5 100.5H149M97.5 150.25V200M97.5 150.25H149M97.5 200V249.75M97.5 200H149M97.5 249.75V299.5M97.5 249.75H149M97.5 299.5H149M149 1V50.75M149 1H200.5M149 50.75V100.5M149 50.75H200.5M149 100.5V150.25M149 100.5H200.5M149 150.25V200M149 150.25H200.5M149 200V249.75M149 200H200.5M149 249.75V299.5M149 249.75H200.5M149 299.5H200.5M200.5 1V50.75M200.5 1H252M200.5 50.75V100.5M200.5 50.75H252M200.5 100.5V150.25M200.5 100.5H252M200.5 150.25V200M200.5 150.25H252M200.5 200V249.75M200.5 200H252M200.5 249.75V299.5M200.5 249.75H252M200.5 299.5H252M252 1V50.75M252 1H303.5M252 50.75V100.5M252 50.75H303.5M252 100.5V150.25M252 100.5H303.5M252 150.25V200M252 150.25H303.5M252 200V249.75M252 200H303.5M252 249.75V299.5M252 249.75H303.5M252 299.5H303.5M303.5 1V50.75M303.5 1H355M303.5 50.75V100.5M303.5 50.75H355M303.5 100.5V150.25M303.5 100.5H355M303.5 150.25V200M303.5 150.25H355M303.5 200V249.75M303.5 200H355M303.5 249.75V299.5M303.5 249.75H355M303.5 299.5H355M355 1V50.75M355 1H406.5M355 50.75V100.5M355 50.75H406.5M355 100.5V150.25M355 100.5H406.5M355 150.25V200M355 150.25H406.5M355 200V249.75M355 200H406.5M355 249.75V299.5M355 249.75H406.5M355 299.5H406.5M406.5 1V50.75M406.5 1H458M406.5 50.75V100.5M406.5 50.75H458M406.5 100.5V150.25M406.5 100.5H458M406.5 150.25V200M406.5 150.25H458M406.5 200V249.75M406.5 200H458M406.5 249.75V299.5M406.5 249.75H458M406.5 299.5H458M458 1V50.75M458 1H509.5M458 50.75V100.5M458 50.75H509.5M458 100.5V150.25M458 100.5H509.5M458 150.25V200M458 150.25H509.5M458 200V249.75M458 200H509.5M458 249.75V299.5M458 249.75H509.5M458 299.5H509.5M509.5 1V50.75M509.5 1H561M509.5 50.75V100.5M509.5 50.75H561M509.5 100.5V150.25M509.5 100.5H561M509.5 150.25V200M509.5 150.25H561M509.5 200V249.75M509.5 200H561M509.5 249.75V299.5M509.5 249.75H561M509.5 299.5H561M561 1V50.75M561 1H612.5M561 50.75V100.5M561 50.75H612.5M561 100.5V150.25M561 100.5H612.5M561 150.25V200M561 150.25H612.5M561 200V249.75M561 200H612.5M561 249.75V299.5M561 249.75H612.5M561 299.5H612.5M612.5 1V50.75M612.5 1H664M612.5 50.75V100.5M612.5 50.75H664M612.5 100.5V150.25M612.5 100.5H664M612.5 150.25V200M612.5 150.25H664M612.5 200V249.75M612.5 200H664M612.5 249.75V299.5M612.5 249.75H664M612.5 299.5H664M664 1V50.75M664 1H715.5M664 50.75V100.5M664 50.75H715.5M664 100.5V150.25M664 100.5H715.5M664 150.25V200M664 150.25H715.5M664 200V249.75M664 200H715.5M664 249.75V299.5M664 249.75H715.5M664 299.5H715.5M715.5 1V50.75M715.5 1H767V50.75M715.5 50.75V100.5M715.5 50.75H767M715.5 100.5V150.25M715.5 100.5H767M715.5 150.25V200M715.5 150.25H767M715.5 200V249.75M715.5 200H767M715.5 249.75V299.5M715.5 249.75H767M715.5 299.5H767V249.75M767 50.75V100.5M767 100.5V150.25M767 150.25V200M767 200V249.75" stroke="url(#paint0_radial)" strokeOpacity="0.25"/>
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(355 150.25) rotate(90) scale(149.25 412)">
              <stop stopColor="#CFD1D3"/>
              <stop offset="1" stopColor="#CFD1D3" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>

        <svg className="absolute left-[-227px] top-[-126px] w-[1153px] h-[507px] rotate-[53.466deg] stroke-[#36DD50] stroke-2" viewBox="0 0 676 992" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-18.4154 21.4942C-18.4154 21.4942 284.47 -56.9226 320.794 71.9866C358.024 204.111 29.415 144.255 38.3607 281.232C48.7622 440.503 426.994 182.562 442.614 341.406C456.431 481.903 117.192 419.826 152.146 556.605C189.549 702.966 454.855 385.463 536.458 512.59C622.507 646.643 172.773 716.699 282.722 831.964C385.555 939.768 515.67 606.314 637.594 691.936C780.628 792.382 459.373 1102.47 459.373 1102.47" stroke="#36DD50" strokeWidth="2"/>
        </svg>

        <svg className="absolute right-[615px] top-[128px]" width="58" height="49" viewBox="0 0 58 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.0216 18.9999C25.7676 21.9606 23.263 24.3585 20.1688 37.9997C17.0746 24.3585 14.57 21.9606 0.315918 18.9999C14.57 16.0392 17.0746 13.6412 20.1688 0C23.263 13.6412 25.7676 16.0392 40.0216 18.9999Z" fill="#F6D162"/>
          <path d="M57.2427 35.9855C48.2007 37.8614 46.6111 39.3867 44.6489 48.0404C42.6868 39.3867 41.0972 37.8655 32.0552 35.9855C41.0972 34.1096 42.6868 32.5844 44.6489 23.9307C46.6111 32.5844 48.2007 34.1055 57.2427 35.9855Z" fill="#F6D162"/>
        </svg>

        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/2b75724c4d911b3afd298e0d482ef0eba0867527?width=1320" 
          alt="Student" 
          className="absolute left-[-51px] top-[20px] w-[660px] h-[371px] object-cover"
          style={{ transform: 'rotate(33.255deg)' }}
        />

        <svg className="absolute right-[672px] top-[164px]" width="29" height="33" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.8301 26.1901C16.9008 21.9079 13.775 22.7256 4.0574 32.6659C9.3007 19.7916 8.80481 16.5989 0.122577 7.36494C12.0519 11.6472 15.1777 10.8294 24.8953 0.889146C19.6519 13.7635 20.1479 16.9562 28.8301 26.1901Z" fill="#F6D162"/>
        </svg>
      </div>
    </div>
  );
}
