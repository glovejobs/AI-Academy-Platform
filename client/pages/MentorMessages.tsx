import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, BookOpen, Lightbulb, Mail, TrendingUp, Settings, Search, MessageSquare, AtSign, Send as SendIcon, Bookmark, MoreHorizontal, Wallet, ChevronRight, ChevronDown, MailPlus, Phone, Video, Smile, Send } from "lucide-react";
import { useState } from "react";

export default function MentorMessages() {
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = useState("");

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/mentor-dashboard", icon: Home },
    { id: "students", label: "Students", path: "/mentor-students", icon: Users },
    { id: "curriculum", label: "Curriculum", path: "/mentor-curriculum", icon: BookOpen },
    { id: "projects", label: "Projects", path: "/mentor-projects", icon: Lightbulb },
    { id: "messages", label: "Messages", path: "/mentor-messages", icon: Mail },
    { id: "analytics", label: "Analytics", path: "/mentor-analytics", icon: TrendingUp },
    { id: "settings", label: "Settings", path: "/mentor-settings", icon: Settings },
  ];

  const contacts = [
    { name: "Angel Saris", message: "You: Can you please provide for me your some more details", time: "08:13", avatar: "" },
    { name: "Katherine Moss", message: "You: Can you please provide for me your some more details", time: "08:13", avatar: "", active: true, online: true },
    { name: "Lindsey Curtis", message: "You: Can you please provide for me your some more details", time: "08:13", avatar: "" },
    { name: "Ruben Geidt", message: "You: Can you please provide for me your some more details", time: "08:13", avatar: "" },
    { name: "Makenna Donin", message: "You: Can you please provide for me your some more details", time: "08:13", initials: "MD" },
  ];

  const messages = [
    { sender: "Katherine Moss", text: "Hey Olivia, I've finished with the requirements doc! I made some notes in the gdoc as well for Phoenix to look over.", time: "Thursday 11:40am", isUser: false },
    { sender: "You", text: "Awesome! Thanks. I'll look at this today.", time: "Thursday 11:41am", isUser: true },
    { sender: "Katherine Moss", text: "No rush though — we still have to wait for Lana's designs.", time: "Thursday 11:44am", isUser: false },
    { sender: "Katherine Moss", text: "Hey Olivia, can you please review the latest design when you can?", time: "Today 2:20pm", isUser: false },
    { sender: "You", text: "Sure thing, I'll have a look today. They're looking great!", time: "Just now", isUser: true, reactions: ["❤️", "👌"] },
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
          <div className="flex justify-center items-start gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
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
                  <Icon className={`w-[18px] h-[18px] ${active ? "text-[#B1FA63]" : "text-[#CFD6C9]"}`} />
                  <span className={`text-sm font-${active ? "bold" : "normal"} leading-6 tracking-[-0.14px] ${
                    active ? "text-[#B1FA63]" : "text-[#CFD6C9]"
                  }`}>
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
            <div className="flex flex-col">
              <div className="text-[#1E3006] text-base font-bold leading-6 tracking-[-0.16px]">Adam Mid</div>
              <div className="text-[#21231D] text-[13px] font-normal leading-4 tracking-[-0.13px]">Mentor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] p-6 sm:p-8">
        {/* Page Header */}
        <div className="px-10 mb-8">
          <h1 className="text-[30px] font-bold text-black leading-[34px] tracking-[-0.75px] mb-1">
            Messages
          </h1>
          <p className="text-base text-[#404040] leading-6 tracking-[-0.16px]">
            Communicate with your child's mentors and administrators
          </p>
        </div>

        <div className="h-px bg-black/10 mb-8 mx-10"></div>

        {/* Messages Layout */}
        <div className="flex gap-0">
          {/* Left Sidebar */}
          <div className="w-80 border-r border-[#E1E4EA] pr-4 pl-4">
            {/* Inbox Header */}
            <div className="flex justify-between items-center h-[52px] px-8 border-b border-[#E1E4EA] mb-6">
              <h2 className="text-xl font-medium text-[#0E121B]">Inbox</h2>
              <button className="flex items-center gap-1.5 text-sm text-[#0E121B]">
                <MailPlus className="w-[18px] h-[18px]" />
                New
              </button>
            </div>

            {/* Search */}
            <div className="mb-6 pr-4">
              <div className="flex items-center gap-2 px-3.5 py-2.5 border border-[#D0D5DD] rounded-lg">
                <Search className="w-5 h-5 text-black/10" />
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="flex-1 text-base outline-none placeholder:text-black/10"
                />
              </div>
            </div>

            {/* Navigation Items */}
            <div className="mb-4 space-y-1">
              <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-gray-50">
                <MessageSquare className="w-5 h-5 text-[#525866]" />
                <span className="text-base text-[#404040]">Threads</span>
              </button>
              <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-gray-50">
                <AtSign className="w-5 h-5 text-[#525866]" />
                <span className="text-base text-[#404040]">Mentions & Reactions</span>
              </button>
              <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-gray-50">
                <SendIcon className="w-5 h-5 text-[#525866]" />
                <span className="text-base text-[#404040]">Draft & Sent</span>
              </button>
              <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-gray-50">
                <Bookmark className="w-5 h-5 text-[#525866]" />
                <span className="text-base text-[#404040]">Saved Items</span>
              </button>
              <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-gray-50">
                <MoreHorizontal className="w-5 h-5 text-[#525866]" />
                <span className="text-base text-[#404040]">More</span>
              </button>
            </div>

            <div className="h-px bg-[#E1E4EA]/50 mb-4"></div>

            {/* Channels */}
            <div className="mb-4">
              <button className="flex items-center justify-between w-full px-3 py-2">
                <div className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-[#0E121B]" />
                  <span className="text-base font-medium text-[#404040]">Channels</span>
                </div>
                <ChevronRight className="w-5 h-5 text-[#0E121B]" />
              </button>
              <div className="space-y-1 mt-1">
                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-gray-50">
                  <span className="text-sm text-[#525866]">#</span>
                  <span className="text-base text-[#404040]">General</span>
                </button>
                <button className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#525866]" />
                    <span className="text-base text-[#404040]">Entrance-Group</span>
                  </div>
                  <div className="bg-[#E52529] text-white text-xs px-2 py-0.5 rounded-full">6</div>
                </button>
              </div>
            </div>

            <div className="h-px bg-[#E1E4EA]/50 mb-4"></div>

            {/* Direct Messages */}
            <div>
              <button className="flex items-center justify-between w-full px-3 py-2 mb-2">
                <div className="flex items-center gap-2">
                  <SendIcon className="w-[18px] h-[18px] text-[#525866]" />
                  <span className="text-base font-medium text-[#404040]">Direct Messages</span>
                </div>
                <ChevronDown className="w-5 h-5 text-[#0E121B]" />
              </button>

              {/* Contact List */}
              <div className="space-y-0">
                {contacts.map((contact, idx) => (
                  <button
                    key={idx}
                    className={`w-full px-4 py-3 flex items-center gap-3 rounded-xl transition-colors ${
                      contact.active ? "bg-[#F9FAF9] border border-black/10" : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="relative flex-shrink-0">
                      {contact.initials ? (
                        <div className="w-11 h-11 rounded-full bg-[#68CDFF] flex items-center justify-center text-white font-medium">
                          {contact.initials}
                        </div>
                      ) : (
                        <div className="w-11 h-11 rounded-full bg-gray-200"></div>
                      )}
                      {contact.online && (
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#12B76A] border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className={`text-base font-bold ${contact.active ? "text-[#163300]" : "text-[#21231D]"}`}>
                          {contact.name}
                        </span>
                        <span className={`text-xs ${contact.active ? "text-[#163300]" : "text-black"}`}>
                          {contact.time}
                        </span>
                      </div>
                      <p className="text-sm text-[#8C8C8C] truncate">{contact.message}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col border-r border-[#E1E4EA]">
            {/* Chat Header */}
            <div className="px-6 py-5 border-b border-[#EAECF0] bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gray-200"></div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-[#101828]">Katherine Moss</h3>
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-2xl bg-[rgba(159,232,112,0.20)]">
                        <div className="w-2 h-2 rounded-full bg-[#1E3006]"></div>
                        <span className="text-xs text-[#1E3006]">Online</span>
                      </div>
                    </div>
                    <p className="text-sm text-[#8C8C8C]">@kathy</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <MoreHorizontal className="w-5 h-5 text-[#98A2B3]" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
              {/* Thursday Divider */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-[#EAECF0]"></div>
                <span className="text-sm text-[#475467]">Thursday</span>
                <div className="flex-1 h-px bg-[#EAECF0]"></div>
              </div>

              {messages.slice(0, 3).map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                  {!msg.isUser && (
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                  )}
                  <div className={`max-w-[560px] ${msg.isUser ? "items-end" : "items-start"} flex flex-col gap-1.5`}>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-[#21231D]">{msg.sender}</span>
                      <span className="text-xs text-[#404040]">{msg.time}</span>
                    </div>
                    <div className={`px-3.5 py-2.5 ${
                      msg.isUser 
                        ? "bg-[#1E3006] text-white rounded-lg rounded-tr-none" 
                        : "bg-[#ECEFEC] text-[#21231D] rounded-lg rounded-tl-none"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}

              {/* Today Divider */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-[#EAECF0]"></div>
                <span className="text-sm font-medium text-[#21231D]">Today</span>
                <div className="flex-1 h-px bg-[#EAECF0]"></div>
              </div>

              {messages.slice(3).map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                  {!msg.isUser && (
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                  )}
                  <div className={`max-w-[560px] ${msg.isUser ? "items-end" : "items-start"} flex flex-col gap-1.5`}>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-[#21231D]">{msg.sender}</span>
                      <span className="text-xs text-[#404040]">{msg.time}</span>
                    </div>
                    <div className={`px-3.5 py-2.5 ${
                      msg.isUser 
                        ? "bg-[#1E3006] text-white rounded-lg rounded-tr-none" 
                        : "bg-[#ECEFEC] text-[#21231D] rounded-lg rounded-tl-none"
                    }`}>
                      {msg.text}
                    </div>
                    {msg.reactions && (
                      <div className="flex gap-1">
                        {msg.reactions.map((reaction, i) => (
                          <div key={i} className="px-2 py-1 bg-[#F9FAFB] rounded-2xl text-sm">
                            {reaction}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div>
                  <span className="text-base font-medium text-[#21231D] block mb-1.5">Katherine Moss</span>
                  <div className="px-2.5 py-2.5 bg-[#F9FAF9] rounded-lg rounded-tl-none flex gap-1">
                    <div className="w-1 h-2 bg-[#1E3006] rounded-full animate-bounce"></div>
                    <div className="w-1 h-2 bg-[#6A8042] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-2 bg-[#1E3006] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="px-8 pb-6">
              <div className="relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Send a message"
                  className="w-full px-3.5 py-3 border border-black/10 rounded-lg resize-none outline-none focus:border-[#1E3006] transition-colors"
                  rows={3}
                />
                <div className="flex items-center justify-between mt-3">
                  <div className="flex gap-0.5">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Smile className="w-5 h-5 text-[#8C8C8C]" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <MoreHorizontal className="w-5 h-5 text-[#8C8C8C]" />
                    </button>
                  </div>
                  <button className="px-4 py-2.5 bg-[#9FE870] text-[#1E3006] font-bold text-sm rounded-full hover:bg-[#8DD75F] transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Profile */}
          <div className="w-[360px] bg-white">
            {/* Profile Header */}
            <div className="relative">
              <div className="h-[120px] bg-[#163300]"></div>
              <div className="px-6 -mt-12">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-4 border-white bg-[#B1FA63] overflow-hidden">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/6591febd8101eb79bcec8e72aa39bdf7555832f6?width=192"
                      alt="Katherine Moss"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-[#0788F5] rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3.75 6L5 7.5L8.25 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <div className="flex gap-3">
                    <button className="p-2 border border-black/10 rounded-lg hover:bg-gray-50">
                      <Mail className="w-5 h-5 text-[#21231D]" />
                    </button>
                    <button className="p-2 border border-black/10 rounded-lg hover:bg-gray-50">
                      <Phone className="w-5 h-5 text-[#21231D]" />
                    </button>
                    <button className="p-2 border border-black/10 rounded-lg hover:bg-gray-50">
                      <Video className="w-5 h-5 text-[#21231D]" />
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-2xl font-bold text-[#21231D]">Katherine Moss</h3>
                    <div className="w-2.5 h-2.5 bg-[#12B76A] border-[1.5px] border-white rounded-full"></div>
                  </div>
                  <p className="text-base text-[#404040]">katerine@bootcamp.com</p>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="flex-1 px-4 py-2.5 border border-[#D0D5DD] rounded-full text-sm font-bold text-[#404040] hover:bg-gray-50">
                    Add to project
                  </button>
                  <button className="flex-1 px-4 py-2.5 bg-[#EE7A13] border border-[#EE7A13] rounded-full text-sm font-bold text-white hover:bg-[#D96D0F]">
                    View projects
                  </button>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="px-6 mt-6">
              <h4 className="text-sm font-semibold text-[#21231D] mb-1">About</h4>
              <p className="text-sm text-[#404040] leading-5">
                I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
