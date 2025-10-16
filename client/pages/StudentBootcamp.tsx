import { useNavigate } from "react-router-dom";

export default function StudentBootcamp() {
  const navigate = useNavigate();

  const handleStartOnboarding = () => {
    // Navigate to the next step in student onboarding
    navigate("/student-onboarding");
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
      <div className="flex-1 flex items-center justify-center rounded-[28px]">
        <div className="flex flex-col items-center gap-4 w-full max-w-[781px] px-4">
          {/* Main Heading */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-black text-center leading-[1.2]"
            style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}
          >
            Welcome to Your 8-Week Creative Bootcamp!
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl text-[#7B7B7B] text-center leading-[1.5] tracking-[-0.4px] opacity-80 line-clamp-2"
            style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}
          >
            Let's get you back to where the cute things live.
          </p>

          {/* Seats Badge */}
          <div className="flex px-6 py-3 flex-col justify-center items-center gap-2.5 rounded-full bg-[#9FE870]/30">
            <span 
              className="text-[#163300] text-2xl font-semibold leading-[1.5]"
              style={{ fontFamily: 'Random Grotesque Standard Semibold, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              12/30 seats left
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex w-full p-12 justify-end items-center gap-2.5 rounded-[32px] bg-[#F7F7F7]">
        <button
          onClick={handleStartOnboarding}
          className="flex h-14 px-8 items-center gap-2 rounded-full bg-[#9FE870] hover:bg-[#8FD860] transition-colors"
        >
          <span className="text-[#163300] text-lg font-bold leading-[1.2]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
            Start Onboarding
          </span>
        </button>
      </div>
    </div>
  );
}
