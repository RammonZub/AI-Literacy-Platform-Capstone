/**
 * LearnCourseHero
 *
 * PURPOSE: Premium hero composition for public course landing pages.
 *
 * CONTEXT:
 * This hero establishes the course identity with a restrained editorial layout:
 * one text column, one large image plane, and two clear CTAs.
 */

import Image from "next/image";
import Link from "next/link";
import type { CourseLandingData } from "@/types/course-landing";

/** Shipped asset used only when a course record has no `imageUrl` (should be rare). */
const COURSE_LANDING_HERO_FALLBACK_SRC = "/images/landing/hero/ugc-man-tablet.jpg";

interface LearnCourseHeroProps {
  course: CourseLandingData;
}

export default function LearnCourseHero({ course }: LearnCourseHeroProps) {
  const { title, landingPage, imageUrl } = course;
  const trimmed = typeof imageUrl === "string" ? imageUrl.trim() : "";
  const heroImageSrc = trimmed.length > 0 ? trimmed : COURSE_LANDING_HERO_FALLBACK_SRC;
  const heroImageAlt = `${title} — course preview`;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[980px] px-4 pb-10 pt-8 sm:px-6 md:pb-14 md:pt-12 lg:px-8 lg:pb-16">
        <div className="sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] sm:items-center sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] lg:grid-cols-[minmax(0,1fr)_minmax(320px,380px)] lg:gap-12">
          <div className="mx-auto max-w-[780px] text-center sm:mx-0 sm:max-w-[28rem] sm:text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-500">
              {landingPage.hero.eyebrow}
            </p>

            <h1 className="mt-4 font-serif-display text-[2.1rem] font-normal leading-[1.02] tracking-tight text-[#16140C] sm:text-[2.35rem] md:text-[2.55rem] lg:text-[2.75rem]">
              {title}
            </h1>

            <p className="mx-auto mt-4 max-w-[44rem] text-[15px] leading-7 text-gray-600 sm:mx-0 sm:max-w-[28rem]">
              {landingPage.hero.subtitle}
            </p>

            {landingPage.hero.transformationLine ? (
              <p className="mx-auto mt-4 max-w-[30rem] text-[15px] font-semibold leading-7 tracking-tight text-[#007AFF] sm:mx-0">
                {landingPage.hero.transformationLine}
              </p>
            ) : null}

            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-start">
              <Link
                href={landingPage.hero.primaryCta.href}
                className="inline-flex min-h-[50px] w-full items-center justify-center rounded-md bg-[#007AFF] px-5 py-3 text-center text-[15px] font-semibold leading-5 text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#0056CC] sm:min-w-[170px] sm:w-auto"
              >
                {landingPage.hero.primaryCta.label}
              </Link>
              <a
                href={landingPage.hero.secondaryCta.href}
                className="inline-flex min-h-[50px] w-full items-center justify-center rounded-md border border-[#007AFF]/16 px-5 py-3 text-center text-[15px] font-semibold leading-5 text-[#007AFF] transition-colors hover:border-[#007AFF]/34 hover:bg-[#007AFF]/4 sm:min-w-[170px] sm:w-auto"
              >
                {landingPage.hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-8 w-full max-w-[620px] overflow-hidden rounded-[1.6rem] border border-[#dfe9f7] bg-[#F4F8FC] shadow-[0_10px_26px_rgba(15,23,42,0.05)] sm:mt-0 sm:max-w-[320px] md:max-w-[340px] lg:max-w-[380px]">
            <div className="relative aspect-[1/1] w-full">
              <Image
                src={heroImageSrc}
                alt={heroImageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 639px) 100vw, (max-width: 767px) 320px, (max-width: 1023px) 340px, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
