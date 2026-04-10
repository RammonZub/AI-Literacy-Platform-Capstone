/**
 * LearnCourseWhyNow
 *
 * PURPOSE: Editorial market-relevance section that replaces instructor-led framing.
 */

import type { CourseLandingData } from "@/types/course-landing";

interface LearnCourseWhyNowProps {
  course: CourseLandingData;
}

export default function LearnCourseWhyNow({ course }: LearnCourseWhyNowProps) {
  const { landingPage } = course;

  return (
    <section id="why-now" className="bg-white py-16 scroll-mt-24">
      <div className="mx-auto max-w-[820px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[760px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-500">
            {landingPage.whyNow.eyebrow}
          </p>
          <h2 className="mt-4 font-serif-display text-[1.95rem] font-normal leading-[1.05] tracking-tight text-[#16140C] sm:text-[2.25rem] md:text-[2.45rem]">
            {landingPage.whyNow.heading}
          </h2>

          <div className="mt-6 space-y-4 text-[15px] leading-7 text-gray-700">
            {landingPage.whyNow.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
