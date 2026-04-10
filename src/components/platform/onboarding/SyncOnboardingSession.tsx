"use client";

/**
 * After signup, persist onboarding from browser storage (session + local mirror).
 */

import { useEffect } from "react";
import {
  saveOnboardingSessionToDatabase,
  submitRecommendationRelevanceRating,
} from "@/app/onboarding/actions";
import {
  isOnboardingPersistedV1,
  markOnboardingPersistedV1,
  readStoredOnboardingSession,
} from "@/lib/personalization/context";
import {
  buildOnboardingSessionSnapshotV1,
  isCompleteOnboardingAnswers,
  mergeOnboardingAnswersLastWins,
} from "@/lib/personalization/onboarding-db";

const RELEVANCE_KEY = "onboarding_relevance_rating_v1";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Single-flight sync across Strict Mode double-mounts and concurrent layout renders. */
let onboardingSyncPromise: Promise<void> | null = null;

function runOnboardingSyncOnce(): Promise<void> {
  if (typeof window !== "undefined" && isOnboardingPersistedV1()) {
    return Promise.resolve();
  }
  if (onboardingSyncPromise) {
    return onboardingSyncPromise;
  }
  onboardingSyncPromise = (async () => {
    try {
      for (let attempt = 0; attempt < 15; attempt++) {
        if (typeof window !== "undefined" && isOnboardingPersistedV1()) {
          return;
        }
        const stored = readStoredOnboardingSession();
        const personalizationResult = stored?.result;
        if (!stored || !personalizationResult) {
          await sleep(200);
          continue;
        }
        const mergedAnswers = mergeOnboardingAnswersLastWins(stored.answers ?? []);
        if (!isCompleteOnboardingAnswers(mergedAnswers)) {
          await sleep(200);
          continue;
        }

        const saveResult = await saveOnboardingSessionToDatabase({
          result: personalizationResult,
          sessionSnapshot: buildOnboardingSessionSnapshotV1(
            mergedAnswers,
            personalizationResult,
            stored.currentQuestionIndex,
            stored.audit ?? undefined,
          ),
        });

        if (saveResult.ok) {
          markOnboardingPersistedV1();

          const raw = sessionStorage.getItem(RELEVANCE_KEY);
          if (raw) {
            try {
              const parsed = JSON.parse(raw) as {
                rating: number;
                recommendedModuleId: string;
              };
              await submitRecommendationRelevanceRating({
                rating: parsed.rating,
                recommendedModuleId: parsed.recommendedModuleId,
              });
            } catch {
              /* ignore */
            } finally {
              sessionStorage.removeItem(RELEVANCE_KEY);
            }
          }
          return;
        }

        if (
          saveResult.error === "not_authenticated" ||
          saveResult.error === "incomplete_onboarding_answers"
        ) {
          await sleep(300);
          continue;
        }

        console.error("[SyncOnboardingSession] save failed", saveResult.error);
        return;
      }
    } catch (err) {
      console.error("[SyncOnboardingSession] unexpected error", err);
    } finally {
      onboardingSyncPromise = null;
    }
  })();
  return onboardingSyncPromise;
}

export function SyncOnboardingSession(): null {
  useEffect(() => {
    if (typeof window === "undefined") return;
    void runOnboardingSyncOnce();
  }, []);

  return null;
}
