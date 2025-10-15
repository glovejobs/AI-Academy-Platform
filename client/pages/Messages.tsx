import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Send, Smile, ImagePlus, Link2, X, MailPlus } from "lucide-react";

export default function Messages() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(true);
  const [message, setMessage] = useState("");

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
                  {active && item.id === "messages" ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66675 5L7.4276 8.26414C9.55141 9.4675 10.4487 9.4675 12.5726 8.26414L18.3334 5" stroke="#163300" strokeWidth="1.25" strokeLinejoin="round"/>
                        <path d="M1.67989 11.2295C1.73436 13.7842 1.76161 15.0614 2.70421 16.0077C3.64681 16.9538 4.95869 16.9868 7.58244 17.0527C9.1995 17.0933 10.8007 17.0933 12.4177 17.0527C15.0415 16.9868 16.3533 16.9538 17.296 16.0077C18.2386 15.0614 18.2658 13.7842 18.3202 11.2295C18.3378 10.4081 18.3378 9.59159 18.3202 8.77017C18.2658 6.21555 18.2386 4.93825 17.296 3.99205C16.3533 3.04586 15.0415 3.0129 12.4177 2.94698C10.8007 2.90635 9.1995 2.90635 7.58243 2.94697C4.95869 3.01289 3.64681 3.04585 2.70421 3.99205C1.7616 4.93824 1.73436 6.21555 1.67988 8.77017C1.66236 9.59159 1.66237 10.4081 1.67989 11.2295Z" stroke="#163300" strokeWidth="1.25" strokeLinejoin="round"/>
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
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] p-6 sm:p-8">
        {/* Page Header */}
        <div className="mb-8 pb-5 border-b border-black/[0.05]">
          <h1 className="text-2xl sm:text-3xl font-bold text-black leading-tight mb-1 font-heading">
            Messages
          </h1>
          <p className="text-base text-[#404040] leading-6 font-body">
            Communicate with your child's mentors and administrators
          </p>
        </div>

        {/* Messages Container */}
        <div className="flex flex-col lg:flex-row h-[calc(100vh-400px)] min-h-[600px] rounded-3xl bg-[#FAFAFA]">
          {/* Sidebar */}
          <div className="w-full lg:w-80 border-r border-[#E1E4EA] bg-[#FAFAFA] rounded-l-3xl">
            {/* Inbox Header */}
            <div className="flex justify-between items-center px-8 py-4 border-b border-[#E1E4EA]">
              <h2 className="text-xl font-medium text-[#0E121B]">Inbox</h2>
              <button className="flex items-center gap-1.5 text-sm text-[#0E121B] hover:opacity-80">
                <MailPlus className="w-4 h-4" />
                <span>New</span>
              </button>
            </div>

            {/* Navigation Items */}
            <div className="px-6 py-4 space-y-1 border-b border-[#E1E4EA]/50">
              <SidebarItem icon="✨" label="Ai Assistant" badge="purple" />
              <SidebarItem icon="💬" label="Threads" />
              <SidebarItem icon="👥" label="Mentions & Reactions" />
              <SidebarItem icon="📤" label="Draft & Sent" />
              <SidebarItem icon="🔖" label="Saved Items" />
              <SidebarItem icon="⋯" label="More" />
            </div>

            {/* Channels */}
            <div className="px-6 py-4 space-y-1 border-b border-[#E1E4EA]/50">
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.66675 9.99967C1.66675 6.85697 1.66675 5.28563 2.64306 4.30932C3.61937 3.33301 5.19071 3.33301 8.33341 3.33301H11.6667C14.8094 3.33301 16.3808 3.33301 17.3571 4.30932C18.3334 5.28563 18.3334 6.85697 18.3334 9.99967C18.3334 13.1423 18.3334 14.7138 17.3571 15.69C16.3808 16.6663 14.8094 16.6663 11.6667 16.6663H8.33341C5.19071 16.6663 3.61937 16.6663 2.64306 15.69C1.66675 14.7138 1.66675 13.1423 1.66675 9.99967Z" stroke="#0E121B" strokeWidth="1.25"/>
                  </svg>
                  <span className="text-base font-medium text-[#404040]">Channels</span>
                </div>
                <svg className="w-5 h-5 -rotate-90" viewBox="0 0 20 20" fill="none">
                  <path d="M9.99932 9.20449L6.28682 12.917L5.22632 11.8565L9.99932 7.08349L14.7723 11.8565L13.7118 12.917L9.99932 9.20449Z" fill="#0E121B"/>
                </svg>
              </div>
              <SidebarItem icon="#" label="General" />
              <SidebarItem icon="👥" label="Entrance-Group" badge="6" badgeColor="red" />
            </div>

            {/* Direct Messages */}
            <div className="px-6 py-4 space-y-1">
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none">
                    <path d="M15.7858 2.2897C14.1523 0.530521 1.86486 4.8399 1.87501 6.41325C1.88651 8.19742 6.67357 8.74627 8.0004 9.11857C8.79832 9.34237 9.012 9.57187 9.19597 10.4086C10.0292 14.1979 10.4476 16.0826 11.401 16.1247C12.9208 16.1919 17.38 4.0065 15.7858 2.2897Z" stroke="#525866" strokeWidth="1.125"/>
                  </svg>
                  <span className="text-base font-medium text-[#404040]">Direct Messages</span>
                </div>
                <svg className="w-5 h-5 rotate-90" viewBox="0 0 20 20" fill="none">
                  <path d="M10.0007 10.7955L13.7132 7.08301L14.7737 8.14351L10.0007 12.9165L5.22768 8.14351L6.28818 7.08301L10.0007 10.7955Z" fill="#0E121B"/>
                </svg>
              </div>
              <div className="px-3 py-3 rounded-xl bg-[#EDEFEB]">
                <div className="flex items-center gap-3">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/09910478203f7c9783c1b46d789c1652c5c39389?width=88" className="w-11 h-11 rounded-full" alt="Mentor" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-[#163300]">Mentor</span>
                      <span className="text-xs text-[#163300]">08:13</span>
                    </div>
                    <p className="text-xs text-[#1E3006] truncate">You: Can you please provide for me your some more details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col bg-white rounded-r-3xl">
            {/* Chat Header */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-black/[0.08]">
              <div className="flex items-center gap-3">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/e73893363fa019106b02b9c4ae8d1d0a4df15ce7?width=74" className="w-9 h-9 rounded-full" alt="Anika" />
                <div>
                  <div className="text-sm font-medium text-[#0E121B]">Anika Lubin</div>
                  <div className="text-xs text-[#8C8C8C]">Anika.Lubin@gmail.com</div>
                </div>
              </div>
              <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-[#E1E4EA] bg-white hover:bg-gray-50">
                <svg className="w-4 h-4" viewBox="0 0 17 17" fill="none">
                  <path d="M8.71585 5.85236C10.0226 5.85236 11.0818 4.81488 11.0818 3.53507C11.0818 2.25526 10.0226 1.21777 8.71585 1.21777C7.40915 1.21777 6.34985 2.25526 6.34985 3.53507C6.34985 4.81488 7.40915 5.85236 8.71585 5.85236Z" fill="#7D52F4"/>
                </svg>
                <span className="text-sm font-medium text-[#0E121B]">Open in Teams</span>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              <div className="text-center">
                <span className="inline-block px-3 py-2 rounded-full bg-[#F7F7F7] text-xs text-[#8C8C8C]">1 January, 2024</span>
              </div>

              <MessageBubble 
                sender="James Brown"
                time="2d ago"
                message="Hi Alex! I've reviewed your brand identity project and I'm really impressed with your creative approach."
                avatar="https://api.builder.io/api/v1/image/assets/TEMP/e73893363fa019106b02b9c4ae8d1d0a4df15ce7?width=74"
              />

              <MessageBubble 
                sender="Me"
                time="2d ago"
                message="Thank you so much! I really enjoyed working on the logo concepts. The color theory lessons helped a lot."
                isMe
              />

              <MessageBubble 
                sender="James Brown"
                time="2d ago"
                message="Great work on your brand project! Let's schedule a review session. Are you free Thursday at 4 PM?"
                avatar="https://api.builder.io/api/v1/image/assets/TEMP/e73893363fa019106b02b9c4ae8d1d0a4df15ce7?width=74"
              />
            </div>

            {/* Message Input */}
            <div className="px-6 py-4 border-t border-black/[0.05]">
              <div className="flex items-center gap-3 px-3 py-3 rounded-2xl border border-black/[0.05] bg-white">
                <div className="flex items-center gap-2">
                  <Smile className="w-5 h-5 text-[#8C8C8C] cursor-pointer hover:text-[#404040]" />
                  <ImagePlus className="w-5 h-5 text-[#8C8C8C] cursor-pointer hover:text-[#404040]" />
                  <Link2 className="w-5 h-5 text-[#8C8C8C] cursor-pointer hover:text-[#404040]" />
                </div>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message ..."
                  className="flex-1 outline-none text-sm text-[#8C8C8C] bg-transparent"
                />
                <button className="p-1.5 hover:opacity-80">
                  <Send className="w-5 h-5 text-[#163300]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ 
  icon, 
  label, 
  badge, 
  badgeColor = "purple" 
}: { 
  icon: string; 
  label: string; 
  badge?: string; 
  badgeColor?: string;
}) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/50 cursor-pointer">
      <span className="w-5 text-center text-[#525866]">{icon}</span>
      <span className="flex-1 text-sm font-medium text-[#404040]">{label}</span>
      {badge && (
        <span className={`px-2 py-0.5 rounded-full text-xs ${
          badgeColor === "red" ? "bg-[#E52529] text-white" : "bg-gradient-to-b from-[#9755E2] to-[#532F7C] text-white"
        }`}>
          {badge}
        </span>
      )}
    </div>
  );
}

function MessageBubble({ 
  sender, 
  time, 
  message, 
  avatar, 
  isMe = false 
}: { 
  sender: string; 
  time: string; 
  message: string; 
  avatar?: string; 
  isMe?: boolean;
}) {
  return (
    <div className={`flex gap-3 ${isMe ? 'flex-row-reverse' : ''}`}>
      {isMe ? (
        <div className="w-9 h-9 rounded-full border-2 border-[#E1E4EA] bg-gray-200"></div>
      ) : (
        <img src={avatar} className="w-9 h-9 rounded-full flex-shrink-0" alt={sender} />
      )}
      <div className={`flex-1 max-w-md ${isMe ? 'flex flex-col items-end' : ''}`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-[#0E121B]">{sender}</span>
          <span className="text-xs text-[#8C8C8C]">{time}</span>
        </div>
        <div className={`px-3.5 py-2 rounded-xl ${isMe ? 'bg-white' : 'bg-white rounded-tl-none'} max-w-full`}>
          <p className="text-sm text-[#0E121B] leading-5">{message}</p>
        </div>
      </div>
    </div>
  );
}
