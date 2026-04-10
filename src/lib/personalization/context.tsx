"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { flushSync } from "react-dom";

import { saveOnboardingSessionToDatabase } from "@/app/onboarding/actions";
import {
  buildOnboardingSessionSnapshotV1,
  isCompleteOnboardingAnswers,
  mergeOnboardingAnswersLastWins,
} from "@/lib/personalization/onboarding-db";
import {
  runPersonalizationWithAudit,
  type PersonalizationAudit,
  type PersonalizationResult,
} from "./algorithm";
import { ONBOARDING_QUESTIONS } from "./questions";

/** Browser storage key for anonymous-first onboarding (answers + personalization result). */
export const ONBOARDING_SESSION_STORAGE_KEY = "onboarding_session_v1";

/** Set on sessionStorage and localStorage after a successful sync to `onboarding_sessions`. */
export const ONBOARDING_PERSISTED_V1_KEY = "onboarding_persisted_v1";

/**
 * True when onboarding was already written to Supabase (survives reload; checked in both storages).
 */
export function isOnboardingPersistedV1(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return (
      sessionStorage.getItem(ONBOARDING_PERSISTED_V1_KEY) === "1" ||
      localStorage.getItem(ONBOARDING_PERSISTED_V1_KEY) === "1"
    );
  } catch {
    return false;
  }
}

export function markOnboardingPersistedV1(): void {
  try {
    if (typeof window === "undefined") return;
    sessionStorage.setItem(ONBOARDING_PERSISTED_V1_KEY, "1");
    localStorage.setItem(ONBOARDING_PERSISTED_V1_KEY, "1");
  } catch {
    /* ignore */
  }
}

function writeOnboardingDualStorage(json: string): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(ONBOARDING_SESSION_STORAGE_KEY, json);
    localStorage.setItem(ONBOARDING_SESSION_STORAGE_KEY, json);
  } catch {
    /* ignore quota / private mode */
  }
}

interface OnboardingAnswer {
  questionId: string;
  value: string;
}

function parseOnboardingStorageSlot(raw: string | null): {
  answers: OnboardingAnswer[];
  currentQuestionIndex: number;
  result: PersonalizationResult | null;
  audit: PersonalizationAudit | null;
} | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as {
      answers?: OnboardingAnswer[];
      currentQuestionIndex?: number;
      result?: PersonalizationResult | null;
      audit?: PersonalizationAudit;
    };
    if (!parsed || !Array.isArray(parsed.answers)) return null;
    const idx =
      typeof parsed.currentQuestionIndex === "number" && Number.isFinite(parsed.currentQuestionIndex)
        ? Math.max(0, Math.min(parsed.currentQuestionIndex, ONBOARDING_QUESTIONS.length - 1))
        : 0;
    return {
      answers: parsed.answers,
      currentQuestionIndex: parsed.result ? 0 : idx,
      result: parsed.result ?? null,
      audit: parsed.audit?.version === 1 ? parsed.audit : null,
    };
  } catch {
    return null;
  }
}

interface OnboardingContextType {
  answers: OnboardingAnswer[];
  currentQuestionIndex: number;
  result: PersonalizationResult | null;
  /** Full audit + override scoring trace; null before completion or when absent. */
  audit: PersonalizationAudit | null;
  setAnswer: (questionId: string, value: string) => void;
  /** Atomically merge one answer and return the full snapshot (for finalize + navigation). */
  upsertAnswer: (questionId: string, value: string) => OnboardingAnswer[];
  nextQuestion: () => void;
  prevQuestion: () => void;
  goToQuestion: (index: number) => void;
  submitOnboarding: () => PersonalizationResult;
  /** Use on the last question so the final answer is included before navigation */
  finalizeOnboarding: (effectiveAnswers: OnboardingAnswer[]) => PersonalizationResult;
  saveToSupabase: (userId: string) => Promise<{ ok: boolean; error?: string }>;
  resetOnboarding: () => void;
  isComplete: boolean;
  isSaving: boolean;
  lastSaveError: string | null;
  hasSessionRestored: boolean;
}

const OnboardingContext = createContext<OnboardingContextType | null>(null);

function buildResponsesForAlgorithm(answers: OnboardingAnswer[]) {
  return answers.map((a) => {
    const question = ONBOARDING_QUESTIONS.find((q) => q.id === a.questionId);
    return {
      questionId: a.questionId,
      dimensionId: question?.dimension ?? "",
      value: a.value,
    };
  });
}

