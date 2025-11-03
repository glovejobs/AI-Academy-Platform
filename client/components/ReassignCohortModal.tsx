import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, ChevronDown, Sparkles } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  cohort: string;
  status: "Active" | "Pending";
  performance: "Excellent" | "Good" | "N/A";
  completionRate: string;
}

interface ReassignCohortModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: Student | null;
}

const ReassignCohortModal: React.FC<ReassignCohortModalProps> = ({ isOpen, onClose, student }) => {
  const [newCohort, setNewCohort] = useState('');
  const [effectiveDate, setEffectiveDate] = useState('');
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
    console.log({ studentId: student?.id, newCohort, effectiveDate, notes });
    onClose();
  };

  if (!isOpen || !student) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-10 transition-opacity duration-300">
      <div
        ref={modalRef}
        className="w-full max-w-[700px] h-full bg-[#F9FAF9] shadow-xl p-8 transform transition-transform duration-300 ease-in-out overflow-y-auto"
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-start">
                <h2 className="text-black font-random-grotesque-bold text-[30px] font-bold leading-[34px] tracking-[-0.75px]">
                  Reassign Cohort
                </h2>
                <button onClick={onClose} className="text-[#1E1E1E] hover:opacity-70 transition-opacity">
                  <X className="w-8 h-8" />
                </button>
              </div>
              <div className="h-[1px] bg-[rgba(0,0,0,0.10)]"></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
              <div className="flex p-6 flex-col gap-4 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
                {/* Full Name - Disabled */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                    Full Name
                  </label>
                  <div className="flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] opacity-70 bg-[#F9FAF9]">
                    <input
                      type="text"
                      value={student.name}
                      disabled
                      className="flex-1 bg-transparent border-none outline-none text-[#B3B3B3] font-satoshi text-base leading-6 tracking-[-0.16px]"
                    />
                  </div>
                </div>

                {/* Current Cohort - Disabled */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                    Current Cohort
                  </label>
                  <div className="flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] opacity-70 bg-[#F9FAF9]">
                    <input
                      type="text"
                      value={student.cohort}
                      disabled
                      className="flex-1 bg-transparent border-none outline-none text-[#B3B3B3] font-satoshi text-base leading-6 tracking-[-0.16px]"
                    />
                  </div>
                </div>

                {/* Select New Cohort and Effective Date Row */}
                <div className="flex items-start gap-4">
                  {/* Select New Cohort */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                      Select New Cohort
                    </label>
                    <div className="relative">
                      <select
                        value={newCohort}
                        onChange={(e) => setNewCohort(e.target.value)}
                        className="flex h-[53px] w-full px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] appearance-none pr-10"
                        required
                      >
                        <option value="">Select cohort</option>
                        <option value="AI Explorers Spring '24">AI Explorers Spring '24</option>
                        <option value="Blockchain Innovators Summit '23">Blockchain Innovators Summit '23</option>
                        <option value="Sustainable Tech Conference '24">Sustainable Tech Conference '24</option>
                        <option value="Digital Marketing Expo '23">Digital Marketing Expo '23</option>
                        <option value="Virtual Reality Showcase '24">Virtual Reality Showcase '24</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.514 11.0865C8.46239 11.1406 8.40032 11.1837 8.33157 11.2132C8.26281 11.2426 8.1888 11.2578 8.114 11.2578C8.0392 11.2578 7.96519 11.2426 7.89643 11.2132C7.82768 11.1837 7.76561 11.1406 7.714 11.0865L2 5.37251L2.8 4.57251L8.114 9.88651L13.4287 4.57251L14.2287 5.37251L8.514 11.0865Z" fill="black"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Effective Date */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                      Effective Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={effectiveDate}
                        onChange={(e) => setEffectiveDate(e.target.value)}
                        className="flex h-[53px] w-full px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px]"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Notes - Optional */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                    Notes (optional)
                  </label>
                  <div className="flex h-[100px] p-4 rounded-2xl border border-[rgba(0,0,0,0.10)] opacity-70 bg-[#F9FAF9]">
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g Moved to new track for better focus"
                      className="flex-1 bg-transparent border-none outline-none text-[#21231D] font-satoshi text-base leading-6 tracking-[-0.16px] placeholder:text-[#B3B3B3] resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Nova Help */}
              <div className="flex items-start rounded-[24px] border-2 border-[#36DD50] bg-[#F5FDF1]">
                <div className="flex p-6 items-start gap-2 flex-1">
                  <Sparkles className="w-5 h-5 stroke-[#1E3006] flex-shrink-0" />
                  <div className="flex flex-col gap-1 flex-1">
                    <h3 className="text-[#1E3006] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">
                      Nova help
                    </h3>
                    <p className="text-[#1E3006] font-satoshi text-sm leading-4 tracking-[-0.14px]">
                      💡 Would you like Nova to notify the new mentor and parent about this change?
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Action Buttons */}
          <div className="flex p-6 flex-col gap-4 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex h-14 px-8 py-2 justify-center items-center gap-2 rounded-full bg-[#9FE870] hover:bg-[#8FD85F] transition-colors"
            >
              <span className="text-[#1E3006] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">
                Assign Cohort
              </span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex h-14 px-8 py-2 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] hover:bg-gray-200 transition-colors"
            >
              <span className="flex-1 text-[#404040] text-center font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">
                Cancel
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReassignCohortModal;
