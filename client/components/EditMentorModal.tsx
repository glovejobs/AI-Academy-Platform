import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, ChevronDown } from 'lucide-react';

interface Mentor {
  id: string;
  name: string;
  assignedCohorts: number;
  specialization: string;
  activitySummary: number;
  status: "Active";
}

interface EditMentorModalProps {
  isOpen: boolean;
  onClose: () => void;
  mentor: Mentor | null;
}

const EditMentorModal: React.FC<EditMentorModalProps> = ({ isOpen, onClose, mentor }) => {
  const [fullName, setFullName] = useState('Sarah Martinez');
  const [email, setEmail] = useState('sarah@email.com');
  const [status, setStatus] = useState('Active');
  const [phoneNumber, setPhoneNumber] = useState('+1');
  const [assignedCohort, setAssignedCohort] = useState('Select Spring 2024');
  const [subjectArea, setSubjectArea] = useState('AI Imaging');
  const [startDate, setStartDate] = useState('24th August, 2025');
  const [password, setPassword] = useState('Enter strong password');
  const [mentorLevel, setMentorLevel] = useState('Senior');
  const [weeklyReporting, setWeeklyReporting] = useState(true);
  const [aiCoTeacher, setAiCoTeacher] = useState(true);
  const [notes, setNotes] = useState('e.g., "Leads engaging Python workshops"');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mentor) {
      setFullName(mentor.name);
      setSubjectArea(mentor.specialization);
      setStatus(mentor.status);
    }
  }, [mentor]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ 
      fullName, email, status, phoneNumber, assignedCohort, subjectArea, 
      startDate, password, mentorLevel, weeklyReporting, aiCoTeacher, notes 
    });
    onClose();
  };

  if (!isOpen || !mentor) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-10 transition-opacity duration-300">
      <div
        ref={modalRef}
        className="w-full max-w-[700px] h-full bg-[#F9FAF9] shadow-xl p-8 transform transition-transform duration-300 ease-in-out overflow-y-auto"
      >
        <div className="flex flex-col gap-6 h-full">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-start">
              <h2 className="text-black font-random-grotesque-bold text-[30px] font-bold leading-[34px] tracking-[-0.75px]">Edit Dr's Sarah Information</h2>
              <button onClick={onClose} className="text-[#1E1E1E] hover:text-gray-600 transition-colors">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="h-[1px] bg-[rgba(0,0,0,0.10)]"></div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
            <div className="flex p-6 flex-col gap-4 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
              <h3 className="text-[#8C8C8C] font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">Basic Information</h3>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="flex h-[53px] px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870]"
                  required
                />
              </div>

              <div className="flex items-start gap-4">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex h-[53px] px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Status</label>
                  <div className="relative">
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="flex h-[53px] w-full px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870] appearance-none"
                      required
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 fill-black pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Phone Number</label>
                  <div className="flex h-[53px] px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9]">
                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/6c270b03fdf4c426d84d7f861b008439be573134?width=42" alt="" className="w-[21px] h-[21px] rounded-full" />
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flex-1 bg-transparent border-none outline-none text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px]"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Assigned Cohort</label>
                  <div className="relative">
                    <select
                      value={assignedCohort}
                      onChange={(e) => setAssignedCohort(e.target.value)}
                      className="flex h-[53px] w-full px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870] appearance-none"
                      required
                    >
                      <option value="Select Spring 2024">Select Spring 2024</option>
                      <option value="Fall 2024">Fall 2024</option>
                      <option value="Winter 2025">Winter 2025</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 fill-black pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Subject Area</label>
                  <input
                    type="text"
                    value={subjectArea}
                    onChange={(e) => setSubjectArea(e.target.value)}
                    className="flex h-[53px] px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Start Date</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="flex h-[53px] w-full px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870]"
                      required
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 stroke-[#21231D] pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Password / Invite Link</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex h-[53px] px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870]"
                  required
                />
              </div>
            </div>

            <div className="flex p-6 flex-col gap-4 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
              <h3 className="text-[#8C8C8C] font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">Performance & Activity Tracking</h3>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Mentor Level</label>
                <input
                  type="text"
                  value={mentorLevel}
                  onChange={(e) => setMentorLevel(e.target.value)}
                  className="flex h-[53px] px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870]"
                  required
                />
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-start gap-2 flex-1">
                  <div className="flex pt-0.5 justify-center items-center">
                    <div 
                      onClick={() => setWeeklyReporting(!weeklyReporting)}
                      className={`flex w-4 h-4 p-0.5 justify-center items-center rounded border cursor-pointer ${
                        weeklyReporting ? 'border-[rgba(230,234,241,0.60)] bg-[#F9F5FF]' : 'border-gray-300 bg-white'
                      }`}
                    >
                      {weeklyReporting && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="#6A8042" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="text-[#21231D] font-random-grotesque-semibold text-sm font-semibold leading-5">Weekly Reporting Access</div>
                    <div className="text-[#404040] font-satoshi text-sm leading-5">Allow mentor to submit class analytics</div>
                  </div>
                </div>

                <div className="flex items-start gap-2 flex-1">
                  <div 
                    onClick={() => setAiCoTeacher(!aiCoTeacher)}
                    className={`flex w-9 h-5 p-0.5 items-center rounded-full cursor-pointer transition-all ${
                      aiCoTeacher ? 'bg-[#1E3006] justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full ${aiCoTeacher ? 'bg-[#B1FA63]' : 'bg-white'} shadow-[0_1px_2px_0_rgba(16,24,40,0.06),0_1px_3px_0_rgba(16,24,40,0.1)]`}></div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="text-[#21231D] font-random-grotesque-semibold text-sm font-semibold leading-5">Enable AI Co-Teacher</div>
                    <div className="text-[#404040] font-satoshi text-sm leading-5">Allow mentor access to Nova for class feedback and analytics</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex p-6 flex-col gap-4 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
              <h3 className="text-[#8C8C8C] font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">Notes / Remarks</h3>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="flex h-[100px] px-4 py-4 items-start gap-2 rounded-2xl border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870] resize-none"
                  rows={4}
                />
              </div>
            </div>

            <div className="flex p-6 flex-col gap-4 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
              <button
                type="submit"
                className="flex h-14 px-8 py-2 justify-center items-center gap-2 rounded-full bg-[#9FE870] hover:bg-[#8FD85F] transition-colors"
              >
                <span className="text-[#1E3006] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">Save Changes</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex h-14 px-8 py-2 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] hover:bg-gray-200 transition-colors"
              >
                <span className="flex-1 text-[#404040] text-center font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">Cancel</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMentorModal;
