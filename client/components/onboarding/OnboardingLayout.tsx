import { ReactNode } from "react";

interface OnboardingLayoutProps {
  progress: number;
  progressLabel?: string;
  progressFillWidth?: number;
  children: ReactNode;
  footer: ReactNode;
  backgroundClassName?: string;
}

const LOGO_SRC = "https://api.builder.io/api/v1/image/assets/TEMP/7db5fae004e1db186d4348eeae009350c277e0e7?width=72";

export function OnboardingLayout({
  progress,
  progressLabel,
  progressFillWidth,
  children,
  footer,
  backgroundClassName,
}: OnboardingLayoutProps) {
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);
  const fillPercentage = Math.min(
    Math.max(progressFillWidth ?? normalizedProgress, 0),
    100
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <header className="sticky top-0 z-40 border-b border-black/[0.05] bg-[#FAFAFA]/95 backdrop-blur-md">
        <div className="mx-auto w-full max-w-[864px] px-4 sm:px-6 py-4">
          <img src={LOGO_SRC} alt="Logo" className="w-9 h-9" />
        </div>
        <div className="mx-auto w-full max-w-[864px] px-4 sm:px-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="relative h-2 flex-1 rounded-lg bg-[#EAECF0] overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full rounded-lg bg-[#0A4D39]"
                style={{ width: `${fillPercentage}%` }}
              />
            </div>
            <span className="text-sm text-black font-normal tracking-tight">
              {progressLabel ?? `${Math.round(normalizedProgress)}%`}
            </span>
          </div>
        </div>
      </header>

      <main
        className="flex-1 px-4 sm:px-6"
        style={{ paddingBottom: "calc(220px + env(safe-area-inset-bottom, 0px))" }}
      >
        <div className="mx-auto w-full max-w-[864px] py-8 sm:py-12 lg:py-16">
          {children}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-black/[0.05] bg-[#FAFAFA]/95 backdrop-blur-md">
        <div
          className="px-4 sm:px-6"
          style={{
            paddingTop: "24px",
            paddingBottom: "calc(24px + env(safe-area-inset-bottom, 0px))",
          }}
        >
          <div className="mx-auto w-full max-w-[864px]">{footer}</div>
        </div>
      </footer>
    </div>
  );
}
