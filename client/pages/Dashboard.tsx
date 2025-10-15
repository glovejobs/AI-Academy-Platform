import { Target, Zap, Calendar, Award, ArrowRight, Rocket, Palette, Plus } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/dashboard", icon: "home" },
    { id: "progress", label: "My Child/Progress", path: "/progress" },
    { id: "schedule", label: "Schedule", path: "/schedule" },
    { id: "messages", label: "Messages", path: "/messages" },
    { id: "safety", label: "Safety Center", path: "/safety-center" },
    { id: "settings", label: "Settings", path: "#" },
  ];

  const isActive = (itemPath: string | undefined) => {
    if (!itemPath) return false;
    if (itemPath === "#") return false;
    return location.pathname === itemPath;
  };


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
              return (
                <button
                  key={item.id}
                  onClick={() => item.path !== "#" && navigate(item.path)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-all ${
                    active
                      ? "bg-[#B1FA63] text-[#163300] font-bold"
                      : "text-[#FAFAFA] opacity-60 hover:opacity-100"
                  }`}
                >
                  {active && item.icon === "home" ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5z" stroke="#163300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item.label}
                    </span>
                  ) : (
                    item.label
                  )}
                </button>
              );
            })}
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/abdabce54cfd8c3bd7a3c5152ff3bc7da219a0e7?width=80" 
              alt="User" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="hidden sm:block">
              <div className="text-white font-bold text-base leading-6">Dave Alex</div>
              <div className="text-white/70 text-sm">Parent</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] p-6 sm:p-8 lg:p-16">
        {/* Page Header */}
        <div className="mb-8 pb-5 border-b border-black/[0.05]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-black leading-tight mb-1 font-heading">
                Hello, Dave! 👋
              </h1>
              <p className="text-base text-[#404040] leading-6 font-body">
                You're doing amazing this week. Let's keep the momentum going!
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#9FE870]/20 hover:bg-[#9FE870]/30 transition-colors">
              <Plus className="w-5 h-5 text-[#1E3006]" strokeWidth={2} />
              <span className="text-sm font-bold text-[#1E3006]">Quick Actions</span>
            </button>
          </div>
        </div>

        {/* Progress Alert */}
        <div className="mb-8 px-6 py-8 sm:px-8 sm:py-10 rounded-[28px] border border-black/[0.05] bg-gradient-to-r from-[#163300] to-[#9FE870]">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
            <svg className="w-5 h-5 text-[#FAFAFA]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0834 4.16666H10.4167C8.05972 4.16666 6.88121 4.16666 6.14898 4.89889C5.41675 5.63112 5.41675 6.80963 5.41675 9.16666V13.3333C5.41675 15.6903 5.41675 16.8688 6.14898 17.6011C6.88121 18.3333 8.05972 18.3333 10.4167 18.3333H11.536C12.2172 18.3333 12.5579 18.3333 12.8642 18.2065C13.1705 18.0796 13.4113 17.8387 13.8931 17.357L16.1071 15.143C16.5888 14.6612 16.8297 14.4204 16.9566 14.1141C17.0834 13.8078 17.0834 13.4672 17.0834 12.7859V9.16666C17.0834 6.80963 17.0834 5.63112 16.3512 4.89889C15.6189 4.16666 14.4404 4.16666 12.0834 4.16666Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.5 17.9167V17.0833C12.5 15.512 12.5 14.7263 12.9882 14.2382C13.4763 13.75 14.262 13.75 15.8333 13.75H16.6667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.41675 15.8333C4.03604 15.8333 2.91675 14.7141 2.91675 13.3333V6.66666C2.91675 4.30963 2.91675 3.13112 3.64898 2.39889C4.38121 1.66666 5.55972 1.66666 7.91675 1.66666H12.0837C13.4644 1.66666 14.5837 2.78598 14.5837 4.16668" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.33423 10.8333H11.6676M8.33423 7.5H14.1676" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-2xl sm:text-[26px] font-bold text-[#FAFAFA] leading-tight mb-2 font-heading">
            Your child is doing great this week! 🌟
          </h2>
          <p className="text-base text-[#FAFAFA] leading-6 font-body">
            They've completed 3 lessons and earned a new badge. Keep encouraging their creative journey!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 p-4 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard 
              icon={<Target className="w-5 h-5 text-[#404040]" />}
              label="Bootcamp Progress"
              value="1/8"
              subtitle="Making great progress!"
            />
            <StatCard 
              icon={<Zap className="w-5 h-5 text-[#404040]" />}
              label="XP Points"
              value="0"
              subtitle="+50 this week"
            />
            <StatCard 
              icon={<Calendar className="w-5 h-5 text-[#404040]" />}
              label="Day Streak"
              value="0"
              subtitle="Keep it going! 🔥"
            />
            <StatCard 
              icon={<Award className="w-5 h-5 text-[#404040]" />}
              label="Badges Earned"
              value="0"
              subtitle="Awesome work!"
            />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* This Week's Summary */}
          <div className="p-6 sm:p-4 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
            <div className="flex justify-between items-center mb-5 pb-5 border-b border-[#EAECF0]">
              <h3 className="text-lg font-bold text-black font-heading">This Week's Summary</h3>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-black/5 transition-colors">
                <span className="text-base font-bold text-[#404040]">Full Report</span>
                <ArrowRight className="w-5 h-5 text-[#404040]" />
              </button>
            </div>
            <EmptyState 
              icon={<Rocket className="w-7 h-7 text-white" />}
              title="No challenge yet!"
              description="Your next creative mission will appear here once the new week begins."
            />
          </div>

          {/* Recent Badges */}
          <div className="p-6 sm:p-4 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
            <div className="flex justify-between items-center mb-5 pb-5 border-b border-[#EAECF0]">
              <h3 className="text-lg font-bold text-black font-heading">Recent Badges</h3>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-black/5 transition-colors">
                <span className="text-base font-bold text-[#404040]">Full Report</span>
                <ArrowRight className="w-5 h-5 text-[#404040]" />
              </button>
            </div>
            <EmptyState 
              icon={<Palette className="w-7 h-7 text-white" />}
              title="No projects yet!"
              description="Start your first project to fill this space with your amazing work."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, subtitle }: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  subtitle: string; 
}) {
  return (
    <div className="p-4 rounded-[20px] border border-black/[0.05] bg-white">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F7F7F7] mb-6">
        {icon}
      </div>
      <div className="space-y-2">
        <p className="text-base text-[#404040] leading-6 font-body">{label}</p>
        <p className="text-5xl sm:text-6xl font-bold text-black leading-[0.85] font-heading">{value}</p>
        <p className="text-base text-[#8C8C8C] leading-6 font-body">{subtitle}</p>
      </div>
    </div>
  );
}

function EmptyState({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-6 rounded-3xl border border-[rgba(230,234,241,0.6)] bg-white">
      <div className="max-w-[352px] text-center space-y-8">
        <div className="space-y-5">
          <div className="flex items-center justify-center w-14 h-14 rounded-[36px] bg-black/20 backdrop-blur-sm mx-auto">
            {icon}
          </div>
          <div className="space-y-2">
            <h4 className="text-2xl font-semibold text-[#121511] leading-[1.5]">
              {title}
            </h4>
            <p className="text-lg text-[#8C8C8C] leading-[1.5] tracking-[-0.36px] font-body">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
