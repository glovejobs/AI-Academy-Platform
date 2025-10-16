import { useNavigate, useLocation } from "react-router-dom";
import { Plus, Search, SlidersHorizontal, ChevronDown, Lightbulb, Paperclip, MessageSquare, Calendar, Star, MoreHorizontal, Edit, CheckCircle, X } from "lucide-react";
import { useState } from "react";

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

const projectsData: Project[] = [
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
      "https://api.builder.io/api/v1/image/assets/TEMP/85823bac4870a217ee82f227834138972e91c322?width=56",
      "https://api.builder.io/api/v1/image/assets/TEMP/12de1f2dc6a47f206876224ee428649a229f8494?width=56",
      "https://api.builder.io/api/v1/image/assets/TEMP/01d10ed13e5328b2307036c21976fe5264d279c6?width=56"
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
      "https://api.builder.io/api/v1/image/assets/TEMP/12de1f2dc6a47f206876224ee428649a229f8494?width=56",
      "https://api.builder.io/api/v1/image/assets/TEMP/01d10ed13e5328b2307036c21976fe5264d279c6?width=56"
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
      "https://api.builder.io/api/v1/image/assets/TEMP/01d10ed13e5328b2307036c21976fe5264d279c6?width=56"
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
      "https://api.builder.io/api/v1/image/assets/TEMP/01d10ed13e5328b2307036c21976fe5264d279c6?width=56"
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
      "https://api.builder.io/api/v1/image/assets/TEMP/71e7611102042c0bdac00e262035f18971ee65c6?width=56",
      "https://api.builder.io/api/v1/image/assets/TEMP/c43a77021aabe76c72425c83b76e99905a93024c?width=56",
      "https://api.builder.io/api/v1/image/assets/TEMP/c579552188b6c5535323f834047002734a5686c6?width=56"
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
      "https://api.builder.io/api/v1/image/assets/TEMP/c43a77021aabe76c72425c83b76e99905a93024c?width=56",
      "https://api.builder.io/api/v1/image/assets/TEMP/c579552188b6c5535323f834047002734a5686c6?width=56"
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
      "https://api.builder.io/api/v1/image/assets/TEMP/c579552188b6c5535323f834047002734a5686c6?width=56"
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
      "https://api.builder.io/api/v1/image/assets/TEMP/c579552188b6c5535323f834047002734a5686c6?width=56"
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
      "https://api.builder.io/api/v1/image/assets/TEMP/1f83afd4a6162d5590f1779ee341330995ae1156?width=56",
      "https://api.builder.io/api/v1/image/assets/TEMP/ba7ed6ec733d892fca605796905a65249da61568?width=56",
      "https://api.builder.io/api/v1/image/assets/TEMP/7b34dc2e0260a9e061c8a130bb2a0bf744520c5c?width=56"
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
      "https://api.builder.io/api/v1/image/assets/TEMP/ba7ed6ec733d892fca605796905a65249da61568?width=56",
      "https://api.builder.io/api/v1/image/assets/TEMP/7b34dc2e0260a9e061c8a130bb2a0bf744520c5c?width=56"
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
      "https://api.builder.io/api/v1/image/assets/TEMP/7b34dc2e0260a9e061c8a130bb2a0bf744520c5c?width=56"
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
      "https://api.builder.io/api/v1/image/assets/TEMP/7b34dc2e0260a9e061c8a130bb2a0bf744520c5c?width=56"
    ],
    status: "completed"
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-[20px] border border-black/[0.05] p-8 flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-[18px] h-[18px] text-[#404040]" strokeWidth={1.5} />
            <span className="text-base text-[#404040] leading-6">{project.date}</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex justify-between items-start">
              <h3 className={`text-[26px] font-bold leading-8 ${project.status === 'completed' ? 'line-through text-[#0E121B]' : 'text-[#0E121B]'}`} style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                {project.title}
              </h3>
              <button className="p-0 -rotate-90">
                <MoreHorizontal className="w-6 h-6 text-[#0E121B]" strokeWidth={2.5} />
              </button>
            </div>
            <p className="text-lg text-[#404040] leading-7">{project.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#8C8C8C]" strokeWidth={1.5} />
            <span className="text-base text-[#8C8C8C] leading-6">{project.week}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-[#FFCA26]" strokeWidth={1.5} />
            <span className="text-base text-[#8C8C8C] leading-6">{project.points}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-[25px] border border-black/[0.05] bg-[#FAFAFA]">
              <Paperclip className="w-[18px] h-[18px] text-[#404040]" strokeWidth={1.5} />
              <span className="text-sm text-[#404040] leading-[21px]">{project.attachments}</span>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-[25px] border border-black/[0.05] bg-[#FAFAFA]">
              <MessageSquare className="w-[18px] h-[18px] text-[#404040]" strokeWidth={1.5} />
              <span className="text-sm text-[#404040] leading-[21px]">{project.comments}</span>
            </div>
          </div>
          <div className="flex items-start -space-x-3.5">
            {project.avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt=""
                className="w-7 h-7 rounded-full border-2 border-white"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CreateProjectModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/10 flex items-start justify-end z-50" onClick={onClose}>
      <div
        className="bg-[#FAFAFA] rounded-[32px] p-8 m-4 w-full max-w-[700px] h-[calc(100vh-32px)] flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-4 flex-1">
                <div className="flex flex-col gap-1 flex-1">
                  <h2 className="text-[30px] font-bold text-black leading-[34px]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    Create New Project
                  </h2>
                  <p className="text-base text-[#404040] leading-6">Your creative workspace</p>
                </div>
                <button onClick={onClose} className="p-0">
                  <X className="w-8 h-8 text-[#1E1E1E]" strokeWidth={1.5} />
                </button>
              </div>
            </div>
            <div className="h-px bg-black/[0.05]" />
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4 p-6 rounded-[20px] border border-black/[0.05] bg-white">
            {/* Project Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-black leading-[21px]" style={{ fontFamily: 'Random Grotesque Standard Semibold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Project Name*
              </label>
              <input
                type="text"
                placeholder="Give your project a creative name"
                className="h-[53px] px-4 rounded-full border border-black/[0.05] bg-[#FAFAFA] text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#EE7A13]/20"
              />
            </div>

            {/* Bucket, Progress, Priority */}
            <div className="flex gap-4">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-sm font-semibold text-black leading-[21px]" style={{ fontFamily: 'Random Grotesque Standard Semibold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Bucket
                </label>
                <div className="relative">
                  <select className="w-full h-[53px] px-4 pr-10 rounded-full border border-black/[0.05] bg-[#FAFAFA] text-base text-[#B3B3B3] appearance-none focus:outline-none focus:ring-2 focus:ring-[#EE7A13]/20">
                    <option>Select</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-sm font-semibold text-black leading-[21px]" style={{ fontFamily: 'Random Grotesque Standard Semibold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Progress
                </label>
                <div className="relative">
                  <select className="w-full h-[53px] px-4 pr-10 rounded-full border border-black/[0.05] bg-[#FAFAFA] text-base text-[#B3B3B3] appearance-none focus:outline-none focus:ring-2 focus:ring-[#EE7A13]/20">
                    <option>Select</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-sm font-semibold text-black leading-[21px]" style={{ fontFamily: 'Random Grotesque Standard Semibold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Priority
                </label>
                <div className="relative">
                  <select className="w-full h-[53px] px-4 pr-10 rounded-full border border-black/[0.05] bg-[#FAFAFA] text-base text-[#B3B3B3] appearance-none focus:outline-none focus:ring-2 focus:ring-[#EE7A13]/20">
                    <option>Select</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Start Date, Due Date, Repeat */}
            <div className="flex gap-4">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-medium text-black leading-[18px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Start date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select"
                    className="w-full h-[53px] px-4 pr-10 rounded-full border border-black/[0.05] bg-[#FAFAFA] text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#EE7A13]/20"
                  />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" strokeWidth={1} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-medium text-black leading-[18px]" style={{ fontFamily: 'Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Due date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select"
                    className="w-full h-[53px] px-4 pr-10 rounded-full border border-black/[0.05] bg-[#FAFAFA] text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#EE7A13]/20"
                  />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" strokeWidth={1} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-sm font-semibold text-black leading-[21px]" style={{ fontFamily: 'Random Grotesque Standard Semibold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Repeat
                </label>
                <div className="relative">
                  <select className="w-full h-[53px] px-4 pr-10 rounded-full border border-black/[0.05] bg-[#FAFAFA] text-base text-[#B3B3B3] appearance-none focus:outline-none focus:ring-2 focus:ring-[#EE7A13]/20">
                    <option>Select</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-black leading-[21px]" style={{ fontFamily: 'Random Grotesque Standard Semibold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Description
              </label>
              <textarea
                placeholder="What's your project about?"
                className="h-[100px] p-4 rounded-2xl border border-black/[0.05] bg-[#FAFAFA] text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] resize-none focus:outline-none focus:ring-2 focus:ring-[#EE7A13]/20"
              />
            </div>

            {/* Status */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-black leading-[21px]" style={{ fontFamily: 'Random Grotesque Standard Semibold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Status
              </label>
              <div className="relative">
                <select className="w-full h-[53px] px-4 pr-10 rounded-full border border-black/[0.05] bg-[#FAFAFA] text-base text-[#B3B3B3] appearance-none focus:outline-none focus:ring-2 focus:ring-[#EE7A13]/20">
                  <option>Select</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
              </div>
            </div>

            {/* Content/Link */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-black leading-[21px]" style={{ fontFamily: 'Random Grotesque Standard Semibold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Content/Link
              </label>
              <input
                type="text"
                placeholder="Add a link or notes"
                className="h-[53px] px-4 rounded-full border border-black/[0.05] bg-[#FAFAFA] text-base text-[#B3B3B3] placeholder:text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#EE7A13]/20"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 p-6 rounded-[20px] border border-black/[0.05] bg-white">
          <button className="h-14 px-8 rounded-full bg-[#EE7A13] hover:bg-[#EE7A13]/90 transition-colors">
            <span className="text-base font-bold text-[#FAFAFA] leading-6">Create New Project</span>
          </button>
          <button onClick={onClose} className="h-14 px-8 rounded-full border border-black/[0.05] bg-[#FAFAFA] hover:bg-[#F5F5F5] transition-colors">
            <span className="text-lg font-bold text-[#404040] leading-7 text-center">Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StudentProjects() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/dashboard" },
    { id: "bootcamp", label: "My Bootcamp", path: "/student-bootcamp" },
    { id: "projects", label: "Projects", path: "/student-projects", icon: <Lightbulb className="w-5 h-5" strokeWidth={1.25} /> },
    { id: "mentor", label: "Ai Mentor", path: "#" },
    { id: "achievements", label: "Achievements", path: "#" },
    { id: "schedule", label: "Schedule", path: "#" },
    { id: "portfolio", label: "Portfolio", path: "#" },
  ];

  const isActive = (itemPath: string | undefined) => {
    if (!itemPath) return false;
    if (itemPath === "#") return false;
    return location.pathname === itemPath;
  };

  const notStartedProjects = projectsData.filter(p => p.status === "not-started");
  const inProgressProjects = projectsData.filter(p => p.status === "in-progress");
  const completedProjects = projectsData.filter(p => p.status === "completed");

  return (
    <div className="min-h-screen bg-[#1E3006] p-3 sm:p-6">
      {/* Header Navigation */}
      <div className="max-w-[1440px] mx-auto mb-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 px-4 sm:px-8 lg:px-16">
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
                  {active && item.icon ? (
                    <span className="inline-flex items-center gap-3">
                      {item.icon}
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
              src="https://api.builder.io/api/v1/image/assets/TEMP/fe1eccc8b53d8aa317a3a4cd190f829ca8899be8?width=80" 
              alt="User" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="hidden sm:block">
              <div className="text-white font-bold text-base leading-6">Mimi Alex</div>
              <div className="text-white/70 text-sm leading-4">Designer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-[32px] p-6 sm:p-8 lg:p-16">
        {/* Page Header */}
        <div className="flex flex-col gap-5 pb-8 border-b border-black/[0.05]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="flex flex-col gap-1 flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-black leading-[34px]" style={{ fontFamily: 'Random Grotesque Standard Bold, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Projects 💡
                </h1>
                <p className="text-base text-[#404040] leading-6">
                  Your creative workspace
                </p>
              </div>
              <button className="flex items-center gap-2 px-6 sm:px-8 h-14 rounded-full bg-[#EE7A13] hover:bg-[#EE7A13]/90 transition-colors">
                <Plus className="w-5 h-5 text-[#FAFAFA]" strokeWidth={2} />
                <span className="text-base font-bold text-[#FAFAFA] leading-6">Create New Project</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 pb-6">
          <div className="flex items-start gap-2 flex-wrap">
            <Search className="w-6 h-6 text-[#8C8C8C]" strokeWidth={1.5} />
            <div className="inline-flex items-center px-3 py-1 rounded-2xl bg-[#FAFAFA]">
              <span className="text-sm text-[#404040] leading-5">All</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-2xl bg-[#FAFAFA]">
              <span className="text-sm text-[#404040] leading-5">Private Tasks</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-2xl bg-[#FAFAFA]">
              <span className="text-sm text-[#404040] leading-5">Assigned to Me</span>
            </div>
          </div>
          <button className="flex items-center gap-2">
            <SlidersHorizontal className="w-6 h-6 text-[#404040]" strokeWidth={1.5} />
            <span className="text-base text-[#404040] leading-6">Filters</span>
            <ChevronDown className="w-6 h-6 text-[#404040]" strokeWidth={1.5} />
          </button>
        </div>

        {/* Kanban Board */}
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Not Started Column */}
          <div className="flex flex-col items-center gap-6 flex-1 p-3 sm:p-6 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
            <div className="flex justify-between items-center self-stretch">
              <h2 className="text-xl font-bold text-black leading-7">Not Started</h2>
              <div className="flex w-[42px] h-[23px] px-[7px] py-1 flex-col items-start gap-2.5 rounded-lg bg-[#FFEBEC]">
                <div className="flex items-center gap-1.25">
                  <Edit className="w-3.5 h-3.5 text-[#FB3748]" strokeWidth={1.5} />
                  <span className="text-xs font-medium text-[#FB3748] leading-4">{notStartedProjects.length}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch">
              {notStartedProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* In Progress Column */}
          <div className="flex flex-col items-center gap-6 flex-1 p-3 sm:p-6 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
            <div className="flex justify-between items-center self-stretch">
              <h2 className="text-xl font-bold text-black leading-7">In Progress</h2>
              <div className="flex w-[42px] h-[23px] px-[7px] py-1 flex-col items-start gap-2.5 rounded-lg bg-[#EBF1FF]">
                <div className="flex items-center gap-1.25">
                  <div className="w-3.5 h-3.5 relative">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.66512 1.66602C7.9873 1.66602 8.24845 1.92719 8.24845 2.24935V3.99935C8.24845 4.32151 7.9873 4.58268 7.66512 4.58268C7.34295 4.58268 7.08179 4.32151 7.08179 3.99935V2.24935C7.08179 1.92719 7.34295 1.66602 7.66512 1.66602Z" fill="#3559E9"/>
                      <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M7.66512 10.416C7.9873 10.416 8.24845 10.6772 8.24845 10.9993V12.7493C8.24845 13.0715 7.9873 13.3327 7.66512 13.3327C7.34295 13.3327 7.08179 13.0715 7.08179 12.7493V10.9993C7.08179 10.6772 7.34295 10.416 7.66512 10.416Z" fill="#3559E9"/>
                      <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M10.5818 7.49935C10.5818 7.17717 10.8429 6.91602 11.1651 6.91602H12.9151C13.2373 6.91602 13.4985 7.17717 13.4985 7.49935C13.4985 7.82152 13.2373 8.08268 12.9151 8.08268H11.1651C10.8429 8.08268 10.5818 7.82152 10.5818 7.49935Z" fill="#3559E9"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.83179 7.49935C1.83179 7.17717 2.09296 6.91602 2.41512 6.91602H4.16512C4.48728 6.91602 4.74845 7.17717 4.74845 7.49935C4.74845 7.82152 4.48728 8.08268 4.16512 8.08268H2.41512C2.09296 8.08268 1.83179 7.82152 1.83179 7.49935Z" fill="#3559E9"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-[#3559E9] leading-4">{inProgressProjects.length}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch">
              {inProgressProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Completed Column */}
          <div className="flex flex-col items-center gap-6 flex-1 p-3 sm:p-6 rounded-[32px] border border-black/[0.05] bg-[#FAFAFA]">
            <div className="flex justify-between items-center self-stretch">
              <h2 className="text-xl font-bold text-black leading-7">Completed</h2>
              <div className="flex w-[42px] h-[23px] px-[7px] py-1 flex-col items-start gap-2.5 rounded-lg bg-[#E0FAEC]">
                <div className="flex items-center gap-1.25">
                  <CheckCircle className="w-3.5 h-3.5 text-[#1FC16B]" strokeWidth={1.5} />
                  <span className="text-xs font-medium text-[#1FC16B] leading-4">{completedProjects.length}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch">
              {completedProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
