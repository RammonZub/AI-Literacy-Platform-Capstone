/**
 * Feedback Server Actions
 *
 * Server actions for submitting user feedback and fetching user stats for feedback triggers.
 */

"use server";

import { persistTelemetryRow } from "@/lib/telemetry";
import { createClient } from "@/lib/supabase/server";

interface FeedbackInput {
  rating: number;
  feedback_text?: string | null;
}

export interface FeedbackStats {
  totalLessonsCompleted: number;
  currentStreak: number;
  lessonsCompletedToday: number;
}

export async function createFeedbackAction(input: FeedbackInput) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id) {
    throw new Error("Sign in required to submit feedback");
  }

  await persistTelemetryRow(user.id, "user_feedback", {
    rating: input.rating,
    feedback_text: input.feedback_text ?? null,
  });

  return { success: true };
}

export async function getFeedbackStats(): Promise<FeedbackStats> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { totalLessonsCompleted: 0, currentStreak: 0, lessonsCompletedToday: 0 };
  }

  // Get user's current streak from users table
  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("current_streak")
    .eq("id", user.id)
    .single();

  // Get total completed lessons
  const { count: totalLessonsCompleted, error: lessonError } = await supabase
    .from("lesson_progress")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id)
    .eq("status", "completed");

  // Get lessons completed today
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayISO = today.toISOString();

  const { count: lessonsCompletedToday, error: todayError } = await supabase
    .from("lesson_progress")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id)
    .eq("status", "completed")
    .gte("completed_at", todayISO);

  if (userError || lessonError || todayError) {
    console.error("Error fetching feedback stats:", { userError, lessonError, todayError });
  }

  return {
    totalLessonsCompleted: totalLessonsCompleted || 0,
    currentStreak: userData?.current_streak || 0,
    lessonsCompletedToday: lessonsCompletedToday || 0,
  };
}
