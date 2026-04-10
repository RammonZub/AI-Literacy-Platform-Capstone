/**
 * User personalization metadata helpers
 *
 * PURPOSE:
 * Persist onboarding recommendations onto `public.users.metadata` so the
 * dashboard, profile surfaces, and any future personalization-aware UI can
 * read a single user-owned source of truth instead of repeatedly querying the
 * onboarding session table.
 *
 * DESIGN:
 * - Metadata keeps both the raw onboarding recommendation ids and the resolved
 *   content module ids used by the UI.
 * - Parsing is intentionally defensive so older rows, partial migrations, or
 *   hand-edited metadata do not break the dashboard.
 * - Merging preserves unrelated metadata keys such as recommendation feedback.
 */

import { modules } from "@/data/content";
import type { Json } from "@/types/database.types";
import { mapRecommendedPathToContentModuleIds } from "./recommended-path-content-order";

const USER_PERSONALIZATION_METADATA_VERSION = 1 as const;
const USER_PERSONALIZATION_SOURCE = "onboarding_assessment" as const;

/**
 * Normalized personalization payload stored under `users.metadata.personalization`.
 */
export interface UserPersonalizationMetadata {
  version: typeof USER_PERSONALIZATION_METADATA_VERSION;
  source: typeof USER_PERSONALIZATION_SOURCE;
  updated_at: string;
  completed_at: string;
  recommended_path: string[];
  recommended_module_ids: string[];
  path_length: number;
  customer_profile: string | null;
  persona: string | null;
  ai_experience: string | null;
}

/**
 * Input contract for building stored personalization metadata.
 *
 * It accepts raw values from either the onboarding action result or the latest
 * `onboarding_sessions` row used for fallback sync.
 */
export interface UserPersonalizationMetadataInput {
  completedAt: string;
  recommendedPath: unknown;
  pathLength: number | null | undefined;
  customerProfile: string | null | undefined;
  persona: string | null | undefined;
  aiExperience: string | null | undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((entry): entry is string => typeof entry === "string" && entry.length > 0);
}

/**
 * Build a normalized metadata object from onboarding data.
 *
 * WHY THIS EXISTS:
 * The onboarding algorithm returns abstract module ids. The dashboard needs the
 * concrete content ids, while analytics still benefit from the raw path. This
 * function stores both forms together.
 */
export function buildUserPersonalizationMetadata(
  input: UserPersonalizationMetadataInput,
): UserPersonalizationMetadata | null {
  const catalogOrder = modules.map((module) => module.id);
  const recommendedPath = parseStringArray(input.recommendedPath);
  const recommendedModuleIds = mapRecommendedPathToContentModuleIds(recommendedPath, catalogOrder);

  if (recommendedPath.length === 0 && recommendedModuleIds.length === 0) {
    return null;
  }

  return {
    version: USER_PERSONALIZATION_METADATA_VERSION,
    source: USER_PERSONALIZATION_SOURCE,
    updated_at: input.completedAt,
    completed_at: input.completedAt,
    recommended_path: recommendedPath,
    recommended_module_ids: recommendedModuleIds,
    path_length:
      typeof input.pathLength === "number" && Number.isFinite(input.pathLength)
        ? input.pathLength
        : Math.max(recommendedModuleIds.length, recommendedPath.length),
    customer_profile: input.customerProfile ?? null,
    persona: input.persona ?? null,
    ai_experience: input.aiExperience ?? null,
  };
}

/**
 * Read personalization metadata from a `users.metadata` JSON payload.
 *
 * The parser tolerates missing derived ids by rebuilding them from the raw
 * onboarding path, which keeps older rows usable after schema evolution.
 */
export function readUserPersonalizationMetadata(
  metadataValue: unknown,
): UserPersonalizationMetadata | null {
  if (!isRecord(metadataValue) || !isRecord(metadataValue.personalization)) {
    return null;
  }

  const personalization = metadataValue.personalization;
  const recommendedPath = parseStringArray(personalization.recommended_path);
  const recommendedModuleIdsFromMetadata = parseStringArray(
    personalization.recommended_module_ids,
  );
  const catalogOrder = modules.map((module) => module.id);
  const recommendedModuleIds =
    recommendedModuleIdsFromMetadata.length > 0
      ? recommendedModuleIdsFromMetadata
      : mapRecommendedPathToContentModuleIds(recommendedPath, catalogOrder);

  if (recommendedPath.length === 0 && recommendedModuleIds.length === 0) {
    return null;
  }

  return {
    version: USER_PERSONALIZATION_METADATA_VERSION,
    source: USER_PERSONALIZATION_SOURCE,
    updated_at:
      typeof personalization.updated_at === "string"
        ? personalization.updated_at
        : typeof personalization.completed_at === "string"
          ? personalization.completed_at
          : new Date(0).toISOString(),
    completed_at:
      typeof personalization.completed_at === "string"
        ? personalization.completed_at
        : typeof personalization.updated_at === "string"
          ? personalization.updated_at
          : new Date(0).toISOString(),
    recommended_path: recommendedPath,
    recommended_module_ids: recommendedModuleIds,
    path_length:
      typeof personalization.path_length === "number" && Number.isFinite(personalization.path_length)
        ? personalization.path_length
        : Math.max(recommendedModuleIds.length, recommendedPath.length),
    customer_profile:
      typeof personalization.customer_profile === "string"
        ? personalization.customer_profile
        : null,
    persona: typeof personalization.persona === "string" ? personalization.persona : null,
    ai_experience:
      typeof personalization.ai_experience === "string" ? personalization.ai_experience : null,
  };
}

/**
 * Merge the normalized personalization payload into a `users.metadata` object.
 *
 * This avoids overwriting other persisted keys such as feedback, feature flags,
 * or future account-level metadata owned by unrelated features.
 */
export function mergeUserPersonalizationMetadata(
  currentMetadata: unknown,
  personalization: UserPersonalizationMetadata,
): Json {
  const safeCurrentMetadata = isRecord(currentMetadata) ? currentMetadata : {};

  return {
    ...safeCurrentMetadata,
    personalization,
  } as unknown as Json;
}

/**
 * Convenience accessor for dashboard consumers that only need the ordered
 * content module ids.
 */
export function getRecommendedModuleIdsFromUserMetadata(metadataValue: unknown): string[] {
  return readUserPersonalizationMetadata(metadataValue)?.recommended_module_ids ?? [];
}
