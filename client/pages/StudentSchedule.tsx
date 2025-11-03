import { useNavigate, useLocation } from "react-router-dom";
import { Home, Backpack, Lightbulb, Sparkles, Trophy, Calendar, Folder, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useState } from "react";

export default function StudentSchedule() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentWeek, setCurrentWeek] = useState(3);
  const [viewMode, setViewMode] = useState<"day" | "week" | "month" | "year">("week");

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

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayNumbers = [1, 2, 3, 4, 5, 6, 7];

  const events = [
    { day: 0, time: "9:00 AM", duration: 120, title: "Weekly Company All-Hands Meeting", color: "yellow", top: 40 },
    { day: 1, time: "9:00 AM", duration: 80, title: "Design Team Standup", color: "yellow", top: 0 },
    { day: 1, time: "11:00 AM", duration: 80, title: "Client Design Review", color: "orange", top: 160 },
    { day: 1, time: "12:00 PM", duration: 80, title: "🍱 Lunch Break", color: "blue", top: 240 },
    { day: 1, time: "2:00 PM", duration: 80, title: "Client Design Review", color: "purple", top: 400 },
    { day: 1, time: "2:00 PM", duration: 80, title: "Client Design Review", color: "purple", top: 480 },
    { day: 2, time: "10:00 AM", duration: 120, title: "Client Design Review", color: "orange", top: 80 },
    { day: 2, time: "12:00 PM", duration: 80, title: "🍱 Lunch Break", color: "blue", top: 240 },
    { day: 3, time: "12:00 PM", duration: 80, title: "🍱 Lunch Break", color: "blue", top: 240 },
    { day: 4, time: "9:30 AM", duration: 120, title: "Client Design Review", color: "orange", top: 40 },
    { day: 4, time: "12:00 PM", duration: 80, title: "🍱 Lunch Break", color: "blue", top: 240 },
    { day: 4, time: "2:00 PM", duration: 80, title: "Client Design Review", color: "purple", top: 400 },
    { day: 4, time: "4:00 PM", duration: 80, title: "🍹 Happy Hour", color: "red", top: 560 },
  ];

  const getEventColor = (color: string) => {
    const colors = {
      yellow: { bg: "#FEF3C7", border: "#D97706", text: "#D97706" },
      orange: { bg: "#FFEDD5", border: "#EA580C", text: "#EA580C" },
      blue: { bg: "#DBEAFE", border: "#3B82F6", text: "#3B82F6" },
      purple: { bg: "#EDE9FE", border: "#7C3AED", text: "#7C3AED" },
      red: { bg: "#FFE4E6", border: "#E11D48", text: "#E11D48" },
    };
    return colors[color as keyof typeof colors] || colors.blue;
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
                Schedule 📅
              </h1>
              <p className="text-base text-[#404040] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Stay on track with sessions, deadlines, and workshops
              </p>
            </div>
          </div>
          <div className="h-px w-full bg-black/[0.1]"></div>
        </div>

        {/* Week Banner */}
        <div className="flex items-center gap-4 px-8 py-6 mb-8 rounded-3xl bg-gradient-to-r from-[#163300] to-[#9FE870]">
          <div className="flex w-12 h-12 items-center justify-center rounded-2xl bg-white/20">
            <Calendar className="w-6 h-6 text-[#FAFAFA]" strokeWidth={1.25} />
          </div>
          <div>
            <h2 className="text-[44px] font-bold text-[#FAFAFA] leading-10 tracking-[-1.32px]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Week {currentWeek} of 8
            </h2>
            <p className="text-base text-[#FAFAFA] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Creative Storytelling Bootcamp
            </p>
          </div>
        </div>

        {/* Calendar Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-black" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
              October 4th, 2025
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <button className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-base font-bold text-black" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Week 1
              </span>
              <button className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
              {["Day", "Week", "Month", "Year"].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode.toLowerCase() as any)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    viewMode === mode.toLowerCase()
                      ? "bg-[#9FE870] text-[#163300]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}
                >
                  {mode}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200">
              <Search className="w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..."
                className="outline-none text-sm bg-transparent"
                style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}
              />
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="border border-[#E2E8F0] rounded-2xl overflow-hidden">
          {/* Days Header */}
          <div className="grid grid-cols-8 border-b border-[#E2E8F0]">
            <div className="p-4 bg-[#F1F5F9]"></div>
            {days.map((day, index) => (
              <div key={day} className="p-4 text-center border-l border-[#E2E8F0] bg-white">
                <div className="text-xs font-medium text-gray-500 mb-1" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  {day}
                </div>
                <div className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  {dayNumbers[index]}
                </div>
              </div>
            ))}
          </div>

          {/* Time Grid */}
          <div className="grid grid-cols-8 relative bg-white" style={{ height: '640px' }}>
            {/* Time Labels */}
            <div className="border-r border-[#E2E8F0]">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="h-20 border-b border-[#F1F5F9] flex items-start justify-end p-2">
                  <span className="text-xs text-gray-500" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    {i + 8}:00 {i + 8 >= 12 ? 'PM' : 'AM'}
                  </span>
                </div>
              ))}
            </div>

            {/* Day Columns */}
            {Array.from({ length: 7 }, (_, dayIndex) => (
              <div key={dayIndex} className="border-r border-[#E2E8F0] relative">
                {Array.from({ length: 24 }, (_, hourIndex) => (
                  <div
                    key={hourIndex}
                    className={`h-10 ${hourIndex % 2 === 0 ? 'border-b border-[#F1F5F9]' : 'border-b border-[#E2E8F0]'}`}
                  ></div>
                ))}
                
                {/* Events */}
                {events
                  .filter((event) => event.day === dayIndex)
                  .map((event, eventIndex) => {
                    const colors = getEventColor(event.color);
                    return (
                      <div
                        key={eventIndex}
                        className="absolute left-0.5 right-0.5 rounded p-2"
                        style={{
                          top: `${event.top}px`,
                          height: `${event.duration}px`,
                          backgroundColor: colors.bg,
                          borderLeft: `2px solid ${colors.border}`,
                        }}
                      >
                        <div className="text-xs font-medium" style={{ color: colors.text, fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                          {event.time}
                        </div>
                        <div className="text-sm font-semibold mt-0.5" style={{ color: colors.text, fontFamily: 'Random Grotesque Standard Semibold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                          {event.title}
                        </div>
                      </div>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
