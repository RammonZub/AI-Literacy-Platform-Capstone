/**
 * OnboardingAssessmentProgress
 *
 * Displays the five-section progress rail for the onboarding assessment,
 * aligned with the thesis dimensions (Professional Context → Time & Goals).
 */

import type { OnboardingAssessmentProgressSection } from "@/lib/personalization/onboarding-progress-sections";

interface OnboardingAssessmentProgressProps {
  sections: OnboardingAssessmentProgressSection[];
  currentSectionOrder: number;
  progressPercent: number;
}

export function OnboardingAssessmentProgress({
  sections,
  currentSectionOrder,
  progressPercent,
}: OnboardingAssessmentProgressProps) {
  const currentSection = sections.find((section) => section.order === currentSectionOrder);
  const currentSectionLabel = currentSection?.label ?? "";

  return (
    <div className="w-full space-y-2">
      <div className="relative h-6 px-3">
        <div className="absolute left-3 right-3 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#E5EAF3]" />
        <div
          className="absolute left-3 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#007AFF] transition-[width] duration-200 ease-out"
          style={{ width: `calc((100% - 24px) * ${progressPercent / 100})` }}
        />

        <div className="grid h-full grid-cols-5 items-center">
          {sections.map((section) => {
            const isActive = section.order === currentSectionOrder;
            const isComplete = section.order < currentSectionOrder;

            return (
              <div className="flex justify-center" key={section.id}>
                <div className="relative z-10 flex h-6 items-center justify-center rounded-full bg-[#F4F6FA] px-[5px]">
                  <div
                    className={[
                      "h-3 w-3 rounded-full border-2 transition-all duration-200",
                      isActive
                        ? "border-[#007AFF] bg-[#007AFF] shadow-[0_0_0_4px_rgba(0,122,255,0.12)]"
                        : isComplete
                          ? "border-[#007AFF] bg-[#007AFF]"
                          : "border-[#D7DEEA] bg-white",
                    ].join(" ")}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="min-h-[12px] text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#007AFF]">
          {currentSectionLabel}
        </p>
      </div>
    </div>
  );
}
