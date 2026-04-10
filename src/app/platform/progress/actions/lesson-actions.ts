/**
 * Lesson progress server actions — streamlined `lesson_progress` columns only.
 */

"use server";

import { revalidatePath } from "next/cache";
import { platformPaths, platformRoutes } from "@/lib/routes/platform";
import { logTelemetryEvent, persistTelemetryRow } from "@/lib/telemetry";
import { createClient } from "@/lib/supabase/server";
import { getQuizProgress } from "./quiz-actions";
import { awardXpWithAtomicFallback, verifyUserAccess } from "./shared";

export async function getLessonProgress(props: { lessonId: string }) {
  const supabase = await createClient();
  const user = await verifyUserAccess(supabase);
  const { data } = await supabase
    .from("lesson_progress")
    .select("*")
    .eq("user_id", user.id)
    .eq("lesson_id", props.lessonId)
    .maybeSingle();
  return data;
}

export async function startLesson(props: {
  lessonId: string;
  moduleId: string;
  chapterId: string;
  totalSlides: number;
}) {
  const supabase = await createClient();
  const user = await verifyUserAccess(supabase);
  void props.chapterId;
  void props.totalSlides;

  const now = new Date().toISOString();

  const { data: existing } = await supabase
    .from("lesson_progress")
    .select("*")
    .eq("user_id", user.id)
    .eq("lesson_id", props.lessonId)
    .maybeSingle();

  if (!existing) {
    const { error } = await supabase.from("lesson_progress").insert({
      user_id: user.id,
      lesson_id: props.lessonId,
      module_id: props.moduleId,
      status: "in_progress",
      xp_earned: 0,
      started_at: now,
    });
    if (error) {
      console.error("Error starting lesson:", error);
      throw new Error("Failed to start lesson");
    }
  } else if (existing.status === "completed") {
    // Review mode — do not downgrade
  } else {
    const { error } = await supabase
      .from("lesson_progress")
      .update({
        status: "in_progress",
        started_at: existing.started_at || now,
      })
      .eq("user_id", user.id)
      .eq("lesson_id", props.lessonId);
    if (error) {
      console.error("Error updating lesson start:", error);
      throw new Error("Failed to start lesson");
    }
  }

  const { data } = await supabase
    .from("lesson_progress")
    .select("*")
    .eq("user_id", user.id)
    .eq("lesson_id", props.lessonId)
    .single();

  if (!data) {
    throw new Error("Failed to start lesson");
  }

  void logTelemetryEvent(user.id, "lesson_started", {
    lesson_id: props.lessonId,
    module_id: props.moduleId,
    chapter_id: props.chapterId,
  });

  revalidatePath(platformPaths.module(props.moduleId));
  revalidatePath(platformRoutes.profile);
  return { success: true, data };
}

export async function recordCheckpointAttempt(props: {
  lessonId: string;
  moduleId: string;
  chapterId: string;
  sectionId: string;
  correct: boolean;
}): Promise<{ success: boolean }> {
  const supabase = await createClient();
  const user = await verifyUserAccess(supabase);
  void logTelemetryEvent(user.id, "checkpoint_attempted", {
    lesson_id: props.lessonId,
    module_id: props.moduleId,
    chapter_id: props.chapterId,
    section_id: props.sectionId,
    correct: props.correct,
  });
  return { success: true };
}

export async function updateSlideProgress(props: { lessonId: string; currentSlide: number }) {
  const supabase = await createClient();
  const user = await verifyUserAccess(supabase);
  await persistTelemetryRow(user.id, "slide_progress", {
    lesson_id: props.lessonId,
    current_slide: props.currentSlide,
    at: new Date().toISOString(),
  });
  return { success: true, data: null as null };
}

export async function saveTaskResponse(props: {
  lessonId: string;
  taskId: string;
  response: string;
}) {
  const supabase = await createClient();
  const user = await verifyUserAccess(supabase);
  await persistTelemetryRow(user.id, "task_response_saved", {
    lesson_id: props.lessonId,
    task_id: props.taskId,
    response: props.response,
    at: new Date().toISOString(),
  });
  return { success: true, data: null as null };
}

