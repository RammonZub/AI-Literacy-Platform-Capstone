import Image from "next/image";

/**
 * CheckoutMobileMockupCard
 *
 * PURPOSE: Add a compact product-visual card that shows the mobile learning
 * experience in a focused, single-card format between trust and the final
 * pricing close.
 *
 * NOTE:
 * - this component expects a dedicated checkout asset at the provided path
 * - keeping the image isolated here makes it easy to swap once the final mockup
 *   is updated without touching page layout code
 */

interface CheckoutMobileMockupCardProps {
  imageSrc: string;
  title: string;
}

export function CheckoutMobileMockupCard({
  imageSrc,
  title,
}: CheckoutMobileMockupCardProps) {
  return (
    <section className="px-1 py-2">
      <div className="mx-auto max-w-[320px] text-center">
        <h2 className="text-[1.6rem] font-semibold leading-[1.06] tracking-[-0.045em] text-[#111827] sm:text-[1.75rem]">
          <span className="font-bold text-[#1F6BFF]">Bite-sized learning</span> that{" "}
          <span className="font-bold text-[#1F6BFF]">fits your day</span>
        </h2>
      </div>

      <div className="mx-auto mt-6 max-w-[360px]">
        <div className="relative aspect-[0.76/1] w-full overflow-hidden rounded-[28px] bg-[#EAF2FF]">
          <Image
            alt={title}
            className="rounded-[28px] object-cover"
            fill
            sizes="360px"
            src={imageSrc}
          />
        </div>
      </div>
    </section>
  );
}

export default CheckoutMobileMockupCard;
