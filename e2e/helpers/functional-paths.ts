/**
 * Maps algorithm onboarding ModuleId to LMS module id (matches recommended-path-content-order).
 */

import type { ModuleId } from "../../src/lib/personalization/algorithm";
import { getModuleById } from "../../src/data/content";

const MAP: Record<ModuleId, string> = {
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

/**
 * Resolves first lesson id for the first recommended algorithm module (fallback: AI Fundamentals 1.1).
 */
export function getFirstLessonForRecommendedPath(algorithmIds: string[]): {
  moduleId: string;
  lessonId: string;
  chapterId: string;
} {
  const firstAlgo = algorithmIds[0] as ModuleId | undefined;
  const contentModuleId =
    (firstAlgo && MAP[firstAlgo]) || "01-skills-foundations";
  const moduleData = getModuleById(contentModuleId);
  if (!moduleData?.chapters[0]?.lessons[0]) {
    return {
      moduleId: "01-skills-foundations",
      lessonId: "l1-1-welcome-introduction",
      chapterId: "ch1-why-this-matters",
    };
  }
  const lesson = moduleData.chapters[0].lessons[0];
  return {
    moduleId: contentModuleId,
    lessonId: lesson.id,
    chapterId: lesson.chapterId,
  };
}

/**
 * Content catalog title for dashboard assertion (differs from getModuleName strings).
 */
export function getContentModuleTitleForAlgorithmId(algoId: string): string {
  const mid = MAP[algoId as ModuleId] ?? "01-skills-foundations";
  return getModuleById(mid)?.title ?? mid;
}
