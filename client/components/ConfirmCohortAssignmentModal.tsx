import React from 'react';
import { X } from 'lucide-react';

interface ConfirmCohortAssignmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  studentName: string;
  cohortName: string;
  studentAvatar?: string;
}

const ConfirmCohortAssignmentModal: React.FC<ConfirmCohortAssignmentModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  studentName,
  cohortName,
  studentAvatar,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10">
      <div className="w-full max-w-[400px] bg-white rounded-3xl shadow-[0_20px_24px_-4px_rgba(16,24,40,0.08),0_8px_8px_-4px_rgba(16,24,40,0.03)] p-8 flex flex-col items-center gap-6">
        <div className="w-full flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-6 w-full -mt-4">
          {studentAvatar ? (
            <img
              src={studentAvatar}
              alt={studentName}
              className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-[#9FE870] flex items-center justify-center text-[#1E3006] text-2xl font-bold border-2 border-white shadow-sm">
              {studentName.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
          )}

          <div className="text-center space-y-2">
            <h2 className="text-[#1E3006] font-['Random_Grotesque_Standard_Bold',sans-serif] text-2xl font-bold leading-tight">
              Confirm Cohort Assignment
            </h2>
            <p className="text-[#404040] font-['Satoshi',sans-serif] text-base leading-6">
              Assign {studentName} to {cohortName}?<br />
              Her workspace will update right away.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <button
              onClick={onConfirm}
              className="w-full py-3 px-6 bg-[#9FE870] hover:bg-[#8fd75f] text-[#1E3006] font-['Satoshi',sans-serif] text-base font-bold rounded-full transition-colors"
            >
              Confirm Assignment
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 px-6 bg-transparent hover:bg-gray-50 text-[#404040] font-['Satoshi',sans-serif] text-base font-medium rounded-full transition-colors"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCohortAssignmentModal;
