/**
 * Prompts Index
 *
 * PURPOSE: Central export for the Prompt Library resource.
 *
 * ARCHITECTURE:
 * - This folder contains all prompt-related data
 * - domains.ts - All 15 prompt domains with categories
 * - [domain].ts - Individual prompt content files (productivity.ts, etc.)
 *
 * @see src/data/content/resources/index.ts - Main resources entry point
 */

import type {
  AITool,
  Prompt,
  PromptCategory,
  PromptDifficulty,
  PromptDomain,
  PromptFilters,
} from "@/types/resources";

// Re-export domain functions
export {
  getAllPromptDomains,
  getPromptCategory,
  getPromptDomainById,
  getPromptDomainCount,
  getTotalPromptCategoryCount,
  promptDomains,
} from "./domains";

import { aiMetaPrompts } from "./ai-meta-prompts";
import { creativePersonalPrompts } from "./creative-personal";
import { dataResearchPrompts } from "./data-research";
import { documentWritingPrompts } from "./document-writing";
// Import domain functions for internal use
import { getAllPromptDomains, getPromptCategory, getPromptDomainById } from "./domains";
import { educationLearningPrompts } from "./education-learning";
import { emailCommunicationPrompts } from "./email-communication";
import { financeAccountingPrompts } from "./finance-accounting";
import { freelancerConsultantPrompts } from "./freelancer-consultant";
import { healthWellnessPrompts } from "./health-wellness";
import { hrPeoplePrompts } from "./hr-people";
import { legalCompliancePrompts } from "./legal-compliance";
import { marketingContentPrompts } from "./marketing-content";
// Import prompt collections
import { productivityPrompts } from "./productivity";
import { salesClientPrompts } from "./sales-client";
import { strategyDecisionPrompts } from "./strategy-decision";

/**
 * All prompts combined
 *
 * NOTE: As prompt files are created, import and add them here
 */
const allPrompts: Prompt[] = [
  ...productivityPrompts,
  ...emailCommunicationPrompts,
  ...hrPeoplePrompts,
  ...financeAccountingPrompts,
  ...dataResearchPrompts,
  ...strategyDecisionPrompts,
  ...educationLearningPrompts,
  ...healthWellnessPrompts,
  ...creativePersonalPrompts,
  ...freelancerConsultantPrompts,
  ...legalCompliancePrompts,
  ...aiMetaPrompts,
  ...salesClientPrompts,
  ...documentWritingPrompts,
  ...marketingContentPrompts,
];

// Re-export for backwards compatibility
export { allPrompts as prompts };

/**
 * Get all prompts (flattened)
 */
export const getAllPrompts = (): Prompt[] => {
  return allPrompts;
};

/**
 * Get prompt by ID
 */
export const getPromptById = (id: string): Prompt | undefined => {
  return allPrompts.find((p) => p.id === id);
};

/**
 * Get prompts by domain
 */
export const getPromptsByDomain = (domainId: string): Prompt[] => {
  return allPrompts.filter((p) => p.domainId === domainId);
};

/**
 * Get prompts by category
 */
export const getPromptsByCategory = (domainId: string, categoryId: string): Prompt[] => {
  return allPrompts.filter((p) => p.domainId === domainId && p.categoryId === categoryId);
};

/**
 * Get prompts by difficulty
 */
export const getPromptsByDifficulty = (difficulty: PromptDifficulty): Prompt[] => {
  return allPrompts.filter((p) => p.difficulty === difficulty);
};

/**
 * Get prompts by tool
 */
export const getPromptsByTool = (tool: AITool): Prompt[] => {
  return allPrompts.filter((p) => p.bestTool === tool);
};

/**
 * Search prompts by query
 *
 * Searches in: title, description, tags, promptText
 */
export const searchPrompts = (query: string): Prompt[] => {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return allPrompts;

  return allPrompts.filter((p) => {
    const titleMatch = p.title.toLowerCase().includes(lowerQuery);
    const descMatch = p.description.toLowerCase().includes(lowerQuery);
    const tagMatch = p.tags?.some((t) => t.toLowerCase().includes(lowerQuery));
    const promptTextMatch = p.promptText.toLowerCase().includes(lowerQuery);

    return titleMatch || descMatch || tagMatch || promptTextMatch;
  });
};

/**
 * Filter prompts by multiple criteria
 */
export const filterPrompts = (filters: PromptFilters): Prompt[] => {
  let results = allPrompts;

  if (filters.domainId) {
    results = results.filter((p) => p.domainId === filters.domainId);
  }

  if (filters.categoryId) {
    results = results.filter((p) => p.categoryId === filters.categoryId);
  }

  if (filters.difficulty) {
    results = results.filter((p) => p.difficulty === filters.difficulty);
  }

  if (filters.tool) {
    results = results.filter((p) => p.bestTool === filters.tool);
  }

  if (filters.searchQuery) {
    const lowerQuery = filters.searchQuery.toLowerCase().trim();
    results = results.filter((p) => {
      const titleMatch = p.title.toLowerCase().includes(lowerQuery);
      const descMatch = p.description.toLowerCase().includes(lowerQuery);
      const tagMatch = p.tags?.some((t) => t.toLowerCase().includes(lowerQuery));
      return titleMatch || descMatch || tagMatch;
    });
  }

  return results;
};

/**
 * Get total prompt count
 */
export const getPromptCount = (): number => {
  return allPrompts.length;
};

/**
 * Get prompt count by domain
 */
export const getPromptCountByDomain = (domainId: string): number => {
  return allPrompts.filter((p) => p.domainId === domainId).length;
};

/**
 * Get featured prompts for homepage
 * Returns prompts from different domains with good variety
 */
export const getFeaturedPrompts = (limit: number = 6): Prompt[] => {
  const featured: Prompt[] = [];
  const usedDomains = new Set<string>();

  // First pass: get beginner prompts from different domains
  const beginnerPrompts = allPrompts
    .filter((p) => p.difficulty === "beginner")
    .sort(() => Math.random() - 0.5);

  for (const prompt of beginnerPrompts) {
    if (!usedDomains.has(prompt.domainId) && featured.length < limit) {
      featured.push(prompt);
      usedDomains.add(prompt.domainId);
    }
  }

  // Second pass: fill remaining slots with any prompts
  if (featured.length < limit) {
    const remaining = allPrompts
      .filter((p) => !featured.includes(p))
      .sort(() => Math.random() - 0.5);

    for (const prompt of remaining) {
      if (featured.length < limit) {
        featured.push(prompt);
      }
    }
  }

  return featured;
};

/**
 * Get popular prompts (by order, could be enhanced with analytics)
 */
export const getPopularPrompts = (limit: number = 10): Prompt[] => {
  return allPrompts.slice(0, limit);
};
