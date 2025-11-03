import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, BookOpen, Lightbulb, Mail, TrendingUp, Settings, Search, Filter, ChevronDown, Plus, Calendar, Star, Paperclip, MessageCircle, MoreVertical } from "lucide-react";
import { useState } from "react";
import AddProjectModal from "@/components/AddProjectModal";

interface Project {
  id: string;
  date: string;
  title: string;
  description: string;
  week: string;
  points: string;
  attachments: number;
  comments: number;
  avatars: string[];
  status: "not-started" | "in-progress" | "completed";
}

export default function MentorProjects() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/mentor-dashboard", icon: Home },
    { id: "students", label: "Students", path: "/mentor-students", icon: Users },
    { id: "curriculum", label: "Curriculum", path: "/mentor-curriculum", icon: BookOpen },
    { id: "projects", label: "Projects", path: "/mentor-projects", icon: Lightbulb },
    { id: "messages", label: "Messages", path: "/mentor-messages", icon: Mail },
    { id: "analytics", label: "Analytics", path: "/mentor-analytics", icon: TrendingUp },
    { id: "settings", label: "Settings", path: "/mentor-settings", icon: Settings },
  ];

  const projects: Project[] = [
    {
      id: "1",
      date: "May 26, 2025",
      title: "Design Home page W...",
      description: "Discuss layout with the marketing...",
      week: "Week 2",
      points: "210 points",
      attachments: 3,
      comments: 6,
      avatars: [
        "https://api.builder.io/api/v1/image/assets/TEMP/0a653318ef0e0c8020b2673584639756385fcbf2?width=56",
        "https://api.builder.io/api/v1/image/assets/TEMP/ff834db571874dfddcf0bec0355024441cb9cdaa?width=56",
        "https://api.builder.io/api/v1/image/assets/TEMP/19724caf79e4608993fcd73873b87b5820ea0862?width=56"
      ],
      status: "not-started"
    },
    {
      id: "2",
      date: "May 27, 2025",
      title: "Develop User Profiles",
      description: "Finalize user persona details and interactions",
      week: "Week 2",
      points: "190 points",
      attachments: 4,
      comments: 7,
      avatars: [
        "https://api.builder.io/api/v1/image/assets/TEMP/ff834db571874dfddcf0bec0355024441cb9cdaa?width=56",
        "https://api.builder.io/api/v1/image/assets/TEMP/19724caf79e4608993fcd73873b87b5820ea0862?width=56"
      ],
      status: "not-started"
    },
    {
      id: "3",
      date: "May 28, 2025",
      title: "Create Wireframes",
      description: "Draft initial wireframes for user feedback",
      week: "Week 3",
      points: "230 points",
      attachments: 5,
      comments: 8,
      avatars: [
        "https://api.builder.io/api/v1/image/assets/TEMP/19724caf79e4608993fcd73873b87b5820ea0862?width=56"
      ],
      status: "not-started"
    },
    {
      id: "4",
      date: "May 29, 2025",
      title: "Conduct User Testing",
      description: "Gather insights from users on wireframes",
      week: "Week 3",
      points: "200 points",
      attachments: 3,
      comments: 5,
      avatars: [
        "https://api.builder.io/api/v1/image/assets/TEMP/19724caf79e4608993fcd73873b87b5820ea0862?width=56"
      ],
      status: "not-started"
    },
    {
      id: "5",
      date: "May 26, 2025",
      title: "Design Home page W...",
      description: "Discuss layout with the marketing...",
      week: "Week 2",
      points: "210 points",
      attachments: 3,
      comments: 6,
      avatars: [
        "https://api.builder.io/api/v1/image/assets/TEMP/0a653318ef0e0c8020b2673584639756385fcbf2?width=56",
        "https://api.builder.io/api/v1/image/assets/TEMP/ff834db571874dfddcf0bec0355024441cb9cdaa?width=56",
        "https://api.builder.io/api/v1/image/assets/TEMP/19724caf79e4608993fcd73873b87b5820ea0862?width=56"
      ],
      status: "in-progress"
    },
    {
      id: "6",
      date: "May 27, 2025",
      title: "Develop User Profiles",
      description: "Finalize user persona details and interactions",
      week: "Week 2",
      points: "190 points",
      attachments: 4,
      comments: 7,
      avatars: [
        "https://api.builder.io/api/v1/image/assets/TEMP/ff834db571874dfddcf0bec0355024441cb9cdaa?width=56",
        "https://api.builder.io/api/v1/image/assets/TEMP/19724caf79e4608993fcd73873b87b5820ea0862?width=56"
      ],
      status: "in-progress"
    },
    {
      id: "7",
      date: "June 4, 2025",
      title: "User Testing",
      description: "Conduct user testing sessions to gather insights",
      week: "Week 4",
      points: "150 points",
      attachments: 4,
      comments: 10,
      avatars: [
        "https://api.builder.io/api/v1/image/assets/TEMP/19724caf79e4608993fcd73873b87b5820ea0862?width=56"
      ],
      status: "in-progress"
    },
    {
      id: "8",
      date: "June 18, 2025",
      title: "Design Review",
      description: "Review final designs with stakeholders",
      week: "Week 6",
      points: "100 points",
      attachments: 2,
      comments: 3,
      avatars: [
        "https://api.builder.io/api/v1/image/assets/TEMP/19724caf79e4608993fcd73873b87b5820ea0862?width=56"
      ],
      status: "in-progress"
    },
    {
      id: "9",
      date: "May 26, 2025",
      title: "Design Home page W...",
      description: "Discuss layout with the marketing...",
      week: "Week 2",
      points: "210 points",
      attachments: 3,
      comments: 6,
      avatars: [
        "https://api.builder.io/api/v1/image/assets/TEMP/0a653318ef0e0c8020b2673584639756385fcbf2?width=56",
        "https://api.builder.io/api/v1/image/assets/TEMP/ff834db571874dfddcf0bec0355024441cb9cdaa?width=56",
        "https://api.builder.io/api/v1/image/assets/TEMP/19724caf79e4608993fcd73873b87b5820ea0862?width=56"
      ],
      status: "completed"
    },
    {
      id: "10",
      date: "May 27, 2025",
      title: "Develop User Profiles",
      description: "Finalize user persona details and interactions",
      week: "Week 2",
      points: "190 points",
      attachments: 4,
      comments: 7,
      avatars: [
        "https://api.builder.io/api/v1/image/assets/TEMP/ff834db571874dfddcf0bec0355024441cb9cdaa?width=56",
        "https://api.builder.io/api/v1/image/assets/TEMP/19724caf79e4608993fcd73873b87b5820ea0862?width=56"
      ],
      status: "completed"
    },
    {
      id: "11",
      date: "June 11, 2025",
      title: "Finalize Designs",
      description: "Refine designs based on user feedback",
      week: "Week 5",
      points: "200 points",
      attachments: 3,
      comments: 6,
      avatars: [
        "https://api.builder.io/api/v1/image/assets/TEMP/19724caf79e4608993fcd73873b87b5820ea0862?width=56"
      ],
      status: "completed"
    },
    {
      id: "12",
      date: "June 25, 2025",
      title: "Prepare for Development",
      description: "Create handoff documents for developers",
      week: "Week 7",
      points: "150 points",
      attachments: 2,
      comments: 4,
      avatars: [
        "https://api.builder.io/api/v1/image/assets/TEMP/19724caf79e4608993fcd73873b87b5820ea0862?width=56"
      ],
      status: "completed"
    }
  ];

  const isActive = (itemPath: string) => location.pathname === itemPath;

  const notStartedProjects = projects.filter(p => p.status === "not-started");
  const inProgressProjects = projects.filter(p => p.status === "in-progress");
  const completedProjects = projects.filter(p => p.status === "completed");

  const ProjectCard = ({ project, isCompleted = false }: { project: Project; isCompleted?: boolean }) => (
    <div className="flex flex-col gap-6 p-6 rounded-[20px] border border-black/10 bg-white">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-[7px]">
          <Calendar className="w-[18px] h-[18px] text-[#404040]" strokeWidth={0.875} />
          <span className="text-[#404040] font-satoshi text-base font-normal leading-6 tracking-[-0.16px]">
            {project.date}
          </span>
        </div>
        
        <div className="flex flex-col gap-0.5">
          <div className="flex justify-between items-start">
            <h3 className={`text-[#0E121B] font-[Random_Grotesque_Standard_Bold] text-[26px] font-bold leading-8 tracking-[-0.39px] ${isCompleted ? 'line-through' : ''}`}>
              {project.title}
            </h3>
            <button className="w-6 h-6 flex items-center justify-center text-[#0E121B]">
              <MoreVertical className="w-6 h-6" strokeWidth={2.5} />
            </button>
          </div>
          <p className="text-[#404040] font-satoshi text-lg font-normal leading-7 tracking-[-0.18px]">
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2">
        <div className="flex justify-center items-center gap-1">
          <Calendar className="w-[14px] h-[14px] text-[#8C8C8C]" strokeWidth={0.875} />
          <span className="text-[#8C8C8C] text-center font-satoshi text-base font-normal leading-6 tracking-[-0.16px]">
            {project.week}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-[14px] h-[14px] text-[#FFCA26]" strokeWidth={1.5} />
          <span className="text-[#8C8C8C] text-center font-satoshi text-base font-normal leading-6 tracking-[-0.16px]">
            {project.points}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-[25px] border border-black/10 bg-[#F9FAF9]">
            <Paperclip className="w-[18px] h-[18px] text-[#404040]" strokeWidth={1.125} />
            <span className="text-[#404040] font-satoshi text-sm font-normal leading-[150%] tracking-[-0.084px]">
              {project.attachments}
            </span>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-[25px] border border-black/10 bg-[#F9FAF9]">
            <MessageCircle className="w-[18px] h-[18px] text-[#404040]" strokeWidth={1.125} />
            <span className="text-[#404040] font-satoshi text-sm font-normal leading-[150%] tracking-[-0.084px]">
              {project.comments}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-[-14px]">
          {project.avatars.map((avatar, index) => (
            <div key={index} className="w-7 h-7 flex items-center justify-center -ml-3.5 first:ml-0">
              <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
                <img 
                  src={avatar} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#1E3006] p-3 sm:p-6">
      {/* Header Navigation */}
      <div className="max-w-[1440px] mx-auto mb-6 px-4 sm:px-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Logo */}
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9bc7f4c3957329926c45ba3e1d6104debeb9620d?width=112" 
            alt="Logo" 
            className="w-14 h-14"
          />

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-6">
            {navItems.map((item) => {
              const active = isActive(item.path);
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-1 h-12 px-4 rounded-full text-sm transition-all ${
                    active
                      ? "bg-[rgba(159,232,112,0.2)] text-[#B1FA63] font-bold"
                      : "text-[#CFD6C9] opacity-80 hover:opacity-100"
                  }`}
                >
                  <Icon className="w-[18px] h-[18px]" strokeWidth={1.25} />
                  <span className="font-satoshi">{item.label}</span>
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
              <div className="text-[#1E3006] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">
                Adam Mid
              </div>
              <div className="text-[#21231D] font-[DM_Sans] text-[13px] font-normal leading-4 tracking-[-0.13px]">
                Mentor
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] p-8 sm:p-16">
        {/* Page Header */}
        <div className="flex flex-col gap-5 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="flex flex-col gap-1 flex-1">
                <h1 className="text-black font-[Random_Grotesque_Standard_Bold] text-[30px] font-bold leading-[34px] tracking-[-0.75px]">
                  Projects 💡
                </h1>
                <p className="text-[#404040] font-satoshi text-base font-normal leading-6 tracking-[-0.16px]">
                  Your creative workspace
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 h-14 px-8 rounded-full bg-[#9FE870] hover:bg-[#8ed65f] transition-colors"
              >
                <Plus className="w-5 h-5 text-[#1E3006]" strokeWidth={2} />
                <span className="text-[#1E3006] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">
                  Create New Project
                </span>
              </button>
            </div>
          </div>
          
          <div className="h-px bg-black/10" />
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-start gap-2">
            <Search className="w-6 h-6 text-[#8C8C8C]" strokeWidth={1.5} />
            <div className="flex items-center px-3 py-1 rounded-2xl bg-[#F9FAF9]">
              <span className="text-[#404040] font-satoshi text-sm font-medium leading-5">All</span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-2xl bg-[#F9FAF9]">
              <span className="text-[#404040] font-satoshi text-sm font-medium leading-5">Private Tasks</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-6 h-6 text-[#404040]" strokeWidth={1.5} />
            <span className="text-[#404040] font-satoshi text-base font-normal leading-6 tracking-[-0.16px]">
              Filters
            </span>
            <ChevronDown className="w-6 h-6 text-[#404040]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Kanban Board */}
        <div className="flex flex-col lg:flex-row gap-4 p-4 rounded-[32px] bg-[#F9FAF9]">
          {/* Not Started Column */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-black font-satoshi text-xl font-bold leading-7 tracking-[-0.4px]">
                Not Started
              </h2>
              <div className="flex items-center gap-1.5 px-[7px] py-1 rounded-lg bg-[rgba(168,32,13,0.2)]">
                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.4974 0.65625C3.81956 0.65625 4.08073 0.917417 4.08073 1.23958V2.40625C4.08073 2.72842 3.81956 2.98958 3.4974 2.98958C3.17523 2.98958 2.91406 2.72842 2.91406 2.40625V1.23958C2.91406 0.917417 3.17523 0.65625 3.4974 0.65625ZM6.41406 0.65625C6.73623 0.65625 6.9974 0.917417 6.9974 1.23958V2.40625C6.9974 2.72842 6.73623 2.98958 6.41406 2.98958C6.0919 2.98958 5.83073 2.72842 5.83073 2.40625V1.23958C5.83073 0.917417 6.0919 0.65625 6.41406 0.65625ZM9.33073 0.65625C9.6529 0.65625 9.91406 0.917417 9.91406 1.23958V2.40625C9.91406 2.72842 9.6529 2.98958 9.33073 2.98958C9.00856 2.98958 8.7474 2.72842 8.7474 2.40625V1.23958C8.7474 0.917417 9.00856 0.65625 9.33073 0.65625Z" fill="#A8200D"/>
                  <path opacity="0.4" d="M5.50663 1.38574H7.32167C8.25651 1.38573 9.00258 1.38572 9.5877 1.46439C10.1922 1.54566 10.69 1.71804 11.0838 2.11187C11.4777 2.50571 11.6501 3.00353 11.7313 3.60802C11.81 4.19315 11.81 4.93921 11.81 5.87406V6.69222C11.81 6.80485 11.81 6.86117 11.7515 6.91335C11.693 6.96554 11.6232 6.95757 11.4834 6.94162C11.0226 6.88901 10.5489 6.9825 10.1339 7.2221C9.87792 7.36989 9.66725 7.58178 9.52972 7.72011L7.53966 9.71034C7.11086 10.1391 6.93094 10.6389 6.83714 11.0063C6.79228 11.182 6.76137 11.352 6.73815 11.4859C6.71607 11.5906 6.67908 11.7782 6.6459 11.9595C6.61553 12.1254 6.57279 12.3668 6.56406 12.5041C6.55606 12.6299 6.55463 12.8282 6.60984 13.0513C6.63564 13.1556 6.64855 13.2078 6.59718 13.2746C6.54581 13.3415 6.51138 13.3421 6.44252 13.3433C6.39819 13.3441 6.34771 13.3441 6.29036 13.3441H5.50663C4.57178 13.3441 3.82572 13.3441 3.24059 13.2654C2.6361 13.1842 2.13827 13.0118 1.74444 12.6179C1.35061 12.2241 1.17823 11.7263 1.09696 11.1218C1.01829 10.5367 1.0183 9.79061 1.01831 8.85577V5.87405C1.0183 4.93921 1.01829 4.19315 1.09696 3.60802C1.17823 3.00353 1.35061 2.50571 1.74444 2.11187C2.13827 1.71804 2.6361 1.54566 3.24059 1.46439C3.82572 1.38572 4.57179 1.38573 5.50663 1.38574Z" fill="#A8200D"/>
                </svg>
                <span className="text-[#A8200D] font-satoshi text-xs font-medium leading-4">8</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              {notStartedProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* In Progress Column */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-black font-satoshi text-xl font-bold leading-7 tracking-[-0.4px]">
                In Progress
              </h2>
              <div className="flex items-center gap-1.5 px-[7px] py-1 rounded-lg bg-[rgba(237,200,67,0.2)]">
                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.99837 1.16602C7.32055 1.16602 7.58171 1.42719 7.58171 1.74935V3.49935C7.58171 3.82151 7.32055 4.08268 6.99837 4.08268C6.6762 4.08268 6.41504 3.82151 6.41504 3.49935V1.74935C6.41504 1.42719 6.6762 1.16602 6.99837 1.16602Z" fill="#EDC843"/>
                  <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M6.99837 9.91602C7.32055 9.91602 7.58171 10.1772 7.58171 10.4993V12.2493C7.58171 12.5715 7.32055 12.8327 6.99837 12.8327C6.6762 12.8327 6.41504 12.5715 6.41504 12.2493V10.4993C6.41504 10.1772 6.6762 9.91602 6.99837 9.91602Z" fill="#EDC843"/>
                </svg>
                <span className="text-[#EDC843] font-satoshi text-xs font-medium leading-4">2</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              {inProgressProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Completed Column */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-black font-satoshi text-xl font-bold leading-7 tracking-[-0.4px]">
                Completed
              </h2>
              <div className="flex items-center gap-1.5 px-[7px] py-1 rounded-lg bg-[rgba(47,87,17,0.2)]">
                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.21467 0.717877C8.26655 0.77689 8.2554 0.867205 8.23309 1.04783L8.19965 1.31864C8.14046 1.67369 8.10154 1.90136 8.05186 2.06822C8.00524 2.22481 7.9636 2.27458 7.93056 2.30257C7.89751 2.33056 7.84157 2.36346 7.67945 2.3837C7.50522 2.40545 7.27178 2.40625 6.90653 2.40625H5.78814C5.4229 2.40625 5.18946 2.40545 5.01522 2.3837C4.8531 2.36346 4.79716 2.33056 4.76412 2.30257C4.73108 2.27458 4.68943 2.22481 4.64281 2.06822C4.5932 1.90157 4.55431 1.67427 4.49525 1.32L4.46312 1.04568C4.44207 0.86592 4.43155 0.776041 4.4834 0.71744C4.53525 0.658838 4.62518 0.658343 4.80504 0.657352C5.00584 0.656246 5.21692 0.656248 5.43833 0.65625H7.25649C7.47848 0.656248 7.69022 0.656246 7.8915 0.657361C8.07236 0.658363 8.16279 0.658864 8.21467 0.717877Z" fill="#2F5711"/>
                  <path opacity="0.4" d="M3.49344 0.749387C3.5514 0.794385 3.56081 0.874741 3.57963 1.03545L3.62622 1.43336L3.62899 1.45C3.68262 1.77195 3.73658 2.09589 3.80298 2.31892C3.87576 2.56337 3.9856 2.79187 4.19734 2.97124C4.40907 3.15061 4.65252 3.22139 4.90561 3.25299C5.14051 3.28232 5.42921 3.2823 5.76112 3.28228H6.93114C7.26306 3.2823 7.55175 3.28232 7.78665 3.25299C8.03974 3.22139 8.28319 3.15061 8.49493 2.97124C8.70667 2.79187 8.81651 2.56337 8.88928 2.31892C8.95595 2.095 9.00977 1.77194 9.0636 1.4488L9.06572 1.4361L9.11542 1.03363C9.13515 0.873885 9.14501 0.794013 9.20288 0.749395C9.26075 0.704776 9.33737 0.715126 9.49063 0.735826L9.52284 0.74028C10.1316 0.826427 10.631 1.00948 11.0238 1.42292C11.4136 1.83319 11.5834 2.34963 11.6638 2.97942C11.7421 3.59239 11.7421 4.37518 11.7421 5.36179L11.7418 7.75335C11.7418 7.86285 11.7418 7.9176 11.7157 7.95986C11.6896 8.00212 11.6377 8.02813 11.5339 8.08016C11.0549 8.32023 10.6266 8.6445 10.2691 8.95796C9.78776 9.38011 9.34833 9.86037 8.98493 10.296C8.95317 10.3341 8.93729 10.3531 8.92202 10.3648C8.87712 10.3994 8.82951 10.4096 8.7744 10.3964C8.75567 10.3919 8.73086 10.3797 8.68123 10.3555C8.55165 10.2921 8.42638 10.2451 8.30813 10.2112L8.30754 10.211L8.30531 10.2104C8.28534 10.2046 8.0444 10.1364 7.80575 10.1364C7.00033 10.1364 6.34741 10.7893 6.34741 11.5947C6.34741 12.249 6.77781 12.8021 7.37132 12.9871C7.39192 12.9935 7.40262 12.9952 7.41587 13.0122C7.47219 13.0847 7.42256 13.1989 7.33082 13.1989H5.43726C4.50369 13.199 3.75633 13.199 3.16971 13.1159C2.56099 13.0298 2.06151 12.8467 1.66874 12.4333C1.27899 12.023 1.10916 11.5066 1.02872 10.8768C0.950426 10.2638 0.950432 9.48104 0.95044 8.49444V5.36177C0.950432 4.37517 0.950426 3.59238 1.02872 2.97942C1.10916 2.34963 1.27899 1.83319 1.66874 1.42292C2.06151 1.00948 2.56099 0.826427 3.16971 0.74028L3.20434 0.735499C3.35844 0.714759 3.43549 0.704389 3.49344 0.749387Z" fill="#2F5711"/>
                </svg>
                <span className="text-[#2F5711] font-satoshi text-xs font-medium leading-4">1</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              {completedProjects.map(project => (
                <ProjectCard key={project.id} project={project} isCompleted />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Project Modal */}
      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
