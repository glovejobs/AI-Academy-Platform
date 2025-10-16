import { useNavigate, useLocation } from "react-router-dom";
import { BookOpen, Target, Lock, Clock } from "lucide-react";

interface Week {
  id: number;
  title: string;
  description: string;
  status: "current" | "locked";
  tasks?: { title: string; description: string }[];
}

const weeksData: Week[] = [
  {
    id: 1,
    title: "Week 1: Foundation Week",
    description: "Introduction to creative thinking and ideation",
    status: "current",
    tasks: [
      { title: "Week 1: Foundation Week", description: "Introduction to creative thinking and ideation" },
      { title: "Week 1: Foundation Week", description: "Introduction to creative thinking and ideation" },
      { title: "Week 1: Foundation Week", description: "Introduction to creative thinking and ideation" },
    ]
  },
  {
    id: 2,
    title: "Week 2: Exploration",
    description: "Discover different creative mediums and tools",
    status: "locked",
    tasks: [
      { title: "Week 1: Foundation Week", description: "Introduction to creative thinking and ideation" },
      { title: "Week 1: Foundation Week", description: "Introduction to creative thinking and ideation" },
      { title: "Week 1: Foundation Week", description: "Introduction to creative thinking and ideation" },
    ]
  },
  {
    id: 3,
    title: "Week 3: Skill Building",
    description: "Deep dive into your chosen creative track",
    status: "locked",
    tasks: [
      { title: "Week 2: Exploration", description: "Discover different creative mediums and tools" },
      { title: "Week 2: Exploration", description: "Discover different creative mediums and tools" },
      { title: "Week 2: Exploration", description: "Discover different creative mediums and tools" },
    ]
  },
  {
    id: 4,
    title: "Week 4: First Project",
    description: "Create your first major project",
    status: "locked",
    tasks: [
      { title: "Week 3: Prototyping", description: "Learn to build and test prototypes of your ideas" },
      { title: "Week 3: Prototyping", description: "Learn to build and test prototypes of your ideas" },
      { title: "Week 3: Prototyping", description: "Learn to build and test prototypes of your ideas" },
    ]
  },
  {
    id: 5,
    title: "Week 5: Collaboration",
    description: "Learn to work with peers and mentors",
    status: "locked",
    tasks: [
      { title: "Week 4: User Testing", description: "Gather feedback and iterate on your designs" },
      { title: "Week 4: User Testing", description: "Gather feedback and iterate on your designs" },
      { title: "Week 4: User Testing", description: "Gather feedback and iterate on your designs" },
    ]
  },
  {
    id: 6,
    title: "Week 6: Portfolio Building",
    description: "Curate and present your best work",
    status: "locked",
    tasks: [
      { title: "Week 5: Final Project", description: "Combine learnings to create a comprehensive project" },
      { title: "Week 5: Final Project", description: "Combine learnings to create a comprehensive project" },
      { title: "Week 5: Final Project", description: "Combine learnings to create a comprehensive project" },
    ]
  },
  {
    id: 7,
    title: "Week 7: Real-World Projects",
    description: "Work on client briefs and challenges",
    status: "locked",
    tasks: [
      { title: "Week 6: Presentation Skills", description: "Develop skills to present and defend your work" },
      { title: "Week 6: Presentation Skills", description: "Develop skills to present and defend your work" },
      { title: "Week 6: Presentation Skills", description: "Develop skills to present and defend your work" },
    ]
  },
  {
    id: 8,
    title: "Week 8: Showcase & Celebration",
    description: "Present your work and celebrate achievements",
    status: "locked",
    tasks: [
      { title: "Week 7: Portfolio Development", description: "Learn to compile your projects into a professional portfolio" },
      { title: "Week 7: Portfolio Development", description: "Learn to compile your projects into a professional portfolio" },
      { title: "Week 7: Portfolio Development", description: "Learn to compile your projects into a professional portfolio" },
    ]
  },
];

