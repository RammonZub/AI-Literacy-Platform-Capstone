/**
 * Resources Content Index
 *
 * PURPOSE: Central export for all resources (prompts, workflows, templates, etc.)
 *
 * ARCHITECTURE:
 * - Each resource type has its own subfolder
 * - prompts/ - Prompt Library with 500+ prompts across 15 domains
 * - (future) workflows/ - Automation workflow templates
 * - (future) templates/ - Document templates
 * - (future) tools/ - Curated AI tool directory
 *
 * @see src/data/content/resources/prompts/ - Prompt Library
 */

// =============================================================================
// PROMPT LIBRARY
// =============================================================================

// Import types for re-export
export type { PromptFilters } from "@/types/resources";
// Re-export all prompt functions and data
export {
  filterPrompts,
  getAllPromptDomains,
  getAllPrompts,
  getFeaturedPrompts,
  getPopularPrompts,
  getPromptById,
  getPromptCategory,
  getPromptCount,
  getPromptCountByDomain,
  getPromptDomainById,
  getPromptDomainCount,
  getPromptsByCategory,
  getPromptsByDifficulty,
  getPromptsByDomain,
  getPromptsByTool,
  getTotalPromptCategoryCount,
  // Domain functions
  promptDomains,
  // Prompt functions
  prompts,
  searchPrompts,
} from "./prompts";

// =============================================================================
// FUTURE RESOURCE TYPES (Placeholders)
// =============================================================================

/**
 * Workflows Resource (Future)
 *
 * Automation workflow templates for:
 * - Make.com (Integromat)
 * - Zapier
 * - n8n
 * - Custom workflows
 */
// export * from './workflows';

/**
 * Templates Resource (Future)
 *
 * Document templates for:
 * - Notion templates
 * - Google Docs templates
 * - PDF templates
 * - Presentation templates
 */
// export * from './templates';

/**
 * Tools Resource (Future)
 *
 * Curated AI tool directory:
 * - ChatGPT plugins
 * - Claude integrations
 * - Gemini extensions
 * - Third-party AI tools
 */
// export * from './tools';

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get all available resource types
 */
export const getAvailableResourceTypes = () => {
  return [
    {
      id: "prompts",
      title: "Prompt Library",
      description: "500+ AI prompts across 15 domains",
      href: "/platform/resources/prompts",
      available: true,
    },
    {
      id: "workflows",
      title: "Workflows",
      description: "Automation templates for Make, Zapier, n8n",
      href: "/platform/resources/workflows",
      available: false,
      comingSoon: true,
    },
    {
      id: "templates",
      title: "Templates",
      description: "Document and presentation templates",
      href: "/platform/resources/templates",
      available: false,
      comingSoon: true,
    },
    {
      id: "tools",
      title: "AI Tools",
      description: "Curated directory of AI tools and integrations",
      href: "/platform/resources/tools",
      available: false,
      comingSoon: true,
    },
  ];
};
