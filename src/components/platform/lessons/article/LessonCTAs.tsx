/**
 * LessonCTAs
 *
 * PURPOSE: Call-to-action section shown after lesson content is fully revealed and completed
 *
 * CONTEXT: Rendered by Lesson.tsx once the user clicks "Continue" through the final content
 * section. The lesson is already marked complete by the time this renders — it fires
 * fire-and-forget via onComplete() before showCTA becomes true.
 *
 * KEY RESPONSIBILITIES:
 * - Show "Knowledge Check" quiz card if lesson has a standalone quiz (lesson.quiz)
 * - Show "Hands-on Practice" challenge card if lesson has a challenge/task
 * - Show primary navigation CTA (Next Lesson or Finish Module)
 * - Provide secondary escape hatch (Back to module)
 *
 * QUIZ vs CHALLENGE CARDS:
 * - Quiz card: blue (#007AFF), links to /quiz route, shows pass/fail state
 * - Challenge card: gold (#E5B05C), links to /task route, shows completed state
 * - Both are OPTIONAL — lesson is already marked complete before this renders
 *
 * TASK DATA SHAPES:
 * - Lessons can define tasks as top-level `lesson.challenge`
 * - Or as inline `actionableTask` sections handled via `hasInlineChallenge`
 */

import Link from "next/link";
import type { LessonChallenge } from "@/types/challenge";
import type { LessonQuiz } from "@/types/quiz";

export interface QuizStatus {
  passed: boolean;
  score?: number;
}

export interface ChallengeStatus {
  completed: boolean;
}

interface LessonCTAsProps {
  /** Module ID for route generation */
  moduleId: string;

  /** Lesson ID for route generation */
  lessonId: string;

  /** Optional standalone quiz (new architecture) — distinct from inline quiz sections */
  quiz?: LessonQuiz;

  /** Optional challenge/task data */
  challenge?: LessonChallenge;

  /** Quiz completion status */
  quizStatus?: QuizStatus | null;

  /** Challenge completion status */
  challengeStatus?: ChallengeStatus | null;

  /** Whether lesson has inline actionableTask sections */
  hasInlineChallenge?: boolean;

  /** Next lesson ID for navigation — null/undefined if this is the last lesson */
  nextLessonId?: string | null;

  /** Callback when user clicks Next Lesson button */
  onNextLessonClick?: () => void;

  /** Callback when user clicks Complete button */
  onCompleteClick?: () => void;
}

