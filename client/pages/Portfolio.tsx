import { useNavigate, useLocation } from "react-router-dom";
import { Home, Backpack, Lightbulb, Sparkles, Trophy, Calendar, Folder, Download, Edit } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"all" | "certifications">("all");

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
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-[30px] font-bold leading-[34px] tracking-[-0.75px] text-black" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Portfolio 📁
              </h1>
              <p className="text-base text-[#404040] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Showcase your creative journey
              </p>
            </div>
            
            <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
              <Download className="w-5 h-5 text-[#1E1E1E]" strokeWidth={2} />
              <span className="text-base font-bold text-[#1E3006] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Download PDF
              </span>
            </button>
          </div>
          <div className="h-px w-full bg-black/[0.1]"></div>
        </div>

        {/* Resume Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-4 mb-8 rounded-[32px] border border-black/[0.05] bg-[#F9FAF9]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-4 rounded-[20px] border border-black/[0.05] bg-gradient-to-r from-[#163300] to-[#9FE870] flex-1">
            <div className="flex w-16 h-16 items-center justify-center rounded-full bg-white/20">
              <svg className="w-5 h-5 text-[#FAFAFA]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0833 4.16602H10.4166C8.0596 4.16602 6.88109 4.16602 6.14886 4.89825C5.41663 5.63048 5.41663 6.80899 5.41663 9.16602V13.3327C5.41663 15.6897 5.41663 16.8682 6.14886 17.6004C6.88109 18.3327 8.0596 18.3327 10.4166 18.3327H11.5359C12.2171 18.3327 12.5578 18.3327 12.864 18.2058C13.1704 18.0789 13.4112 17.8381 13.893 17.3563L16.107 15.1423C16.5887 14.6606 16.8295 14.4198 16.9565 14.1134C17.0833 13.8072 17.0833 13.4665 17.0833 12.7853V9.16602C17.0833 6.80899 17.0833 5.63048 16.351 4.89825C15.6188 4.16602 14.4403 4.16602 12.0833 4.16602Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.5 17.9167V17.0833C12.5 15.512 12.5 14.7263 12.9882 14.2382C13.4763 13.75 14.262 13.75 15.8333 13.75H16.6667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.41663 15.8327C4.03592 15.8327 2.91663 14.7134 2.91663 13.3327V6.66602C2.91663 4.30899 2.91663 3.13048 3.64886 2.39825C4.38109 1.66602 5.5596 1.66602 7.91663 1.66602H12.0836C13.4643 1.66602 14.5836 2.78534 14.5836 4.16604" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.33423 10.8333H11.6676M8.33423 7.5H14.1676" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h2 className="text-[26px] font-bold text-[#F9FAF9] leading-8 tracking-[-0.39px]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Your Creative Resume
              </h2>
              <p className="text-base text-[#F9FAF9] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Share your portfolio with mentors, parents, or future bootcamp applications
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
              <Edit className="w-5 h-5 text-[#1E3006]" strokeWidth={1.25} />
              <span className="text-base font-bold text-[#163300] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Edit Resume
              </span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-start gap-4 px-6 border-b border-[#EAECF0] mb-8">
          <button
            onClick={() => setActiveTab("all")}
            className={`flex items-center gap-2 px-1 py-2.5 border-b-2 transition-colors ${
              activeTab === "all"
                ? "border-[#6A8042] text-[#6A8042]"
                : "border-transparent text-[#8C8C8C]"
            }`}
          >
            <span className="text-sm font-bold leading-5" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
              All Projects
            </span>
          </button>
          
          <button
            onClick={() => setActiveTab("certifications")}
            className={`flex items-center gap-2 px-1 py-2.5 border-b-2 transition-colors ${
              activeTab === "certifications"
                ? "border-[#6A8042] text-[#6A8042]"
                : "border-transparent text-[#8C8C8C]"
            }`}
          >
            <span className="text-sm font-bold leading-5" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Certifications
            </span>
          </button>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col gap-6 p-6 sm:p-4 rounded-[32px] border border-black/[0.05] bg-[#F9FAF9]">
          <div className="flex flex-col gap-5">
            <h2 className="text-lg font-bold text-black leading-7 tracking-[-0.36px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
              My Projects
            </h2>
            <div className="h-px w-full bg-[#EAECF0]"></div>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-6 p-4 rounded-[20px] border border-black/[0.05] bg-white min-h-[387px]">
            <div className="flex flex-col items-center gap-8 max-w-[352px]">
              <div className="flex w-14 h-14 items-center justify-center rounded-[36px] bg-black/20 backdrop-blur-sm">
                <svg className="w-7 h-7 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.91675 13.9993C2.91675 8.77462 2.91675 6.16225 4.53986 4.53913C6.16299 2.91602 8.77535 2.91602 14.0001 2.91602C19.2248 2.91602 21.8372 2.91602 23.4603 4.53913C25.0834 6.16225 25.0834 8.77462 25.0834 13.9993C25.0834 19.224 25.0834 21.8364 23.4603 23.4596C21.8372 25.0827 19.2248 25.0827 14.0001 25.0827C8.77535 25.0827 6.16299 25.0827 4.53986 23.4596C2.91675 21.8364 2.91675 19.224 2.91675 13.9993Z" stroke="currentColor" strokeWidth="1.75"/>
                  <path d="M2.91675 10.5H25.0834" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
                  <path d="M8.1665 7H8.17698" stroke="currentColor" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.833 7H12.8435" stroke="currentColor" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-2xl font-semibold text-[#121511] text-center leading-[150%]" style={{ fontFamily: 'Random Grotesque Standard Semibold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  No projects found
                </h3>
                <p className="text-lg text-[#8C8C8C] text-center leading-[150%] tracking-[-0.36px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Start your first project to fill this space with your amazing work. Every project earns XP and unlocks badges!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
