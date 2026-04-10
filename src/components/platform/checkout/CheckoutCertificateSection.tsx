import Image from "next/image";

/**
 * CheckoutCertificateSection
 *
 * PURPOSE: Add a simple proof section that shows buyers they also unlock a
 * certificate they can earn on completion.
 */

interface CheckoutCertificateSectionProps {
  imageSrc: string;
}

export function CheckoutCertificateSection({
  imageSrc,
}: CheckoutCertificateSectionProps) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-[#E3E8F0] bg-white px-4 py-6 shadow-[0_14px_32px_rgba(15,23,42,0.04)] sm:px-6">
      <div className="mx-auto max-w-[320px] text-center">
        <h2 className="text-[1.45rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111827]">
          Earn a <span className="text-[#1F6BFF]">certificate</span> as you learn
        </h2>
        <p className="mx-auto mt-2 max-w-[270px] text-[12px] leading-[1.45] text-[#667085]">
          Complete your path and unlock your certificate.
        </p>
      </div>

      <div className="mx-auto mt-5 max-w-[360px]">
        <div className="relative aspect-[1.05/0.82] w-full overflow-hidden rounded-[24px] border border-[#E7ECF3] bg-[#F8FAFC]">
          <Image
            alt="Certificate preview"
            className="object-cover"
            fill
            sizes="360px"
            src={imageSrc}
          />
        </div>
      </div>
    </section>
  );
}

export default CheckoutCertificateSection;
