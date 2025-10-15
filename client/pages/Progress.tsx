import { useNavigate } from "react-router-dom";
import { Target, Zap, Calendar, Award, Rocket, Palette } from "lucide-react";

export default function Progress() {
  const navigate = useNavigate();

  const navItems = [
    { label: "Dashboard", path: "/dashboard", active: false },
    { label: "My Child/Progress", path: "/progress", active: true, icon: "child" },
    { label: "Schedule", path: "/schedule", active: false },
    { label: "Messages", path: "#", active: false },
    { label: "Safety Center", path: "#", active: false },
    { label: "Settings", path: "#", active: false },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center gap-6 p-3 sm:p-6 bg-[#1E3006] rounded-[32px]">
      {/* Header */}
      <div className="flex justify-between items-center w-full px-4 sm:px-16">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/9bc7f4c3957329926c45ba3e1d6104debeb9620d?width=112" 
          alt="Logo" 
          className="w-14 h-14"
        />
        
        <div className="flex items-start gap-2 flex-wrap justify-center">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => item.path !== "#" && navigate(item.path)}
              className={`flex h-12 px-4 sm:px-6 items-center gap-3 rounded-full transition-colors ${
                item.active 
                  ? "bg-[#B1FA63]" 
                  : "hover:bg-white/10"
              }`}
            >
              {item.icon === "child" && item.active && (
                <svg className="w-5 h-5" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.41675 9.16675C2.72639 9.16675 2.16675 8.60708 2.16675 7.91675C2.16675 7.22639 2.72639 6.66675 3.41675 6.66675H4.04344C4.78351 3.79137 7.39368 1.66675 10.5001 1.66675C13.6065 1.66675 16.2167 3.79137 16.9567 6.66675H17.1667C17.8571 6.66675 18.4167 7.22639 18.4167 7.91675C18.4167 8.60708 17.8571 9.16675 17.1667 9.16675H17.1152C16.7051 12.4553 13.8997 15.0001 10.5001 15.0001C7.1004 15.0001 4.29507 12.4553 3.88499 9.16675H3.41675Z" stroke="#163300" strokeWidth="1.25" strokeLinejoin="round"/>
                  <path d="M4.25 6.66675H5.5C8.26142 6.66675 10.5 4.42817 10.5 1.66675" stroke="#163300" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.75 6.66675H15.5C12.7386 6.66675 10.5 4.42817 10.5 1.66675" stroke="#163300" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.5001 12.5001C10.9603 12.5001 11.3334 12.127 11.3334 11.6667H9.66675C9.66675 12.127 10.0398 12.5001 10.5001 12.5001Z" stroke="#163300" strokeWidth="1.25" strokeLinejoin="round"/>
                  <path d="M15.5 18.3333C15.5 16.8399 14.8453 15.4994 13.8073 14.5833M5.5 18.3333C5.5 16.8399 6.15469 15.4994 7.19272 14.5833" stroke="#163300" strokeWidth="1.25" strokeLinecap="round"/>
                  <path d="M8 8.33325V8.34159" stroke="#163300" strokeWidth="1.66667" strokeLinecap="round"/>
                  <path d="M13 8.33325V8.34159" stroke="#163300" strokeWidth="1.66667" strokeLinecap="round"/>
                </svg>
              )}
              <span className={`font-satoshi text-base leading-6 tracking-[-0.16px] ${
                item.active 
                  ? "text-[#163300] font-bold" 
                  : "text-[#FAFAFA] opacity-60"
              }`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/abdabce54cfd8c3bd7a3c5152ff3bc7da219a0e7?width=80" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:flex flex-col items-start">
            <div className="text-white font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">Dave Alex</div>
            <div className="text-white/70 font-dm-sans text-[13px] leading-4 tracking-[-0.13px]">Parent</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-8 w-full px-4 sm:px-16 py-8 rounded-[32px] bg-white">
        {/* Page Header */}
        <div className="flex flex-col items-start gap-5 w-full">
          <div className="flex items-start gap-4 w-full">
            <div className="flex flex-col items-start gap-1 flex-1">
              <h1 className="text-black font-random-grotesque-bold text-[30px] font-bold leading-[34px] tracking-[-0.75px]">
                Your child's Progress Report
              </h1>
              <p className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">
                Detailed learning analytics and achievements
              </p>
            </div>
          </div>
          <div className="h-px w-full bg-black/5"></div>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col items-start gap-6 w-full p-4 rounded-[32px] border border-black/5 bg-[#FAFAFA]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {/* Bootcamp Progress */}
            <div className="flex flex-col items-start gap-6 p-4 rounded-[20px] border border-black/5 bg-white">
              <div className="flex w-16 h-16 justify-center items-center rounded-full bg-[#F7F7F7]">
                <Target className="w-5 h-5 text-[#404040]" />
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">
                  Bootcamp Progress
                </div>
                <div className="text-black font-random-grotesque-bold text-[64px] font-bold leading-[85%]">
                  1/8
                </div>
              </div>
            </div>

            {/* Lessons Completed */}
            <div className="flex flex-col items-start gap-6 p-4 rounded-[20px] border border-black/5 bg-white">
              <div className="flex w-16 h-16 justify-center items-center rounded-full bg-[#F7F7F7]">
                <Zap className="w-5 h-5 text-[#404040]" />
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">
                  Lessons Completed
                </div>
                <div className="text-black font-random-grotesque-bold text-[64px] font-bold leading-[85%]">
                  0
                </div>
              </div>
            </div>

            {/* Total Learning Time */}
            <div className="flex flex-col items-start gap-6 p-4 rounded-[20px] border border-black/5 bg-white">
              <div className="flex w-16 h-16 justify-center items-center rounded-full bg-[#F7F7F7]">
                <Calendar className="w-5 h-5 text-[#404040]" />
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">
                  Total Learning Time
                </div>
                <div className="text-black font-random-grotesque-bold text-[64px] font-bold leading-[85%]">
                  0
                </div>
              </div>
            </div>

            {/* Badges Earned */}
            <div className="flex flex-col items-start gap-6 p-4 rounded-[20px] border border-black/5 bg-white">
              <div className="flex w-16 h-16 justify-center items-center rounded-full bg-[#F7F7F7]">
                <Award className="w-5 h-5 text-[#404040]" />
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">
                  Badges Earned
                </div>
                <div className="text-black font-random-grotesque-bold text-[64px] font-bold leading-[85%]">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Recent Learning Sessions */}
          <div className="flex flex-col items-start gap-6 p-6 sm:p-4 rounded-[32px] border border-black/5 bg-[#FAFAFA]">
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex items-start gap-4 w-full">
                <div className="flex-1">
                  <h3 className="text-black font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">
                    Recent Learning Sessions
                  </h3>
                </div>
              </div>
              <div className="h-px w-full bg-[#EAECF0]"></div>
            </div>

            <div className="flex min-h-[400px] p-6 justify-center items-center w-full rounded-3xl border border-[rgba(230,234,241,0.6)] bg-white">
              <div className="flex flex-col items-center gap-8 max-w-[352px]">
                <div className="flex flex-col items-center gap-5">
                  <div className="flex w-14 h-14 justify-center items-center rounded-[36px] bg-black/20 backdrop-blur-sm">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-[#121511] text-center font-random-grotesque-semibold text-2xl leading-[150%]">
                      No challenge yet!
                    </div>
                    <div className="text-[#8C8C8C] text-center font-plus-jakarta text-lg leading-[150%] tracking-[-0.36px]">
                      Your next creative mission will appear here once the new week begins.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Badges */}
          <div className="flex flex-col items-start gap-6 p-6 sm:p-4 rounded-[32px] border border-black/5 bg-[#FAFAFA]">
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex items-start gap-4 w-full">
                <div className="flex-1">
                  <h3 className="text-black font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">
                    Recent Badges
                  </h3>
                </div>
              </div>
              <div className="h-px w-full bg-[#EAECF0]"></div>
            </div>

            <div className="flex min-h-[400px] p-6 justify-center items-center w-full rounded-3xl border border-[rgba(230,234,241,0.6)] bg-white">
              <div className="flex flex-col items-center gap-8 max-w-[352px]">
                <div className="flex flex-col items-center gap-5">
                  <div className="flex w-14 h-14 justify-center items-center rounded-[36px] bg-black/20 backdrop-blur-sm">
                    <Palette className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-[#121511] text-center font-random-grotesque-semibold text-2xl leading-[150%]">
                      No projects yet!
                    </div>
                    <div className="text-[#8C8C8C] text-center font-plus-jakarta text-lg leading-[150%] tracking-[-0.36px]">
                      Start your first project to fill this space with your amazing work.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="flex flex-col items-start gap-6 w-full p-4 rounded-[32px] border border-black/5 bg-[#FAFAFA]">
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex items-start gap-4 w-full">
              <div className="flex-1">
                <h3 className="text-black font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">
                  Performance Insights
                </h3>
              </div>
            </div>
            <div className="h-px w-full bg-[#EAECF0]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {/* Average Session Length */}
            <div className="flex flex-col items-start gap-6 p-4 rounded-[20px] border border-black/5 bg-white">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">
                  Average Session Length
                </div>
                <div className="text-black font-random-grotesque-bold text-[64px] font-bold leading-[85%]">
                  0 min
                </div>
                <div className="text-[#8C8C8C] font-satoshi text-base leading-6 tracking-[-0.16px]">
                  Consistent engagement
                </div>
              </div>
            </div>

            {/* Learning Streak */}
            <div className="flex flex-col items-start gap-6 p-4 rounded-[20px] border border-black/5 bg-white">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">
                  Learning Streak
                </div>
                <div className="text-black font-random-grotesque-bold text-[64px] font-bold leading-[85%]">
                  0 days
                </div>
                <div className="text-[#8C8C8C] font-satoshi text-base leading-6 tracking-[-0.16px]">
                  Keep it going! 🔥
                </div>
              </div>
            </div>

            {/* Total XP Earned */}
            <div className="flex flex-col items-start gap-6 p-4 rounded-[20px] border border-black/5 bg-white">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">
                  Total XP Earned
                </div>
                <div className="text-black font-random-grotesque-bold text-[64px] font-bold leading-[85%]">
                  0
                </div>
                <div className="text-[#8C8C8C] font-satoshi text-base leading-6 tracking-[-0.16px]">
                  Great progress!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
