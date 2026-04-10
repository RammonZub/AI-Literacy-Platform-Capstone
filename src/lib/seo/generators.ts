/**
 * SEO Metadata Generators
 *
 * PURPOSE: Helper functions for generating metadata for dynamic routes
 *
 * This file provides specialized generators for:
 * - Course landing pages (/courses/[slug])
 * - Quiz flow pages
 * - Module/Lesson pages (if needed for SEO)
 * - Dynamic OpenGraph images
 *
 * USAGE:
 * - Import and use in generateMetadata() functions
 * - All generators return Partial<Metadata> for composition
 * - Use with getPageMetadata() from config.ts
 *
 * @see src/lib/seo/config.ts - Base configuration and utilities
 * @see src/app/(marketing)/(landing)/courses/[slug]/page.tsx - Course page usage example
 */

import type { Metadata } from "next";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { siteConfig } from "./config";

// ============================================
// TYPES
// ============================================

/**
 * Course metadata input
 */
export interface CourseMetadataInput {
  title: string;
  description: string;
  tagline: string;
  slug: string;
  imageUrl: string;
  keywords?: string[];
  lessons?: number;
  duration?: string;
}

/**
 * Quiz metadata input
 */
export interface QuizMetadataInput {
  step?: number;
  totalSteps?: number;
  sessionId?: string;
}

/**
 * Module/Lesson metadata input
 */
export interface LessonMetadataInput {
  moduleTitle: string;
  lessonTitle: string;
  moduleId: string;
  lessonId: string;
  lessonNumber?: number;
}

// ============================================
// COURSE METADATA GENERATOR
// ============================================

/**
 * Generate metadata for course landing pages
 *
 * Creates comprehensive SEO metadata for /courses/[slug] pages including:
 * - Title with brand name and "| AI Course" suffix
 * - Description with stats (lessons, duration)
 * - OpenGraph with course-specific image
 * - Twitter card with custom preview
 * - Breadcrumb canonical URL
 *
 * @param input - Course metadata input
 * @returns Partial<Metadata> object for merge
 *
 * @example
 * ```ts
 * export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
 *   const course = getCourseBySlug((await params).slug)
 *   return {
 *     ...generateCourseMetadata({
 *       title: course.title,
 *       description: course.description,
 *       tagline: course.landingPage.tagline,
 *       slug: course.landingPage.slug,
 *       imageUrl: course.imageUrl,
 *       keywords: course.landingPage.keywords,
 *       lessons: stats.lessons,
 *       duration: stats.duration,
 *     })
 *   }
 * }
 * ```
 */
export function generateCourseMetadata(input: CourseMetadataInput): Partial<Metadata> {
  const { title, description, tagline, slug, imageUrl, keywords, lessons, duration } = input;
  const courseUrl = `${siteConfig.url}/courses/${slug}`;

  // Build description with stats if available
  const fullDescription =
    lessons && duration
      ? `${tagline} ${lessons} lessons, ${duration}. Start learning ${title} in 15 minutes a day.`
      : tagline;

  return {
    title: `${title} - ${SITE_BRAND_NAME} | AI Course`,
    description: fullDescription,
    keywords: keywords || [],
    openGraph: {
      title: `${title} - ${SITE_BRAND_NAME}`,
      description: tagline,
      type: "website",
      url: courseUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} course cover`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - ${SITE_BRAND_NAME}`,
      description: tagline,
      images: [imageUrl],
    },
    alternates: {
      canonical: courseUrl,
    },
  };
}

// ============================================
// QUIZ METADATA GENERATOR
// ============================================

/**
 * Generate metadata for quiz flow pages
 *
 * Quiz pages should not be indexed but need proper OG tags
 * for social sharing when users share the quiz URL.
 *
 * @param input - Optional quiz step info
 * @returns Partial<Metadata> object
 *
 * @example
 * ```ts
 * export const metadata = {
 *   ...generateQuizMetadata()
 * }
 * ```
 */
