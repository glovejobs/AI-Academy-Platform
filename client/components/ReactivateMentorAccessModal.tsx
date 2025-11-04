import React from 'react';
import { Check } from 'lucide-react';

interface ReactivateMentorAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  mentorName?: string;
}

const ReactivateMentorAccessModal: React.FC<ReactivateMentorAccessModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  mentorName = "Olivia Rhye"
}) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-2">
      <div className="w-full max-w-[400px] rounded-3xl bg-white shadow-[0_20px_24px_-4px_rgba(16,24,40,0.08),0_8px_8px_-4px_rgba(16,24,40,0.03)]">
        {/* Header */}
        <div className="flex flex-col items-center bg-white px-6 pt-6">
          <div className="flex flex-col items-center gap-4">
            {/* Icon */}
            <div className="flex items-center justify-center gap-2 rounded-full bg-[rgba(159,232,112,0.20)] p-3">
              <Check className="h-6 w-6 text-[#008915]" strokeWidth={2} />
            </div>

            {/* Text */}
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-center font-['Satoshi'] text-lg font-bold leading-7 tracking-[-0.18px] text-[#21231D]">
                Reactivate Mentor Access
              </h2>
              <p className="text-center font-['Satoshi'] text-sm font-normal leading-5 text-[#404040]">
                Are you sure you want to reactivate {mentorName}'s account? They will regain access to their dashboard and cohort data.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col pt-8">
          {/* Divider */}
          <div className="h-px bg-[#EAECF0]" />
          
          <div className="flex flex-col gap-3 p-6">
            <button
              onClick={handleConfirm}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#008915] px-[18px] py-[10px] font-['Satoshi'] text-base font-bold leading-6 text-white transition-colors hover:bg-[#007012]"
            >
              Yes, Reactivate
            </button>
            <button
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-white px-[18px] py-[10px] font-['Satoshi'] text-base font-bold leading-6 text-[#21231D] transition-colors hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactivateMentorAccessModal;