export async function completeLesson(props: {
  lessonId: string;
  moduleId: string;
  chapterId: string;
  xp?: number;
  quizId?: string;
  challengeId?: string;
}) {
  const supabase = await createClient();
  const user = await verifyUserAccess(supabase);
  void props.challengeId;

  const xp = props.xp || 50;

  const { data: streakBeforeRow } = await supabase
    .from("users")
    .select("current_streak")
    .eq("id", user.id)
    .maybeSingle();

  if (props.quizId) {
    const quizProgress = await getQuizProgress({ lessonId: props.lessonId });
    if (!quizProgress || !quizProgress.passed) {
      return {
        success: false,
        error: "Quiz must be passed first",
        requirements: { quiz: { passed: false, required: true } },
      };
    }
  }

  const { data: existing } = await supabase
    .from("lesson_progress")
    .select("status")
    .eq("user_id", user.id)
    .eq("lesson_id", props.lessonId)
    .maybeSingle();

  if (existing?.status === "completed") {
    const { data: userProfile } = await supabase
      .from("users")
      .select("total_xp")
      .eq("id", user.id)
      .maybeSingle();
    return {
      success: true,
      data: {
        lesson: null,
        xpAwarded: 0,
        newTotalXP: userProfile?.total_xp || 0,
        alreadyCompleted: true,
      },
    };
  }

  const now = new Date().toISOString();

  if (existing) {
    const { error } = await supabase
      .from("lesson_progress")
      .update({
        status: "completed",
        xp_earned: xp,
        completed_at: now,
      })
      .eq("user_id", user.id)
      .eq("lesson_id", props.lessonId);
    if (error) {
      console.error("Error completing lesson:", error);
      throw new Error("Failed to complete lesson");
    }
  } else {
    const { error } = await supabase.from("lesson_progress").insert({
      user_id: user.id,
      lesson_id: props.lessonId,
      module_id: props.moduleId,
      status: "completed",
      xp_earned: xp,
      started_at: now,
      completed_at: now,
    });
    if (error) {
      console.error("Error inserting completed lesson:", error);
      throw new Error("Failed to complete lesson");
    }
  }

  const xpResult = await awardXpWithAtomicFallback(supabase, user.id, xp);

  revalidatePath(platformPaths.module(props.moduleId));
  revalidatePath(platformRoutes.profile);

  void logTelemetryEvent(user.id, "lesson_completed", {
    lesson_id: props.lessonId,
    module_id: props.moduleId,
    chapter_id: props.chapterId,
    xp_awarded: xp,
  });
  void logTelemetryEvent(user.id, "xp_earned", {
    lesson_id: props.lessonId,
    module_id: props.moduleId,
    amount: xp,
    source: "lesson_complete",
  });

  const { data: streakAfterRow } = await supabase
    .from("users")
    .select("current_streak")
    .eq("id", user.id)
    .maybeSingle();
  if (
    streakAfterRow?.current_streak !== undefined &&
    streakAfterRow.current_streak !== streakBeforeRow?.current_streak
  ) {
    void logTelemetryEvent(user.id, "streak_changed", {
      previous: streakBeforeRow?.current_streak ?? null,
      current: streakAfterRow.current_streak,
      lesson_id: props.lessonId,
    });
  }

  return {
    success: true,
    data: {
      lesson: null,
      xpAwarded: xp,
      newTotalXP: xpResult.newTotalXP,
      alreadyCompleted: false,
    },
  };
}

export async function getUserStats() {
  const supabase = await createClient();
  const user = await verifyUserAccess(supabase);

  const { data: userProfile } = await supabase
    .from("users")
    .select("total_xp, current_level, current_streak, longest_streak")
    .eq("id", user.id)
    .single();

  const { data: lessonProgress } = await supabase
    .from("lesson_progress")
    .select("status, module_id")
    .eq("user_id", user.id);

  const completedLessons = lessonProgress?.filter((l) => l.status === "completed").length || 0;
  const moduleIds = new Set(lessonProgress?.map((l) => l.module_id) || []);
  const completedModules = Array.from(moduleIds).filter((moduleId) => {
    const moduleLessons = lessonProgress?.filter((l) => l.module_id === moduleId) || [];
    return moduleLessons.length > 0 && moduleLessons.every((l) => l.status === "completed");
  }).length;

  return {
    xp: userProfile?.total_xp || 0,
    level: userProfile?.current_level || 1,
    currentStreak: userProfile?.current_streak || 0,
    longestStreak: userProfile?.longest_streak || 0,
    lessonsCompleted: completedLessons,
    modulesStarted: moduleIds.size,
    modulesCompleted: completedModules,
  };
}
