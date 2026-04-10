/**
 * Platform Route Constants
 *
 * PURPOSE: Centralized route definitions for platform navigation
 *
 * WHY THIS EXISTS:
 * - Eliminates hardcoded route strings scattered across 24 files
 * - Shared route definitions for all platform routes
 * - Prevents broken navigation when route structure changes
 * - Makes route renames a one-line change
 *
 * DESIGN RATIONALE:
 * - All routes are prefixed with /platform (route group structure)
 * - Functional builders for dynamic routes (module, lesson, challenge)
 * - Named constants for static routes (library, profile)
 * - TypeScript types ensure route validity
 *
 * USAGE:
 * ```tsx
 * import { platformRoutes } from '@/lib/routes/platform'
 * router.push(platformRoutes.module(moduleId))
 * <a href={platformRoutes.library}>Library</a>
 * ```
 *
 * @see src/app/(platform)/ for route structure
 */

/**
 * Static platform routes
 *
 * These routes don't change based on parameters
 */
export const platformRoutes = {
  /** Platform dashboard/home */
  home: "/platform",

  /** Learning library - browse all modules */
  library: "/platform/library",

  /** User profile page */
  profile: "/platform/profile",

  /** Challenges list/view */
  challenges: "/platform/challenges",

  /** Tasks portfolio - completed tasks */
  tasks: "/platform/tasks",
} as const;

/**
 * Dynamic platform route builders
 *
 * Functional builders for routes that require parameters
 */
export const platformPaths = {
  /**
   * Module detail page route
   *
   * @param moduleId - Module ID (e.g., 'module1-foundation')
   * @returns Full path to module page
   *
   * @example
   * platformPaths.module('module1-foundation')
   * // Returns: '/platform/module/module1-foundation'
   */
  module: (moduleId: string): string => `/platform/module/${moduleId}`,

  /**
   * Lesson page route
   *
   * @param moduleId - Parent module ID
   * @param lessonId - Lesson ID (e.g., 'foundations-1')
   * @param options - Optional query parameters
   * @returns Full path to lesson page
   *
   * @example
   * platformPaths.lesson('module1-foundation', 'foundations-1')
   * // Returns: '/platform/module/module1-foundation/lesson/foundations-1'
   *
   * platformPaths.lesson('module1-foundation', 'foundations-1', { restart: true })
   * // Returns: '/platform/module/module1-foundation/lesson/foundations-1?restart=true'
   */
  lesson: (moduleId: string, lessonId: string, options?: { restart?: boolean }): string => {
    const basePath = `/platform/module/${moduleId}/lesson/${lessonId}`;
    if (options?.restart) {
      return `${basePath}?restart=true`;
    }
    return basePath;
  },

  /**
   * Lesson task route (dedicated task page for a lesson)
   *
   * @param moduleId - Parent module ID
   * @param lessonId - Lesson ID
   * @returns Full path to lesson task page
   *
   * @example
   * platformPaths.lessonTask('module1-foundation', 'foundations-1')
   * // Returns: '/platform/module/module1-foundation/lesson/foundations-1/task'
   */
  lessonTask: (moduleId: string, lessonId: string): string =>
    `/platform/module/${moduleId}/lesson/${lessonId}/task`,

  /**
   * Lesson quiz route (dedicated quiz page for a lesson)
   *
   * @param moduleId - Parent module ID
   * @param lessonId - Lesson ID
   * @returns Full path to lesson quiz page
   *
   * @example
   * platformPaths.lessonQuiz('module1-foundation', 'foundations-1')
   * // Returns: '/platform/module/module1-foundation/lesson/foundations-1/quiz'
   */
  lessonQuiz: (moduleId: string, lessonId: string): string =>
    `/platform/module/${moduleId}/lesson/${lessonId}/quiz`,

  /**
   * Lesson challenge route
   *
   * @param moduleId - Parent module ID
   * @param lessonId - Lesson ID
   * @returns Full path to lesson challenge page
   *
   * @example
   * platformPaths.lessonChallenge('module1-foundation', 'foundations-1')
   * // Returns: '/platform/module/module1-foundation/lesson/foundations-1/task'
   */
  lessonChallenge: (moduleId: string, lessonId: string): string =>
    `/platform/module/${moduleId}/lesson/${lessonId}/task`,

  /**
   * Challenge detail page route
   *
   * @param challengeId - Challenge ID (e.g., '28-day-ai-challenge')
   * @returns Full path to challenge page
   */
  challenge: (challengeId: string): string => `/platform/challenge/${challengeId}`,

  /**
   * Article lesson route (lesson that renders as article format)
   *
   * @param moduleId - Parent module ID
   * @param lessonId - Lesson ID
   * @returns Full path to article lesson page
   *
   * @example
   * platformPaths.article('module1-foundation', 'foundations-1')
   * // Returns: '/platform/module/module1-foundation/lesson/foundations-1/article'
   */
  article: (moduleId: string, lessonId: string): string =>
    `/platform/module/${moduleId}/lesson/${lessonId}/article`,
} as const;

/**
 * Route type definitions for TypeScript
 *
 * These types can be used for props that expect route strings
 */
export type PlatformStaticRoute = keyof typeof platformRoutes;
export type PlatformPathFunction = keyof typeof platformPaths;
