/**
 * LearnCourseBenefitRail
 *
 * PURPOSE: Four-point support rail directly below the hero.
 *
 * CONTEXT:
 * This section gives a quick read on why the course is worth continuing into
 * before the user reaches deeper content like skills and the program overview.
 */

import type { CourseBenefitItem } from "@/types/course-landing";

interface LearnCourseBenefitRailProps {
  benefits: CourseBenefitItem[];
}

export default function LearnCourseBenefitRail({ benefits }: LearnCourseBenefitRailProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[980px] px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[620px] text-center">
          <h2 className="font-serif-display text-[1.15rem] font-normal leading-tight tracking-tight text-[#16140C] sm:text-[1.25rem]">
            Here&apos;s where AI Literacy Platform can take you
          </h2>
          <p className="mt-3 text-[15px] font-semibold tracking-tight text-[#007AFF]">
            A clearer path, more confidence, and less wasted time.
          </p>
        </div>

        <div className="mt-8 grid gap-5 border-t border-[#007AFF]/10 pt-7 md:grid-cols-2 md:gap-x-6 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="border-l border-[#007AFF]/10 pl-5 lg:first:border-l-0 lg:first:pl-0"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#00c2ff]" />
                <h3 className="text-[15px] font-medium tracking-tight text-[#16140C]">
                  {benefit.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">{benefit.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
