/**
 * OnboardingAssessmentShell
 *
 * Shared mobile-first page shell for the `/onboarding` assessment flow.
 * Owns the header wordmark row, five-section progress rail, and sticky
 * bottom action area so step components can stay focused on content.
 */

import type { ReactNode } from "react";
import Image from "next/image";
import type { OnboardingAssessmentProgressSection } from "@/lib/personalization/onboarding-progress-sections";
import { BrandWordmark } from "@/components/shared/BrandWordmark";
import { OnboardingAssessmentProgress } from "./OnboardingAssessmentProgress";

interface OnboardingAssessmentShellProps {
  action: ReactNode;
  backgroundClassName?: string;
  children: ReactNode;
  currentSectionOrder: number;
  onBack: () => void;
  progressPercent: number;
  sections: OnboardingAssessmentProgressSection[];
  showBackButton?: boolean;
  showProgress?: boolean;
}

export function OnboardingAssessmentShell({
  action,
  backgroundClassName = "bg-[#F4F6FA]",
  children,
  currentSectionOrder,
  onBack,
  progressPercent,
  sections,
  showBackButton = true,
  showProgress = true,
}: OnboardingAssessmentShellProps) {
  const hasAction = Boolean(action);

  return (
    <div className={["min-h-screen", backgroundClassName].join(" ")}>
      <div className="mx-auto flex min-h-screen w-full max-w-[460px] flex-col px-4 pb-4 pt-4 sm:px-5">
        <div className="px-1 py-1">
          <div className="relative flex items-center justify-center">
            {showBackButton ? (
              <button
                aria-label="Go back"
                className="absolute left-0 inline-flex h-11 w-11 items-center justify-center rounded-xl text-[24px] text-[#111827] active:opacity-60"
                onClick={onBack}
                type="button"
              >
                ←
              </button>
            ) : null}

            <div className="flex items-center gap-2.5">
              <BrandWordmark includeAI={false} size="md" variant="quiz" />
              <Image
                alt=""
                className="h-8 w-auto object-contain"
                height={32}
                src="/images/certifcate-stamp.svg"
                width={32}
              />
            </div>
          </div>

          {showProgress ? (
            <div className="mt-4 w-full">
              <OnboardingAssessmentProgress
                currentSectionOrder={currentSectionOrder}
                progressPercent={progressPercent}
                sections={sections}
              />
            </div>
          ) : null}
        </div>

        <main className="flex flex-1 flex-col justify-between">
          <div className="px-2 pb-5 pt-4">{children}</div>

          {hasAction ? (
            <div
              className={[
                "sticky bottom-0 mt-4 bg-gradient-to-t pb-2 pt-6",
                backgroundClassName === "bg-white"
                  ? "from-white via-white to-transparent"
                  : "from-[#F4F6FA] via-[#F4F6FA] to-transparent",
              ].join(" ")}
            >
              {action}
            </div>
          ) : null}
        </main>
      </div>
    </div>
  );
}
