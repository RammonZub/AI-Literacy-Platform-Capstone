/**
 * Course Landing Page Type Definitions
 *
 * PURPOSE: Define the content contract for public `/learn/[slug]` course pages.
 *
 * CONTEXT:
 * These types extend core module content with course-landing-specific structure:
 * hero content, benefit rails, skills grids, program overview copy, proof sections,
 * FAQs, and related-course discovery.
 *
 * DESIGN DECISION:
 * The landing page is built from reusable section primitives. Each section should
 * get its content from this model rather than hardcoded JSX strings.
 */

import type { Module } from "./content";

/**
 * Individual testimonial for social proof
 */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  company?: string;
}

/**
 * FAQ entry for schema markup and on-page display
 */
export interface FAQ {
  question: string;
  answer: string;
}

/**
 * CTA variants used across the landing page
 */
export type LandingCtaVariant = "primary" | "secondary" | "capture";

/**
 * CTA definition for buttons and links on the landing page
 */
export interface LandingCta {
  label: string;
  href: string;
  variant: LandingCtaVariant;
  trackingName: string;
  location: string;
}

/**
 * SEO-focused landing metadata that is authored per course landing page.
 */
export interface CourseLandingSeoConfig {
  tagline: string;
  keywords: string[];
  ogImage: string;
}

/**
 * Small benefit item used in the hero support rail
 */
export interface CourseBenefitItem {
  title: string;
  body: string;
}

/**
 * Hero content block
 */
export interface CourseHeroContent {
  eyebrow: string;
  subtitle: string;
  transformationLine?: string;
  primaryCta: LandingCta;
  secondaryCta: LandingCta;
}

/**
 * Skills grid content block
 */
export interface CourseSkillsContent {
  imageUrl: string;
  title: string;
  subtitle: string;
  outcomes: CourseOutcomeItem[];
  tags: string[];
}

/**
 * Outcome item with a title and supporting explanation
 */
export interface CourseOutcomeItem {
  title: string;
  body: string;
}

/**
 * Before/after transformation statement used for more direct-response framing.
 */
export interface CourseTransformationItem {
  before: string;
  after: string;
}

/**
 * Course-level transformation framing for future outcome-focused sections.
 */
export interface CourseTransformationContent {
  eyebrow: string;
  heading: string;
  body?: string;
  items: CourseTransformationItem[];
}

/**
 * Platform positioning block that explains the product layer
 * separately from the specific course promise.
 */
export interface CoursePlatformPositioningContent {
  eyebrow: string;
  heading: string;
  body: string;
  bullets?: string[];
}

/**
 * Market-relevance content block
 */
export interface CourseWhyNowContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  imageUrl: string;
}

/**
 * Program overview section intro copy
 */
export interface CourseProgramOverviewContent {
  eyebrow: string;
  heading: string;
  body: string;
}

/**
 * Newsletter/email capture section copy
 *
 * `actionUrl` is optional because the repo does not currently have a newsletter
 * backend. When absent, the UI should use `fallbackHref`.
 */
export interface CourseNewsletterContent {
  heading: string;
  body: string;
  actionLabel: string;
  disclaimer: string;
  actionUrl?: string;
  fallbackHref: string;
}

/**
 * Editorial driver/content section
 */
export interface CourseProofSection {
  eyebrow: string;
  heading: string;
  body: string;
  imageUrl: string;
}

/**
 * Certificate section copy
 */
export interface CourseCertificateContent {
  eyebrow: string;
  heading: string;
  body: string;
  cta: LandingCta;
}

/**
 * SEO metadata plus page-architecture content for course landing pages
 */
export interface CourseLandingPageMeta {
  slug: string;
  tagline: string;
  level?: CourseLevel;
  highlights: string[];
  hero: CourseHeroContent;
  transformation?: CourseTransformationContent;
  platformPositioning?: CoursePlatformPositioningContent;
  benefits: CourseBenefitItem[];
  skills: CourseSkillsContent;
  whyNow: CourseWhyNowContent;
  programOverview: CourseProgramOverviewContent;
  newsletter: CourseNewsletterContent;
  proofSections: CourseProofSection[];
  certificate: CourseCertificateContent;
  testimonials: Testimonial[];
  faqs: FAQ[];
  ogImage: string;
  keywords: string[];
  relatedCourses: string[];
}

/**
 * Complete course landing page data
 */
export interface CourseLandingData
  extends Pick<
    Module,
    | "id"
    | "title"
    | "description"
    | "category"
    | "courseType"
    | "imageUrl"
    | "color"
    | "chapters"
    | "estimatedMinutes"
  > {
  landingPage: CourseLandingPageMeta;
}

export interface RelatedCourseItem {
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

export interface CourseLandingRenderOptions {
  showNavbar?: boolean;
  showFooter?: boolean;
  showRelatedCourses?: boolean;
}

/**
 * Authoring config for a single `/learn/[slug]` page before it is merged with:
 * - raw module/chapter/lesson content
 * - shared platform landing defaults
 *
 * This keeps marketing copy editable without mixing it into lesson data.
 */
export interface CourseLandingConfig {
  moduleId: string;
  slug: string;
  seo: CourseLandingSeoConfig;
  hero?: Partial<Omit<CourseHeroContent, "primaryCta" | "secondaryCta">> & {
    primaryCta?: Partial<LandingCta>;
    secondaryCta?: Partial<LandingCta>;
  };
  transformation?: CourseTransformationContent;
  platformPositioning?: CoursePlatformPositioningContent;
  benefits?: CourseBenefitItem[];
  skills: {
    title?: string;
    subtitle?: string;
    outcomes: string[];
    outcomeBody?: string;
    tags: string[];
  };
  whyNow?: Partial<CourseWhyNowContent>;
  programOverview?: Partial<CourseProgramOverviewContent>;
  newsletter?: Partial<CourseNewsletterContent>;
  proofSections?: Omit<CourseProofSection, "imageUrl">[];
  certificate?: Partial<Omit<CourseCertificateContent, "cta">> & {
    cta?: Partial<LandingCta>;
  };
  testimonials?: Testimonial[];
  faqs?: FAQ[];
  relatedCourses: string[];
  level?: CourseLevel;
}

/**
 * Shared platform landing defaults merged into every course landing config.
 */
export interface SharedLearnLandingConfig {
  defaultHeroPrimaryCta: LandingCta;
  defaultHeroSecondaryCta: LandingCta;
  defaultCertificateCta: LandingCta;
  benefits: CourseBenefitItem[];
  platformPositioning: CoursePlatformPositioningContent;
  whyNow: Omit<CourseWhyNowContent, "imageUrl">;
  newsletter: Omit<CourseNewsletterContent, "fallbackHref"> & {
    fallbackHrefTemplate: string;
  };
  proofSections: Omit<CourseProofSection, "imageUrl">[];
  sharedFaqs: FAQ[];
  testimonials: Testimonial[];
}

/**
 * Frontend display level for courses
 */
export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

/**
 * Computed course stats used in hero and overview sections
 */
export interface CourseStats {
  duration: string;
  lessons: number;
  certificate: boolean;
  level: CourseLevel;
}
