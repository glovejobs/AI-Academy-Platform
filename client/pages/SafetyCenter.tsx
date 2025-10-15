import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Shield, FileEdit, Clock, Info, X, AlertCircle } from "lucide-react";

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
    { id: "settings", label: "Settings", path: "#" },
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
                    <span className="inline-flex items-center gap-2">
                      <Shield className="w-5 h-5" />
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
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] p-6 sm:p-8">
        {/* Page Header */}
        <div className="mb-8 pb-5 border-b border-black/[0.05]">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#21231D] leading-tight mb-1 font-heading">
            Safety Center
          </h1>
          <p className="text-base text-[#404040] leading-6 font-body">
            Manage privacy settings and content controls
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8 max-w-3xl">
          {/* Privacy Settings */}
          <div className="p-4 sm:p-6 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
            <div className="flex items-center gap-2 px-6 mb-6">
              <svg className="w-6 h-6" viewBox="0 0 24 25" fill="none">
                <path d="M18.7088 3.99534C16.8165 3.05382 14.5009 2.5 12 2.5C9.4991 2.5 7.1835 3.05382 5.29116 3.99534C4.36318 4.45706 3.89919 4.68792 3.4496 5.41378C3 6.13965 3 6.84248 3 8.24814V11.7371C3 17.4205 7.54236 20.5804 10.173 21.9338C10.9067 22.3113 11.2735 22.5 12 22.5C12.7265 22.5 13.0933 22.3113 13.8269 21.9338C16.4576 20.5804 21 17.4205 21 11.7371V8.24814C21 6.84249 21 6.13966 20.5504 5.41378C20.1008 4.68791 19.6368 4.45706 18.7088 3.99534Z" stroke="#525866" strokeWidth="1.5"/>
                <path d="M9 12C9 12 10.4079 12.2519 11 14C11 14 12.5 11 15 10" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 className="text-2xl font-bold text-[#21231D] font-heading">Privacy Settings</h2>
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
          <div className="p-4 sm:p-6 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
            <div className="flex items-center gap-2 px-6 mb-6">
              <FileEdit className="w-6 h-6 text-[#525866]" />
              <h2 className="text-2xl font-bold text-[#21231D] font-heading">Content Filters</h2>
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
                  <AlertCircle className="w-5 h-5 text-[#EE7A13] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#EE7A13] mb-1">Nova AI Safety Monitor Active</h3>
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
          <div className="p-4 sm:p-6 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
            <div className="flex items-center gap-2 px-6 mb-6">
              <Clock className="w-6 h-6 text-[#525866]" />
              <h2 className="text-2xl font-bold text-[#21231D] font-heading">Screen Time Management</h2>
            </div>
            
            <div className="p-6 rounded-3xl border border-black/[0.05] bg-white space-y-6">
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#21231D] mb-1 font-heading">Daily Time Limit</h3>
                  <p className="text-base text-[#404040]">Set a daily limit for platform usage (30 min - 4 hours)</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-1 relative">
                    <div className="h-1 bg-gray-200 rounded-full">
                      <div 
                        className="h-1 bg-[#EE7A13] rounded-full relative"
                        style={{ width: `${(timeLimit / 240) * 100}%` }}
                      >
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
                  <div className="px-3 py-1 rounded-full border border-black/[0.05] bg-white">
                    <span className="text-xs text-[#404040]">{timeLimit} Minutes</span>
                  </div>
                </div>
              </div>
              
              {showTip && (
                <div className="flex items-start gap-3 p-4 rounded-xl border border-[#D0D5DD] bg-[#FCFCFD]">
                  <Info className="w-5 h-5 text-[#475467] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#344054] mb-1">Tip</h3>
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
        <h3 className="text-xl font-bold text-[#21231D] mb-1 font-heading">{title}</h3>
        <p className="text-base text-[#454745] leading-6">{description}</p>
      </div>
      <button
        onClick={() => onChange(!enabled)}
        className={`relative w-9 h-5 rounded-full transition-colors ${
          enabled ? 'bg-[#9FE870]' : 'bg-gray-300'
        }`}
      >
        <div
          className={`absolute top-0.5 w-4 h-4 rounded-full transition-all ${
            enabled ? 'right-0.5 bg-[#163300]' : 'left-0.5 bg-white'
          }`}
        />
      </button>
    </div>
  );
}
