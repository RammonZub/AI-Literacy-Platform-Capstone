/**
 * CheckoutSubscriptionCard
 *
 * PURPOSE: Briefly explain the subscription logic in a way that feels like a
 * product-quality reason instead of a defensive justification.
 */

interface CheckoutSubscriptionCardProps {
  body: string;
  chips?: string[];
  eyebrow: string;
  title: string;
}

export function CheckoutSubscriptionCard({
  body,
  chips = [],
  eyebrow,
  title,
}: CheckoutSubscriptionCardProps) {
  return (
    <section className="rounded-[28px] border border-[#E6ECF5] bg-[#F8FBFF] p-6 shadow-[0_14px_32px_rgba(15,23,42,0.04)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#007AFF]">{eyebrow}</p>
      <h2 className="mt-2 text-[1.55rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111827]">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#667085]">{body}</p>
      {chips.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              className="rounded-full border border-[#D6E4FF] bg-white px-3 py-1.5 text-[12px] font-medium text-[#2157C9]"
              key={chip}
            >
              {chip}
            </span>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default CheckoutSubscriptionCard;
