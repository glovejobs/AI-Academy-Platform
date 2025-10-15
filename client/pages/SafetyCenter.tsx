import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Shield, X } from "lucide-react";

export default function SafetyCenter() {
  const navigate = useNavigate();
  const location = useLocation();
  const [privateProfile, setPrivateProfile] = useState(true);
  const [mentorMessagesOnly, setMentorMessagesOnly] = useState(true);
  const [aiModeration, setAiModeration] = useState(true);
  const [timeLimit, setTimeLimit] = useState(120);
  const [showNovaAlert, setShowNovaAlert] = useState(true);
  const [showTip, setShowTip] = useState(true);

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/dashboard" },
    { id: "progress", label: "My Child/Progress", path: "/progress" },
    { id: "schedule", label: "Schedule", path: "/schedule" },
    { id: "messages", label: "Messages", path: "/messages" },
    { id: "safety", label: "Safety Center", path: "/safety-center" },
    { id: "settings", label: "Settings", path: "/settings" },
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
          {/* Logo */}
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9bc7f4c3957329926c45ba3e1d6104debeb9620d?width=112" 
            alt="Logo" 
            className="w-14 h-14"
          />

          {/* Navigation Tabs */}
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
                  {active && item.id === "safety" ? (
                    <span className="inline-flex items-center gap-3">
                      <svg className="w-5 h-5" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0907 2.91311C14.5137 2.12851 12.5841 1.66699 10.5 1.66699C8.41592 1.66699 6.48625 2.12851 4.9093 2.91311C4.13598 3.29788 3.74932 3.49026 3.37467 4.09514C3 4.70003 3 5.28573 3 6.45711V9.36458C3 14.1007 6.7853 16.734 8.9775 17.8618C9.58892 18.1764 9.89458 18.3337 10.5 18.3337C11.1054 18.3337 11.4111 18.1764 12.0224 17.8618C14.2147 16.734 18 14.1007 18 9.36458V6.45711C18 5.28573 18 4.70004 17.6253 4.09514C17.2507 3.49025 16.864 3.29788 16.0907 2.91311Z" stroke="#163300" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 9.16699C13 10.5477 11.8807 11.667 10.5 11.667C9.11925 11.667 8 10.5477 8 9.16699C8 7.78628 9.11925 6.66699 10.5 6.66699C11.8807 6.66699 13 7.78628 13 9.16699Z" stroke="#163300" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
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

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/abdabce54cfd8c3bd7a3c5152ff3bc7da219a0e7?width=80" 
              alt="User" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="hidden sm:block">
              <div className="text-white font-bold text-base leading-6">Dave Alex</div>
              <div className="text-white/70 text-sm">Parent</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] p-8 lg:p-16">
        {/* Page Header */}
        <div className="mb-8 pb-5 border-b border-black/[0.05]">
          <h1 className="text-3xl font-bold text-[#21231D] leading-[34px] mb-1 font-heading">
            Safety Center
          </h1>
          <p className="text-base text-[#404040] leading-6 font-body">
            Manage privacy settings and content controls
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8">
          {/* Privacy Settings */}
          <div className="w-full max-w-[700px] p-4 sm:p-6 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
            <div className="flex items-center gap-2 px-6 mb-6">
              <svg className="w-6 h-6" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7088 3.99534C16.8165 3.05382 14.5009 2.5 12 2.5C9.4991 2.5 7.1835 3.05382 5.29116 3.99534C4.36318 4.45706 3.89919 4.68792 3.4496 5.41378C3 6.13965 3 6.84248 3 8.24814V11.7371C3 17.4205 7.54236 20.5804 10.173 21.9338C10.9067 22.3113 11.2735 22.5 12 22.5C12.7265 22.5 13.0933 22.3113 13.8269 21.9338C16.4576 20.5804 21 17.4205 21 11.7371V8.24814C21 6.84249 21 6.13966 20.5504 5.41378C20.1008 4.68791 19.6368 4.45706 18.7088 3.99534Z" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12C9 12 10.4079 12.2519 11 14C11 14 12.5 11 15 10" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 className="text-2xl font-bold text-[#21231D] leading-[28.8px] font-heading">Privacy Settings</h2>
            </div>
            
            <div className="p-6 rounded-3xl border border-black/[0.05] bg-white space-y-12">
              <ToggleSetting
                title="Private Profile"
                description="Only mentors and approved peers can view your child's profile and projects"
                enabled={privateProfile}
                onChange={setPrivateProfile}
              />
              
              <ToggleSetting
                title="Mentor Messages Only"
                description="Restrict messages to verified mentors and administrators only"
                enabled={mentorMessagesOnly}
                onChange={setMentorMessagesOnly}
              />
            </div>
          </div>

          {/* Content Filters */}
          <div className="w-full max-w-[700px] p-4 sm:p-6 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
            <div className="flex items-center gap-2 px-6 mb-6">
              <svg className="w-6 h-6" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H13.5C16.7875 3 18.4312 3 19.5376 3.90796C19.7401 4.07418 19.9258 4.25989 20.092 4.46243C21 5.56878 21 7.21252 21 10.5" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 9H21" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 6H5.50998M9.49002 6H9.5" stroke="#525866" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.6716 22H13V20.3284C13 19.798 13.2107 19.2893 13.5858 18.9142L19.0616 13.4393C19.6474 12.8536 20.5972 12.8536 21.183 13.4393L21.5616 13.818C22.1474 14.4038 22.1474 15.3536 21.5616 15.9393L16.0858 21.4142C15.7107 21.7893 15.202 22 14.6716 22Z" stroke="#525866" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <h2 className="text-2xl font-bold text-[#21231D] leading-[28.8px] font-heading">Content Filters</h2>
            </div>
            
            <div className="p-6 rounded-3xl border border-black/[0.05] bg-white space-y-6">
              <ToggleSetting
                title="AI Content Moderation"
                description="Automatically filter inappropriate content in community and chat"
                enabled={aiModeration}
                onChange={setAiModeration}
              />
              
              {showNovaAlert && (
                <div className="flex items-start gap-3 p-4 rounded-xl border border-[#EE7A13] bg-[#FDF2E7]">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0001 13.3337V10.0003M10.0001 6.66699H10.0084M18.3334 10.0003C18.3334 14.6027 14.6025 18.3337 10.0001 18.3337C5.39771 18.3337 1.66675 14.6027 1.66675 10.0003C1.66675 5.39795 5.39771 1.66699 10.0001 1.66699C14.6025 1.66699 18.3334 5.39795 18.3334 10.0003Z" stroke="#EE7A13" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#EE7A13] leading-5 mb-1">Nova AI Safety Monitor Active</h3>
                    <p className="text-sm text-[#EE7A13] leading-5">
                      All interactions with Nova are monitored and logged. You can review chat history anytime in your parent dashboard.
                    </p>
                  </div>
                  <button onClick={() => setShowNovaAlert(false)} className="p-2 hover:bg-[#EE7A13]/10 rounded-lg -mt-2 -mr-2">
                    <X className="w-5 h-5 text-[#EE7A13]" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Screen Time Management */}
          <div className="w-full max-w-[700px] p-4 sm:p-6 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
            <div className="flex items-center gap-2 px-6 mb-6">
              <svg className="w-6 h-6" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#525866" strokeWidth="1.5"/>
                <path d="M12 8.5V12.5L14 14.5" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 className="text-2xl font-bold text-[#21231D] leading-[28.8px] font-heading">Screen Time Management</h2>
            </div>
            
            <div className="p-6 rounded-3xl border border-black/[0.05] bg-white space-y-6">
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#21231D] leading-[30px] mb-1 font-heading">Daily Time Limit</h3>
                  <p className="text-base text-[#404040] leading-6">Set a daily limit for platform usage (30 min - 4 hours)</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex-1 relative h-1 bg-gray-200/30 rounded-full pr-[120px]">
                    <div 
                      className="absolute left-0 top-0 h-1 bg-[#EE7A13] rounded-full flex justify-end items-center"
                      style={{ width: `${(timeLimit / 240) * 100}%` }}
                    >
                      <div className="w-1 h-1 rounded-full bg-[#EE7A13] relative">
                        <div className="absolute -right-2 -top-1.5 w-4 h-4 bg-white border-2 border-[#EE7A13] rounded-full"></div>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="240"
                      value={timeLimit}
                      onChange={(e) => setTimeLimit(Number(e.target.value))}
                      className="absolute inset-0 w-full h-1 opacity-0 cursor-pointer"
                    />
                  </div>
                  <div className="px-2 py-1 rounded-full border border-black/[0.05] bg-white">
                    <span className="text-xs text-[#404040]">{timeLimit} Minutes</span>
                  </div>
                </div>
              </div>
              
              {showTip && (
                <div className="flex items-start gap-3 p-4 rounded-xl border border-[#D0D5DD] bg-[#FCFCFD]">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0001 13.3337V10.0003M10.0001 6.66699H10.0084M18.3334 10.0003C18.3334 14.6027 14.6025 18.3337 10.0001 18.3337C5.39771 18.3337 1.66675 14.6027 1.66675 10.0003C1.66675 5.39795 5.39771 1.66699 10.0001 1.66699C14.6025 1.66699 18.3334 5.39795 18.3334 10.0003Z" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#344054] leading-5 mb-1">Tip</h3>
                    <p className="text-sm text-[#475467] leading-5">
                      Tip: Recommended screen time for creative learning is 60-90 minutes per day for optimal focus and retention.
                    </p>
                  </div>
                  <button onClick={() => setShowTip(false)} className="p-2 hover:bg-gray-100 rounded-lg -mt-2 -mr-2">
                    <X className="w-5 h-5 text-[#667085]" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleSetting({ 
  title, 
  description, 
  enabled, 
  onChange 
}: { 
  title: string; 
  description: string; 
  enabled: boolean; 
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-16">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-[#21231D] leading-[30px] mb-1 font-heading">{title}</h3>
        <p className="text-base text-[#454745] leading-6">{description}</p>
      </div>
      <button
        onClick={() => onChange(!enabled)}
        className={`relative w-9 h-5 rounded-xl transition-colors flex items-center ${
          enabled ? 'bg-[#9FE870] justify-end' : 'bg-gray-300 justify-start'
        }`}
      >
        <div
          className={`w-4 h-4 rounded-full mx-0.5 ${
            enabled ? 'bg-[#163300]' : 'bg-white'
          }`}
        />
      </button>
    </div>
  );
}
