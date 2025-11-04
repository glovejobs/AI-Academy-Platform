import { ChevronLeft, ChevronRight, Home, Users, BookOpen, Heart, Wand2, BarChart3, Settings, Target, AlertCircle } from "lucide-react";

export default function AdminAISystemLogs() {
  const logs = [
    { id: 1, timestamp: "2025-01-08 14:23:15", user: "Emma Johnson", action: "Query Response", responseTime: "1.2s", status: "Normal" },
    { id: 2, timestamp: "2025-01-09 10:30:45", user: "Liam Chen", action: "Code Assistance", responseTime: "0.8s", status: "Normal" },
    { id: 3, timestamp: "2025-01-10 09:15:00", user: "Sophia Rodriguez", action: "Query Response", responseTime: "3.4s", status: "Normal" },
    { id: 4, timestamp: "2025-01-11 16:45:30", user: "Noah Williams", action: "Code Assistance", responseTime: "1.5s", status: "Flagged" },
    { id: 5, timestamp: "2025-01-12 11:00:00", user: "Olivia Davis", action: "Query Response", responseTime: "1.1s", status: "Normal" },
    { id: 6, timestamp: "2025-01-13 15:20:10", user: "Emma Johnson", action: "Code Assistance", responseTime: "2.1s", status: "Normal" }
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
          <div className="flex h-12 px-1 items-center gap-1 rounded-full">
            <Home className="w-[18px] h-[18px] text-[#CFD6C9]" />
            <span className="text-[#CFD6C9] font-satoshi text-sm font-medium leading-6 tracking-[-0.14px]">Dashboard</span>
          </div>
          <div className="flex h-12 px-1 items-center gap-1 rounded-full">
            <Users className="w-[18px] h-[18px] text-[#CFD6C9]" />
            <span className="text-[#CFD6C9] font-satoshi text-sm font-medium leading-6 tracking-[-0.14px]">Students</span>
          </div>
          <div className="flex h-12 px-1 items-center gap-1 rounded-full">
            <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6925 13.3056C11.2209 13.6215 9.98447 14.2666 10.7375 15.0737C11.1054 15.468 11.5152 15.75 12.0303 15.75H13.5H14.9697C15.4848 15.75 15.8946 15.468 16.2625 15.0737C17.0156 14.2666 15.7791 13.6215 15.3075 13.3056C14.2016 12.5648 12.7984 12.5648 11.6925 13.3056Z" stroke="#CFD6C9" strokeWidth="1.125"/>
              <path d="M15 9.375C15 10.2034 14.3284 10.875 13.5 10.875C12.6716 10.875 12 10.2034 12 9.375C12 8.54655 12.6716 7.875 13.5 7.875C14.3284 7.875 15 8.54655 15 9.375Z" stroke="#CFD6C9" strokeWidth="1.125"/>
              <path d="M7.5 4.5H11.25M7.5 2.25H13.5" stroke="#CFD6C9" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.25 7.125V10.5C5.25 11.2071 5.25 11.5607 5.03033 11.7804C4.81066 12 4.45711 12 3.75 12H3C2.29289 12 1.93934 12 1.71967 11.7804C1.5 11.5607 1.5 11.2071 1.5 10.5V8.62503C1.5 7.91793 1.5 7.56438 1.71967 7.34467C1.93934 7.125 2.29289 7.125 3 7.125H5.25ZM5.25 7.125H9" stroke="#CFD6C9" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.875 3.75C4.875 4.57843 4.20343 5.25 3.375 5.25C2.54657 5.25 1.875 4.57843 1.875 3.75C1.875 2.92157 2.54657 2.25 3.375 2.25C4.20343 2.25 4.875 2.92157 4.875 3.75Z" stroke="#CFD6C9" strokeWidth="1.125"/>
            </svg>
            <span className="text-[#CFD6C9] font-satoshi text-sm font-medium leading-6 tracking-[-0.14px]">Mentors</span>
          </div>
          <div className="flex h-12 px-1 items-center gap-1 rounded-full">
            <Heart className="w-[18px] h-[18px] text-[#CFD6C9]" />
            <span className="text-[#CFD6C9] font-satoshi text-sm font-medium leading-6 tracking-[-0.14px]">Parents</span>
          </div>
          <div className="flex h-12 px-1 items-center gap-1 rounded-full">
            <BookOpen className="w-[18px] h-[18px] text-[#CFD6C9]" />
            <span className="text-[#CFD6C9] font-satoshi text-sm font-medium leading-6 tracking-[-0.14px]">Programs</span>
          </div>
          <div className="flex h-12 px-4 items-center gap-1 rounded-full bg-[rgba(159,232,112,0.2)]">
            <Wand2 className="w-[18px] h-[18px] text-[#B1FA63]" />
            <span className="text-[#B1FA63] font-satoshi text-sm font-bold leading-6 tracking-[-0.14px]">Ai System Logs</span>
          </div>
          <div className="flex h-12 px-1 items-center gap-1 rounded-full">
            <BarChart3 className="w-[18px] h-[18px] text-[#CFD6C9]" />
            <span className="text-[#CFD6C9] font-satoshi text-sm font-bold leading-6 tracking-[-0.14px]">Reports</span>
          </div>
          <div className="flex h-12 px-1 items-center gap-1 rounded-full">
            <Settings className="w-[18px] h-[18px] text-[#CFD6C9]" />
            <span className="text-[#CFD6C9] font-satoshi text-sm font-bold leading-6 tracking-[-0.14px]">Settings</span>
          </div>
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
          <div className="flex flex-col gap-1">
            <h1 className="text-black font-[Random_Grotesque_Standard_Bold] text-[30px] font-bold leading-[34px] tracking-[-0.75px]">
              AI System Logs
            </h1>
            <p className="text-[#404040] font-satoshi text-base font-normal leading-6 tracking-[-0.16px]">
              Monitor Nova's usage and flag anomalies
            </p>
          </div>
          <div className="h-px bg-black/10" />
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col gap-6 p-4 rounded-[32px] border border-black/10 bg-[#F9FAF9]">
          <div className="flex items-start gap-4">
            {/* Total Queries Card */}
            <div className="flex-1 flex flex-col gap-6 p-4 rounded-[20px] border border-black/10 bg-white">
              <div className="w-16 h-16 rounded-full bg-[#F7F7F7] flex items-center justify-center">
                <Target className="w-5 h-5 text-[#404040]" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#404040] font-satoshi text-base font-normal leading-6 tracking-[-0.16px]">
                  Total Queries (24h)
                </span>
                <span className="text-black font-[Random_Grotesque_Standard_Bold] text-[64px] font-bold leading-[85%]">
                  0
                </span>
              </div>
            </div>

            {/* Avg Response Time Card */}
            <div className="flex-1 flex flex-col gap-6 p-4 rounded-[20px] border border-black/10 bg-white">
              <div className="w-16 h-16 rounded-full bg-[#F7F7F7] flex items-center justify-center">
                <Users className="w-5 h-5 text-[#404040]" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#404040] font-satoshi text-base font-normal leading-6 tracking-[-0.16px]">
                  Avg Response Time
                </span>
                <span className="text-black font-[Random_Grotesque_Standard_Bold] text-[64px] font-bold leading-[85%]">
                  0s
                </span>
              </div>
            </div>

            {/* Flagged Anomalies Card */}
            <div className="flex-1 flex flex-col gap-6 p-4 rounded-[20px] border border-black/10 bg-white">
              <div className="w-16 h-16 rounded-full bg-[#F7F7F7] flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-[#404040]" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#404040] font-satoshi text-base font-normal leading-6 tracking-[-0.16px]">
                  Flagged Anomalies
                </span>
                <span className="text-black font-[Random_Grotesque_Standard_Bold] text-[64px] font-bold leading-[85%]">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex flex-col gap-4 p-4 rounded-[32px] border border-[rgba(230,234,241,0.6)] bg-[#F9FAF9]">
          <div className="flex flex-col pb-4 rounded-[20px] border border-[#EAECF0] bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#EAECF0]">
                    <th className="px-6 py-3 text-left">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Timestamp</span>
                    </th>
                    <th className="px-6 py-3 text-left">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">User</span>
                    </th>
                    <th className="px-6 py-3 text-left">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Action</span>
                    </th>
                    <th className="px-6 py-3 text-left">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Response Time</span>
                    </th>
                    <th className="px-6 py-3 text-left">
                      <span className="text-[#21231D] font-satoshi text-xs font-bold leading-[18px]">Status</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log, index) => (
                    <tr key={log.id} className={index % 2 === 0 ? "bg-[#F9FAF9]" : "bg-white"}>
                      <td className="px-6 py-4">
                        <span className="text-[#21231D] font-satoshi text-sm font-medium leading-5">{log.timestamp}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[#21231D] font-satoshi text-sm font-medium leading-5">{log.user}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[#21231D] font-satoshi text-sm font-medium leading-5">{log.action}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2 py-0.5 items-center rounded-2xl bg-[#F2F4F7] text-[#21231D] font-satoshi text-xs font-medium leading-[18px]">
                          {log.responseTime}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {log.status === "Normal" ? (
                          <span className="inline-flex px-2 py-0.5 items-center rounded-2xl bg-[rgba(159,232,112,0.2)] text-[#008915] font-satoshi text-xs font-medium leading-[18px]">
                            Normal
                          </span>
                        ) : (
                          <span className="inline-flex px-2 py-0.5 items-center rounded-2xl bg-[#FFFAEB] text-[#EE7A13] font-satoshi text-xs font-medium leading-[18px]">
                            Flagged
                          </span>
                        )}
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
    </div>
  );
}
