import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { OnboardingLayout } from "../components/onboarding/OnboardingLayout";

export default function Pricing() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    navigate("/payment");
  };

  const handleBack = () => {
    navigate("/rewards");
  };

  return (
    <OnboardingLayout
      progress={80}
      backgroundClassName="bg-white"
      headerMaxWidthClassName="max-w-[1280px]"
      contentMaxWidthClassName="max-w-[1280px]"
      footer={
        <div className="w-full bg-white rounded-[32px] border border-black/[0.08] p-4 sm:p-6 flex justify-start">
          <button
            onClick={handleBack}
            className="text-lg font-bold text-[#163300] leading-[1.2] font-heading underline hover:opacity-80 transition-opacity"
          >
            Go Back
          </button>
        </div>
      }
    >
      <div className="w-full max-w-[960px] mx-auto text-center mb-16">
        <p className="text-base text-[#163300] leading-[1.5] tracking-[-0.32px] mb-3 font-medium">
          Pricing
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#101828] leading-[1.25] tracking-[-0.96px] mb-6 font-heading">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-[#8C8C8C] leading-[1.5] font-semibold">
          Invest in your child's future with flexible payment options
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="w-full grid md:grid-cols-2 gap-8 mb-12 px-0 md:px-4">
        {/* 2 Months Plan */}
        <div className="flex flex-col rounded-[32px] border border-black/[0.08] bg-[#FAFAFA] overflow-hidden">
          <div className="p-8 border-b border-[#EAECF0]">
            <p className="text-lg text-[#404040] leading-[1.5] tracking-[-0.36px] mb-4 font-body">
              2 Months Cohort
            </p>
            <div className="flex items-end gap-1 mb-4">
              <span className="text-6xl font-bold text-[#101828] leading-[1.2] tracking-[-1.2px] font-heading">
                $299
              </span>
              <span className="text-base font-bold text-[#404040] leading-[1.5] tracking-[-0.32px] pb-2">
                Total
              </span>
            </div>
            <p className="text-base text-[#404040] leading-[1.5] tracking-[-0.32px] mb-8 font-body">
              8-week real-world AI experience for creative students.
            </p>
            <button
              onClick={() => handleSelectPlan("2-month")}
              className="w-full px-8 py-4 h-14 bg-[#9FE870] rounded-full hover:bg-[#8FD860] transition-colors"
            >
              <span className="text-lg font-bold text-[#163300] leading-[1.2] font-heading">
                Select Plan
              </span>
            </button>
          </div>
          
          <div className="p-8 space-y-4">
            <CheckItem text="Work in real-world teams — like a full-time creative intern." />
            <div className="space-y-3">
              <CheckItem text="Learn across 6 creative AI subfields:" />
              <p className="text-base text-[#404040] leading-[1.5] tracking-[-0.32px] pl-9 font-body">
                AI Research<br/>
                AI Writing<br/>
                AI Advertising<br/>
                AI Imaging<br/>
                AI Video Creation<br/>
                Vibe Coding<br/>
                Product Design.
              </p>
            </div>
            <CheckItem text="Weekly hands-on project assignments." />
            <CheckItem text="Direct instructor feedback & peer collaboration." />
            <CheckItem text="Digital certificate upon completion." />
            <CheckItem text="Parent progress dashboard with weekly reports." />
          </div>
        </div>

        {/* 1 Year Plan - Popular */}
        <div className="flex flex-col rounded-[32px] border-2 border-[#36DD50] bg-white overflow-hidden">
          <div className="p-8 border-b border-[#EAECF0]">
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg text-[#404040] leading-[1.5] tracking-[-0.36px] font-body">
                1 Year Plan
              </p>
              <span className="px-3 py-1 rounded-2xl bg-black/[0.08] text-sm font-medium text-[#163300] leading-[1.5] tracking-[-0.28px]">
                Popular
              </span>
            </div>
            <div className="flex items-end gap-1 mb-4">
              <span className="text-6xl font-bold text-[#101828] leading-[1.2] tracking-[-1.2px] font-heading">
                $999
              </span>
              <span className="text-base font-bold text-[#404040] leading-[1.5] tracking-[-0.32px] pb-2">
                per Year
              </span>
            </div>
            <p className="text-base text-[#404040] leading-[1.5] tracking-[-0.32px] mb-8 font-body">
              Basic features for up to 10 users.
            </p>
            <button
              onClick={() => handleSelectPlan("1-year")}
              className="w-full px-8 py-4 h-14 bg-[#9FE870] rounded-full hover:bg-[#8FD860] transition-colors"
            >
              <span className="text-lg font-bold text-[#163300] leading-[1.2] font-heading">
                Select Plan
              </span>
            </button>
          </div>
          
          <div className="p-8 space-y-4">
            <CheckItem text="Access to 6 bootcamp sessions per year (choose new tracks)" />
            <div className="space-y-3">
              <CheckItem text="Learn across 6 creative AI subfields:" />
              <p className="text-base text-[#404040] leading-[1.5] tracking-[-0.32px] pl-9 font-body">
                AI Research<br/>
                AI Writing<br/>
                AI Advertising<br/>
                AI Imaging<br/>
                AI Video Creation<br/>
                Vibe Coding<br/>
                Product Design.
              </p>
            </div>
            <CheckItem text="Work on real client projects with professional feedback." />
            <CheckItem text="1-on-1 mentorship sessions with creative industry experts." />
            <CheckItem text="Career readiness workshops — resume, portfolio, and presentation skills." />
            <CheckItem text="Priority instructor access for faster support and reviews." />
            <CheckItem text="Advanced project portfolio space to showcase real-world outcomes." />
            <CheckItem text="Full-year access to all creative tracks and community features." />
          </div>
        </div>
      </div>

    </OnboardingLayout>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 mt-0.5">
        <Check className="w-6 h-6 text-[#163300]" strokeWidth={2} />
      </div>
      <p className="flex-1 text-base text-[#404040] leading-[1.5] tracking-[-0.32px] font-body">
        {text}
      </p>
    </div>
  );
}
