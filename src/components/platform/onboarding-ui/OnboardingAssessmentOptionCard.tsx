/**
 * OnboardingAssessmentOptionCard
 *
 * Mobile-first selectable card for onboarding assessment answer options.
 * Uses a flat, bright surface with one strong selected state and generous
 * tap targets for phone use.
 */

interface OnboardingAssessmentOptionCardProps {
  compact?: boolean;
  emoji?: string;
  label: string;
  description?: string;
  disabled?: boolean;
  selected: boolean;
  selectionMode?: "single" | "multiple";
  onClick: () => void;
}

export function OnboardingAssessmentOptionCard({
  compact = false,
  emoji,
  label,
  description,
  disabled = false,
  selected,
  selectionMode = "single",
  onClick,
}: OnboardingAssessmentOptionCardProps) {
  const isMultiSelect = selectionMode === "multiple";

  return (
    <button
      aria-pressed={selected}
      disabled={disabled}
      data-selected={selected ? "true" : "false"}
      className={[
        "w-full rounded-[18px] border text-left transition-[transform,border-color,background-color,box-shadow,opacity] duration-150 active:scale-[0.995]",
        compact ? "min-h-[72px] px-3.5 py-4" : "min-h-[80px] px-4 py-4.5",
        disabled ? "cursor-not-allowed opacity-70" : "",
        selected
          ? "animate-[quiz-option-pulse_180ms_ease-out] border-[#007AFF] bg-[#F3F8FF] shadow-[0_8px_18px_rgba(0,122,255,0.10)]"
          : "border-[#E5EAF3] bg-white hover:border-[#C8D7F1]",
      ].join(" ")}
      onClick={onClick}
      type="button"
    >
      <div className={["flex items-start", compact ? "gap-2.5" : "gap-3"].join(" ")}>
        {isMultiSelect ? (
          <div
            aria-hidden
            className={[
              "mt-0.5 flex shrink-0 items-center justify-center rounded-[6px] border transition-colors duration-150",
              compact ? "h-[18px] w-[18px]" : "h-5 w-5",
              selected
                ? "border-[#007AFF] bg-[#007AFF] text-white"
                : "border-[#CBD5E1] bg-white text-transparent",
            ].join(" ")}
          >
            <span className="text-[12px] font-bold leading-none">✓</span>
          </div>
        ) : (
          <div
            aria-hidden
            className={[
              "mt-0.5 shrink-0 rounded-full border-2 transition-colors duration-150",
              compact ? "h-[18px] w-[18px]" : "h-5 w-5",
              selected ? "border-[#007AFF] bg-[#007AFF]" : "border-[#CBD5E1] bg-white",
            ].join(" ")}
          >
            <div
              className={[
                "rounded-full transition-colors duration-150",
                compact ? "m-[2px] h-[10px] w-[10px]" : "m-[3px] h-[10px] w-[10px]",
                selected ? "bg-white" : "bg-transparent",
              ].join(" ")}
            />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <p
            className={[
              "font-semibold text-[#121826]",
              compact ? "text-[14px] leading-5" : "text-[15px] leading-[1.45]",
            ].join(" ")}
          >
            {emoji ? <span className="mr-2 align-[-0.02em]">{emoji}</span> : null}
            <span>{label}</span>
          </p>
          {description ? (
            <p className="mt-1 text-[13px] leading-5 text-[#6B7280]">{description}</p>
          ) : null}
        </div>
      </div>
    </button>
  );
}