export function generateQuizMetadata(input?: QuizMetadataInput): Partial<Metadata> {
  return {
    title: `Discover Your AI Learning Style — Free 2-Minute Quiz | ${SITE_BRAND_NAME}`,
    description:
      "Take our free 2-minute quiz to get a personalized AI learning plan tailored to your goals and experience level.",
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: "Discover Your AI Learning Style",
      description: "Take our free 2-minute quiz to get a personalized AI learning plan.",
      url: `${siteConfig.url}/onboarding`,
      images: [
        {
          url: siteConfig.ogImage,
          width: siteConfig.ogImageWidth,
          height: siteConfig.ogImageHeight,
          alt: `${SITE_BRAND_NAME} AI Skills Quiz`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Discover Your AI Learning Style",
      description: "Take our free 2-minute quiz.",
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: `${siteConfig.url}/onboarding`,
    },
  };
}

// ============================================
// LESSON/MODULE METADATA GENERATOR
// ============================================

/**
 * Generate metadata for lesson pages
 *
 * Lesson pages are typically noindex since they're behind auth,
 * but this generator ensures consistent formatting if needed.
 *
 * @param input - Lesson metadata input
 * @returns Partial<Metadata> object
 *
 * @example
 * ```ts
 * export const metadata = {
 *   ...generateLessonMetadata({
 *     moduleTitle: "AI Foundations",
 *     lessonTitle: "Introduction to AI",
 *     moduleId: "ai-foundations",
 *     lessonId: "intro",
 *     lessonNumber: 1,
 *   })
 * }
 * ```
 */
export function generateLessonMetadata(input: LessonMetadataInput): Partial<Metadata> {
  const { moduleTitle, lessonTitle, lessonNumber } = input;
  const lessonLabel = lessonNumber ? `Lesson ${lessonNumber}: ` : "";
  const fullTitle = `${lessonLabel}${lessonTitle} - ${moduleTitle}`;

  return {
    title: fullTitle,
    description: `${lessonLabel}${lessonTitle} from ${moduleTitle} course on ${SITE_BRAND_NAME}.`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

// ============================================
// OPENGRAPH IMAGE URL GENERATOR
// ============================================

/**
 * Generate dynamic OpenGraph image URL
 *
 * Use this for dynamic OG images (e.g., with course titles)
 * Requires an OG image generation API route
 *
 * @param type - Image type (course, quiz, home)
 * @param params - Additional params for image generation
 * @returns Full URL to OG image
 *
 * @example
 * ```ts
 * const ogImage = generateOgImageUrl("course", { title: "ChatGPT Mastery", color: "blue" })
 * // Returns: {origin}/api/og/course?title=ChatGPT+Mastery&color=blue
 * ```
 */
export function generateOgImageUrl(
  type: "course" | "quiz" | "home" | "default",
  params?: Record<string, string>,
): string {
  const baseUrl = `${siteConfig.appUrl}/api/og`;

  if (type === "default") {
    return siteConfig.ogImage;
  }

  const queryParams = new URLSearchParams(params || {});
  return `${baseUrl}/${type}?${queryParams.toString()}`;
}

// ============================================
// METADATA MERGE HELPER
// ============================================

/**
 * Merge multiple metadata objects with proper deep merging
 *
 * Use this when you need to combine metadata from multiple sources.
 * Later sources override earlier sources for conflicting keys.
 *
 * @param sources - Array of Partial<Metadata> objects
 * @returns Merged Metadata object
 *
 * @example
 * ```ts
 * const metadata = mergeMetadata([
 *   generateCourseMetadata(courseInput),
 *   { robots: { index: false } }, // Override robots
 *   { twitter: { creator: "@custom" } }, // Override twitter creator
 * ])
 * ```
 */
export function mergeMetadata(...sources: Partial<Metadata>[]): Metadata {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function deepMerge(target: any, source: any): any {
    if (typeof target !== "object" || target === null) return target;
    const result = { ...target };
    for (const key in source) {
      const sourceValue = source[key];
      const targetValue = result[key];
      if (typeof sourceValue === "object" && sourceValue !== null && !Array.isArray(sourceValue)) {
        result[key] = deepMerge(targetValue, sourceValue);
      } else if (sourceValue !== undefined) {
        result[key] = sourceValue;
      }
    }
    return result;
  }

  return sources.reduce((acc, source) => deepMerge(acc, source), {} as Metadata);
}

// ============================================
// BLOG METADATA GENERATOR
// ============================================

export interface BlogPostMetadataInput {
  title: string;
  slug: string;
  description?: string;
  excerpt?: string;
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
  tags?: string[];
  imageUrl?: string;
}

export function generateBlogPostMetadata(post: BlogPostMetadataInput): Metadata {
  const canonical = `${siteConfig.url}/blog/${post.slug}`;
  const description = post.description || post.excerpt || post.title;
  const title = `${post.title} | ${SITE_BRAND_NAME} Blog`;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...(post.tags || [])].join(", "),
    authors: [{ name: post.author || siteConfig.author }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: canonical,
      title,
      description,
      siteName: siteConfig.name,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author || siteConfig.author],
      tags: post.tags,
      images: [
        {
          url: post.imageUrl || `${siteConfig.url}${siteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(siteConfig.twitterHandle
        ? { site: siteConfig.twitterHandle, creator: siteConfig.twitterHandle }
        : {}),
      images: [post.imageUrl || `${siteConfig.url}${siteConfig.ogImage}`],
    },
  };
}

// ============================================
// AUTHOR METADATA GENERATOR
// ============================================

export interface AuthorMetadataInput {
  full_name: string;
  slug: string;
  meta_title: string;
  meta_description: string;
  keywords: string[];
  photo_url?: string;
}

/**
 * Generate metadata for author pages
 *
 * Creates comprehensive SEO metadata for /blog/author/[slug] pages including:
 * - Title and description from author meta fields
 * - OpenGraph with profile type and author photo
 * - Twitter card with summary type
 * - Breadcrumb canonical URL
 *
 * @param author - Author metadata input
 * @returns Metadata object for author pages
 *
 * @example
 * ```ts
 * export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
 *   const { slug } = await params;
 *   const author = getAuthorData(slug);
 *   return generateAuthorMetadata(author);
 * }
 * ```
 */
export function generateAuthorMetadata(author: AuthorMetadataInput): Metadata {
  const authorUrl = `${siteConfig.url}/blog/author/${author.slug}`;

  return {
    title: author.meta_title,
    description: author.meta_description,
    keywords: [...siteConfig.keywords, ...author.keywords].join(", "),
    openGraph: {
      type: "profile",
      title: author.meta_title,
      description: author.meta_description,
      url: authorUrl,
      images: author.photo_url
        ? [{ url: author.photo_url, width: 400, height: 400 }]
        : undefined,
    },
    twitter: {
      card: "summary",
      title: author.meta_title,
      description: author.meta_description,
    },
    alternates: {
      canonical: authorUrl,
    },
  };
}

// ============================================
// EXPORTS
// ============================================

/**
 * Default export for convenience
 */
export default {
  generateCourseMetadata,
  generateQuizMetadata,
  generateLessonMetadata,
  generateOgImageUrl,
  mergeMetadata,
  generateBlogPostMetadata,
  generateAuthorMetadata,
};
