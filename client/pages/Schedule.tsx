import { useNavigate } from "react-router-dom";
import { Target, Zap, Award, ChevronLeft, ChevronRight, Search, Info, X } from "lucide-react";
import { useState } from "react";

export default function Schedule() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(true);
  const [activeView, setActiveView] = useState("Week");

  const navItems = [
    { label: "Dashboard", path: "/dashboard", active: false },
    { label: "My Child/Progress", path: "/progress", active: false },
    { label: "Schedule", path: "/schedule", active: true, icon: "calendar" },
    { label: "Messages", path: "/messages", active: false },
    { label: "Safety Center", path: "/safety-center", active: false },
    { label: "Settings", path: "/settings", active: false },
  ];

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const timeSlots = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM"];

  const events = [
    { day: 1, time: "9:00 AM", title: "Weekly Company All-Hands Meeting", color: "yellow", span: 3 },
    { day: 2, time: "9:00 AM", title: "Design Team Standup", color: "yellow", span: 2 },
    { day: 2, time: "11:00 AM", title: "Client Design Review", color: "orange", span: 2 },
    { day: 3, time: "10:00 AM", title: "Client Design Review", color: "orange", span: 3 },
    { day: 5, time: "9:30 AM", title: "Client Design Review", color: "orange", span: 3 },
    { day: 2, time: "2:00 PM", title: "Client Design Review", color: "purple", span: 2 },
    { day: 2, time: "2:00 PM", title: "Client Design Review", color: "purple", span: 2 },
    { day: 4, time: "2:00 PM", title: "Client Design Review", color: "purple", span: 2 },
    { day: 5, time: "4:00 PM", title: "🍹 Happy Hour", color: "red", span: 2 },
  ];

  const lunchBreaks = [0, 1, 2, 3, 4].map(day => ({ day, time: "12:00 PM", title: "🍱 Lunch Break", color: "blue", span: 2 }));

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
              {item.icon === "calendar" && item.active && (
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3334 1.6665V4.99984M6.66675 1.6665V4.99984" stroke="#163300" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.8333 3.3335H9.16667C6.02397 3.3335 4.45262 3.3335 3.47631 4.3098C2.5 5.28612 2.5 6.85746 2.5 10.0002V11.6668C2.5 14.8095 2.5 16.3809 3.47631 17.3572C4.45262 18.3335 6.02397 18.3335 9.16667 18.3335H10.8333C13.976 18.3335 15.5474 18.3335 16.5237 17.3572C17.5 16.3809 17.5 14.8095 17.5 11.6668V10.0002C17.5 6.85746 17.5 5.28612 16.5237 4.3098C15.5474 3.3335 13.976 3.3335 10.8333 3.3335Z" stroke="#163300" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.5 8.3335H17.5" stroke="#163300" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.99633 11.6665H10.0038M9.99633 14.9998H10.0038M13.3259 11.6665H13.3334M6.66675 11.6665H6.67422M6.66675 14.9998H6.67422" stroke="#163300" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
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
                Schedule & Events
              </h1>
              <p className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">
                Track Your child's sessions, deadlines, and live workshops
              </p>
            </div>
          </div>
          <div className="h-px w-full bg-black/5"></div>
        </div>

        {/* Alert */}
        {showAlert && (
          <div className="flex p-4 items-start gap-3 w-full rounded-xl border border-[#121511] bg-[#FDF2E7]">
            <Info className="w-5 h-5 text-[#EE7A13] flex-shrink-0" />
            <div className="flex flex-col items-start gap-3 flex-1">
              <div className="flex flex-col items-start gap-1 w-full">
                <div className="text-[#EE7A13] font-satoshi text-sm font-bold leading-5 tracking-[-0.14px]">
                  Stay Updated
                </div>
                <div className="text-[#EE7A13] font-satoshi text-sm leading-5 tracking-[-0.14px]">
                  You'll receive email reminders 24 hours before workshops and deadlines. Calendar invites can be added to your personal calendar from confirmation emails.
                </div>
              </div>
            </div>
            <button onClick={() => setShowAlert(false)} className="flex justify-center items-center p-2 rounded-lg hover:bg-black/5 transition-colors">
              <X className="w-5 h-5 text-[#EE7A13]" />
            </button>
          </div>
        )}

        {/* Stats Cards */}
        <div className="flex flex-col items-start gap-6 w-full p-4 rounded-[32px] border border-black/5 bg-[#FAFAFA]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {/* Live Workshops */}
            <div className="flex flex-col items-start gap-6 p-4 rounded-[20px] border border-black/5 bg-white">
              <div className="flex w-16 h-16 justify-center items-center rounded-full bg-[#F7F7F7]">
                <Target className="w-5 h-5 text-[#404040]" />
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">
                  Live Workshops
                </div>
                <div className="text-black font-random-grotesque-bold text-[64px] font-bold leading-[85%]">
                  0
                </div>
              </div>
            </div>

            {/* Deadlines */}
            <div className="flex flex-col items-start gap-6 p-4 rounded-[20px] border border-black/5 bg-white">
              <div className="flex w-16 h-16 justify-center items-center rounded-full bg-[#F7F7F7]">
                <Zap className="w-5 h-5 text-[#404040]" />
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">
                  Deadlines
                </div>
                <div className="text-black font-random-grotesque-bold text-[64px] font-bold leading-[85%]">
                  0
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="flex flex-col items-start gap-6 p-4 rounded-[20px] border border-black/5 bg-white">
              <div className="flex w-16 h-16 justify-center items-center rounded-full bg-[#F7F7F7]">
                <Award className="w-5 h-5 text-[#404040]" />
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">
                  Reviews
                </div>
                <div className="text-black font-random-grotesque-bold text-[64px] font-bold leading-[85%]">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="flex flex-col items-start gap-6 w-full p-6 sm:p-4 rounded-[32px] border border-black/5 bg-[#FAFAFA]">
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex items-start gap-4 w-full">
              <div className="flex-1">
                <h3 className="text-black font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">
                  October 4th, 2025
                </h3>
              </div>
            </div>
            <div className="h-px w-full bg-[#EAECF0]"></div>
          </div>

          <div className="flex flex-col items-start gap-4 w-full p-4 rounded-[20px] border border-black/5 bg-white">
            {/* Calendar Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-4 w-full">
              <div className="flex items-center gap-4 flex-1">
                <h4 className="text-black font-random-grotesque-semibold text-2xl sm:text-[28px] leading-[150%]">
                  Week 1
                </h4>
                <div className="flex items-start gap-2">
                  <button className="flex w-6 h-6 items-start p-0.5 justify-center items-center rounded-sm bg-white hover:bg-gray-100 transition-colors">
                    <ChevronLeft className="w-4 h-4 text-[#334155]" />
                  </button>
                  <button className="flex w-6 h-6 items-start p-0.5 justify-center items-center rounded-sm bg-white hover:bg-gray-100 transition-colors">
                    <ChevronRight className="w-4 h-4 text-[#334155]" />
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2">
                {["Day", "Week", "Month", "Year"].map((view) => (
                  <button
                    key={view}
                    onClick={() => setActiveView(view)}
                    className={`flex px-4 py-2 justify-center items-center gap-2 rounded border transition-colors ${
                      activeView === view
                        ? "bg-[rgba(159,232,112,0.3)] border-transparent"
                        : "border-[#E2E8F0] bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-black font-plus-jakarta text-sm leading-[150%] tracking-[-0.42px]">
                      {view}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex w-full sm:w-[200px] items-center gap-2 px-2 py-2 rounded border border-black/5 bg-white">
                <Search className="w-5 h-5 text-[#454745]" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="flex-1 text-[#454745] font-plus-jakarta text-sm leading-[150%] tracking-[-0.42px] outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-[800px] flex flex-col items-start rounded-2xl border border-black/5">
                {/* Day Headers */}
                <div className="flex items-start w-full">
                  <div className="flex w-[75px] flex-col justify-end items-end border-r border-black/5 bg-white">
                    <div className="flex p-2 pb-3 justify-center items-end flex-1 w-full">
                      <div className="text-[#404040] text-right font-plus-jakarta text-sm leading-[150%] tracking-[-0.42px]">
                        all-day
                      </div>
                    </div>
                    <div className="h-1 w-full bg-black/5"></div>
                  </div>
                  
                  {days.map((day, index) => (
                    <div key={day} className="flex-1 flex flex-col items-start bg-white border-l border-[#E2E8F0]">
                      <div className="flex p-2 items-center gap-2 w-full bg-white border-t border-[#E2E8F0]">
                        <div className="flex flex-col items-start flex-1">
                          <div className="text-[#404040] font-random-grotesque-semibold text-sm leading-[150%]">
                            {day}
                          </div>
                          <div className="text-[#8C8C8C] font-plus-jakarta text-lg leading-[150%] tracking-[-0.36px]">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                      <div className="h-10 w-full bg-white"></div>
                      <div className="h-1 w-full bg-black/5"></div>
                    </div>
                  ))}
                </div>

                {/* Time Slots */}
                <div className="flex items-center w-full max-h-[400px] overflow-y-auto">
                  <div className="flex w-[75px] flex-col items-end gap-[60px] py-[68px] px-2 pb-2 border-r border-[#E2E8F0] bg-white">
                    {timeSlots.map((time) => (
                      <div key={time} className="text-[#404040] text-right font-plus-jakarta text-sm leading-[150%] tracking-[-0.42px]">
                        {time}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex-1 relative">
                    {/* Grid Lines */}
                    <div className="flex">
                      {days.map((_, dayIndex) => (
                        <div key={dayIndex} className="flex-1 flex flex-col">
                          {timeSlots.map((_, slotIndex) => (
                            <div key={slotIndex} className="h-20 border-b border-r border-[#E2E8F0]"></div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
