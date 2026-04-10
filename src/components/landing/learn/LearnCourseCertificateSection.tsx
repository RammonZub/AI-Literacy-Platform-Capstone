/**
 * LearnCourseCertificateSection
 *
 * PURPOSE: Course-specific certificate section with a more serious editorial wrapper.
 */

import Image from "next/image";
import Link from "next/link";
import type { CourseLandingData } from "@/types/course-landing";

interface LearnCourseCertificateSectionProps {
  course: CourseLandingData;
}

export default function LearnCourseCertificateSection({ course }: LearnCourseCertificateSectionProps) {
  const { title, landingPage } = course;

  return (
    <section id="certificate" className="bg-white py-18 scroll-mt-24">
      <div className="mx-auto grid max-w-[980px] gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.92fr)] lg:items-center lg:gap-8 lg:px-8">
        <div className="max-w-md">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-500">
            {landingPage.certificate.eyebrow}
          </p>
          <h2 className="mt-4 font-serif-display text-[2rem] font-normal leading-[1.05] tracking-tight text-[#16140C] sm:text-[2.3rem] md:text-[2.55rem]">
            {landingPage.certificate.heading}
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-gray-700">{landingPage.certificate.body}</p>

          <Link
            href={landingPage.certificate.cta.href}
            className="mt-7 inline-flex rounded-lg bg-[#007AFF] px-5 py-3 text-[15px] font-medium text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#0056CC]"
          >
            {landingPage.certificate.cta.label}
          </Link>
        </div>

        <div className="w-full max-w-[760px]">
          <div className="relative overflow-hidden rounded-[1.4rem] border border-[#dfe9f7] bg-[#F4F8FC] shadow-[0_10px_26px_rgba(15,23,42,0.05)]">
            <div className="relative aspect-square w-full">
              <Image
                src="/images/certificate-aesthetic.png"
                alt={`${title} certificate preview`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 760px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
