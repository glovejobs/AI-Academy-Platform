import { useNavigate } from "react-router-dom";

export default function StudentWelcome() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/student-bootcamp");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-8 gap-4">
      {/* Logo */}
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/7db5fae004e1db186d4348eeae009350c277e0e7?width=72" 
        alt="Logo" 
        className="w-9 h-9"
      />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center rounded-[28px] relative">
        {/* Mascot Character */}
        <div className="flex flex-col items-center gap-6 relative">
          {/* Speech Bubble */}
          <div className="relative">
            <div className="flex items-start mb-2">
              {/* Bubble tail (left side) */}
              <div className="flex flex-col justify-center items-end">
                <div className="w-[19.653px] h-[28.445px] rounded-tl-[51.717px] bg-black/[0.08]" />
                <div className="w-[19.653px] flex-1 bg-black/[0.08]" />
                <div className="relative w-[27.928px] h-[28.444px]">
                  <div className="w-5 h-7 rounded-tl-[51.717px] absolute left-2 top-0" style={{ background: 'rgba(22, 51, 0, 0.08)' }} />
                </div>
              </div>

              {/* Bubble content */}
              <div className="flex w-[236px] px-4 py-[14.505px] items-start gap-[5.172px] bg-black/[0.08]">
                <p className="flex-1 text-[#163300] text-xl leading-[1.5]" style={{ fontFamily: 'Random Grotesque Standard Semibold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Hi, my name is Nova, i will be helping you out with your onboarding
                </p>
              </div>

              {/* Bubble tail (right side) */}
              <div className="flex flex-col items-start">
                <div className="w-[19.653px] h-[28.445px] rounded-tl-[51.717px] bg-black/[0.08]" />
                <div className="w-[19.653px] flex-1 bg-black/[0.08]" />
                <div className="w-[19.653px] h-[28.445px] rounded-tl-[51.717px] bg-black/[0.08]" />
              </div>
            </div>
          </div>

          {/* Mascot Image */}
          <div className="flex justify-center items-center w-[427px] h-[427px]">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/89673a710721d408a2c306fb793d48d9ba64d461?width=839" 
              alt="Nova mascot" 
              className="w-[419px] h-[414px]"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex w-full p-12 justify-end items-center gap-2.5 rounded-[32px] bg-[#F7F7F7]">
        <button
          onClick={handleGetStarted}
          className="flex h-14 px-8 items-center gap-2 rounded-full bg-[#9FE870] hover:bg-[#8FD860] transition-colors"
        >
          <span className="text-[#163300] text-lg font-bold leading-[1.2]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
            Get Started
          </span>
        </button>
      </div>
    </div>
  );
}
