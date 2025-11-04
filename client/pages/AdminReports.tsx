import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, BookOpen, Heart, Wand2, TrendingUp, Settings, Download, ChevronDown, Target, AlertCircle, Clock } from "lucide-react";
import { useState } from "react";

export default function AdminReports() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"reports" | "billing">("reports");

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/admin-dashboard", icon: Home },
    { id: "students", label: "Students", path: "/admin-students", icon: Users },
    { id: "mentors", label: "Mentors", path: "/admin-mentors", icon: Users },
    { id: "parents", label: "Parents", path: "/admin-parents", icon: Heart },
    { id: "programs", label: "Programs", path: "/admin-programs", icon: BookOpen },
    { id: "ai-logs", label: "Ai System Logs", path: "/admin-ai-logs", icon: Wand2 },
    { id: "reports", label: "Reports", path: "/admin-reports", icon: TrendingUp, active: true },
    { id: "settings", label: "Settings", path: "/admin-settings", icon: Settings },
  ];

  const billingData = [
    { parent: "Michael Johnson", student: "Emma Johnson", plan: "1 year cohort", amount: "$999/year", status: "Active", nextBilling: "Jan 15, 2025" },
    { parent: "Tech Innovators Conference '24", student: "Tech Innovators Conference '24", plan: "2 months cohorts", amount: "$200/mo", status: "Active", nextBilling: "Feb 20, 2025" },
    { parent: "Sustainable Design Summit '24", student: "Sustainable Design Summit '24", plan: "1 year cohort", amount: "$999/year", status: "Active", nextBilling: "Mar 10, 2025" },
    { parent: "Global Startup Challenge '24", student: "Global Startup Challenge '24", plan: "2 months cohorts", amount: "$200/mo", status: "Pending", nextBilling: "N/A" },
    { parent: "Digital Health Symposium '24", student: "Digital Health Symposium '24", plan: "2 months cohorts", amount: "$200/mo", status: "Active", nextBilling: "May 25, 2025" },
    { parent: "Future of Work Expo '24", student: "Future of Work Expo '24", plan: "2 months cohorts", amount: "$200/mo", status: "Active", nextBilling: "Jun 30, 2025" },
  ];

  return (
    <div className="min-h-screen bg-[#1E3006] p-3 sm:p-6">
      {/* Top Navigation */}
      <div className="max-w-[1440px] mx-auto mb-6">
        <div className="flex justify-between items-center px-4 sm:px-16">
          {/* Logo */}
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9bc7f4c3957329926c45ba3e1d6104debeb9620d" 
            alt="Logo" 
            className="w-14 h-14"
          />

          {/* Navigation Items */}
          <div className="hidden lg:flex justify-center items-start gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`flex h-12 px-4 items-center gap-1 rounded-full transition-colors ${
                  item.active
                    ? "bg-[rgba(159,232,112,0.20)]"
                    : "hover:bg-[rgba(159,232,112,0.10)]"
                }`}
              >
                <item.icon 
                  className={`w-[18px] h-[18px] ${
                    item.active ? "text-[#B1FA63]" : "text-[#CFD6C9]"
                  }`}
                  strokeWidth={1.25}
                />
                <span 
                  className={`font-satoshi text-sm leading-6 -tracking-[0.14px] ${
                    item.active 
                      ? "text-[#B1FA63] font-bold" 
                      : "text-[#CFD6C9] font-medium"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Avatar */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-white bg-[#9FE870] overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7469593e83fba7a0c1099e16258d02c681f57b7f" 
                alt="Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-[#EDEFEB] font-satoshi text-base font-bold leading-6 -tracking-[0.16px]">
                Adam Mid
              </div>
              <div className="text-[#EDEFEB] font-dm-sans text-[13px] leading-4 -tracking-[0.13px]">
                Mentor
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] shadow-[0_0_20px_0_rgba(0,0,0,0.03)]">
        <div className="p-8 sm:p-16">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-5">
              <div>
                <h1 className="text-[#000] font-random-grotesque text-[30px] font-bold leading-[34px] -tracking-[0.75px] mb-1">
                  Reports & Analytics
                </h1>
                <p className="text-[#404040] font-satoshi text-base leading-6 -tracking-[0.16px]">
                  Exportable performance metrics and analytics
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button className="flex px-4 py-2 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white">
                  <span className="text-[#21231D] font-satoshi text-sm leading-5">Report Type</span>
                  <ChevronDown className="w-4 h-4 text-[#21231D]" strokeWidth={1.5} />
                </button>
                <button className="flex px-4 py-2 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white">
                  <span className="text-[#21231D] font-satoshi text-sm leading-5">Time Period</span>
                  <ChevronDown className="w-4 h-4 text-[#21231D]" strokeWidth={1.5} />
                </button>
                <button className="flex px-6 py-4 items-center gap-4 rounded-full bg-[#9FE870]">
                  <Download className="w-5 h-5 text-[#1E3006]" strokeWidth={1.5} />
                  <span className="text-[#1E3006] font-satoshi text-base font-bold leading-6">Export Report</span>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-[#EAECF0]">
              <div className="flex items-start gap-4">
                <button
                  onClick={() => setActiveTab("reports")}
                  className={`px-1 py-3 border-b-2 transition-colors ${
                    activeTab === "reports"
                      ? "border-[#6A8042]"
                      : "border-transparent"
                  }`}
                >
                  <span className={`font-satoshi text-sm font-bold leading-5 ${
                    activeTab === "reports" ? "text-[#6A8042]" : "text-[#8C8C8C]"
                  }`}>
                    Reports
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("billing")}
                  className={`px-1 py-3 border-b-2 transition-colors ${
                    activeTab === "billing"
                      ? "border-[#6A8042]"
                      : "border-transparent"
                  }`}
                >
                  <span className={`font-satoshi text-sm font-bold leading-5 ${
                    activeTab === "billing" ? "text-[#6A8042]" : "text-[#8C8C8C]"
                  }`}>
                    Biling & Finance
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Reports Tab Content */}
          {activeTab === "reports" && (
            <div className="space-y-8">
              {/* Student Metrics */}
              <div className="p-6 rounded-[32px] border border-[rgba(0,0,0,0.1)] bg-[#F9FAF9]">
                <h2 className="text-[#000] font-satoshi text-lg font-bold leading-7 -tracking-[0.36px] mb-6">
                  Student Metrics
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <MetricCard
                    icon={<Target className="w-5 h-5 text-[#404040]" strokeWidth={1.25} />}
                    label="Total active students"
                    value="0"
                  />
                  <MetricCard
                    icon={<Clock className="w-5 h-5 text-[#404040]" strokeWidth={1.25} />}
                    label="Avg session duration"
                    value="0s"
                  />
                  <MetricCard
                    icon={<AlertCircle className="w-5 h-5 text-[#404040]" strokeWidth={1.25} />}
                    label="Weekly login rate"
                    value="0"
                  />
                  <MetricCard
                    icon={<AlertCircle className="w-5 h-5 text-[#404040]" strokeWidth={1.25} />}
                    label="Assignment completion"
                    value="0"
                  />
                </div>
              </div>

              {/* Revenue Growth */}
              <div className="p-6 rounded-[32px] border border-[rgba(0,0,0,0.1)] bg-[#F9FAF9]">
                <div className="mb-6 pb-5 border-b border-[#EAECF0]">
                  <h2 className="text-[#000] font-satoshi text-lg font-bold leading-7 -tracking-[0.36px]">
                    Revenue Growth
                  </h2>
                </div>
                <div className="p-6 rounded-3xl border border-[#6A8042] bg-white">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
                    <div className="flex items-center gap-2">
                      <button className="flex px-4 py-2 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white">
                        <span className="text-[#21231D] font-satoshi text-sm leading-5">Filter</span>
                        <ChevronDown className="w-4 h-4 text-[#21231D]" strokeWidth={1.5} />
                      </button>
                      <button className="flex px-4 py-2 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white">
                        <span className="text-[#21231D] font-satoshi text-sm leading-5">Filter</span>
                        <ChevronDown className="w-4 h-4 text-[#21231D]" strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#21231D] font-satoshi text-sm leading-5">Range:</span>
                      <button className="flex px-4 py-2 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white">
                        <span className="text-[#21231D] font-satoshi text-sm leading-5">All Time</span>
                        <ChevronDown className="w-4 h-4 text-[#21231D]" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                  <BarChart />
                </div>
              </div>

              {/* Program Metrics */}
              <div className="p-6 rounded-[32px] border border-[rgba(0,0,0,0.1)] bg-[#F9FAF9]">
                <h2 className="text-[#000] font-satoshi text-lg font-bold leading-7 -tracking-[0.36px] mb-6">
                  Program Metrics
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <MetricCard
                    icon={<Target className="w-5 h-5 text-[#404040]" strokeWidth={1.25} />}
                    label="Programs running"
                    value="0"
                  />
                  <MetricCard
                    icon={<Users className="w-5 h-5 text-[#404040]" strokeWidth={1.25} />}
                    label="Avg cohort size"
                    value="0s"
                  />
                  <MetricCard
                    icon={<AlertCircle className="w-5 h-5 text-[#404040]" strokeWidth={1.25} />}
                    label="Completion rate"
                    value="0"
                  />
                  <MetricCard
                    icon={<AlertCircle className="w-5 h-5 text-[#404040]" strokeWidth={1.25} />}
                    label="Student satisfaction"
                    value="0"
                  />
                </div>
              </div>

              {/* Student Enrollment Trend */}
              <div className="p-6 rounded-[32px] border border-[rgba(0,0,0,0.1)] bg-[#F9FAF9]">
                <div className="mb-6 pb-5 border-b border-[#EAECF0]">
                  <h2 className="text-[#000] font-satoshi text-lg font-bold leading-7 -tracking-[0.36px]">
                    Student Enrollment Trend
                  </h2>
                </div>
                <div className="p-6 rounded-3xl border border-[#6A8042] bg-white">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
                    <div className="flex items-center gap-2">
                      <button className="flex px-4 py-2 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white">
                        <span className="text-[#21231D] font-satoshi text-sm leading-5">Filter</span>
                        <ChevronDown className="w-4 h-4 text-[#21231D]" strokeWidth={1.5} />
                      </button>
                      <button className="flex px-4 py-2 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white">
                        <span className="text-[#21231D] font-satoshi text-sm leading-5">Filter</span>
                        <ChevronDown className="w-4 h-4 text-[#21231D]" strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#21231D] font-satoshi text-sm leading-5">Range:</span>
                      <button className="flex px-4 py-2 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white">
                        <span className="text-[#21231D] font-satoshi text-sm leading-5">All Time</span>
                        <ChevronDown className="w-4 h-4 text-[#21231D]" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                  <LineChart />
                </div>
              </div>

              {/* AI Usage Metrics */}
              <div className="p-6 rounded-[32px] border border-[rgba(0,0,0,0.1)] bg-[#F9FAF9]">
                <div className="mb-6 pb-5 border-b border-[#EAECF0]">
                  <h2 className="text-[#000] font-satoshi text-lg font-bold leading-7 -tracking-[0.36px]">
                    AI Usage Metrics
                  </h2>
                </div>
                <div className="p-10 rounded-sm bg-white flex flex-col lg:flex-row items-center justify-center gap-10">
                  <DonutChart />
                  <div className="flex flex-col items-start gap-1">
                    <LegendItem color="#9FE870" label="Daily queries: 3,247" />
                    <LegendItem color="#91D366" label="Avg response time: 1.4s" />
                    <LegendItem color="#71A550" label="Success rate: 98.5%" />
                    <LegendItem color="#57803E" label="User satisfaction: 4.8/5" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Billing & Finance Tab Content */}
          {activeTab === "billing" && (
            <div className="space-y-8">
              {/* Financial Metrics */}
              <div className="p-4 rounded-[32px] border border-[rgba(0,0,0,0.1)] bg-[#F9FAF9]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <FinancialMetricCard
                    label="Monthly Revenue"
                    value="0.00"
                    change="↑ 18.2% from last month"
                    changePositive={true}
                  />
                  <FinancialMetricCard
                    label="Active Subscriptions"
                    value="0"
                    change="↑ 18.2% from last month"
                    changePositive={true}
                  />
                  <FinancialMetricCard
                    label="Avg Revenue Per User"
                    value="0"
                    change="↑ 18.2% from last month"
                    changePositive={true}
                  />
                  <FinancialMetricCard
                    label="Payment Success Rate"
                    value="0%"
                    change="↑ 18.2% from last month"
                    changePositive={true}
                  />
                </div>
              </div>

              {/* Billing Table */}
              <div className="p-4 rounded-[32px] border border-[#6A8042] bg-[#F9FAF9]">
                <div className="p-6 rounded-[20px] border border-[#EAECF0] bg-white overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#EAECF0]">
                        <th className="px-6 py-3 text-left">
                          <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Parent Account</span>
                        </th>
                        <th className="px-6 py-3 text-left">
                          <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Student</span>
                        </th>
                        <th className="px-6 py-3 text-left">
                          <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Plan</span>
                        </th>
                        <th className="px-6 py-3 text-left">
                          <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Amount</span>
                        </th>
                        <th className="px-6 py-3 text-left">
                          <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Status</span>
                        </th>
                        <th className="px-6 py-3 text-left">
                          <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Next Billing</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {billingData.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-[#F9FAF9]" : "bg-white"}>
                          <td className={`px-6 py-4 ${index % 2 === 0 ? "rounded-l-full" : ""}`}>
                            <span className="text-[#21231D] font-satoshi text-sm font-medium leading-5">{row.parent}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-[#21231D] font-satoshi text-sm font-medium leading-5">{row.student}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-2 py-0.5 rounded-2xl bg-[#F2F4F7] text-[#21231D] font-satoshi text-xs font-medium leading-[18px]">
                              {row.plan}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-2 py-0.5 rounded-2xl bg-[#F2F4F7] text-[#21231D] font-satoshi text-xs font-medium leading-[18px]">
                              {row.amount}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2 py-0.5 rounded-2xl font-satoshi text-xs font-medium leading-[18px] ${
                              row.status === "Active" 
                                ? "bg-[rgba(159,232,112,0.2)] text-[#008915]"
                                : "bg-[#FFFAEB] text-[#EE7A13]"
                            }`}>
                              {row.status}
                            </span>
                          </td>
                          <td className={`px-6 py-4 ${index % 2 === 0 ? "rounded-r-full" : ""}`}>
                            <span className="text-[#21231D] font-satoshi text-sm font-medium leading-5">{row.nextBilling}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="mt-4 p-2 rounded-full border border-[#6A8042] bg-white flex justify-center items-center">
                  <div className="flex items-center justify-between w-full max-w-2xl px-4">
                    <button className="flex items-center gap-2 text-[#D0D5DD]" disabled>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15.8334 9.99984H4.16669M4.16669 9.99984L10 15.8332M4.16669 9.99984L10 4.1665" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="font-random-grotesque text-base font-medium -tracking-[0.16px]">Previous</span>
                    </button>
                    <div className="flex items-center gap-0.5">
                      <button className="w-10 h-10 rounded-lg bg-[#F9FAFB] flex items-center justify-center">
                        <span className="text-[#404040] font-random-grotesque text-base font-medium -tracking-[0.16px]">1</span>
                      </button>
                      <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#F9FAFB]">
                        <span className="text-[#404040] font-random-grotesque text-base font-medium -tracking-[0.16px]">2</span>
                      </button>
                      <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#F9FAFB]">
                        <span className="text-[#404040] font-random-grotesque text-base font-medium -tracking-[0.16px]">3</span>
                      </button>
                      <div className="w-10 h-10 flex items-center justify-center">
                        <span className="text-[#475467] font-inter text-sm font-medium">...</span>
                      </div>
                      <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#F9FAFB]">
                        <span className="text-[#404040] font-random-grotesque text-base font-medium -tracking-[0.16px]">8</span>
                      </button>
                      <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#F9FAFB]">
                        <span className="text-[#404040] font-random-grotesque text-base font-medium -tracking-[0.16px]">9</span>
                      </button>
                      <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#F9FAFB]">
                        <span className="text-[#404040] font-random-grotesque text-base font-medium -tracking-[0.16px]">10</span>
                      </button>
                    </div>
                    <button className="flex items-center gap-2 text-[#404040]">
                      <span className="font-random-grotesque text-base font-medium -tracking-[0.16px]">Next</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4.16666 9.99984H15.8333M15.8333 9.99984L9.99999 4.1665M15.8333 9.99984L9.99999 15.8332" stroke="#475467" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
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

function MetricCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="p-4 rounded-[20px] border border-[rgba(0,0,0,0.1)] bg-white">
      <div className="w-16 h-16 rounded-full bg-[#F7F7F7] flex items-center justify-center mb-6">
        {icon}
      </div>
      <div className="space-y-2">
        <p className="text-[#404040] font-satoshi text-base leading-6 -tracking-[0.16px]">{label}</p>
        <p className="text-[#000] font-random-grotesque text-[64px] font-bold leading-[85%]">{value}</p>
      </div>
    </div>
  );
}

function FinancialMetricCard({ label, value, change, changePositive }: { label: string; value: string; change: string; changePositive: boolean }) {
  return (
    <div className="p-4 rounded-[20px] border border-[rgba(0,0,0,0.1)] bg-white">
      <div className="w-16 h-16 rounded-full bg-[#F7F7F7] flex items-center justify-center mb-6">
        <Target className="w-5 h-5 text-[#404040]" strokeWidth={1.25} />
      </div>
      <div className="space-y-2">
        <p className="text-[#404040] font-satoshi text-base leading-6 -tracking-[0.16px]">{label}</p>
        <p className="text-[#000] font-random-grotesque text-[64px] font-bold leading-[85%]">{value}</p>
        <p className={`font-satoshi text-base leading-6 -tracking-[0.16px] ${changePositive ? "text-[#008915]" : "text-[#EE7A13]"}`}>
          {change}
        </p>
      </div>
    </div>
  );
}

function BarChart() {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
  const heights = ["51%", "86%", "86%", "86%", "86%", "86%"];

  return (
    <div className="space-y-4">
      <div className="flex items-end gap-7 h-[409px]">
        <div className="flex flex-col justify-between h-full text-right text-[#21231D] font-satoshi text-[10px] font-medium leading-3 w-10">
          <span>500M</span>
          <span>200M</span>
          <span>100M</span>
          <span>10M</span>
          <span>500K</span>
          <span>0</span>
        </div>
        <div className="flex-1 flex items-end gap-7 h-full">
          {months.map((month, index) => (
            <div key={month} className="flex-1 flex flex-col items-center gap-2 h-full bg-[#F9FAF9] rounded-t-full">
              <div className="flex flex-col items-center justify-end flex-1 w-full">
                <div 
                  className="w-full bg-[#1E3006] rounded-t-full relative"
                  style={{ height: heights[index] }}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 -rotate-[28.5deg] px-2 py-1 rounded-full border border-white bg-[#B1FA63] whitespace-nowrap">
                    <span className="text-[#1E3006] font-satoshi text-[10px] leading-3">{month}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LineChart() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const yAxisLabels = ["1,000", "800", "600", "400", "200", "0"];

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-1">
        <div className="flex flex-col justify-between h-[355px] w-10 text-right">
          {yAxisLabels.map((label, index) => (
            <div key={index} className="text-[#344054] font-inter text-xs leading-[18px]">{label}</div>
          ))}
        </div>
        <div className="flex-1 relative h-[355px]">
          <svg className="w-full h-full" viewBox="0 0 1142 355" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="571" y1="46.2241" x2="571" y2="341.253" gradientUnits="userSpaceOnUse">
                <stop stopColor="#B1FA63" stopOpacity="0.1"/>
                <stop offset="1" stopColor="#B1FA63" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M1140 46.2241C1123.74 46.2241 1123.74 71.1113 1107.49 71.1113C1091.23 71.1113 1091.91 60.6676 1074.97 60.6676C1058.04 60.6676 1059.39 91.3322 1042.46 91.3322C1025.52 91.3322 1028.23 79.0219 1009.94 79.0219C991.654 79.0219 996.395 108.931 977.429 108.931C958.462 108.931 961.171 64.8895 944.914 64.8895C928.657 64.8895 930.012 97.0207 912.4 97.0207C894.788 97.0207 897.498 88.2213 879.886 88.2213C862.274 88.2213 864.983 110.22 847.371 110.22C829.76 110.22 831.792 120.886 814.857 120.886C797.923 120.886 799.277 96.8873 782.343 96.8873C765.408 96.8873 767.44 122.13 749.829 122.13C732.217 122.13 736.281 106.887 717.314 106.887C698.348 106.887 701.735 89.91 684.8 89.91C667.865 89.91 669.898 128.663 652.286 128.663C634.674 128.663 637.383 73.3334 619.771 73.3334C602.16 73.3334 604.192 106.398 587.257 106.398C570.323 106.398 573.71 126.174 554.743 126.174C535.776 126.174 540.518 114.175 522.229 114.175C503.939 114.175 508.681 138.618 489.714 138.618C470.748 138.618 475.489 129.196 457.2 129.196C438.911 129.196 442.298 114.931 424.686 114.931C407.074 114.931 409.783 166.172 392.171 166.172C374.56 166.172 378.624 153.639 359.657 153.639C340.691 153.639 343.4 173.238 327.143 173.238C310.886 173.238 312.918 159.239 294.629 159.239C276.339 159.239 279.049 199.68 262.114 199.68C245.18 199.68 248.567 187.503 229.6 187.503C210.633 187.503 215.375 178.66 197.086 178.66C178.796 178.66 182.183 205.769 164.571 205.769C146.96 205.769 151.024 211.457 132.057 211.457C113.091 211.457 118.51 196.481 99.5429 196.481C80.5762 196.481 83.2858 188.481 67.0286 188.481C50.7715 188.481 50.7715 214.479 34.5143 214.479C18.2572 214.479 19.6119 205.324 2.00004 205.324" 
              stroke="#6A8042" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1107.49 71.1113C1123.74 71.1113 1123.74 46.2241 1140 46.2241V355H2V205.324C19.6119 205.324 18.2572 214.479 34.5143 214.479C50.7715 214.479 50.7715 188.481 67.0287 188.481C83.2858 188.481 80.5762 196.481 99.5428 196.481C118.51 196.481 113.091 211.457 132.057 211.457C151.024 211.457 146.96 205.769 164.571 205.769C182.183 205.769 178.796 178.66 197.086 178.66C215.375 178.66 210.633 187.503 229.6 187.503C248.567 187.503 245.18 199.68 262.114 199.68C279.049 199.68 276.339 159.239 294.629 159.239C312.918 159.239 310.886 173.238 327.143 173.238C343.4 173.238 340.69 153.639 359.657 153.639C378.624 153.639 374.56 166.172 392.171 166.172C409.783 166.172 407.074 114.931 424.686 114.931C442.298 114.931 438.911 129.196 457.2 129.196C475.489 129.196 470.748 138.618 489.714 138.618C508.681 138.618 503.939 114.175 522.229 114.175C540.518 114.175 535.776 126.174 554.743 126.174C573.71 126.174 570.323 106.398 587.257 106.398C604.192 106.398 602.16 73.3334 619.771 73.3334C637.383 73.3334 634.674 128.663 652.286 128.663C669.898 128.663 667.865 89.91 684.8 89.91C701.735 89.91 698.348 106.887 717.314 106.887C736.281 106.887 732.217 122.13 749.829 122.13C767.44 122.13 765.408 96.8873 782.343 96.8873C799.277 96.8873 797.923 120.886 814.857 120.886C831.792 120.886 829.76 110.22 847.371 110.22C864.983 110.22 862.274 88.2213 879.886 88.2213C897.498 88.2213 894.788 97.0207 912.4 97.0207C930.012 97.0207 928.657 64.8895 944.914 64.8895C961.171 64.8895 958.462 108.931 977.429 108.931C996.395 108.931 991.654 79.0219 1009.94 79.0219C1028.23 79.0219 1025.52 91.3322 1042.46 91.3322C1059.39 91.3322 1058.04 60.6676 1074.97 60.6676C1091.91 60.6676 1091.23 71.1113 1107.49 71.1113Z" 
              fill="url(#lineGradient)" opacity="0.1"/>
          </svg>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-full max-w-5xl px-6">
          {months.map((month) => (
            <span key={month} className="text-[#21231D] font-satoshi text-xs font-medium leading-[18px]">{month}</span>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <span className="text-[#475467] font-inter text-xs font-medium leading-[18px]">Month</span>
      </div>
    </div>
  );
}

function DonutChart() {
  return (
    <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="128" cy="128" r="100" fill="none" stroke="#57803E" strokeWidth="40" strokeDasharray="100 530" transform="rotate(-90 128 128)"/>
      <circle cx="128" cy="128" r="100" fill="none" stroke="#71A550" strokeWidth="40" strokeDasharray="120 510" strokeDashoffset="-100" transform="rotate(-90 128 128)"/>
      <circle cx="128" cy="128" r="100" fill="none" stroke="#91D366" strokeWidth="40" strokeDasharray="180 450" strokeDashoffset="-220" transform="rotate(-90 128 128)"/>
      <circle cx="128" cy="128" r="100" fill="none" stroke="#9FE870" strokeWidth="40" strokeDasharray="230 400" strokeDashoffset="-400" transform="rotate(-90 128 128)"/>
      <text x="128" y="118" textAnchor="middle" className="fill-[#21231D] font-inter text-xs font-medium">Total</text>
      <text x="128" y="145" textAnchor="middle" className="fill-[#21231D] font-inter text-4xl font-bold">1,886</text>
    </svg>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 rounded-full border border-[rgba(0,0,0,0.2)] flex items-center justify-center" style={{ backgroundColor: color }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5.16663 8.49967L6.66663 10.1663L10.8333 5.83301" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className="text-[#21231D] font-satoshi text-sm leading-5">{label}</span>
    </div>
  );
}
