/**
 * Resource Route Definitions
 *
 * PURPOSE: Centralized route constants for the Resources section.
 *
 * ARCHITECTURE:
 * - Follows same pattern as src/lib/routes/platform.ts
 * - Provides type-safe route constants
 * - Includes helper functions for dynamic routes
 *
 * @see src/lib/routes/platform.ts - Pattern source
 */

/**
 * Static resource routes
 */
export const resourceRoutes = {
  /** Resources hub page (future: multiple resource types) */
  resources: "/platform/resources",

  /** Prompt Library main page */
  prompts: "/platform/resources/prompts",
} as const;

/**
 * Dynamic route path generators
 */
export const resourcePaths = {
  /**
   * Prompt domain view
   * @param domainId - Domain slug (e.g., "productivity")
   */
  promptDomain: (domainId: string): string => `/platform/resources/prompts/d/${domainId}`,

  /**
   * Prompt category view
   * @param categoryId - Category slug (e.g., "task-management")
   */
  promptCategory: (categoryId: string): string => `/platform/resources/prompts/c/${categoryId}`,

  /**
   * Individual prompt page
   * @param promptId - Prompt slug (e.g., "task-prioritization-matrix")
   */
  prompt: (promptId: string): string => `/platform/resources/prompts/p/${promptId}`,
} as const;

/**
 * Type for resource route keys
 */
export type ResourceRouteKey = keyof typeof resourceRoutes;

/**
 * Type for resource path generators
 */
export type ResourcePathKey = keyof typeof resourcePaths;
