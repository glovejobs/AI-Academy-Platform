import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Plus, ChevronLeft, ChevronRight, Home, Users, BookOpen, Heart, Wand2, BarChart3, Settings } from "lucide-react";
import AddProgramModal from "@/components/AddProgramModal";

export default function AdminPrograms() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/admin-dashboard", icon: Home },
    { id: "students", label: "Students", path: "/admin-students", icon: Users },
    { id: "mentors", label: "Mentors", path: "/admin-mentors", icon: Users },
    { id: "parents", label: "Parents", path: "/admin-parents", icon: Heart },
    { id: "programs", label: "Programs", path: "/admin-programs", icon: BookOpen },
    { id: "ai-logs", label: "Ai System Logs", path: "/admin-ai-logs", icon: Wand2 },
    { id: "reports", label: "Reports", path: "/admin-reports", icon: BarChart3 },
    { id: "settings", label: "Settings", path: "/admin-settings", icon: Settings },
  ];

  const isActive = (itemPath: string) => location.pathname === itemPath;

  const programs = [
    { id: 1, title: "AI Explorers Spring '24", duration: "8 Weeks", status: "Active", startDate: "Mar 1, 2025", endDate: "Jan 15, 2025", enrolled: "32/40" },
    { id: 2, title: "Tech Innovators Conference '24", duration: "12 Weeks", status: "Active", startDate: "Mar 2, 2025", endDate: "Feb 12, 2025", enrolled: "40/50" },
    { id: 3, title: "Sustainable Design Summit '24", duration: "16 Weeks", status: "Active", startDate: "Mar 3, 2025", endDate: "Mar 10, 2025", enrolled: "28/36" },
    { id: 4, title: "Global Startup Challenge '24", duration: "20 Weeks", status: "Upcoming", startDate: "Mar 4, 2025", endDate: "Apr 22, 2025", enrolled: "16/24" },
    { id: 5, title: "Digital Health Symposium '24", duration: "24 Weeks", status: "Completed", startDate: "Mar 5, 2025", endDate: "May 30, 2025", enrolled: "22/30" },
    { id: 6, title: "Future of Work Expo '24", duration: "30 Weeks", status: "Active", startDate: "Mar 5, 2025", endDate: "Jun 15, 2025", enrolled: "18/28" }
  ];

  return (
    <div className="min-h-screen bg-[#1E3006] p-3 sm:p-6 flex flex-col gap-6">
      {/* Top Navigation */}
      <div className="max-w-[1440px] mx-auto w-full px-8 sm:px-16 flex justify-between items-center">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/9bc7f4c3957329926c45ba3e1d6104debeb9620d?width=112" 
          alt="Logo" 
          className="w-14 h-14"
        />
        
        <div className="flex justify-center items-start gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`flex h-12 px-4 items-center gap-1 rounded-full transition-all ${
                  active
                    ? "bg-[rgba(159,232,112,0.2)]"
                    : ""
                }`}
              >
                <Icon
                  className="w-[18px] h-[18px]"
                  strokeWidth={1.25}
                  color={active ? "#B1FA63" : "#CFD6C9"}
                />
                <span
                  className={`text-sm leading-6 tracking-[-0.14px] font-satoshi ${
                    active
                      ? "font-bold text-[#B1FA63]"
                      : "font-medium text-[#CFD6C9]"
                  }`}
                >
                  {item.label}
                </span>
              </button>
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
            <span className="text-[#EDEFEB] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">Adam Mid</span>
            <span className="text-[#EDEFEB] font-[DM_Sans] text-[13px] font-normal leading-4 tracking-[-0.13px]">Mentor</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto w-full flex-1 bg-white rounded-[32px] p-8 sm:p-16 flex flex-col gap-8">
        {/* Page Header */}
        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-4 justify-between">
            <div className="flex flex-col gap-1 flex-1">
              <h1 className="text-black font-[Random_Grotesque_Standard_Bold] text-[30px] font-bold leading-[34px] tracking-[-0.75px]">
                Programs / Bootcamps
              </h1>
              <p className="text-[#404040] font-satoshi text-base font-normal leading-6 tracking-[-0.16px]">
                Create, schedule, and edit 8-week programs
              </p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex px-4 py-2.5 justify-center items-center gap-2 rounded-full border border-[#9FE870] bg-[#9FE870] hover:bg-[#8ed65f] transition-colors"
            >
              <Plus className="w-5 h-5 text-[#1E3006]" strokeWidth={1.67} />
              <span className="text-[#1E3006] font-satoshi text-sm font-bold leading-5">Create Program</span>
            </button>
          </div>
          <div className="h-px bg-black/10" />
        </div>

        {/* Table */}
        <div className="flex flex-col gap-4 p-4 rounded-[32px] border border-[rgba(230,234,241,0.6)] bg-[#F9FAF9]">
          <div className="flex flex-col pb-4 rounded-[20px] border border-[#EAECF0] bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#EAECF0]">
                    <th className="px-6 py-3 text-left">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Program Title</span>
                    </th>
                    <th className="px-6 py-3 text-left">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Duration</span>
                    </th>
                    <th className="px-6 py-3 text-left">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Status</span>
                    </th>
                    <th className="px-6 py-3 text-left">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Start Date</span>
                    </th>
                    <th className="px-6 py-3 text-left">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">End Date</span>
                    </th>
                    <th className="px-6 py-3 text-left">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Students Enrolled</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((program, index) => (
                    <tr key={program.id} className={index % 2 === 0 ? "bg-[#F9FAF9]" : "bg-white"}>
                      <td className="px-6 py-4">
                        <span className="text-[#21231D] font-satoshi text-sm font-medium leading-5">{program.title}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2 py-0.5 items-center rounded-2xl bg-[#F2F4F7] text-[#21231D] font-satoshi text-xs font-medium leading-[18px]">
                          {program.duration}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {program.status === "Active" && (
                          <span className="inline-flex px-2 py-0.5 items-center rounded-2xl bg-[rgba(159,232,112,0.2)] text-[#008915] font-satoshi text-xs font-medium leading-[18px]">
                            Active
                          </span>
                        )}
                        {program.status === "Upcoming" && (
                          <span className="inline-flex px-2 py-0.5 items-center rounded-2xl bg-[#FFFAEB] text-[#EE7A13] font-satoshi text-xs font-medium leading-[18px]">
                            Upcoming
                          </span>
                        )}
                        {program.status === "Completed" && (
                          <span className="inline-flex px-2 py-0.5 pr-1.5 items-center gap-1 rounded-2xl bg-[rgba(159,232,112,0.2)] text-[#008915] font-satoshi text-xs font-medium leading-[18px]">
                            Completed
                            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 3L4.5 8.5L2 6" stroke="#008915" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[#21231D] font-satoshi text-sm font-medium leading-5">{program.startDate}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[#21231D] font-satoshi text-sm font-medium leading-5">{program.endDate}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[#21231D] font-satoshi text-sm font-medium leading-5">{program.enrolled}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex h-[82px] px-4 py-2 justify-center items-center rounded-full border border-[rgba(230,234,241,0.6)] bg-white">
            <div className="flex justify-between items-center flex-1 max-w-full">
              <button 
                disabled
                className="flex justify-center items-center gap-2 opacity-50 cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 text-[#D0D5DD]" strokeWidth={1.67} />
                <span className="text-[#D0D5DD] font-[Random_Grotesque_Standard_Medium] text-base font-medium leading-[19px] tracking-[-0.16px]">Previous</span>
              </button>
              
              <div className="flex items-start gap-0.5">
                <div className="flex w-10 h-10 justify-center items-center rounded-lg bg-[#F9FAFB]">
                  <span className="text-[#404040] font-[Random_Grotesque_Standard_Medium] text-base font-medium leading-[19px] tracking-[-0.16px]">1</span>
                </div>
                <div className="flex w-10 h-10 justify-center items-center rounded-lg hover:bg-[#F9FAFB] transition-colors cursor-pointer">
                  <span className="text-[#404040] font-[Random_Grotesque_Standard_Medium] text-base font-medium leading-[19px] tracking-[-0.16px]">2</span>
                </div>
                <div className="flex w-10 h-10 justify-center items-center rounded-lg hover:bg-[#F9FAFB] transition-colors cursor-pointer">
                  <span className="text-[#404040] font-[Random_Grotesque_Standard_Medium] text-base font-medium leading-[19px] tracking-[-0.16px]">3</span>
                </div>
                <div className="flex w-10 h-10 justify-center items-center rounded-lg">
                  <span className="text-[#475467] font-inter text-sm font-medium leading-5">...</span>
                </div>
                <div className="flex w-10 h-10 justify-center items-center rounded-lg hover:bg-[#F9FAFB] transition-colors cursor-pointer">
                  <span className="text-[#404040] font-[Random_Grotesque_Standard_Medium] text-base font-medium leading-[19px] tracking-[-0.16px]">8</span>
                </div>
                <div className="flex w-10 h-10 justify-center items-center rounded-lg hover:bg-[#F9FAFB] transition-colors cursor-pointer">
                  <span className="text-[#404040] font-[Random_Grotesque_Standard_Medium] text-base font-medium leading-[19px] tracking-[-0.16px]">9</span>
                </div>
                <div className="flex w-10 h-10 justify-center items-center rounded-lg hover:bg-[#F9FAFB] transition-colors cursor-pointer">
                  <span className="text-[#404040] font-[Random_Grotesque_Standard_Medium] text-base font-medium leading-[19px] tracking-[-0.16px]">10</span>
                </div>
              </div>

              <button className="flex justify-center items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
                <span className="text-[#404040] font-[Random_Grotesque_Standard_Medium] text-base font-medium leading-[19px] tracking-[-0.16px]">Next</span>
                <ChevronRight className="w-5 h-5 text-[#475467]" strokeWidth={1.67} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <AddProgramModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
