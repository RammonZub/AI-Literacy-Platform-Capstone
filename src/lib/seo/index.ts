/**
 * SEO utility module
 *
 * Provides centralized SEO configuration, metadata generators,
 * JSON-LD schema generators, keyword constants, and course landing data.
 *
 * ORGANIZATION:
 * - config.ts: Site-wide SEO config, default metadata, page configs
 * - generators.ts: Dynamic metadata generators for courses, quiz, lessons
 * - schemas.ts: JSON-LD structured data generators (FAQ, Course, Breadcrumb, etc.)
 * - keywords.ts: SEO keyword constants by category
 * - course-landing-data.ts: Static course data for landing pages
 *
 * USAGE:
 * - Import { siteConfig, getPageConfig } from "@/lib/seo" for page metadata
 * - Import { generateCourseMetadata } from "@/lib/seo" for dynamic routes
 * - Import { generateFAQPageSchema } from "@/lib/seo" for structured data
 */

export * from "./config";
export * from "./course-landing-data";
export * from "./generators";
export * from "./keywords";
export * from "./schemas";
