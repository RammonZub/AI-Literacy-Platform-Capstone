/**
 * CertificateSection
 *
 * PURPOSE: Show the actual certificate users earn on the landing page.
 * Can be customized with a specific program name for course landing pages.
 */

"use client";

import { Certificate } from "@/components/platform/certificate/Certificate";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { SITE_CERTIFICATE_ORG } from "@/lib/site-brand";

interface CertificateSectionProps {
  /** Optional program name - defaults to "AI Tools & Workflow Mastery" for main landing page */
  programName?: string;
}

export default function CertificateSection({
  programName = "AI Tools & Workflow Mastery",
}: CertificateSectionProps): React.JSX.Element {
  const ref = useScrollAnimation();

  return (
    <section id="certificate" className="section-padding bg-gray-50 scroll-mt-20">
      <div ref={ref} className="section-container animate-on-scroll">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Copy */}
          <div className="text-center lg:text-left lg:flex-1 max-w-md">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-[46px] text-gray-800 leading-tight tracking-tight">
              Earn a certificate that proves your AI skills
            </h2>
            <p className="font-body text-sm text-gray-500 mt-4">
              Share your achievement on LinkedIn. Proof of real skills.
            </p>
            <a href="/onboarding" className="btn-pill-primary mt-6 inline-block">
              Get your certificate
            </a>
          </div>

          {/* The ACTUAL Certificate - not a card preview */}
          <div className="w-full max-w-xl lg:flex-1">
            <Certificate
              studentName="Your Name"
              programName={programName}
              completionDate="day of completion"
              administratorName={SITE_CERTIFICATE_ORG}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
