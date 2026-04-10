/**
 * CheckoutCourseCarousel
 *
 * PURPOSE: Show the breadth of the curriculum with a lighter, image-led auto
 * scrolling course row.
 */

import Image from "next/image";
import type { CheckoutCourseCard } from "@/data/marketing/checkouts/checkout-content";

interface CheckoutCourseCarouselProps {
  courses: CheckoutCourseCard[];
}

export function CheckoutCourseCarousel({ courses }: CheckoutCourseCarouselProps) {
  const marqueeCourses = [...courses, ...courses];

  return (
    <section className="space-y-4 overflow-hidden">
      <div className="space-y-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#007AFF]">
          More inside the platform
        </p>
        <h2 className="text-[1.55rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111827]">
          Explore more courses, tools, and practical modules
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#FCFCFA] to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#FCFCFA] to-transparent sm:w-16" />
        <div className="flex min-w-max gap-4 animate-[checkout-course-marquee_32s_linear_infinite]">
          {marqueeCourses.map((course, index) => (
            <article
              className="w-[212px] shrink-0 overflow-hidden rounded-[24px] border border-[#E5EAF3] bg-white shadow-[0_12px_28px_rgba(15,23,42,0.05)]"
              key={`${course.id}-${index}`}
            >
              <div className="relative h-[140px] overflow-hidden bg-[#F8FAFC]">
                <Image
                  alt={`${course.title} course card`}
                  className="object-cover"
                  fill
                  sizes="220px"
                  src={course.imageSrc}
                />
              </div>
              <div className="space-y-2 p-4">
                <span className="inline-flex rounded-full bg-[#F3F8FF] px-2.5 py-1 text-[11px] font-semibold text-[#007AFF]">
                  {course.lessonsLabel}
                </span>
                <h3 className="text-[16px] font-semibold leading-[1.2] text-[#111827]">{course.title}</h3>
                <p className="line-clamp-2 text-[13px] leading-5 text-[#667085]">{course.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CheckoutCourseCarousel;
