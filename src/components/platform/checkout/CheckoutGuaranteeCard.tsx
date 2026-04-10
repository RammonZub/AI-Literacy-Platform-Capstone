/**
 * CheckoutGuaranteeCard
 *
 * PURPOSE: Add a clean refund-guarantee trust card near the bottom of
 * checkout, inspired by the v1 guarantee block but visually aligned with
 * the newer v2 cards.
 */

export function CheckoutGuaranteeCard() {
  return (
    <section className="overflow-hidden rounded-[28px] border border-[#DCEFD4] bg-[#F5FCF1] px-5 py-6 shadow-[0_14px_32px_rgba(15,23,42,0.04)]">
      <div className="mx-auto max-w-[320px] text-center">
        <div
          aria-hidden="true"
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-[1.4rem] shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
        >
          🎁
        </div>
        <h2 className="mt-4 text-[1.4rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[#111827]">
          30-Day Money-Back Guarantee
        </h2>
        <p className="mt-3 text-[13px] leading-6 text-[#4B5563]">
          Try the program for 30 days. If it is not the right fit, email us and we will refund
          every penny. No hassle.
        </p>
        <a
          className="mt-4 inline-flex text-[13px] font-medium text-[#1F6BFF] underline decoration-[#B8D2FF] underline-offset-4"
          href="/refund-policy"
          rel="noopener"
          target="_blank"
        >
          Learn more about our guarantee
        </a>
      </div>
    </section>
  );
}

export default CheckoutGuaranteeCard;
