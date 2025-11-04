import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, BookOpen, Heart, Wand2, TrendingUp, Settings, MoreVertical } from "lucide-react";
import { useState, useEffect } from "react";
import AddMentorModal from "@/components/AddMentorModal";
import EditMentorModal from "@/components/EditMentorModal";

interface Mentor {
  id: string;
  name: string;
  assignedCohorts: number;
  specialization: string;
  activitySummary: number;
  status: "Active";
}

export default function AdminMentors() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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

  const mentors: Mentor[] = [
    { id: "1", name: "Dr. Sarah Martinez", assignedCohorts: 3, specialization: "AI & Machine Learning", activitySummary: 60, status: "Active" },
    { id: "2", name: "Prof. James Chen", assignedCohorts: 5, specialization: "Web Development", activitySummary: 72, status: "Active" },
    { id: "3", name: "Ms. Emily Taylor", assignedCohorts: 7, specialization: "Game Design", activitySummary: 78, status: "Active" },
    { id: "4", name: "Mr. David Kim", assignedCohorts: 10, specialization: "Data Science", activitySummary: 38, status: "Active" },
    { id: "5", name: "Dr. Rachel Green", assignedCohorts: 12, specialization: "Robotics", activitySummary: 42, status: "Active" },
    { id: "6", name: "Olivia Rhye", assignedCohorts: 10, specialization: "Product Design", activitySummary: 66, status: "Active" },
  ];

  const toggleDropdown = (mentorId: string) => {
    setOpenDropdown(openDropdown === mentorId ? null : mentorId);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (openDropdown) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openDropdown]);

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

      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] shadow-[0_0_20px_0_rgba(0,0,0,0.03)] p-8 sm:p-16">
        <div className="flex flex-col gap-5 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <h1 className="text-black font-random-grotesque-bold text-[30px] font-bold leading-[34px] tracking-[-0.75px]">Mentors / Teachers</h1>
              <p className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">Manage mentor assignments, performance, and activity</p>
            </div>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="flex px-4 py-2.5 items-center gap-2 rounded-full border border-[#9FE870] bg-[#9FE870] hover:bg-[#8FD85F] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4.16699V15.8337M4.16667 10.0003H15.8333" stroke="#1E3006" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[#1E3006] font-satoshi text-sm font-bold leading-5">Add Mentor</span>
            </button>
          </div>
          <div className="h-[1px] bg-[rgba(0,0,0,0.10)]"></div>
        </div>

        <div className="flex p-4 flex-col gap-4 rounded-[32px] border border-[rgba(230,234,241,0.60)] bg-[#F9FAF9]">
          <div className="flex px-6 pb-4 flex-col rounded-[20px] border border-[#EAECF0] bg-white">
            <div className="flex bg-white">
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex h-11 px-6 py-3 items-center gap-3 border-b border-[#EAECF0] bg-white">
                  <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Name</span>
                </div>
                {mentors.map((mentor, idx) => (
                  <div key={mentor.id} className={`flex h-[72px] px-6 py-4 items-center rounded-l-full ${idx % 2 === 0 ? "bg-[#F9FAF9]" : ""}`}>
                    <span className="text-[#21231D] font-satoshi text-sm font-medium leading-5">{mentor.name}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 flex-1">
                <div className="flex h-11 px-6 py-3 items-center gap-3 border-b border-[#EAECF0] bg-white">
                  <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Assigned Cohorts</span>
                </div>
                {mentors.map((mentor, idx) => (
                  <div key={mentor.id} className={`flex h-[72px] px-2 pl-6 py-4 items-center ${idx % 2 === 0 ? "bg-[#F9FAF9]" : "bg-white"}`}>
                    <div className="flex px-2 py-0.5 items-center rounded-2xl bg-[#F2F4F7] mix-blend-multiply">
                      <span className="text-center font-satoshi text-xs font-medium leading-[18px] text-[#21231D]">{mentor.assignedCohorts} cohorts</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 flex-1">
                <div className="flex h-11 px-6 py-3 items-center gap-3 border-b border-[#EAECF0] bg-white">
                  <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Specialization</span>
                </div>
                {mentors.map((mentor, idx) => (
                  <div key={mentor.id} className={`flex h-[72px] px-2 pl-6 py-4 items-center ${idx % 2 === 0 ? "bg-[#F9FAF9]" : "bg-white"}`}>
                    <span className="text-[#21231D] font-satoshi text-sm font-medium leading-5">{mentor.specialization}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 flex-1">
                <div className="flex h-11 px-6 py-3 items-center gap-3 border-b border-[#EAECF0] bg-white">
                  <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Activity Summary</span>
                </div>
                {mentors.map((mentor, idx) => (
                  <div key={mentor.id} className={`flex h-[72px] px-6 py-4 items-center gap-3 ${idx % 2 === 0 ? "bg-[#F9FAF9]" : "bg-white"}`}>
                    <div className="flex items-center gap-3 flex-1">
                      <div className="h-2 flex-1 rounded bg-[#EAECF0] relative overflow-hidden">
                        <div 
                          className="h-full rounded bg-[rgba(230,234,241,0.60)]" 
                          style={{ width: `${mentor.activitySummary}%` }}
                        />
                      </div>
                      <span className="text-[#21231D] font-satoshi text-sm font-medium leading-5">{mentor.activitySummary}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex h-11 px-6 py-3 items-center gap-3 border-b border-[#EAECF0] bg-white">
                  <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Status</span>
                </div>
                {mentors.map((mentor, idx) => (
                  <div key={mentor.id} className={`flex h-[72px] px-6 py-4 items-center ${idx % 2 === 0 ? "bg-[#F9FAF9]" : "bg-white"}`}>
                    <div className="flex px-2 py-0.5 items-center rounded-2xl bg-[rgba(159,232,112,0.20)] mix-blend-multiply">
                      <span className="text-center font-satoshi text-xs font-medium leading-[18px] text-[#008915]">{mentor.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex h-11 px-6 py-3 items-center gap-3 border-b border-[#EAECF0] bg-white">
                  <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Actions</span>
                </div>
                {mentors.map((mentor, idx) => (
                  <div key={mentor.id} className={`flex h-[72px] px-6 py-4 items-center justify-center rounded-r-full relative ${idx % 2 === 0 ? "bg-[#F9FAF9]" : "bg-white"}`}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(mentor.id);
                      }}
                      className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <MoreVertical className="w-5 h-5 stroke-[#21231D]" />
                    </button>

                    {openDropdown === mentor.id && (
                      <div className="absolute right-0 top-12 w-60 bg-white rounded-lg shadow-[0_12px_16px_-4px_rgba(16,24,40,0.08),0_4px_6px_-2px_rgba(16,24,40,0.03)] border border-[#EAECF0] z-10 overflow-hidden">
                        <div className="px-4 py-3 border-b border-[#EAECF0]">
                          <span className="text-[#21231D] font-random-grotesque-bold text-sm font-bold leading-5">Action</span>
                        </div>
                        <div className="py-1 border-b border-[#EAECF0]">
                          <button
                            onClick={() => {
                              navigate(`/mentor-profile/${mentor.id}`);
                              setOpenDropdown(null);
                            }}
                            className="w-full px-3 py-2 flex items-center gap-2 text-left text-sm text-[#21231D] font-satoshi font-medium hover:bg-gray-50 transition-colors"
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.666626 8.00008C0.666626 8.00008 3.33329 2.66675 7.99996 2.66675C12.6666 2.66675 15.3333 8.00008 15.3333 8.00008C15.3333 8.00008 12.6666 13.3334 7.99996 13.3334C3.33329 13.3334 0.666626 8.00008 0.666626 8.00008Z" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7.99996 10.0001C9.10453 10.0001 9.99996 9.10465 9.99996 8.00008C9.99996 6.89551 9.10453 6.00008 7.99996 6.00008C6.89539 6.00008 5.99996 6.89551 5.99996 8.00008C5.99996 9.10465 6.89539 10.0001 7.99996 10.0001Z" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            View Profile
                          </button>
                          <button
                            onClick={() => {
                              setSelectedMentor(mentor);
                              setIsEditModalOpen(true);
                              setOpenDropdown(null);
                            }}
                            className="w-full px-3 py-2 flex items-center gap-2 text-left text-sm text-[#21231D] font-satoshi font-medium hover:bg-gray-50 transition-colors"
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 13.3334H14M11 2.3334C11.2652 2.06819 11.6249 1.91919 12 1.91919C12.1857 1.91919 12.3696 1.95577 12.5412 2.02684C12.7128 2.09791 12.8687 2.20208 13 2.3334C13.1313 2.46472 13.2355 2.62063 13.3066 2.79221C13.3776 2.96379 13.4142 3.14769 13.4142 3.3334C13.4142 3.51912 13.3776 3.70302 13.3066 3.8746C13.2355 4.04618 13.1313 4.20208 13 4.3334L4.66667 12.6667L2 13.3334L2.66667 10.6667L11 2.3334Z" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Edit Info
                          </button>
                          <button className="w-full px-3 py-2 flex items-center gap-2 text-left text-sm text-[#21231D] font-satoshi font-medium hover:bg-gray-50 transition-colors">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.6667 4.00008C14.6667 3.26675 14.0667 2.66675 13.3334 2.66675H2.66671C1.93337 2.66675 1.33337 3.26675 1.33337 4.00008M14.6667 4.00008V12.0001C14.6667 12.7334 14.0667 13.3334 13.3334 13.3334H2.66671C1.93337 13.3334 1.33337 12.7334 1.33337 12.0001V4.00008M14.6667 4.00008L8.00004 8.66675L1.33337 4.00008" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Send Message
                          </button>
                          <button className="w-full px-3 py-2 flex items-center gap-2 text-left text-sm text-[#21231D] font-satoshi font-medium hover:bg-gray-50 transition-colors">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.00004 3.33325V12.6666M3.33337 7.99992H12.6667" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Assign / Reassign Cohort
                          </button>
                        </div>
                        <div className="py-1 border-b border-[#EAECF0]">
                          <button className="w-full px-3 py-2 flex items-center gap-2 text-left text-sm text-[#21231D] font-satoshi font-medium hover:bg-gray-50 transition-colors">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14 5.33333V14H1.99996V5.33333M6.66663 8H9.33329M0.666626 2H15.3333V5.33333H0.666626V2Z" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Deactivate / Reactivate
                          </button>
                        </div>
                        <div className="py-1">
                          <button className="w-full px-3 py-2 flex items-center gap-2 text-left text-sm text-[#A8200D] font-satoshi font-medium hover:bg-red-50 transition-colors">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 3.99992H3.33333M3.33333 3.99992H14M3.33333 3.99992V13.3333C3.33333 13.6869 3.47381 14.026 3.72386 14.2761C3.97391 14.5261 4.31304 14.6666 4.66667 14.6666H11.3333C11.687 14.6666 12.0261 14.5261 12.2761 14.2761C12.5262 14.026 12.6667 13.6869 12.6667 13.3333V3.99992M5.33333 3.99992V2.66659C5.33333 2.31296 5.47381 1.97382 5.72386 1.72378C5.97391 1.47373 6.31304 1.33325 6.66667 1.33325H9.33333C9.68696 1.33325 10.0261 1.47373 10.2761 1.72378C10.5262 1.97382 10.6667 2.31296 10.6667 2.66659V3.99992M6.66667 7.33325V11.3333M9.33333 7.33325V11.3333" stroke="#A8200D" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Delete Mentor
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex h-[82px] px-4 py-2 items-center gap-2 rounded-full border border-[rgba(230,234,241,0.60)] bg-white">
            <div className="flex justify-between items-center flex-1">
              <button className="flex items-center gap-2 text-[#D0D5DD]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8333 10.0003H4.16667M4.16667 10.0003L10 15.8337M4.16667 10.0003L10 4.16699" stroke="#D0D5DD" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-random-grotesque-medium text-base leading-[19px] tracking-[-0.16px]">Previous</span>
              </button>

              <div className="flex items-start gap-0.5">
                {[1, 2, 3].map((num) => (
                  <div key={num} className={`flex w-10 h-10 items-center justify-center rounded-lg ${num === 1 ? "bg-[#F9FAFB]" : ""}`}>
                    <span className="text-[#404040] text-center font-random-grotesque-medium text-base leading-[19px] tracking-[-0.16px]">{num}</span>
                  </div>
                ))}
                <div className="flex w-10 h-10 items-center justify-center">
                  <span className="text-[#475467] text-center font-inter text-sm font-medium leading-5">...</span>
                </div>
                {[8, 9, 10].map((num) => (
                  <div key={num} className="flex w-10 h-10 items-center justify-center rounded-lg">
                    <span className="text-[#404040] text-center font-random-grotesque-medium text-base leading-[19px] tracking-[-0.16px]">{num}</span>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-[#404040]">
                <span className="font-random-grotesque-medium text-base leading-[19px] tracking-[-0.16px]">Next</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16667 10.0003H15.8333M15.8333 10.0003L10 4.16699M15.8333 10.0003L10 15.8337" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <AddMentorModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <EditMentorModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} mentor={selectedMentor} />
    </div>
  );
}
