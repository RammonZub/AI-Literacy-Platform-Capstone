"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  getModuleDescription,
  getModuleName,
  type PersonalizationResult,
  type ModuleId,
} from "@/lib/personalization/algorithm";
import {
  isOnboardingPersistedV1,
  readStoredOnboardingSession,
  useOnboarding,
} from "@/lib/personalization/context";
import { submitRecommendationRelevanceRating } from "@/app/onboarding/actions";
import { isCompleteOnboardingAnswers } from "@/lib/personalization/onboarding-db";
import { createClient } from "@/lib/supabase/client";

const RELEVANCE_KEY = "onboarding_relevance_rating_v1";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function OnboardingResultsPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    answers: contextAnswers,
    result: contextResult,
    resetOnboarding,
    saveToSupabase,
    isSaving,
    lastSaveError,
    hasSessionRestored,
  } = useOnboarding();

  const [authUserId, setAuthUserId] = useState<string | null | undefined>(undefined);
  const [relevanceSubmitted, setRelevanceSubmitted] = useState(false);
  const [relevanceSaving, setRelevanceSaving] = useState(false);
  const saveOnceRef = useRef(false);

  const parsedFromUrl = useMemo((): PersonalizationResult | null => {
    const dataParam = searchParams.get("data");
    if (!dataParam) return null;
    try {
      return JSON.parse(decodeURIComponent(dataParam)) as PersonalizationResult;
    } catch {
      return null;
    }
  }, [searchParams]);

  const [resolvedResult, setResolvedResult] = useState<
    PersonalizationResult | null | undefined
  >(undefined);

  useEffect(() => {
    if (!hasSessionRestored) return;
    const stored = readStoredOnboardingSession();
    const hasCompleteContextAnswers =
      contextAnswers.length > 0 && isCompleteOnboardingAnswers(contextAnswers);
    const hasCompleteStoredAnswers = isCompleteOnboardingAnswers(stored?.answers ?? []);
    const r = hasCompleteContextAnswers
      ? contextResult
      : hasCompleteStoredAnswers
        ? stored?.result ?? null
        : parsedFromUrl ?? null;
    setResolvedResult(r);
  }, [contextAnswers, contextResult, hasSessionRestored, parsedFromUrl]);

  useEffect(() => {
    if (!hasSessionRestored || resolvedResult === undefined) return;
    if (resolvedResult === null) {
      resetOnboarding();
      router.replace("/onboarding");
    }
  }, [hasSessionRestored, resetOnboarding, resolvedResult, router]);

  const result =
    resolvedResult !== undefined && resolvedResult !== null ? resolvedResult : null;

  const recommendedFirstModule: ModuleId | null = result?.recommendedPath?.[0] ?? null;

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setAuthUserId(user?.id ?? null);
    };
    void load();
  }, []);

  useEffect(() => {
    if (!result || authUserId === undefined || !authUserId) return;
    if (typeof window !== "undefined" && isOnboardingPersistedV1()) return;
    if (saveOnceRef.current) return;
    saveOnceRef.current = true;

    const persist = async () => {
      let saved = false;
      try {
        for (let attempt = 0; attempt < 12; attempt++) {
          const saveRes = await saveToSupabase(authUserId);
          if (saveRes.ok) {
            saved = true;
            break;
          }
          if (
            saveRes.error === "not_authenticated" ||
            saveRes.error === "incomplete_onboarding_answers"
          ) {
            await sleep(300);
            continue;
          }
          return;
        }
      } catch {
        return;
      } finally {
        if (!saved) {
          saveOnceRef.current = false;
        }
      }

      const raw = sessionStorage.getItem(RELEVANCE_KEY);
      if (raw && recommendedFirstModule) {
        try {
          const parsed = JSON.parse(raw) as { rating: number; recommendedModuleId: string };
          await submitRecommendationRelevanceRating({
            rating: parsed.rating,
            recommendedModuleId: parsed.recommendedModuleId,
          });
          sessionStorage.removeItem(RELEVANCE_KEY);
          setRelevanceSubmitted(true);
        } catch {
          /* ignore */
        }
      }
    };

    void persist();
  }, [result, authUserId, saveToSupabase, recommendedFirstModule]);

  const persistRelevanceLocally = useCallback(
    (rating: number) => {
      if (!recommendedFirstModule) return;
      try {
        sessionStorage.setItem(
          RELEVANCE_KEY,
          JSON.stringify({ rating, recommendedModuleId: recommendedFirstModule }),
        );
      } catch {
        /* ignore */
      }
    },
    [recommendedFirstModule],
  );

  const handleRelevanceSelect = useCallback(
    async (rating: number) => {
      if (!recommendedFirstModule || relevanceSubmitted || relevanceSaving) return;
      setRelevanceSaving(true);
      try {
        if (authUserId) {
          const res = await submitRecommendationRelevanceRating({
            rating,
            recommendedModuleId: recommendedFirstModule,
          });
          if (res.ok) {
            setRelevanceSubmitted(true);
            sessionStorage.removeItem(RELEVANCE_KEY);
          }
        } else {
          persistRelevanceLocally(rating);
          setRelevanceSubmitted(true);
        }
      } finally {
        setRelevanceSaving(false);
      }
    },
    [
      authUserId,
      recommendedFirstModule,
      relevanceSubmitted,
      relevanceSaving,
      persistRelevanceLocally,
    ],
  );

  if (!hasSessionRestored || resolvedResult === undefined || !result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  const getPathLengthLabel = (length: number) => {
    if (length === 3) return "Short sequence";
    if (length === 5) return "Medium sequence";
    return "Longer sequence";
  };

  const likertLabels = [
    { value: 1, title: "Strongly disagree" },
    { value: 2, title: "Disagree" },
    { value: 3, title: "Neutral" },
    { value: 4, title: "Agree" },
    { value: 5, title: "Strongly agree" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Your recommended module sequence</h1>
          <p className="text-lg text-slate-600">
            Derived from your assessment responses and the personalization rules in the study.
          </p>
          {isSaving ? (
            <p className="text-xs text-slate-400 mt-2">Saving your results…</p>
          ) : null}
          {lastSaveError ? (
            <p className="text-xs text-red-600 mt-2" role="alert">
              Could not save to your account ({lastSaveError}). Try refreshing or contact support.
            </p>
          ) : null}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-slate-900">Assessment summary</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-sm text-slate-500">Professional context</div>
              <div className="font-medium text-slate-900 capitalize">{result.customerProfile}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Stated AI experience</div>
              <div className="font-medium text-slate-900 capitalize">{result.aiExperience}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">
                Learner segment
              </div>
              <div className="font-medium text-slate-900 capitalize">
                {result.persona.replace(/_/g, " ")}
              </div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Path length (modules)</div>
              <div className="font-medium text-slate-900">
                {result.pathLength} modules ({getPathLengthLabel(result.pathLength)})
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Recommended modules</h2>
          <div className="space-y-4">
            {result.recommendedPath.map((moduleId, index) => (
              <div
                key={moduleId}
                className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1">{getModuleName(moduleId)}</h3>
                  <p className="text-sm text-slate-600">{getModuleDescription(moduleId)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {recommendedFirstModule && !relevanceSubmitted ? (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
            <p className="text-sm font-medium text-slate-900 mb-1">
              Quick check (recommendation relevance)
            </p>
            <p className="text-sm text-slate-600 mb-4">
              The recommended starting module feels relevant to my professional situation.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {likertLabels.map(({ value, title }) => (
                <button
                  key={value}
                  type="button"
                  title={title}
                  disabled={relevanceSaving}
                  onClick={() => void handleRelevanceSelect(value)}
                  className="min-w-[2.5rem] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 disabled:opacity-50"
                >
                  {value}
                </button>
              ))}
            </div>
            {!authUserId ? (
              <p className="text-xs text-slate-500 mt-3 text-center">
                Signed out: we&apos;ll send this rating when you create an account and open the
                platform.
              </p>
            ) : null}
          </div>
        ) : null}

        {relevanceSubmitted && !authUserId ? (
          <p className="text-center text-sm text-slate-600 mb-6">
            Thanks — create an account so we can save your path and rating.
          </p>
        ) : null}

        <div className="text-center space-y-4">
          {authUserId ? (
            <button
              type="button"
              onClick={() => router.push("/platform")}
              className="w-full max-w-md px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >
              Continue to learning platform
            </button>
          ) : (
            <button
              type="button"
              onClick={() =>
                router.push(
                  `/signup?redirect=${encodeURIComponent("/platform")}`,
                )
              }
              className="w-full max-w-md px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >
              Create account to continue
            </button>
          )}
          <button
            type="button"
            onClick={() => router.push("/")}
            className="block w-full text-sm text-slate-400 hover:text-slate-600"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
