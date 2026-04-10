/**
 * Dashboard home-journey API
 *
 * PURPOSE:
 * Provide the dashboard with the ordered personalized module list that should
 * anchor the learner's home screen.
 *
 * DESIGN:
 * - The API reads recommendations from `users.metadata.personalization`, which
 *   is the user-owned source of truth written during onboarding.
 * - Older accounts are backfilled on read from the latest `onboarding_sessions`
 *   row so existing users immediately benefit from the new dashboard without
 *   repeating onboarding.
 * - Lesson progress is joined in-memory so each recommended module can show its
 *   current status and completion percentage.
 */

import { NextResponse } from "next/server";
import { getModuleLessons, modules } from "@/data/content";
import { createClient } from "@/lib/supabase/server";
import {
  buildUserPersonalizationMetadata,
  getRecommendedModuleIdsFromUserMetadata,
  mergeUserPersonalizationMetadata,
} from "@/lib/personalization/user-personalization-metadata";

type LessonProgressRow = {
  module_id: string;
  lesson_id: string;
  status: string | null;
  started_at: string | null;
  completed_at: string | null;
};

type UserMetadataRow = {
  metadata: unknown;
};

type OnboardingRecommendationRow = {
  recommended_path: unknown;
  customer_profile: string | null;
  persona: string | null;
  ai_experience: string | null;
  path_length: number | null;
  completed_at: string | null;
};

type ComputedModuleProgressStatus = "not_started" | "in_progress" | "completed";

type ComputedModuleProgress = {
  moduleId: string;
  lessonsCompleted: number;
  totalLessons: number;
  percentComplete: number;
  status: ComputedModuleProgressStatus;
  lastActivityAt: string | null;
};

function getLessonActivityAt(row: LessonProgressRow): string | null {
  const candidates = [row.completed_at, row.started_at].filter(
    (value): value is string => typeof value === "string" && value.length > 0,
  );

  if (candidates.length === 0) {
    return null;
  }

  let latest = candidates[0];
  let latestTs = Date.parse(latest);

  for (let i = 1; i < candidates.length; i += 1) {
    const candidateTs = Date.parse(candidates[i]);
    if (!Number.isNaN(candidateTs) && (Number.isNaN(latestTs) || candidateTs > latestTs)) {
      latest = candidates[i];
      latestTs = candidateTs;
    }
  }

  return latest;
}

function isStartedButUnlocked(row: LessonProgressRow): boolean {
  if (row.status !== "unlocked") {
    return false;
  }

  return getLessonActivityAt(row) !== null;
}

/**
 * Compute per-module progress for every catalog module.
 *
 * Keeping zero-progress modules in the map lets the dashboard render the full
 * personalized recommendation list without needing extra fallback logic.
 */
function buildModuleProgressMap(rows: LessonProgressRow[]): Map<string, ComputedModuleProgress> {
  const progressByLessonId = new Map<string, LessonProgressRow>();

  for (const row of rows) {
    progressByLessonId.set(row.lesson_id, row);
  }

  const progressByModuleId = new Map<string, ComputedModuleProgress>();

  for (const contentModule of modules) {
    const allLessons = getModuleLessons(contentModule.id);
    const totalLessons = allLessons.length;

    if (totalLessons === 0) {
      continue;
    }

    let completedCount = 0;
    let hasInProgress = false;
    let lastActivityAt: string | null = null;
    let lastActivityTs = Number.NEGATIVE_INFINITY;

    for (const lesson of allLessons) {
      const progress = progressByLessonId.get(lesson.id);
      if (!progress) {
        continue;
      }

      if (progress.status === "completed") {
        completedCount += 1;
      } else if (progress.status === "in_progress" || isStartedButUnlocked(progress)) {
        hasInProgress = true;
      }

      const activityAt = getLessonActivityAt(progress);
      if (!activityAt) {
        continue;
      }

      const activityTs = Date.parse(activityAt);
      if (!Number.isNaN(activityTs) && activityTs > lastActivityTs) {
        lastActivityTs = activityTs;
        lastActivityAt = activityAt;
      }
    }

    let status: ComputedModuleProgressStatus = "not_started";
    if (completedCount === totalLessons) {
      status = "completed";
    } else if (completedCount > 0 || hasInProgress) {
      status = "in_progress";
    }

    progressByModuleId.set(contentModule.id, {
      moduleId: contentModule.id,
      lessonsCompleted: completedCount,
      totalLessons,
      percentComplete: totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0,
      status,
      lastActivityAt,
    });
  }

  return progressByModuleId;
}

