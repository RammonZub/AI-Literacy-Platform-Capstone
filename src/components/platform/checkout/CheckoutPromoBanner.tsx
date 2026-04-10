/**
 * CheckoutPromoBanner
 *
 * PURPOSE: Sticky, compact top banner that keeps the discount and CTA visible
 * without dominating the page.
 */

interface CheckoutPromoBannerProps {
  ctaLabel: string;
  isFreeAccess?: boolean;
  message: string;
  minutes: string;
  onClick: () => void;
  seconds: string;
}

export function CheckoutPromoBanner({
  ctaLabel,
  isFreeAccess = false,
  message,
  minutes,
  onClick,
  seconds,
}: CheckoutPromoBannerProps) {
  return (
    <div className="sticky top-0 z-40 border-b border-[#E8EDF5] bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#007AFF]">
            {isFreeAccess ? "Exclusive access" : "Limited-time offer"}
          </p>
          <p className="mt-1 text-sm font-medium leading-5 text-[#111827]">{message}</p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          {!isFreeAccess ? (
            <div className="hidden rounded-full bg-[#F3F8FF] px-3 py-1.5 text-center sm:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#007AFF]">
                Discount ends in
              </p>
              <p className="font-semibold tabular-nums text-[#111827]">
                {minutes}:{seconds}
              </p>
            </div>
          ) : null}

          <button
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#007AFF] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(0,122,255,0.22)] transition-transform duration-150 hover:translate-y-[-1px]"
            onClick={onClick}
            type="button"
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPromoBanner;
