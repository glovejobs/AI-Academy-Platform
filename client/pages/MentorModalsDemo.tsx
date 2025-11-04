import React, { useState } from 'react';
import MentorAssignedSuccessModal from '../components/MentorAssignedSuccessModal';
import DeactivateMentorConfirmationModal from '../components/DeactivateMentorConfirmationModal';
import ReactivateMentorAccessModal from '../components/ReactivateMentorAccessModal';

export default function MentorModalsDemo() {
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [showReactivateModal, setShowReactivateModal] = useState(false);

  const handleAssignConfirm = () => {
    console.log('Mentor assigned successfully');
  };

  const handleDeactivateConfirm = () => {
    console.log('Mentor deactivated');
  };

  const handleReactivateConfirm = () => {
    console.log('Mentor reactivated');
  };

  return (
    <div className="min-h-screen bg-[#1E3006] p-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 rounded-3xl bg-white p-8">
          <h1 className="mb-2 font-['Random_Grotesque_Standard_Bold'] text-3xl font-bold leading-9 tracking-[-0.75px] text-black">
            Mentor Modals Demo
          </h1>
          <p className="font-['Satoshi'] text-base text-gray-600">
            Click the buttons below to preview the different mentor-related modals
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Mentor Assignment Card */}
          <div className="rounded-3xl bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#008915" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2 font-['Satoshi'] text-lg font-bold text-black">
              Mentor Assignment
            </h3>
            <p className="mb-4 font-['Satoshi'] text-sm text-gray-600">
              Confirm mentor assignment to a cohort
            </p>
            <button
              onClick={() => setShowAssignModal(true)}
              className="w-full rounded-full bg-[#6A8042] px-4 py-2 font-['Satoshi'] text-sm font-bold text-white transition-colors hover:bg-[#5a6f38]"
            >
              Show Modal
            </button>
          </div>

          {/* Deactivate Mentor Card */}
          <div className="rounded-3xl bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="#A8200D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2 font-['Satoshi'] text-lg font-bold text-black">
              Deactivate Mentor
            </h3>
            <p className="mb-4 font-['Satoshi'] text-sm text-gray-600">
              Confirm mentor account deactivation
            </p>
            <button
              onClick={() => setShowDeactivateModal(true)}
              className="w-full rounded-full bg-[#A8200D] px-4 py-2 font-['Satoshi'] text-sm font-bold text-white transition-colors hover:bg-[#8a1a0b]"
            >
              Show Modal
            </button>
          </div>

          {/* Reactivate Mentor Card */}
          <div className="rounded-3xl bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#008915" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-2 font-['Satoshi'] text-lg font-bold text-black">
              Reactivate Mentor
            </h3>
            <p className="mb-4 font-['Satoshi'] text-sm text-gray-600">
              Restore mentor account access
            </p>
            <button
              onClick={() => setShowReactivateModal(true)}
              className="w-full rounded-full bg-[#008915] px-4 py-2 font-['Satoshi'] text-sm font-bold text-white transition-colors hover:bg-[#007012]"
            >
              Show Modal
            </button>
          </div>
        </div>

        {/* Modals */}
        <MentorAssignedSuccessModal
          isOpen={showAssignModal}
          onClose={() => setShowAssignModal(false)}
          onConfirm={handleAssignConfirm}
          mentorName="Sarah Martinez"
          cohortName="AI Imaging — Week 4"
        />

        <DeactivateMentorConfirmationModal
          isOpen={showDeactivateModal}
          onClose={() => setShowDeactivateModal(false)}
          onConfirm={handleDeactivateConfirm}
          mentorName="Sarah Chen"
        />

        <ReactivateMentorAccessModal
          isOpen={showReactivateModal}
          onClose={() => setShowReactivateModal(false)}
          onConfirm={handleReactivateConfirm}
          mentorName="Olivia Rhye"
        />
      </div>
    </div>
  );
}
