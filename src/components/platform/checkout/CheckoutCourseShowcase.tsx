/**
 * CheckoutCourseShowcase
 *
 * PURPOSE: Add a screenshot-inspired discovery section under checkout that
 * highlights course modules through a lightweight, continuously scrolling
 * rail rather than long promotional copy blocks.
 *
 * WHY this exists:
 * - the user wants a visual section similar to the supplied mobile reference,
 *   adapted for course cards instead of book covers
 * - checkout needs a simple, image-led proof block that feels native to the
 *   learning product rather than like another pricing card
 */

import Image from "next/image";
import type { CheckoutCourseCard } from "@/data/marketing/checkouts/checkout-content";

interface CheckoutCourseShowcaseProps {
  accentLine: string;
  courses: CheckoutCourseCard[];
  footerBody: string;
  footerTitle: string;
  title: string;
}

export function CheckoutCourseShowcase({
  accentLine,
  courses,
  footerBody,
  footerTitle,
  title,
}: CheckoutCourseShowcaseProps) {
  const marqueeCourses = [...courses, ...courses, ...courses];
  const highlightedTitle = title.replace("practical AI", "__HIGHLIGHT__practical AI__HIGHLIGHT__");
  const highlightedFooterTitle = footerTitle.replace(
    "6 times more efficiently",
    "__HIGHLIGHT__6 times more efficiently__HIGHLIGHT__",
  );

  const renderHighlightedCopy = (copy: string) =>
    copy.split("__HIGHLIGHT__").map((part, index) =>
      index % 2 === 1 ? (
        <span className="text-[#1F6BFF]" key={`${part}-${index}`}>
          {part}
        </span>
      ) : (
        part
      ),
    );

  return (
    <section className="overflow-hidden rounded-[28px] border border-[#E3E8F0] bg-white px-4 py-6 shadow-[0_14px_32px_rgba(15,23,42,0.04)] sm:px-6">
      <div className="mx-auto max-w-[320px] text-center">
        <h2 className="text-[1.35rem] font-semibold leading-[1.14] tracking-[-0.035em] text-[#111827]">
          {renderHighlightedCopy(highlightedTitle)}
        </h2>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent" />

        <div className="flex min-w-max gap-4 animate-[checkout-course-marquee_42s_linear_infinite]">
          {marqueeCourses.map((course, index) => (
            <article
              className="group relative w-[148px] shrink-0 overflow-hidden rounded-[1.2rem] bg-[#F4F8FC]"
              key={`${course.id}-${index}`}
            >
              <div className="relative aspect-[0.74/1] overflow-hidden">
                <Image
                  alt={`${course.title} course`}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  fill
                  sizes="148px"
                  src={course.imageSrc}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/18 to-transparent" />
                <div className="absolute left-2 top-2">
                  <span className="inline-flex rounded-full border border-[#F4F8FC]/60 bg-[#F4F8FC]/88 px-2 py-0.5 text-[9px] font-medium text-[#16140C] shadow-[0_8px_20px_rgba(255,255,255,0.2)] backdrop-blur-md">
                    Staff pick
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-2 bottom-2 rounded-[0.95rem] border border-[#F4F8FC]/40 bg-[#16140C]/34 p-2.5 text-[#F4F8FC] backdrop-blur-xl">
                <p className="text-[8px] font-medium uppercase tracking-[0.16em] text-[#F4F8FC]/78">
                  Completion certificate
                </p>
                <p className="mt-1.5 line-clamp-1 text-[1rem] font-medium leading-[1.12] tracking-tight text-[#F4F8FC]">
                  {course.title}
                </p>
                <div className="mt-2 border-t border-white/16 pt-2">
                  <p className="text-[10px] text-[#F4F8FC]/76">{course.lessonsLabel}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {accentLine ? (
        <p className="mt-5 text-center text-[1.55rem] font-semibold leading-none tracking-[-0.04em] text-[#3C78F2]">
          {accentLine}
        </p>
      ) : null}

      <div className="mx-auto mt-10 max-w-[340px] text-center">
        <h3 className="text-[1.35rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[#111827]">
          {renderHighlightedCopy(highlightedFooterTitle)}
        </h3>
        <p className="mx-auto mt-1.5 max-w-[250px] text-[11px] leading-[1.4] text-[#667085]">
          {footerBody}
        </p>
      </div>
    </section>
  );
}

export default CheckoutCourseShowcase;
