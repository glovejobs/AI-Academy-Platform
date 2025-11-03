import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, BookOpen, Heart, Wand2, TrendingUp, Settings, Search, Download, ChevronDown, MoreVertical, Check, ChevronsUp, X } from "lucide-react";
import { useState } from "react";
import AddStudentModal from "@/components/AddStudentModal";
import EditStudentModal from "@/components/EditStudentModal";
import ReassignCohortModal from "@/components/ReassignCohortModal";
import AssignMentorModal from "@/components/AssignMentorModal";

interface Student {
  id: string;
  name: string;
  cohort: string;
  status: "Active" | "Pending";
  performance: "Excellent" | "Good" | "N/A";
  completionRate: string;
}

export default function AdminStudents() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isReassignCohortModalOpen, setIsReassignCohortModalOpen] = useState(false);
  const [isAssignMentorModalOpen, setIsAssignMentorModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/admin-dashboard", icon: Home },
    { id: "students", label: "Students", path: "/admin-students", icon: Users, active: true },
    { id: "mentors", label: "Mentors", path: "/admin-mentors", icon: Users },
    { id: "parents", label: "Parents", path: "/admin-parents", icon: Heart },
    { id: "programs", label: "Programs", path: "/admin-programs", icon: BookOpen },
    { id: "ai-logs", label: "Ai System Logs", path: "/admin-ai-logs", icon: Wand2 },
    { id: "reports", label: "Reports", path: "/admin-reports", icon: TrendingUp },
    { id: "settings", label: "Settings", path: "/admin-settings", icon: Settings },
  ];

  const students: Student[] = [
    { id: "1", name: "James Holloway", cohort: "AI Explorers Spring '24", status: "Active", performance: "Excellent", completionRate: "98%" },
    { id: "2", name: "Clara Thompson", cohort: "Blockchain Innovators Summit '23", status: "Active", performance: "Good", completionRate: "98%" },
    { id: "3", name: "Ethan Rodriguez", cohort: "Sustainable Tech Conference '24", status: "Active", performance: "Excellent", completionRate: "98%" },
    { id: "4", name: "Lily Chen", cohort: "Digital Marketing Expo '23", status: "Pending", performance: "Excellent", completionRate: "98%" },
    { id: "5", name: "Ava Patel", cohort: "Virtual Reality Showcase '24", status: "Active", performance: "N/A", completionRate: "98%" },
    { id: "6", name: "Noah Williams", cohort: "Virtual Reality Showcase '24", status: "Active", performance: "Excellent", completionRate: "98%" },
  ];

  const handleEditStudent = (student: Student) => {
    setSelectedStudent(student);
    setIsEditModalOpen(true);
    setOpenDropdown(null);
  };

  const handleReassignCohort = (student: Student) => {
    setSelectedStudent(student);
    setIsReassignCohortModalOpen(true);
    setOpenDropdown(null);
  };

  const handleAssignMentor = (student: Student) => {
    setSelectedStudent(student);
    setIsAssignMentorModalOpen(true);
    setOpenDropdown(null);
  };

  const toggleDropdown = (studentId: string) => {
    setOpenDropdown(openDropdown === studentId ? null : studentId);
  };

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
              <div className="text-[#1E3006] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">Adam Mid</div>
              <div className="text-[#21231D] font-dm-sans text-[13px] leading-4 tracking-[-0.13px]">Mentor</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] shadow-[0_0_20px_0_rgba(0,0,0,0.03)] p-8 sm:p-16">
        <div className="flex flex-col gap-5 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <h1 className="text-black font-random-grotesque-bold text-[30px] font-bold leading-[34px] tracking-[-0.75px]">Students</h1>
              <p className="text-[#404040] font-satoshi text-base leading-6 tracking-[-0.16px]">Manage student accounts, enrollment, and performance</p>
            </div>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="flex px-4 py-2.5 items-center gap-2 rounded-full border border-[#9FE870] bg-[#9FE870] hover:bg-[#8FD85F] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4.16699V15.8337M4.16667 10.0003H15.8333" stroke="#1E3006" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[#1E3006] font-satoshi text-sm font-bold leading-5">Add Student</span>
            </button>
          </div>
          <div className="h-[1px] bg-[rgba(0,0,0,0.10)]"></div>
        </div>

        <div className="flex p-4 flex-col gap-2 rounded-[32px] border border-[rgba(230,234,241,0.60)] bg-[#F9FAF9]">
          <div className="flex flex-col gap-6 rounded-[24px]">
            <div className="flex h-16 px-4 py-2 items-center gap-2 rounded-full bg-[#F7F7F7]">
              <div className="flex items-center gap-6 flex-1">
                <div className="flex items-center gap-2 flex-1">
                  <div className="flex px-4 py-2 items-center gap-2 flex-1 rounded-full border border-[#E2E8F0] bg-white">
                    <Search className="w-5 h-5 stroke-[#404040]" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="flex-1 bg-transparent border-none outline-none text-[#8C8C8C] font-random-grotesque-medium text-base leading-[19px] tracking-[-0.16px]"
                    />
                  </div>
                  <button className="flex px-6 py-2 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white hover:bg-gray-50 transition-colors">
                    <span className="text-[#21231D] font-random-grotesque text-[13px] leading-4 tracking-[-0.13px]">All status</span>
                    <ChevronDown className="w-4 h-4 stroke-[#334155]" />
                  </button>
                  <button className="flex px-6 py-2 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white hover:bg-gray-50 transition-colors">
                    <span className="text-[#21231D] font-random-grotesque-book text-[13px] leading-4 tracking-[-0.13px]">All Cohorts</span>
                    <ChevronDown className="w-4 h-4 stroke-[#334155]" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex px-4 py-2 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-white hover:bg-gray-50 transition-colors">
                    <Download className="w-4 h-4 stroke-[#404040]" />
                    <span className="text-[#404040] font-random-grotesque-medium text-base leading-[19px] tracking-[-0.16px]">Export</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex p-4 flex-col gap-4 rounded-[32px] border border-[rgba(230,234,241,0.60)] bg-[#F9FAF9]">
              <div className="flex px-6 pb-4 flex-col rounded-[20px] border border-[#EAECF0] bg-white">
                <div className="flex bg-white">
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex h-11 px-6 py-3 items-center gap-3 border-b border-[#EAECF0] bg-white">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Name</span>
                    </div>
                    {students.map((student, idx) => (
                      <div key={student.id} className={`flex h-[72px] px-6 py-4 items-center rounded-l-full ${idx % 2 === 0 ? "bg-[#F9FAF9]" : ""}`}>
                        <span className="text-[#21231D] font-satoshi text-sm leading-5">{student.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex h-11 px-6 py-3 items-center gap-3 border-b border-[#EAECF0] bg-white">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Current Cohort</span>
                    </div>
                    {students.map((student, idx) => (
                      <div key={student.id} className={`flex h-[72px] px-2 pl-6 py-4 items-center ${idx % 2 === 0 ? "bg-[#F9FAF9]" : "bg-white"}`}>
                        <span className="text-[#21231D] font-satoshi text-sm leading-5">{student.cohort}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex h-11 px-6 py-3 items-center gap-3 border-b border-[#EAECF0] bg-white">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Status</span>
                    </div>
                    {students.map((student, idx) => (
                      <div key={student.id} className={`flex h-[72px] px-2 pl-6 py-4 items-center ${idx % 2 === 0 ? "bg-[#F9FAF9]" : "bg-white"}`}>
                        <div className={`flex px-2 py-0.5 items-center rounded-2xl ${student.status === "Active" ? "bg-[rgba(159,232,112,0.20)]" : "bg-[#FFFAEB]"} mix-blend-multiply`}>
                          <span className={`text-center font-satoshi text-xs font-medium leading-[18px] ${student.status === "Active" ? "text-[#008915]" : "text-[#EE7A13]"}`}>
                            {student.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex h-11 px-6 py-3 items-center gap-3 border-b border-[#EAECF0] bg-white">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Performance Summary</span>
                    </div>
                    {students.map((student, idx) => (
                      <div key={student.id} className={`flex h-[72px] px-2 pl-6 py-4 items-center ${idx % 2 === 0 ? "bg-[#F9FAF9]" : "bg-white"}`}>
                        {student.performance === "N/A" ? (
                          <div className="flex px-2 py-0.5 items-center gap-1 rounded-2xl border-[1.5px] border-[#475467]">
                            <span className="text-center font-satoshi text-xs font-medium leading-[18px] text-[#344054]">N/A</span>
                            <X className="w-3 h-3 stroke-[#475467]" />
                          </div>
                        ) : (
                          <div className={`flex px-2 py-0.5 items-center gap-1 rounded-2xl border-[1.5px] ${student.performance === "Excellent" ? "border-[#008915]" : "border-[#EE7A13]"}`}>
                            <span className={`text-center font-satoshi text-xs font-medium leading-[18px] ${student.performance === "Excellent" ? "text-[#008915]" : "text-[#EE7A13]"}`}>
                              {student.performance}
                            </span>
                            {student.performance === "Excellent" ? (
                              <Check className="w-3 h-3 stroke-[#039855] stroke-2" />
                            ) : (
                              <ChevronsUp className="w-3 h-3 stroke-[#EE7A13] stroke-2" />
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex h-11 px-6 py-3 items-center gap-3 border-b border-[#EAECF0] bg-white">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Completion Rate</span>
                    </div>
                    {students.map((student, idx) => (
                      <div key={student.id} className={`flex h-[72px] px-6 py-4 items-center ${idx % 2 === 0 ? "bg-[#F9FAF9]" : "bg-white"}`}>
                        <span className="text-[#21231D] font-satoshi text-sm leading-5">{student.completionRate}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex h-11 px-6 py-3 items-center gap-3 border-b border-[#EAECF0] bg-white">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Actions</span>
                    </div>
                    {students.map((student, idx) => (
                      <div key={student.id} className={`flex h-[72px] px-6 py-4 items-center justify-center rounded-r-full relative ${idx % 2 === 0 ? "bg-[#F9FAF9]" : "bg-white"}`}>
                        <button
                          onClick={() => toggleDropdown(student.id)}
                          className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          <MoreVertical className="w-5 h-5 stroke-[#404040]" />
                        </button>

                        {openDropdown === student.id && (
                          <div className="absolute right-0 top-12 w-48 bg-white rounded-2xl shadow-lg border border-[#EAECF0] z-10 py-2">
                            <button
                              onClick={() => handleEditStudent(student)}
                              className="w-full px-4 py-2 text-left text-sm text-[#21231D] hover:bg-[#F9FAF9] transition-colors"
                            >
                              Edit Student
                            </button>
                            <button
                              onClick={() => handleReassignCohort(student)}
                              className="w-full px-4 py-2 text-left text-sm text-[#21231D] hover:bg-[#F9FAF9] transition-colors"
                            >
                              Reassign Cohort
                            </button>
                            <button
                              onClick={() => handleAssignMentor(student)}
                              className="w-full px-4 py-2 text-left text-sm text-[#21231D] hover:bg-[#F9FAF9] transition-colors"
                            >
                              Assign New Mentor
                            </button>
                            <div className="h-[1px] bg-[#EAECF0] my-2"></div>
                            <button
                              onClick={() => {
                                console.log('Delete student:', student.id);
                                setOpenDropdown(null);
                              }}
                              className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors"
                            >
                              Delete Student
                            </button>
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
        </div>
      </div>

      <AddStudentModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <EditStudentModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} student={selectedStudent} />
      <ReassignCohortModal isOpen={isReassignCohortModalOpen} onClose={() => setIsReassignCohortModalOpen(false)} student={selectedStudent} />
      <AssignMentorModal isOpen={isAssignMentorModalOpen} onClose={() => setIsAssignMentorModalOpen(false)} student={selectedStudent} />
    </div>
  );
}
