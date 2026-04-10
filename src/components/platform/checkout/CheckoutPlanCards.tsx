/**
 * CheckoutPlanCards
 *
 * PURPOSE: Pricing cards for checkout.
 *
 * WHY this exists:
 * - the new checkout should not depend on the old checkout stylesheet contract
 * - pricing remains the primary conversion decision and should be visually
 *   first, thumb-friendly, and easy to compare
 */

import { isValidWelcomeCoupon } from "@/lib/stripe/config";
import type { PricingTier } from "@/data/checkout/pricing";

interface CheckoutPlanCardsProps {
  couponCode?: string | null;
  onSelectPlan: (planId: string) => void;
  pricingTiers: PricingTier[];
  selectedPlan: string;
}

function planSubtitle(planId: string, isOneTime: boolean): string {
  if (isOneTime) {
    return "One-time purchase for ongoing access—about $140 USD at list pricing.";
  }
  if (planId === "1week") {
    return "Weekly access priced around $13 USD for minimal-risk sampling.";
  }
  return "Monthly access at $50 USD when you are ready to continue learning.";
}

export function CheckoutPlanCards({
  couponCode,
  onSelectPlan,
  pricingTiers,
  selectedPlan,
}: CheckoutPlanCardsProps) {
  const isWelcomeCoupon = isValidWelcomeCoupon(couponCode);

  return (
    <section aria-labelledby="checkout-plans-title" className="space-y-4" id="checkout-plans">
      <div className="space-y-1">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#007AFF]">
          Three paid tiers
        </p>
        <h1
          className="text-[2rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[#111827] sm:text-[2.5rem]"
          id="checkout-plans-title"
        >
          Choose weekly, monthly, or lifetime access
        </h1>
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        {pricingTiers.map((plan) => {
          const isSelected = selectedPlan === plan.id;
          const isFreeLifetime = isWelcomeCoupon && plan.isOneTime;
          const showStrikePrices =
            !isFreeLifetime && plan.total !== plan.discountedPrice;

          return (
            <button
              className={[
                "relative rounded-[24px] border bg-white p-5 text-left transition-[transform,border-color,box-shadow] duration-150 hover:translate-y-[-1px]",
                isSelected
                  ? "border-[#007AFF] shadow-[0_16px_36px_rgba(0,122,255,0.14)]"
                  : "border-[#E5EAF3] shadow-[0_8px_24px_rgba(15,23,42,0.04)]",
                plan.popular ? "ring-2 ring-[#D9E9FF]" : "",
              ].join(" ")}
              key={plan.id}
              onClick={() => onSelectPlan(plan.id)}
              type="button"
            >
              {plan.popular ? (
                <div className="absolute right-4 top-4 rounded-full bg-[#007AFF] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                  Continue learning
                </div>
              ) : null}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                    {plan.name}
                  </p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-[2rem] font-semibold leading-none tracking-[-0.05em] text-[#111827]">
                      {isFreeLifetime ? "$0.00" : plan.discountedPrice}
                    </span>
                    {isFreeLifetime ? (
                      <span className="rounded-full bg-[#ECFDF3] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#027A48]">
                        Free now
                      </span>
                    ) : showStrikePrices ? (
                      <span className="pb-1 text-sm font-medium text-[#98A2B3] line-through">
                        {plan.total}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#667085]">
                    {planSubtitle(plan.id, !!plan.isOneTime)}
                  </p>
                </div>

                <div
                  aria-hidden
                  className={[
                    "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-150",
                    isSelected ? "border-[#007AFF] bg-[#007AFF]" : "border-[#CBD5E1] bg-white",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "h-[10px] w-[10px] rounded-full transition-colors duration-150",
                      isSelected ? "bg-white" : "bg-transparent",
                    ].join(" ")}
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {plan.savings ? (
                  <span className="rounded-full bg-[#F3F8FF] px-2.5 py-1 text-[11px] font-semibold text-[#007AFF]">
                    {plan.savings}
                  </span>
                ) : null}
                <span className="rounded-full bg-[#F8FAFC] px-2.5 py-1 text-[11px] font-medium text-[#667085]">
                  {plan.isOneTime ? "Long-term access" : "Instant access after payment"}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default CheckoutPlanCards;
