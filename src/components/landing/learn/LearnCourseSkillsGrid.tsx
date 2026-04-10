/**
 * LearnCourseSkillsGrid
 *
 * PURPOSE: Editorial "Skills you'll build" section for course outcomes and tags.
 */

import Image from "next/image";
import type { CourseLandingData } from "@/types/course-landing";
import LearnCourseSectionIntro from "./LearnCourseSectionIntro";

interface LearnCourseSkillsGridProps {
  course: CourseLandingData;
}

export default function LearnCourseSkillsGrid({ course }: LearnCourseSkillsGridProps) {
  const { title, landingPage, imageUrl } = course;
  const skillsHeroImageSrc = imageUrl;

  return (
    <section id="skills" className="bg-white py-16 scroll-mt-24">
      <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
        <LearnCourseSectionIntro
          eyebrow="Skills you'll build"
          title={`Use ${title} with more clarity and confidence`}
          align="center"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start">
          <div className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-[1.45rem] border border-[#dfe9f7] bg-[#F4F8FC] shadow-[0_16px_36px_rgba(15,23,42,0.04)] lg:row-span-2">
            <div className="relative min-h-[420px] lg:min-h-[760px]">
              <Image
                src={skillsHeroImageSrc}
                alt={`${title} skills visual`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white/6 via-transparent to-white/14" />
            </div>
          </div>

          <div className="rounded-[1.45rem] border border-[#dfe9f7] bg-[#F4F8FC] p-5 shadow-[0_10px_24px_rgba(15,23,42,0.03)] sm:p-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
              Course outcomes
            </h3>
            <div className="mt-5 space-y-4 border-t border-dashed border-black/12 pt-5">
              {landingPage.skills.outcomes.map((outcome) => (
                <div key={outcome.title} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#00c2ff]" />
                  <div>
                    <p className="text-[17px] font-medium leading-8 text-[#16140C]">{outcome.title}</p>
                    <p className="mt-1 text-[15px] leading-7 text-gray-600">{outcome.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.45rem] border border-[#dfe9f7] bg-[#F4F8FC] p-5 shadow-[0_10px_24px_rgba(15,23,42,0.03)] sm:p-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
              Skills in this course
            </h3>
            <div className="mt-5 flex flex-wrap gap-2 border-t border-dashed border-black/12 pt-5">
              {landingPage.skills.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#007AFF]/24 bg-[#F3F8FF] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#007AFF] shadow-[inset_0_1px_0_rgba(255,255,255,0.62),0_4px_10px_rgba(0,122,255,0.08)] backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
