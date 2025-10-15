import { useNavigate, useLocation } from "react-router-dom";
import { Send, Smile, ImagePlus, Link2, X, MailPlus, Sparkles } from "lucide-react";

export default function Messages() {
  const navigate = useNavigate();
  const location = useLocation();

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
                  {active && item.id === "messages" ? (
                    <span className="inline-flex items-center gap-3">
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
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] p-8 lg:p-16">
        {/* Page Header */}
        <div className="mb-8 pb-5 border-b border-black/[0.05]">
          <h1 className="text-3xl font-bold text-black leading-[34px] mb-1 font-heading">
            Messages
          </h1>
          <p className="text-base text-[#404040] leading-6 font-body">
            Communicate with your child's mentors and administrators
          </p>
        </div>

        {/* Messages Container */}
        <div className="flex rounded-3xl bg-white overflow-hidden">
          {/* Sidebar */}
          <div className="w-80 border-r border-[#E1E4EA] bg-[#FAFAFA] rounded-l-3xl flex flex-col">
            {/* Inbox Header */}
            <div className="flex justify-between items-center px-9 h-[52px] border-b border-[#E1E4EA]">
              <h2 className="text-xl font-medium text-[#0E121B]">Inbox</h2>
              <button className="flex items-center gap-1.5 text-sm text-[#0E121B] hover:opacity-80">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.25 5.625L7.45652 6.92957C8.7429 7.69013 9.2571 7.69013 10.5435 6.92957L12.75 5.625" stroke="#525866" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.625 14.625C8.625 14.625 7.55183 14.6159 6.82412 14.5976C4.46275 14.5382 3.28206 14.5086 2.43372 13.6571C1.58537 12.8054 1.56086 11.6559 1.51183 9.3567C1.49606 8.61743 1.49605 7.88258 1.51182 7.14329C1.56085 4.84414 1.58537 3.69456 2.43371 2.84299C3.28206 1.99141 4.46275 1.96175 6.82411 1.90242C8.27947 1.86586 9.72053 1.86586 11.1759 1.90243C13.5373 1.96176 14.7179 1.99142 15.5663 2.843C16.4147 3.69457 16.4392 4.84415 16.4881 7.14329C16.4938 7.41093 16.4975 7.87463 16.4991 8.25" stroke="#525866" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.5 13.125H16.5M13.5 16.125V10.125" stroke="#525866" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>New</span>
              </button>
            </div>

            {/* Navigation Items */}
            <div className="px-6 py-4 space-y-1 border-b border-[#E1E4EA]/50">
              <SidebarItem 
                icon={<AiIcon />} 
                label="Ai Assistant" 
                hasBadge={true}
              />
              <SidebarItem 
                icon={<ThreadsIcon />} 
                label="Threads" 
              />
              <SidebarItem 
                icon={<MentionsIcon />} 
                label="Mentions & Reactions" 
              />
              <SidebarItem 
                icon={<DraftIcon />} 
                label="Draft & Sent" 
              />
              <SidebarItem 
                icon={<SavedIcon />} 
                label="Saved Items" 
              />
              <SidebarItem 
                icon={<MoreIcon />} 
                label="More" 
              />
            </div>

            {/* Channels */}
            <div className="px-6 py-4 space-y-1 border-b border-[#E1E4EA]/50">
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.66675 9.99967C1.66675 6.85697 1.66675 5.28563 2.64306 4.30932C3.61937 3.33301 5.19071 3.33301 8.33341 3.33301H11.6667C14.8094 3.33301 16.3808 3.33301 17.3571 4.30932C18.3334 5.28563 18.3334 6.85697 18.3334 9.99967C18.3334 13.1423 18.3334 14.7138 17.3571 15.69C16.3808 16.6663 14.8094 16.6663 11.6667 16.6663H8.33341C5.19071 16.6663 3.61937 16.6663 2.64306 15.69C1.66675 14.7138 1.66675 13.1423 1.66675 9.99967Z" stroke="#0E121B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.66675 8.33301H5.16443C5.75991 8.33301 6.05765 8.33301 6.32468 8.42634C6.48775 8.48334 6.64096 8.56534 6.77884 8.66942C7.00461 8.83984 7.16977 9.08751 7.50008 9.58301C7.83039 10.0785 7.99555 10.3262 8.22132 10.4966C8.35916 10.6007 8.51241 10.6827 8.6755 10.7397C8.9425 10.833 9.24025 10.833 9.83575 10.833H10.1644C10.7599 10.833 11.0577 10.833 11.3247 10.7397C11.4877 10.6827 11.641 10.6007 11.7788 10.4966C12.0046 10.3262 12.1697 10.0785 12.5001 9.58301C12.8304 9.08751 12.9956 8.83984 13.2213 8.66942C13.3592 8.56534 13.5124 8.48334 13.6755 8.42634C13.9425 8.33301 14.2402 8.33301 14.8357 8.33301H18.3334" stroke="#0E121B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-base font-medium text-[#404040]">Channels</span>
                </div>
                <svg className="w-5 h-5 -rotate-90" viewBox="0 0 20 20" fill="none">
                  <path d="M9.99932 9.20449L6.28682 12.917L5.22632 11.8565L9.99932 7.08349L14.7723 11.8565L13.7118 12.917L9.99932 9.20449Z" fill="#0E121B"/>
                </svg>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/50 cursor-pointer">
                <span className="w-[18px] text-center text-[#525866] text-sm">#</span>
                <span className="flex-1 text-sm font-medium text-[#404040]">General</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/50 cursor-pointer">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.8334 5.83333C10.8334 7.67428 9.341 9.16667 7.50008 9.16667C5.65913 9.16667 4.16675 7.67428 4.16675 5.83333C4.16675 3.99238 5.65913 2.5 7.50008 2.5C9.341 2.5 10.8334 3.99238 10.8334 5.83333Z" stroke="#525866" strokeWidth="1.25"/>
                  <path d="M12.5 9.16667C14.3409 9.16667 15.8333 7.67428 15.8333 5.83333C15.8333 3.99238 14.3409 2.5 12.5 2.5" stroke="#525866" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.16675 11.667H5.83341C3.53223 11.667 1.66675 13.5325 1.66675 15.8337C1.66675 16.7542 2.41294 17.5003 3.33341 17.5003H11.6667C12.5872 17.5003 13.3334 16.7542 13.3334 15.8337C13.3334 13.5325 11.4679 11.667 9.16675 11.667Z" stroke="#525866" strokeWidth="1.25" strokeLinejoin="round"/>
                  <path d="M14.1667 11.667C16.4679 11.667 18.3334 13.5325 18.3334 15.8337C18.3334 16.7542 17.5872 17.5003 16.6667 17.5003H15.4167" stroke="#525866" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="flex-1 text-sm font-medium text-[#404040]">Entrance-Group</span>
                <span className="flex items-center justify-center min-w-[18px] h-[18px] px-2 rounded-full bg-[#E52529] text-white text-xs">6</span>
              </div>
            </div>

            {/* Direct Messages */}
            <div className="px-6 py-4 space-y-1 flex-1">
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7858 2.2897C14.1523 0.530521 1.86486 4.8399 1.87501 6.41325C1.88651 8.19742 6.67357 8.74627 8.0004 9.11857C8.79832 9.34237 9.012 9.57187 9.19597 10.4086C10.0292 14.1979 10.4476 16.0826 11.401 16.1247C12.9208 16.1919 17.38 4.0065 15.7858 2.2897Z" stroke="#525866" strokeWidth="1.125"/>
                    <path d="M8.625 9.375L11.25 6.75" stroke="#525866" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
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
                    <div className="flex justify-between items-center mb-1">
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
          <div className="flex-1 flex flex-col bg-white rounded-r-3xl min-h-[942px]">
            {/* Chat Header */}
            <div className="flex items-center justify-between px-6 h-[53px] border-b border-black/[0.08]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/e73893363fa019106b02b9c4ae8d1d0a4df15ce7?width=74" className="w-[37px] h-[37px] rounded-full" alt="Anika" />
                  <div className="absolute -top-0.5 -right-0.5 w-[17px] h-[17px] rounded-full bg-white flex items-center justify-center shadow-sm">
                    <div className="w-[13px] h-[13px] rounded-full bg-[#27C840]"></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#0E121B]">Anika Lubin</div>
                  <div className="text-xs text-[#8C8C8C]">Anika.Lubin@gmail.com</div>
                </div>
              </div>
              <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-[#E1E4EA] bg-white hover:bg-gray-50">
                <svg className="w-4 h-4" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.71585 5.85236C10.0226 5.85236 11.0818 4.81488 11.0818 3.53507C11.0818 2.25526 10.0226 1.21777 8.71585 1.21777C7.40915 1.21777 6.34985 2.25526 6.34985 3.53507C6.34985 4.81488 7.40915 5.85236 8.71585 5.85236Z" fill="#7D52F4"/>
                  <path opacity="0.1" d="M8.5465 4.03223H6.40356L6.41421 4.0784L6.41522 4.08238L6.42638 4.12508C6.58209 4.70339 6.95988 5.20043 7.48086 5.51241C8.00184 5.8244 8.62574 5.92721 9.22228 5.79937V4.6941C9.22174 4.51872 9.15037 4.35067 9.02375 4.22666C8.89714 4.10265 8.72556 4.03275 8.5465 4.03223Z" fill="black"/>
                  <path opacity="0.2" d="M8.03996 4.52832H6.57788C6.76977 4.92456 7.07252 5.25934 7.45095 5.49375C7.82939 5.72816 8.26797 5.85258 8.71574 5.85256V5.19019C8.71521 5.01481 8.64384 4.84677 8.51722 4.72276C8.3906 4.59875 8.21902 4.52884 8.03996 4.52832Z" fill="black"/>
                  <path d="M14.0383 6.01769C15.0182 6.01769 15.8127 5.23963 15.8127 4.27984C15.8127 3.32005 15.0182 2.54199 14.0383 2.54199C13.0583 2.54199 12.2639 3.32005 12.2639 4.27984C12.2639 5.23963 13.0583 6.01769 14.0383 6.01769Z" fill="#5B2CC9"/>
                  <path d="M15.5596 6.51465H11.5744C11.4884 6.51465 11.4058 6.54813 11.345 6.60772C11.2841 6.66732 11.25 6.74815 11.25 6.83243V10.8593C11.239 11.4421 11.4328 12.0109 11.7989 12.4704C12.165 12.93 12.6812 13.2524 13.2611 13.3836C13.6304 13.4595 14.0123 13.4538 14.3791 13.3669C14.7459 13.2799 15.0883 13.114 15.3813 12.8811C15.6743 12.6483 15.9106 12.3543 16.073 12.0207C16.2354 11.6871 16.3198 11.3222 16.3201 10.9526V7.25944C16.3201 7.06191 16.24 6.87247 16.0974 6.73279C15.9547 6.59312 15.7613 6.51465 15.5596 6.51465Z" fill="#5B2CC9"/>
                  <path d="M12.7711 7.25944V11.9765C12.7716 12.8506 12.4774 13.7005 11.9344 14.3942C11.3913 15.0879 10.6296 15.5866 9.76748 15.813C8.90539 16.0394 7.99112 15.9807 7.16655 15.6461C6.34199 15.3115 5.65324 14.7197 5.20719 13.9626C5.10963 13.8038 5.02488 13.6378 4.95371 13.466C4.88735 13.3041 4.83148 13.1383 4.78641 12.9695C4.70283 12.6448 4.66027 12.3113 4.65967 11.9765V7.25944C4.65954 7.1616 4.67911 7.06469 4.71728 6.97427C4.75545 6.88385 4.81146 6.80169 4.8821 6.7325C4.95274 6.66332 5.03662 6.60846 5.12895 6.57108C5.22127 6.53369 5.32021 6.51452 5.42011 6.51465H12.0106C12.1105 6.51452 12.2095 6.53369 12.3018 6.57108C12.3941 6.60846 12.478 6.66332 12.5486 6.7325C12.6193 6.80169 12.6753 6.88385 12.7135 6.97427C12.7516 7.06469 12.7712 7.1616 12.7711 7.25944Z" fill="#7D52F4"/>
                  <path d="M6.17068 6.99867H4.65486V10.9808H3.6602V6.99867H2.13525V6.02051H6.17068V6.99867Z" fill="white"/>
                </svg>
                <span className="text-sm font-medium text-[#0E121B]">Open in Teams</span>
                <svg className="w-6 h-6" viewBox="0 0 25 25" fill="none">
                  <path d="M19.2499 6.5V16.25C19.2499 16.4489 19.1709 16.6397 19.0303 16.7803C18.8896 16.921 18.6988 17 18.4999 17C18.301 17 18.1103 16.921 17.9696 16.7803C17.8289 16.6397 17.7499 16.4489 17.7499 16.25V8.31031L7.03055 19.0306C6.88982 19.1714 6.69895 19.2504 6.49993 19.2504C6.30091 19.2504 6.11003 19.1714 5.9693 19.0306C5.82857 18.8899 5.74951 18.699 5.74951 18.5C5.74951 18.301 5.82857 18.1101 5.9693 17.9694L16.6896 7.25H8.74993C8.55102 7.25 8.36025 7.17098 8.2196 7.03033C8.07895 6.88968 7.99993 6.69891 7.99993 6.5C7.99993 6.30109 8.07895 6.11032 8.2196 5.96967C8.36025 5.82902 8.55102 5.75 8.74993 5.75H18.4999C18.6988 5.75 18.8896 5.82902 19.0303 5.96967C19.1709 6.11032 19.2499 6.30109 19.2499 6.5Z" fill="black"/>
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              <div className="flex justify-center">
                <span className="inline-block px-3 py-2 rounded-full bg-[#F7F7F7] text-xs text-[#8C8C8C] font-medium">1 January, 2024</span>
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
            <div className="px-6 pb-4">
              <div className="flex items-center gap-3 px-3 py-4 rounded-[18px] border border-black/[0.05] bg-white">
                <div className="flex items-center gap-3">
                  <Smile className="w-5 h-5 text-[#8C8C8C] cursor-pointer hover:text-[#404040]" />
                  <ImagePlus className="w-5 h-5 text-[#8C8C8C] cursor-pointer hover:text-[#404040]" />
                  <Link2 className="w-5 h-5 text-[#8C8C8C] cursor-pointer hover:text-[#404040]" />
                </div>
                <input
                  type="text"
                  placeholder="Type your message ..."
                  className="flex-1 outline-none text-sm text-[#8C8C8C] font-light bg-transparent"
                />
                <button className="p-1">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M18.07 8.50965L9.51002 4.22965C3.76002 1.34965 1.40002 3.70965 4.28002 9.45965L5.15002 11.1996C5.40002 11.7096 5.40002 12.2996 5.15002 12.8096L4.28002 14.5396C1.40002 20.2896 3.75002 22.6496 9.51002 19.7696L18.07 15.4896C21.91 13.5696 21.91 10.4296 18.07 8.50965ZM14.84 12.7496H9.44002C9.03002 12.7496 8.69002 12.4096 8.69002 11.9996C8.69002 11.5896 9.03002 11.2496 9.44002 11.2496H14.84C15.25 11.2496 15.59 11.5896 15.59 11.9996C15.59 12.4096 15.25 12.7496 14.84 12.7496Z" fill="#163300"/>
                  </svg>
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
  hasBadge = false
}: { 
  icon: React.ReactNode; 
  label: string; 
  hasBadge?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/50 cursor-pointer">
      <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
      <span className="flex-1 text-sm font-medium text-[#404040]">{label}</span>
      {hasBadge && (
        <div className="flex items-center justify-center p-1 rounded-full bg-gradient-to-b from-[#9755E2] to-[#532F7C]">
          <Sparkles className="w-2 h-2 text-white" />
        </div>
      )}
    </div>
  );
}

function AiIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
      <image href="https://api.builder.io/api/v1/image/assets/TEMP/9b671d00723ce2959d0e62af818951c1f4875c3d?width=47" width="24" height="23" />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.625 9H10.125M5.625 6H7.875" stroke="#525866" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.375 15C7.16278 15.6523 8.11088 16.0678 9.19762 16.1391C10.0539 16.1953 10.9478 16.1952 11.8024 16.1391C12.0966 16.1198 12.4174 16.0505 12.6936 15.9382C13.0009 15.8134 13.1546 15.7509 13.2328 15.7603C13.3108 15.7698 13.4242 15.8523 13.6508 16.0172C14.0504 16.308 14.5538 16.5169 15.3004 16.4989C15.6778 16.4899 15.8666 16.4853 15.9511 16.3432C16.0356 16.201 15.9304 16.0042 15.7198 15.6106C15.4279 15.0646 15.243 14.4397 15.5233 13.9389C16.006 13.2236 16.4159 12.3766 16.4758 11.4617C16.508 10.9702 16.508 10.4611 16.4758 9.96952C16.4359 9.35992 16.288 8.78047 16.0509 8.25" stroke="#525866" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.25875 13.1151C11.9255 12.9394 14.0496 10.8052 14.2243 8.1258C14.2585 7.60148 14.2585 7.05848 14.2243 6.53414C14.0496 3.85477 11.9255 1.72051 9.25875 1.54489C8.349 1.48498 7.39915 1.4851 6.49124 1.54489C3.82457 1.72051 1.70044 3.85477 1.52565 6.53414C1.49145 7.05848 1.49145 7.60148 1.52565 8.1258C1.58931 9.1017 2.02494 10.0052 2.53779 10.7682C2.83557 11.3023 2.63905 11.969 2.32889 12.5513C2.10525 12.9711 1.99343 13.181 2.08322 13.3327C2.17299 13.4843 2.37354 13.4892 2.77463 13.4989C3.56784 13.518 4.10271 13.2952 4.52728 12.9851C4.76808 12.8091 4.88849 12.7211 4.97147 12.7111C5.05445 12.7009 5.21775 12.7675 5.54431 12.9008C5.8378 13.0206 6.17859 13.0945 6.49124 13.1151C7.39915 13.1749 8.349 13.1749 9.25875 13.1151Z" stroke="#525866" strokeWidth="1.125" strokeLinejoin="round"/>
    </svg>
  );
}

