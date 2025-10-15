import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Plus, Mail, Shield, Clock, Smartphone, Bell } from "lucide-react";

type TabId = "profile" | "child" | "billing" | "rewards" | "notifications" | "security";

export default function Settings() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<TabId>("profile");

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/dashboard" },
    { id: "progress", label: "My Child/Progress", path: "/progress" },
    { id: "schedule", label: "Schedule", path: "/schedule" },
    { id: "messages", label: "Messages", path: "/messages" },
    { id: "safety", label: "Safety Center", path: "/safety-center" },
    { id: "settings", label: "Settings", path: "/settings" },
  ];

  const tabs = [
    { id: "profile" as TabId, label: "Profile Information" },
    { id: "child" as TabId, label: "My Child Profile" },
    { id: "billing" as TabId, label: "Billing" },
    { id: "rewards" as TabId, label: "Reward System" },
    { id: "notifications" as TabId, label: "Notifications" },
    { id: "security" as TabId, label: "Security" },
  ];

  const isActive = (itemPath: string | undefined) => {
    if (!itemPath) return false;
    if (itemPath === "#") return false;
    return location.pathname === itemPath;
  };

  return (
    <div className="min-h-screen bg-[#1E3006] p-3 sm:p-6">
      {/* Header Navigation */}
      <div className="max-w-[1440px] mx-auto mb-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 px-8 lg:px-16">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9bc7f4c3957329926c45ba3e1d6104debeb9620d?width=112" 
            alt="Logo" 
            className="w-14 h-14"
          />

          <div className="flex flex-wrap items-center gap-2">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <button
                  key={item.id}
                  onClick={() => item.path !== "#" && navigate(item.path)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-all ${
                    active
                      ? "bg-[#B1FA63] text-[#163300] font-bold"
                      : "text-[#FAFAFA] opacity-60 hover:opacity-100"
                  }`}
                >
                  {active && item.id === "settings" ? (
                    <span className="inline-flex items-center gap-3">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7647 5.95083L17.3534 5.237C17.0423 4.69714 16.8868 4.42722 16.6222 4.31958C16.3575 4.21194 16.0582 4.29688 15.4596 4.46674L14.4427 4.75316C14.0606 4.84129 13.6596 4.79129 13.3107 4.612L13.0299 4.45003C12.7307 4.25837 12.5005 3.97578 12.3731 3.64363L12.0948 2.81248C11.9118 2.26246 11.8203 1.98745 11.6025 1.83015C11.3847 1.67285 11.0954 1.67285 10.5167 1.67285H9.58775C9.00916 1.67285 8.71983 1.67285 8.50199 1.83015C8.2842 1.98745 8.19271 2.26246 8.00974 2.81248L7.73144 3.64363C7.60404 3.97578 7.37387 4.25837 7.07464 4.45003L6.7939 4.612C6.44494 4.79129 6.04399 4.84129 5.66181 4.75316L4.64495 4.46674C4.04634 4.29688 3.74704 4.21194 3.48239 4.31958C3.21774 4.42722 3.0622 4.69714 2.75112 5.237L2.3398 5.95083C2.04821 6.45688 1.90241 6.7099 1.93071 6.97925C1.959 7.2486 2.15419 7.46566 2.54455 7.89978L3.40375 8.86034C3.61374 9.12618 3.76284 9.58951 3.76284 10.0061C3.76284 10.4228 3.6138 10.886 3.40377 11.1519L2.54455 12.1125C2.15419 12.5467 1.95901 12.7637 1.93071 13.0331C1.90241 13.3024 2.04821 13.5554 2.3398 14.0614L2.75111 14.7753C3.06219 15.3151 3.21774 15.5851 3.48239 15.6927C3.74704 15.8003 4.04634 15.7154 4.64497 15.5455L5.66178 15.2591C6.04402 15.1709 6.44505 15.221 6.79405 15.4003L7.07474 15.5623C7.37392 15.754 7.60403 16.0365 7.73141 16.3687L8.00974 17.1999C8.19271 17.7499 8.2842 18.0249 8.50199 18.1823C8.71983 18.3395 9.00916 18.3395 9.58775 18.3395H10.5167C11.0954 18.3395 11.3847 18.3395 11.6025 18.1823C11.8203 18.0249 11.9118 17.7499 12.0948 17.1999L12.3732 16.3687C12.5005 16.0365 12.7306 15.754 13.0298 15.5623L13.3105 15.4003C13.6595 15.221 14.0605 15.1709 14.4427 15.2591L15.4596 15.5455C16.0582 15.7154 16.3575 15.8003 16.6222 15.6927C16.8868 15.5851 17.0423 15.3151 17.3534 14.7753L17.7647 14.0614C18.0563 13.5554 18.2021 13.3024 18.1738 13.0331C18.1455 12.7637 17.9503 12.5467 17.56 12.1125L16.7007 11.1519C16.4907 10.886 16.3417 10.4228 16.3417 10.0061C16.3417 9.58951 16.4908 9.12618 16.7007 8.86034L17.56 7.89978C17.9503 7.46566 18.1455 7.2486 18.1738 6.97925C18.2021 6.7099 18.0563 6.45688 17.7647 5.95083Z" stroke="#163300" strokeWidth="1.25" strokeLinecap="round"/>
                        <path d="M12.9329 9.99967C12.9329 11.6105 11.6271 12.9163 10.0163 12.9163C8.40542 12.9163 7.09961 11.6105 7.09961 9.99967C7.09961 8.38884 8.40542 7.08301 10.0163 7.08301C11.6271 7.08301 12.9329 8.38884 12.9329 9.99967Z" stroke="#163300" strokeWidth="1.25"/>
                      </svg>
                      {item.label}
                    </span>
                  ) : (
                    item.label
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/abdabce54cfd8c3bd7a3c5152ff3bc7da219a0e7?width=80" 
              alt="User" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="hidden sm:block">
              <div className="text-white font-bold text-base">Dave Alex</div>
              <div className="text-white/70 text-sm">Parent</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] p-8 lg:p-16">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#21231D] leading-[34px] mb-1 font-heading">Settings</h1>
          <p className="text-base text-[#404040] leading-6 mb-5">Manage your account and preferences</p>

          {/* Tabs */}
          <div className="border-b border-[#EAECF0]">
            <div className="flex gap-4 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-1 py-3 text-sm font-bold whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "text-[#6A8042] border-b-2 border-[#6A8042]"
                      : "text-[#8C8C8C] hover:text-[#404040]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === "profile" && <ProfileInformationTab />}
          {activeTab === "child" && <ChildProfileTab />}
          {activeTab === "billing" && <BillingTab />}
          {activeTab === "rewards" && <RewardsTab />}
          {activeTab === "notifications" && <NotificationsTab />}
          {activeTab === "security" && <SecurityTab />}
        </div>
      </div>
    </div>
  );
}

// Profile Information Tab
function ProfileInformationTab() {
  return (
    <div className="max-w-[700px] p-6 rounded-[32px] border border-black/[0.08] bg-[#FAFAFA]">
      <div className="flex items-center gap-2 px-6 mb-6">
        <Mail className="w-6 h-6 text-[#525866]" />
        <h2 className="text-2xl font-bold text-[#21231D] font-heading">Profile Information</h2>
      </div>

      <div className="p-6 rounded-3xl border border-black/[0.08] bg-white space-y-6">
        {/* Avatar Section */}
        <div className="p-6 rounded-3xl border border-black/[0.08] bg-white">
          <div className="flex items-start gap-6 mb-6">
            <div className="relative w-16 h-16">
              <div className="w-16 h-16 rounded-full bg-[#C5C5C5] flex items-center justify-center">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/8066de37e0020c062384b03ab7948f430fa536a2?width=78" className="w-10 h-9" alt="" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-[17px] h-[17px] rounded-full bg-[#00AB3C] border-[0.9px] border-white flex items-center justify-center">
                <Plus className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs text-[#8C8C8C]">
              <div className="flex-1 h-px bg-black/10"></div>
              <span>OR SELECT AN AVATAR</span>
              <div className="flex-1 h-px bg-black/10"></div>
            </div>

            <div className="flex flex-wrap gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-16 h-16 rounded-[14px] border ${
                    i === 2 ? "border-[#ECECEC] shadow-sm" : "border-[#E2E2E2]"
                  } bg-[#FCFCFC] cursor-pointer hover:border-[#163300] transition-colors`}
                />
              ))}
            </div>

            <p className="text-sm text-[#8C8C8C] font-semibold">
              This photo will appear on your profile and project submissions
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <InputField label="Full Name" value="Dave Alex" />
        <InputField label="Phone Number" value="(555) 555-5555" />
        <InputField label="Email" value="davealex@bootcamp.com" placeholder />
        <InputField label="Role" value="Parent" placeholder />

        <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#EE7A13] text-white font-bold hover:bg-[#d66d11] transition-colors">
          <Plus className="w-5 h-5 text-[#1E1E1E]" />
          Save Settings
        </button>
      </div>
    </div>
  );
}

