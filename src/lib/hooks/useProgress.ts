/**
 * Progress Hook
 *
 * Fetches and caches user lesson progress.
 * Module progress is computed from lesson progress data AND actual module content.
 */

"use client";

import { useCallback, useEffect, useState } from "react";
import { getModuleLessons, modules } from "@/data/content";
import { createClient } from "@/lib/supabase/client";
import type { Database } from "@/types/database.types";

type LessonProgressRow = Database["public"]["Tables"]["lesson_progress"]["Row"];

type ProgressFetchContext = "useProgress" | "useAllProgress";
const AUTH_FETCH_TIMEOUT_MS = 4000;
const PROGRESS_FETCH_TIMEOUT_MS = 5000;

function withTimeout<T>(promise: Promise<T>, timeoutMs: number, label: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timeoutId = window.setTimeout(() => {
      reject(new Error(`${label} timed out after ${timeoutMs}ms`));
    }, timeoutMs);

    promise
      .then((result) => resolve(result))
      .catch((error) => reject(error))
      .finally(() => window.clearTimeout(timeoutId));
  });
}

async function resolveUserIdFromClientSession(
  context: ProgressFetchContext,
): Promise<string | null> {
  const supabase = createClient();

  try {
    const {
      data: { session },
    } = await withTimeout(
      supabase.auth.getSession(),
      AUTH_FETCH_TIMEOUT_MS,
      `[${context}] supabase.auth.getSession`,
    );
    if (session?.user?.id) {
      return session.user.id;
    }
  } catch (err) {
    console.warn(`[${context}] Failed to resolve client session user:`, err);
  }

  try {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), AUTH_FETCH_TIMEOUT_MS);
    const response = await fetch("/api/auth/me", {
      method: "GET",
      cache: "no-store",
      credentials: "include",
      signal: controller.signal,
    }).finally(() => window.clearTimeout(timeoutId));

    if (!response.ok) return null;

    const payload = await response.json();
    return payload?.user?.id ?? null;
  } catch (err) {
    console.warn(`[${context}] Failed to resolve server-auth user:`, err);
    return null;
  }
}

async function fetchLessonProgressRowsFromApi(moduleId?: string): Promise<LessonProgressRow[]> {
  const query = moduleId ? `?moduleId=${encodeURIComponent(moduleId)}` : "";
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), PROGRESS_FETCH_TIMEOUT_MS);
  const response = await fetch(`/api/platform/progress${query}`, {
    method: "GET",
    cache: "no-store",
    credentials: "include",
    signal: controller.signal,
  }).finally(() => window.clearTimeout(timeoutId));

  if (response.status === 401) return [];

  if (!response.ok) {
    const payload = await response.json().catch(() => null);
    const message = payload?.error || `API request failed (${response.status})`;
    throw new Error(message);
  }

  const payload = await response.json();
  return (payload?.rows || []) as LessonProgressRow[];
}

async function fetchLessonProgressRows(
  userId: string,
  context: ProgressFetchContext,
  moduleId?: string,
): Promise<LessonProgressRow[]> {
  const supabase = createClient();

  let hasClientSession = false;
  let sessionUserId: string | null = null;
  try {
    const {
      data: { session },
    } = await withTimeout(
      supabase.auth.getSession(),
      AUTH_FETCH_TIMEOUT_MS,
      `[${context}] session-check`,
    );
    sessionUserId = session?.user?.id ?? null;
    hasClientSession = !!sessionUserId;
  } catch (err) {
    console.warn(`[${context}] Failed to check client session before progress query:`, err);
  }

  if (hasClientSession && sessionUserId === userId) {
    let query = supabase.from("lesson_progress").select("*").eq("user_id", userId);

    if (moduleId) {
      query = query.eq("module_id", moduleId);
    }

    const { data, error } = await query;
    if (error) throw error;

    return (data || []) as LessonProgressRow[];
  }

  if (!hasClientSession || sessionUserId !== userId) {
    console.warn(
      `[${context}] Client session/user mismatch. Falling back to server progress API.`,
      {
        expectedUserId: userId,
        sessionUserId,
        hasClientSession,
      },
    );
  }

  return fetchLessonProgressRowsFromApi(moduleId);
}

export interface ModuleProgress {
  moduleId: string;
  lessonsCompleted: number;
  totalLessons: number;
  percentComplete: number;
  status: "not_started" | "in_progress" | "completed";
  lastActivityAt: string | null;
}

