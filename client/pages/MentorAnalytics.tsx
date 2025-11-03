import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, BookOpen, Lightbulb, Mail, TrendingUp, Settings, Target, UserCheck, CheckCircle, X } from "lucide-react";
import { useState } from "react";

export default function MentorAnalytics() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showBanner, setShowBanner] = useState(true);

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/mentor-dashboard", icon: Home },
    { id: "students", label: "Students", path: "/mentor-students", icon: Users },
    { id: "curriculum", label: "Curriculum", path: "/mentor-curriculum", icon: BookOpen },
    { id: "projects", label: "Projects", path: "/mentor-projects", icon: Lightbulb },
    { id: "messages", label: "Messages", path: "/mentor-messages", icon: Mail },
    { id: "analytics", label: "Analytics", path: "/mentor-analytics", icon: TrendingUp },
    { id: "settings", label: "Settings", path: "/mentor-settings", icon: Settings },
  ];

  const isActive = (itemPath: string) => location.pathname === itemPath;

  return (
    <div className="min-h-screen bg-[#1E3006] p-3 sm:p-6">
      {/* Header Navigation */}
      <div className="max-w-[1440px] mx-auto mb-6 px-4 sm:px-16">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9bc7f4c3957329926c45ba3e1d6104debeb9620d?width=112" 
            alt="Logo" 
            className="w-14 h-14"
          />

          {/* Navigation Tabs */}
          <div className="flex justify-center items-start gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className={`flex h-12 px-4 items-center gap-1 rounded-full transition-all ${
                    active 
                      ? "bg-[rgba(159,232,112,0.20)]" 
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <Icon className={`w-[18px] h-[18px] ${active ? "text-[#B1FA63]" : "text-[#CFD6C9]"}`} />
                  <span className={`text-sm font-${active ? "bold" : "normal"} leading-6 tracking-[-0.14px] ${
                    active ? "text-[#B1FA63]" : "text-[#CFD6C9]"
                  }`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-white bg-[#9FE870] overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7469593e83fba7a0c1099e16258d02c681f57b7f?width=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-[#1E3006] text-base font-bold leading-6 tracking-[-0.16px]">Adam Mid</div>
              <div className="text-[#21231D] text-[13px] font-normal leading-4 tracking-[-0.13px]">Mentor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] p-8 sm:p-16">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-[30px] font-bold text-black leading-[34px] tracking-[-0.75px] mb-1">
            Analytics
          </h1>
          <p className="text-base text-[#404040] leading-6 tracking-[-0.16px]">
            Track student performance and engagement insights
          </p>
        </div>

        <div className="h-px bg-black/10 mb-8"></div>

        {/* Alert Banner */}
        {showBanner && (
          <div className="flex items-start gap-3 p-6 rounded-xl border border-[#EDEFEB] bg-[rgba(159,232,112,0.20)] mb-8">
            <Target className="w-6 h-6 text-[#1E3006] flex-shrink-0" />
            <div className="flex-1">
              <div className="text-sm font-bold text-[#1E3006] leading-5 tracking-[-0.14px] mb-1">
                Engagement increased by 12% since last week
              </div>
              <div className="text-sm text-[#1E3006] leading-5 tracking-[-0.14px]">
                Top performing cohort: Aurora 🌟
              </div>
              <button className="flex items-center gap-2 mt-3 text-sm font-bold text-[#1E3006]">
                View Students
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16675 10.0003H15.8334M15.8334 10.0003L10.0001 4.16699M15.8334 10.0003L10.0001 15.8337" stroke="#1E3006" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <button onClick={() => setShowBanner(false)} className="p-2 hover:bg-black/5 rounded-lg transition-colors">
              <X className="w-5 h-5 text-[#1E3006]" />
            </button>
          </div>
        )}

        {/* Weekly Submissions Chart */}
        <div className="p-6 rounded-[32px] border border-black/10 bg-[#F9FAF9] mb-8">
          <div className="mb-5">
            <h2 className="text-lg font-bold text-black leading-7 tracking-[-0.36px]">Weekly Submissions</h2>
          </div>
          <div className="h-px bg-[#EAECF0] mb-6"></div>
          
          <div className="p-6 rounded-3xl border border-[rgba(230,234,241,0.60)] bg-white">
            <div className="flex justify-between items-center mb-12">
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-full border border-[#E2E8F0] bg-white text-sm text-[#21231D]">
                  Filter ▼
                </button>
                <button className="px-4 py-2 rounded-full border border-[#E2E8F0] bg-white text-sm text-[#21231D]">
                  Filter ▼
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#21231D]">Range:</span>
                <button className="px-4 py-2 rounded-full border border-[#E2E8F0] bg-white text-sm text-[#21231D]">
                  All Time ▼
                </button>
              </div>
            </div>

            {/* Bar Chart Placeholder */}
            <div className="h-[400px] flex items-end justify-between gap-7 px-12">
              {[277, 113, 162, 262, 58, 279, 101, 277].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end">
                  <div 
                    className="w-full rounded-t-full bg-[#1E3006]" 
                    style={{ height: `${height}px` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engagement Trend Chart */}
        <div className="p-6 rounded-[32px] border border-black/10 bg-[#F9FAF9] mb-8">
          <div className="mb-5">
            <h2 className="text-lg font-bold text-black leading-7 tracking-[-0.36px]">Engagement Trend</h2>
          </div>
          <div className="h-px bg-[#EAECF0] mb-6"></div>
          
          <div className="p-6 rounded-3xl border border-[rgba(230,234,241,0.60)] bg-white">
            <div className="flex justify-between items-center mb-12">
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-full border border-[#E2E8F0] bg-white text-sm text-[#21231D]">
                  Filter ▼
                </button>
                <button className="px-4 py-2 rounded-full border border-[#E2E8F0] bg-white text-sm text-[#21231D]">
                  Filter ▼
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#21231D]">Range:</span>
                <button className="px-4 py-2 rounded-full border border-[#E2E8F0] bg-white text-sm text-[#21231D]">
                  All Time ▼
                </button>
              </div>
            </div>

            {/* Line Chart Placeholder */}
            <div className="h-[405px] border-l border-b border-[#F2F4F7] relative">
              <svg className="w-full h-full" viewBox="0 0 1200 405" preserveAspectRatio="none">
                <path
                  d="M0 205 Q 100 210, 200 195 T 400 175 T 600 130 T 800 110 T 1000 95 L 1200 85"
                  fill="none"
                  stroke="#6A8042"
                  strokeWidth="3"
                />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-6 text-xs text-[#21231D]">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-6 rounded-[32px] border border-black/10 bg-[#F9FAF9]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-[20px] border border-black/10 bg-white">
              <div className="w-16 h-16 rounded-full bg-[#F7F7F7] flex items-center justify-center mb-6">
                <Target className="w-5 h-5 text-[#404040]" />
              </div>
              <div className="text-base text-[#404040] mb-2">Average Engagement</div>
              <div className="text-[64px] font-bold text-black leading-[85%]">0</div>
            </div>

            <div className="p-4 rounded-[20px] border border-black/10 bg-white">
              <div className="w-16 h-16 rounded-full bg-[#F7F7F7] flex items-center justify-center mb-6">
                <UserCheck className="w-5 h-5 text-[#404040]" />
              </div>
              <div className="text-base text-[#404040] mb-2">Active Students</div>
              <div className="text-[64px] font-bold text-black leading-[85%]">0</div>
            </div>

            <div className="p-4 rounded-[20px] border border-black/10 bg-white">
              <div className="w-16 h-16 rounded-full bg-[#F7F7F7] flex items-center justify-center mb-6">
                <CheckCircle className="w-5 h-5 text-[#404040]" />
              </div>
              <div className="text-base text-[#404040] mb-2">Completion Rate</div>
              <div className="text-[64px] font-bold text-black leading-[85%]">0%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
