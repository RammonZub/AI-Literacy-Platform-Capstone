"use client";

/**
 * CheckoutNavbar
 *
 * PURPOSE: Recreate the high-conversion checkout-v1 top bar pattern for
 * checkout: urgency timer on the left, pulsing CTA on the right, and a
 * sticky compact format that stays visible while users scroll.
 *
 * WHY this exists:
 * - the user wants the same banner logic as checkout-v1, not a branded navbar
 * - the CTA should point users back to the pricing section from anywhere on the
 *   page
 * - keeping this self-contained avoids dragging old checkout CSS into v2
 */

import { checkoutPageLayout } from "@/lib/checkout/config";
import { isValidWelcomeCoupon } from "@/lib/stripe/config";

interface CheckoutNavbarProps {
  couponCode?: string | null;
  ctaLabel: string;
  minutes: string;
  onClick: () => void;
  seconds: string;
}

export function CheckoutNavbar({
  couponCode,
  ctaLabel,
  minutes,
  onClick,
  seconds,
}: CheckoutNavbarProps) {
  const isFreeAccess = isValidWelcomeCoupon(couponCode);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E7ECF3] bg-white/95 backdrop-blur-md">
      <div
        className={`mx-auto flex min-h-[72px] w-full items-center justify-between gap-3 px-4 py-3 sm:px-6 ${checkoutPageLayout.contentMaxWidthClass}`}
      >
        <div className="min-w-0">
          {isFreeAccess ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1F6BFF]">
              Exclusive free access
            </p>
          ) : (
            <>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1F6BFF]">
                Discount expires in
              </p>
              <div className="mt-1 flex items-end gap-1 text-[#111827]">
                <span className="text-[1.35rem] font-semibold tabular-nums leading-none">
                  {minutes}
                </span>
                <span className="pb-0.5 text-[11px] font-medium text-[#667085]">min</span>
                <span className="pb-[2px] text-[1rem] font-semibold text-[#1F6BFF]">:</span>
                <span className="text-[1.35rem] font-semibold tabular-nums leading-none">
                  {seconds}
                </span>
                <span className="pb-0.5 text-[11px] font-medium text-[#667085]">sec</span>
              </div>
            </>
          )}
        </div>

        <button
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-[14px] bg-[#0A73FF] px-4 text-[13px] font-semibold text-white shadow-[0_14px_28px_rgba(10,115,255,0.22)] transition-transform duration-150 hover:translate-y-[-1px] animate-[checkout-navbar-pulse_1.9s_ease-in-out_infinite]"
          onClick={onClick}
          type="button"
        >
          {ctaLabel}
        </button>
      </div>
    </header>
  );
}

export default CheckoutNavbar;
