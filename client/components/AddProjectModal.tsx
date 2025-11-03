import { X, ChevronDown, Calendar } from "lucide-react";
import { useState } from "react";

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddProjectModal({ isOpen, onClose }: AddProjectModalProps) {
  const [formData, setFormData] = useState({
    projectName: "",
    assignTo: "",
    bucket: "",
    progress: "",
    priority: "",
    startDate: "",
    dueDate: "",
    repeat: "",
    description: "",
    status: "",
    contentLink: ""
  });

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/10 z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className={`fixed right-0 top-0 h-full w-full max-w-[700px] bg-[#F9FAF9] z-50 transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col justify-between h-full p-8">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex flex-col gap-1 flex-1">
                    <h1 className="text-black font-[Random_Grotesque_Standard_Bold] text-[30px] font-bold leading-[34px] tracking-[-0.75px]">
                      Create New Project
                    </h1>
                    <p className="text-[#404040] font-satoshi text-base font-normal leading-6 tracking-[-0.16px]">
                      Your creative workspace
                    </p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="w-8 h-8 flex items-center justify-center text-[#1E1E1E] hover:opacity-70 transition-opacity"
                  >
                    <X className="w-8 h-8" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
              <div className="h-px bg-black/10" />
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-4 p-6 rounded-[20px] border border-black/10 bg-white">
              {/* Project Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#404040] font-[Random_Grotesque_Standard_Semibold] text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                  Project Name*
                </label>
                <input
                  type="text"
                  placeholder="Give your project a creative name"
                  value={formData.projectName}
                  onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                  className="h-[53px] px-4 rounded-full border border-black/10 bg-[#F9FAF9] text-base font-satoshi placeholder:text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#9FE870] focus:border-transparent"
                />
              </div>

              {/* Assign to */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#404040] font-[Random_Grotesque_Standard_Semibold] text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                  Assign to
                </label>
                <div className="relative">
                  <select
                    value={formData.assignTo}
                    onChange={(e) => setFormData({ ...formData, assignTo: e.target.value })}
                    className="h-[53px] w-full px-4 pr-10 rounded-full border border-black/10 bg-[#F9FAF9] text-base font-satoshi text-[#B3B3B3] appearance-none focus:outline-none focus:ring-2 focus:ring-[#9FE870] focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="team1">Team 1</option>
                    <option value="team2">Team 2</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                </div>
              </div>

              {/* Bucket, Progress, Priority Row */}
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[#404040] font-[Random_Grotesque_Standard_Semibold] text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                    Bucket
                  </label>
                  <div className="relative">
                    <select
                      value={formData.bucket}
                      onChange={(e) => setFormData({ ...formData, bucket: e.target.value })}
                      className="h-[53px] w-full px-4 pr-10 rounded-full border border-black/10 bg-[#F9FAF9] text-base font-satoshi text-[#B3B3B3] appearance-none focus:outline-none focus:ring-2 focus:ring-[#9FE870] focus:border-transparent"
                    >
                      <option value="">Select</option>
                      <option value="design">Design</option>
                      <option value="development">Development</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[#404040] font-[Random_Grotesque_Standard_Semibold] text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                    Progress
                  </label>
                  <div className="relative">
                    <select
                      value={formData.progress}
                      onChange={(e) => setFormData({ ...formData, progress: e.target.value })}
                      className="h-[53px] w-full px-4 pr-10 rounded-full border border-black/10 bg-[#F9FAF9] text-base font-satoshi text-[#B3B3B3] appearance-none focus:outline-none focus:ring-2 focus:ring-[#9FE870] focus:border-transparent"
                    >
                      <option value="">Select</option>
                      <option value="not-started">Not Started</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[#404040] font-[Random_Grotesque_Standard_Semibold] text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                    Priority
                  </label>
                  <div className="relative">
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                      className="h-[53px] w-full px-4 pr-10 rounded-full border border-black/10 bg-[#F9FAF9] text-base font-satoshi text-[#B3B3B3] appearance-none focus:outline-none focus:ring-2 focus:ring-[#9FE870] focus:border-transparent"
                    >
                      <option value="">Select</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Start Date, Due Date, Repeat Row */}
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-black font-[Plus_Jakarta_Sans] text-xs font-medium leading-[150%] tracking-[-0.24px]">
                    Start date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="h-[53px] w-full px-4 pr-10 rounded-full border border-black/10 bg-[#F9FAF9] text-base font-satoshi text-[#B3B3B3] appearance-none focus:outline-none focus:ring-2 focus:ring-[#9FE870] focus:border-transparent"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-black font-[Plus_Jakarta_Sans] text-xs font-medium leading-[150%] tracking-[-0.24px]">
                    Due date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.dueDate}
                      onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                      className="h-[53px] w-full px-4 pr-10 rounded-full border border-black/10 bg-[#F9FAF9] text-base font-satoshi text-[#B3B3B3] appearance-none focus:outline-none focus:ring-2 focus:ring-[#9FE870] focus:border-transparent"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[#404040] font-[Random_Grotesque_Standard_Semibold] text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                    Repeat
                  </label>
                  <div className="relative">
                    <select
                      value={formData.repeat}
                      onChange={(e) => setFormData({ ...formData, repeat: e.target.value })}
                      className="h-[53px] w-full px-4 pr-10 rounded-full border border-black/10 bg-[#F9FAF9] text-base font-satoshi text-[#B3B3B3] appearance-none focus:outline-none focus:ring-2 focus:ring-[#9FE870] focus:border-transparent"
                    >
                      <option value="">Select</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#404040] font-[Random_Grotesque_Standard_Semibold] text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                  Description
                </label>
                <textarea
                  placeholder="What's your project about?"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="h-[100px] px-4 py-4 rounded-2xl border border-black/10 bg-[#F9FAF9] text-base font-satoshi placeholder:text-[#B3B3B3] resize-none focus:outline-none focus:ring-2 focus:ring-[#9FE870] focus:border-transparent"
                />
              </div>

              {/* Status */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#404040] font-[Random_Grotesque_Standard_Semibold] text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                  Status
                </label>
                <div className="relative">
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="h-[53px] w-full px-4 pr-10 rounded-full border border-black/10 bg-[#F9FAF9] text-base font-satoshi text-[#B3B3B3] appearance-none focus:outline-none focus:ring-2 focus:ring-[#9FE870] focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="active">Active</option>
                    <option value="on-hold">On Hold</option>
                    <option value="archived">Archived</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                </div>
              </div>

              {/* Content/Link */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#404040] font-[Random_Grotesque_Standard_Semibold] text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                  Content/Link
                </label>
                <input
                  type="text"
                  placeholder="Add a link or notes"
                  value={formData.contentLink}
                  onChange={(e) => setFormData({ ...formData, contentLink: e.target.value })}
                  className="h-[53px] px-4 rounded-full border border-black/10 bg-[#F9FAF9] text-base font-satoshi placeholder:text-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#9FE870] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 p-6 rounded-[20px] border border-black/10 bg-white mt-6">
            <button className="h-14 px-8 rounded-full bg-[#9FE870] hover:bg-[#8ed65f] transition-colors">
              <span className="text-[#1E3006] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">
                Create New Project
              </span>
            </button>
            <button 
              onClick={onClose}
              className="h-14 px-8 rounded-full border border-black/10 bg-[#F9FAF9] hover:bg-[#e8e9e8] transition-colors"
            >
              <span className="text-[#404040] font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">
                Cancel
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
