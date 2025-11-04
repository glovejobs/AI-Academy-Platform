import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, ChevronDown } from 'lucide-react';

interface AddMentorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddMentorModal: React.FC<AddMentorModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [assignedCohort, setAssignedCohort] = useState('');
  const [subjectArea, setSubjectArea] = useState('');
  const [startDate, setStartDate] = useState('');
  const [password, setPassword] = useState('');
  const [mentorLevel, setMentorLevel] = useState('');
  const [weeklyReporting, setWeeklyReporting] = useState(false);
  const [aiCoTeacher, setAiCoTeacher] = useState(true);
  const [notes, setNotes] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-10 transition-opacity duration-300">
      <div
        ref={modalRef}
        className="w-full max-w-[700px] h-full bg-[#F9FAF9] shadow-xl p-8 transform transition-transform duration-300 ease-in-out overflow-y-auto"
      >
        <div className="flex flex-col gap-6 h-full">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-start">
              <h2 className="text-black font-random-grotesque-bold text-[30px] font-bold leading-[34px] tracking-[-0.75px]">Add New Mentor</h2>
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
                  placeholder="Enter full name"
                  className="flex h-[53px] px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#B3B3B3] font-satoshi text-base leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870]"
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
                    placeholder="Enter email address"
                    className="flex h-[53px] px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#B3B3B3] font-satoshi text-base leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Status</label>
                  <div className="relative">
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="flex h-[53px] w-full px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#B3B3B3] font-satoshi text-base leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870] appearance-none"
                      required
                    >
                      <option value="">Select status</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
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
                      placeholder="+234"
                      className="flex-1 bg-transparent border-none outline-none text-[#B3B3B3] font-satoshi text-base leading-6 tracking-[-0.16px]"
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
                      className="flex h-[53px] w-full px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#B3B3B3] font-satoshi text-base leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870] appearance-none"
                      required
                    >
                      <option value="">Select cohort</option>
                      <option value="Product Design">Product Design</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Data Science">Data Science</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
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
                    placeholder="Select subject area"
                    className="flex h-[53px] px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#B3B3B3] font-satoshi text-base leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870]"
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
                      placeholder="Select"
                      className="flex h-[53px] w-full px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#B3B3B3] font-satoshi text-base leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870]"
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
                  placeholder="Enter password"
                  className="flex h-[53px] px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#B3B3B3] font-satoshi text-base leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870]"
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
                  placeholder="Select mentor level"
                  className="flex h-[53px] px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#B3B3B3] font-satoshi text-base leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870]"
                  required
                />
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-start gap-2 flex-1">
                  <div className="flex pt-0.5">
                    <div className={`w-4 h-4 rounded border ${weeklyReporting ? 'bg-[#1E3006] border-[#1E3006]' : 'bg-white border-[#D0D5DD]'} cursor-pointer`} onClick={() => setWeeklyReporting(!weeklyReporting)}>
                      {weeklyReporting && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="text-[#21231D] font-random-grotesque-semibold text-sm font-semibold leading-5">Weekly Reporting Access</span>
                    <span className="text-[#404040] font-satoshi text-sm leading-5">Allow mentor to submit class analytics</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 flex-1">
                  <div 
                    className={`flex w-9 h-5 p-0.5 rounded-xl cursor-pointer transition-colors ${aiCoTeacher ? 'bg-[#1E3006] justify-end' : 'bg-gray-300 justify-start'}`}
                    onClick={() => setAiCoTeacher(!aiCoTeacher)}
                  >
                    <div className="w-4 h-4 rounded-full bg-[#B1FA63] shadow-md"></div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="text-[#21231D] font-random-grotesque-semibold text-sm font-semibold leading-5">Enable AI Co-Teacher</span>
                    <span className="text-[#404040] font-satoshi text-sm leading-5">Allow mentor access to Nova for class feedback and analytics</span>
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
                  placeholder="e.g., &quot;Specializes in creative writing workshops"
                  rows={4}
                  className="flex px-4 py-4 items-start gap-2 rounded-2xl border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#B3B3B3] font-satoshi text-base leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870] resize-none"
                />
              </div>
            </div>

            <div className="flex p-6 flex-col gap-4 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
              <button
                type="submit"
                className="flex h-14 px-8 py-2 justify-center items-center gap-2 rounded-full bg-[#9FE870] hover:bg-[#8FD85F] transition-colors"
              >
                <span className="text-[#1E3006] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">Send Invite</span>
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

export default AddMentorModal;
