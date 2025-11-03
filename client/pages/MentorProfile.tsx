import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, BookOpen, Heart, Wand2, TrendingUp, Settings, ArrowLeft, Phone, Library, MoreVertical } from "lucide-react";
import { useState } from "react";

export default function MentorProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"performance" | "activity">("activity");

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/admin-dashboard", icon: Home },
    { id: "students", label: "Students", path: "/admin-students", icon: Users },
    { id: "mentors", label: "Mentors", path: "/admin-mentors", icon: Users, active: true },
    { id: "parents", label: "Parents", path: "/admin-parents", icon: Heart },
    { id: "programs", label: "Programs", path: "/admin-programs", icon: BookOpen },
    { id: "ai-logs", label: "Ai System Logs", path: "/admin-ai-logs", icon: Wand2 },
    { id: "reports", label: "Reports", path: "/admin-reports", icon: TrendingUp },
    { id: "settings", label: "Settings", path: "/admin-settings", icon: Settings },
  ];

  const activityFeed = [
    {
      id: 1,
      type: "favorite",
      icon: "heart",
      color: "#EE7A13",
      actor: "Michael Lamb",
      action: "was favorited by",
      subject: "Candide",
      time: "Just now",
    },
    {
      id: 2,
      type: "reading",
      icon: "book",
      color: "#EDC843",
      actor: "Teresa Silva",
      action: "started reading",
      subject: "Siddhartha",
      time: "1 min ago",
      quote: '"So excited to get started on this novel! The prose and style of it is absolutely gorgeous, and its meaning and philosophy is something to truly cherish."',
    },
    {
      id: 3,
      type: "favorite",
      icon: "heart",
      color: "#FFC091",
      actor: "Maria Gardner",
      action: "was favorited by",
      subject: "The Alchemist",
      time: "2 mins ago",
    },
    {
      id: 4,
      type: "review",
      icon: "star",
      color: "#FFD7EF",
      actor: "Loretta Goodman",
      action: "reviewed",
      subject: "Rebecca",
      time: "1 min ago",
      quote: '"This is one of the few books I just love to read again and again. The book has a very beautiful description of its characters and the mansion of menederly. It can also be described as an amazing gothic mystery love story. The unfolding of the mystery is marvellously depicted making us grip to the book till the end."',
    },
    {
      id: 5,
      type: "review",
      icon: "star",
      color: "#FFD7EF",
      actor: "Loretta Goodman",
      action: "reviewed",
      subject: "Rebecca",
      time: "1 min ago",
      quote: '"This is one of the few books I just love to read again and again. The book has a very beautiful description of its characters and the mansion of menederly. It can also be described as an amazing gothic mystery love story. The unfolding of the mystery is marvellously depicted making us grip to the book till the end."',
    },
  ];

  const subjectAreas = [
    "AI Research",
    "Imaging",
    "Writing",
    "Advertising",
    "Video",
    "Vibe Coding",
    "Product Design",
  ];

  return (
    <div className="min-h-screen bg-[#1E3006] p-3 sm:p-6">
      {/* Top Navigation */}
      <div className="max-w-[1440px] mx-auto mb-6">
        <div className="flex justify-between items-center px-0 sm:px-16">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9bc7f4c3957329926c45ba3e1d6104debeb9620d?width=112" 
            alt="Logo" 
            className="w-14 h-14" 
          />
          
          <div className="flex justify-center items-start gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.active || location.pathname === item.path;
              
              return (
                <div
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className={`flex h-12 px-4 items-center gap-1 rounded-full cursor-pointer transition-colors ${
                    isActive ? "bg-[rgba(159,232,112,0.20)]" : ""
                  }`}
                >
                  <Icon className={`w-[18px] h-[18px] ${isActive ? "stroke-[#B1FA63]" : "stroke-[#CFD6C9]"}`} />
                  <div className={`text-sm font-satoshi ${isActive ? "text-[#B1FA63] font-bold" : "text-[#CFD6C9] font-medium"} tracking-[-0.14px]`}>
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-white bg-[#9FE870] overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7469593e83fba7a0c1099e16258d02c681f57b7f?width=80" 
                alt="Avatar" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col">
              <div className="text-[#1E3006] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">Adam Mid</div>
              <div className="text-[#21231D] font-dm-sans text-[13px] leading-4 tracking-[-0.13px]">Mentor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto border border-[rgba(0,0,0,0.10)] rounded-[32px] bg-[#F9FAF9] p-8 sm:p-16">
        {/* Page Header */}
        <div className="flex flex-col gap-5 mb-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5 stroke-[#757575]" />
            <button 
              onClick={() => navigate(-1)}
              className="flex px-2 py-1 items-center rounded-md bg-[#F9FAFB] hover:bg-gray-200 transition-colors"
            >
              <span className="text-[#8C8C8C] font-satoshi text-sm font-medium leading-5">Back to Students</span>
            </button>
          </div>

          {/* Title */}
          <div className="flex justify-between items-start">
            <h1 className="text-black font-random-grotesque-bold text-[30px] font-bold leading-[34px] tracking-[-0.75px]">
              User Profile
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex items-start gap-4 border-b border-[#EAECF0]">
            <button
              onClick={() => setActiveTab("performance")}
              className={`flex px-1 py-[1px] pb-3 items-center gap-2 ${
                activeTab === "performance" ? "border-b-2 border-[#6A8042]" : ""
              }`}
            >
              <span className={`font-satoshi text-sm font-medium leading-5 ${
                activeTab === "performance" ? "text-[#6A8042]" : "text-[#8C8C8C]"
              }`}>
                Performance Metrics
              </span>
            </button>
            <button
              onClick={() => setActiveTab("activity")}
              className={`flex px-1 py-[1px] pb-3 items-center gap-2 ${
                activeTab === "activity" ? "border-b-2 border-[#6A8042]" : ""
              }`}
            >
              <span className={`font-satoshi text-sm font-medium leading-5 ${
                activeTab === "activity" ? "text-[#6A8042]" : "text-[#8C8C8C]"
              }`}>
                Activity
              </span>
            </button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="flex gap-6 items-start">
          {/* Left Column - Activity Feed */}
          <div className="flex-1 flex p-11 flex-col gap-12 rounded-[32px] bg-white">
            <div className="flex p-4 flex-col gap-6 rounded-[32px] border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9]">
              {/* Section Header */}
              <div className="flex flex-col gap-5">
                <h2 className="text-black font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">
                  Performance Metrics
                </h2>
                <div className="h-[1px] bg-[#EAECF0]"></div>
              </div>

              {/* Activity Feed */}
              <div className="flex p-6 flex-col gap-4 rounded-[24px] border border-[#6A8042] bg-white">
                {activityFeed.map((activity, index) => (
                  <div key={activity.id} className="flex items-start gap-4">
                    {/* Icon with connector */}
                    <div className="flex flex-col items-center relative">
                      <div 
                        className="flex w-6 h-6 p-0.5 items-center justify-center rounded-full"
                        style={{ backgroundColor: activity.color }}
                      >
                        {activity.icon === "heart" && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.99677 4.82181C7.03042 3.73967 5.41896 3.44858 4.20818 4.4395C2.99741 5.43041 2.82695 7.08717 3.77778 8.25912L7.99677 12.1663L12.2158 8.25912C13.1666 7.08717 13.0169 5.41999 11.7854 4.4395C10.5538 3.45901 8.96312 3.73967 7.99677 4.82181Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {activity.icon === "book" && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00008 4.50033L3.16675 3.16699V11.5003L8.00008 12.8337" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 4.66699V12.667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 4.50033L12.8333 3.16699V11.5003L8 12.8337" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {activity.icon === "star" && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00008 3.16699L9.16675 6.83366H12.8334L9.83341 9.16699L10.8334 12.8337L8.00008 10.5003L5.16675 12.8337L6.16675 9.16699L3.16675 6.83366H6.83341L8.00008 3.16699Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      {index < activityFeed.length - 1 && activity.quote && (
                        <div className="w-0 h-[110px] border-l border-[#E2E8F0] mt-1"></div>
                      )}
                      {index < activityFeed.length - 1 && !activity.quote && (
                        <div className="w-0 h-4 border-l border-[#E2E8F0] mt-1"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex items-center gap-1 flex-wrap">
                        <span className="text-[#6A8042] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">
                          {activity.subject}
                        </span>
                        <span className="text-[#21231D] font-satoshi text-lg leading-7 tracking-[-0.18px]">
                          {activity.action}
                        </span>
                        <span className="text-[#6A8042] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">
                          {activity.actor}
                        </span>
                        <span className="text-[#64748B] text-sm leading-5">•</span>
                        <span className="text-[#21231D] font-satoshi text-lg leading-7 tracking-[-0.18px]">
                          {activity.time}
                        </span>
                      </div>

                      {activity.quote && (
                        <div className="flex p-4 rounded-2xl border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9]">
                          <p className="text-[#21231D] font-satoshi text-base leading-6 tracking-[-0.16px]">
                            {activity.quote}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="w-[480px] flex p-4 pb-12 flex-col gap-4 rounded-[32px] bg-white">
            <div className="flex flex-col gap-12">
              {/* Profile Header */}
              <div className="flex flex-col gap-0 rounded-t-[24px] -mx-4 -mt-4">
                {/* Green Gradient Background */}
                <div className="h-[240px] rounded-t-[32px] bg-gradient-to-r from-[#163300] to-[#9FE870] relative">
                  {/* Profile Photo */}
                  <div className="absolute -bottom-[53px] left-8">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/1b58265f2d5522307b29606a611d39ce1c673920?width=212" 
                      alt="Sarah Martinez" 
                      className="w-[106px] h-[106px] rounded-full border-2 border-white shadow-[0_4px_8px_-2px_rgba(16,24,40,0.10),0_2px_4px_-2px_rgba(16,24,40,0.06)]" 
                    />
                  </div>
                  {/* Three Dots Menu */}
                  <button className="absolute bottom-4 right-8">
                    <MoreVertical className="w-5 h-5 stroke-[#21231D]" />
                  </button>
                </div>

                {/* Profile Info */}
                <div className="flex px-8 pt-16 pb-6 flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 flex flex-col gap-1">
                      <h2 className="text-[#101828] font-random-grotesque-bold text-[26px] font-bold leading-8 tracking-[-0.39px]">
                        Sarah Martinez
                      </h2>
                      <p className="text-[#404040] font-satoshi text-base leading-6">
                        olivia@emai.com
                      </p>
                    </div>
                    <div className="flex px-2 py-0.5 items-center rounded-2xl bg-[#F9FAF9]">
                      <span className="text-[#1E3006] text-center font-satoshi text-xs font-medium leading-[18px]">
                        Mentor
                      </span>
                    </div>
                  </div>
                  <div className="h-[1px] bg-[#EAECF0]"></div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="flex flex-col gap-2 px-4">
                <div className="flex p-2 flex-col gap-2 rounded-[24px] bg-[#F9FAF9]">
                  <div className="flex p-4 flex-col gap-1 rounded-2xl bg-white">
                    {/* Phone */}
                    <div className="flex items-center gap-2">
                      <div className="flex w-12 h-12 p-3.5 items-center justify-center rounded-full bg-[#F7F7F7]">
                        <Phone className="w-5 h-5 stroke-[#404040]" />
                      </div>
                      <div className="flex-1 flex justify-between items-center">
                        <span className="text-[#404040] font-satoshi text-sm leading-6 tracking-[-0.14px]">
                          Phone Number
                        </span>
                        <span className="text-black font-satoshi text-sm font-bold leading-6 tracking-[-0.14px]">
                          (555) 555-0199
                        </span>
                      </div>
                    </div>

                    {/* Assigned Cohort */}
                    <div className="flex items-center gap-2">
                      <div className="flex w-12 h-12 p-3.5 items-center justify-center rounded-full bg-[#F7F7F7]">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.5879 1.68261C10.6908 2.36245 10 6.25033 10 6.25033V18.3337C10 18.3337 10.7389 14.273 15.0003 13.7993C15.4578 13.7485 15.8333 13.3817 15.8333 12.9218V2.8279C15.8333 2.13816 15.268 1.56398 14.5879 1.68261Z" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4.4444 4.167C6.49478 4.16413 8.47371 4.90623 9.99996 6.25033V18.3337C8.47371 16.9896 6.49478 16.2475 4.4444 16.2503C3.14273 16.2503 2.49189 16.2503 2.20434 16.0663C2.03171 15.9558 1.96118 15.8852 1.85068 15.7126C1.66663 15.4251 1.66663 14.9121 1.66663 13.8861V7.00301C1.66663 5.81318 1.66663 5.21828 2.12391 4.73604C2.58119 4.25381 3.04932 4.22893 3.98556 4.17916C4.13746 4.17108 4.29044 4.167 4.4444 4.167Z" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 18.3345C11.5263 16.9904 13.5052 16.2483 15.5556 16.2512C16.8573 16.2512 17.5081 16.2512 17.7956 16.0672C17.9682 15.9567 18.0388 15.8861 18.1493 15.7135C18.3333 15.4259 18.3333 14.9129 18.3333 13.8869V7.00386C18.3333 5.81403 18.3333 5.21913 17.8761 4.73689C17.4187 4.25466 16.7696 4.21676 15.8333 4.16699" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="flex-1 flex justify-between items-center">
                        <span className="text-[#404040] font-satoshi text-sm leading-6 tracking-[-0.14px]">
                          Assigned Cohort
                        </span>
                        <span className="text-black font-satoshi text-sm font-bold leading-6 tracking-[-0.14px]">
                          e.g., AI Storytelling – Week 4)
                        </span>
                      </div>
                    </div>

                    {/* Subject Area */}
                    <div className="flex items-start gap-2">
                      <div className="flex items-center gap-2">
                        <div className="flex w-12 h-12 p-3.5 items-center justify-center rounded-full bg-[#F7F7F7]">
                          <Library className="w-5 h-5 stroke-[#404040]" />
                        </div>
                        <span className="text-[#404040] font-satoshi text-sm leading-6 tracking-[-0.14px]">
                          Subject Area
                        </span>
                      </div>
                      <div className="flex-1 flex flex-wrap gap-2">
                        {subjectAreas.map((area) => (
                          <div 
                            key={area}
                            className="flex px-2 py-0.5 items-center rounded-2xl bg-[rgba(159,232,112,0.20)]"
                          >
                            <span className="text-[#1E3006] text-center font-satoshi text-xs font-medium leading-[18px]">
                              {area}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Summary */}
              <div className="flex flex-col gap-4 px-4">
                <h3 className="text-[#101828] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">
                  Performance Summary
                </h3>
                
                <div className="flex p-2 flex-col gap-2 rounded-[24px] bg-[#F9FAF9]">
                  <div className="flex p-4 flex-col gap-2 rounded-2xl bg-white">
                    <div className="flex justify-between items-center">
                      <span className="text-[#404040] font-satoshi text-sm leading-6 tracking-[-0.14px]">
                        Current Students
                      </span>
                      <span className="text-black text-right font-satoshi text-sm font-bold leading-6 tracking-[-0.14px]">
                        48
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#404040] font-satoshi text-sm leading-6 tracking-[-0.14px]">
                        Cohort Completion Rate
                      </span>
                      <span className="text-black text-right font-satoshi text-sm font-bold leading-6 tracking-[-0.14px]">
                        92 %
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#404040] font-satoshi text-sm leading-6 tracking-[-0.14px]">
                        Average Feedback Response Time
                      </span>
                      <span className="text-black text-right font-satoshi text-sm font-bold leading-6 tracking-[-0.14px]">
                        1.8 days
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#404040] font-satoshi text-sm leading-6 tracking-[-0.14px]">
                        Latest Class Activity
                      </span>
                      <span className="text-black text-right font-satoshi text-sm font-bold leading-6 tracking-[-0.14px]">
                        2 days ago
                      </span>
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
