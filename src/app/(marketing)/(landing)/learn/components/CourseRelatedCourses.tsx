/**
 * CourseRelatedCourses Component
 *
 * PURPOSE: Display related courses for cross-linking on course landing pages (SEO important).
 *
 * CONTEXT: Bottom section of course landing pages. Shows 2-4 related courses to improve
 * internal linking structure, increase page authority, and encourage course discovery.
 *
 * KEY RESPONSIBILITIES:
 * - Display section header with "Explore More Courses"
 * - Render horizontal card layout with course details
 * - Provide SEO-friendly internal links to /learn/[slug]
 * - Show lesson count badge on each card
 * - Apply gradient accent border using color prop
 *
 * IMPLEMENTATION NOTES:
 * - Server component for SEO (no client-side interactivity needed)
 * - Uses Next.js Link for client-side navigation prefetching
 * - Gradient border implemented as pseudo-element wrapper
 * - Responsive grid: 1 col mobile, 2 cols tablet, 4 cols desktop
 *
 * DESIGN RATIONALE:
 * - Internal linking improves SEO through page authority distribution
 * - Horizontal cards provide better scanability than vertical stacks
 * - Lesson count badge helps users quickly assess course scope
 * - Gradient accent maintains visual consistency with course branding
 *
 * @see src/lib/seo/course-landing-data.ts for related courses data
 * @see src/app/(marketing)/learn/[slug]/page.tsx for usage
 */

import Image from "next/image";
import Link from "next/link";

// ==========================================
// TYPES
// ==========================================

/** Individual related course data */
export interface RelatedCourseItem {
  /** URL slug for the course (e.g., "chatgpt", "prompt-engineering") */
  slug: string;
  /** Course title */
  title: string;
  /** Short description of the course */
  description: string;
  /** Course cover image URL */
  imageUrl: string;
  /** Gradient colors for accent border */
  color: {
    from: string;
    to: string;
  };
  /** Number of lessons in the course */
  lessons: number;
}

/** Props for CourseRelatedCourses component */
export interface CourseRelatedCoursesProps {
  /** Slug of the current course (used for filtering, if needed) */
  currentSlug: string;
  /** Array of related courses to display (typically 2-4) */
  relatedCourses: RelatedCourseItem[];
}

// ==========================================
// SUBCOMPONENTS
// ==========================================

interface RelatedCourseCardProps {
  course: RelatedCourseItem;
}

/**
 * Individual related course card with image, title, description, and lesson badge
 */
function RelatedCourseCard({ course }: RelatedCourseCardProps) {
  const { slug, title, description, imageUrl, color, lessons } = course;

  return (
    <Link
      href={`/learn/${slug}`}
      className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors bg-white"
    >
      {/* Course Image */}
      <div className="relative w-full h-32 overflow-hidden">
        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"
          style={{
            background: `linear-gradient(135deg, ${color.from} 0%, ${color.to} 100%)`,
          }}
        />
        <Image
          src={imageUrl}
          alt={`${title} course`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Lesson count badge */}
        <div className="absolute bottom-2 right-2 z-20 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-gray-700">
          {lessons} {lessons === 1 ? "lesson" : "lessons"}
        </div>
      </div>

      {/* Course Content */}
      <div className="p-4">
        {/* Gradient accent line */}
        <div
          className="h-1 w-12 rounded-full mb-3"
          style={{
            background: `linear-gradient(90deg, ${color.from} 0%, ${color.to} 100%)`,
          }}
        />

        {/* Title */}
        <h3 className="font-semibold text-gray-900 group-hover:text-[#007AFF] transition-colors line-clamp-1">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

/**
 * CourseRelatedCourses Component
 *
 * Displays a grid of related courses for cross-linking and SEO.
 * Shows 2-4 related courses with images, titles, descriptions, and lesson counts.
 */
export default function CourseRelatedCourses({
  currentSlug,
  relatedCourses,
}: CourseRelatedCoursesProps) {
  // Filter out current course if accidentally included
  const courses = relatedCourses.filter((course) => course.slug !== currentSlug);

  // Don't render if no related courses
  if (courses.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Explore More Courses</h2>
        <p className="mt-2 text-gray-600">
          Continue your AI learning journey with these related courses
        </p>
      </div>

      {/* Related Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <RelatedCourseCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
}