function MentionsIcon() {
  return (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.375 15V13.4778C12.375 12.5461 11.9555 11.6324 11.1077 11.246C10.0736 10.7746 8.83342 10.5 7.5 10.5C6.16659 10.5 4.92638 10.7746 3.89226 11.246C3.04445 11.6324 2.625 12.5461 2.625 13.4778V15" stroke="#525866" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.375 15.0007V13.4785C15.375 12.5467 14.9555 11.6332 14.1077 11.2467C13.9123 11.1576 13.7094 11.0755 13.5 11.001" stroke="#525866" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 8.25C8.94975 8.25 10.125 7.07475 10.125 5.625C10.125 4.17525 8.94975 3 7.5 3C6.05025 3 4.875 4.17525 4.875 5.625C4.875 7.07475 6.05025 8.25 7.5 8.25Z" stroke="#525866" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.25 3.1084C12.3343 3.43111 13.125 4.43556 13.125 5.62469C13.125 6.81383 12.3343 7.8183 11.25 8.14103" stroke="#525866" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DraftIcon() {
  return (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.7858 2.2897C14.1523 0.530521 1.86486 4.8399 1.87501 6.41325C1.88651 8.19742 6.67357 8.74627 8.0004 9.11857C8.79832 9.34237 9.012 9.57187 9.19597 10.4086C10.0292 14.1979 10.4476 16.0826 11.401 16.1247C12.9208 16.1919 17.38 4.0065 15.7858 2.2897Z" stroke="#525866" strokeWidth="1.125"/>
      <path d="M8.625 9.375L11.25 6.75" stroke="#525866" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SavedIcon() {
  return (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.25 13.4856V9.53063C2.25 6.80562 2.25 5.44311 3.07376 4.59655C3.89753 3.75 5.22335 3.75 7.875 3.75C10.5266 3.75 11.8525 3.75 12.6763 4.59655C13.5 5.44311 13.5 6.80562 13.5 9.53063V13.4856C13.5 15.215 13.5 16.0797 12.9566 16.3892C11.9043 16.9886 9.93037 14.9889 8.99295 14.3868C8.44927 14.0376 8.17747 13.863 7.875 13.863C7.57253 13.863 7.30069 14.0376 6.75704 14.3868C5.81963 14.9889 3.84572 16.9886 2.7934 16.3892C2.25 16.0797 2.25 15.215 2.25 13.4856Z" stroke="#525866" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.75 1.5H8.25C11.7855 1.5 13.5533 1.5 14.6516 2.59835C15.75 3.6967 15.75 5.46446 15.75 9V13.5" stroke="#525866" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.99707 9H9.00382" stroke="#525866" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.5 9H13.5068" stroke="#525866" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.5 9H4.50673" stroke="#525866" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
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
    <div className={`flex gap-3 px-[18px] ${isMe ? 'pl-[18px]' : ''}`}>
      {isMe ? (
        <div className="w-[37px] h-[37px] rounded-full border-[1.6px] border-[#E1E4EA] bg-gray-200 flex-shrink-0"></div>
      ) : (
        <img src={avatar} className="w-[37px] h-[37px] rounded-full flex-shrink-0" alt={sender} />
      )}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-[#0E121B]">{sender}</span>
          <span className="text-xs text-[#8C8C8C]">{time}</span>
        </div>
        <div className={`px-3.5 py-2 rounded-xl bg-white max-w-[330px] ${!isMe ? 'rounded-tl-none' : ''}`}>
          <p className="text-sm text-[#0E121B] leading-5">{message}</p>
        </div>
      </div>
    </div>
  );
}
