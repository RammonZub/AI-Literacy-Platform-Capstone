/**
 * Course Landing Page
 *
 * PURPOSE: Public dynamic route for SEO-optimized course landing pages at
 * `/courses/[slug]`.
 *
 * CONTEXT:
 * This page renders the dedicated direct-selling course template backed by
 * `course-landing-data.ts`. It is statically generated for all course slugs and
 * ships metadata plus JSON-LD structured data for SEO.
 *
 * KEY RESPONSIBILITIES:
 * - Generate static routes and metadata for each course
 * - Render the full course landing narrative in a reusable section order
 * - Keep visible FAQ content aligned with FAQ schema data
 *
 * @see src/lib/seo/course-landing-data.ts
 * @see src/components/landing/learn/
 */

import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { LearnCoursePageTemplate } from "@/components/landing/learn";
import {
  type CourseLandingData,
  getAllCourseSlugs,
  getCourseBySlug,
  getCourseStats,
} from "@/lib/seo/course-landing-data";
import { siteConfig } from "@/lib/seo/config";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import {
  generateBreadcrumbSchema,
  generateCourseSchema,
  generateFAQPageSchema,
} from "@/lib/seo/schemas";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const COURSE_SLUG_REDIRECTS: Record<string, string> = {
  "ai-foundations": "ai-fundamentals",
};

export async function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = COURSE_SLUG_REDIRECTS[slug] ?? slug;
  const course = getCourseBySlug(canonicalSlug);

  if (!course) {
    return {
      title: `Course Not Found - ${SITE_BRAND_NAME}`,
    };
  }

  const { title, landingPage } = course;
  const stats = getCourseStats(course);

  const courseUrl = `${siteConfig.url}/courses/${canonicalSlug}`;

  return {
    title: `${title} - ${SITE_BRAND_NAME} | AI Course`,
    description: `${landingPage.tagline} ${stats.lessons} lessons, ${stats.duration}. Start learning ${title} in 15 minutes a day.`,
    keywords: landingPage.keywords,
    openGraph: {
      title: `${title} - ${SITE_BRAND_NAME}`,
      description: landingPage.tagline,
      type: "website",
      url: courseUrl,
      images: [
        {
          url: landingPage.ogImage,
          width: 1200,
          height: 630,
          alt: `${title} course cover`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - ${SITE_BRAND_NAME}`,
      description: landingPage.tagline,
      images: [landingPage.ogImage],
    },
    alternates: {
      canonical: courseUrl,
    },
  };
}

function generateSchemas(course: CourseLandingData, stats: ReturnType<typeof getCourseStats>) {
  const { title, description, landingPage } = course;

  const courseSchema = generateCourseSchema({
    name: title,
    description,
    lessons: stats.lessons,
    hours: Math.max(1, Math.round((course.estimatedMinutes / 60) * 10) / 10),
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Courses", url: "/courses" },
    { name: title, url: `/courses/${landingPage.slug}` },
  ]);

  const faqSchema = generateFAQPageSchema(landingPage.faqs);

  return { courseSchema, breadcrumbSchema, faqSchema };
}

export default async function CourseLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const canonicalSlug = COURSE_SLUG_REDIRECTS[slug];

  if (canonicalSlug) {
    redirect(`/courses/${canonicalSlug}`);
  }

  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const stats = getCourseStats(course);
  const { courseSchema, breadcrumbSchema, faqSchema } = generateSchemas(course, stats);

  const relatedCourses = course.landingPage.relatedCourses.map((relatedSlug) => {
    const relatedCourse = getCourseBySlug(relatedSlug);
    const relatedStats = relatedCourse ? getCourseStats(relatedCourse) : null;

    return {
      slug: relatedSlug,
      title: relatedCourse?.title ?? "",
      description: relatedCourse?.description ?? "",
      imageUrl: relatedCourse?.imageUrl ?? "",
      color: relatedCourse?.color ?? { from: "#007AFF", to: "#007AFF" },
      lessons: relatedStats?.lessons ?? 0,
    };
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            ...courseSchema,
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            ...breadcrumbSchema,
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            ...faqSchema,
          }),
        }}
      />

      <LearnCoursePageTemplate course={course} relatedCourses={relatedCourses} />
    </>
  );
}
