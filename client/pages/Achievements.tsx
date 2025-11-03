import { useNavigate, useLocation } from "react-router-dom";
import { Home, Backpack, Lightbulb, Sparkles, Trophy, Calendar, Folder } from "lucide-react";

export default function Achievements() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, path: "/student-dashboard" },
    { id: "bootcamp", label: "My Bootcamp", icon: Backpack, path: "/student-bootcamp" },
    { id: "projects", label: "Projects", icon: Lightbulb, path: "/student-projects" },
    { id: "ai-mentor", label: "Ai Mentor", icon: Sparkles, path: "/ai-mentor" },
    { id: "achievements", label: "Achievements", icon: Trophy, path: "/achievements" },
    { id: "schedule", label: "Schedule", icon: Calendar, path: "/schedule" },
    { id: "portfolio", label: "Portfolio", icon: Folder, path: "/portfolio" },
  ];

  const isActive = (itemPath: string) => location.pathname === itemPath;

  return (
    <div className="min-h-screen bg-[#1E3006] p-3 sm:p-6">
      {/* Header Navigation */}
      <div className="max-w-[1440px] mx-auto mb-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 px-8 lg:px-16">
          {/* Logo */}
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9bc7f4c3957329926c45ba3e1d6104debeb9620d?width=112" 
            alt="Logo" 
            className="w-14 h-14"
          />

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {navItems.map((item) => {
              const active = isActive(item.path);
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-3 h-12 px-4 sm:px-6 rounded-full text-sm sm:text-base transition-all ${
                    active
                      ? "bg-[rgba(159,232,112,0.2)] text-[#B1FA63] font-bold"
                      : "text-[#EDEFEB] opacity-60 hover:opacity-100 px-2"
                  }`}
                  style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.25} />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/fe1eccc8b53d8aa317a3a4cd190f829ca8899be8?width=80" 
              alt="Mimi Alex" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="hidden sm:block">
              <div className="text-[#1E3006] font-bold text-base leading-6" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>Mimi Alex</div>
              <div className="text-[#1E3006] text-[13px] leading-4" style={{ fontFamily: 'DM Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>Designer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-3xl p-8 sm:p-12 lg:p-16">
        {/* Page Header */}
        <div className="flex flex-col gap-5 mb-8">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <h1 className="text-[30px] font-bold leading-[34px] tracking-[-0.75px] text-black" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Achievements 🏅
              </h1>
              <p className="text-base text-[#404040] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Track your progress and celebrate your wins!
              </p>
            </div>
          </div>
          <div className="h-px w-full bg-black/[0.1]"></div>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col sm:flex-row items-start gap-4 p-6 sm:p-4 rounded-[32px] border border-black/[0.05] bg-[#F9FAF9] mb-8">
          <div className="flex flex-col gap-6 flex-1 p-4 rounded-[20px] border border-black/[0.05] bg-gradient-to-r from-[#EE7A13] to-[#FFB800]">
            <div className="flex w-16 h-16 items-center justify-center rounded-full bg-white/20">
              <Trophy className="w-5 h-5 text-[#FAFAFA]" strokeWidth={1.25} />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-base text-[#F9FAF9] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Badges Earned
              </span>
              <span className="text-[64px] font-bold text-[#F9FAF9] leading-[85%]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                0
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6 flex-1 p-4 rounded-[20px] border border-black/[0.05] bg-gradient-to-r from-[#163300] to-[#9FE870]">
            <div className="flex w-16 h-16 items-center justify-center rounded-full bg-white/20">
              <svg className="w-5 h-5 text-[#FAFAFA]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.19016 10.5613H6.80769C5.57125 10.5613 4.95302 10.5613 4.68951 10.1537C4.42599 9.74608 4.67707 9.17817 5.17924 8.04236L6.68894 4.62769C7.14551 3.595 7.37381 3.07865 7.81668 2.78932C8.25956 2.5 8.82162 2.5 9.94587 2.5H11.687C13.0527 2.5 13.7355 2.5 13.993 2.94613C14.2506 3.39225 13.9119 3.98823 13.2343 5.18019L12.341 6.75157C12.0042 7.34412 11.8358 7.64041 11.8381 7.88293C11.8412 8.19813 12.0088 8.4885 12.2795 8.6475C12.4879 8.76992 12.8273 8.76992 13.5062 8.76992C14.3645 8.76992 14.7936 8.76992 15.0171 8.9185C15.3075 9.1115 15.4595 9.45683 15.4062 9.80267C15.3652 10.0688 15.0765 10.388 14.4992 11.0264L9.88662 16.1269C8.98062 17.1288 8.52762 17.6297 8.22343 17.4712C7.91923 17.3126 8.06531 16.6518 8.35746 15.3302L8.92979 12.7413C9.15221 11.735 9.26346 11.2318 8.99596 10.8966C8.72846 10.5613 8.21568 10.5613 7.19016 10.5613Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-base text-[#F9FAF9] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Total XP Points
              </span>
              <span className="text-[64px] font-bold text-[#F9FAF9] leading-[85%]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                0
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6 flex-1 p-4 rounded-[20px] border border-black/[0.05] bg-white">
            <div className="flex w-16 h-16 items-center justify-center rounded-full bg-[rgba(255,192,145,0.2)]">
              <svg className="w-5 h-5 text-[#EE7A13]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5468 18.3337C21.732 15.8337 16.0283 5.83366 9.10233 1.66699C8.28783 4.58366 7.0654 5.41699 4.62089 8.33366C1.38442 12.1952 2.99133 16.667 7.47274 18.3337C6.79375 17.5003 5.0414 15.751 6.25008 13.3337C6.66675 12.5003 7.50008 11.667 7.08342 10.0003C7.89823 10.417 9.58342 10.8337 10.0001 12.917C10.6791 12.0837 11.3837 10.3337 10.732 8.33366C15.8334 12.0837 13.7501 15.8337 11.5468 18.3337Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-base text-[#404040] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Current Streak
              </span>
              <div className="flex justify-between items-center">
                <span className="text-[64px] font-bold text-[#EE7A13] leading-[85%]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  0
                </span>
                <span className="text-base text-[#8C8C8C] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  days in a row
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* All Badges Section */}
        <div className="flex flex-col gap-6 p-6 sm:p-4 rounded-[32px] border border-black/[0.05] bg-[#F9FAF9] mb-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-lg font-bold text-black leading-7 tracking-[-0.36px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
              All Badges
            </h2>
            <div className="h-px w-full bg-[#EAECF0]"></div>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-6 p-4 rounded-[20px] border border-black/[0.05] bg-white min-h-[387px]">
            <div className="flex flex-col items-center gap-8 max-w-[352px]">
              <div className="flex w-14 h-14 items-center justify-center rounded-[36px] bg-black/20 backdrop-blur-sm">
                <Trophy className="w-7 h-7 text-white" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-2xl font-semibold text-[#121511] text-center leading-[150%]" style={{ fontFamily: 'Random Grotesque Standard Semibold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  No badges earned yet!
                </h3>
                <p className="text-lg text-[#8C8C8C] text-center leading-[150%] tracking-[-0.36px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Complete your first challenge or project to earn your first badge.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Badges Section */}
        <div className="flex flex-col gap-6 p-6 sm:p-4 rounded-[32px] border border-black/[0.05] bg-[#F9FAF9] mb-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-lg font-bold text-black leading-7 tracking-[-0.36px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Milestone Badges
            </h2>
            <div className="h-px w-full bg-[#EAECF0]"></div>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-6 p-4 rounded-[20px] border border-black/[0.05] bg-white min-h-[387px]">
            <div className="flex flex-col items-center gap-8 max-w-[352px]">
              <div className="flex w-14 h-14 items-center justify-center rounded-[36px] bg-black/20 backdrop-blur-sm">
                <Trophy className="w-7 h-7 text-white" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-2xl font-semibold text-[#121511] text-center leading-[150%]" style={{ fontFamily: 'Random Grotesque Standard Semibold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  No badges earned yet!
                </h3>
                <p className="text-lg text-[#8C8C8C] text-center leading-[150%] tracking-[-0.36px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Complete your first challenge or project to earn your first badge.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Creative Badges Section */}
        <div className="flex flex-col gap-6 p-6 sm:p-4 rounded-[32px] border border-black/[0.05] bg-[#F9FAF9]">
          <div className="flex flex-col gap-5">
            <h2 className="text-lg font-bold text-black leading-7 tracking-[-0.36px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Creative Badges
            </h2>
            <div className="h-px w-full bg-[#EAECF0]"></div>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-6 p-4 rounded-[20px] border border-black/[0.05] bg-white min-h-[387px]">
            <div className="flex flex-col items-center gap-8 max-w-[352px]">
              <div className="flex w-14 h-14 items-center justify-center rounded-[36px] bg-black/20 backdrop-blur-sm">
                <Trophy className="w-7 h-7 text-white" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-2xl font-semibold text-[#121511] text-center leading-[150%]" style={{ fontFamily: 'Random Grotesque Standard Semibold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  No badges earned yet!
                </h3>
                <p className="text-lg text-[#8C8C8C] text-center leading-[150%] tracking-[-0.36px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Complete your first challenge or project to earn your first badge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
