/**
 * LearnCourseRelatedRail
 *
 * PURPOSE: Horizontal discovery rail for related courses.
 *
 * CONTEXT:
 * This replaces the old rigid grid with a more browseable editorial rail while
 * keeping internal linking and cross-course discovery strong.
 */

import Image from "next/image";
import Link from "next/link";
import LearnCourseSectionIntro from "./LearnCourseSectionIntro";

interface RelatedCourseItem {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  color: {
    from: string;
    to: string;
  };
  lessons: number;
}

interface LearnCourseRelatedRailProps {
  currentSlug: string;
  relatedCourses: RelatedCourseItem[];
}

export default function LearnCourseRelatedRail({
  currentSlug,
  relatedCourses,
}: LearnCourseRelatedRailProps) {
  const courses = relatedCourses.filter((course) => course.slug !== currentSlug);

  if (courses.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
        <LearnCourseSectionIntro
          eyebrow="Continue exploring"
          title="Explore more certificates"
          body="Browse the next courses in the AI Literacy Platform catalog, from practical AI foundations to tool-specific mastery."
        />

        <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-2">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group relative min-w-[258px] max-w-[272px] snap-start overflow-hidden rounded-[1.45rem] bg-[#F4F8FC] transition-transform duration-300 hover:-translate-y-1 sm:min-w-[272px]"
            >
              <div className="relative aspect-[0.74/1]">
                <Image
                  src={course.imageUrl}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="272px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute left-3 top-3">
                  <span className="inline-flex rounded-full border border-[#F4F8FC]/60 bg-[#F4F8FC]/88 px-2.5 py-1 text-[11px] font-medium text-[#16140C] shadow-[0_8px_24px_rgba(255,255,255,0.2)] backdrop-blur-md">
                    Platform pick
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-[#F4F8FC]/40 bg-[#16140C]/32 p-3.5 text-[#F4F8FC] backdrop-blur-xl">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#F4F8FC]/80">
                  Course certificate
                </p>
                <h3 className="mt-2 text-[1.28rem] font-normal leading-[1.18] tracking-tight text-[#F4F8FC]">
                  {course.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-[13px] leading-5 text-[#F4F8FC]/78">
                  {course.description}
                </p>

                <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/18 pt-3">
                  <p className="text-[12px] text-[#F4F8FC]/78">{course.lessons} lessons</p>
                  <span className="inline-flex rounded-full border border-[#F4F8FC]/32 bg-[#F4F8FC]/18 px-3 py-1.5 text-[12px] font-medium text-[#F4F8FC] transition-colors group-hover:bg-[#F4F8FC]/24">
                    View course
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