/**
 * Mirror the latest onboarding recommendation onto `users.metadata` when the
 * new metadata source is missing.
 */
async function syncUserMetadataFromLatestOnboarding(props: {
  supabase: Awaited<ReturnType<typeof createClient>>;
  userId: string;
  currentMetadata: unknown;
  onboardingRow: OnboardingRecommendationRow | null;
}): Promise<string[]> {
  if (!props.onboardingRow) {
    return [];
  }

  const personalizationMetadata = buildUserPersonalizationMetadata({
    completedAt: props.onboardingRow.completed_at ?? new Date().toISOString(),
    recommendedPath: props.onboardingRow.recommended_path,
    pathLength: props.onboardingRow.path_length,
    customerProfile: props.onboardingRow.customer_profile,
    persona: props.onboardingRow.persona,
    aiExperience: props.onboardingRow.ai_experience,
  });

  if (!personalizationMetadata) {
    return [];
  }

  const mergedMetadata = mergeUserPersonalizationMetadata(
    props.currentMetadata,
    personalizationMetadata,
  );

  const { error: updateError } = await props.supabase
    .from("users")
    .update({ metadata: mergedMetadata })
    .eq("id", props.userId);

  if (updateError) {
    console.error("home-journey: metadata sync failed", updateError.message);
  }

  return personalizationMetadata.recommended_module_ids;
}

/**
 * Return the dashboard recommendation list for the authenticated learner.
 */
export async function GET() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const [progressResult, userResult, onboardingResult] = await Promise.all([
      supabase
        .from("lesson_progress")
        .select("module_id, lesson_id, status, started_at, completed_at")
        .eq("user_id", user.id),
      supabase.from("users").select("metadata").eq("id", user.id).maybeSingle(),
      supabase
        .from("onboarding_sessions")
        .select(
          "recommended_path, customer_profile, persona, ai_experience, path_length, completed_at",
        )
        .eq("user_id", user.id)
        .order("completed_at", { ascending: false })
        .limit(1)
        .maybeSingle(),
    ]);

    const { data: progressRows, error: progressError } = progressResult;

    if (progressError) {
      return NextResponse.json(
        { error: "Failed to fetch progress", details: progressError.message },
        { status: 500 },
      );
    }

    if (userResult.error) {
      console.error("home-journey: users metadata fetch failed", userResult.error.message);
    }

    if (onboardingResult.error) {
      console.error("home-journey: onboarding_sessions fetch failed", onboardingResult.error.message);
    }

    const progressByModuleId = buildModuleProgressMap((progressRows || []) as LessonProgressRow[]);
    const recommendedModuleIdsFromMetadata = getRecommendedModuleIdsFromUserMetadata(
      (userResult.data as UserMetadataRow | null)?.metadata ?? null,
    );
    const recommendedModuleIds =
      recommendedModuleIdsFromMetadata.length > 0
        ? recommendedModuleIdsFromMetadata
        : await syncUserMetadataFromLatestOnboarding({
            supabase,
            userId: user.id,
            currentMetadata: (userResult.data as UserMetadataRow | null)?.metadata ?? null,
            onboardingRow: (onboardingResult.data as OnboardingRecommendationRow | null) ?? null,
          });

    const recommendations = recommendedModuleIds
      .map((moduleId) => progressByModuleId.get(moduleId))
      .filter((moduleProgress): moduleProgress is ComputedModuleProgress => moduleProgress != null)
      .map((moduleProgress) => ({
        moduleId: moduleProgress.moduleId,
        progress: moduleProgress.percentComplete,
        completedLessons: moduleProgress.lessonsCompleted,
        totalLessons: moduleProgress.totalLessons,
        status: moduleProgress.status,
      }));

    return NextResponse.json({
      title: "Recommended modules",
      subtitle:
        "Ordered from your onboarding assessment. Start with the first module, then continue through the rest below.",
      recommendations,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unexpected home journey failure",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
