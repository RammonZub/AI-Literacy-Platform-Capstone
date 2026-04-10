/**
 * Course Landing Page Data Exports
 *
 * PURPOSE: Re-export course landing data helpers from the marketing data
 * namespace through a stable SEO-focused module path.
 *
 * CONTEXT: `/learn/[slug]` is now built from:
 * - raw module content (`src/data/content/modules/**`)
 * - shared platform landing defaults (`src/data/marketing/learn/shared.ts`)
 * - per-course landing configs (`src/data/marketing/learn/courses/*.ts`)
 *
 * @see src/lib/marketing/learn/build-course-landing-data.ts
 */

export {
  COURSE_LANDING_DATA,
  getAllCourseSlugs,
  getCourseByModuleId,
  getCourseBySlug,
  getCourseStats,
  getCoursesByCategory,
  getCoursesByType,
  getRelatedCourses,
} from "@/lib/marketing/learn/build-course-landing-data";
export type { CourseLandingData } from "@/types/course-landing";
