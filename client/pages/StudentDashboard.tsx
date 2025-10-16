import { useNavigate, useLocation } from "react-router-dom";
import { Home, Target, Zap, Calendar, Award, Rocket, Palette, Medal } from "lucide-react";
import { useState } from "react";

export default function StudentDashboard() {
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
                  {active && item.id === "dashboard" && (
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 9.99137V12.0834C2.5 14.8332 2.5 16.2081 3.35427 17.0625C4.20854 17.9167 5.58347 17.9167 8.33333 17.9167H11.6667C14.4165 17.9167 15.7914 17.9167 16.6457 17.0625C17.5 16.2081 17.5 14.8332 17.5 12.0834V9.99137C17.5 8.59029 17.5 7.88982 17.2034 7.28342C16.9068 6.67702 16.3539 6.24694 15.248 5.3868L13.5813 4.0905C11.8609 2.75242 11.0007 2.08337 10 2.08337C8.99925 2.08337 8.13908 2.75242 6.41868 4.0905L4.75201 5.3868C3.64611 6.24694 3.09316 6.67702 2.79658 7.28342C2.5 7.88982 2.5 8.59029 2.5 9.99137Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.5001 14.1666C11.8339 14.6853 10.9586 15 10.0001 15C9.04156 15 8.1664 14.6853 7.50012 14.1666" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
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
        <div className="mb-8 pb-5 border-b border-black/[0.05]">
          <h1 className="text-[30px] font-bold text-black leading-[34px] tracking-[-0.75px] mb-1" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
            Welcome back, Mimi! 👋
          </h1>
          <p className="text-base text-[#404040] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
            You're doing amazing this week. Let's keep the momentum going!
          </p>
        </div>

        {/* Profile and Clock In Section */}
        <div className="mb-8 p-4 sm:p-6 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
          <div className="flex flex-col lg:flex-row items-start gap-4">
            {/* Profile Card */}
            <div className="flex-1 p-6 sm:p-8 rounded-[20px] border border-black/[0.05] bg-white">
              <div className="flex flex-col sm:flex-row justify-between gap-6">
                {/* Profile Info */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-start">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/45a406b251c1cb3c2f4a498222dfb0193117ecc3?width=144" 
                      alt="Mini Alex" 
                      className="w-[72px] h-[72px] rounded-full border-2 border-white"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[20px] font-bold text-black leading-[1.2]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                      Mini Alex
                    </h2>
                    <p className="text-base text-[#404040] leading-[1.5] tracking-[-0.32px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                      Age 14 • Design Bootcamp
                    </p>
                  </div>
                </div>

                {/* Current Week */}
                <div className="flex flex-col gap-2">
                  <p className="text-base text-[#404040] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    Current Week
                  </p>
                  <p className="text-[64px] font-bold text-black leading-[0.85]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    1/8
                  </p>
                  <p className="text-base text-[#8C8C8C] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    Making great progress!
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6 flex flex-col gap-2">
                <p className="text-base text-[#404040] leading-[1.5] tracking-[-0.32px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Overall Completion
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 rounded-lg bg-[#FAFAFA] relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-[3%] rounded-lg bg-[#1E3006]"></div>
                  </div>
                  <p className="text-sm text-[#404040] leading-[1.5] tracking-[-0.42px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    0%
                  </p>
                </div>
              </div>
            </div>

            {/* Clock In Card */}
            <div className="w-full lg:w-[456px] p-6 sm:p-8 rounded-[32px] border border-black/[0.05] bg-white">
              <div className="flex flex-col gap-4 text-center">
                <h3 className="text-[20px] font-bold text-black leading-[1.2]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Wednesday 27th August, 2025
                </h3>
                <p className="text-base text-[#505050] leading-[1.5] tracking-[-0.32px] uppercase" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Office Work Hours 9AM–5pM
                </p>
              </div>

              <div className="flex items-center gap-6 my-6">
                <div className="flex-1 flex flex-col gap-2">
                  <p className="text-base text-[#505050] leading-[1.5] tracking-[-0.32px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    Clock in
                  </p>
                  <p className="text-2xl font-bold text-black text-center leading-[1.2]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    ––
                  </p>
                </div>
                
                <div className="h-px flex-1 bg-black/[0.05]"></div>
                
                <div className="flex-1 flex flex-col gap-2">
                  <p className="text-base text-[#505050] leading-[1.5] tracking-[-0.32px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    Clock out
                  </p>
                  <p className="text-2xl font-bold text-black text-center leading-[1.2]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    ––
                  </p>
                </div>
              </div>

              <button className="w-full py-4 px-6 rounded-full bg-[#EE7A13] hover:bg-[#EE7A13]/90 transition-colors">
                <span className="text-base font-bold text-white leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Clock In
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 p-4 sm:p-6 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard 
              icon={
                <svg className="w-5 h-5 text-[#404040]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6093 2.08332C11.7885 1.81295 10.9113 1.66666 9.99996 1.66666C5.39758 1.66666 1.66663 5.39761 1.66663 9.99999C1.66663 14.6023 5.39758 18.3333 9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99999C18.3333 9.12899 18.1996 8.28919 17.9518 7.49999" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                  <path d="M14.1667 10C14.1667 12.3012 12.3012 14.1667 10 14.1667C7.69886 14.1667 5.83337 12.3012 5.83337 10C5.83337 7.69883 7.69886 5.83334 10 5.83334" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.25 3.74999L10 9.99999M16.25 3.74999V1.66666M16.25 3.74999H18.3333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                </svg>
              }
              label="Tasks Completed"
              value="0/0"
              subtitle="Making great progress!"
            />
            <StatCard 
              icon={
                <svg className="w-5 h-5 text-[#404040]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.19016 10.5613H6.80769C5.57125 10.5613 4.95302 10.5613 4.68951 10.1537C4.42599 9.74608 4.67707 9.17817 5.17924 8.04236L6.68894 4.62769C7.14551 3.595 7.37381 3.07865 7.81668 2.78932C8.25956 2.5 8.82162 2.5 9.94587 2.5H11.687C13.0527 2.5 13.7355 2.5 13.993 2.94613C14.2506 3.39225 13.9119 3.98823 13.2343 5.18019L12.341 6.75157C12.0042 7.34412 11.8358 7.64041 11.8381 7.88293C11.8412 8.19813 12.0088 8.4885 12.2795 8.6475C12.4879 8.76992 12.8273 8.76992 13.5062 8.76992C14.3645 8.76992 14.7936 8.76992 15.0171 8.9185C15.3075 9.1115 15.4595 9.45683 15.4062 9.80267C15.3652 10.0688 15.0765 10.388 14.4992 11.0264L9.88662 16.1269C8.98062 17.1288 8.52762 17.6297 8.22343 17.4712C7.91923 17.3126 8.06531 16.6518 8.35746 15.3302L8.92979 12.7413C9.15221 11.735 9.26346 11.2318 8.99596 10.8966C8.72846 10.5613 8.21568 10.5613 7.19016 10.5613Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"/>
                </svg>
              }
              label="XP Points"
              value="0"
              subtitle="+50 this week"
            />
            <StatCard 
              icon={
                <svg className="w-5 h-5 text-[#404040]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3334 1.66666V4.99999M6.66675 1.66666V4.99999" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.8333 3.33334H9.16667C6.02397 3.33334 4.45262 3.33334 3.47631 4.30965C2.5 5.28597 2.5 6.85731 2.5 10V11.6667C2.5 14.8093 2.5 16.3808 3.47631 17.357C4.45262 18.3333 6.02397 18.3333 9.16667 18.3333H10.8333C13.976 18.3333 15.5474 18.3333 16.5237 17.357C17.5 16.3808 17.5 14.8093 17.5 11.6667V10C17.5 6.85731 17.5 5.28597 16.5237 4.30965C15.5474 3.33334 13.976 3.33334 10.8333 3.33334Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.5 8.33334H17.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.99633 11.6667H10.0038M9.99633 15H10.0038M13.3259 11.6667H13.3334M6.66675 11.6667H6.67422M6.66675 15H6.67422" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              label="Day Streak"
              value="0"
              subtitle="Keep it going! 🔥"
            />
            <StatCard 
              icon={
                <svg className="w-5 h-5 text-[#404040]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 4.26079C2.5 3.80023 2.5 3.56995 2.53574 3.3781C2.6942 2.52759 3.35471 1.86226 4.19907 1.70266C4.38954 1.66666 4.61816 1.66666 5.0754 1.66666H14.9246C15.3818 1.66666 15.6104 1.66666 15.8009 1.70266C16.6452 1.86226 17.3058 2.52759 17.4642 3.3781C17.5 3.56995 17.5 3.80023 17.5 4.26079C17.5 4.71266 17.5 4.93858 17.4737 5.14808C17.3591 6.06283 16.876 6.88983 16.1378 7.43506C15.9687 7.55992 15.7727 7.66965 15.3805 7.88909L13.2376 9.08824C11.6551 9.97382 10.8637 10.4167 10 10.4167C9.13625 10.4167 8.34492 9.97382 6.76238 9.08824L4.61948 7.88909C4.22733 7.66965 4.03127 7.55992 3.86221 7.43506C3.12404 6.88983 2.64095 6.06283 2.52627 5.14808C2.5 4.93858 2.5 4.71266 2.5 4.26079Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                  <path d="M6.66675 4.16666V4.99999M10.0001 4.16666V6.66666M13.3334 4.16666V4.99999" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                  <path d="M10.6478 11.3749L11.3077 12.7057C11.3977 12.8909 11.6377 13.0686 11.8402 13.1026L13.0363 13.303C13.8012 13.4315 13.9812 13.9911 13.4301 14.543L12.5002 15.4806C12.3427 15.6394 12.2564 15.9456 12.3052 16.1649L12.5714 17.3255C12.7814 18.2442 12.2977 18.5996 11.4915 18.1194L10.3704 17.4502C10.1679 17.3293 9.83417 17.3293 9.628 17.4502L8.50683 18.1194C7.70444 18.5996 7.21699 18.2404 7.42697 17.3255L7.69319 16.1649C7.74193 15.9456 7.65569 15.6394 7.49821 15.4806L6.56832 14.543C6.02087 13.9911 6.19711 13.4315 6.96202 13.303L8.15814 13.1026C8.35683 13.0686 8.59683 12.8909 8.68683 12.7057L9.34675 11.3749C9.70675 10.6528 10.2917 10.6528 10.6478 11.3749Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              label="Badges Earned"
              value="0"
              subtitle="Awesome work!"
            />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* This Week's Focus */}
          <div className="flex-1 p-4 sm:p-6 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
            <div className="flex justify-between items-start gap-4 mb-5 pb-5 border-b border-[#EAECF0]">
              <h3 className="text-lg font-bold text-black leading-7 tracking-[-0.36px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                This Week's Focus
              </h3>
              <button className="px-4 py-2.5 rounded-lg hover:bg-black/5 transition-colors">
                <span className="text-base font-bold text-[#404040] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  View All
                </span>
              </button>
            </div>
            <EmptyState 
              icon={
                <svg className="w-7 h-7 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7681 7.57108L15.5013 5.83791C17.4528 3.8864 20.0077 3.07694 22.7116 2.94466C23.7633 2.89321 24.2891 2.86748 24.7108 3.28916C25.1325 3.71083 25.1067 4.23667 25.0553 5.28838C24.923 7.99225 24.1136 10.5472 22.1621 12.4986L20.4289 14.2318C19.0016 15.6591 18.5958 16.065 18.8954 17.6132C19.1912 18.7958 19.4773 19.941 18.6174 20.801C17.5743 21.8441 16.6227 21.8441 15.5796 20.801L7.19897 12.4203C6.15586 11.3772 6.15583 10.4257 7.19897 9.38256C8.05891 8.52261 9.20413 8.80885 10.3868 9.10454C11.935 9.40419 12.3408 8.99838 13.7681 7.57108Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
                  <path d="M19.8285 8.16667H19.839" stroke="currentColor" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.91663 25.0833L8.74996 19.25" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                  <path d="M9.91663 25.0833L12.25 22.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                  <path d="M2.91663 18.0833L5.24996 15.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                </svg>
              }
              title="No challenge yet!"
              description="Your next creative mission will appear here once the new week begins."
            />
          </div>

          {/* Recent Projects */}
          <div className="flex-1 p-4 sm:p-6 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
            <div className="flex justify-between items-start gap-4 mb-5 pb-5 border-b border-[#EAECF0]">
              <h3 className="text-lg font-bold text-black leading-7 tracking-[-0.36px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Recent Projects
              </h3>
              <button className="px-4 py-2.5 rounded-lg hover:bg-black/5 transition-colors">
                <span className="text-base font-bold text-[#404040] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  View All
                </span>
              </button>
            </div>
            <EmptyState 
              icon={
                <svg className="w-7 h-7 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.6666 14C25.6666 7.55667 20.4432 2.33333 13.9999 2.33333C7.55659 2.33333 2.33325 7.55667 2.33325 14C2.33325 20.4433 7.55659 25.6667 13.9999 25.6667C14.9819 25.6667 16.3333 25.8023 16.3333 24.5C16.3333 23.7895 15.9637 23.2414 15.5966 22.6968C15.0595 21.9001 14.5276 21.1112 15.1666 19.8333C15.9444 18.2778 17.2407 18.2778 19.2283 18.2778C20.2222 18.2778 21.3889 18.2778 22.7499 18.0833C25.2011 17.7332 25.6666 16.2265 25.6666 14Z" stroke="currentColor" strokeWidth="1.75"/>
                  <path d="M8.16675 17.5024L8.17687 17.4996" stroke="currentColor" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.0833 11.6667C12.0498 11.6667 12.8333 10.8832 12.8333 9.91667C12.8333 8.95017 12.0498 8.16667 11.0833 8.16667C10.1168 8.16667 9.33325 8.95017 9.33325 9.91667C9.33325 10.8832 10.1168 11.6667 11.0833 11.6667Z" stroke="currentColor" strokeWidth="1.75"/>
                  <path d="M19.25 12.8333C20.2165 12.8333 21 12.0498 21 11.0833C21 10.1168 20.2165 9.33333 19.25 9.33333C18.2835 9.33333 17.5 10.1168 17.5 11.0833C17.5 12.0498 18.2835 12.8333 19.25 12.8333Z" stroke="currentColor" strokeWidth="1.75"/>
                </svg>
              }
              title="No projects yet!"
              description="Start your first project to fill this space with your amazing work."
            />
          </div>
        </div>

        {/* Latest Badges */}
        <div className="mt-8 p-4 sm:p-6 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
          <div className="flex justify-between items-start gap-4 mb-5 pb-5 border-b border-[#EAECF0]">
            <h3 className="text-lg font-bold text-black leading-7 tracking-[-0.36px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Latest Badges
            </h3>
            <button className="px-4 py-2.5 rounded-lg hover:bg-black/5 transition-colors">
              <span className="text-base font-bold text-[#404040] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                View All
              </span>
            </button>
          </div>
          <EmptyState 
            icon={
              <svg className="w-7 h-7 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 5.9651C3.5 5.32032 3.5 4.99792 3.55004 4.72933C3.77188 3.53862 4.69659 2.60716 5.8787 2.38371C6.14536 2.33331 6.46542 2.33331 7.10556 2.33331H20.8944C21.5346 2.33331 21.8546 2.33331 22.1213 2.38371C23.3033 2.60716 24.2282 3.53862 24.4499 4.72933C24.5 4.99792 24.5 5.32032 24.5 5.9651C24.5 6.59771 24.5 6.91401 24.4632 7.20731C24.3027 8.48796 23.6264 9.64576 22.593 10.4091C22.3562 10.5839 22.0817 10.7375 21.5327 11.0447L18.5326 12.7235C16.3171 13.9633 15.2092 14.5833 14 14.5833C12.7907 14.5833 11.6829 13.9633 9.46734 12.7235L6.46728 11.0447C5.91827 10.7375 5.64377 10.5839 5.40709 10.4091C4.37366 9.64576 3.69733 8.48796 3.53677 7.20731C3.5 6.91401 3.5 6.59771 3.5 5.9651Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                <path d="M9.33325 5.83331V6.99998M13.9999 5.83331V9.33331M18.6666 5.83331V6.99998" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                <path d="M14.907 15.9249L15.8308 17.7879C15.9568 18.0473 16.2928 18.296 16.5763 18.3436L18.2509 18.6242C19.3217 18.8041 19.5737 19.5875 18.8021 20.3602L17.5002 21.6728C17.2797 21.8952 17.159 22.3238 17.2272 22.6309L17.6 24.2557C17.894 25.5418 17.2167 26.0394 16.0881 25.3672L14.5186 24.4303C14.2351 24.2611 13.7678 24.2611 13.4792 24.4303L11.9096 25.3672C10.7862 26.0394 10.1038 25.5366 10.3978 24.2557L10.7705 22.6309C10.8387 22.3238 10.718 21.8952 10.4975 21.6728L9.19564 20.3602C8.42922 19.5875 8.67595 18.8041 9.74683 18.6242L11.4214 18.3436C11.6996 18.296 12.0356 18.0473 12.1616 17.7879L13.0854 15.9249C13.5894 14.914 14.4083 14.914 14.907 15.9249Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            title="No badges earned yet!"
            description="Complete your first challenge or project to earn your first badge."
          />
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
        <p className="text-base text-[#404040] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
          {label}
        </p>
        <p className="text-[64px] font-bold text-black leading-[0.85]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
          {value}
        </p>
        <p className="text-base text-[#8C8C8C] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
          {subtitle}
        </p>
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
            <h4 className="text-2xl font-semibold text-[#121511] leading-[1.5]" style={{ fontFamily: 'Random Grotesque Standard Semibold, -apple-system, Roboto, Helvetica, sans-serif' }}>
              {title}
            </h4>
            <p className="text-lg text-[#8C8C8C] leading-[1.5] tracking-[-0.36px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
