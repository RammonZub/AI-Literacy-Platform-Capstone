/**
 * Learn Landing Data Builder
 *
 * PURPOSE: Compose raw module content, shared platform marketing defaults,
 * and per-course landing configs into the final `/learn/[slug]` page model.
 *
 * CONTEXT: Course lesson data belongs under `src/data/content/modules/**`,
 * while marketing copy belongs under `src/data/marketing/learn/**`.
 *
 * KEY RESPONSIBILITIES:
 * - Keep the `/learn/[slug]` route backed by one stable frontend contract
 * - Merge shared brand positioning with course-specific copy cleanly
 * - Preserve current page behavior while making future copy iteration easier
 *
 * @see src/data/content/index.ts - Raw module source of truth
 * @see src/data/marketing/learn - Shared and per-course marketing data
 * @see src/types/course-landing.ts - Final landing-page contract
 */

import { modules } from "@/data/content";
import {
  buildDefaultCourseFaqs,
  courseLandingConfigByModuleId,
  courseLandingConfigBySlug,
  courseLandingConfigs,
  getSharedTestimonialsForModule,
  sharedLearnLandingConfig,
} from "@/data/marketing/learn";
import type { Module } from "@/types/content";
import type {
  CourseBenefitItem,
  CourseLandingConfig,
  CourseLandingData,
  CourseOutcomeItem,
  CourseProofSection,
  CourseStats,
  FAQ,
  LandingCta,
} from "@/types/course-landing";

function formatDuration(minutes: number): string {
  const hours = Math.round(minutes / 60);
  if (hours < 2) return "~1 hour";
  return `~${hours} hours`;
}

function calculateTotalLessons(chapters: CourseLandingData["chapters"]): number {
  return chapters.reduce((total, chapter) => total + chapter.lessons.length, 0);
}

function mergeCta(defaultCta: LandingCta, override?: Partial<LandingCta>): LandingCta {
  return {
    ...defaultCta,
    ...override,
    trackingName: override?.trackingName ?? defaultCta.trackingName,
    location: override?.location ?? defaultCta.location,
  };
}

function buildHeroEyebrow(module: Module): string {
  return module.courseType === "tools-mastery" ? `${module.title} course` : "AI Literacy Platform course";
}

function buildOutcomeItems(module: Module, config: CourseLandingConfig): CourseOutcomeItem[] {
  const defaultBody = `Build a clearer working approach to ${module.title.toLowerCase()} with examples, judgment, and repeatable patterns you can apply right away.`;
  const body = config.skills.outcomeBody ?? defaultBody;

  return config.skills.outcomes.map((outcome) => ({
    title: outcome,
    body,
  }));
}

function buildProofSections(module: Module, config: CourseLandingConfig): CourseProofSection[] {
  const sections = config.proofSections ?? sharedLearnLandingConfig.proofSections;

  return sections.map((section) => ({
    ...section,
    imageUrl: module.imageUrl,
  }));
}

function buildFaqs(module: Module, config: CourseLandingConfig): FAQ[] {
  if (config.faqs?.length) {
    return config.faqs;
  }

  return [...buildDefaultCourseFaqs(module.title), ...sharedLearnLandingConfig.sharedFaqs].slice(0, 5);
}

function buildProgramOverviewBody(module: Module, config: CourseLandingConfig): string {
  return (
    config.programOverview?.body ??
    "Move through the course in a structured progression. Each module builds practical ability, and every lesson is designed to stay focused, usable, and easy to finish in short sessions."
  );
}

