/**
 * CheckoutWhatYouGetCard
 *
 * PURPOSE: Render the soft editorial value-summary card inspired by the
 * Value card for checkout (reference design).
 *
 * WHY this exists:
 * - the user wants a very specific visual language for this section
 * - keeping it separate from the page file makes it easier to iterate on the
 *   exact copy and styling without growing the main checkout orchestrator
 */

interface CheckoutWhatYouGetCardProps {
  highlight: string;
  items: readonly string[];
  lead: string;
}

export function CheckoutWhatYouGetCard({
  highlight,
  items,
  lead,
}: CheckoutWhatYouGetCardProps) {
  return (
    <section className="rounded-[28px] border border-[#E3E8F0] bg-[#F4F7FC] px-6 py-7 shadow-[0_14px_32px_rgba(15,23,42,0.04)] sm:px-8">
      <div className="text-center">
        <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.05em] text-[#111827]">
          {lead}
        </h2>
        <div className="mt-3 inline-flex rounded-full border-[4px] border-[#0A73FF] px-7 py-1.5">
          <span className="text-[3rem] font-semibold leading-none tracking-[-0.07em] text-[#111827]">
            {highlight}
          </span>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-2xl space-y-4">
        {items.map((item) => (
          <div className="flex items-start gap-3" key={item}>
            <span className="mt-1 text-[16px] text-[#111827]">✧</span>
            <p className="text-[16px] leading-[1.35] text-[#111827]">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CheckoutWhatYouGetCard;
