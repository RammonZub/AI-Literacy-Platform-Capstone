/**
 * CheckoutStickyActionBar
 *
 * PURPOSE: Keep the selected plan and primary checkout action visible on small
 * screens where the new checkout intentionally stacks a lot of proof content
 * below the pricing cards.
 *
 * WHY this exists:
 * - mobile visitors should not need to scroll all the way back to the top once
 *   they have already chosen a plan
 * - the bar stays compact, mirrors the selected plan, and preserves the same
 *   CTA event contract as the main page buttons
 */

interface CheckoutStickyActionBarProps {
  ctaLabel: string;
  disabled?: boolean;
  priceLabel: string;
  selectedPlanName: string;
  onClick: () => void;
}

export function CheckoutStickyActionBar({
  ctaLabel,
  disabled = false,
  priceLabel,
  selectedPlanName,
  onClick,
}: CheckoutStickyActionBarProps) {
  return (
    <div className="sticky bottom-0 z-30 mt-auto border-t border-[#E6ECF5] bg-white/95 px-4 py-3 backdrop-blur supports-[padding:max(0px)]:pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-[#007AFF]">
            {selectedPlanName}
          </p>
          <p className="truncate text-sm font-semibold text-[#111827]">{priceLabel}</p>
        </div>

        <button
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#007AFF] px-5 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(0,122,255,0.22)] transition-transform duration-150 hover:translate-y-[-1px] disabled:translate-y-0 disabled:opacity-70"
          disabled={disabled}
          onClick={onClick}
          type="button"
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}

export default CheckoutStickyActionBar;
