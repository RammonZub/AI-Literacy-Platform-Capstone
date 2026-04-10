/**
 * Maps onboarding algorithm module slugs (`ModuleId`) to CMS module IDs and
 * normalizes personalized `recommended_path` values for dashboard and profile
 * experiences.
 *
 * RESPONSIBILITY:
 * - Accept raw recommendation payloads from onboarding storage or user metadata
 * - Resolve algorithm module ids to concrete content module ids
 * - Preserve the original ordering while removing duplicates and invalid ids
 * - Optionally append the remaining catalog order for utility views that need a
 *   full module list after the personalized recommendations
 *
 * @module lib/personalization/recommended-path-content-order
 */

import type { ModuleId } from "./algorithm";

const ALGORITHM_MODULE_ID_TO_CONTENT_MODULE_ID: Record<ModuleId, string> = {
  ai_foundations: "01-skills-foundations",
  productivity_basics: "02-skills-productivity",
  prompt_engineering: "03-skills-prompting",
  content_creation: "04-skills-creation",
  chatgpt: "05-tools-chatgpt",
  claude: "06-tools-claude",
  gemini: "07-tools-gemini",
  midjourney: "08-tools-midjourney",
  workflows: "09-workflow-automation",
  "28_day_challenge": "10-challenge-28-day-ai",
};

function parseRecommendedPathStrings(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string" && item.length > 0);
}

function resolveRawPathEntryToContentId(
  raw: string,
  catalogIds: ReadonlySet<string>,
): string | undefined {
  if (catalogIds.has(raw)) return raw;
  if (Object.prototype.hasOwnProperty.call(ALGORITHM_MODULE_ID_TO_CONTENT_MODULE_ID, raw)) {
    const mapped = ALGORITHM_MODULE_ID_TO_CONTENT_MODULE_ID[raw as ModuleId];
    return catalogIds.has(mapped) ? mapped : undefined;
  }
  return undefined;
}

/**
 * Build the personalized module id list only.
 *
 * WHY THIS EXISTS:
 * Dashboard and metadata storage need the strict onboarding order without
 * appending the rest of the catalog. This keeps the primary recommendation
 * sequence stable and user-specific.
 *
 * @param recommendedPathJson - Raw onboarding recommendation array
 * @param catalogOrder - Default module order used to validate module ids
 */
export function mapRecommendedPathToContentModuleIds(
  recommendedPathJson: unknown,
  catalogOrder: readonly string[],
): string[] {
  const catalogSet = new Set(catalogOrder);
  const parsed = parseRecommendedPathStrings(recommendedPathJson);
  const seen = new Set<string>();
  const ordered: string[] = [];

  for (const raw of parsed) {
    const contentId = resolveRawPathEntryToContentId(raw, catalogSet);
    if (contentId && !seen.has(contentId)) {
      seen.add(contentId);
      ordered.push(contentId);
    }
  }

  return ordered;
}

/**
 * Builds module ID order: unique personalized IDs first (from DB or algorithm slugs),
 * then any remaining catalog modules in default order.
 *
 * @param recommendedPathJson - `onboarding_sessions.recommended_path` (JSONB array)
 * @param catalogOrder - Default module order (e.g. `modules.map((m) => m.id)`)
 */
export function buildHomeJourneyModuleOrder(
  recommendedPathJson: unknown,
  catalogOrder: readonly string[],
): string[] {
  const ordered = mapRecommendedPathToContentModuleIds(recommendedPathJson, catalogOrder);
  const seen = new Set<string>();

  for (const id of ordered) {
    seen.add(id);
  }

  for (const id of catalogOrder) {
    if (!seen.has(id)) {
      ordered.push(id);
    }
  }

  return ordered;
}