/**
 * Read merged onboarding slot from sessionStorage and localStorage (local survives new tabs).
 */
function readSessionSlotFromStorage(): {
  answers: OnboardingAnswer[];
  currentQuestionIndex: number;
  result: PersonalizationResult | null;
  audit: PersonalizationAudit | null;
} | null {
  if (typeof window === "undefined") return null;
  const session = parseOnboardingStorageSlot(
    sessionStorage.getItem(ONBOARDING_SESSION_STORAGE_KEY),
  );
  const local = parseOnboardingStorageSlot(
    localStorage.getItem(ONBOARDING_SESSION_STORAGE_KEY),
  );
  if (!session && !local) return null;
  const mergedAnswers = mergeOnboardingAnswersLastWins(session?.answers ?? [], local?.answers ?? []);
  const result = session?.result ?? local?.result ?? null;
  const audit = session?.audit ?? local?.audit ?? null;
  const currentQuestionIndex = result
    ? 0
    : Math.max(session?.currentQuestionIndex ?? 0, local?.currentQuestionIndex ?? 0);
  return { answers: mergedAnswers, currentQuestionIndex, result, audit };
}

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<OnboardingAnswer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState<PersonalizationResult | null>(null);
  const [audit, setAudit] = useState<PersonalizationAudit | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaveError, setLastSaveError] = useState<string | null>(null);
  const [hasSessionRestored, setHasSessionRestored] = useState(false);

  useEffect(() => {
    const slot = readSessionSlotFromStorage();
    if (slot) {
      setAnswers(slot.answers);
      setCurrentQuestionIndex(slot.currentQuestionIndex);
      if (slot.result) {
        setResult(slot.result);
      }
      if (slot.audit) {
        setAudit(slot.audit);
      }
    }
    setHasSessionRestored(true);
  }, []);

  useEffect(() => {
    if (!hasSessionRestored || typeof window === "undefined") return;
    try {
      let effectiveAnswers = answers;
      if (result && effectiveAnswers.length < ONBOARDING_QUESTIONS.length) {
        const prev = readSessionSlotFromStorage();
        if (
          prev &&
          Array.isArray(prev.answers) &&
          prev.answers.length > effectiveAnswers.length
        ) {
          effectiveAnswers = prev.answers;
        }
      }
      if (result && effectiveAnswers.length === 0) {
        return;
      }
      const payload = result
        ? {
            result,
            audit: audit ?? undefined,
            answers: effectiveAnswers,
            currentQuestionIndex: 0,
          }
        : {
            result: null as PersonalizationResult | null,
            answers: effectiveAnswers,
            currentQuestionIndex,
          };
      writeOnboardingDualStorage(JSON.stringify(payload));
    } catch {
      /* quota / private mode */
    }
  }, [answers, currentQuestionIndex, result, hasSessionRestored, audit]);

  const setAnswer = useCallback((questionId: string, value: string) => {
    setAnswers((prev) => {
      const existing = prev.findIndex((a) => a.questionId === questionId);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = { questionId, value };
        return updated;
      }
      return [...prev, { questionId, value }];
    });
  }, []);

  const upsertAnswer = useCallback((questionId: string, value: string): OnboardingAnswer[] => {
    let snapshot: OnboardingAnswer[] = [];
    flushSync(() => {
      setAnswers((prev) => {
        snapshot = prev.filter((a) => a.questionId !== questionId).concat({ questionId, value });
        return snapshot;
      });
    });
    return snapshot;
  }, []);

  const nextQuestion = useCallback(() => {
    setCurrentQuestionIndex((prev) => prev + 1);
  }, []);

  const prevQuestion = useCallback(() => {
    setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const goToQuestion = useCallback((index: number) => {
    setCurrentQuestionIndex(index);
  }, []);

  const persistSession = useCallback(
    (
      personalizationResult: PersonalizationResult,
      snapshot: OnboardingAnswer[],
      auditSnapshot: PersonalizationAudit,
    ) => {
      setResult(personalizationResult);
      setAudit(auditSnapshot);
      setAnswers(snapshot);
      try {
        if (typeof window !== "undefined") {
          writeOnboardingDualStorage(
            JSON.stringify({
              result: personalizationResult,
              audit: auditSnapshot,
              answers: snapshot,
              currentQuestionIndex: 0,
            }),
          );
          sessionStorage.removeItem(ONBOARDING_PERSISTED_V1_KEY);
          localStorage.removeItem(ONBOARDING_PERSISTED_V1_KEY);
        }
      } catch {
        /* ignore quota / private mode */
      }
    },
    [],
  );

  const submitOnboarding = useCallback(() => {
    const responses = buildResponsesForAlgorithm(answers);
    const { result: personalizationResult, audit: auditSnapshot } =
      runPersonalizationWithAudit(responses);
    persistSession(personalizationResult, answers, auditSnapshot);
    return personalizationResult;
  }, [answers, persistSession]);

  const finalizeOnboarding = useCallback(
    (effectiveAnswers: OnboardingAnswer[]) => {
      const responses = buildResponsesForAlgorithm(effectiveAnswers);
      const { result: personalizationResult, audit: auditSnapshot } =
        runPersonalizationWithAudit(responses);
      persistSession(personalizationResult, effectiveAnswers, auditSnapshot);
      return personalizationResult;
    },
    [persistSession],
  );

  const saveToSupabase = useCallback(async (userId: string) => {
    void userId;
    const stored = readStoredOnboardingSession();
    // Storage may be [] while React still has full answers — merge with React last so it wins.
    const snapshotAnswers = mergeOnboardingAnswersLastWins(stored?.answers ?? [], answers);
    const snapshotResult = stored?.result ?? result;
    const snapshotAudit = audit ?? stored?.audit ?? null;
    if (!snapshotResult) {
      return { ok: false, error: "no_result" };
    }
    if (!isCompleteOnboardingAnswers(snapshotAnswers)) {
      return { ok: false, error: "incomplete_onboarding_answers" };
    }

    setIsSaving(true);
    setLastSaveError(null);
    try {
      const saveResult = await saveOnboardingSessionToDatabase({
        result: snapshotResult,
        sessionSnapshot: buildOnboardingSessionSnapshotV1(
          snapshotAnswers,
          snapshotResult,
          stored?.currentQuestionIndex,
          snapshotAudit ?? undefined,
        ),
      });
      if (!saveResult.ok) {
        console.error("Failed to save onboarding:", saveResult.error);
        setLastSaveError(saveResult.error ?? "save_failed");
        return saveResult;
      }
      markOnboardingPersistedV1();
      return { ok: true };
    } catch (error) {
      console.error("Failed to save onboarding to Supabase:", error);
      const msg = error instanceof Error ? error.message : "save_failed";
      setLastSaveError(msg);
      return { ok: false, error: msg };
    } finally {
      setIsSaving(false);
    }
  }, [answers, result, audit]);

  const resetOnboarding = useCallback(() => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setResult(null);
    setAudit(null);
    setLastSaveError(null);
    try {
      if (typeof window !== "undefined") {
        sessionStorage.removeItem(ONBOARDING_SESSION_STORAGE_KEY);
        localStorage.removeItem(ONBOARDING_SESSION_STORAGE_KEY);
        sessionStorage.removeItem(ONBOARDING_PERSISTED_V1_KEY);
        localStorage.removeItem(ONBOARDING_PERSISTED_V1_KEY);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const allQuestionsAnswered =
    ONBOARDING_QUESTIONS.length > 0 && isCompleteOnboardingAnswers(answers);

  const isComplete = allQuestionsAnswered && result !== null;

  return (
    <OnboardingContext.Provider
      value={{
        answers,
        currentQuestionIndex,
        result,
        audit,
        setAnswer,
        upsertAnswer,
        nextQuestion,
        prevQuestion,
        goToQuestion,
        submitOnboarding,
        finalizeOnboarding,
        saveToSupabase,
        resetOnboarding,
        isComplete,
        isSaving,
        lastSaveError,
        hasSessionRestored,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
}

interface StoredOnboardingSession {
  result: PersonalizationResult | null;
  answers: OnboardingAnswer[];
  audit: PersonalizationAudit | null;
  currentQuestionIndex?: number;
}

export function readStoredOnboardingSession(): StoredOnboardingSession | null {
  const slot = readSessionSlotFromStorage();
  if (!slot) return null;
  return {
    result: slot.result,
    answers: slot.answers,
    audit: slot.audit,
    currentQuestionIndex: slot.currentQuestionIndex,
  };
}

/** Reads the stored onboarding result when only the result payload is needed. */
export function readStoredOnboardingResult(): PersonalizationResult | null {
  return readStoredOnboardingSession()?.result ?? null;
}
