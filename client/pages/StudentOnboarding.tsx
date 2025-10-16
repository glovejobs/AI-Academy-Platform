import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Image, Mic, Paperclip, Search, Send, Zap } from "lucide-react";

interface Message {
  id: string;
  type: "ai" | "user";
  content: string;
  isTyping?: boolean;
}

interface Step {
  number: number;
  status: "completed" | "active" | "pending";
}

export default function StudentOnboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [showInfoBanner, setShowInfoBanner] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: "Hey there! 👋 I'm Nova, your resume-building buddy! Let's create something awesome together! First up, what's your name?",
    },
  ]);

  const steps: Step[] = [
    { number: 1, status: currentStep > 1 ? "completed" : currentStep === 1 ? "active" : "pending" },
    { number: 2, status: currentStep > 2 ? "completed" : currentStep === 2 ? "active" : "pending" },
    { number: 3, status: currentStep > 3 ? "completed" : currentStep === 3 ? "active" : "pending" },
    { number: 4, status: currentStep > 4 ? "completed" : currentStep === 4 ? "active" : "pending" },
    { number: 5, status: currentStep > 5 ? "completed" : currentStep === 5 ? "active" : "pending" },
    { number: 6, status: currentStep > 6 ? "completed" : currentStep === 6 ? "active" : "pending" },
    { number: 7, status: currentStep === 7 ? "active" : "pending" },
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI typing
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          type: "ai",
          content: "",
          isTyping: true,
        },
      ]);

      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            content: getNextQuestion(),
            isTyping: false,
          };
          return updated;
        });
        setCurrentStep((prev) => Math.min(prev + 1, 7));
      }, 1500);
    }, 500);
  };

  const getNextQuestion = () => {
    const questions = [
      "Cool name, Mimi Alex! How old are you?",
      "Great! What's your favorite subject?",
      "Awesome! What are your hobbies?",
      "Interesting! What's your dream job?",
      "Amazing! Tell me about your strengths.",
      "Perfect! We're all set to create something amazing!",
    ];
    return questions[currentStep - 1] || "Let's continue!";
  };

  return (
    <div className="min-h-screen bg-[#1E3006] flex flex-col items-center p-3 sm:p-6 gap-6">
      {/* Stepper */}
      <div className="flex items-start gap-2">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center gap-2">
            <div
              className={`flex p-1 items-center gap-2 rounded-full ${
                step.status === "active"
                  ? "bg-[#9FE870]/20"
                  : "bg-black/5"
              }`}
            >
              <div
                className={`flex w-5 h-5 flex-col justify-center items-center rounded-full ${
                  step.status === "completed" || step.status === "active"
                    ? "bg-[#B1FA63]"
                    : "bg-black/5"
                }`}
              >
                {step.status === "completed" ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.75 12.75L10 15.25L16.25 8.75" stroke="#1E3006" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <span className={`text-xs font-bold ${step.status === "active" ? "text-[#1E3006]" : "text-black/50"}`} style={{ fontFamily: step.status === "active" ? 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' : 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    {step.number}
                  </span>
                )}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-6 h-0.5 ${step.status === "completed" ? "bg-[#B1FA63]" : step.status === "active" ? "bg-[#CBD5E1]" : "bg-black/5"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Chat Container */}
      <div className="flex flex-col flex-1 w-full max-w-[1376px] p-8 sm:p-16 rounded-3xl bg-white shadow-sm">
        {/* Messages */}
        <div className="flex flex-col gap-4 mb-6">
          {messages.map((message) => (
            <div key={message.id}>
              {message.type === "ai" ? (
                <div className="flex items-start gap-3">
                  <div className="flex w-10 h-10 justify-center items-center flex-shrink-0">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5ccfd5ab5a328bdad16c4b4f5a5e4df51a8d7755?width=79"
                      alt="Nova AI"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#0E121B]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                          Nova Ai
                        </span>
                      </div>
                      {message.isTyping ? (
                        <div className="flex items-center gap-3">
                          <div className="w-[73.676px] h-[73.676px] rounded-lg bg-white flex items-center justify-center gap-2">
                            <div className="w-[4.715px] h-[4.715px] rounded-full bg-[#6A8042]" />
                            <div className="w-[4.715px] h-[4.715px] rounded-full bg-[#6A8042]" />
                            <div className="w-[4.715px] h-[4.715px] rounded-full bg-[#6A8042]" />
                          </div>
                        </div>
                      ) : (
                        <p className="text-lg leading-7 text-[#0E121B]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                          {message.content.split("**").map((part, i) =>
                            i % 2 === 1 ? (
                              <span key={i} className="font-bold">
                                {part}
                              </span>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-end items-start gap-3">
                  <div className="flex flex-col items-end gap-1 max-w-[360px]">
                    <div className="flex px-3 py-2 items-center gap-2 rounded-lg rounded-tr-none bg-[#EDEFEB]">
                      <span className="text-lg leading-7 text-[#1E3006]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                        {message.content}
                      </span>
                    </div>
                  </div>
                  <div className="flex w-10 h-10 justify-center items-center flex-shrink-0">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/fe1eccc8b53d8aa317a3a4cd190f829ca8899be8?width=80"
                      alt="User"
                      className="w-full h-full rounded-full border-2 border-white"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col w-full">
            {showInfoBanner && (
              <div className="flex items-center gap-1.5 px-3 py-3.5 rounded-t-3xl border border-[#E1E4EA] bg-[#EDEFEB]">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00016 15.1663C11.6821 15.1663 14.6668 12.1816 14.6668 8.49967C14.6668 4.81778 11.6821 1.83301 8.00016 1.83301C4.31826 1.83301 1.3335 4.81778 1.3335 8.49967C1.3335 12.1816 4.31826 15.1663 8.00016 15.1663Z" stroke="#1E3006"/>
                  <path d="M7.99463 10.5H8.00213" stroke="#1E3006" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 8.49967V5.83301" stroke="#1E3006" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="flex-1 text-xs leading-4 text-[#1E3006]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  The more details you share, the better I can help!
                </span>
                <button onClick={() => setShowInfoBanner(false)} className="p-0">
                  <X className="w-4 h-4 text-[#0E121B]" />
                </button>
              </div>
            )}

            <div className="flex flex-col px-6 py-3.5 pb-6 gap-3 rounded-b-3xl border border-[#E1E4EA]">
              <div className="flex items-start gap-3.5">
                <div className="w-px h-5 bg-[#163300]" />
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message"
                  className="flex-1 bg-transparent outline-none text-base leading-6 text-[#404040] placeholder:text-[#8C8C8C]"
                  style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <button className="flex items-center justify-center w-16 h-6 px-0.75 rounded-xl bg-[#E1E4EA]">
                    <span className="text-xs text-[#525866]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>Speed</span>
                  </button>
                  <div className="w-px h-5 bg-[#E1E4EA]" />
                  <button className="p-0"><Zap className="w-5 h-5 text-[#404040]" /></button>
                  <button className="p-0"><Paperclip className="w-5 h-5 text-[#404040]" /></button>
                  <button className="p-0"><Search className="w-5 h-5 text-[#404040]" /></button>
                </div>

                <div className="flex items-center gap-2.5">
                  <button className="p-0"><Image className="w-5 h-5 text-[#404040]" /></button>
                  <button className="p-0"><Mic className="w-5 h-5 text-[#404040]" /></button>
                  <div className="w-px h-5 bg-[#E1E4EA]" />
                  <button onClick={handleSend} className="p-0" disabled={!inputValue.trim()}>
                    <Send className={`w-5 h-5 ${inputValue.trim() ? 'text-[#1E3006]' : 'text-[#D9D9D9]'}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-base leading-6 text-[#404040] text-center" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
            Nova can help with creative projects, answer questions, and provide feedback 💡
          </p>
        </div>
      </div>
    </div>
  );
}
