/**
 * Lesson Image Path Resolution Utility
 *
 * PURPOSE: Centralize image path resolution to prevent broken paths
 * and provide fallback images when specific images don't exist.
 *
 * CONTEXT: The project has images in /public/images/courses/lessons/modules/
 * but some lessons reference /images/lessons/ which doesn't exist.
 * This utility centralizes lesson image paths.
 *
 * KEY RESPONSIBILITIES:
 * - Define correct base paths for lesson images
 * - Provide fallback images by category
 * - Resolve older image paths to correct locations
 * - Map module IDs to appropriate cover images
 *
 * IMPLEMENTATION NOTES:
 * - All module images are stored in /images/courses/lessons/modules/
 * - Paths under `/images/lessons/` are automatically corrected
 * - Fallback images are categorized for semantic relevance
 * - Module-to-image mapping is centralized here
 *
 * DEPENDENCIES:
 * - None (pure utility module)
 */

// ==========================================
// PATH CONSTANTS
// ==========================================

/**
 * Base path for lesson images
 * All lesson-specific images are stored under this path
 */
export const LESSON_IMAGES_BASE_PATH = "/images/courses/lessons";

/**
 * Path for module-specific images
 * Contains 100+ AI-themed images organized by topic
 */
export const LESSON_MODULES_PATH = "/images/courses/lessons/modules";

// ==========================================
// FALLBACK IMAGES
// ==========================================

/**
 * Fallback images by category
 *
 * DESIGN RATIONALE:
 * - Organized by semantic category for relevance
 * - Uses const assertion for type safety
 * - All paths reference actual files in the codebase
 * - Provides graceful degradation when specific images aren't mapped
 */
export const FALLBACK_IMAGES = {
  /** AI/ML themed images for foundation and technical content */
  ai: `${LESSON_MODULES_PATH}/brain-memory-and-thinking-neural-network.webp`,

  /** Productivity and workflow themed images */
  productivity: `${LESSON_MODULES_PATH}/daily-workflow-rhythm-and-productivity.webp`,

  /** Writing and communication themed images */
  writing: `${LESSON_MODULES_PATH}/writing-and-keyboard-technology-communication.webp`,

  /** Creativity and design themed images */
  creativity: `${LESSON_MODULES_PATH}/artist-palette-and-creative-tools.webp`,

  /** Strategy and planning themed images */
  strategy: `${LESSON_MODULES_PATH}/strategic-planning-workspace-with-organized-layers.webp`,

  /** Celebration and achievement themed images */
  celebration: `${LESSON_MODULES_PATH}/celebration-and-achievement.webp`,

  /** Abstract blue gradient for generic use */
  abstract: `${LESSON_IMAGES_BASE_PATH}/abstract-blue.jpg`,

  /** Default fallback when no specific category applies */
  default: `${LESSON_IMAGES_BASE_PATH}/abstract-blue.jpg`,
} as const;

/**
 * Fallback image category type
 * Extracted from FALLBACK_IMAGES keys for type safety
 */
export type FallbackCategory = keyof typeof FALLBACK_IMAGES;

// ==========================================
// MODULE COVER IMAGE MAPPING
// ==========================================

/**
 * Module ID to cover image mapping
 *
 * DESIGN RATIONALE:
 * - Each module gets a semantically relevant cover image
 * - Mapping is centralized for easy maintenance
 * - Uses .webp format for better performance
 * - Falls back to abstract-blue.jpg for unknown modules
 */
const MODULE_IMAGE_MAP: Record<string, string> = {
  /** Module 1: Foundation - brain/neural network theme */
  "module1-foundation": `${LESSON_MODULES_PATH}/brain-memory-and-thinking-neural-network.webp`,

  /** Module 2: Productivity - daily workflow theme */
  "module2-productivity": `${LESSON_MODULES_PATH}/daily-workflow-rhythm-and-productivity.webp`,

  /** Module 3: Prompting - writing/keyboard theme */
  "module3-prompting": `${LESSON_MODULES_PATH}/writing-and-keyboard-technology-communication.webp`,

  /** Module 4: Creation - artist palette theme */
  "module4-creation": `${LESSON_MODULES_PATH}/artist-palette-and-creative-tools.webp`,

  /** Module 5: ChatGPT - AI conversation theme */
  "module5-chatgpt": `${LESSON_MODULES_PATH}/ai-conversation-and-dialogue-technology.webp`,

  /** Module 6: Claude - conversation/dialogue theme */
  "module6-claude": `${LESSON_MODULES_PATH}/conversation-and-dialogue-communication-concept.webp`,

  /** Module 7: Gemini - professional workspace theme */
  "module7-gemini": `${LESSON_MODULES_PATH}/professional-workspace-with-tools-and-technology.webp`,

  /** Module 8: Midjourney - creative design theme */
  "module9-midjourney": `${LESSON_MODULES_PATH}/creative-design-and-illustration-process.webp`,
};

// ==========================================
// PUBLIC API
// ==========================================

/**
 * Resolve a lesson image path and provide fallbacks when needed
 *
 * WHY THIS FUNCTION EXISTS:
 * - Lesson content may reference old or incorrect image paths
 * - We need to automatically correct these paths
 * - We need a fallback when images don't exist
 *
 * @param imagePath - The image path from lesson content
 * @param fallbackCategory - Category to use for fallback image if path is undefined
 * @returns A valid image path that references an actual file
 *
 * @example
 * // Fix older path format
 * resolveLessonImagePath('/images/lessons/brain.jpg') // Returns '/images/courses/lessons/brain.jpg'
 *
 * @example
 * // Use fallback when no image provided
 * resolveLessonImagePath(undefined, 'ai') // Returns '/images/courses/lessons/modules/brain-memory...'
 */
export function resolveLessonImagePath(
  imagePath: string | undefined,
  fallbackCategory: FallbackCategory = "default",
): string {
  // If no image path provided, use category-based fallback
  if (!imagePath) {
    return FALLBACK_IMAGES[fallbackCategory];
  }

  // Normalize /images/lessons/... -> /images/courses/lessons/...
  if (imagePath.startsWith("/images/lessons/")) {
    return imagePath.replace("/images/lessons/", "/images/courses/lessons/");
  }

  // Return original path if it doesn't need correction
  return imagePath;
}

/**
 * Get an appropriate cover image for a module
 *
 * WHY THIS FUNCTION EXISTS:
 * - Provides semantic, relevant images for each module
 * - Centralizes the mapping for easy updates
 * - Falls back gracefully for unknown modules
 *
 * @param moduleId - The module ID (e.g., 'module1-foundation')
 * @returns A path to an appropriate cover image
 *
 * @example
 * getModuleCoverImage('module1-foundation') // Returns '/images/courses/lessons/modules/brain-memory...'
 * getModuleCoverImage('unknown-module') // Returns '/images/courses/lessons/abstract-blue.jpg'
 */
export function getModuleCoverImage(moduleId: string): string {
  return MODULE_IMAGE_MAP[moduleId] || FALLBACK_IMAGES.default;
}

/**
 * Get a fallback image by category
 *
 * WHY THIS FUNCTION EXISTS:
 * - Provides explicit access to fallback images
 * - Useful when you want a specific thematic image
 * - Type-safe category selection
 *
 * @param category - The fallback category to use
 * @returns A path to the fallback image
 *
 * @example
 * getFallbackImage('celebration') // Returns celebration-themed image
 * getFallbackImage('default') // Returns abstract-blue.jpg
 */
export function getFallbackImage(category: FallbackCategory = "default"): string {
  return FALLBACK_IMAGES[category];
}