// Child Profile Tab (similar structure)
function ChildProfileTab() {
  return (
    <div className="max-w-[700px] p-6 rounded-[32px] border border-black/[0.08] bg-[#FAFAFA]">
      <div className="flex items-center gap-2 px-6 mb-6">
        <Mail className="w-6 h-6 text-[#525866]" />
        <h2 className="text-2xl font-bold text-[#21231D] font-heading">Profile Information</h2>
      </div>
      <div className="p-6 rounded-3xl border border-black/[0.08] bg-white">
        <p className="text-[#404040]">Child profile settings (same structure as Profile Information)</p>
      </div>
    </div>
  );
}

// Billing Tab
function BillingTab() {
  return (
    <div className="max-w-[700px] p-6 rounded-[32px] border border-[#E6EAF1]/60 bg-[#FAFAFA]">
      <h2 className="text-2xl font-semibold text-[#21231D] mb-6 px-6">Subscription & Billing</h2>
      
      <div className="p-6 rounded-3xl border border-[#6A8042] bg-white space-y-4">
        <div className="p-8 rounded-[32px] border border-black/[0.08] bg-white">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-medium text-[#454745]">Basic plan</span>
                <span className="px-2.5 py-0.5 rounded-2xl bg-[#F7F7F7] text-sm text-[#163300]">Monthly</span>
              </div>
              <p className="text-sm text-[#454745]">2-Month Bootcamp</p>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-[#21231D] leading-none">$299</div>
              <div className="text-base text-[#454745] mt-1">per month</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[#101828]">Next Billing Date</span>
              <span className="text-lg font-bold text-[#21231D]">Dec 9, 2025</span>
            </div>
            <div className="h-2 bg-[#EAECF0] rounded-full overflow-hidden">
              <div className="h-full w-[75%] bg-[#163300] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#EAECF0] pt-4">
          <div className="flex justify-end px-6">
            <button className="text-sm font-semibold text-[#163300] underline hover:text-[#1E3006] flex items-center gap-1">
              Upgrade plan
              <svg className="w-5 h-5" viewBox="0 0 20 21" fill="none">
                <path d="M5.8335 14.6663L14.1668 6.33301M14.1668 6.33301H5.8335M14.1668 6.33301V14.6663" stroke="#163300" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="p-8 rounded-[32px] border border-black/[0.08] bg-white">
          <h3 className="text-lg font-semibold text-[#21231D] mb-1">Payment method</h3>
          <p className="text-sm text-[#454745] mb-5">Change how you pay for your plan.</p>
          
          <div className="flex items-center gap-4 p-4 rounded-lg border border-[#EAECF0]">
            <div className="w-[58px] h-10 rounded border border-[#F2F4F7] flex items-center justify-center bg-white">
              <svg className="w-10 h-3" viewBox="0 0 40 14" fill="#172B85">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.91708 13.4304H6.48418L3.90993 3.32063C3.78774 2.85558 3.52831 2.44444 3.14669 2.25067C2.19431 1.76372 1.14486 1.37618 0 1.18072V0.791494H5.53013C6.29337 0.791494 6.8658 1.37618 6.96121 2.05522L8.29688 9.34775L11.7281 0.791494H15.0656L9.91708 13.4304ZM16.9737 13.4304H13.7316L16.4013 0.791494H19.6434L16.9737 13.4304ZM23.8378 4.29286C23.9332 3.61213 24.5057 3.2229 25.1735 3.2229C26.223 3.12518 27.3661 3.32063 28.3202 3.8059L28.8926 1.08468C27.9386 0.695456 26.8891 0.5 25.9367 0.5C22.7901 0.5 20.5003 2.25068 20.5003 4.6804C20.5003 6.52881 22.1222 7.49934 23.2671 8.08403C24.5057 8.66703 24.9827 9.05625 24.8873 9.63925C24.8873 10.5137 23.9332 10.903 22.9809 10.903C21.836 10.903 20.6911 10.6115 19.6434 10.1245L19.0709 12.8474C20.2158 13.3327 21.4544 13.5281 22.5992 13.5281C26.1276 13.6242 28.3202 11.8752 28.3202 9.25002C28.3202 5.94412 23.8378 5.75035 23.8378 4.29286ZM39.6667 13.4304L37.0924 0.791494H34.3273C33.7549 0.791494 33.1825 1.18072 32.9917 1.76372L28.2248 13.4304H31.5623L32.2284 11.5837H36.3292L36.7108 13.4304H39.6667ZM34.8044 4.19514L35.7567 8.95854H33.0871L34.8044 4.19514Z"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-[#454745]">Visa ending in 1234</p>
              <p className="text-sm text-[#454745]">Expiry 06/2024</p>
            </div>
            <button className="px-4 py-2.5 rounded-lg border border-[#D0D5DD] bg-white shadow-sm text-sm font-semibold text-[#344054] hover:bg-gray-50">
              Edit
            </button>
          </div>

          <div className="flex items-center gap-2 mt-3 text-sm text-[#454745]">
            <Mail className="w-4 h-4 text-[#98A2B3]" />
            <span>billing@untitledui.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Rewards Tab
function RewardsTab() {
  const [rewardType, setRewardType] = useState<"badges" | "monetary">("monetary");

  return (
    <div className="max-w-[700px] p-6 rounded-[32px] border border-[#E6EAF1]/60 bg-[#F7F7F7]">
      <h2 className="text-2xl font-semibold text-[#21231D] mb-6 px-6">Rewards System</h2>
      
      <div className="p-6 rounded-3xl border border-[#6A8042] bg-white">
        <div className="p-8 rounded-[32px] bg-[#F7F7F7] space-y-8">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 20 21" fill="none">
              <path d="M10.0001 13.3337V10.0003M10.0001 6.66699H10.0084M18.3334 10.5003C18.3334 15.1027 14.6025 18.8337 10.0001 18.8337C5.39771 18.8337 1.6665 15.1027 1.6665 10.5003C1.6665 5.89795 5.39771 2.16699 10.0001 2.16699C14.6025 2.16699 18.3334 5.89795 18.3334 10.5003Z" stroke="#163300" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="text-lg font-bold text-[#21231D]">Current Reward Type</h3>
          </div>

          <div
            onClick={() => setRewardType("badges")}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              rewardType === "badges" ? "border-2 border-[#EDEFEB] bg-[#EDEFEB]" : "border-[#EAECF0] bg-white"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-2xl bg-[#9FE870]/30 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M1.3335 9.66638L7.76165 12.8805C7.8491 12.9242 7.89283 12.9461 7.9387 12.9547C7.97932 12.9623 8.02101 12.9623 8.06163 12.9547C8.1075 12.9461 8.15122 12.9242 8.23868 12.8805L14.6668 9.66638M1.3335 6.33305L7.76165 3.11897C7.8491 3.07525 7.89283 3.05338 7.9387 3.04478C7.97932 3.03716 8.02101 3.03716 8.06163 3.04478C8.1075 3.05338 8.15122 3.07525 8.23868 3.11897L14.6668 6.33305L8.23868 9.54713C8.15122 9.59085 8.1075 9.61272 8.06163 9.62132C8.02101 9.62895 7.97932 9.62895 7.9387 9.62132C7.89283 9.61272 7.8491 9.59085 7.76165 9.54713L1.3335 6.33305Z" stroke="#163300" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-[#21231D]">Badges Only</h4>
                <p className="text-sm text-[#404040]">Non-monetary recognition within platform</p>
              </div>
              <div className={`w-4 h-4 rounded-lg border ${rewardType === "badges" ? "border-[#163300] bg-[#163300]" : "border-[#D0D5DD] bg-white"}`}>
                {rewardType === "badges" && (
                  <svg className="w-full h-full" viewBox="0 0 10 10" fill="none">
                    <path d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
          </div>

          <div
            onClick={() => setRewardType("monetary")}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              rewardType === "monetary" ? "border-2 border-[#EDEFEB] bg-[#EDEFEB]" : "border-[#EAECF0] bg-white"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-2xl bg-[#9FE870]/30 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M1.3335 9.66638L7.76165 12.8805C7.8491 12.9242 7.89283 12.9461 7.9387 12.9547C7.97932 12.9623 8.02101 12.9623 8.06163 12.9547C8.1075 12.9461 8.15122 12.9242 8.23868 12.8805L14.6668 9.66638M1.3335 6.33305L7.76165 3.11897C7.8491 3.07525 7.89283 3.05338 7.9387 3.04478C7.97932 3.03716 8.02101 3.03716 8.06163 3.04478C8.1075 3.05338 8.15122 3.07525 8.23868 3.11897L14.6668 6.33305L8.23868 9.54713C8.15122 9.59085 8.1075 9.61272 8.06163 9.62132C8.02101 9.62895 7.97932 9.62895 7.9387 9.62132C7.89283 9.61272 7.8491 9.59085 7.76165 9.54713L1.3335 6.33305Z" stroke="#163300" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h4 className={`text-sm font-bold ${rewardType === "monetary" ? "text-[#163300]" : "text-[#21231D]"}`}>Monetary Rewards</h4>
                <p className={`text-sm ${rewardType === "monetary" ? "text-[#163300]" : "text-[#404040]"}`}>Via Greenlight</p>
              </div>
              <div className={`w-4 h-4 rounded-lg border ${rewardType === "monetary" ? "border-[#163300] bg-[#163300]" : "border-[#D0D5DD] bg-white"}`}>
                {rewardType === "monetary" && (
                  <svg className="w-full h-full p-0.5" viewBox="0 0 10 10" fill="none">
                    <path d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <InputField label="Greenlight Key" value="1234-ABCD-5678-EFGH" placeholder />
        </div>
      </div>
    </div>
  );
}

// Notifications Tab
function NotificationsTab() {
  const [toggles, setToggles] = useState({
    classReminders: true,
    assignments: true,
    feedback: true,
    studyReminders: true,
    newMessages: true,
    projectDeadlines: true,
    activityNotifications: true,
  });

  const toggle = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8">
      {/* Email Notifications */}
      <div className="max-w-[700px] p-6 rounded-[32px] border border-black/[0.08] bg-[#FAFAFA]">
        <div className="flex items-center gap-2 px-6 mb-6">
          <Mail className="w-6 h-6 text-[#525866]" />
          <h2 className="text-2xl font-bold text-[#21231D] font-heading">Email Notifications</h2>
        </div>

        <div className="p-6 rounded-3xl border border-black/[0.08] bg-white space-y-12">
          <ToggleItem
            title="Class Reminders"
            description="Get notified 1 hour before classes"
            enabled={toggles.classReminders}
            onChange={() => toggle("classReminders")}
          />
          <ToggleItem
            title="Assignment Deadlines"
            description="Reminders for upcoming due dates"
            enabled={toggles.assignments}
            onChange={() => toggle("assignments")}
          />
          <ToggleItem
            title="Feedback & Grades"
            description="When you receive new feedback"
            enabled={toggles.feedback}
            onChange={() => toggle("feedback")}
          />
        </div>
      </div>

      {/* Push Notifications */}
      <div className="max-w-[700px] p-6 rounded-[32px] border border-black/[0.08] bg-[#FAFAFA]">
        <div className="flex items-center gap-2 px-6 mb-6">
          <Smartphone className="w-6 h-6 text-[#525866]" />
          <h2 className="text-2xl font-bold text-[#21231D] font-heading">Push Notifications</h2>
        </div>

        <div className="p-6 rounded-3xl border border-black/[0.08] bg-white space-y-12">
          <ToggleItem
            title="Study Reminders"
            description="Daily motivation and study tips"
            enabled={toggles.studyReminders}
            onChange={() => toggle("studyReminders")}
          />
          <ToggleItem
            title="New Messages"
            description="From PM, teammates, and AI assistant"
            enabled={toggles.newMessages}
            onChange={() => toggle("newMessages")}
          />
          <ToggleItem
            title="Project Deadlines"
            description="24h and 1h before deadlines"
            enabled={toggles.projectDeadlines}
            onChange={() => toggle("projectDeadlines")}
          />
        </div>
      </div>

      {/* Parent Notifications */}
      <div className="max-w-[700px] p-6 rounded-[32px] border border-black/[0.08] bg-[#FAFAFA]">
        <div className="flex items-center gap-2 px-6 mb-6">
          <Bell className="w-6 h-6 text-[#525866]" />
          <h2 className="text-2xl font-bold text-[#21231D] font-heading">Parent Notifications</h2>
        </div>

        <div className="p-6 rounded-3xl border border-black/[0.08] bg-white space-y-6">
          <ToggleItem
            title="Activity Notifications"
            description="Get updates on badges earned, projects completed, and milestones"
            enabled={toggles.activityNotifications}
            onChange={() => toggle("activityNotifications")}
          />

          <InputField label="Notification Email" value="Parent@example.com" placeholder />

          <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#EE7A13] text-white font-bold hover:bg-[#d66d11]">
            <Plus className="w-5 h-5 text-[#1E1E1E]" />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

// Security Tab
function SecurityTab() {
  return (
    <div className="max-w-[700px] p-6 rounded-[32px] border border-black/[0.08] bg-[#FAFAFA]">
      <div className="flex items-center gap-2 px-6 mb-6">
        <Shield className="w-6 h-6 text-[#525866]" />
        <h2 className="text-2xl font-bold text-[#21231D] font-heading">Change your password</h2>
      </div>

      <div className="p-6 rounded-3xl border border-black/[0.08] bg-white space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <InputField label="Current Password" value="Enter your current password" placeholder password />
            <button className="text-xs text-[#6A8042] font-medium hover:underline">Forgot Password?</button>
          </div>
          <InputField label="New Password" value="Enter your new password" placeholder password />
          <InputField label="Confirm New Password" value="Password must match" placeholder password />
        </div>

        <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#EE7A13] text-white font-bold hover:bg-[#d66d11]">
          <Plus className="w-5 h-5 text-[#1E1E1E]" />
          Update Password
        </button>
      </div>
    </div>
  );
}

// Reusable Components
function InputField({ label, value, placeholder = false, password = false }: { label: string; value: string; placeholder?: boolean; password?: boolean }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-semibold text-[#21231D]">{label}</label>
      <div className="px-4 py-4 rounded-full border border-black/[0.08] bg-[#FAFAFA] flex items-center gap-2">
        {password && (
          <svg className="w-4 h-4 text-[#21231D]" viewBox="0 0 16 17" fill="currentColor">
            <path d="M14.7426 6.986L13.7139 6.5C13.2155 7.61418 12.4055 8.5604 11.3815 9.22459C10.3574 9.88879 9.16314 10.2426 7.94258 10.2433C6.72201 10.2426 5.52772 9.88879 4.5037 9.22459C3.47967 8.5604 2.66963 7.61418 2.17124 6.5L1.14258 6.986C1.532 7.82375 2.0639 8.58753 2.71458 9.24333L1.62791 10.5573L2.51458 11.3L3.59991 9.98667C3.99991 10.2727 4.42858 10.5293 4.85724 10.7293L4.28591 12.3293L5.37125 12.7293L5.94258 11.1293C6.40663 11.2726 6.88636 11.359 7.37125 11.3867V13.1H8.51391V11.3867C8.9988 11.359 9.47853 11.2726 9.94258 11.1293L10.5139 12.7293L11.6006 12.3293L11.0286 10.7293C11.4859 10.5293 11.8859 10.2727 12.2859 9.98667L13.3712 11.3007L14.2572 10.558L13.1712 9.244C13.8286 8.58667 14.3712 7.84333 14.7426 6.986Z"/>
          </svg>
        )}
        <input
          type={password ? "password" : "text"}
          value={value}
          readOnly
          className={`flex-1 bg-transparent outline-none text-base ${placeholder ? "text-[#B3B3B3]" : "text-[#21231D]"}`}
        />
      </div>
    </div>
  );
}

function ToggleItem({ title, description, enabled, onChange }: { title: string; description: string; enabled: boolean; onChange: () => void }) {
  return (
    <div className="flex items-center justify-between gap-16">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-[#21231D] leading-[30px] font-heading">{title}</h3>
        <p className="text-base text-[#454745] leading-6">{description}</p>
      </div>
      <button
        onClick={onChange}
        className={`relative w-9 h-5 rounded-xl transition-colors flex items-center ${
          enabled ? "bg-[#9FE870] justify-end" : "bg-gray-300 justify-start"
        }`}
      >
        <div className={`w-4 h-4 rounded-full mx-0.5 ${enabled ? "bg-[#163300]" : "bg-white"}`} />
      </button>
    </div>
  );
}
