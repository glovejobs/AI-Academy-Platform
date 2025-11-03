import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, BookOpen, Lightbulb, Mail, TrendingUp, Settings } from "lucide-react";
import { useState } from "react";

export default function MentorSettings() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"profile" | "notifications" | "security">("profile");
  
  // Profile form state
  const [fullName, setFullName] = useState("Dave Alex");
  const [phoneNumber, setPhoneNumber] = useState("(555) 555-5555");
  const [email, setEmail] = useState("davealex@bootcamp.com");
  const [role, setRole] = useState("Mentor");
  const [selectedAvatar, setSelectedAvatar] = useState(2); // pig avatar is selected
  
  // Notifications state
  const [emailNotifications, setEmailNotifications] = useState({
    classReminders: true,
    assignmentDeadlines: true,
    feedbackGrades: true,
  });
  const [pushNotifications, setPushNotifications] = useState({
    studyReminders: true,
    newMessages: true,
    projectDeadlines: true,
  });
  const [parentNotifications, setParentNotifications] = useState({
    activityNotifications: true,
  });
  const [parentEmail, setParentEmail] = useState("Parent@example.com");
  
  // Security state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/mentor-dashboard", icon: Home },
    { id: "students", label: "Students", path: "/mentor-students", icon: Users },
    { id: "curriculum", label: "Curriculum", path: "/mentor-curriculum", icon: BookOpen },
    { id: "projects", label: "Projects", path: "/mentor-projects", icon: Lightbulb },
    { id: "messages", label: "Messages", path: "/mentor-messages", icon: Mail },
    { id: "analytics", label: "Analytics", path: "/mentor-analytics", icon: TrendingUp },
    { id: "settings", label: "Settings", path: "/mentor-settings", icon: Settings },
  ];

  const avatars = [
    "https://api.builder.io/api/v1/image/assets/TEMP/1b5a83a6fba3ccdf63dfa4b9480728610d419123?width=122",
    "https://api.builder.io/api/v1/image/assets/TEMP/a8038ccdc3a7f6f8be471b5e75546350da4b5716?width=121",
    "https://api.builder.io/api/v1/image/assets/TEMP/5c5dd45b8a281d4f89fd487d8aef30d34ebd66fa?width=122",
    "https://api.builder.io/api/v1/image/assets/TEMP/d4c42945db6932f5f78613da78d36d51836b2351?width=125",
    "https://api.builder.io/api/v1/image/assets/TEMP/60b6d7ebb7142996823701d04d8877e9445d8a0d?width=123",
    "https://api.builder.io/api/v1/image/assets/TEMP/44b454e89c7b59e11c324fc17981f092864e96ac?width=125",
    "https://api.builder.io/api/v1/image/assets/TEMP/d68d720a81a6a39963e3526e62a4fd34335a9cc4?width=125",
    "https://api.builder.io/api/v1/image/assets/TEMP/60db3e43a2c91a1949cf1393621bc5dc6ee5d618?width=125",
    "https://api.builder.io/api/v1/image/assets/TEMP/6b6cf0e30972889bec949bfe5450a31ac24ffc3a?width=125",
  ];

  const isActive = (itemPath: string) => location.pathname === itemPath;

  const handleSaveProfile = () => {
    console.log("Saving profile...", { fullName, phoneNumber, email, role, selectedAvatar });
  };

  const handleSaveNotifications = () => {
    console.log("Saving notifications...", { emailNotifications, pushNotifications, parentNotifications, parentEmail });
  };

  const handleUpdatePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Updating password...");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

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
                  <Icon 
                    className="w-[18px] h-[18px]" 
                    strokeWidth={1.25}
                    color={active ? "#B1FA63" : "#CFD6C9"}
                  />
                  <span 
                    className={`text-sm leading-6 tracking-[-0.14px] ${
                      active 
                        ? "font-bold text-[#B1FA63]" 
                        : "font-medium text-[#CFD6C9]"
                    }`}
                  >
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
            <div className="flex flex-col items-start">
              <div className="text-base font-bold leading-6 tracking-[-0.16px] text-[#1E3006]">
                Adam Mid
              </div>
              <div className="text-[13px] leading-4 tracking-[-0.13px] text-[#21231D]">
                Mentor
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] p-8 sm:p-16">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-[30px] font-bold text-[#21231D] leading-[34px] tracking-[-0.75px] mb-1">
            Settings
          </h1>
          <p className="text-base text-[#404040] leading-6 tracking-[-0.16px]">
            Manage your account and preferences
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-[#EAECF0] mb-8">
          <div className="flex items-start gap-4">
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-1 py-[11px] text-sm font-bold leading-5 transition-colors ${
                activeTab === "profile"
                  ? "text-[#6A8042] border-b-2 border-[#6A8042]"
                  : "text-[#8C8C8C]"
              }`}
            >
              Profile Information
            </button>
            <button
              onClick={() => setActiveTab("notifications")}
              className={`px-1 py-[11px] text-sm font-bold leading-5 transition-colors ${
                activeTab === "notifications"
                  ? "text-[#6A8042] border-b-2 border-[#6A8042]"
                  : "text-[#8C8C8C]"
              }`}
            >
              Notifications
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`px-1 py-[11px] text-sm font-bold leading-5 transition-colors ${
                activeTab === "security"
                  ? "text-[#6A8042] border-b-2 border-[#6A8042]"
                  : "text-[#8C8C8C]"
              }`}
            >
              Security
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {/* Profile Information Tab */}
          {activeTab === "profile" && (
            <div className="max-w-[700px]">
              <div className="p-6 rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                <div className="flex items-center gap-2 px-6 mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="#525866" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="#525866" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  <h2 className="text-2xl font-bold text-[#21231D] leading-[120%]">
                    Profile Information
                  </h2>
                </div>

                <div className="p-6 rounded-3xl border border-[rgba(0,0,0,0.08)] bg-white space-y-6">
                  {/* Avatar Upload */}
                  <div className="py-6 space-y-6">
                    <div className="relative w-[62px] h-[62px]">
                      <div className="w-[62px] h-[62px] rounded-full bg-[#C5C5C5] flex items-center justify-center">
                        <img 
                          src="https://api.builder.io/api/v1/image/assets/TEMP/9cf8ccaeaae05f561c273abdb730290aac16a1f5?width=78" 
                          alt="Profile" 
                          className="w-[39px] h-[34px]"
                        />
                      </div>
                      <div className="absolute bottom-0 right-0 w-[17px] h-[17px] rounded-full border-[0.882px] border-white bg-[#00AB3C] flex items-center justify-center">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.04175 5.16602C9.04175 5.25166 9.00773 5.33379 8.94717 5.39435C8.88661 5.45491 8.80447 5.48893 8.71883 5.48893H5.48966V8.7181C5.48966 8.80374 5.45564 8.88588 5.39508 8.94644C5.33453 9.00699 5.25239 9.04102 5.16675 9.04102C5.0811 9.04102 4.99897 9.00699 4.93841 8.94644C4.87785 8.88588 4.84383 8.80374 4.84383 8.7181V5.48893H1.61466C1.52902 5.48893 1.44689 5.45491 1.38633 5.39435C1.32577 5.33379 1.29175 5.25166 1.29175 5.16602C1.29175 5.08037 1.32577 4.99824 1.38633 4.93768C1.44689 4.87712 1.52902 4.8431 1.61466 4.8431H4.84383V1.61393C4.84383 1.52829 4.87785 1.44615 4.93841 1.3856C4.99897 1.32504 5.0811 1.29102 5.16675 1.29102C5.25239 1.29102 5.33453 1.32504 5.39508 1.3856C5.45564 1.44615 5.48966 1.52829 5.48966 1.61393V4.8431H8.71883C8.80447 4.8431 8.88661 4.87712 8.94717 4.93768C9.00773 4.99824 9.04175 5.08037 9.04175 5.16602Z" fill="white"/>
                        </svg>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-2.5">
                      <div className="flex-1 h-px bg-[rgba(0,0,0,0.10)]"></div>
                      <span className="text-xs text-[#8C8C8C] tracking-[-0.24px]">
                        OR SELECT AN AVATAR
                      </span>
                      <div className="flex-1 h-px bg-[rgba(0,0,0,0.10)]"></div>
                    </div>

                    {/* Avatar Grid */}
                    <div className="flex flex-wrap gap-6">
                      {avatars.map((avatar, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedAvatar(index)}
                          className={`w-[62px] h-[62px] rounded-[14px] border transition-all ${
                            selectedAvatar === index
                              ? "border-[#9FE870] bg-[#9FE870] shadow-md"
                              : "border-[#E2E2E2] bg-[#FCFCFC] hover:border-[#9FE870]"
                          }`}
                        >
                          <img src={avatar} alt={`Avatar ${index + 1}`} className="w-full h-full object-cover rounded-[14px]" />
                        </button>
                      ))}
                    </div>

                    <p className="text-sm text-[#8C8C8C] leading-[150%]">
                      This photo will appear on your profile and project submissions
                    </p>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-6">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-[#21231D] leading-[150%] tracking-[-0.28px]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full h-[53px] px-4 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9] text-base text-[#21231D] leading-6 tracking-[-0.16px] focus:outline-none focus:ring-2 focus:ring-[#9FE870]"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-[#21231D] leading-[150%] tracking-[-0.28px]">
                        Phone Number
                      </label>
                      <div className="flex items-center gap-2 h-[53px] px-4 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                        <img 
                          src="https://api.builder.io/api/v1/image/assets/TEMP/6c270b03fdf4c426d84d7f861b008439be573134?width=42" 
                          alt="Flag" 
                          className="w-[21px] h-[21px] rounded-full"
                        />
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="flex-1 bg-transparent text-base text-[#21231D] leading-6 tracking-[-0.16px] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-[#21231D] leading-[150%] tracking-[-0.28px]">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-[53px] px-4 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9] text-base text-[#B3B3B3] leading-6 tracking-[-0.16px] focus:outline-none focus:ring-2 focus:ring-[#9FE870]"
                      />
                    </div>

                    {/* Role */}
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-[#21231D] leading-[150%] tracking-[-0.28px]">
                        Role
                      </label>
                      <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full h-[53px] px-4 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9] text-base text-[#B3B3B3] leading-6 tracking-[-0.16px] focus:outline-none focus:ring-2 focus:ring-[#9FE870]"
                      />
                    </div>

                    {/* Save Button */}
                    <button
                      onClick={handleSaveProfile}
                      className="h-14 px-8 rounded-full bg-[#9FE870] text-base font-bold text-[#1E3006] leading-6 tracking-[-0.16px] hover:bg-[#B1FA63] transition-colors"
                    >
                      Save Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="max-w-[700px] space-y-8">
              {/* Email Notifications */}
              <div className="p-6 rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                <div className="flex items-center gap-2 px-6 mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="#525866" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="#525866" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  <h2 className="text-2xl font-bold text-[#21231D] leading-[120%]">
                    Email Notifications
                  </h2>
                </div>

                <div className="p-6 rounded-3xl border border-[rgba(0,0,0,0.08)] bg-white space-y-6">
                  {/* Class Reminders */}
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#21231D] leading-[150%]">Class Reminders</h3>
                      <p className="text-base text-[#454745] leading-[150%] tracking-[-0.32px]">Get notified 1 hour before classes</p>
                    </div>
                    <button
                      onClick={() => setEmailNotifications(prev => ({ ...prev, classReminders: !prev.classReminders }))}
                      className={`w-9 h-5 rounded-xl flex items-center transition-colors ${
                        emailNotifications.classReminders ? "bg-[#9FE870] justify-end" : "bg-gray-300 justify-start"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full mx-0.5 ${
                        emailNotifications.classReminders ? "bg-[#163300]" : "bg-white"
                      }`}></div>
                    </button>
                  </div>

                  {/* Assignment Deadlines */}
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#21231D] leading-[150%]">Assignment Deadlines</h3>
                      <p className="text-base text-[#454745] leading-[150%] tracking-[-0.32px]">Reminders for upcoming due dates</p>
                    </div>
                    <button
                      onClick={() => setEmailNotifications(prev => ({ ...prev, assignmentDeadlines: !prev.assignmentDeadlines }))}
                      className={`w-9 h-5 rounded-xl flex items-center transition-colors ${
                        emailNotifications.assignmentDeadlines ? "bg-[#9FE870] justify-end" : "bg-gray-300 justify-start"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full mx-0.5 ${
                        emailNotifications.assignmentDeadlines ? "bg-[#163300]" : "bg-white"
                      }`}></div>
                    </button>
                  </div>

                  {/* Feedback & Grades */}
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#21231D] leading-[150%]">Feedback & Grades</h3>
                      <p className="text-base text-[#454745] leading-[150%] tracking-[-0.32px]">When you receive new feedback</p>
                    </div>
                    <button
                      onClick={() => setEmailNotifications(prev => ({ ...prev, feedbackGrades: !prev.feedbackGrades }))}
                      className={`w-9 h-5 rounded-xl flex items-center transition-colors ${
                        emailNotifications.feedbackGrades ? "bg-[#9FE870] justify-end" : "bg-gray-300 justify-start"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full mx-0.5 ${
                        emailNotifications.feedbackGrades ? "bg-[#163300]" : "bg-white"
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Push Notifications */}
              <div className="p-6 rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                <div className="flex items-center gap-2 px-6 mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 19H12.01" stroke="#525866" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.5 2H10.5C8.14298 2 6.96447 2 6.23223 2.73223C5.5 3.46447 5.5 4.64298 5.5 7V17C5.5 19.357 5.5 20.5355 6.23223 21.2678C6.96447 22 8.14298 22 10.5 22H13.5C15.857 22 17.0355 22 17.7678 21.2678C18.5 20.5355 18.5 19.357 18.5 17V7C18.5 4.64298 18.5 3.46447 17.7678 2.73223C17.0355 2 15.857 2 13.5 2Z" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h2 className="text-2xl font-bold text-[#21231D] leading-[120%]">
                    Push Notifications
                  </h2>
                </div>

                <div className="p-6 rounded-3xl border border-[rgba(0,0,0,0.08)] bg-white space-y-6">
                  {/* Study Reminders */}
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#21231D] leading-[150%]">Study Reminders</h3>
                      <p className="text-base text-[#454745] leading-[150%] tracking-[-0.32px]">Daily motivation and study tips</p>
                    </div>
                    <button
                      onClick={() => setPushNotifications(prev => ({ ...prev, studyReminders: !prev.studyReminders }))}
                      className={`w-9 h-5 rounded-xl flex items-center transition-colors ${
                        pushNotifications.studyReminders ? "bg-[#9FE870] justify-end" : "bg-gray-300 justify-start"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full mx-0.5 ${
                        pushNotifications.studyReminders ? "bg-[#163300]" : "bg-white"
                      }`}></div>
                    </button>
                  </div>

                  {/* New Messages */}
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#21231D] leading-[150%]">New Messages</h3>
                      <p className="text-base text-[#454745] leading-[150%] tracking-[-0.32px]">From PM, teammates, and AI assistant</p>
                    </div>
                    <button
                      onClick={() => setPushNotifications(prev => ({ ...prev, newMessages: !prev.newMessages }))}
                      className={`w-9 h-5 rounded-xl flex items-center transition-colors ${
                        pushNotifications.newMessages ? "bg-[#9FE870] justify-end" : "bg-gray-300 justify-start"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full mx-0.5 ${
                        pushNotifications.newMessages ? "bg-[#163300]" : "bg-white"
                      }`}></div>
                    </button>
                  </div>

                  {/* Project Deadlines */}
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#21231D] leading-[150%]">Project Deadlines</h3>
                      <p className="text-base text-[#454745] leading-[150%] tracking-[-0.32px]">24h and 1h before deadlines</p>
                    </div>
                    <button
                      onClick={() => setPushNotifications(prev => ({ ...prev, projectDeadlines: !prev.projectDeadlines }))}
                      className={`w-9 h-5 rounded-xl flex items-center transition-colors ${
                        pushNotifications.projectDeadlines ? "bg-[#9FE870] justify-end" : "bg-gray-300 justify-start"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full mx-0.5 ${
                        pushNotifications.projectDeadlines ? "bg-[#163300]" : "bg-white"
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Parent Notifications */}
              <div className="p-6 rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                <div className="flex items-center gap-2 px-6 mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 18C15.5 19.933 13.933 21.5 12 21.5C10.067 21.5 8.5 19.933 8.5 18" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.2311 18H4.76887C3.79195 18 3 17.208 3 16.2311C3 15.762 3.18636 15.3121 3.51809 14.9803L4.12132 14.3771C4.68393 13.8145 5 13.0514 5 12.2558V9.5C5 5.63401 8.13401 2.5 12 2.5C15.866 2.5 19 5.634 19 9.5V12.2558C19 13.0514 19.3161 13.8145 19.8787 14.3771L20.4819 14.9803C20.8136 15.3121 21 15.762 21 16.2311C21 17.208 20.208 18 19.2311 18Z" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h2 className="text-2xl font-bold text-[#121511] leading-[120%]">
                    Parent Notifications
                  </h2>
                </div>

                <div className="p-6 rounded-3xl border border-[rgba(0,0,0,0.08)] bg-white space-y-6">
                  {/* Activity Notifications */}
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#121511] leading-[150%]">Activity Notifications</h3>
                      <p className="text-base text-[#454745] leading-[150%] tracking-[-0.32px]">Get updates on badges earned, projects completed, and milestones</p>
                    </div>
                    <button
                      onClick={() => setParentNotifications(prev => ({ ...prev, activityNotifications: !prev.activityNotifications }))}
                      className={`w-9 h-5 rounded-xl flex items-center transition-colors ${
                        parentNotifications.activityNotifications ? "bg-[#9FE870] justify-end" : "bg-gray-300 justify-start"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full mx-0.5 ${
                        parentNotifications.activityNotifications ? "bg-[#163300]" : "bg-white"
                      }`}></div>
                    </button>
                  </div>

                  {/* Notification Email */}
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#404040] leading-[150%] tracking-[-0.28px]">
                      Notification Email
                    </label>
                    <input
                      type="email"
                      value={parentEmail}
                      onChange={(e) => setParentEmail(e.target.value)}
                      className="w-full h-[53px] px-4 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9] text-base text-[#B3B3B3] leading-6 tracking-[-0.16px] focus:outline-none focus:ring-2 focus:ring-[#9FE870]"
                    />
                  </div>

                  {/* Save Button */}
                  <button
                    onClick={handleSaveNotifications}
                    className="h-14 px-8 rounded-full bg-[#9FE870] text-base font-bold text-[#1E3006] leading-6 tracking-[-0.16px] hover:bg-[#B1FA63] transition-colors"
                  >
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="max-w-[700px]">
              <div className="p-6 rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                <div className="flex items-center gap-2 px-6 mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15Z" stroke="#525866" strokeWidth="1.5"/>
                    <path d="M16.5 9.5V6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5V9.5" stroke="#525866" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M12 15H12.009" stroke="#525866" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h2 className="text-2xl font-bold text-[#21231D] leading-[120%]">
                    Change your password
                  </h2>
                </div>

                <div className="p-6 rounded-3xl border border-[rgba(0,0,0,0.08)] bg-white space-y-8">
                  <div className="space-y-6">
                    {/* Current Password */}
                    <div className="space-y-2">
                      <div className="space-y-1.5">
                        <label className="block text-sm font-semibold text-[#21231D] leading-[150%] tracking-[-0.28px]">
                          Current Password
                        </label>
                        <div className="flex items-center gap-2 h-[53px] px-4 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                          <input
                            type={showCurrentPassword ? "text" : "password"}
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            placeholder="Enter your current password"
                            className="flex-1 bg-transparent text-base text-[#21231D] placeholder:text-[#B3B3B3] leading-6 tracking-[-0.16px] focus:outline-none"
                          />
                          <button
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            className="w-4 h-4"
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.7426 6.486L13.7139 6C13.2155 7.11418 12.4055 8.0604 11.3815 8.72459C10.3574 9.38879 9.16314 9.74258 7.94258 9.74333C6.72201 9.74258 5.52772 9.38879 4.5037 8.72459C3.47967 8.0604 2.66963 7.11418 2.17124 6L1.14258 6.486C1.532 7.32375 2.0639 8.08753 2.71458 8.74333L1.62791 10.0573L2.51458 10.8L3.59991 9.48667C3.99991 9.77267 4.42858 10.0293 4.85724 10.2293L4.28591 11.8293L5.37125 12.2293L5.94258 10.6293C6.40663 10.7726 6.88636 10.859 7.37125 10.8867V12.6H8.51391V10.8867C8.9988 10.859 9.47853 10.7726 9.94258 10.6293L10.5139 12.2293L11.6006 11.8293L11.0286 10.2293C11.4859 10.0293 11.8859 9.77267 12.2859 9.48667L13.3712 10.8007L14.2572 10.058L13.1712 8.744C13.8286 8.08667 14.3712 7.34333 14.7426 6.486Z" fill="#21231D"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <button className="text-xs text-[#6A8042] font-medium leading-[150%] tracking-[-0.24px]">
                        Forgot Password?
                      </button>
                    </div>

                    {/* New Password */}
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-[#21231D] leading-[150%] tracking-[-0.28px]">
                        New Password
                      </label>
                      <div className="flex items-center gap-2 h-[53px] px-4 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Enter your new password"
                          className="flex-1 bg-transparent text-base text-[#21231D] placeholder:text-[#B3B3B3] leading-6 tracking-[-0.16px] focus:outline-none"
                        />
                        <button
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="w-4 h-4"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7426 6.486L13.7139 6C13.2155 7.11418 12.4055 8.0604 11.3815 8.72459C10.3574 9.38879 9.16314 9.74258 7.94258 9.74333C6.72201 9.74258 5.52772 9.38879 4.5037 8.72459C3.47967 8.0604 2.66963 7.11418 2.17124 6L1.14258 6.486C1.532 7.32375 2.0639 8.08753 2.71458 8.74333L1.62791 10.0573L2.51458 10.8L3.59991 9.48667C3.99991 9.77267 4.42858 10.0293 4.85724 10.2293L4.28591 11.8293L5.37125 12.2293L5.94258 10.6293C6.40663 10.7726 6.88636 10.859 7.37125 10.8867V12.6H8.51391V10.8867C8.9988 10.859 9.47853 10.7726 9.94258 10.6293L10.5139 12.2293L11.6006 11.8293L11.0286 10.2293C11.4859 10.0293 11.8859 9.77267 12.2859 9.48667L13.3712 10.8007L14.2572 10.058L13.1712 8.744C13.8286 8.08667 14.3712 7.34333 14.7426 6.486Z" fill="#21231D"/>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Confirm New Password */}
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-[#21231D] leading-[150%] tracking-[-0.28px]">
                        Confirm New Password
                      </label>
                      <div className="flex items-center gap-2 h-[53px] px-4 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#F9FAF9]">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Password must match"
                          className="flex-1 bg-transparent text-base text-[#21231D] placeholder:text-[#B3B3B3] leading-6 tracking-[-0.16px] focus:outline-none"
                        />
                        <button
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="w-4 h-4"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7426 6.486L13.7139 6C13.2155 7.11418 12.4055 8.0604 11.3815 8.72459C10.3574 9.38879 9.16314 9.74258 7.94258 9.74333C6.72201 9.74258 5.52772 9.38879 4.5037 8.72459C3.47967 8.0604 2.66963 7.11418 2.17124 6L1.14258 6.486C1.532 7.32375 2.0639 8.08753 2.71458 8.74333L1.62791 10.0573L2.51458 10.8L3.59991 9.48667C3.99991 9.77267 4.42858 10.0293 4.85724 10.2293L4.28591 11.8293L5.37125 12.2293L5.94258 10.6293C6.40663 10.7726 6.88636 10.859 7.37125 10.8867V12.6H8.51391V10.8867C8.9988 10.859 9.47853 10.7726 9.94258 10.6293L10.5139 12.2293L11.6006 11.8293L11.0286 10.2293C11.4859 10.0293 11.8859 9.77267 12.2859 9.48667L13.3712 10.8007L14.2572 10.058L13.1712 8.744C13.8286 8.08667 14.3712 7.34333 14.7426 6.486Z" fill="#21231D"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Update Password Button */}
                  <button
                    onClick={handleUpdatePassword}
                    className="h-14 px-8 rounded-full bg-[#9FE870] text-base font-bold text-[#1E3006] leading-6 tracking-[-0.16px] hover:bg-[#B1FA63] transition-colors"
                  >
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