function buildCourseLandingData(module: Module, config: CourseLandingConfig): CourseLandingData {
  const tagline = config.seo.tagline;

  return {
    id: module.id,
    title: module.title,
    description: module.description,
    category: module.category,
    courseType: module.courseType,
    imageUrl: module.imageUrl,
    color: module.color,
    chapters: module.chapters,
    estimatedMinutes: module.estimatedMinutes,
    landingPage: {
      slug: config.slug,
      tagline,
      level: config.level,
      highlights: config.skills.outcomes,
      hero: {
        eyebrow: config.hero?.eyebrow ?? buildHeroEyebrow(module),
        subtitle: config.hero?.subtitle ?? tagline,
        transformationLine: config.hero?.transformationLine,
        primaryCta: mergeCta(
          sharedLearnLandingConfig.defaultHeroPrimaryCta,
          config.hero?.primaryCta,
        ),
        secondaryCta: mergeCta(
          sharedLearnLandingConfig.defaultHeroSecondaryCta,
          config.hero?.secondaryCta,
        ),
      },
      transformation: config.transformation,
      platformPositioning:
        config.platformPositioning ?? sharedLearnLandingConfig.platformPositioning,
      benefits: config.benefits ?? sharedLearnLandingConfig.benefits,
      skills: {
        imageUrl: module.imageUrl,
        title: config.skills.title ?? "Skills you'll build",
        subtitle:
          config.skills.subtitle ??
          "A practical summary of the outcomes and repeatable capabilities this course is designed to strengthen.",
        outcomes: buildOutcomeItems(module, config),
        tags: config.skills.tags,
      },
      whyNow: {
        eyebrow: config.whyNow?.eyebrow ?? sharedLearnLandingConfig.whyNow.eyebrow,
        heading: config.whyNow?.heading ?? sharedLearnLandingConfig.whyNow.heading,
        paragraphs: config.whyNow?.paragraphs ?? sharedLearnLandingConfig.whyNow.paragraphs,
        imageUrl: config.whyNow?.imageUrl ?? module.imageUrl,
      },
      programOverview: {
        eyebrow: config.programOverview?.eyebrow ?? "Program overview",
        heading: config.programOverview?.heading ?? `${module.title}, organized into clear modules`,
        body: buildProgramOverviewBody(module, config),
      },
      newsletter: {
        heading: config.newsletter?.heading ?? sharedLearnLandingConfig.newsletter.heading,
        body: config.newsletter?.body ?? sharedLearnLandingConfig.newsletter.body,
        actionLabel:
          config.newsletter?.actionLabel ?? sharedLearnLandingConfig.newsletter.actionLabel,
        disclaimer:
          config.newsletter?.disclaimer ?? sharedLearnLandingConfig.newsletter.disclaimer,
        actionUrl: config.newsletter?.actionUrl,
        fallbackHref:
          config.newsletter?.fallbackHref ??
          sharedLearnLandingConfig.newsletter.fallbackHrefTemplate,
      },
      proofSections: buildProofSections(module, config),
      certificate: {
        eyebrow: config.certificate?.eyebrow ?? "Certificate included",
        heading: config.certificate?.heading ?? `Earn a certificate for ${module.title}`,
        body:
          config.certificate?.body ??
          "Finish with proof you put in the work and practical AI skill you can actually use right away.",
        cta: mergeCta(
          sharedLearnLandingConfig.defaultCertificateCta,
          config.certificate?.cta,
        ),
      },
      testimonials: config.testimonials ?? getSharedTestimonialsForModule(module.id),
      faqs: buildFaqs(module, config),
      ogImage: config.seo.ogImage,
      keywords: config.seo.keywords,
      relatedCourses: config.relatedCourses,
    },
  };
}

/**
 * Stable final learn landing dataset used by the `/learn/[slug]` route.
 */
export const COURSE_LANDING_DATA: CourseLandingData[] = courseLandingConfigs.flatMap((config) => {
  const courseModule = modules.find((item) => item.id === config.moduleId);
  return courseModule ? [buildCourseLandingData(courseModule, config)] : [];
});

export function getCourseBySlug(slug: string): CourseLandingData | undefined {
  const config = courseLandingConfigBySlug[slug];
  if (!config) return undefined;

  return COURSE_LANDING_DATA.find((course) => course.id === config.moduleId);
}

export function getCourseByModuleId(moduleId: string): CourseLandingData | undefined {
  const config = courseLandingConfigByModuleId[moduleId];
  if (!config) return undefined;

  return COURSE_LANDING_DATA.find((course) => course.id === config.moduleId);
}

export function getAllCourseSlugs(): string[] {
  return courseLandingConfigs.map((config) => config.slug);
}

export function getCoursesByCategory(category: string): CourseLandingData[] {
  return COURSE_LANDING_DATA.filter((course) => course.category === category);
}

export function getCoursesByType(courseType: string): CourseLandingData[] {
  return COURSE_LANDING_DATA.filter((course) => course.courseType === courseType);
}

export function getRelatedCourses(slug: string): CourseLandingData[] {
  const course = getCourseBySlug(slug);
  if (!course) return [];

  return course.landingPage.relatedCourses
    .map((relatedSlug) => getCourseBySlug(relatedSlug))
    .filter((item): item is CourseLandingData => item !== undefined);
}

export function getCourseStats(course: CourseLandingData): CourseStats {
  return {
    duration: formatDuration(course.estimatedMinutes),
    lessons: calculateTotalLessons(course.chapters),
    certificate: true,
    level: course.landingPage.level ?? "Beginner",
  };
}
