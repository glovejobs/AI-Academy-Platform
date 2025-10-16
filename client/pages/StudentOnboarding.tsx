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
    { number: 7, status: currentStep > 7 ? "completed" : currentStep === 7 ? "active" : "pending" },
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
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);

        // Navigate to next page after completing all questions
        if (nextStep > 7) {
          setTimeout(() => {
            // TODO: Navigate to resume preview or dashboard
            // navigate("/student-dashboard");
          }, 2000);
        }
      }, 1500);
    }, 500);
  };

  const getNextQuestion = () => {
    const questions = [
      "**How old are you?**",
      "Awesome! **What grade are you in?**",
      "Nice! 🎯 **What school activities have you been part of? Think clubs, sports, events, student government...**",
      "**What are you good at? What do you love doing?** Skills can be anything from coding to cooking!",
      "**Tell me about a cool project or responsibility you've had!** It could be a school project, helping at home, or something you built.",
      "**This will be the short 'About Me' section at the top of your resume. Tell us About Yourself in 2-3 sentences!**",
      "Perfect! 🎉 We're all set to create something amazing!",
    ];
    return questions[currentStep - 1] || "Let's continue!";
  };

  return (
    <div className="min-h-screen bg-[#1E3006] flex flex-col items-center p-3 sm:p-6 gap-6">
      {/* Chat Container */}
      <div className="flex flex-col flex-1 w-full max-w-[1376px] p-4 sm:p-8 rounded-3xl bg-white shadow-sm">
        {/* Stepper - Now inside white container */}
        <div className="flex items-start gap-2 justify-center mb-4 sm:mb-6">
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
                    <span className={`text-xs ${step.status === "active" ? "text-[#1E3006] font-semibold" : "text-black/50 font-bold"}`} style={{ fontFamily: step.status === "active" ? 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' : 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
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
        {/* Messages */}
        <div className="flex flex-col gap-3 mb-4">
          {messages.map((message) => (
            <div key={message.id}>
              {message.type === "ai" ? (
                <div className="flex items-start gap-2">
                  <div className="flex w-8 h-8 justify-center items-center flex-shrink-0">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5ccfd5ab5a328bdad16c4b4f5a5e4df51a8d7755?width=79"
                      alt="Nova AI"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#0E121B]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
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
                        <p className="text-sm leading-6 text-[#0E121B]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
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
                <div className="flex justify-end items-start gap-2">
                  <div className="flex flex-col items-end gap-1 max-w-[300px]">
                    <div className="flex px-2 py-1.5 items-center gap-2 rounded-lg rounded-tr-none bg-[#EDEFEB]">
                      <span className="text-sm leading-6 text-[#1E3006]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                        {message.content}
                      </span>
                    </div>
                  </div>
                  <div className="flex w-8 h-8 justify-center items-center flex-shrink-0">
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
        <div className="flex flex-col gap-3">
          <div className="flex flex-col w-full">
            {showInfoBanner && (
              <div className="flex items-center gap-1.5 px-3 py-2.5 rounded-t-3xl border border-[#E1E4EA] bg-[#EDEFEB]">
                <svg width="14" height="14" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00016 15.1663C11.6821 15.1663 14.6668 12.1816 14.6668 8.49967C14.6668 4.81778 11.6821 1.83301 8.00016 1.83301C4.31826 1.83301 1.3335 4.81778 1.3335 8.49967C1.3335 12.1816 4.31826 15.1663 8.00016 15.1663Z" stroke="#1E3006"/>
                  <path d="M7.99463 10.5H8.00213" stroke="#1E3006" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 8.49967V5.83301" stroke="#1E3006" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="flex-1 text-xs leading-3 text-[#1E3006]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  The more details you share, the better I can help!
                </span>
                <button onClick={() => setShowInfoBanner(false)} className="p-0">
                  <X className="w-4 h-4 text-[#0E121B]" />
                </button>
              </div>
            )}

            <div className="flex flex-col px-4 py-2.5 pb-4 gap-2 rounded-b-3xl border border-[#E1E4EA]">
              <div className="flex items-start gap-2">
                <div className="w-px h-4 bg-[#163300]" />
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message"
                  className="flex-1 bg-transparent outline-none text-sm leading-5 text-[#404040] placeholder:text-[#8C8C8C]"
                  style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <button className="flex items-center justify-center w-12 h-5 px-0.5 rounded-lg bg-[#E1E4EA]">
                    <span className="text-xs text-[#525866]" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>Speed</span>
                  </button>
                  <div className="w-px h-4 bg-[#E1E4EA]" />
                  <button className="p-0"><Zap className="w-4 h-4 text-[#404040]" /></button>
                  <button className="p-0"><Paperclip className="w-4 h-4 text-[#404040]" /></button>
                  <button className="p-0"><Search className="w-4 h-4 text-[#404040]" /></button>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-0"><Image className="w-4 h-4 text-[#404040]" /></button>
                  <button className="p-0"><Mic className="w-4 h-4 text-[#404040]" /></button>
                  <div className="w-px h-4 bg-[#E1E4EA]" />
                  <button onClick={handleSend} className="p-0" disabled={!inputValue.trim()}>
                    {inputValue.trim() ? (
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9979 2.11897C17.6084 1.69948 16.9977 1.54236 16.4142 1.48611C15.8011 1.42702 15.0668 1.46632 14.2762 1.57001C12.6908 1.77797 10.7753 2.25935 8.93533 2.85163C7.09417 3.44429 5.29945 4.15737 3.95538 4.84055C3.28646 5.18056 2.70628 5.5246 2.28451 5.85505C2.07449 6.01959 1.88285 6.19683 1.73869 6.38547C1.60119 6.56541 1.45653 6.82141 1.45852 7.13001C1.46374 7.94008 2.01541 8.51258 2.60289 8.89683C3.20253 9.28908 3.98348 9.58466 4.75984 9.81616C5.54453 10.0502 6.36972 10.2315 7.07911 10.3785C7.1256 10.3881 7.21852 10.4073 7.33239 10.4308C7.76119 10.5194 7.97559 10.5637 8.17714 10.5034C8.37867 10.4431 8.53367 10.2882 8.8435 9.97825L11.9109 6.9109C12.2363 6.58547 12.764 6.58547 13.0894 6.9109C13.4148 7.23635 13.4148 7.76399 13.0894 8.08942L10.2289 10.9499C9.913 11.2658 9.75508 11.4237 9.69533 11.6287C9.6355 11.8337 9.68375 12.0513 9.78017 12.4866C10.1538 14.1738 10.4783 15.5681 10.8021 16.5061C10.9912 17.0539 11.2039 17.5282 11.4733 17.8779C11.7545 18.2429 12.137 18.5187 12.6404 18.5409C12.9538 18.5547 13.2144 18.4117 13.3931 18.2788C13.5814 18.139 13.7585 17.9513 13.9227 17.7462C14.2527 17.3339 14.5995 16.7634 14.9445 16.1041C15.6378 14.7791 16.372 13.0025 16.9933 11.1748C17.6142 9.34791 18.1316 7.44233 18.3808 5.85858C18.5052 5.06875 18.5667 4.33522 18.5325 3.72081C18.5001 3.13813 18.3759 2.52605 17.9979 2.11897Z" fill="url(#paint0_linear)"/>
                        <defs>
                          <linearGradient id="paint0_linear" x1="18.2571" y1="2.15578" x2="-1.40044" y2="11.8085" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#B1FA63"/>
                            <stop offset="1" stopColor="#1E3006"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <Send className="w-5 h-5 text-[#D9D9D9]" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm leading-5 text-[#404040] text-center" style={{ fontFamily: 'Satoshi, -apple-system, Roboto, Helvetica, sans-serif' }}>
            Nova can help with creative projects, answer questions, and provide feedback 💡
          </p>
        </div>
      </div>
    </div>
  );
}