export interface UseProgressReturn {
  lessonProgress: Record<string, LessonProgressRow>;
  moduleProgress: ModuleProgress | null;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

/**
 * Hook for managing user lesson progress
 *
 * IMPORTANT: Computes progress using ACTUAL module content (from TypeScript),
 * not just lesson_progress rows. This ensures accurate percentages.
 *
 * AUTH HANDLING: Listens to auth state changes and re-fetches when user
 * becomes available. This fixes the race condition where the hook runs
 * before auth state is loaded.
 *
 * @param moduleId - The module ID to fetch progress for
 * @returns {UseProgressReturn} Progress data, loading state, and refresh function
 */
export function useProgress(moduleId?: string): UseProgressReturn {
  const [lessonProgress, setLessonProgress] = useState<Record<string, LessonProgressRow>>({});
  const [moduleProgress, setModuleProgress] = useState<ModuleProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProgress = useCallback(async (userId: string, targetModuleId?: string) => {
    try {
      const lessons = await fetchLessonProgressRows(userId, "useProgress", targetModuleId);

      // Convert to record for easy lookup
      const lessonsRecord: Record<string, LessonProgressRow> = {};
      for (const lesson of lessons || []) {
        lessonsRecord[lesson.lesson_id] = lesson;
      }
      setLessonProgress(lessonsRecord);

      // Compute module progress using ACTUAL module content
      if (targetModuleId) {
        // Get ALL lessons in this module from TypeScript content
        const allModuleLessons = getModuleLessons(targetModuleId);
        const totalLessons = allModuleLessons.length;

        // Count completed lessons and check for in-progress
        let completedCount = 0;
        let hasInProgress = false;

        for (const lesson of allModuleLessons) {
          const progress = lessonsRecord[lesson.id];
          if (progress?.status === "completed") {
            completedCount++;
          } else if (progress?.status === "in_progress") {
            hasInProgress = true;
          }
        }

        // Determine module status
        let status: "not_started" | "in_progress" | "completed" = "not_started";
        if (completedCount === totalLessons && totalLessons > 0) {
          status = "completed";
        } else if (completedCount > 0 || hasInProgress) {
          status = "in_progress";
        }

        // Calculate accurate percentage based on ACTUAL total lessons
        const percentComplete = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

        setModuleProgress({
          moduleId: targetModuleId,
          lessonsCompleted: completedCount,
          totalLessons,
          percentComplete,
          status,
          lastActivityAt: null,
        });
      } else {
        setModuleProgress(null);
      }

      setError(null);
    } catch (err: unknown) {
      console.error("Error fetching progress:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch progress");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    const supabase = createClient();

    const runInitialFetch = async () => {
      const resolvedUserId = await resolveUserIdFromClientSession("useProgress");
      if (cancelled) return;

      if (resolvedUserId) {
        await fetchProgress(resolvedUserId, moduleId);
      } else {
        setLoading(false);
      }
    };
    runInitialFetch();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      // Skip TOKEN_REFRESHED to prevent unnecessary fetches
      if (event === "TOKEN_REFRESHED") return;
      if (cancelled) return;

      if (session?.user) {
        setLoading(true);
        await fetchProgress(session.user.id, moduleId);
      } else {
        const fallbackUserId = await resolveUserIdFromClientSession("useProgress");
        if (fallbackUserId) {
          setLoading(true);
          await fetchProgress(fallbackUserId, moduleId);
        } else {
          setLessonProgress({});
          setModuleProgress(null);
          setLoading(false);
        }
      }
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, [moduleId, fetchProgress]);

  return {
    lessonProgress,
    moduleProgress,
    loading,
    error,
    refresh: async () => {
      const resolvedUserId = await resolveUserIdFromClientSession("useProgress");
      if (resolvedUserId) {
        await fetchProgress(resolvedUserId, moduleId);
      }
    },
  };
}

/**
 * Hook for fetching all user progress across all modules
 *
 * IMPORTANT: Computes progress using ACTUAL module content (from TypeScript),
 * not just lesson_progress rows. This ensures:
 * - totalLessons reflects the true module size
 * - percentComplete is accurate even if user only started 1 of 28 lessons
 * - Modules show as 'in_progress' correctly when any lesson is started
 *
 * AUTH HANDLING: This hook NO LONGER does independent auth checking.
 * Pass userId from useUser() hook to eliminate race conditions.
 *
 * @param userId - The user ID from useUser() hook. If not provided, returns empty progress.
 */
export function useAllProgress(userId?: string) {
  const [allModuleProgress, setAllModuleProgress] = useState<ModuleProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllProgress = useCallback(async (targetUserId: string) => {
    try {
      const lessonProgressRows = await fetchLessonProgressRows(targetUserId, "useAllProgress");

      // Create a map of lesson_id -> progress row for quick lookup
      const progressMap = new Map<string, LessonProgressRow>();
      for (const row of lessonProgressRows || []) {
        progressMap.set(row.lesson_id, row);
      }

      const getLessonActivityAt = (row: LessonProgressRow): string | null => {
        const candidates = [row.completed_at, row.started_at].filter(
          (value): value is string => typeof value === "string" && value.length > 0,
        );

        if (candidates.length === 0) return null;

        let latest = candidates[0];
        let latestTs = Date.parse(latest);

        for (let i = 1; i < candidates.length; i++) {
          const candidateTs = Date.parse(candidates[i]);
          if (!Number.isNaN(candidateTs) && (Number.isNaN(latestTs) || candidateTs > latestTs)) {
            latest = candidates[i];
            latestTs = candidateTs;
          }
        }

        return latest;
      };

      const isStartedButUnlocked = (row: LessonProgressRow): boolean => {
        if (row.status !== "unlocked") return false;
        return getLessonActivityAt(row) !== null;
      };

      // Compute progress for ALL modules (using actual module content)
      const computed: ModuleProgress[] = [];
      const allContentLessonIds = new Set<string>();

      for (const courseModule of modules) {
        for (const lesson of getModuleLessons(courseModule.id)) {
          allContentLessonIds.add(lesson.id);
        }
      }

      if (process.env.NODE_ENV !== "production") {
        const unmatchedLessonRows = (lessonProgressRows || []).filter(
          (row) => !allContentLessonIds.has(row.lesson_id),
        );
        if (unmatchedLessonRows.length > 0) {
          console.warn(
            "[useAllProgress] Found lesson_progress rows with lesson_id not present in current content. Progress may appear missing.",
            {
              unmatchedCount: unmatchedLessonRows.length,
              sample: unmatchedLessonRows.slice(0, 5).map((row) => ({
                module_id: row.module_id,
                lesson_id: row.lesson_id,
                status: row.status,
              })),
            },
          );
        }
      }

      for (const courseModule of modules) {
        // Get ALL lessons in this module from TypeScript content
        const allModuleLessons = getModuleLessons(courseModule.id);
        const totalLessons = allModuleLessons.length;

        if (totalLessons === 0) continue; // Skip empty modules

        // Count completed lessons and check for in-progress
        let completedCount = 0;
        let hasInProgress = false;
        let lastActivityAt: string | null = null;
        let lastActivityTs = Number.NEGATIVE_INFINITY;

        for (const lesson of allModuleLessons) {
          const progress = progressMap.get(lesson.id);
          if (progress?.status === "completed") {
            completedCount++;
          } else if (
            progress?.status === "in_progress" ||
            (progress && isStartedButUnlocked(progress))
          ) {
            hasInProgress = true;
          }

          if (progress) {
            const activityAt = getLessonActivityAt(progress);
            if (activityAt) {
              const activityTs = Date.parse(activityAt);
              if (!Number.isNaN(activityTs) && activityTs > lastActivityTs) {
                lastActivityTs = activityTs;
                lastActivityAt = activityAt;
              }
            }
          }
        }

        // Determine module status
        let status: "not_started" | "in_progress" | "completed" = "not_started";
        if (completedCount === totalLessons && totalLessons > 0) {
          status = "completed";
        } else if (completedCount > 0 || hasInProgress) {
          status = "in_progress";
        }

        // Calculate accurate percentage based on ACTUAL total lessons
        const percentComplete = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

        // Only include modules where user has some progress (started or completed)
        // This avoids showing 0% progress modules as "in_progress"
        if (status !== "not_started") {
          computed.push({
            moduleId: courseModule.id,
            lessonsCompleted: completedCount,
            totalLessons,
            percentComplete,
            status,
            lastActivityAt,
          });
        }
      }

      setAllModuleProgress(computed);
      setError(null);
    } catch (err: unknown) {
      console.error("Error fetching all progress:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch all progress");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Wait for userId to be provided (from useUser hook)
    if (!userId) {
      setLoading(false);
      setAllModuleProgress([]);
      return;
    }

    // User confirmed, fetch progress
    setLoading(true);
    fetchAllProgress(userId);
  }, [userId, fetchAllProgress]);

  return {
    allModuleProgress,
    loading,
    error,
    refresh: async () => {
      if (userId) {
        await fetchAllProgress(userId);
      }
    },
  };
}
