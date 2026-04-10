/**
 * LearnCourseDriverSection
 *
 * PURPOSE: Visual bento section for app-level driver benefits.
 */

import Image from "next/image";
import type {
  CoursePlatformPositioningContent,
  CourseProofSection,
} from "@/types/course-landing";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import LearnCourseSectionIntro from "./LearnCourseSectionIntro";

interface LearnCourseDriverSectionProps {
  positioning?: CoursePlatformPositioningContent;
  sections: CourseProofSection[];
}

export default function LearnCourseDriverSection({
  positioning,
  sections,
}: LearnCourseDriverSectionProps) {
  if (sections.length === 0) {
    return null;
  }

  const [habitSection, resourceSection] = sections;
  const lightTileClass =
    "border border-[#c7dcff] bg-[#D6E7FF] shadow-[0_14px_28px_rgba(15,23,42,0.04)]";
  const habitTileBackgroundSrc = "/images/landing/blue-bg-illustration.jpeg";
  const resourcesIllustrationSrc = "/images/landing/folder-illustration.png";

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
        <LearnCourseSectionIntro
          eyebrow={positioning?.eyebrow ?? `What ${SITE_BRAND_NAME} does`}
          title={
            positioning?.heading ??
            `${SITE_BRAND_NAME} is your AI filter for what actually helps at work.`
          }
          body={
            positioning?.body ??
            "One clear path, better judgment, and a system you can actually keep up with."
          }
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="relative min-h-[360px] overflow-hidden rounded-[1.6rem] border border-[#d9e7fb] bg-[#c5ddfb] shadow-[0_18px_36px_rgba(15,23,42,0.05)] md:min-h-[420px]">
            <div className="absolute inset-0">
              <Image
                src={habitTileBackgroundSrc}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-white/55 via-transparent to-transparent" />
            <div className="absolute left-4 top-4 inline-flex rounded-full border border-[#16140C]/12 bg-white/90 px-3 py-1 text-[11px] font-medium text-[#16140C] backdrop-blur-md">
              Daily AI habit
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-[1.2rem] border border-[#16140C]/12 bg-white/88 p-4 backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#007AFF]">
                {habitSection?.eyebrow ?? "Daily practice, designed to stay small"}
              </p>
              <h3 className="mt-2 max-w-[18rem] text-[1.35rem] font-normal leading-[1.1] tracking-tight text-[#16140C]">
                {habitSection?.heading ??
                  "Clean microlearning: bite-sized, manageable, and easy to keep up with."}
              </h3>
              <p className="mt-2 line-clamp-4 max-w-[18rem] text-sm leading-6 text-gray-600">
                {habitSection?.body ??
                  "Short lessons you can read or listen to—usually around ten minutes—plus quick tasks you can use the same day."}
              </p>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <article
              className={`relative overflow-hidden rounded-[1.45rem] sm:col-span-2 ${lightTileClass}`}
            >
              {/* Text sits on the tile background; illustration is a lower-right accent */}
              <div className="relative z-10 max-w-88 p-4 pb-24 sm:max-w-104 sm:p-5 sm:pb-5 sm:pr-40">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#007AFF]">
                  {resourceSection?.eyebrow ?? "600 plus ready-to-use resources"}
                </p>
                <h3 className="mt-2 text-[1.2rem] font-normal leading-[1.14] tracking-tight text-[#16140C] sm:text-[1.25rem] sm:leading-[1.12]">
                  {resourceSection?.heading ?? "Prompts, workflows, and templates built for your actual job."}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {resourceSection?.body ??
                    "Ready-made prompts and templates you can paste into real work—fast."}
                </p>
              </div>

              <div
                className="pointer-events-none absolute bottom-3 right-3 z-0 flex w-[min(44%,120px)] items-end justify-end sm:bottom-4 sm:right-4 sm:w-[136px] md:bottom-5 md:right-5 md:w-[152px]"
                aria-hidden
              >
                <Image
                  src={resourcesIllustrationSrc}
                  alt=""
                  width={440}
                  height={360}
                  className="h-auto w-full object-contain object-bottom"
                  sizes="(max-width: 640px) 120px, 152px"
                />
              </div>
            </article>

            <article className="rounded-[1.45rem] border border-[#d9e7fb] bg-[linear-gradient(135deg,#007AFF_0%,#4DA3FF_100%)] p-4 shadow-[0_14px_28px_rgba(15,23,42,0.04)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/72">
                Weekly AI briefing
              </p>
              <h3 className="mt-2 text-[1.1rem] font-normal leading-[1.15] tracking-tight text-white">
                Stay sharp without tracking every new AI tool.
              </h3>
              <p className="mt-3 max-w-[14rem] text-sm leading-6 text-white/82">
                We surface what matters so you can focus on useful progress.
              </p>
            </article>

            <article className={`rounded-[1.45rem] p-4 ${lightTileClass}`}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#007AFF]">
                Easy to follow
              </p>
              <h3 className="mt-2 text-[1.1rem] font-normal leading-[1.15] tracking-tight text-[#16140C]">
                Read it or listen on the go.
              </h3>
              <p className="mt-3 max-w-[14rem] text-sm leading-6 text-gray-600">
                Built for busy schedules, not binge-learning.
              </p>
            </article>

          </div>
        </div>

        <div className="mt-4">
          <article className="rounded-[1.45rem] border border-[#d9e7fb] bg-[linear-gradient(135deg,#0056CC_0%,#4DA3FF_100%)] p-5 shadow-[0_14px_28px_rgba(15,23,42,0.04)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/76">
              Tailored to your work
            </p>
            <h3 className="mt-2 max-w-[22rem] text-[1.2rem] font-normal leading-[1.14] tracking-tight text-white">
              Use AI where it actually helps your role.
            </h3>
            <p className="mt-3 max-w-[24rem] text-sm leading-6 text-white/84">
              Writing, planning, research, and repetitive admin work without the rabbit holes.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
