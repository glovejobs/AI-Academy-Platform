import React from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface DeactivateStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  studentName: string;
  studentInitials?: string;
}

const DeactivateStudentModal: React.FC<DeactivateStudentModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  studentName,
  studentInitials,
}) => {
  if (!isOpen) return null;

  const initials = studentInitials || studentName.split(' ').map(n => n[0]).join('').toUpperCase();

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
          <div className="w-20 h-20 rounded-full bg-[#FFFAEB] flex items-center justify-center border-2 border-white shadow-sm">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#EE7A13] text-lg font-bold font-['Satoshi',sans-serif]">
                {initials}
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#EE7A13] rounded-full flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-[#1E3006] font-['Random_Grotesque_Standard_Bold',sans-serif] text-2xl font-bold leading-tight">
              Deactivate Student Account
            </h2>
            <p className="text-[#404040] font-['Satoshi',sans-serif] text-base leading-6">
              Are you sure you want to deactivate {studentName}'s account? They'll lose access until reactivated, but progress will be saved.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <button
              onClick={onConfirm}
              className="w-full py-3 px-6 bg-[#9FE870] hover:bg-[#8fd75f] text-[#1E3006] font-['Satoshi',sans-serif] text-base font-bold rounded-full transition-colors"
            >
              Yes, Deactivate
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 px-6 bg-transparent hover:bg-gray-50 text-[#404040] font-['Satoshi',sans-serif] text-base font-medium rounded-full transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeactivateStudentModal;
