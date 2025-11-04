import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, BookOpen, Heart, Wand2, TrendingUp, Settings, Upload, X } from "lucide-react";
import { useState } from "react";

export default function AdminSettings() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"general" | "roles" | "integrations">("general");
  const [showNotice, setShowNotice] = useState(true);

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/admin-dashboard", icon: Home },
    { id: "students", label: "Students", path: "/admin-students", icon: Users },
    { id: "mentors", label: "Mentors", path: "/admin-mentors", icon: Users },
    { id: "parents", label: "Parents", path: "/admin-parents", icon: Heart },
    { id: "programs", label: "Programs", path: "/admin-programs", icon: BookOpen },
    { id: "ai-logs", label: "Ai System Logs", path: "/admin-ai-logs", icon: Wand2 },
    { id: "reports", label: "Reports", path: "/admin-reports", icon: TrendingUp },
    { id: "settings", label: "Settings", path: "/admin-settings", icon: Settings, active: true },
  ];

  const integrations = [
    { name: "Linear", description: "Streamline software projects, sprints, and bug tracking.", enabled: true, icon: "linear" },
    { name: "GitHub", description: "Link pull requests and automate workflows.", enabled: true, icon: "github" },
    { name: "Zapier", description: "Build custom automations and integrations with apps.", enabled: false, icon: "zapier" },
    { name: "Slack", description: "Send notifications to channels and create projects.", enabled: true, icon: "slack" },
    { name: "Zendesk", description: "Link and automate Zendesk tickets.", enabled: true, icon: "zendesk" },
    { name: "Dropbox", description: "Everything you need for work, all in one place.", enabled: true, icon: "dropbox" },
  ];

  const roles = [
    { name: "Admin", description: "Platform setup, roles, permissions, and integrations", permissions: { view: false, edit: false, delete: false } },
    { name: "Mentor", description: "Manage students, projects, lessons", permissions: { view: false, edit: false, delete: false } },
    { name: "Parent", description: "Monitor progress, view reports", permissions: { view: false, edit: false, delete: false } },
    { name: "Student", description: "Submit tasks, join bootcamps", permissions: { view: false, edit: false, delete: false } },
  ];

  return (
    <div className="min-h-screen bg-[#1E3006] p-3 sm:p-6">
      {/* Top Navigation */}
      <div className="max-w-[1440px] mx-auto mb-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 px-4 lg:px-16">
          {/* Logo */}
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9bc7f4c3957329926c45ba3e1d6104debeb9620d" 
            alt="Logo" 
            className="w-14 h-14"
          />

          {/* Nav Items */}
          <div className="flex flex-wrap justify-center items-start gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`flex h-12 px-1 sm:px-4 items-center gap-1 rounded-full transition-colors ${
                  item.active ? "bg-[rgba(159,232,112,0.20)]" : ""
                }`}
              >
                <item.icon className="w-[18px] h-[18px]" stroke={item.active ? "#B1FA63" : "#CFD6C9"} strokeWidth={1.25} />
                <span className={`font-satoshi text-sm leading-6 -tracking-[0.14px] ${
                  item.active ? "font-bold text-[#B1FA63]" : "font-medium text-[#CFD6C9]"
                }`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* User Avatar */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7469593e83fba7a0c1099e16258d02c681f57b7f" 
                alt="User" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-[#EDEFEB] font-satoshi text-base font-bold leading-6 -tracking-[0.16px]">Adam Mid</div>
              <div className="text-[#EDEFEB] font-dm-sans text-[13px] leading-4 -tracking-[0.13px]">Mentor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] shadow-[0_0_20px_0_rgba(0,0,0,0.03)]">
        <div className="p-6 sm:p-8 lg:p-16">
          {/* Page Header */}
          <div className="mb-8">
            <div className="mb-5">
              <h1 className="text-[#000] font-random-grotesque text-[30px] font-bold leading-[34px] -tracking-[0.75px] mb-1">
                System Settings
              </h1>
              <p className="text-[#404040] font-satoshi text-base leading-6 -tracking-[0.16px]">
                Platform setup, roles, permissions, and integrations
              </p>
            </div>

            {/* Tabs */}
            <div className="border-b border-[#EAECF0]">
              <div className="flex items-start gap-4">
                <button
                  onClick={() => setActiveTab("general")}
                  className={`px-1 py-3 border-b-2 transition-colors ${
                    activeTab === "general"
                      ? "border-[#6A8042]"
                      : "border-transparent"
                  }`}
                >
                  <span className={`font-satoshi text-sm leading-5 ${
                    activeTab === "general" ? "font-bold text-[#6A8042]" : "font-medium text-[#8C8C8C]"
                  }`}>
                    General Platform Info
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("roles")}
                  className={`px-1 py-3 border-b-2 transition-colors ${
                    activeTab === "roles"
                      ? "border-[#6A8042]"
                      : "border-transparent"
                  }`}
                >
                  <span className={`font-satoshi text-sm leading-5 ${
                    activeTab === "roles" ? "font-bold text-[#6A8042]" : "font-medium text-[#8C8C8C]"
                  }`}>
                    Roles & Permissions
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("integrations")}
                  className={`px-1 py-3 border-b-2 transition-colors ${
                    activeTab === "integrations"
                      ? "border-[#6A8042]"
                      : "border-transparent"
                  }`}
                >
                  <span className={`font-satoshi text-sm leading-5 ${
                    activeTab === "integrations" ? "font-bold text-[#6A8042]" : "font-medium text-[#8C8C8C]"
                  }`}>
                    Integrations Screen
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* General Platform Info Tab */}
          {activeTab === "general" && (
            <div className="flex flex-col gap-8">
              {/* General Platform Info Section */}
              <div className="w-full max-w-[700px] p-6 sm:p-4 flex flex-col gap-6 rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                <div className="px-0 sm:px-6">
                  <h2 className="text-[#21231D] font-random-grotesque text-2xl font-bold leading-[120%]">
                    General Platform Info
                  </h2>
                </div>
                <div className="p-6 flex flex-col gap-8 rounded-3xl border border-[rgba(0,0,0,0.08)] bg-white">
                  <div className="flex flex-col gap-6">
                    {/* Platform Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#404040] font-random-grotesque text-sm font-semibold leading-[150%] -tracking-[0.28px]">
                        Platform Name
                      </label>
                      <div className="flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                        <input
                          type="text"
                          defaultValue="AI Powered Bootcamp"
                          className="flex-1 bg-transparent text-[#21231D] font-satoshi text-base font-medium leading-6 -tracking-[0.16px] outline-none"
                        />
                      </div>
                    </div>

                    {/* Default Language & Time Zone */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 flex flex-col gap-1.5">
                        <label className="text-[#404040] font-random-grotesque text-sm font-semibold leading-[150%] -tracking-[0.28px]">
                          Default Language
                        </label>
                        <div className="flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                          <span className="flex-1 text-[#21231D] font-satoshi text-base font-medium leading-6 -tracking-[0.16px]">
                            English
                          </span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.514 11.0865C8.46239 11.1406 8.40032 11.1837 8.33157 11.2132C8.26281 11.2426 8.1888 11.2578 8.114 11.2578C8.0392 11.2578 7.96519 11.2426 7.89643 11.2132C7.82768 11.1837 7.76561 11.1406 7.714 11.0865L2 5.37251L2.8 4.57251L8.114 9.88651L13.4287 4.57251L14.2287 5.37251L8.514 11.0865Z" fill="black"/>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-1.5">
                        <label className="text-[#404040] font-random-grotesque text-sm font-semibold leading-[150%] -tracking-[0.28px]">
                          Time Zone
                        </label>
                        <div className="flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                          <span className="flex-1 text-[#21231D] font-satoshi text-base font-medium leading-6 -tracking-[0.16px]">
                            PST
                          </span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.514 11.0865C8.46239 11.1406 8.40032 11.1837 8.33157 11.2132C8.26281 11.2426 8.1888 11.2578 8.114 11.2578C8.0392 11.2578 7.96519 11.2426 7.89643 11.2132C7.82768 11.1837 7.76561 11.1406 7.714 11.0865L2 5.37251L2.8 4.57251L8.114 9.88651L13.4287 4.57251L14.2287 5.37251L8.514 11.0865Z" fill="black"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Date Format */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#404040] font-random-grotesque text-sm font-semibold leading-[150%] -tracking-[0.28px]">
                        Date Format
                      </label>
                      <div className="flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                        <span className="flex-1 text-[#21231D] font-satoshi text-base font-medium leading-6 -tracking-[0.16px]">
                          DD/MM/YYYY
                        </span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.514 11.0865C8.46239 11.1406 8.40032 11.1837 8.33157 11.2132C8.26281 11.2426 8.1888 11.2578 8.114 11.2578C8.0392 11.2578 7.96519 11.2426 7.89643 11.2132C7.82768 11.1837 7.76561 11.1406 7.714 11.0865L2 5.37251L2.8 4.57251L8.114 9.88651L13.4287 4.57251L14.2287 5.37251L8.514 11.0865Z" fill="black"/>
                        </svg>
                      </div>
                    </div>

                    {/* Organization Logo */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#000] font-random-grotesque text-sm font-semibold leading-[150%] -tracking-[0.28px]">
                        Organization Logo
                      </label>
                      <div className="flex px-6 py-4 flex-col items-center gap-1 rounded-xl border border-[#EAECF0] bg-[#F9FAF9]">
                        <div className="flex flex-col items-center gap-3">
                          <div className="flex w-10 h-10 p-2.5 justify-center items-center rounded-[28px] border-[6px] border-[#F9FAFB] bg-[#ECEFEC]">
                            <Upload className="w-5 h-5 text-[#21231D]" strokeWidth={1.66667} />
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="flex justify-center items-start gap-1">
                              <button className="text-[#6A8042] font-satoshi text-sm font-bold leading-5">
                                Click to upload
                              </button>
                              <span className="text-[#404040] font-satoshi text-sm leading-5">
                                or drag and drop
                              </span>
                            </div>
                            <p className="text-[#404040] text-center font-satoshi text-xs leading-[18px]">
                              SVG, PNG, JPG or GIF (max. 800x400px)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branding Section */}
              <div className="w-full max-w-[700px] p-6 sm:p-4 flex flex-col gap-6 rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                <div className="px-0 sm:px-6">
                  <h2 className="text-[#21231D] font-random-grotesque text-2xl font-bold leading-[120%]">
                    Branding
                  </h2>
                </div>
                <div className="p-6 flex flex-col gap-8 rounded-3xl border border-[rgba(0,0,0,0.08)] bg-white">
                  <div className="flex flex-col gap-6">
                    {/* Primary & Accent Color */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 flex flex-col gap-1.5">
                        <label className="text-[#000] font-random-grotesque text-sm font-semibold leading-[150%] -tracking-[0.28px]">
                          Primary Color
                        </label>
                        <div className="flex items-center gap-1.5">
                          <div className="w-12 h-12 rounded-full bg-[#1E3006]"></div>
                          <div className="flex-1 flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                            <input
                              type="text"
                              defaultValue="#1E3006"
                              className="flex-1 bg-transparent text-[#1E3006] font-satoshi text-base leading-6 -tracking-[0.16px] outline-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-1.5">
                        <label className="text-[#000] font-random-grotesque text-sm font-semibold leading-[150%] -tracking-[0.28px]">
                          Accent Color
                        </label>
                        <div className="flex items-center gap-1.5">
                          <div className="w-12 h-12 rounded-full bg-[#9FE870]"></div>
                          <div className="flex-1 flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                            <input
                              type="text"
                              defaultValue="#1E3006"
                              className="flex-1 bg-transparent text-[#1E3006] font-satoshi text-base leading-6 -tracking-[0.16px] outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Primary & Secondary Font */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 flex flex-col gap-1.5">
                        <label className="text-[#404040] font-random-grotesque text-sm font-semibold leading-[150%] -tracking-[0.28px]">
                          Primary Font
                        </label>
                        <div className="flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                          <span className="flex-1 text-[#21231D] font-satoshi text-base font-medium leading-6 -tracking-[0.16px]">
                            Random Grotesque Standard
                          </span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.514 11.0865C8.46239 11.1406 8.40032 11.1837 8.33157 11.2132C8.26281 11.2426 8.1888 11.2578 8.114 11.2578C8.0392 11.2578 7.96519 11.2426 7.89643 11.2132C7.82768 11.1837 7.76561 11.1406 7.714 11.0865L2 5.37251L2.8 4.57251L8.114 9.88651L13.4287 4.57251L14.2287 5.37251L8.514 11.0865Z" fill="black"/>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-1.5">
                        <label className="text-[#404040] font-random-grotesque text-sm font-semibold leading-[150%] -tracking-[0.28px]">
                          Secondary Font
                        </label>
                        <div className="flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                          <span className="flex-1 text-[#21231D] font-satoshi text-base font-medium leading-6 -tracking-[0.16px]">
                            Satoshi
                          </span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.514 11.0865C8.46239 11.1406 8.40032 11.1837 8.33157 11.2132C8.26281 11.2426 8.1888 11.2578 8.114 11.2578C8.0392 11.2578 7.96519 11.2426 7.89643 11.2132C7.82768 11.1837 7.76561 11.1406 7.714 11.0865L2 5.37251L2.8 4.57251L8.114 9.88651L13.4287 4.57251L14.2287 5.37251L8.514 11.0865Z" fill="black"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Button Style */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#404040] font-random-grotesque text-sm font-semibold leading-[150%] -tracking-[0.28px]">
                        Button Style
                      </label>
                      <div className="flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                        <span className="flex-1 text-[#21231D] font-satoshi text-base font-medium leading-6 -tracking-[0.16px]">
                          Rounded
                        </span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.514 11.0865C8.46239 11.1406 8.40032 11.1837 8.33157 11.2132C8.26281 11.2426 8.1888 11.2578 8.114 11.2578C8.0392 11.2578 7.96519 11.2426 7.89643 11.2132C7.82768 11.1837 7.76561 11.1406 7.714 11.0865L2 5.37251L2.8 4.57251L8.114 9.88651L13.4287 4.57251L14.2287 5.37251L8.514 11.0865Z" fill="black"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data & Storage Section */}
              <div className="w-full max-w-[700px] p-6 sm:p-4 flex flex-col gap-6 rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                <div className="px-0 sm:px-6">
                  <h2 className="text-[#21231D] font-random-grotesque text-2xl font-bold leading-[120%]">
                    Data & Storage
                  </h2>
                </div>
                <div className="p-6 flex flex-col gap-8 rounded-3xl border border-[rgba(0,0,0,0.08)] bg-white">
                  <div className="flex flex-col gap-4">
                    {/* Student Data Retention Period */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#404040] font-random-grotesque text-sm font-semibold leading-[150%] -tracking-[0.28px]">
                        Student Data Retention Period
                      </label>
                      <div className="flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                        <span className="flex-1 text-[#21231D] font-satoshi text-base font-medium leading-6 -tracking-[0.16px]">
                          1 year
                        </span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.514 11.0865C8.46239 11.1406 8.40032 11.1837 8.33157 11.2132C8.26281 11.2426 8.1888 11.2578 8.114 11.2578C8.0392 11.2578 7.96519 11.2426 7.89643 11.2132C7.82768 11.1837 7.76561 11.1406 7.714 11.0865L2 5.37251L2.8 4.57251L8.114 9.88651L13.4287 4.57251L14.2287 5.37251L8.514 11.0865Z" fill="black"/>
                        </svg>
                      </div>
                    </div>

                    {/* Backup Frequency */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#404040] font-random-grotesque text-sm font-semibold leading-[150%] -tracking-[0.28px]">
                        Backup Frequency
                      </label>
                      <div className="flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                        <span className="flex-1 text-[#21231D] font-satoshi text-base font-medium leading-6 -tracking-[0.16px]">
                          1 year
                        </span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.514 11.0865C8.46239 11.1406 8.40032 11.1837 8.33157 11.2132C8.26281 11.2426 8.1888 11.2578 8.114 11.2578C8.0392 11.2578 7.96519 11.2426 7.89643 11.2132C7.82768 11.1837 7.76561 11.1406 7.714 11.0865L2 5.37251L2.8 4.57251L8.114 9.88651L13.4287 4.57251L14.2287 5.37251L8.514 11.0865Z" fill="black"/>
                        </svg>
                      </div>
                    </div>

                    {/* Update Password Button */}
                    <button className="flex h-14 px-8 justify-center items-center gap-2 rounded-full bg-[#9FE870] self-start">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.99996 4.16699V15.8337M4.16663 10.0003H15.8333" stroke="#1E3006" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[#1E3006] font-satoshi text-base font-bold leading-6 -tracking-[0.16px]">
                        Update Password
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Roles & Permissions Tab */}
          {activeTab === "roles" && (
            <div className="w-full max-w-[700px] p-6 sm:p-4 flex flex-col gap-6 rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
              <div className="px-0 sm:px-6">
                <h2 className="text-[#21231D] font-random-grotesque text-2xl font-bold leading-[120%]">
                  Roles & Permissions
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                {roles.map((role, index) => (
                  <div key={index} className="p-6 flex flex-col gap-4 rounded-3xl border border-[rgba(0,0,0,0.08)] bg-white">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex-1 flex flex-col gap-2">
                        <h3 className="text-[#000] font-random-grotesque text-sm font-semibold leading-[150%] -tracking-[0.28px]">
                          {role.name}
                        </h3>
                        <p className="text-[#404040] font-satoshi text-base leading-6 -tracking-[0.16px]">
                          {role.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <label className="flex items-start gap-2 cursor-pointer">
                          <div className="flex pt-0.5 justify-center items-center">
                            <div className="w-4 h-4 rounded border border-[#D0D5DD] bg-white"></div>
                          </div>
                          <span className="text-[#21231D] font-satoshi text-sm font-medium leading-5">View</span>
                        </label>
                        <label className="flex items-start gap-2 cursor-pointer">
                          <div className="flex pt-0.5 justify-center items-center">
                            <div className="w-4 h-4 rounded border border-[#D0D5DD] bg-white"></div>
                          </div>
                          <span className="text-[#21231D] font-satoshi text-sm font-medium leading-5">Edit</span>
                        </label>
                        <label className="flex items-start gap-2 cursor-pointer">
                          <div className="flex pt-0.5 justify-center items-center">
                            <div className="w-4 h-4 rounded border border-[#D0D5DD] bg-white"></div>
                          </div>
                          <span className="text-[#21231D] font-satoshi text-sm font-medium leading-5">Delete</span>
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Integrations Tab */}
          {activeTab === "integrations" && (
            <div className="w-full max-w-[700px] p-6 sm:p-4 flex flex-col gap-6 rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
              <div className="px-0 sm:px-6">
                <h2 className="text-[#21231D] font-random-grotesque text-2xl font-bold leading-[120%]">
                  Integrations
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                {/* Integration Cards - 2 per row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {integrations.slice(0, 2).map((integration, index) => (
                    <IntegrationCard key={index} {...integration} />
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {integrations.slice(2, 4).map((integration, index) => (
                    <IntegrationCard key={index} {...integration} />
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {integrations.slice(4, 6).map((integration, index) => (
                    <IntegrationCard key={index} {...integration} />
                  ))}
                </div>

                {/* Warning Notice */}
                {showNotice && (
                  <div className="flex p-6 gap-3 rounded-xl border border-[#EDEFEB] bg-[rgba(255,231,135,0.30)]">
                    <div className="flex-1 flex flex-col gap-3">
                      <div className="flex flex-col gap-1">
                        <p className="text-[#3A341C] font-satoshi text-sm font-bold leading-5 -tracking-[0.14px]">
                          ⚠️ Data Permissions Notice
                        </p>
                        <p className="text-[#3A341C] font-satoshi text-sm leading-5 -tracking-[0.14px]">
                          Grant only essential data access for third-party integrations. Review permissions carefully.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowNotice(false)}
                      className="flex justify-center items-center p-2 rounded-lg hover:bg-black/5 transition-colors"
                    >
                      <X className="w-5 h-5 text-[#3A341C]" strokeWidth={1.66667} />
                    </button>
                  </div>
                )}
              </div>

              {/* Add New Integration */}
              <div className="flex flex-col gap-6 mt-2">
                <div className="px-0 sm:px-6">
                  <h2 className="text-[#21231D] font-random-grotesque text-2xl font-bold leading-[120%]">
                    Add New Integration
                  </h2>
                </div>
                <div className="p-6 flex flex-col gap-8 rounded-3xl border border-[rgba(0,0,0,0.08)] bg-white">
                  <div className="flex flex-col sm:flex-row items-end gap-4">
                    <div className="flex-1 flex flex-col gap-6 w-full">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[#404040] font-random-grotesque text-sm font-semibold leading-[150%] -tracking-[0.28px]">
                          Intergration
                        </label>
                        <div className="flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                          <span className="flex-1 text-[#21231D] font-satoshi text-base font-medium leading-6 -tracking-[0.16px]">
                            Select
                          </span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.514 11.0865C8.46239 11.1406 8.40032 11.1837 8.33157 11.2132C8.26281 11.2426 8.1888 11.2578 8.114 11.2578C8.0392 11.2578 7.96519 11.2426 7.89643 11.2132C7.82768 11.1837 7.76561 11.1406 7.714 11.0865L2 5.37251L2.8 4.57251L8.114 9.88651L13.4287 4.57251L14.2287 5.37251L8.514 11.0865Z" fill="black"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <button className="flex h-14 px-8 justify-center items-center gap-2 rounded-full bg-[#9FE870] whitespace-nowrap">
                      <span className="text-[#1E3006] font-satoshi text-base font-bold leading-6 -tracking-[0.16px]">
                        Connect Integration
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function IntegrationCard({ name, description, enabled }: { name: string; description: string; enabled: boolean }) {
  return (
    <div className="flex flex-col rounded-3xl border border-[rgba(0,0,0,0.08)] bg-white">
      <div className="p-6 flex flex-col gap-6">
        <div className="flex items-start gap-2 justify-between">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0"></div>
            <h3 className="flex-1 text-[#21231D] font-satoshi text-base font-bold leading-6">
              {name}
            </h3>
          </div>
          <div className="flex flex-col gap-2.5">
            <div
              className={`flex w-9 h-5 p-0.5 rounded-xl transition-colors ${
                enabled ? "bg-[#1E3006] justify-end" : "bg-[#F2F4F7] justify-start"
              }`}
            >
              <div className="w-4 h-4 rounded-full bg-white shadow-sm"></div>
            </div>
          </div>
        </div>
        <p className="text-[#404040] font-satoshi text-sm leading-5">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-4 pb-4">
        <div className="h-px bg-[#EAECF0]"></div>
        <div className="flex px-6 justify-end items-center gap-4">
          <button className="text-[#6A8042] font-satoshi text-sm font-bold leading-5">
            View integration
          </button>
        </div>
      </div>
    </div>
  );
}
