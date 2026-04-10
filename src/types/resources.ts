/**
 * Resources Type Definitions
 *
 * PURPOSE: Type definitions for the Resources section, including the Prompt Library.
 *
 * ARCHITECTURE:
 * - Domain (15 total) → Category → Prompt
 * - Prompts are stored as TypeScript files in src/data/content/resources/
 * - Same pattern as modules/lessons content system
 *
 * @see src/data/content/resources/ - Content files
 * @see src/app/platform/resources/ - Page routes
 */

import type { AITool } from "@/types/ai-tool";

/**
 * Difficulty levels for prompts
 */
export type PromptDifficulty = "beginner" | "intermediate" | "advanced";

export type { AITool };

/**
 * Resource types (for future expansion beyond prompts)
 */
export type ResourceType = "prompt-library" | "templates" | "cheat-sheets" | "tools";

/**
 * Individual prompt in the library
 *
 * DESIGN DECISIONS:
 * - id is slug-based for readable URLs (e.g., "task-prioritization-matrix")
 * - placeholders use bracket notation [LIKE THIS] for visual clarity
 * - bestTool indicates which AI gives best results (tested)
 * - exampleOutput helps users know what to expect
 * - customizationNotes guide adaptation to specific situations
 */
export interface Prompt {
  /** Unique identifier (slug-based, e.g., "task-prioritization-matrix") */
  id: string;

  /** Prompt title (short, actionable, 3-6 words) */
  title: string;

  /** Brief description of what this prompt does (1-2 sentences) */
  description: string;

  /** The full prompt text ready to copy */
  promptText: string;

  /** Placeholders that users should fill in (e.g., ["YOUR TASKS HERE", "DEADLINE"]) */
  placeholders?: string[];

  /** Best AI tool for this prompt (tested across all tools) */
  bestTool: AITool;

  /** Difficulty level for the target user */
  difficulty: PromptDifficulty;

  /** What to expect from the output (helps set expectations) */
  exampleOutput?: string;

  /** Tips for customizing the prompt to specific situations */
  customizationNotes?: string[];

  /** Category within domain (e.g., "task-management" under productivity) */
  categoryId: string;

  /** Parent domain (e.g., "productivity") */
  domainId: string;

  /** Search tags for filtering */
  tags?: string[];

  /** Sort order within category (1-based) */
  order: number;
}

/**
 * Category within a domain
 *
 * EXAMPLES:
 * - Domain: "productivity" → Category: "task-management"
 * - Domain: "email-communication" → Category: "cold-outreach"
 */
export interface PromptCategory {
  /** Unique identifier (slug-based) */
  id: string;

  /** Category title (e.g., "Task Management") */
  title: string;

  /** Brief description of this category */
  description?: string;

  /** Parent domain ID */
  domainId: string;

  /** Sort order within domain */
  order: number;

  /** Number of prompts in this category (computed) */
  promptCount?: number;
}

/**
 * Domain (top-level grouping)
 *
 * 15 DOMAINS:
 * 1. Productivity & Organization
 * 2. Email & Communication
 * 3. Document & Report Writing
 * 4. Marketing & Content Creation
 * 5. Data Analysis & Research
 * 6. Strategy & Decision Making
 * 7. HR & People Management
 * 8. Finance & Accounting
 * 9. Sales & Client Management
 * 10. Health & Personal Wellness
 * 11. Education & Learning
 * 12. Creative & Personal
 * 13. Legal & Compliance
 * 14. Freelancer & Consultant Toolkit
 * 15. AI Meta-Prompts
 */
export interface PromptDomain {
  /** Unique identifier (slug-based, e.g., "productivity") */
  id: string;

  /** Domain title (e.g., "Productivity & Organization") */
  title: string;

  /** Brief description of this domain */
  description: string;

  /** Emoji icon for visual identification */
  icon: string;

  /** Gradient colors for cards (from/to) */
  color?: {
    from: string;
    to: string;
  };

  /** Sort order (1-15) */
  order: number;

  /** Categories within this domain */
  categories: PromptCategory[];
}

/**
 * Base resource interface for future expansion
 *
 * FUTURE TYPES:
 * - Templates: Document templates (Notion-style, Google Docs)
 * - Cheat Sheets: Quick reference guides
 * - Tools: Curated AI tool directory
 */
export interface Resource {
  id: string;
  type: ResourceType;
  title: string;
  description: string;
}

/**
 * Props for prompt filter state
 */
export interface PromptFilters {
  difficulty?: PromptDifficulty;
  tool?: AITool;
  domainId?: string;
  categoryId?: string;
  searchQuery?: string;
}