export function LessonCTAs({
  moduleId,
  lessonId,
  quiz,
  challenge,
  quizStatus,
  challengeStatus,
  hasInlineChallenge = false,
  nextLessonId,
  onNextLessonClick,
  onCompleteClick,
}: LessonCTAsProps) {
  const hasQuiz = !!quiz;
  const hasChallenge = !!challenge || hasInlineChallenge;

  const quizPassed = quizStatus?.passed ?? false;
  const challengeCompleted = challengeStatus?.completed ?? false;

  const taskUrl = `/platform/module/${moduleId}/lesson/${lessonId}/task`;
  const quizUrl = `/platform/module/${moduleId}/lesson/${lessonId}/quiz`;

  // Quiz details
  const quizTitle = quiz?.title || "Knowledge Check";
  const quizDescription = quiz?.description || "Test your understanding of the concepts covered";
  const quizXpReward = quiz?.xpReward || 25;

  // Challenge details
  const challengeTitle = challenge?.title || "Hands-on Practice";
  const challengePurpose = challenge?.purpose || "Apply what you learned with a practical exercise";
  const challengeXpReward = challenge?.xpReward || 50;
  const challengeLevel = challenge?.level || "Hands-on";
  const challengeSkill = challenge?.skill || "Practical Application";
  const challengeFocus = challenge?.focus || "Real-world Practice";

  return (
    <div className="space-y-5 pt-6 border-t border-[#E8E8EB]">
      {/* ─── QUIZ CARD ─── */}
      {hasQuiz && (
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-[#1A1A1A] flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#007AFF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Knowledge Check
            </h3>
            <p className="text-sm text-[#8E8E93] mt-1">{quizDescription}</p>
          </div>

          <Link
            href={quizUrl}
            className={`
              group
              flex items-center justify-between
              w-full px-5 py-4
              rounded-2xl border-2
              transition-all duration-200
              hover:shadow-lg active:scale-[0.98]
              ${
                quizPassed
                  ? "border-[#7BC4A0] bg-gradient-to-r from-[#7BC4A0]/10 to-[#7BC4A0]/5 hover:shadow-[#7BC4A0]/10"
                  : "border-[#007AFF] bg-gradient-to-r from-[#007AFF]/10 to-[#007AFF]/5 hover:shadow-[#007AFF]/20 hover:border-[#0056CC]"
              }
            `}
          >
            <div className="flex items-center gap-3">
              <div
                className={`
                w-11 h-11 rounded-full flex items-center justify-center
                transition-transform duration-200 group-hover:scale-110
                ${quizPassed ? "bg-[#7BC4A0]/20" : "bg-[#007AFF]/20"}
              `}
              >
                {quizPassed ? (
                  <svg
                    className="w-5 h-5 text-[#5BA387]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-[#007AFF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </div>
              <div className="text-left">
                <div className="font-semibold text-[#1A1A1A] flex items-center gap-2">
                  {quizPassed ? "Quiz Completed" : "Take Quiz"}
                  {!quizPassed && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#007AFF]/10 text-[#007AFF] font-medium">
                      +{quizXpReward} XP
                    </span>
                  )}
                </div>
                <div className="text-sm text-[#8E8E93]">{quizTitle}</div>
              </div>
            </div>
            <div
              className={`flex items-center gap-1 transition-colors ${quizPassed ? "text-[#7BC4A0]" : "text-[#007AFF] group-hover:text-[#0056CC]"}`}
            >
              <span className="text-xs font-medium">{quizPassed ? "Review" : "Tap"}</span>
              <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        </div>
      )}

      {/* ─── CHALLENGE / TASK CARD ─── */}
      {hasChallenge && (
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-[#1A1A1A] flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#E5B05C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Hands-on Practice
            </h3>
            <p className="text-sm text-[#8E8E93] mt-1">{challengePurpose}</p>
          </div>

          {/* 3 Intro Stat Cards */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-2.5 bg-gradient-to-br from-[#007AFF]/5 to-[#007AFF]/10 rounded-xl border border-[#007AFF]/15 text-center">
              <div className="w-7 h-7 rounded-full bg-[#007AFF]/15 flex items-center justify-center mx-auto mb-1.5">
                <svg
                  className="w-3.5 h-3.5 text-[#007AFF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wide">Level</p>
              <p className="text-xs font-semibold text-[#1A1A1A] mt-0.5">{challengeLevel}</p>
            </div>
            <div className="p-2.5 bg-gradient-to-br from-[#E5B05C]/5 to-[#E5B05C]/10 rounded-xl border border-[#E5B05C]/15 text-center">
              <div className="w-7 h-7 rounded-full bg-[#E5B05C]/15 flex items-center justify-center mx-auto mb-1.5">
                <svg
                  className="w-3.5 h-3.5 text-[#E5B05C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wide">Skill</p>
              <p className="text-xs font-semibold text-[#1A1A1A] mt-0.5">{challengeSkill}</p>
            </div>
            <div className="p-2.5 bg-gradient-to-br from-[#7BC4A0]/5 to-[#7BC4A0]/10 rounded-xl border border-[#7BC4A0]/15 text-center">
              <div className="w-7 h-7 rounded-full bg-[#7BC4A0]/15 flex items-center justify-center mx-auto mb-1.5">
                <svg
                  className="w-3.5 h-3.5 text-[#7BC4A0]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wide">Focus</p>
              <p className="text-xs font-semibold text-[#1A1A1A] mt-0.5">{challengeFocus}</p>
            </div>
          </div>

          <Link
            href={taskUrl}
            className={`
              group
              flex items-center justify-between
              w-full px-5 py-4
              rounded-2xl border-2
              transition-all duration-200
              hover:shadow-lg active:scale-[0.98]
              ${
                challengeCompleted
                  ? "border-[#7BC4A0] bg-gradient-to-r from-[#7BC4A0]/10 to-[#7BC4A0]/5 hover:shadow-[#7BC4A0]/10"
                  : "border-[#E5B05C] bg-gradient-to-r from-[#E5B05C]/10 to-[#E5B05C]/5 hover:shadow-[#E5B05C]/20 hover:border-[#C9A050]"
              }
            `}
          >
            <div className="flex items-center gap-3">
              <div
                className={`
                w-11 h-11 rounded-full flex items-center justify-center
                transition-transform duration-200 group-hover:scale-110
                ${challengeCompleted ? "bg-[#7BC4A0]/20" : "bg-[#E5B05C]/20"}
              `}
              >
                {challengeCompleted ? (
                  <svg
                    className="w-5 h-5 text-[#5BA387]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-[#E5B05C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                )}
              </div>
              <div className="text-left">
                <div className="font-semibold text-[#1A1A1A] flex items-center gap-2">
                  {challengeCompleted ? "Task Completed" : "Start Task"}
                  {!challengeCompleted && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#007AFF]/10 text-[#007AFF] font-medium">
                      +{challengeXpReward} XP
                    </span>
                  )}
                </div>
                <div className="text-sm text-[#8E8E93]">{challengeTitle}</div>
              </div>
            </div>
            <div
              className={`flex items-center gap-1 transition-colors ${challengeCompleted ? "text-[#7BC4A0]" : "text-[#E5B05C] group-hover:text-[#C9A050]"}`}
            >
              <span className="text-xs font-medium">{challengeCompleted ? "Review" : "Tap"}</span>
              <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        </div>
      )}

      {/* ─── NAVIGATION CTAs ─── */}
      <div className="space-y-3 pt-1">
        {/* Primary buttons: horizontal layout when both exist */}
        {hasChallenge && !challengeCompleted ? (
          // Show both buttons horizontally when there's an incomplete challenge
          <div className="flex gap-3">
            {/* Practice Task button */}
            <Link
              href={taskUrl}
              className="
                flex-1
                relative overflow-hidden
                font-bold tracking-tight
                transition-all duration-200
                active:translate-y-[2px] active:border-b-2
                flex items-center justify-center gap-2
                bg-[#E5B05C] text-white
                border-[#E5B05C] border-b-[6px] border-b-[#C9A050]
                hover:border-b-[#B8913D] active:bg-[#C9A050]
                py-4 h-14 text-base rounded-full
                shadow-lg shadow-[#E5B05C]/20
              "
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Practice
            </Link>

            {/* Next Lesson button */}
            <button
              type="button"
              onClick={onNextLessonClick}
              className="
                flex-1
                relative overflow-hidden
                font-bold tracking-tight
                transition-all duration-200
                active:translate-y-[2px] active:border-b-2
                flex items-center justify-center gap-2
                bg-[#007AFF] text-white
                border-[#007AFF] border-b-[6px] border-b-[#0056CC]
                hover:border-b-[#0044AA] active:bg-[#0056CC]
                py-4 h-14 text-base rounded-full
                shadow-lg shadow-[#007AFF]/20
                cursor-pointer
              "
            >
              {nextLessonId ? "Next" : "Finish"}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        ) : (
          // Single full-width button when no incomplete challenge
          <button
            type="button"
            onClick={onNextLessonClick}
            className="
              relative overflow-hidden
              font-extrabold tracking-tight
              transition-all duration-200
              active:translate-y-[2px] active:border-b-2
              flex items-center justify-center gap-2
              bg-[#007AFF] text-white
              border-[#007AFF] border-b-[6px] border-b-[#0056CC]
              hover:border-b-[#0044AA] active:bg-[#0056CC]
              py-4 w-full h-14 text-lg rounded-full
              shadow-xl shadow-[#007AFF]/20
              cursor-pointer
            "
          >
            {nextLessonId ? "Next Lesson" : "Finish Module"}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}

        {/* Secondary: Complete button (goes back to module with feedback) */}
        <button
          type="button"
          onClick={onCompleteClick}
          className="block w-full text-center text-sm text-[#8E8E93] hover:text-[#1A1A1A] transition-colors py-2 cursor-pointer"
        >
          Complete
        </button>
      </div>
    </div>
  );
}