export default function StudentBootcamp() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/student-dashboard" },
    { id: "bootcamp", label: "My Bootcamp", path: "/student-bootcamp" },
    { id: "projects", label: "Projects", path: "/student-projects" },
    { id: "ai-mentor", label: "Ai Mentor", path: "/ai-mentor" },
    { id: "achievements", label: "Achievements", path: "/achievements" },
    { id: "schedule", label: "Schedule", path: "/student-schedule" },
    { id: "portfolio", label: "Portfolio", path: "/portfolio" },
  ];

  const isActive = (itemPath: string) => {
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
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-3 h-12 px-4 sm:px-6 rounded-full text-sm sm:text-base transition-all ${
                    active
                      ? "bg-[#B1FA63] text-[#163300] font-bold"
                      : "text-[#FAFAFA] opacity-60 hover:opacity-100 px-2"
                  }`}
                >
                  {active && item.id === "bootcamp" && (
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.8334 11.6666H16.8658C17.7915 11.6666 18.486 12.567 18.3044 13.5321L18.0836 14.7055C17.8691 15.8458 16.9273 16.6666 15.8334 16.6666" stroke="currentColor" strokeWidth="1.25"/>
                      <path d="M4.16662 11.6666H3.13423C2.20841 11.6666 1.51405 12.567 1.69561 13.5321L1.91635 14.7055C2.13088 15.8458 3.07271 16.6666 4.16662 16.6666" stroke="currentColor" strokeWidth="1.25"/>
                      <path d="M15.2246 8.74996L15.6592 12.6639C15.8925 15.3158 16.0091 16.6417 15.2246 17.4875C14.4402 18.3333 13.0937 18.3333 10.4008 18.3333H9.59913C6.90621 18.3333 5.55974 18.3333 4.77528 17.4875C3.9908 16.6417 4.10745 15.3158 4.34074 12.6639L4.77528 8.74988" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"/>
                      <path d="M12.5 4.16663C12.5 2.78592 11.3807 1.66663 10 1.66663C8.61925 1.66663 7.5 2.78592 7.5 4.16663" stroke="currentColor" strokeWidth="1.25"/>
                      <path d="M4.38471 7.39138C4.17623 6.21165 4.07198 5.62178 4.27962 5.17022C4.41825 4.86869 4.64832 4.61256 4.94088 4.43402C5.37903 4.16663 6.0131 4.16663 7.28123 4.16663H12.7187C13.9868 4.16663 14.6209 4.16663 15.059 4.43402C15.3516 4.61256 15.5816 4.86869 15.7203 5.17022C15.928 5.62178 15.8237 6.21165 15.6152 7.39138L15.5726 7.63247C15.4918 8.08993 15.4514 8.31865 15.3716 8.52904C15.2338 8.89246 15.0086 9.22088 14.7137 9.48854C14.543 9.64346 14.3385 9.77213 13.9294 10.0294C13.5447 10.2712 13.3524 10.3921 13.1491 10.487C12.7982 10.651 12.4208 10.7587 12.0325 10.806C11.8075 10.8333 11.5763 10.8333 11.114 10.8333H8.88588C8.42363 10.8333 8.19246 10.8333 7.96748 10.806C7.5791 10.7587 7.20174 10.651 6.85083 10.487C6.64754 10.3921 6.45523 10.2712 6.07058 10.0294C5.66143 9.77213 5.45685 9.64346 5.28618 9.48854C4.99128 9.22088 4.76613 8.89246 4.62833 8.52904C4.54857 8.31865 4.50815 8.08993 4.42731 7.63247L4.38471 7.39138Z" stroke="currentColor" strokeWidth="1.25"/>
                      <path d="M10 8.33541L10.0073 8.3335" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
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
              <div className="text-white font-bold text-base leading-6" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>Mimi Alex</div>
              <div className="text-white/70 text-[13px] leading-4" style={{ fontFamily: 'DM Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>Designer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] p-6 sm:p-8 lg:p-16">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
            <div className="flex-1">
              <h1 className="text-[30px] font-bold text-black leading-[34px] tracking-[-0.75px] mb-1" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                My Bootcamp 🎒
              </h1>
              <p className="text-base text-[#404040] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Your 8-week creative journey
              </p>
            </div>
            
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-2xl border border-black/[0.05] bg-[#FAFAFA]">
              <div className="w-2 h-2 rounded-full bg-[#1E3006]"></div>
              <span className="text-[#1E3006] text-base leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Week 2 of 8
              </span>
            </div>
          </div>
          
          <div className="h-px w-full bg-black/[0.05]"></div>
        </div>

        {/* Weeks List */}
        <div className="space-y-6">
          {weeksData.map((week, index) => (
            <div key={week.id} className={`p-3 rounded-[32px] border border-black/[0.05] ${week.status === "current" ? "bg-[#E2F6D5]" : "bg-[#FAFAFA]"}`}>
              <div className={`p-6 sm:p-8 rounded-[20px] border border-black/[0.05] bg-white ${week.status === "locked" ? "opacity-40" : ""}`}>
                {/* Week Header */}
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                  <div className="flex items-start gap-6 flex-1">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-full ${week.status === "current" ? "bg-[#9FE870]/20" : "bg-[#F7F7F7]"}`}>
                      {week.status === "current" ? (
                        <BookOpen className="w-5 h-5 text-[#6A8042]" strokeWidth={1.25} />
                      ) : (
                        <Lock className="w-5 h-5 text-[#404040]" strokeWidth={1.25} />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h2 className="text-[26px] font-bold text-black leading-8 tracking-[-0.39px]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                          {week.title}
                        </h2>
                        {week.status === "current" && (
                          <span className="px-2 py-0.5 rounded-2xl bg-[#9FE870]/20 text-[#1E3006] text-xs font-medium leading-[18px] tracking-[-0.12px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-[#404040] leading-7 tracking-[-0.18px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                        {week.description}
                      </p>
                    </div>
                  </div>
                  
                  {week.status === "current" && (
                    <button className="flex items-center justify-center w-full sm:w-[190px] h-14 px-8 rounded-full border border-black/[0.05] bg-[#FAFAFA] hover:bg-[#F0F0F0] transition-colors">
                      <span className="text-lg font-bold text-[#404040] leading-7 tracking-[-0.36px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                        View Details
                      </span>
                    </button>
                  )}
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-black/[0.05] mb-6"></div>

                {/* Week Tasks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {week.tasks?.map((task, taskIndex) => (
                    <div key={taskIndex} className="p-6 rounded-2xl border border-black/[0.05] bg-[#FAFAFA]">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full border border-black/[0.05] bg-[#F7F7F7] mb-2">
                        <Target className="w-5 h-5 text-[#404040]" strokeWidth={1.25} />
                      </div>
                      <h3 className="text-lg font-bold text-[#404040] leading-7 tracking-[-0.36px] mb-2" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                        {task.title}
                      </h3>
                      <p className="text-lg text-[#404040] leading-7 tracking-[-0.18px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                        {task.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Unlock Message */}
                {week.status === "locked" && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-6 h-6 text-[#8C8C8C]" strokeWidth={1.5} />
                    <p className="text-base text-[#404040] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                      Complete previous weeks to unlock
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
