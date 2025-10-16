import { useNavigate, useLocation } from "react-router-dom";
import { Sparkles, FileText, PieChart, Code2, X, Zap, Link2, Search, Image as ImageIcon, Mic, Send } from "lucide-react";
import { useState } from "react";

interface Message {
  id: string;
  type: "ai" | "user";
  content: string;
  timestamp: string;
}

export default function AiMentor() {
  const navigate = useNavigate();
  const location = useLocation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [showBanner, setShowBanner] = useState(true);

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/student-dashboard" },
    { id: "bootcamp", label: "My Bootcamp", path: "/student-bootcamp" },
    { id: "projects", label: "Projects", path: "/student-projects" },
    { id: "ai-mentor", label: "Ai Mentor", path: "/ai-mentor" },
    { id: "achievements", label: "Achievements", path: "/achievements" },
    { id: "schedule", label: "Schedule", path: "/student-schedule" },
    { id: "portfolio", label: "Portfolio", path: "/portfolio" },
  ];

  const isActive = (itemPath: string) => {
    return location.pathname === itemPath;
  };

  const suggestionCards = [
    {
      icon: <FileText className="w-6 h-6 text-[#FF8447]" />,
      title: "Generate Article",
      description: "Help me brainstorm project ideas",
      bgColor: "bg-[#F9FAFC]"
    },
    {
      icon: <PieChart className="w-6 h-6 text-[#FFB800]" />,
      title: "Data Analytics",
      description: "Create my creative resume",
      bgColor: "bg-[#F9FAFC]"
    },
    {
      icon: <Code2 className="w-6 h-6 text-[#FB3748]" />,
      title: "Generate Code",
      description: "What should I work on this week?",
      bgColor: "bg-[#F9FAFC]"
    },
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date().toLocaleString('en-US', { weekday: 'long', hour: 'numeric', minute: '2-digit', hour12: true })
    };

    setMessages([...messages, userMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: "Hey there! 👋 I'm Nova, your AI mentor. I'm here to help you with your creative projects, answer questions, or just chat. What would you like to work on today?",
        timestamp: new Date().toLocaleString('en-US', { weekday: 'long', hour: 'numeric', minute: '2-digit', hour12: true })
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
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
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-3 h-12 px-4 sm:px-6 rounded-full text-sm sm:text-base transition-all ${
                    active
                      ? "bg-[#B1FA63] text-[#163300] font-bold"
                      : "text-[#FAFAFA] opacity-60 hover:opacity-100 px-2"
                  }`}
                >
                  {active && item.id === "ai-mentor" && (
                    <Sparkles className="w-5 h-5" strokeWidth={1.25} />
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/fe1eccc8b53d8aa317a3a4cd190f829ca8899be8?width=80" 
              alt="Mimi Alex" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="hidden sm:block">
              <div className="text-white font-bold text-base leading-6" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>Mimi Alex</div>
              <div className="text-white/70 text-[13px] leading-4" style={{ fontFamily: 'DM Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>Designer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-3xl shadow-[0_0_20px_0_rgba(0,0,0,0.03)] flex-1">
        <div className="flex flex-col justify-between h-[calc(100vh-140px)] p-8 sm:p-16 lg:px-[300px] lg:py-16">
          {/* Messages or Welcome Screen */}
          {messages.length === 0 ? (
            <div className="flex flex-col justify-center items-center gap-12 flex-1">
              {/* Welcome Section */}
              <div className="flex flex-col items-center gap-3 max-w-[716px]">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5b7077f495a613f5beb7a9537bd59e38fb6913e6?width=167" 
                  alt="Nova AI" 
                  className="w-[85px] h-[83px] mb-3"
                />
                <h1 className="text-[44px] font-bold text-[#0E121B] text-center leading-10 tracking-[-1.32px]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Hi! I'm Nova 👋
                </h1>
                <p className="text-xl text-[#525866] text-center leading-7 tracking-[-0.4px] max-w-[716px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  I'm here to help you with your creative journey! Ask me anything about your projects, get help with ideas, or let me guide you through building your creative resume.
                </p>
              </div>

              {/* Suggestion Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-5xl">
                {suggestionCards.map((card, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-start gap-3 p-6 rounded-3xl border border-black/[0.05] bg-[#FAFAFA] hover:bg-[#F0F0F0] transition-colors h-[164px]"
                  >
                    <div className={`flex items-center justify-center w-[50px] h-[50px] rounded-2xl ${card.bgColor}`}>
                      {card.icon}
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <h3 className="text-lg font-bold text-[#0E121B] leading-7 tracking-[-0.36px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                        {card.title}
                      </h3>
                      <p className="text-base text-[#404040] leading-6 tracking-[-0.16px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                        {card.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-[18px] flex-1 overflow-y-auto">
              {messages.map((message) => (
                <div key={message.id} className={`flex items-start gap-3 ${message.type === 'user' ? 'justify-end' : ''}`}>
                  {message.type === 'ai' && (
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5ccfd5ab5a328bdad16c4b4f5a5e4df51a8d7755?width=79" 
                      alt="Nova" 
                      className="w-10 h-10"
                    />
                  )}
                  <div className={`flex flex-col gap-1.5 ${message.type === 'user' ? 'items-end' : 'items-start flex-1'}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-[#0E121B]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                        {message.type === 'ai' ? 'Nova Ai' : 'You'}
                      </span>
                      {message.type === 'user' && (
                        <span className="text-xs text-[#404040]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                          {message.timestamp}
                        </span>
                      )}
                    </div>
                    <div className={`px-3.5 py-2.5 rounded-lg ${message.type === 'user' ? 'bg-[#EDEFEB] rounded-tr-none' : 'bg-transparent'}`}>
                      <p className={`text-sm leading-[21px] tracking-[-0.084px] ${message.type === 'user' ? 'text-[#1E3006]' : 'text-[#0E121B]'}`} style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                        {message.content}
                      </p>
                    </div>
                  </div>
                  {message.type === 'user' && (
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/fe1eccc8b53d8aa317a3a4cd190f829ca8899be8?width=80" 
                      alt="User" 
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex flex-col items-start w-full h-48">
              {/* Banner */}
              {showBanner && (
                <div className="flex items-center gap-1.5 px-3 py-3.5 w-full rounded-t-3xl border-t border-x border-[#E1E4EA] bg-[#FDF2E7]">
                  <svg className="w-4 h-4 text-[#EE7A13]" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00029 15.1663C11.6822 15.1663 14.667 12.1816 14.667 8.49967C14.667 4.81778 11.6822 1.83301 8.00029 1.83301C4.31839 1.83301 1.33362 4.81778 1.33362 8.49967C1.33362 12.1816 4.31839 15.1663 8.00029 15.1663Z" stroke="currentColor"/>
                    <path d="M7.99451 10.5H8.00201" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8.49967V5.83301" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="flex-1 text-xs font-medium text-[#EE7A13] leading-4" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    The more details you share, the better I can help!
                  </span>
                  <button onClick={() => setShowBanner(false)}>
                    <X className="w-4 h-4 text-[#0E121B]" />
                  </button>
                </div>
              )}
              
              {/* Input Field */}
              <div className={`flex flex-col justify-between p-6 pb-6 flex-1 w-full border border-[#E1E4EA] ${showBanner ? 'rounded-b-3xl' : 'rounded-3xl'}`}>
                <div className="flex items-start gap-3.5">
                  <div className="w-px h-5 bg-[#163300]"></div>
                  <input 
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Write your message ..."
                    className="flex-1 text-base text-[#8C8C8C] leading-6 tracking-[-0.176px] outline-none bg-transparent placeholder:text-[#8C8C8C]"
                    style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}
                  />
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center px-3 h-6 rounded-xl bg-[#E1E4EA]">
                      <span className="text-xs text-[#525866]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>Speed</span>
                    </div>
                    <div className="w-px h-5 bg-[#E1E4EA]"></div>
                    <Code2 className="w-5 h-5 text-[#99A0AE]" strokeWidth={1.25} />
                    <Link2 className="w-5 h-5 text-[#99A0AE]" strokeWidth={1.25} />
                    <Search className="w-5 h-5 text-[#99A0AE]" strokeWidth={1.25} />
                  </div>
                  
                  <div className="flex items-center gap-2.5">
                    <ImageIcon className="w-5 h-5 text-[#404040]" strokeWidth={1.25} />
                    <Mic className="w-5 h-5 text-[#404040]" strokeWidth={1.25} />
                    <div className="w-px h-5 bg-[#E1E4EA]"></div>
                    <button onClick={handleSendMessage}>
                      <Send className="w-5 h-5 text-[#9FE870]" strokeWidth={1.25} fill="url(#gradient)" />
                      <svg width="0" height="0">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#B1FA63" />
                            <stop offset="100%" stopColor="#1E3006" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Text */}
            <p className="text-xl text-[#525866] text-center leading-7 tracking-[-0.4px] max-w-[716px]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Nova can help with creative projects, answer questions, and provide feedback 💡
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
