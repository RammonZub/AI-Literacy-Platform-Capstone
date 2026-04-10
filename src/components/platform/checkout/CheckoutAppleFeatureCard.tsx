/**
 * CheckoutAppleFeatureCard
 *
 * PURPOSE: Prestige/trust card; artwork URL is passed via `imageSrc` from parent content.
 */

import Image from "next/image";

interface CheckoutAppleFeatureCardProps {
  body: string;
  eyebrow: string;
  imageSrc: string;
  title: string;
}

export function CheckoutAppleFeatureCard({
  body,
  eyebrow,
  imageSrc,
  title,
}: CheckoutAppleFeatureCardProps) {
  return (
    <section className="overflow-hidden rounded-[30px] border border-[#E5EAF3] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
      <div className="grid gap-0 md:grid-cols-[220px_1fr]">
        <div className="relative min-h-[220px] bg-[#F6F8FC]">
          <Image
            alt="App of the day feature artwork"
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 220px"
            src={imageSrc}
          />
        </div>

        <div className="p-6 sm:p-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#007AFF]">{eyebrow}</p>
          <h2 className="mt-2 text-[1.55rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111827]">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#667085]">{body}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#F3F8FF] px-3 py-1.5 text-[12px] font-semibold text-[#007AFF]">
              Mobile-first clarity
            </span>
            <span className="rounded-full bg-[#F8FAFC] px-3 py-1.5 text-[12px] font-medium text-[#475467]">
              Clean, guided experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutAppleFeatureCard;
