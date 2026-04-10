"use client";

/**
 * OnboardingQuizClient
 *
 * Anonymous-first onboarding assessment using the
 * shared quiz shell and option cards.
 */

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  OnboardingAssessmentOptionCard,
  OnboardingAssessmentShell,
} from "@/components/platform/onboarding-ui";
import { useOnboarding } from "@/lib/personalization/context";
import { getFirstIncompleteOnboardingQuestionIndex } from "@/lib/personalization/onboarding-db";
import { ONBOARDING_QUESTIONS, type Dimension } from "@/lib/personalization/questions";
import { ONBOARDING_ASSESSMENT_PROGRESS_SECTIONS } from "@/lib/personalization/onboarding-progress-sections";

const DIMENSION_SECTION_ORDER: Record<Dimension, number> = {
  professional_context: 1,
  ai_experience: 2,
  motivation_pain: 3,
  confidence_readiness: 4,
  time_goals: 5,
};

export function OnboardingQuizClient() {
  const router = useRouter();
  const {
    answers,
    currentQuestionIndex,
    result: onboardingResult,
    upsertAnswer,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    finalizeOnboarding,
    hasSessionRestored,
  } = useOnboarding();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const selectionLockRef = useRef(false);

  useEffect(() => {
    if (!hasSessionRestored || !onboardingResult) return;
    router.replace("/onboarding/results");
  }, [hasSessionRestored, onboardingResult, router]);

  const question = ONBOARDING_QUESTIONS[currentQuestionIndex];
  const progressPercent = useMemo(
    () =>
      Math.min(
        100,
        Math.round(((currentQuestionIndex + 1) / ONBOARDING_QUESTIONS.length) * 100),
      ),
    [currentQuestionIndex],
  );

  const currentSectionOrder = question ? DIMENSION_SECTION_ORDER[question.dimension] : 1;

  const currentAnswer = answers.find((a) => a.questionId === question?.id)?.value;

  const useCompactGrid = (question?.options.length ?? 0) >= 6;

  const handleSelect = useCallback(
    (value: string) => {
      if (!question || selectionLockRef.current || isTransitioning) return;
      selectionLockRef.current = true;
      const qId = question.id;
      const merged = upsertAnswer(qId, value);
      setIsTransitioning(true);
      window.setTimeout(() => {
        const firstIncompleteIndex = getFirstIncompleteOnboardingQuestionIndex(merged);

        if (currentQuestionIndex < ONBOARDING_QUESTIONS.length - 1) {
          nextQuestion();
        } else if (firstIncompleteIndex === null) {
          finalizeOnboarding(merged);
          router.push("/onboarding/results");
        } else {
          goToQuestion(firstIncompleteIndex);
        }
        selectionLockRef.current = false;
        setIsTransitioning(false);
      }, 220);
    },
    [
      currentQuestionIndex,
      finalizeOnboarding,
      goToQuestion,
      isTransitioning,
      nextQuestion,
      question,
      router,
      upsertAnswer,
    ],
  );

  if (!hasSessionRestored || !question) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#F4F6FA]">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#007AFF] border-t-transparent" />
      </div>
    );
  }

  return (
    <OnboardingAssessmentShell
      action={null}
      backgroundClassName="bg-[#F4F6FA]"
      currentSectionOrder={currentSectionOrder}
      onBack={() => prevQuestion()}
      progressPercent={progressPercent}
      sections={ONBOARDING_ASSESSMENT_PROGRESS_SECTIONS}
      showBackButton={currentQuestionIndex > 0}
      showProgress
    >
      <div
        className={
          isTransitioning
            ? "translate-y-3 opacity-0 transition-all duration-200"
            : "translate-y-0 opacity-100 transition-all duration-200"
        }
      >
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#007AFF]">
              {question.dimension.replace("_", " ")}
            </p>
            <h1 className="text-[27px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#111827]">
              {question.text}
            </h1>
          </div>

          <div className={useCompactGrid ? "grid grid-cols-2 gap-3" : "space-y-3"}>
            {question.options.map((option) => (
              <OnboardingAssessmentOptionCard
                compact={useCompactGrid}
                disabled={isTransitioning}
                key={option.value}
                label={option.label}
                onClick={() => handleSelect(option.value)}
                selected={currentAnswer === option.value}
                selectionMode="single"
              />
            ))}
          </div>
        </div>
      </div>
    </OnboardingAssessmentShell>
  );
}
