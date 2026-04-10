/**
 * Course-specific learn landing configs.
 */

import type { CourseLandingConfig } from "@/types/course-landing";
import { challenge28DayAiLandingConfig } from "./28-day-ai-challenge";
import { aiContentCreationLandingConfig } from "./ai-content-creation";
import { aiFoundationsLandingConfig } from "./ai-foundations";
import { aiProductivityLandingConfig } from "./ai-productivity";
import { chatgptLandingConfig } from "./chatgpt";
import { claudeLandingConfig } from "./claude";
import { geminiLandingConfig } from "./gemini";
import { midjourneyLandingConfig } from "./midjourney";
import { promptEngineeringLandingConfig } from "./prompt-engineering";

export const courseLandingConfigs: CourseLandingConfig[] = [
  aiFoundationsLandingConfig,
  aiProductivityLandingConfig,
  promptEngineeringLandingConfig,
  aiContentCreationLandingConfig,
  chatgptLandingConfig,
  claudeLandingConfig,
  geminiLandingConfig,
  midjourneyLandingConfig,
  challenge28DayAiLandingConfig,
];

export const courseLandingConfigByModuleId = Object.fromEntries(
  courseLandingConfigs.map((config) => [config.moduleId, config]),
) as Record<string, CourseLandingConfig>;

export const courseLandingConfigBySlug = Object.fromEntries(
  courseLandingConfigs.map((config) => [config.slug, config]),
) as Record<string, CourseLandingConfig>;
