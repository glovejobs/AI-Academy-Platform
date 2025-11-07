import { ReactNode } from "react";

interface OnboardingLayoutProps {
  progress: number;
  progressLabel?: string;
  progressFillWidth?: number;
  children: ReactNode;
  footer: ReactNode;
  backgroundClassName?: string;
  headerMaxWidthClassName?: string;
  contentMaxWidthClassName?: string;
}

const LOGO_SRC = "https://api.builder.io/api/v1/image/assets/TEMP/7db5fae004e1db186d4348eeae009350c277e0e7?width=72";

export function OnboardingLayout({
  progress,
  progressLabel,
  progressFillWidth,
  children,
  footer,
  backgroundClassName,
  headerMaxWidthClassName,
  contentMaxWidthClassName,
}: OnboardingLayoutProps) {
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);
  const fillPercentage = Math.min(
    Math.max(progressFillWidth ?? normalizedProgress, 0),
    100
  );
  const headerWidthClass = headerMaxWidthClassName ?? "max-w-[864px]";
  const contentWidthClass = contentMaxWidthClassName ?? "max-w-[864px]";

  return (
    <div className={`h-screen flex flex-col overflow-hidden ${backgroundClassName ?? "bg-[#FAFAFA]"}`}>
      <header className="max-h-[100px] flex-shrink-0 border-b border-black/[0.05] bg-[#FAFAFA]/95 backdrop-blur-md overflow-hidden">
        <div className={`mx-auto w-full ${headerWidthClass} px-4 sm:px-6 py-3`}>
          <img src={LOGO_SRC} alt="Logo" className="w-9 h-9" />
        </div>
        <div className={`mx-auto w-full ${headerWidthClass} px-4 sm:px-6 pb-3`}>
          <div className="flex items-center gap-3">
            <div className="relative h-2 flex-1 rounded-lg bg-[#EAECF0] overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full rounded-lg bg-[#0A4D39]"
                style={{ width: `${fillPercentage}%` }}
              />
            </div>
            <span className="text-sm text-black font-normal tracking-tight whitespace-nowrap">
              {progressLabel ?? `${Math.round(normalizedProgress)}%`}
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 sm:px-6 overflow-hidden flex flex-col">
        <div className={`mx-auto w-full ${contentWidthClass} py-6 sm:py-8 flex flex-col justify-center`}>
          {children}
        </div>
      </main>

      <footer className="max-h-[100px] flex-shrink-0 border-t border-black/[0.05] bg-[#FAFAFA]/95 backdrop-blur-md overflow-hidden">
        <div
          className="px-4 sm:px-6 h-full flex items-center"
          style={{
            paddingTop: "12px",
            paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
          }}
        >
          <div className={`mx-auto w-full ${contentWidthClass}`}>{footer}</div>
        </div>
      </footer>
    </div>
  );
}
