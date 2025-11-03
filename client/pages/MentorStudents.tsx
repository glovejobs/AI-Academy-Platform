import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, BookOpen, Lightbulb, Mail, TrendingUp, Settings, RefreshCw, Search, ChevronDown, Download, MoreVertical, Eye, UserCheck, UserX } from "lucide-react";
import { useState } from "react";

interface Student {
  name: string;
  email: string;
  submitted: string;
  documents: number;
  status: "Approved" | "Pending" | "Rejected";
  risk: "Low Risk" | "High Risk";
}

export default function MentorStudents() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/mentor-dashboard", icon: Home },
    { id: "students", label: "Students", path: "/mentor-students", icon: Users },
    { id: "curriculum", label: "Curriculum", path: "/mentor-curriculum", icon: BookOpen },
    { id: "projects", label: "Projects", path: "/mentor-projects", icon: Lightbulb },
    { id: "messages", label: "Messages", path: "/mentor-messages", icon: Mail },
    { id: "analytics", label: "Analytics", path: "/mentor-analytics", icon: TrendingUp },
    { id: "settings", label: "Settings", path: "/mentor-settings", icon: Settings },
  ];

  const students: Student[] = [
    { name: "Gary Brown", email: "gary@gmail.com", submitted: "2024-01-15 14:30", documents: 4, status: "Approved", risk: "Low Risk" },
    { name: "Jonathan Sebagh", email: "johnathan@gamil.com", submitted: "2024-01-15 12:15", documents: 23, status: "Pending", risk: "Low Risk" },
    { name: "Jonathan Sebagh", email: "johnathan@gamil.com", submitted: "2024-01-15 10:00", documents: 6, status: "Rejected", risk: "High Risk" },
    { name: "Jonathan Campbell", email: "johnathan@gamil.com", submitted: "2024-01-14 16:45", documents: 12, status: "Approved", risk: "Low Risk" },
  ];

  const isActive = (itemPath: string) => location.pathname === itemPath;

  const getStatusColor = (status: Student["status"]) => {
    switch (status) {
      case "Approved":
        return "bg-[#E6F9EC] border-[#E6F9EC] text-[#01C445]";
      case "Pending":
        return "bg-[#FFFAEB] border-[#FFFCDA] text-[#F79009]";
      case "Rejected":
        return "bg-[#FFEBEC] border-[#FFEBEC] text-[#FF383C]";
    }
  };

  const getRiskColor = (risk: Student["risk"]) => {
    return risk === "Low Risk" 
      ? "border-[#8AE4A9] text-[#01C445]" 
      : "border-[#FFA3A5] text-[#FF383C]";
  };

  return (
    <div className="min-h-screen bg-[#1E3006] p-3 sm:p-6">
      {/* Header Navigation */}
      <div className="max-w-[1440px] mx-auto mb-6 px-4 sm:px-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Logo */}
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9bc7f4c3957329926c45ba3e1d6104debeb9620d?width=112" 
            alt="Logo" 
            className="w-14 h-14"
          />

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-6">
            {navItems.map((item) => {
              const active = isActive(item.path);
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-1 h-12 px-4 rounded-full text-sm transition-all ${
                    active
                      ? "bg-[rgba(159,232,112,0.2)] text-[#B1FA63] font-bold"
                      : "text-[#CFD6C9] opacity-80 hover:opacity-100"
                  }`}
                >
                  <Icon className="w-[18px] h-[18px]" strokeWidth={1.25} />
                  <span className="font-satoshi">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7469593e83fba7a0c1099e16258d02c681f57b7f?width=80" 
              alt="Adam Mid" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="hidden sm:block">
              <div className="text-[#1E3006] font-bold text-base">Adam Mid</div>
              <div className="text-[#21231D] text-[13px]">Mentor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] p-8 sm:p-16">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-[30px] font-bold text-black leading-[34px] tracking-[-0.75px] mb-1">
                Students
              </h1>
              <p className="text-base text-[#404040]">Manage your 6 students across all cohorts</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#9FE870] bg-[#9FE870] text-[#1E3006] font-bold text-sm hover:bg-[#8FD850] transition-colors">
              <RefreshCw className="w-5 h-5" />
              Recognize Achievement
            </button>
          </div>
          <div className="h-px bg-black/10 mt-5"></div>
        </div>

        {/* Table Container */}
        <div className="p-4 rounded-[32px] border border-[rgba(230,234,241,0.6)] bg-[#F9FAF9]">
          {/* Toolbar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 mb-6 p-2 rounded-full bg-[#F7F7F7]">
            <div className="flex-1 flex items-center gap-2 px-4 py-2 rounded-full border border-[#E2E8F0] bg-white">
              <Search className="w-5 h-5 text-[#404040]" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="flex-1 text-base bg-transparent outline-none text-[#8C8C8C] placeholder:text-[#8C8C8C]"
              />
            </div>
            <button className="flex items-center justify-between gap-2 px-6 py-2 rounded-full border border-[#E2E8F0] bg-white text-[#334155] text-sm hover:bg-gray-50">
              All status
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-between gap-2 px-6 py-2 rounded-full border border-[#E2E8F0] bg-white text-[#334155] text-sm hover:bg-gray-50">
              All Risk
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white text-[#404040] font-medium hover:bg-gray-50">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>

          {/* Table */}
          <div className="p-6 rounded-[20px] border border-[rgba(230,234,241,0.6)] bg-white overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-8 py-4 text-left text-base font-medium text-black">Contact</th>
                  <th className="px-8 py-4 text-left text-base font-medium text-black">Email</th>
                  <th className="px-8 py-4 text-left text-base font-medium text-black">Submitted</th>
                  <th className="px-8 py-4 text-left text-base font-medium text-black">Documents</th>
                  <th className="px-8 py-4 text-left text-base font-medium text-black">Status</th>
                  <th className="px-8 py-4 text-left text-base font-medium text-black">Status</th>
                  <th className="px-8 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    <td className="px-8 py-4">
                      <div className="text-base font-medium text-[#404040] py-2 px-6 rounded-full bg-[#F9FAF9]">
                        {student.name}
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <div className="text-base font-medium text-[#404040] py-2 px-6 bg-[#F9FAF9]">
                        {student.email}
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <div className="text-base font-medium text-[#404040] py-2 px-6 bg-[#F9FAF9]">
                        {student.submitted}
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <div className="text-base font-medium text-[#404040] py-2 px-6 bg-[#F9FAF9]">
                        {student.documents}
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full border-2 text-base font-medium ${getStatusColor(student.status)}`}>
                        {student.status}
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full border-2 text-base font-medium ${getRiskColor(student.risk)}`}>
                        {student.risk}
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <MoreVertical className="w-5 h-5 text-[#8C8C8C]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-4 mt-2 rounded-full border border-[rgba(230,234,241,0.6)] bg-[#F7F7F7]">
            <button className="flex items-center gap-2 text-base font-medium text-[#D0D5DD] cursor-not-allowed">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M15.8334 10.0001H4.16675M4.16675 10.0001L10.0001 15.8334M4.16675 10.0001L10.0001 4.16675" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Previous
            </button>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-base font-medium ${
                    page === currentPage ? "bg-[#F9FAFB] text-[#404040]" : "text-[#404040] hover:bg-gray-100"
                  }`}
                  onClick={() => typeof page === "number" && setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 text-base font-medium text-[#404040] hover:text-black">
              Next
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M4.16675 10.0001H15.8334M15.8334 10.0001L10.0001 4.16675M15.8334 10.0001L10.0001 15.8334" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Actions Menu (Hidden by default, shown on row action click) */}
      <div className="hidden absolute right-0 mt-2 w-60 rounded-[20px] border border-[#EAECF0] bg-white shadow-lg">
        <div className="p-4 border-b border-[#EAECF0]">
          <div className="text-base font-medium text-black">Actions</div>
        </div>
        <div className="p-1">
          <button className="w-full flex items-center gap-2 px-3 py-2.5 text-left text-base font-medium text-[#141414] hover:bg-gray-50 rounded-md">
            <Eye className="w-4 h-4 text-[#404040]" />
            View
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2.5 text-left text-base font-medium text-[#141414] hover:bg-gray-50 rounded-md">
            <UserCheck className="w-4 h-4 text-[#404040]" />
            Approve KYC
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2.5 text-left text-base font-medium text-[#FF383C] hover:bg-gray-50 rounded-md">
            <UserX className="w-4 h-4" />
            Reject KYC
          </button>
        </div>
      </div>
    </div>
  );
}
