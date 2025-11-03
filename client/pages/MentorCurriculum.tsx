import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, BookOpen, Lightbulb, Mail, TrendingUp, Settings, Plus, MoreHorizontal, Wand2 } from "lucide-react";

interface Module {
  title: string;
  description: string;
  objectives: string[];
  hasNovaSupport: boolean;
}

interface Week {
  week: number;
  module?: Module;
}

export default function MentorCurriculum() {
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

  const weeks: Week[] = [
    {
      week: 1,
      module: {
        title: "Introduction to AI Art",
        description: "Understanding the fundamentals of AI-generated art and creative tools",
        objectives: ["Understand AI art basics", "Learn about generative models"],
        hasNovaSupport: true
      }
    },
    {
      week: 2,
      module: {
        title: "Prompt Engineering Mastery",
        description: "Understanding the fundamentals of AI-generated art and creative tools",
        objectives: ["Master prompt structure", "Learn style modifiers"],
        hasNovaSupport: true
      }
    },
    {
      week: 3,
      module: {
        title: "AI Image Generation Workshop",
        description: "Hands-on practice with leading AI image generation platforms",
        objectives: ["Use Midjourney effectively", "Explore DALL-E capabilities"],
        hasNovaSupport: true
      }
    },
    {
      week: 4,
      module: {
        title: "Style and Composition",
        description: "Understanding the fundamentals of AI-generated art and creative tools",
        objectives: ["Master prompt structure", "Learn style modifiers"],
        hasNovaSupport: true
      }
    },
    { week: 5 },
    { week: 6 },
    { week: 7 },
    { week: 8 }
  ];

  const isActive = (itemPath: string) => location.pathname === itemPath;

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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-[30px] font-bold text-black leading-[34px] tracking-[-0.75px] mb-1">
                Curriculum
              </h1>
              <p className="text-base text-[#404040]">8-week creative AI bootcamp modules</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#9FE870] text-[#1E3006] font-bold text-sm hover:bg-[#8FD850] transition-colors">
              <Plus className="w-5 h-5" />
              Add Module
            </button>
          </div>
          <div className="h-px bg-black/10 mt-5"></div>
        </div>

        {/* Weeks Grid */}
        <div className="space-y-6">
          {[0, 2, 4, 6].map((rowStart) => (
            <div key={rowStart} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {weeks.slice(rowStart, rowStart + 2).map((weekData) => (
                <div key={weekData.week} className="flex flex-col gap-6 p-3 rounded-[32px] border border-black/10 bg-[#F9FAF9]">
                  {/* Week Header */}
                  <div className="flex items-center justify-between px-2">
                    <h2 className="text-lg font-bold text-black">Week {weekData.week}</h2>
                    <button className="p-1 hover:bg-gray-100 rounded-lg">
                      <MoreHorizontal className="w-5 h-5 text-[#475467]" />
                    </button>
                  </div>
                  <div className="h-px bg-[#EAECF0]"></div>

                  {/* Module Content or Empty State */}
                  {weekData.module ? (
                    <div className="flex flex-col gap-4 p-8 rounded-[20px] border border-black/10 bg-white">
                      <div>
                        <h3 className="text-[26px] font-bold text-black leading-8 tracking-[-0.39px] mb-2">
                          {weekData.module.title}
                        </h3>
                        <p className="text-lg text-[#404040] leading-7 tracking-[-0.18px]">
                          {weekData.module.description}
                        </p>
                      </div>
                      
                      <div className="h-px bg-black/10"></div>

                      <div>
                        <div className="text-xl font-bold text-[#21231D] leading-7 tracking-[-0.4px] mb-2">
                          Learning Objectives:
                        </div>
                        <ul className="text-lg text-[#404040] leading-7 tracking-[-0.18px] space-y-1">
                          {weekData.module.objectives.map((objective, index) => (
                            <li key={index}>{objective}</li>
                          ))}
                        </ul>
                      </div>

                      {weekData.module.hasNovaSupport && (
                        <div className="flex items-center gap-2">
                          <Wand2 className="w-5 h-5 text-[#6A8042]" />
                          <span className="text-lg text-[#6A8042] leading-7 tracking-[-0.18px]">
                            Nova can generate quiz or creative examples
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-6 h-[426px] p-3 rounded-[32px] border border-dashed border-[rgba(33,35,29,0.2)] bg-white">
                      <div className="w-16 h-16 rounded-full bg-[#F9FAF9] flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-[#6A8042]" />
                      </div>
                      <div className="text-lg text-[#404040]">No modules for this week yet</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
