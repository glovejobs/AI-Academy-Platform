import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronDown, Calendar } from 'lucide-react';

interface AssignCohortModalProps {
  isOpen: boolean;
  onClose: () => void;
  mentor?: {
    name: string;
    currentCohort: string;
  } | null;
}

const AssignCohortModal: React.FC<AssignCohortModalProps> = ({ isOpen, onClose, mentor }) => {
  const [fullName, setFullName] = useState('');
  const [currentCohort, setCurrentCohort] = useState('');
  const [selectedCohort, setSelectedCohort] = useState('');
  const [effectiveDate, setEffectiveDate] = useState('');
  const [showAlert, setShowAlert] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mentor) {
      setFullName(mentor.name);
      setCurrentCohort(mentor.currentCohort);
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
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ fullName, currentCohort, selectedCohort, effectiveDate });
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
              <h2 className="text-black font-random-grotesque-bold text-[30px] font-bold leading-[34px] tracking-[-0.75px]">
                Assign Cohort to Mentor
              </h2>
              <button onClick={onClose} className="text-[#1E1E1E] hover:text-gray-600 transition-colors">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="h-[1px] bg-[rgba(0,0,0,0.10)]"></div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
            <div className="flex p-6 flex-col gap-4 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                  Full Name
                </label>
                <div className="flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9]">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Sarah Martinez"
                    className="flex-1 bg-transparent text-[#B3B3B3] font-satoshi text-base leading-6 tracking-[-0.16px] outline-none placeholder:text-[#B3B3B3]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                  Current Cohort
                </label>
                <div className="flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9]">
                  <input
                    type="text"
                    value={currentCohort}
                    onChange={(e) => setCurrentCohort(e.target.value)}
                    placeholder="Product Design"
                    className="flex-1 bg-transparent text-[#B3B3B3] font-satoshi text-base leading-6 tracking-[-0.16px] outline-none placeholder:text-[#B3B3B3]"
                  />
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                    Select New Cohort
                  </label>
                  <div className="flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9]">
                    <select
                      value={selectedCohort}
                      onChange={(e) => setSelectedCohort(e.target.value)}
                      className="flex-1 bg-transparent text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none appearance-none"
                    >
                      <option value="">Select cohort</option>
                      <option value="ai-storytelling">AI Storytelling</option>
                      <option value="product-design">Product Design</option>
                      <option value="web-development">Web Development</option>
                      <option value="data-science">Data Science</option>
                    </select>
                    <ChevronDown className="w-4 h-4 stroke-black" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">
                    Effective Date
                  </label>
                  <div className="flex h-[53px] px-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9]">
                    <input
                      type="date"
                      value={effectiveDate}
                      onChange={(e) => setEffectiveDate(e.target.value)}
                      placeholder="DD/MM/YYYY"
                      className="flex-1 bg-transparent text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none"
                    />
                    <Calendar className="w-4 h-4 stroke-[#757575]" />
                  </div>
                </div>
              </div>
            </div>

            {showAlert && (
              <div className="flex p-6 items-start gap-3 rounded-xl border border-[#EDEFEB] bg-[rgba(159,232,112,0.20)]">
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#1E3006] font-satoshi text-sm leading-5 tracking-[-0.14px]">
                      This mentor's dashboard will update with the new cohort on the selected date
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAlert(false)}
                  className="flex p-2 justify-center items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)] transition-colors"
                >
                  <X className="w-5 h-5 stroke-[#1E3006]" />
                </button>
              </div>
            )}

            <div className="flex p-6 flex-col gap-4 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
              <button
                type="submit"
                className="flex h-14 px-8 justify-center items-center gap-2 rounded-full bg-[#9FE870] hover:bg-[#8FD85F] transition-colors"
              >
                <span className="text-[#1E3006] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">
                  Assign Cohort
                </span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex h-14 px-8 justify-center items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] hover:bg-[#EAECF0] transition-colors"
              >
                <span className="text-[#404040] text-center font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">
                  Cancel
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignCohortModal;
