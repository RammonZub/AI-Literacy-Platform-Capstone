/**
 * HorizontalQuiz
 *
 * PURPOSE: Step-by-step horizontal quiz experience for lesson assessments
 *
 * CONTEXT: Replaces inline quiz sections with a dedicated, focused quiz page.
 * Uses horizontal card-based navigation with smooth slide transitions.
 *
 * KEY RESPONSIBILITIES:
 * - Display questions one at a time with smooth slide transitions
 * - Show progress indicator ("Question 3 of 10")
 * - Handle answer selection with visual feedback (blue selected, green correct, red incorrect)
 * - Show explanation after answering
 * - Navigate between questions (Previous/Next)
 * - Support mobile swipe gestures
 *
 * IMPLEMENTATION NOTES:
 * - iOS Blue (#007AFF) for selection and primary actions
 * - Green (#5BA387) for correct answers
 * - Red/Amber for incorrect answers
 * - Framer Motion for smooth slide transitions
 * - Touch/swipe gestures for mobile navigation
 * - Auto-advance to next question after selecting answer (optional)
 *
 * DEPENDENCIES:
 * - React: useState for question index, selected answer, submission state
 * - Framer Motion: AnimatePresence for slide transitions, drag gestures
 * - @/data/design/tokens: Design system colors
 * - lucide-react: Icons for feedback (CheckCircle, XCircle)
 *
 * @see QuizResults.tsx - Results screen shown after quiz completion
 * @see /lesson/[lessonId]/quiz/page.tsx - Quiz page that uses this component
 */

"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import {
  CheckCircle,
  ChevronLeft,
  X,
  XCircle,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import PlatformRail from "@/components/layout/PlatformRail";
import { ContinueButton } from "../article/ContinueButton";

// ============================================================================
// TYPES
// ============================================================================

/**
 * Individual quiz question
 */
export interface QuizQuestion {
  /** Unique identifier for the question */
  id: string;
  /** The question prompt */
  question: string;
  /** Answer options (3-4 typical) */
  options: string[];
  /** Index of the correct answer in options array (0-based) */
  correctAnswer: number;
  /** Explanation shown after answering */
  explanation: string;
  /** Optional hint shown before answering */
  hint?: string;
  /** Optional context for the question */
  context?: string;
}

/**
 * Quiz data structure
 */
export interface LessonQuiz {
  /** Quiz identifier */
  id: string;
  /** Optional quiz title */
  title?: string;
  /** Optional quiz description */
  description?: string;
  /** Array of quiz questions */
  questions: QuizQuestion[];
  /** Percentage needed to pass (default: 70) */
  passingScore?: number;
  /** XP reward for passing */
  xpReward?: number;
  /** Whether retry is allowed */
  retryAllowed?: boolean;
}

/**
 * Quiz completion results
 */
export interface QuizResults {
  /** Number of correct answers */
  score: number;
  /** Total number of questions */
  totalQuestions: number;
  /** Whether the user passed the quiz */
  passed: boolean;
  /** XP earned (0 if failed) */
  xpEarned: number;
  /** Array of incorrectly answered questions with details */
  incorrectQuestions: Array<{
    question: QuizQuestion;
    selectedIndex: number;
  }>;
  /** User's answers (questionId -> selectedOptionIndex) */
  answers: Record<string, number>;
}

// ============================================================================
// PROPS
// ============================================================================

interface HorizontalQuizProps {
  /** Quiz data containing questions */
  quiz: LessonQuiz;
  /** Callback when quiz is completed (passed or failed) */
  onComplete: (results: QuizResults) => void;
  /** Callback when user exits quiz */
  onExit: () => void;
  /** Optional initial answers (for review mode) */
  initialAnswers?: Record<string, number>;
}

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

/**
 * HorizontalQuiz component
 *
 * Card-based question display with horizontal slide transitions.
 * Features:
 * - Progress indicator
 * - Answer selection with visual feedback
 * - Explanation reveal after answering
 * - Swipe gesture support on mobile
 * - Keyboard navigation (arrow keys)
 *
 * @example
 * const quiz = {
 *   id: 'quiz-1',
 *   questions: [
 *     {
 *       id: 'q1',
 *       question: 'What is AI?',
 *       options: ['Artificial Intelligence', 'Advanced Internet', 'Auto Input'],
 *       correctAnswer: 0,
 *       explanation: 'AI stands for Artificial Intelligence.'
 *     }
 *   ],
 *   passingScore: 70,
 *   xpReward: 50
 * }
 * <HorizontalQuiz quiz={quiz} onComplete={(results) => console.log(results)} onExit={() => router.back()} />
 */
