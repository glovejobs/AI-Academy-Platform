import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Home, Users, BookOpen, Heart, Wand2, TrendingUp, Settings, ArrowLeft, ChevronDown, MoreVertical, Phone, Book } from "lucide-react";
import { useState } from "react";

export default function MentorProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<"performance" | "activity">("performance");

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

  const subjectAreas = [
    "AI Research", "Imaging", "Writing", "Advertising", "Video", "Vibe Coding", "Product Design"
  ];

  return (
    <div className="min-h-screen bg-[#1E3006] p-3 sm:p-6">
      <div className="max-w-[1440px] mx-auto mb-6">
        <div className="flex justify-between items-center px-0 sm:px-16">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/9bc7f4c3957329926c45ba3e1d6104debeb9620d?width=112" alt="Logo" className="w-14 h-14" />
          
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
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/7469593e83fba7a0c1099e16258d02c681f57b7f?width=80" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <div className="text-[#EDEFEB] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">Adam Mid</div>
              <div className="text-[#EDEFEB] font-dm-sans text-[13px] leading-4 tracking-[-0.13px]">Mentor</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 p-8 sm:p-16 rounded-[32px] border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9]">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5 stroke-[#757575]" />
            <button 
              onClick={() => navigate('/admin-mentors')}
              className="flex px-2 py-1 items-center rounded-md bg-[#F9FAFB]"
            >
              <span className="text-[#8C8C8C] font-satoshi text-sm font-medium leading-5">Back to mentors</span>
            </button>
          </div>

          <div className="flex justify-between items-start">
            <div className="flex-1 flex flex-col gap-1">
              <h1 className="text-black font-random-grotesque-bold text-[30px] font-bold leading-[34px] tracking-[-0.75px]">User Profile</h1>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-[#EAECF0]">
            <button
              onClick={() => setActiveTab("performance")}
              className={`flex px-1 py-3 items-center gap-2 border-b-2 ${
                activeTab === "performance" 
                  ? "border-[rgba(230,234,241,0.60)]" 
                  : "border-transparent"
              }`}
            >
              <span className={`font-satoshi text-sm leading-5 ${
                activeTab === "performance" 
                  ? "text-[#6A8042] font-bold" 
                  : "text-[#8C8C8C] font-medium"
              }`}>Performance Metrics</span>
            </button>
            <button
              onClick={() => setActiveTab("activity")}
              className={`flex px-1 py-3 items-center gap-2 border-b-2 ${
                activeTab === "activity" 
                  ? "border-[rgba(230,234,241,0.60)]" 
                  : "border-transparent"
              }`}
            >
              <span className={`font-satoshi text-sm leading-5 ${
                activeTab === "activity" 
                  ? "text-[#6A8042] font-bold" 
                  : "text-[#8C8C8C] font-medium"
              }`}>Activity</span>
            </button>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex flex-col gap-12 flex-1 p-[43px_16px_48px_16px] rounded-[32px] bg-white">
            <div className="flex p-4 flex-col gap-6 rounded-[32px] border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9]">
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex-1 flex flex-col gap-1">
                    <h3 className="text-black font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">Performance Metrics</h3>
                  </div>
                </div>
                <div className="h-[1px] bg-[#EAECF0]"></div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex p-4 flex-col gap-6 flex-1 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">Completion Rate</span>
                    <h2 className="text-black font-random-grotesque-bold text-[64px] font-bold leading-[85%]">94%</h2>
                  </div>
                </div>
                <div className="flex p-4 flex-col gap-6 flex-1 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">Avg. Student XP</span>
                    <h2 className="text-black font-random-grotesque-bold text-[64px] font-bold leading-[85%]">4.2k</h2>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex p-4 flex-col gap-6 flex-1 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">Feedback Timeliness</span>
                    <h2 className="text-black font-random-grotesque-bold text-[64px] font-bold leading-[85%]">96%</h2>
                  </div>
                </div>
                <div className="flex p-4 flex-col gap-6 flex-1 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">Student Satisfaction</span>
                    <h2 className="text-black font-random-grotesque-bold text-[64px] font-bold leading-[85%]">4.8/5</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex p-[24px_16px_16px_16px] flex-col gap-6 rounded-[32px] border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9]">
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex-1 flex flex-col gap-1">
                    <h3 className="text-black font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">Cohort Engagement Over 8 Weeks</h3>
                  </div>
                </div>
                <div className="h-[1px] bg-[#EAECF0]"></div>
              </div>

              <div className="flex h-[537px] p-6 flex-col justify-center items-center gap-12 rounded-3xl border border-[rgba(230,234,241,0.60)] bg-white">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                    <button className="flex px-4 py-2 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white">
                      <span className="text-[#21231D] font-satoshi text-sm leading-5">Filter</span>
                      <ChevronDown className="w-4 h-4 stroke-[#21231D]" />
                    </button>
                    <button className="flex px-4 py-2 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white">
                      <span className="text-[#21231D] font-satoshi text-sm leading-5">Filter</span>
                      <ChevronDown className="w-4 h-4 stroke-[#21231D]" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#21231D] font-satoshi text-sm leading-5">Range:</span>
                    <button className="flex px-4 py-2 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white">
                      <span className="text-[#21231D] font-satoshi text-sm leading-5">All Time</span>
                      <ChevronDown className="w-4 h-4 stroke-[#21231D]" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 w-full flex items-end justify-center gap-2">
                  <svg width="672" height="405" viewBox="0 0 672 405" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M604 46.2239C595.4 46.2239 595.4 71.1111 586.8 71.1111C578.2 71.1111 578.558 60.6673 569.6 60.6673C560.642 60.6673 561.358 91.3319 552.4 91.3319C543.442 91.3319 544.875 79.0216 535.2 79.0216C525.525 79.0216 528.033 108.931 518 108.931C507.967 108.931 509.4 64.8893 500.8 64.8893C492.2 64.8893 492.917 97.0204 483.6 97.0204C474.283 97.0204 475.717 88.221 466.4 88.221C457.083 88.221 458.517 110.22 449.2 110.22C439.883 110.22 440.958 120.885 432 120.885C423.042 120.885 423.758 96.8871 414.8 96.8871C405.842 96.8871 406.917 122.13 397.6 122.13C388.283 122.13 390.433 106.886 380.4 106.886C370.367 106.886 372.158 89.9098 363.2 89.9098C354.242 89.9098 355.317 128.663 346 128.663C336.683 128.663 338.117 73.3332 328.8 73.3332C319.483 73.3332 320.558 106.398 311.6 106.398C302.642 106.398 304.433 126.174 294.4 126.174C284.367 126.174 286.875 114.175 277.2 114.175C267.525 114.175 270.033 138.618 260 138.618C249.967 138.618 252.475 129.196 242.8 129.196C233.125 129.196 234.917 114.93 225.6 114.93C216.283 114.93 217.717 166.171 208.4 166.171C199.083 166.171 201.233 153.639 191.2 153.639C181.167 153.639 182.6 173.237 174 173.237C165.4 173.237 166.475 159.238 156.8 159.238C147.125 159.238 148.558 199.68 139.6 199.68C130.642 199.68 132.433 187.503 122.4 187.503C112.367 187.503 114.875 178.659 105.2 178.659C95.525 178.659 97.3166 205.769 88 205.769C78.6833 205.769 80.8333 211.457 70.8 211.457C60.7667 211.457 63.6333 196.48 53.6 196.48C43.5666 196.48 45 188.481 36.4 188.481C27.8 188.481 27.8 214.479 19.2 214.479C10.6 214.479 11.3167 205.324 1.99998 205.324" stroke="#6A8042" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4 text-xs text-[#21231D] font-satoshi font-medium">
                    <span>Week 1</span>
                    <span>Week 2</span>
                    <span>Week 3</span>
                    <span>Week 4</span>
                    <span>Week 5</span>
                    <span>Week 6</span>
                    <span>Week 7</span>
                    <span>Week 8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[480px] flex p-[16px_16px_48px_16px] flex-col items-end gap-4 rounded-[32px] bg-white">
            <div className="flex flex-col gap-12 w-full">
              <div className="flex flex-col items-center gap-[-40px] rounded-t-3xl">
                <div className="w-full h-[240px] rounded-t-[32px] bg-gradient-to-r from-[#163300] via-[#9FE870] to-[#9FE870]"></div>
                
                <div className="flex px-8 flex-col gap-6 w-full -mt-[80px]">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                      <div className="w-[106px] h-[106px] rounded-full border-2 border-white shadow-[0_4px_8px_-2px_rgba(16,24,40,0.10),0_2px_4px_-2px_rgba(16,24,40,0.06)] overflow-hidden">
                        <img src="https://api.builder.io/api/v1/image/assets/TEMP/1b58265f2d5522307b29606a611d39ce1c673920?width=212" alt="Profile" className="w-full h-full object-cover" />
                      </div>
                      <button className="p-1">
                        <MoreVertical className="w-5 h-5 stroke-[#21231D]" />
                      </button>
                    </div>
                    
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col gap-1 flex-1">
                          <h2 className="text-[#21231D] font-random-grotesque-bold text-[26px] font-bold leading-8 tracking-[-0.39px]">Sarah Martinez</h2>
                          <p className="text-[#404040] font-satoshi text-base leading-6">olivia@emai.com</p>
                        </div>
                        <div className="flex px-2 py-0.5 items-center rounded-2xl bg-[#F9FAF9]">
                          <span className="text-center font-satoshi text-xs font-medium leading-[18px] text-[#1E3006]">Mentor</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[1px] bg-[#EAECF0]"></div>
                </div>
              </div>

              <div className="flex flex-col gap-2 px-8">
                <div className="flex p-2 flex-col gap-2 rounded-3xl bg-[#F9FAF9]">
                  <div className="flex p-4 flex-col gap-1 rounded-2xl bg-white">
                    <div className="flex items-center gap-2">
                      <div className="flex w-12 h-12 p-3.5 justify-center items-center rounded-full bg-[#F7F7F7]">
                        <Phone className="w-5 h-5 stroke-[#404040]" />
                      </div>
                      <div className="flex justify-between items-center flex-1">
                        <span className="text-[#404040] font-satoshi text-sm leading-6 tracking-[-0.14px]">Phone Number</span>
                        <span className="w-[212px] text-black font-satoshi text-sm font-bold leading-6 tracking-[-0.14px]">(555) 555-0199</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex w-12 h-12 p-3.5 justify-center items-center rounded-full bg-[#F7F7F7]">
                        <Book className="w-5 h-5 stroke-[#404040]" />
                      </div>
                      <div className="flex justify-between items-center flex-1">
                        <span className="text-[#404040] font-satoshi text-sm leading-6 tracking-[-0.14px]">Assigned Cohort</span>
                        <span className="w-[212px] text-black font-satoshi text-sm font-bold leading-6 tracking-[-0.14px]">e.g., AI Storytelling – Week 4)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="flex items-center gap-2">
                        <div className="flex w-12 h-12 p-3.5 justify-center items-center rounded-full bg-[#F7F7F7]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.66675 5.83333C1.66675 4.66656 1.66675 4.08317 1.89381 3.63752C2.09356 3.24552 2.41226 2.92681 2.80426 2.72707C3.24991 2.5 3.83331 2.5 5.00008 2.5C6.16686 2.5 6.75025 2.5 7.1959 2.72707C7.5879 2.92681 7.90661 3.24552 8.10635 3.63752C8.33341 4.08317 8.33341 4.66656 8.33341 5.83333V14.1667C8.33341 15.3334 8.33341 15.9168 8.10635 16.3625C7.90661 16.7545 7.5879 17.0732 7.1959 17.2729C6.75025 17.5 6.16686 17.5 5.00008 17.5C3.83331 17.5 3.24991 17.5 2.80426 17.2729C2.41226 17.0732 2.09356 16.7545 1.89381 16.3625C1.66675 15.9168 1.66675 15.3334 1.66675 14.1667V5.83333Z" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5 14.1667H5.00748" stroke="#404040" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1.66675 5.83325H8.33341" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-[#404040] font-satoshi text-sm leading-6 tracking-[-0.14px]">Subject Area</span>
                      </div>
                      <div className="flex w-[307px] justify-between items-center">
                        <div className="flex w-[215px] flex-col gap-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            {subjectAreas.map((area, idx) => (
                              <div key={idx} className="flex px-2 py-0.5 items-center rounded-2xl bg-[rgba(159,232,112,0.20)]">
                                <span className="text-center font-satoshi text-xs font-medium leading-[18px] text-[#1E3006]">{area}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 px-8">
                <h3 className="text-[#101828] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">Performance Summary</h3>
              </div>

              <div className="flex p-2 flex-col gap-2 rounded-3xl bg-[#F9FAF9] px-8">
                <div className="flex p-4 flex-col gap-2 rounded-2xl bg-white">
                  <div className="flex items-center gap-2">
                    <div className="flex justify-between items-center flex-1">
                      <span className="text-[#404040] font-satoshi text-sm leading-6 tracking-[-0.14px]">Current Students</span>
                      <span className="w-[212px] text-right text-black font-satoshi text-sm font-bold leading-6 tracking-[-0.14px]">48</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex justify-between items-center flex-1">
                      <span className="text-[#404040] font-satoshi text-sm leading-6 tracking-[-0.14px]">Cohort Completion Rate</span>
                      <span className="w-[212px] text-right text-black font-satoshi text-sm font-bold leading-6 tracking-[-0.14px]">92 %</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex justify-between items-center flex-1">
                      <span className="text-[#404040] font-satoshi text-sm leading-6 tracking-[-0.14px]">Average Feedback Response Time</span>
                      <span className="w-[212px] text-right text-black font-satoshi text-sm font-bold leading-6 tracking-[-0.14px]">1.8 days</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex justify-between items-center flex-1">
                      <span className="text-[#404040] font-satoshi text-sm leading-6 tracking-[-0.14px]">Latest Class Activity</span>
                      <span className="w-[212px] text-right text-black font-satoshi text-sm font-bold leading-6 tracking-[-0.14px]">2 days ago</span>
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
