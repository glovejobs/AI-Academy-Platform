import React from 'react';
import { Check } from 'lucide-react';

interface MentorAssignedSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  mentorName?: string;
  cohortName?: string;
}

const MentorAssignedSuccessModal: React.FC<MentorAssignedSuccessModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  mentorName = "Sarah Martinez",
  cohortName = "AI Imaging — Week 4"
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
                Confirm Cohort Assignment
              </h2>
              <p className="text-center font-['Satoshi'] text-sm font-normal leading-5 text-[#404040]">
                Assign {mentorName} to {cohortName}. Her workspace will update right away.
              </p>
            </div>
          </div>
        </div>

        {/* Nova Help Section */}
        <div className="mt-4 flex flex-col items-center px-6">
          <div className="flex w-full items-center gap-2 rounded-2xl border border-[rgba(0,0,0,0.10)] bg-[#F9FAF9] p-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#9FE870]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#1E3006" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-1 flex-col">
              <h3 className="font-['Satoshi'] text-sm font-bold leading-6 tracking-[-0.14px] text-[#000]">
                Nova help
              </h3>
              <p className="font-['Satoshi'] text-sm font-normal leading-6 tracking-[-0.14px] text-[#404040]">
                Would you like Nova to send an automatic welcome note to {mentorName.split(' ')[0]} introducing their new mentor?
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
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#6A8042] px-[18px] py-[10px] font-['Satoshi'] text-base font-bold leading-6 text-white transition-colors hover:bg-[#5a6f38]"
            >
              Confirm Assignment
            </button>
            <button
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-[rgba(0,0,0,0.10)] bg-white px-[18px] py-[10px] font-['Satoshi'] text-base font-bold leading-6 text-[#21231D] transition-colors hover:bg-gray-50"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorAssignedSuccessModal;
