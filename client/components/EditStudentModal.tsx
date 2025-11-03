import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, ChevronDown } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  cohort: string;
  status: "Active" | "Pending";
  performance: "Excellent" | "Good" | "N/A";
  completionRate: string;
}

interface EditStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: Student | null;
}

const EditStudentModal: React.FC<EditStudentModalProps> = ({ isOpen, onClose, student }) => {
  const [fullName, setFullName] = useState('Amina Yusuf');
  const [ageGroup, setAgeGroup] = useState('10-14');
  const [email, setEmail] = useState('amina@email.com');
  const [phoneNumber, setPhoneNumber] = useState('+234 812348390');
  const [parentName, setParentName] = useState('Mrs. Yusuf');
  const [parentEmail, setParentEmail] = useState('yusuf@email.com');
  const [parentPhone, setParentPhone] = useState('+234 803242452');
  const [cohort, setCohort] = useState('Product Design');
  const [mentor, setMentor] = useState('Mr Kareem Adisma');
  const [startDate, setStartDate] = useState('08/10/2025');
  const [subscriptionStatus, setSubscriptionStatus] = useState('Active');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (student) {
      setFullName(student.name);
      setCohort(student.cohort);
      setSubscriptionStatus(student.status);
    }
  }, [student]);

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
    console.log({ fullName, ageGroup, email, phoneNumber, parentName, parentEmail, parentPhone, cohort, mentor, startDate, subscriptionStatus });
    onClose();
  };

  if (!isOpen || !student) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-10 transition-opacity duration-300">
      <div
        ref={modalRef}
        className="w-full max-w-[700px] h-full bg-[#F9FAF9] shadow-xl p-8 transform transition-transform duration-300 ease-in-out overflow-y-auto"
      >
        <div className="flex flex-col gap-6 h-full">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-start">
              <h2 className="text-black font-random-grotesque-bold text-[30px] font-bold leading-[34px] tracking-[-0.75px]">Edit Amina's Profile</h2>
              <button onClick={onClose} className="text-[#1E1E1E] hover:text-gray-600 transition-colors">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="h-[1px] bg-[rgba(0,0,0,0.10)]"></div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
            <div className="flex p-6 flex-col gap-4 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
              <h3 className="text-[#8C8C8C] font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">Student Information</h3>
              
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

              <div className="flex flex-col gap-1.5">
                <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Age Group</label>
                <div className="relative">
                  <select
                    value={ageGroup}
                    onChange={(e) => setAgeGroup(e.target.value)}
                    className="flex h-[53px] w-full px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870] appearance-none"
                    required
                  >
                    <option value="6-9">6-9</option>
                    <option value="10-14">10-14</option>
                    <option value="15-18">15-18</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex h-[53px] px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870]"
                    required
                  />
                </div>
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
              </div>
            </div>

            <div className="flex p-6 flex-col gap-4 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
              <h3 className="text-[#8C8C8C] font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">Parent / Guardian Details</h3>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Parent / Guardian Name</label>
                <input
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="flex h-[53px] px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870]"
                  required
                />
              </div>

              <div className="flex items-start gap-4">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Email</label>
                  <input
                    type="email"
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                    className="flex h-[53px] px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Phone Number</label>
                  <div className="flex h-[53px] px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9]">
                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/6c270b03fdf4c426d84d7f861b008439be573134?width=42" alt="" className="w-[21px] h-[21px] rounded-full" />
                    <input
                      type="tel"
                      value={parentPhone}
                      onChange={(e) => setParentPhone(e.target.value)}
                      className="flex-1 bg-transparent border-none outline-none text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px]"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex p-6 flex-col gap-4 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
              <h3 className="text-[#8C8C8C] font-satoshi text-lg font-bold leading-7 tracking-[-0.36px]">Program Assignment</h3>
              
              <div className="flex items-start gap-4">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Assigned Cohort</label>
                  <div className="relative">
                    <select
                      value={cohort}
                      onChange={(e) => setCohort(e.target.value)}
                      className="flex h-[53px] w-full px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870] appearance-none"
                      required
                    >
                      <option value="Product Design">Product Design</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Data Science">Data Science</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Mentor / Teacher</label>
                  <div className="relative">
                    <select
                      value={mentor}
                      onChange={(e) => setMentor(e.target.value)}
                      className="flex h-[53px] w-full px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870] appearance-none"
                      required
                    >
                      <option value="Mr Kareem Adisma">Mr Kareem Adisma</option>
                      <option value="Ms Sarah Johnson">Ms Sarah Johnson</option>
                      <option value="Dr Michael Chen">Dr Michael Chen</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
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
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 stroke-[#757575] pointer-events-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[#404040] font-random-grotesque-semibold text-sm font-semibold leading-[150%] tracking-[-0.28px]">Subscription Status</label>
                  <div className="relative">
                    <select
                      value={subscriptionStatus}
                      onChange={(e) => setSubscriptionStatus(e.target.value)}
                      className="flex h-[53px] w-full px-4 py-4 items-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] text-[#21231D] font-satoshi text-base font-medium leading-6 tracking-[-0.16px] outline-none focus:border-[#9FE870] appearance-none"
                      required
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Pending">Pending</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex p-6 flex-col gap-4 rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
              <button
                type="submit"
                className="flex h-14 px-8 py-2 justify-center items-center gap-2 rounded-full bg-[#9FE870] hover:bg-[#8FD85F] transition-colors"
              >
                <span className="text-[#1E3006] font-satoshi text-base font-bold leading-6 tracking-[-0.16px]">Update Changes</span>
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

export default EditStudentModal;
