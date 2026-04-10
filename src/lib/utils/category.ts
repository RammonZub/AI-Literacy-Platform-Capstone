/**
 * Category Utilities
 *
 * PURPOSE: Generate and parse URL-friendly category slugs
 *
 * These functions mirror the PostgreSQL category_slug() function
 * for consistent URL generation between server and client.
 */

/**
 * Generate URL-friendly slug from category name
 *
 * @example
 * slugifyCategory("AI Tools & Platforms") // "ai-tools-and-platforms"
 * slugifyCategory("Getting Started") // "getting-started"
 * slugifyCategory("Fundamentals") // "fundamentals"
 */
export function slugifyCategory(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Parse category slug back to display name
 *
 * Note: This is a best-effort reversal. The original category name
 * should be stored and used for display when possible.
 *
 * @example
 * parseCategorySlug("ai-tools-and-platforms") // "Ai Tools And Platforms"
 * parseCategorySlug("getting-started") // "Getting Started"
 */
export function parseCategorySlug(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\band\b/g, "&")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Type-safe category constants
 *
 * Centralize category names to prevent typos and enable autocomplete
 */
export const BLOG_CATEGORIES = {
  TUTORIALS: "Tutorials",
  NEWS: "News",
  CASE_STUDIES: "Case Studies",
  GUIDES: "Guides",
  UPDATES: "Updates",
} as const;

export const GLOSSARY_CATEGORIES = {
  FUNDAMENTALS: "Fundamentals",
  TOOLS_PLATFORMS: "Tools & Platforms",
  ADVANCED: "Advanced",
  METHODS: "Methods",
} as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[keyof typeof BLOG_CATEGORIES];
export type GlossaryCategory =
  (typeof GLOSSARY_CATEGORIES)[keyof typeof GLOSSARY_CATEGORIES];

/**
 * Get all unique categories from a list of posts
 *
 * Useful for generating category navigation dynamically
 */
export function getUniqueCategories<T extends { category?: string | null }>(
  items: T[]
): Array<{ name: string; slug: string }> {
  const categories = new Map<string, string>();

  for (const item of items) {
    if (item.category) {
      categories.set(item.category, slugifyCategory(item.category));
    }
  }

  return Array.from(categories.entries())
    .map(([name, slug]) => ({ name, slug }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
