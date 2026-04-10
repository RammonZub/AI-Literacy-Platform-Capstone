/**
 * Dashboard recommendation hook
 *
 * PURPOSE:
 * Fetch the ordered personalized module list used by the learner dashboard.
 *
 * RESPONSIBILITY:
 * - Call the server route that merges onboarding personalization with progress
 * - Normalize the API payload into a stable client-side shape
 * - Provide resilient fallback state when auth cookies are still settling
 *
 * DESIGN CHOICE:
 * This remains a small client hook because the dashboard already depends on
 * client-side user state. Keeping the fetch logic here avoids duplicating retry
 * and timeout behavior in the page component.
 */

"use client";

import { useEffect, useState } from "react";

const JOURNEY_FETCH_TIMEOUT_MS = 6000;

export type HomeJourneyRecommendationStatus = "not_started" | "in_progress" | "completed";

export interface HomeJourneyRecommendationData {
  moduleId: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  status: HomeJourneyRecommendationStatus;
}

export interface HomeJourneySectionData {
  title: string;
  subtitle: string;
  recommendations: HomeJourneyRecommendationData[];
}

function normalizeRecommendations(value: unknown): HomeJourneyRecommendationData[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((entry) => {
    if (!entry || typeof entry !== "object") {
      return [];
    }

    const candidate = entry as Partial<HomeJourneyRecommendationData>;
    if (
      typeof candidate.moduleId !== "string" ||
      typeof candidate.progress !== "number" ||
      typeof candidate.completedLessons !== "number" ||
      typeof candidate.totalLessons !== "number"
    ) {
      return [];
    }

    const normalizedStatus: HomeJourneyRecommendationStatus =
      candidate.status === "completed" || candidate.status === "in_progress"
        ? candidate.status
        : "not_started";

    return [
      {
        moduleId: candidate.moduleId,
        progress: candidate.progress,
        completedLessons: candidate.completedLessons,
        totalLessons: candidate.totalLessons,
        status: normalizedStatus,
      },
    ];
  });
}

/**
 * Fetch the personalized dashboard data set once on mount.
 */
export function useHomeJourneySection() {
  const [data, setData] = useState<HomeJourneySectionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async (attempt: number) => {
      setLoading(true);
      setError(null);

      try {
        const controller = new AbortController();
        const timeoutId = window.setTimeout(() => controller.abort(), JOURNEY_FETCH_TIMEOUT_MS);

        const response = await fetch("/api/platform/home-journey", {
          method: "GET",
          cache: "no-store",
          credentials: "include",
          signal: controller.signal,
        }).finally(() => window.clearTimeout(timeoutId));

        if (!response.ok) {
          if (response.status === 401) {
            if (attempt < 2) {
              window.setTimeout(() => {
                void load(attempt + 1);
              }, 350);
              return;
            }

            if (!cancelled) {
              setData({
                title: "Recommended modules",
                subtitle: "Your personalized dashboard will appear after you finish onboarding.",
                recommendations: [],
              });
            }

            return;
          }

          const payload = await response.json().catch(() => null);
          throw new Error(payload?.error || `Failed to load journey section (${response.status})`);
        }

        const payload = await response.json();
        if (!cancelled) {
          setData({
            title:
              typeof payload?.title === "string" ? payload.title : "Recommended modules",
            subtitle:
              typeof payload?.subtitle === "string"
                ? payload.subtitle
                : "Ordered from your onboarding assessment.",
            recommendations: normalizeRecommendations(payload?.recommendations),
          });
        }
      } catch (err) {
        console.error("[useHomeJourneySection] Failed to load journey data:", err);
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load journey section");
          setData({
            title: "Recommended modules",
            subtitle: "We could not load your personalized module path right now.",
            recommendations: [],
          });
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    void load(0);

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error };
}
