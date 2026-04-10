/**
 * Course Image Keywords Types
 *
 * PURPOSE: Define types for lesson image metadata (search-style keywords, alt text).
 * Manifests in `src/data/content/course-images/` drive which assets lessons expect;
 * actual files live under `public/images/` and are maintained with the content.
 */

// ==========================================
// TYPES
// ==========================================

/**
 * Image keyword entry for a single image
 */
export interface ImageKeyword {
  /** Search query for Unsplash (5-10 descriptive words) */
  query: string;
  /** Optional: Position where this image will be used */
  position?: "cover" | "inline-1" | "inline-2" | "inline-3";
  /** Optional: Alt text for accessibility */
  alt?: string;
}

/**
 * Image keywords for a single lesson
 */
export interface LessonImageKeywords {
  /** Lesson ID (e.g., 'lesson-1-3') */
  lessonId: string;
  /** Module ID (e.g., 'module1-foundation') */
  moduleId: string;
  /** Chapter ID (e.g., 'chapter1-foundation') */
  chapterId: string;
  /** 2-3 image keywords per lesson */
  images: ImageKeyword[];
}

/**
 * Image keywords for an entire course
 */
export interface CourseImageManifest {
  /** Course name/slug */
  courseSlug: string;
  /** When this manifest was created */
  createdAt: string;
  /** All lesson image keywords */
  lessons: LessonImageKeywords[];
}

// ==========================================
// EXAMPLE USAGE
// ==========================================

/**
 * Example: How the course-creator skill should output image keywords
 *
 * This gets stored in: src/data/content/course-images/[course-slug]-images.ts
 */
export const EXAMPLE_COURSE_IMAGE_MANIFEST: CourseImageManifest = {
  courseSlug: "prompt-engineering-mastery",
  createdAt: "2026-02-22T00:00:00Z",
  lessons: [
    {
      lessonId: "lesson-3-1",
      moduleId: "module3-prompting",
      chapterId: "chapter1-fundamentals",
      images: [
        {
          query: "professional writing at desk with laptop and coffee morning light",
          position: "cover",
          alt: "Professional writing at desk with AI assistance",
        },
        {
          query: "prompt engineering concept with text and AI interface",
          position: "inline-1",
          alt: "Prompt engineering workflow diagram",
        },
      ],
    },
    {
      lessonId: "lesson-3-2",
      moduleId: "module3-prompting",
      chapterId: "chapter1-fundamentals",
      images: [
        {
          query: "context and role concept with professional workspace",
          position: "cover",
          alt: "Setting context and role in prompts",
        },
        {
          query: "email composition on laptop screen professional setting",
          position: "inline-1",
          alt: "Writing emails with AI context",
        },
      ],
    },
  ],
};

// ==========================================
// GUIDELINES FOR KEYWORD GENERATION
// ==========================================

/**
 * Image Keyword Guidelines (for course-creator skill)
 *
 * 1. BE SPECIFIC: "AI assistant helping with email" not "AI"
 * 2. ADD CONTEXT: "professional desk with laptop and coffee" not "desk"
 * 3. INCLUDE MOOD: "bright modern office with natural light" not "office"
 * 4. DESCRIBE ACTION: "person typing on laptop focused work" not "laptop"
 * 5. VARY QUERIES: Don't repeat similar queries across lessons
 *
 * GOOD EXAMPLES:
 * - "marketing professional brainstorming ideas on whiteboard with team"
 * - "productivity workflow automation concept with connected icons"
 * - "creative writing on laptop in cozy cafe setting"
 * - "data analysis charts on computer screen business context"
 *
 * BAD EXAMPLES:
 * - "AI" (too vague)
 * - "computer" (too generic)
 * - "person working" (not specific enough)
 * - "office" (no context)
 */
