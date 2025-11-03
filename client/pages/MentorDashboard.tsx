import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, BookOpen, Lightbulb, Mail, TrendingUp, Settings, Target, UserCheck, AlertCircle, CheckCircle, Rocket, Palette, Award } from "lucide-react";

export default function MentorDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

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

  const stats = [
    { 
      icon: <Target className="w-5 h-5 text-[#EE7A13]" />, 
      label: "Active Cohorts", 
      value: "5",
      bgColor: "#F7F7F7"
    },
    { 
      icon: <UserCheck className="w-5 h-5 text-[#B692F6]" />, 
      label: "Students", 
      value: "100",
      bgColor: "#F7F7F7"
    },
    { 
      icon: <AlertCircle className="w-5 h-5 text-[#F97066]" />, 
      label: "Projects Due", 
      value: "25",
      bgColor: "#F7F7F7"
    },
    { 
      icon: <CheckCircle className="w-5 h-5 text-[#32D583]" />, 
      label: "Reviewed", 
      value: "12/20",
      bgColor: "#F7F7F7"
    },
  ];

  return (
    <div className="min-h-screen bg-[#1E3006] p-3 sm:p-6">
      {/* Header Navigation */}
      <div className="max-w-[1440px] mx-auto mb-6 px-4 sm:px-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Logo */}
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9bc7f4c3957329926c45ba3e1d6104debeb9620d?width=112" 
            alt="Logo" 
            className="w-14 h-14"
          />

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-6">
            {navItems.map((item) => {
              const active = isActive(item.path);
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-1 h-12 px-4 rounded-full text-sm transition-all ${
                    active
                      ? "bg-[rgba(159,232,112,0.2)] text-[#B1FA63] font-bold"
                      : "text-[#CFD6C9] opacity-80 hover:opacity-100"
                  }`}
                >
                  <Icon className="w-[18px] h-[18px]" strokeWidth={1.25} />
                  <span className="font-satoshi">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7469593e83fba7a0c1099e16258d02c681f57b7f?width=80" 
              alt="Adam Mid" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="hidden sm:block">
              <div className="text-[#1E3006] font-bold text-base">Adam Mid</div>
              <div className="text-[#21231D] text-[13px]">Mentor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] p-8 sm:p-16">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-[30px] font-bold text-black leading-[34px] tracking-[-0.75px] mb-1">
            Good afternoon, Adam 👋
          </h1>
          <p className="text-base text-[#404040]">Your students are doing great this week!</p>
          <div className="h-px bg-black/10 mt-5"></div>
        </div>

        {/* Nova's Insight */}
        <div className="flex items-start gap-2 p-6 rounded-3xl border-2 border-[#36DD50] bg-[#F5FDF1] mb-8">
          <svg className="w-5 h-5 text-[#1E3006] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75008 18.3333V14.1667M3.75008 5.83332V1.66666M1.66675 3.74999H5.83341M1.66675 16.25H5.83341M10.8334 2.49999L9.38827 6.25738C9.15326 6.8684 9.03575 7.17391 8.85302 7.43089C8.69107 7.65865 8.49208 7.85765 8.26432 8.0196C8.00734 8.20233 7.70182 8.31983 7.0908 8.55484L3.33342 9.99999L7.0908 11.4451C7.70183 11.6801 8.00734 11.7977 8.26432 11.9804C8.49208 12.1423 8.69107 12.3413 8.85302 12.5691C9.03575 12.8261 9.15326 13.1316 9.38827 13.7426L10.8334 17.5L12.2786 13.7426C12.5136 13.1316 12.6311 12.8261 12.8138 12.5691C12.9758 12.3413 13.1748 12.1423 13.4025 11.9804C13.6595 11.7977 13.965 11.6801 14.576 11.4451L18.3334 9.99999L14.576 8.55484C13.965 8.31983 13.6595 8.20233 13.4025 8.0196C13.1748 7.85765 12.9758 7.65865 12.8138 7.43089C12.6311 7.17391 12.5136 6.8684 12.2786 6.25737L10.8334 2.49999Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div>
            <div className="text-base font-bold text-[#1E3006] mb-1">Nova's Insight</div>
            <div className="text-sm text-[#1E3006]">2 students may need help staying on track. Would you like me to draft a feedback message?</div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-[32px] border border-black/10 bg-[#F9FAF9] mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-6 p-4 rounded-[20px] border border-black/10 bg-white">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: stat.bgColor }}>
                {stat.icon}
              </div>
              <div>
                <div className="text-base text-[#404040] mb-2">{stat.label}</div>
                <div className="text-[64px] font-bold text-black leading-[85%]">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule and Review Queue */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* This Week's Schedule */}
          <div className="flex flex-col gap-6 p-6 rounded-[32px] border border-black/10 bg-[#F9FAF9]">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-lg font-bold text-black">This Week's Schedule</h2>
              <button className="px-4 py-2.5 text-base font-bold text-[#404040] rounded-lg hover:bg-gray-100 transition-colors">
                View All
              </button>
            </div>
            <div className="h-px bg-[#EAECF0]"></div>
            <div className="flex flex-col items-center justify-center gap-5 h-[400px] p-6 rounded-3xl border border-[rgba(230,234,241,0.6)] bg-white">
              <div className="w-14 h-14 rounded-[36px] bg-black/20 backdrop-blur-sm flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div className="text-center max-w-[352px]">
                <div className="text-2xl font-semibold text-[#121511] mb-2">No Events Scheduled</div>
                <div className="text-lg text-[#8C8C8C]">You have no classes, meetings, or activities scheduled for this week.</div>
              </div>
            </div>
          </div>

          {/* Project Review Queue */}
          <div className="flex flex-col gap-6 p-6 rounded-[32px] border border-black/10 bg-[#F9FAF9]">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-lg font-bold text-black">Project Review Queue</h2>
              <button className="px-4 py-2.5 text-base font-bold text-[#404040] rounded-lg hover:bg-gray-100 transition-colors">
                View All
              </button>
            </div>
            <div className="h-px bg-[#EAECF0]"></div>
            <div className="flex flex-col items-center justify-center gap-5 h-[400px] p-6 rounded-3xl border border-[rgba(230,234,241,0.6)] bg-white">
              <div className="w-14 h-14 rounded-[36px] bg-black/20 backdrop-blur-sm flex items-center justify-center">
                <Palette className="w-7 h-7 text-white" />
              </div>
              <div className="text-center max-w-[352px]">
                <div className="text-2xl font-semibold text-[#121511] mb-2">Nothing to Review Yet</div>
                <div className="text-lg text-[#8C8C8C]">You're all caught up! New submissions will appear here once students submit</div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Spotlight */}
        <div className="flex flex-col gap-6 p-6 rounded-[32px] border border-black/10 bg-[#F9FAF9]">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-lg font-bold text-black">Student Spotlight</h2>
            <button className="px-4 py-2.5 text-base font-bold text-[#404040] rounded-lg hover:bg-gray-100 transition-colors">
              View All
            </button>
          </div>
          <div className="h-px bg-[#EAECF0]"></div>
          <div className="flex flex-col items-center justify-center gap-5 h-[400px] p-6 rounded-3xl border border-[rgba(230,234,241,0.6)] bg-white">
            <div className="w-14 h-14 rounded-[36px] bg-black/20 backdrop-blur-sm flex items-center justify-center">
              <Award className="w-7 h-7 text-white" />
            </div>
            <div className="text-center max-w-[440px]">
              <div className="text-2xl font-semibold text-[#121511] mb-2">No Student Spotlight Yet</div>
              <div className="text-lg text-[#8C8C8C]">Highlight outstanding students and their achievements once they're added to the spotlight list.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
