import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, BookOpen, Heart, Wand2, TrendingUp, Settings } from "lucide-react";
import { useState } from "react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

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

  const stats = [
    { 
      label: "Total Students", 
      value: "0", 
      change: "+12% this month", 
      changePositive: true,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6094 2.08366C11.7886 1.81328 10.9114 1.66699 10.0001 1.66699C5.39771 1.66699 1.66675 5.39795 1.66675 10.0003C1.66675 14.6027 5.39771 18.3337 10.0001 18.3337C14.6024 18.3337 18.3334 14.6027 18.3334 10.0003C18.3334 9.12933 18.1997 8.28953 17.9519 7.50033" stroke="#404040" strokeWidth="1.25" strokeLinecap="round"/>
          <path d="M14.1666 9.99967C14.1666 12.3008 12.3011 14.1663 9.99992 14.1663C7.69874 14.1663 5.83325 12.3008 5.83325 9.99967C5.83325 7.69849 7.69874 5.83301 9.99992 5.83301" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.25 3.75033L10 10.0003M16.25 3.75033V1.66699M16.25 3.75033H18.3333" stroke="#404040" strokeWidth="1.25" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      label: "Active Mentors", 
      value: "0", 
      change: "0 parents registered", 
      changePositive: false,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 6.66699C12.5 8.0477 11.3807 9.16699 10 9.16699C8.61925 9.16699 7.5 8.0477 7.5 6.66699C7.5 5.28628 8.61925 4.16699 10 4.16699C11.3807 4.16699 12.5 5.28628 12.5 6.66699Z" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.3334 3.33301C14.714 3.33301 15.8334 4.4523 15.8334 5.83301C15.8334 6.85225 15.2234 7.72903 14.3486 8.11826" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.4286 11.667H8.57143C6.59898 11.667 5 13.266 5 15.2384C5 16.0274 5.63959 16.667 6.42857 16.667H13.5714C14.3604 16.667 15 16.0274 15 15.2384C15 13.266 13.401 11.667 11.4286 11.667Z" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.762 10.833C16.7344 10.833 18.3334 12.432 18.3334 14.4044C18.3334 15.1934 17.6938 15.833 16.9048 15.833" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.66663 3.33301C5.28592 3.33301 4.16663 4.4523 4.16663 5.83301C4.16663 6.85225 4.77657 7.72903 5.65136 8.11826" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.0952 15.833C2.30622 15.833 1.66663 15.1934 1.66663 14.4044C1.66663 12.432 3.26561 10.833 5.23805 10.833" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      label: "Active Cohorts", 
      value: "0", 
      change: "5 total", 
      changePositive: false,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.99996 18.3337C14.6023 18.3337 18.3333 14.6027 18.3333 10.0003C18.3333 5.39795 14.6023 1.66699 9.99996 1.66699C5.39759 1.66699 1.66663 5.39795 1.66663 10.0003C1.66663 14.6027 5.39759 18.3337 9.99996 18.3337Z" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 6.66699V10.417" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 13.3232V13.3316" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      label: "Monthly Revenue", 
      value: "0/0", 
      change: "+18% vs last month", 
      changePositive: true,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8254 15.8337H15.8333M15.8254 15.8337C15.3065 16.3482 14.366 16.2201 13.7065 16.2201C12.897 16.2201 12.5072 16.3784 11.9295 16.9562C11.4375 17.4482 10.778 18.3337 9.99996 18.3337C9.22188 18.3337 8.56238 17.4482 8.07043 16.9562C7.49269 16.3784 7.10287 16.2201 6.29334 16.2201C5.63386 16.2201 4.69344 16.3482 4.17453 15.8337C3.65147 15.315 3.78019 14.3707 3.78019 13.7069C3.78019 12.8682 3.59676 12.4825 2.99944 11.8852C2.11091 10.9967 1.66664 10.5523 1.66663 10.0003C1.66663 9.44824 2.11089 9.00399 2.99942 8.11547C3.53263 7.58226 3.78019 7.05389 3.78019 6.29371C3.78019 5.6342 3.65203 4.69378 4.16663 4.17486C4.68532 3.65181 5.62963 3.78054 6.29336 3.78054C7.05352 3.78054 7.58189 3.53299 8.11508 2.9998C9.00363 2.11126 9.44788 1.66699 9.99996 1.66699C10.552 1.66699 10.9963 2.11126 11.8848 2.9998C12.4179 3.53288 12.9462 3.78054 13.7065 3.78054C14.366 3.78054 15.3065 3.65238 15.8255 4.16699C16.3485 4.68568 16.2197 5.62998 16.2197 6.29371C16.2197 7.13248 16.4032 7.51813 17.0005 8.11547C17.889 9.00399 18.3333 9.44824 18.3333 10.0003C18.3333 10.5523 17.889 10.9967 17.0005 11.8852C16.4031 12.4825 16.2197 12.8682 16.2197 13.7069C16.2197 14.3707 16.3485 15.315 15.8254 15.8337Z" stroke="#404040" strokeWidth="1.25"/>
          <path d="M7.5 10.7444L9 12.0837L12.5 7.91699" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  const revenueMonths = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
  const barHeights = [209, 351, 351, 351, 351, 351]; // Heights for the bars

  const systemHealth = [
    { title: "Nova AI System", status: "Running smoothly • 99.8% uptime", label: "Label" },
    { title: "Database", status: "All queries optimized • 45ms avg", label: "Label" },
    { title: "API Performance", status: "1,245 requests/min • Normal load", label: "Label" },
    { title: "Storage Usage", status: "78% capacity • Consider upgrade soon", label: "Label" },
  ];

  const activities = [
    { 
      type: "favorite", 
      user: "Candide", 
      action: "was favorited by", 
      target: "Michael Lamb", 
      time: "Just now",
      icon: "heart",
      color: "#121511"
    },
    { 
      type: "reading", 
      user: "Teresa Silva", 
      action: "started reading", 
      target: "Siddhartha", 
      time: "1 min ago",
      icon: "book",
      color: "#EDC843",
      note: '"So excited to get started on this novel! The prose and style of it is absolutely gorgeous, and its meaning and philosophy is something to truly cherish."'
    },
    { 
      type: "favorite", 
      user: "The Alchemist", 
      action: "was favorited by", 
      target: "Maria Gardner", 
      time: "2 mins ago",
      icon: "heart",
      color: "#FFC091"
    },
    { 
      type: "review", 
      user: "Loretta Goodman", 
      action: "reviewed", 
      target: "Rebecca", 
      time: "1 min ago",
      icon: "star",
      color: "#FFD7EF",
      note: '"This is one of the few books I just love to read again and again. The book has a very beautiful description of its characters and the mansion of menederly. It can also be described as an amazing gothic mystery love story. The unfolding of the mystery is marvellously depicted making us grip to the book till the end."'
    },
  ];

  const isActive = (itemPath: string) => location.pathname === itemPath;

  return (
    <div className="min-h-screen bg-[#1E3006] p-3 sm:p-6">
      {/* Header Navigation */}
      <div className="max-w-[1440px] mx-auto mb-6 px-4 sm:px-16">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9bc7f4c3957329926c45ba3e1d6104debeb9620d?width=112" 
            alt="Logo" 
            className="w-14 h-14"
          />

          {/* Navigation Tabs */}
          <div className="flex justify-center items-start gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = item.active || isActive(item.path);
              
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className={`flex h-12 px-4 items-center gap-1 rounded-full transition-all ${
                    active 
                      ? "bg-[rgba(159,232,112,0.20)]" 
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <Icon 
                    className="w-[18px] h-[18px]" 
                    strokeWidth={1.25}
                    color={active ? "#B1FA63" : "#CFD6C9"}
                  />
                  <span 
                    className={`text-sm leading-6 tracking-[-0.14px] ${
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

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-white bg-[#9FE870] overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7469593e83fba7a0c1099e16258d02c681f57b7f?width=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="text-base font-bold leading-6 tracking-[-0.16px] text-[#1E3006]">
                Adam Mid
              </div>
              <div className="text-[13px] leading-4 tracking-[-0.13px] text-[#21231D]">
                Mentor
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] p-8 sm:p-16 space-y-8">
        {/* Page Header */}
        <div className="space-y-5">
          <div>
            <h1 className="text-[30px] font-bold text-black leading-[34px] tracking-[-0.75px] mb-1">
              Platform Overview
            </h1>
            <p className="text-base text-[#404040] leading-6 tracking-[-0.16px]">
              System performance is stable. All 8-week programs are active.
            </p>
          </div>
          <div className="h-px bg-[rgba(0,0,0,0.10)]"></div>
        </div>

        {/* Stats Cards */}
        <div className="p-4 rounded-[32px] border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#F7F7F7] flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="space-y-2">
                  <div className="text-base text-[#404040]">{stat.label}</div>
                  <div className="text-[64px] font-bold text-black leading-[85%]">{stat.value}</div>
                  <div className={`text-base ${stat.changePositive ? "text-[#008915]" : "text-[#404040]"}`}>
                    {stat.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Growth Chart */}
        <div className="p-6 rounded-[32px] border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] space-y-6">
          <div className="space-y-5">
            <h2 className="text-lg font-bold text-black tracking-[-0.36px]">Revenue Growth</h2>
            <div className="h-px bg-[#EAECF0]"></div>
          </div>

          <div className="p-6 rounded-3xl border border-[rgba(230,234,241,0.60)] bg-white">
            <div className="space-y-12">
              {/* Toolbar */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 rounded-full border border-[#E2E8F0] bg-white text-sm text-[#21231D] flex items-center gap-2">
                    Filter
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10.1666 7.16699L7.99992 9.50033L5.83325 7.16699" stroke="#21231D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="px-4 py-2 rounded-full border border-[#E2E8F0] bg-white text-sm text-[#21231D] flex items-center gap-2">
                    Filter
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10.1666 7.16699L7.99992 9.50033L5.83325 7.16699" stroke="#21231D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#21231D]">Range:</span>
                  <button className="px-4 py-2 rounded-full border border-[#E2E8F0] bg-white text-sm text-[#21231D] flex items-center gap-2">
                    All Time
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10.1667 7.16699L8.00004 9.50033L5.83337 7.16699" stroke="#21231D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Chart */}
              <div className="space-y-4">
                <div className="flex items-end gap-7 h-[409px]">
                  {/* Y-axis */}
                  <div className="flex flex-col justify-between h-full w-10 text-right text-[10px] text-[#21231D]">
                    <div>500M</div>
                    <div>200M</div>
                    <div>100M</div>
                    <div>10M</div>
                    <div>500K</div>
                    <div>0</div>
                  </div>

                  {/* Bars */}
                  <div className="flex-1 flex items-end gap-7 h-full">
                    {revenueMonths.map((month, index) => (
                      <div key={month} className="flex-1 flex items-end h-full bg-[#F9FAF9] rounded-t-full">
                        <div className="w-full flex flex-col items-center" style={{ height: `${barHeights[index]}px` }}>
                          <div className="flex-1 w-full bg-[#1E3006] rounded-t-full"></div>
                          <div className="relative -mb-6">
                            <div className="px-2 py-1 rounded-full border border-white bg-[#B1FA63] text-[10px] text-[#1E3006] transform -rotate-[28deg]">
                              {month}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Enrollment Trend */}
        <div className="p-6 rounded-[32px] border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] space-y-6">
          <div className="space-y-5">
            <h2 className="text-lg font-bold text-black tracking-[-0.36px]">Student Enrollment Trend</h2>
            <div className="h-px bg-[#EAECF0]"></div>
          </div>

          <div className="p-6 rounded-3xl border border-[rgba(230,234,241,0.60)] bg-white min-h-[537px]">
            <div className="space-y-12">
              {/* Toolbar */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 rounded-full border border-[#E2E8F0] bg-white text-sm text-[#21231D] flex items-center gap-2">
                    Filter
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10.1666 7.16699L7.99992 9.50033L5.83325 7.16699" stroke="#21231D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="px-4 py-2 rounded-full border border-[#E2E8F0] bg-white text-sm text-[#21231D] flex items-center gap-2">
                    Filter
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10.1666 7.16699L7.99992 9.50033L5.83325 7.16699" stroke="#21231D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#21231D]">Range:</span>
                  <button className="px-4 py-2 rounded-full border border-[#E2E8F0] bg-white text-sm text-[#21231D] flex items-center gap-2">
                    All Time
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10.1667 7.16699L8.00004 9.50033L5.83337 7.16699" stroke="#21231D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Line Chart Placeholder */}
              <div className="relative h-[405px] bg-gradient-to-b from-[#B1FA6310] to-transparent rounded-lg">
                <svg width="100%" height="355" viewBox="0 0 1142 355" fill="none" className="absolute bottom-0">
                  <path d="M1140 46.2246C1123.74 46.2246 1123.74 71.1118 1107.49 71.1118C1091.23 71.1118 1091.91 60.6681 1074.97 60.6681C1058.04 60.6681 1059.39 91.3327 1042.46 91.3327C1025.52 91.3327 1028.23 79.0224 1009.94 79.0224C991.654 79.0224 996.395 108.931 977.429 108.931C958.462 108.931 961.171 64.89 944.914 64.89C928.657 64.89 930.012 97.0212 912.4 97.0212C894.788 97.0212 897.498 88.2218 879.886 88.2218C862.274 88.2218 864.983 110.22 847.371 110.22C829.76 110.22 831.792 120.886 814.857 120.886C797.923 120.886 799.277 96.8878 782.343 96.8878C765.408 96.8878 767.44 122.131 749.829 122.131C732.217 122.131 736.281 106.887 717.314 106.887C698.348 106.887 701.735 89.9105 684.8 89.9105C667.865 89.9105 669.898 128.663 652.286 128.663C634.674 128.663 637.383 73.3339 619.771 73.3339C602.16 73.3339 604.192 106.398 587.257 106.398C570.323 106.398 573.71 126.175 554.743 126.175C535.776 126.175 540.518 114.176 522.229 114.176C503.939 114.176 508.681 138.618 489.714 138.618C470.748 138.618 475.489 129.197 457.2 129.197C438.911 129.197 442.298 114.931 424.686 114.931C407.074 114.931 409.783 166.172 392.171 166.172C374.56 166.172 378.624 153.64 359.657 153.64C340.691 153.64 343.4 173.238 327.143 173.238C310.886 173.238 312.918 159.239 294.629 159.239C276.339 159.239 279.049 199.681 262.114 199.681C245.18 199.681 248.567 187.504 229.6 187.504C210.633 187.504 215.375 178.66 197.086 178.66C178.796 178.66 182.183 205.769 164.571 205.769C146.96 205.769 151.024 211.458 132.057 211.458C113.091 211.458 118.51 196.481 99.5429 196.481C80.5762 196.481 83.2858 188.482 67.0286 188.482C50.7715 188.482 50.7715 214.48 34.5143 214.48C18.2572 214.48 19.6119 205.325 2.00004 205.325" stroke="#6A8042" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
                {/* X-axis labels */}
                <div className="absolute bottom-0 left-12 right-0 flex justify-between px-6 text-xs text-[#21231D]">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(month => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Health & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* System Health */}
          <div className="p-6 rounded-[32px] border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] space-y-6">
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-black tracking-[-0.36px]">System Health</h2>
                <button className="px-4 py-2.5 text-base font-bold text-[#404040]">View All</button>
              </div>
              <div className="h-px bg-[#EAECF0]"></div>
            </div>

            <div className="space-y-4">
              {systemHealth.map((item, index) => (
                <div key={index} className="p-6 rounded-3xl border border-[rgba(230,234,241,0.60)] bg-white flex items-start gap-2">
                  <div className="w-16 h-16 rounded-full bg-[#F7F7F7] flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M12.5 6.66699C12.5 8.0477 11.3807 9.16699 10 9.16699C8.61925 9.16699 7.5 8.0477 7.5 6.66699C7.5 5.28628 8.61925 4.16699 10 4.16699C11.3807 4.16699 12.5 5.28628 12.5 6.66699Z" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.3333 3.33301C14.7139 3.33301 15.8333 4.4523 15.8333 5.83301C15.8333 6.85225 15.2233 7.72903 14.3485 8.11826" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.4286 11.667H8.57143C6.59898 11.667 5 13.266 5 15.2384C5 16.0274 5.63959 16.667 6.42857 16.667H13.5714C14.3604 16.667 15 16.0274 15 15.2384C15 13.266 13.401 11.667 11.4286 11.667Z" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.762 10.833C16.7344 10.833 18.3334 12.432 18.3334 14.4044C18.3334 15.1934 17.6938 15.833 16.9048 15.833" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.66675 3.33301C5.28604 3.33301 4.16675 4.4523 4.16675 5.83301C4.16675 6.85225 4.77669 7.72903 5.65148 8.11826" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.09532 15.833C2.30634 15.833 1.66675 15.1934 1.66675 14.4044C1.66675 12.432 3.26573 10.833 5.23817 10.833" stroke="#404040" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1 flex items-center justify-between gap-1">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#121511] mb-1">{item.title}</h3>
                      <p className="text-base text-[#8C8C8C]">{item.status}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-2xl bg-[#F2F4F7] text-xs text-[#344054]">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="p-6 rounded-[32px] border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] space-y-6">
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-black tracking-[-0.36px]">Recent Activity</h2>
                <button className="px-4 py-2.5 text-base font-bold text-[#404040]">View All</button>
              </div>
              <div className="h-px bg-[#EAECF0]"></div>
            </div>

            <div className="p-6 rounded-3xl border border-[rgba(230,234,241,0.60)] bg-white space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="relative flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: activity.color }}>
                      {activity.icon === "heart" && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.99665 4.82181C7.0303 3.73967 5.41884 3.44858 4.20806 4.4395C2.99729 5.43041 2.82683 7.08717 3.77766 8.25912L7.99665 12.1663L12.2156 8.25912C13.1665 7.08717 13.0168 5.41999 11.7852 4.4395C10.5536 3.45901 8.963 3.73967 7.99665 4.82181Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {activity.icon === "book" && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M7.99996 4.50033L3.16663 3.16699V11.5003L7.99996 12.8337" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 4.66699V12.667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 4.50033L12.8333 3.16699V11.5003L8 12.8337" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {activity.icon === "star" && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M7.99996 3.16699L9.16663 6.83366H12.8333L9.83329 9.16699L10.8333 12.8337L7.99996 10.5003L5.16663 12.8337L6.16663 9.16699L3.16663 6.83366H6.83329L7.99996 3.16699Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    {index < activities.length - 1 && (
                      <div className="w-0.5 flex-1 bg-[#E2E8F0] mt-1"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-1 text-lg">
                      <span className="font-bold text-[#6A8042]">{activity.user}</span>
                      <span className="text-[#21231D]">{activity.action}</span>
                      <span className="font-bold text-[#6A8042]">{activity.target}</span>
                      <span className="text-[#64748B]">•</span>
                      <span className="text-[#21231D]">{activity.time}</span>
                    </div>
                    
                    {activity.note && (
                      <div className="p-4 rounded-2xl border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9]">
                        <p className="text-base text-[#21231D]">{activity.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