export function HorizontalQuiz({
  quiz,
  onComplete,
  onExit,
  initialAnswers = {},
}: HorizontalQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [answers, setAnswers] =
    useState<Record<string, number>>(initialAnswers);

  const questions = quiz.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  // Check if current answer was already selected (for review mode)
  const initialAnswer = initialAnswers[currentQuestion.id];
  const isReviewMode = initialAnswer !== undefined;

  // Determine if the selected answer is correct
  const isCorrect =
    selectedAnswer !== null && selectedAnswer === currentQuestion.correctAnswer;

  // Can proceed to next question if answered
  const canProceed = selectedAnswer !== null;

  /**
   * Handle answer selection
   */
  const handleSelectAnswer = useCallback(
    (index: number) => {
      if (hasSubmitted && !isReviewMode) return; // Prevent changing after submit

      setSelectedAnswer(index);
      setHasSubmitted(true);

      // Save answer
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: index,
      }));
    },
    [currentQuestion.id, hasSubmitted, isReviewMode],
  );

  /**
   * Navigate to previous question
   */
  const handlePrevious = useCallback(() => {
    if (isFirstQuestion) return;

    setDirection(-1);
    setCurrentQuestionIndex((prev) => prev - 1);

    // Load previous answer if exists
    const prevQuestion = questions[currentQuestionIndex - 1];
    const prevAnswer = answers[prevQuestion.id];
    setSelectedAnswer(prevAnswer ?? null);
    setHasSubmitted(prevAnswer !== undefined);
  }, [currentQuestionIndex, questions, answers, isFirstQuestion]);

  /**
   * Navigate to next question or complete quiz
   */
  const handleNext = useCallback(() => {
    if (!canProceed) return;

    if (isLastQuestion) {
      // Calculate results
      const correctCount = Object.entries(answers).filter(
        ([questionId, answerIndex]) => {
          const question = questions.find((q) => q.id === questionId);
          return question && question.correctAnswer === answerIndex;
        },
      ).length;

      const incorrectQuestions: Array<{
        question: QuizQuestion;
        selectedIndex: number;
      }> = [];

      questions.forEach((question) => {
        const answerIndex = answers[question.id];
        if (
          answerIndex !== undefined &&
          answerIndex !== question.correctAnswer
        ) {
          incorrectQuestions.push({
            question,
            selectedIndex: answerIndex,
          });
        }
      });

      const score = correctCount;
      const passed =
        (score / totalQuestions) * 100 >= (quiz.passingScore ?? 70);
      const xpEarned = passed ? (quiz.xpReward ?? 50) : 0;

      onComplete({
        score,
        totalQuestions,
        passed,
        xpEarned,
        incorrectQuestions,
        answers,
      });
    } else {
      setDirection(1);
      setCurrentQuestionIndex((prev) => prev + 1);

      // Load next answer if exists
      const nextQuestion = questions[currentQuestionIndex + 1];
      const nextAnswer = answers[nextQuestion.id];
      setSelectedAnswer(nextAnswer ?? null);
      setHasSubmitted(nextAnswer !== undefined);
    }
  }, [
    canProceed,
    isLastQuestion,
    answers,
    currentQuestionIndex,
    questions,
    totalQuestions,
    quiz,
    onComplete,
  ]);

  /**
   * Handle swipe gestures
   */
  const handleDragEnd = useCallback(
    (
      _event: MouseEvent | TouchEvent | PointerEvent,
      { offset, velocity }: PanInfo,
    ) => {
      const swipeThreshold = 50;

      // Swipe left to go next
      if (offset.x < -swipeThreshold || velocity.x < -500) {
        if (canProceed) {
          handleNext();
        }
      }
      // Swipe right to go previous
      else if (offset.x > swipeThreshold || velocity.x > 500) {
        handlePrevious();
      }
    },
    [canProceed, handleNext, handlePrevious],
  );

  /**
   * Keyboard navigation
   */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && !isFirstQuestion) {
        handlePrevious();
      } else if (e.key === "ArrowRight" && canProceed) {
        handleNext();
      }
    },
    [isFirstQuestion, canProceed, handlePrevious, handleNext],
  );

  // Add keyboard listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 bg-white flex flex-col">
      {/* Header with exit button and progress */}
      <header className="flex-shrink-0 px-4 py-4 border-b border-gray-200">
        <PlatformRail
          variant="lesson"
          className="flex items-center justify-between px-0"
        >
          {/* Exit button */}
          <button
            onClick={onExit}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Exit quiz"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Progress indicator */}
          <div className="text-center">
            <p className="text-sm font-medium text-gray-900">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </p>
            {/* Progress bar */}
            <div className="mt-1 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#007AFF]"
                initial={false}
                animate={{
                  width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Spacer for balance */}
          <div className="w-10" />
        </PlatformRail>
      </header>

      {/* Question card */}
      <main className="flex-1 overflow-hidden">
        <PlatformRail
          variant="lesson"
          className="h-full py-6 flex items-center"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentQuestion.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="w-full"
            >
              {/* Optional context */}
              {currentQuestion.context && (
                <p className="text-sm text-gray-600 mb-4 italic">
                  {currentQuestion.context}
                </p>
              )}

              {/* Question */}
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {currentQuestion.question}
              </h2>

              {/* Hint (shown before answering) */}
              {currentQuestion.hint && !hasSubmitted && (
                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    💡 {currentQuestion.hint}
                  </p>
                </div>
              )}

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrectOption =
                    index === currentQuestion.correctAnswer;

                  // Determine styling based on state
                  let buttonStyle =
                    "border-gray-300 hover:border-gray-400 hover:bg-gray-50";
                  if (hasSubmitted) {
                    if (isCorrectOption) {
                      buttonStyle = "border-[#5BA387] bg-green-50";
                    } else if (isSelected && !isCorrect) {
                      buttonStyle = "border-[#D46A6A] bg-red-50";
                    } else {
                      buttonStyle = "border-gray-200 opacity-50";
                    }
                  } else if (isSelected) {
                    buttonStyle = "border-[#007AFF] bg-blue-50";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleSelectAnswer(index)}
                      disabled={hasSubmitted && !isReviewMode}
                      className={`
                        w-full text-left p-4 rounded-xl border-2 transition-all duration-200
                        ${buttonStyle}
                        ${hasSubmitted ? "cursor-default" : "cursor-pointer"}
                      `}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-base text-gray-900 flex-1">
                          {option}
                        </span>

                        {/* Result icon (shown after answering) */}
                        {hasSubmitted && isCorrectOption && (
                          <CheckCircle className="w-5 h-5 text-[#5BA387] flex-shrink-0" />
                        )}
                        {hasSubmitted && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-[#D46A6A] flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation (shown after answering) */}
              {hasSubmitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className={`
                    mt-6 p-4 rounded-xl border
                    ${isCorrect ? "bg-green-50 border-green-200" : "bg-amber-50 border-amber-200"}
                  `}
                >
                  <p
                    className={`text-sm font-semibold mb-1 ${isCorrect ? "text-green-800" : "text-amber-800"}`}
                  >
                    {isCorrect ? "✓ Correct!" : "Not quite right"}
                  </p>
                  <p className="text-sm text-gray-700">
                    {currentQuestion.explanation}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </PlatformRail>
      </main>

      {/* Footer with navigation */}
      <footer className="flex-shrink-0 px-4 py-4 border-t border-gray-200">
        <PlatformRail variant="lesson" className="flex items-center gap-3 px-0">
          {/* Previous button */}
          <button
            onClick={handlePrevious}
            disabled={isFirstQuestion}
            className={`
              w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-200
              ${
                isFirstQuestion
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50"
              }
            `}
            aria-label="Previous question"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next/Submit button */}
          <div className="flex-1">
            <ContinueButton onClick={handleNext} disabled={!canProceed}>
              {isLastQuestion ? "See Results" : "Next"}
            </ContinueButton>
          </div>

          {/* Spacer for balance */}
          <div className="w-12" />
        </PlatformRail>
      </footer>
    </div>
  );
}
