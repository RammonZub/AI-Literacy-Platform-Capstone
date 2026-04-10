/**
 * CheckoutBenefitsCard
 *
 * PURPOSE: Display a strong value-summary card inspired by the provided
 * reference aligned with design tokens.
 */

import type { CheckoutBenefitItem } from "@/data/marketing/checkouts/checkout-content";

interface CheckoutBenefitsCardProps {
  items: CheckoutBenefitItem[];
  lead: string;
  highlight: string;
}

export function CheckoutBenefitsCard({
  items,
  lead,
  highlight,
}: CheckoutBenefitsCardProps) {
  return (
    <section className="rounded-[30px] border border-[#E5EAF3] bg-[#F6F8FC] p-7 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
      <div className="text-center">
        <h2 className="text-[2rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[#111827]">
          {lead}
        </h2>
        <div className="mt-3 inline-flex rounded-full border-[4px] border-[#2F6BDE] px-8 py-1.5">
          <span className="text-[3rem] font-semibold leading-none tracking-[-0.06em] text-[#111827]">
            {highlight}
          </span>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-2xl space-y-4">
        {items.map((item) => (
          <div className="flex items-start gap-3" key={item.id}>
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#BBD1FF] bg-white text-[#007AFF]">
              ✦
            </span>
            <p className="text-[16px] leading-7 text-[#111827]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CheckoutBenefitsCard;
