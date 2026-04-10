/**
 * ============================================================================
 * MODULE JOURNEY PAGE
 * ============================================================================
 * Module journey with chapters and lessons (TypeScript content).
 *
 * ============================================================================
 * ARCHITECTURE
 * ============================================================================
 * Server Component that fetches progress BEFORE rendering.
 * This eliminates the flash of wrong state because data arrives ready.
 * No client-side loader needed - content renders with correct status immediately.
 *
 * DATA SOURCES:
 * - Module content comes from `@/data/content`
 * - User progress comes from Supabase
 *
 * ============================================================================
 */

import { redirect } from "next/navigation";
import { getModuleById } from "@/data/content";
import { platformRoutes } from "@/lib/routes/platform";
import { createClient } from "@/lib/supabase/server";
import type { Json } from "@/types/database.types";
import type { LessonCompletionStatus, LessonStatus } from "@/types/progress";
import type { LessonProgressMetadata } from "@/types/progress-metadata";
import { getQuizStatus, getTaskStatus } from "@/types/progress-metadata";
import { LessonJourneyClient } from "./LessonJourneyClient";

export interface LessonWithStatus {
  id: string;
  title: string;
  description: string;
  chapterId: string;
  status: LessonStatus;
  /** NEW: Combined completion status including quiz and challenge */
  completionStatus?: LessonCompletionStatus;
}

function normalizeLessonMetadata(
  metadata: Json,
): LessonProgressMetadata | null {
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) {
    return null;
  }

  return metadata as LessonProgressMetadata;
}

/**
 * Server Component - fetches progress server-side before rendering
 * This prevents flash of incorrect lesson status
 *
 * Module data comes from TypeScript content files, user progress from Supabase
 */
export default async function ModuleJourneyPage({
  params,
}: {
  params: Promise<{ moduleId: string }>;
}) {
  const { moduleId } = await params;

  // Get module from TypeScript content (type-safe, no API call)
  const moduleData = getModuleById(moduleId);

  if (!moduleData) {
    redirect(platformRoutes.home);
  }

  // Fetch progress on server (fast, no client-side latency)
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const lessonProgress: Record<
    string,
    { status: string | null; metadata?: LessonProgressMetadata | null }
  > = {};

  if (user) {
    // Fetch lesson progress with metadata (unified structure)
    const { data: lessons } = await supabase
      .from("lesson_progress")
      .select("lesson_id, status")
      .eq("user_id", user.id)
      .eq("module_id", moduleId);

    for (const lesson of lessons || []) {
      lessonProgress[lesson.lesson_id] = {
        status: lesson.status,
        metadata: null,
      };
    }
  }

  /**
   * Compute status for each lesson on server (no flash!)
   *
   * Locking rules:
   * - All lessons are locked by default
   * - Completed lessons stay completed
   * - If a lesson is in_progress, that lesson is available (in_progress)
   * - Otherwise, only the next sequential lesson (n+1) is unlocked
   *   - If user has no completed lessons, the first lesson is unlocked
   *
   * Skip-ahead UX:
   * - Locked lessons remain clickable in the UI (client-side)
   * - Clicking a locked node shows a caution popover and still allows "Yes, skip"
   */
  const lessonsWithStatus: LessonWithStatus[] = [];
  const staticLessons = moduleData.chapters.flatMap((ch) => ch.lessons);

  // Determine the single "available" lesson index when nothing is in_progress
  const inProgressIndex = staticLessons.findIndex(
    (lesson) => lessonProgress[lesson.id]?.status === "in_progress",
  );

  let unlockedIndex = 0;
  if (inProgressIndex >= 0) {
    unlockedIndex = inProgressIndex;
  } else {
    // Unlock the first lesson after the last consecutively completed lesson
    let cursor = 0;
    while (cursor < staticLessons.length) {
      const lesson = staticLessons[cursor];
      if (lessonProgress[lesson.id]?.status === "completed") {
        cursor += 1;
        continue;
      }
      break;
    }
    unlockedIndex = cursor;
  }

  for (let i = 0; i < staticLessons.length; i++) {
    const lesson = staticLessons[i];
    const progress = lessonProgress[lesson.id];

    let status: LessonStatus;

    if (progress?.status === "completed") {
      status = "completed";
    } else if (progress?.status === "in_progress") {
      status = "in_progress";
    } else {
      // Sequential locking: only one unlocked lesson at a time
      status = i === unlockedIndex ? "unlocked" : "locked";
    }

    // Build completion status including quiz and challenge from metadata
    const quizStatus = getQuizStatus(progress?.metadata || null);
    const taskStatus = getTaskStatus(progress?.metadata || null);

    const completionStatus: LessonCompletionStatus = {
      status,
      quiz: {
        hasQuiz: !!lesson.quiz,
        completed: !!lesson.quiz && quizStatus.completed,
        passed: !!lesson.quiz && quizStatus.passed,
        score: quizStatus.score,
      },
      challenge: {
        hasChallenge: !!lesson.challenge,
        completed: !!lesson.challenge && taskStatus.completed,
      },
      task: {
        hasTask: !!lesson.challenge,
        completed: taskStatus.completed,
        completedAt: taskStatus.completedAt,
      },
    };

    lessonsWithStatus.push({
      id: lesson.id,
      title: lesson.title,
      description: lesson.description,
      chapterId: lesson.chapterId,
      status,
      completionStatus,
    });
  }

  const completedCount = lessonsWithStatus.filter(
    (l) => l.status === "completed",
  ).length;
  const totalCount = lessonsWithStatus.length;

  // Fast lookup for client module transform
  const lessonsWithStatusById: Record<string, LessonStatus> = {};
  for (const lesson of lessonsWithStatus) {
    lessonsWithStatusById[lesson.id] = lesson.status;
  }

  // Transform TypeScript Module to match LessonJourneyClient expected interface
  const moduleForClient = {
    id: moduleData.id,
    title: moduleData.title,
    description: moduleData.description,
    category: moduleData.category,
    color: moduleData.color?.from || null, // Use gradient start color
    icon: null,
    totalLessons: staticLessons.length,
    estimatedMinutes: moduleData.estimatedMinutes,
    chapters: moduleData.chapters.map((chapter) => ({
      id: chapter.id,
      title: chapter.title,
      lessons: chapter.lessons.map((lesson) => ({
        id: lesson.id,
        title: lesson.title,
        chapterId: lesson.chapterId,
        description: lesson.description,
        estimatedMinutes: lesson.estimatedMinutes,
        xpReward: 10, // Default XP reward
        status: lessonsWithStatusById[lesson.id] || "locked",
        slides: lesson.slides || [],
      })),
    })),
  };

  // Pass server-fetched data to client component for interactivity
  return (
    <>
      <LessonJourneyClient
        module={moduleForClient}
        lessonsWithStatus={lessonsWithStatus}
        completedCount={completedCount}
        totalCount={totalCount}
        moduleId={moduleId}
      />
    </>
  );
}
