/**
 * Profile Page
 *
 * User profile with real data from Supabase.
 * Displays XP, lessons completed, and learning stats.
 *
 * OPTIMIZED: Server Component with parallel data fetching
 * - No race conditions
 * - No infinite loading bugs
 * - Faster load times with parallel queries
 */

import { redirect } from "next/navigation";
import { modules } from "@/data/content";
import { createClient } from "@/lib/supabase/server";
import { getUserStats } from "../progress/actions";
import ProfileClient from "./ProfileClient";

interface StoredCertificate {
  moduleId: string;
  completedAt: string;
  certificateId: string;
}

interface CourseCertificateProgress {
  moduleId: string;
  moduleTitle: string;
  totalLessons: number;
  completedLessons: number;
  percentComplete: number;
  remainingLessons: number;
  isUnlocked: boolean;
  certificateId: string | null;
  completedAt: string | null;
  xpEarned: number;
}

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Redirect if not authenticated
  if (!user) {
    redirect("/login");
  }

  const [profileResult, lessonProgressResult, statsResult, onboardingResult, certificatesResult] =
    await Promise.all([
    supabase.from("users").select("*").eq("id", user.id).maybeSingle(),
    supabase
      .from("lesson_progress")
      .select("lesson_id, module_id, status, xp_earned")
      .eq("user_id", user.id),
    getUserStats().catch(() => ({
      xp: 0,
      level: 1,
      currentStreak: 0,
      longestStreak: 0,
      lessonsCompleted: 0,
      modulesStarted: 0,
      modulesCompleted: 0,
    })),
    supabase
      .from("onboarding_sessions")
      .select("recommended_path")
      .eq("user_id", user.id)
      .order("completed_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
    supabase
      .from("certificates")
      .select("id, module_id, issued_at")
      .eq("user_id", user.id)
      .order("issued_at", { ascending: false }),
    ]);

  if (!profileResult.data) {
    redirect("/login");
  }

  const profile = profileResult.data as typeof profileResult.data & {
    metadata?: Record<string, unknown> | null;
  };
  const stats = statsResult;

  // Pull the first recommended module from the most recent onboarding session
  const recommendedPath = onboardingResult.data?.recommended_path as string[] | null;
  const recommendedModuleId = recommendedPath?.[0] ?? null;

  // Check if feedback was already submitted (stored in users.metadata)
  type FeedbackRecord = {
    submitted_at: string;
    recommended_module_id: string;
    q_recommendation_fit: number;
    q_first_lesson: number;
    q_ease_of_use: number;
    q_microlearning_fit: number;
    q_overall_satisfaction: number;
  };
  const existingFeedback = (profile.metadata?.recommendation_feedback as FeedbackRecord) ?? null;

  const certificates: StoredCertificate[] =
    certificatesResult.data?.map((row) => ({
      moduleId: row.module_id,
      completedAt: row.issued_at,
      certificateId: row.id,
    })) || [];
  const certificateByModuleId = new Map(
    certificates.map((certificate) => [certificate.moduleId, certificate]),
  );

  const completedLessonsByModule = new Map<string, Set<string>>();
  const xpEarnedByModule = new Map<string, number>();
  for (const row of lessonProgressResult.data || []) {
    if (row.status !== "completed") continue;

    const existing = completedLessonsByModule.get(row.module_id) || new Set<string>();
    existing.add(row.lesson_id);
    completedLessonsByModule.set(row.module_id, existing);
    xpEarnedByModule.set(row.module_id, (xpEarnedByModule.get(row.module_id) || 0) + row.xp_earned);
  }

  const courseCertificates: CourseCertificateProgress[] = modules.map((module) => {
    const totalLessons = module.chapters.reduce((sum, chapter) => sum + chapter.lessons.length, 0);
    const completedLessons = completedLessonsByModule.get(module.id)?.size || 0;
    const isUnlocked = totalLessons > 0 && completedLessons >= totalLessons;
    const percentComplete =
      totalLessons > 0 ? Math.min(100, Math.round((completedLessons / totalLessons) * 100)) : 0;
    const remainingLessons = Math.max(totalLessons - completedLessons, 0);
    const certificate = certificateByModuleId.get(module.id);

    return {
      moduleId: module.id,
      moduleTitle: module.title,
      totalLessons,
      completedLessons,
      percentComplete,
      remainingLessons,
      isUnlocked,
      certificateId: certificate?.certificateId ?? null,
      completedAt: certificate?.completedAt ?? null,
      xpEarned: xpEarnedByModule.get(module.id) || 0,
    };
  });

  // Render client component with all data ready
  return (
    <ProfileClient
      user={user}
      profile={profile}
      stats={stats}
      courseCertificates={courseCertificates}
      recommendedModuleId={recommendedModuleId}
      existingFeedback={existingFeedback}
    />
  );
}
