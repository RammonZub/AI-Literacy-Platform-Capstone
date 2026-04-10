/**
 * Server-safe onboarding shapes for Supabase (`onboarding_sessions`).
 * Used by server actions and client sync; avoids importing client-only modules.
 */

import type { PersonalizationAudit, PersonalizationResult } from "./algorithm";
import { ONBOARDING_QUESTIONS } from "./questions";

export const ONBOARDING_QUESTION_COUNT = ONBOARDING_QUESTIONS.length;

export interface OnboardingAnswerInput {
  questionId: string;
  value: string;
}

export interface OnboardingResponseRow {
  questionId: string;
  dimensionId: string;
  value: string;
}

/**
 * Map raw answers to rows stored in `responses` (includes dimension for analytics).
 * Row order follows `ONBOARDING_QUESTIONS` so JSONB is stable and complete sets align with the assessment.
 */
export function buildNormalizedOnboardingResponses(
  answers: OnboardingAnswerInput[],
): OnboardingResponseRow[] {
  const byId = new Map<string, OnboardingAnswerInput>();
  for (const a of answers) {
    byId.set(a.questionId, a);
  }
  return ONBOARDING_QUESTIONS.map((q) => {
    const a = byId.get(q.id);
    return {
      questionId: q.id,
      dimensionId: q.dimension,
      value: a?.value ?? "",
    };
  });
}

/** Snapshot stored in `session_snapshot` JSONB (versioned). */
export interface OnboardingSessionSnapshotV1 {
  v: 1;
  answers: OnboardingAnswerInput[];
  result: PersonalizationResult;
  /** Scoring trace from `runPersonalizationWithAudit` when present. */
  audit?: PersonalizationAudit;
  currentQuestionIndex?: number;
}

/**
 * True when every onboarding question has a non-empty answer value.
 */
export function isCompleteOnboardingAnswers(answers: OnboardingAnswerInput[]): boolean {
  return ONBOARDING_QUESTIONS.every((q) => {
    const a = answers.find((x) => x.questionId === q.id);
    return a != null && String(a.value).trim().length > 0;
  });
}

/**
 * Return the first unanswered onboarding question index, or null when the
 * assessment snapshot is complete.
 */
export function getFirstIncompleteOnboardingQuestionIndex(
  answers: OnboardingAnswerInput[],
): number | null {
  for (let index = 0; index < ONBOARDING_QUESTIONS.length; index += 1) {
    const questionId = ONBOARDING_QUESTIONS[index].id;
    const answer = answers.find((entry) => entry.questionId === questionId);
    if (!answer || String(answer.value).trim().length === 0) {
      return index;
    }
  }

  return null;
}

/**
 * Merge multiple answer batches; later batches override earlier for the same questionId.
 * Filters invalid rows. Use storage first, then React state so in-memory wins over stale storage.
 */
export function mergeOnboardingAnswersLastWins(
  ...batches: OnboardingAnswerInput[][]
): OnboardingAnswerInput[] {
  const m = new Map<string, OnboardingAnswerInput>();
  for (const batch of batches) {
    if (!Array.isArray(batch)) continue;
    for (const a of batch) {
      if (a?.questionId && typeof a.value === "string") {
        m.set(a.questionId, { questionId: a.questionId, value: a.value });
      }
    }
  }
  return Array.from(m.values());
}

/**
 * Single factory for `session_snapshot` JSONB so sync + results save cannot drift.
 */
export function buildOnboardingSessionSnapshotV1(
  answers: OnboardingAnswerInput[],
  result: PersonalizationResult,
  currentQuestionIndex?: number,
  audit?: PersonalizationAudit,
): OnboardingSessionSnapshotV1 {
  return {
    v: 1,
    answers,
    result,
    ...(audit ? { audit } : {}),
    ...(currentQuestionIndex !== undefined ? { currentQuestionIndex } : {}),
  };
}
