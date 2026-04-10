/**
 * CourseCertificate Section
 *
 * PURPOSE: Display the certificate users earn for completing a specific course.
 */

"use client";

import { Certificate } from "@/components/platform/certificate/Certificate";
import { SITE_CERTIFICATE_ORG } from "@/lib/site-brand";

interface CourseCertificateProps {
  /** Name of the course */
  courseTitle: string;
  /** Whether this is the 28-day challenge (shows start date) */
  isChallenge?: boolean;
}

export function CourseCertificate({ courseTitle, isChallenge = false }: CourseCertificateProps) {
  // Format today's date for the completion date
  const today = new Date();
  const completionDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Earn a Certificate</h2>
          <p className="mt-4 text-lg text-gray-600">
            Complete the course and get a certificate to showcase your new skills
          </p>
        </div>

        {/* Certificate Display */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <Certificate
              studentName="Your Name"
              programName={courseTitle}
              completionDate={completionDate}
              showProgramDates={isChallenge}
              administratorName={SITE_CERTIFICATE_ORG}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
