import type { CourseTransformationContent } from "@/types/course-landing";

interface LearnCourseTransformationSectionProps {
  transformation?: CourseTransformationContent;
}

export default function LearnCourseTransformationSection({
  transformation,
}: LearnCourseTransformationSectionProps) {
  if (!transformation || transformation.items.length === 0) {
    return null;
  }

  return (
    <section id="transformation" className="bg-[#FCFBF8] py-16 scroll-mt-24">
      <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[680px] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#007AFF]">
            {transformation.eyebrow}
          </p>
          <h2 className="mt-4 font-serif-display text-[2rem] font-normal leading-[1.05] tracking-tight text-[#16140C] sm:text-[2.3rem]">
            {transformation.heading}
          </h2>
          {transformation.body ? (
            <p className="mt-4 text-[15px] leading-7 text-gray-600">{transformation.body}</p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {transformation.items.map((item) => (
            <article
              key={`${item.before}-${item.after}`}
              className="rounded-[1.4rem] border border-[#dfe9f7] bg-white p-5 shadow-[0_10px_26px_rgba(15,23,42,0.04)]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500">
                Before
              </p>
              <p className="mt-3 text-[15px] leading-7 text-gray-600">{item.before}</p>
              <div className="my-4 h-px w-full bg-[#007AFF]/10" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#007AFF]">
                After
              </p>
              <p className="mt-3 text-[15px] leading-7 text-[#16140C]">{item.after}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
