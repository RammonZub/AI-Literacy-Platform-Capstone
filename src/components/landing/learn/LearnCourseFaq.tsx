/**
 * LearnCourseFaq
 *
 * PURPOSE: Visible FAQ section for course landing pages using course-specific data.
 */

import type { FAQ } from "@/types/course-landing";
import LearnCourseSectionIntro from "./LearnCourseSectionIntro";

interface LearnCourseFaqProps {
  items: FAQ[];
}

export default function LearnCourseFaq({ items }: LearnCourseFaqProps) {
  return (
    <section id="faq" className="bg-white py-18 scroll-mt-24">
      <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
        <LearnCourseSectionIntro
          eyebrow="FAQ"
          title="Common questions"
          body="A few of the questions people usually want answered before they start."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-4xl divide-y divide-black/10 border-t border-black/10">
          {items.map((item, index) => {
            return (
              <details
                key={item.question}
                className="group py-6"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-lg font-medium tracking-tight text-[#16140C]">
                    {item.question}
                  </span>
                  <span
                    className="mt-1 text-2xl leading-none text-gray-500 transition-transform duration-150 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <div className="overflow-hidden">
                  <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">{item.answer}</p>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
