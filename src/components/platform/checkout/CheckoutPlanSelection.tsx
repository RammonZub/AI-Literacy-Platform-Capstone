/**
 * CheckoutPlanSelection
 *
 * PURPOSE: Provide a pricing selector for checkout with a Tailwind-native layout.
 *
 * WHY this exists:
 * - checkout needs a clean room pricing surface that can evolve without
 *   depending on older checkout CSS bundles
 * - the user explicitly wants a lighter border treatment, smaller total-price
 *   line, larger per-day emphasis, and a visual hierarchy closer to the new
 *   reference image
 * - re-implementing the view here keeps all pricing logic local to v2 while
 *   preserving shared plan data and analytics wiring upstream
 */

import type { PricingTier } from "@/data/checkout/pricing";
import { isValidWelcomeCoupon } from "@/lib/stripe/config";

interface CheckoutPlanSelectionProps {
  /** Optional anchor for scroll targets (only the first pricing block should set this). */
  anchorId?: string;
  couponCode?: string | null;
  onSelectPlan: (planId: string) => void;
  pricingTiers: PricingTier[];
  selectedPlan: string;
  title?: string;
}

interface PriceParts {
  cents: string;
  currency: string;
  main: string;
}

/**
 * Split a formatted currency string into the pieces we need for the enlarged
 * right-hand price treatment used in checkout.
 */
function splitPrice(formattedPrice: string): PriceParts {
  const normalized = formattedPrice.replace(/\u00a0/g, " ").trim();
  const knownSymbols = ["CA$", "A$", "£", "€", "$"];
  const currency =
    knownSymbols.find(
      (candidate) => normalized.startsWith(candidate) || normalized.endsWith(candidate),
    ) || "$";

  let remaining = normalized;
  if (remaining.startsWith(currency)) {
    remaining = remaining.slice(currency.length).trim();
  } else if (remaining.endsWith(currency)) {
    remaining = remaining.slice(0, -currency.length).trim();
  }

  const decimalMatch = remaining.match(/([,.])(\d+)$/);
  const main = remaining.replace(/[,.]\d+$/, "").trim();

  return {
    cents: decimalMatch ? decimalMatch[2] : "00",
    currency,
    main,
  };
}

export function CheckoutPlanSelection({
  anchorId,
  couponCode,
  onSelectPlan,
  pricingTiers,
  selectedPlan,
  title = "Weekly, monthly, or lifetime",
}: CheckoutPlanSelectionProps) {
  const isWelcomeCoupon = isValidWelcomeCoupon(couponCode);

  return (
    <section className="space-y-4" {...(anchorId ? { id: anchorId } : {})}>
      <h1 className="text-center text-[1.9rem] font-semibold leading-none tracking-[-0.04em] text-[#111827] sm:text-[2.15rem]">
        {title}
      </h1>

      <div className="grid gap-3">
        {pricingTiers.map((plan) => {
          const isSelected = selectedPlan === plan.id;
          const isFreeLifetime = isWelcomeCoupon && plan.isOneTime;
          const priceParts = splitPrice(plan.isOneTime ? "$0.00" : plan.perDay);
          const showStrikePrices =
            !isFreeLifetime && plan.total !== plan.discountedPrice;

          return (
            <button
              className={[
                "relative min-h-[126px] w-full rounded-[22px] border bg-white px-5 py-4 text-left transition-[border-color,box-shadow,transform] duration-150 hover:translate-y-[-1px]",
                isSelected
                  ? "border-[1.5px] border-[#0A73FF] shadow-[0_14px_32px_rgba(10,115,255,0.16)] ring-2 ring-[#DCEBFF]"
                  : "border-[#C9CED6] shadow-none",
              ].join(" ")}
              key={plan.id}
              onClick={() => onSelectPlan(plan.id)}
              type="button"
            >
              {plan.popular ? (
                <div className="absolute inset-x-0 top-0 rounded-t-[21px] bg-[#0A73FF] py-2 text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-white">
                  Continue learning
                </div>
              ) : null}

              <div className={plan.popular ? "pt-8" : ""}>
                <div className="grid grid-cols-[28px_minmax(0,1fr)_auto] items-center gap-3">
                  <div className="flex items-center justify-center">
                    <span
                      aria-hidden
                      className={[
                        "flex h-5 w-5 items-center justify-center rounded-full border transition-colors duration-150",
                        isSelected ? "border-[#0A73FF]" : "border-[#C8CDD5]",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "h-2.5 w-2.5 rounded-full transition-colors duration-150",
                          isSelected ? "bg-[#0A73FF]" : "bg-transparent",
                        ].join(" ")}
                      />
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-[1.02rem] font-semibold tracking-[-0.03em] text-[#111827] sm:text-[1.12rem]">
                        {plan.interval === "month"
                          ? plan.id === "4week"
                            ? "1 month"
                            : plan.name
                          : plan.interval === "week"
                            ? "1 week"
                            : "Lifetime"}
                      </p>

                      {plan.isOneTime ? (
                        <span className="rounded-[8px] border border-[#0A73FF] px-2 py-1 text-[11px] font-semibold uppercase leading-none tracking-[0.05em] text-[#0A73FF]">
                          Lifetime tier
                        </span>
                      ) : showStrikePrices ? (
                        <span className="rounded-[8px] border border-[#0A73FF] px-2 py-1 text-[11px] font-semibold uppercase leading-none tracking-[0.05em] text-[#0A73FF]">
                          Offer applied
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12px] sm:text-[13px]">
                      {showStrikePrices ? (
                        <span className="text-[#767D87] line-through">{plan.total}</span>
                      ) : null}
                      <span className="font-medium text-[#3E4651]">
                        {isFreeLifetime ? "Free today" : plan.discountedPrice}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    {!plan.isOneTime && plan.perDayOriginal && showStrikePrices ? (
                      <div className="text-[12px] text-[#7B818B] line-through">
                        {plan.perDayOriginal}
                      </div>
                    ) : null}

                    {plan.isOneTime ? (
                      <div className="flex flex-col items-end justify-end leading-none">
                        <span className="text-[2.05rem] font-semibold tracking-[-0.06em] text-[#111827]">
                          Lifetime
                        </span>
                        <span className="mt-1 text-[12px] font-medium text-[#555D67]">
                          one-time access
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-end justify-end gap-1 leading-none">
                        <span className="pb-[6px] text-[1.45rem] font-semibold tracking-[-0.04em] text-[#111827]">
                          {priceParts.currency}
                        </span>
                        <span className="text-[3.35rem] font-semibold tracking-[-0.08em] text-[#111827]">
                          {priceParts.main}
                        </span>
                        <div className="flex flex-col items-start pb-[7px] leading-none">
                          <span className="text-[1.45rem] font-semibold tracking-[-0.05em] text-[#111827]">
                            .{priceParts.cents}
                          </span>
                          <span className="text-[12px] font-medium text-[#555D67]">
                            per day
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default CheckoutPlanSelection;
