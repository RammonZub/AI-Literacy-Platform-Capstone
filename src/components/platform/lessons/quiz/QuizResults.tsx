/**
 * QuizResults
 *
 * PURPOSE: Display quiz completion results with score, pass/fail status, and review options
 *
 * CONTEXT: Shown after user completes all quiz questions. Displays performance summary,
 * incorrect answers for review, and navigation options (retry, continue, review mode).
 *
 * KEY RESPONSIBILITIES:
 * - Display score with percentage and pass/fail indicator
 * - Show XP earned (if passed)
 * - List incorrectly answered questions with correct answers
 * - Provide retry option (if allowed)
 * - Provide continue option to return to lesson
 * - Provide review mode to see questions with answers
 *
 * IMPLEMENTATION NOTES:
 * - iOS Blue (#007AFF) for primary actions
 * - Green (#5BA387) for pass state
 * - Amber/Red for fail state
 * - Confetti animation for passing score (optional)
 * - Clean, focused layout for review
 *
 * DEPENDENCIES:
 * - React: useState for review mode toggle
 * - Framer Motion: Entrance animations
 * - lucide-react: Icons for feedback (CheckCircle, XCircle, RotateCcw, ArrowRight)
 * - @/data/design/tokens: Design system colors
 * - @/components/ui/Button: Shared button component
 *
 * @see HorizontalQuiz.tsx - Quiz component that leads to these results
 * @see types: QuizQuestion, QuizResults from HorizontalQuiz
 */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle, Eye, EyeOff, RotateCcw, XCircle } from "lucide-react";
import { useState } from "react";
import { ContinueButton } from "../article/ContinueButton";
import type { QuizQuestion } from "./HorizontalQuiz";

// ============================================================================
// TYPES
// ============================================================================

interface IncorrectQuestion {
  question: QuizQuestion;
  selectedIndex: number;
}

interface QuizResultsProps {
  /** Number of correct answers */
  score: number;
  /** Total number of questions */
  totalQuestions: number;
  /** Whether the user passed the quiz */
  passed: boolean;
  /** XP earned (0 if failed) */
  xpEarned: number;
  /** Array of incorrectly answered questions */
  incorrectQuestions: IncorrectQuestion[];
  /** Callback to retry the quiz */
  onRetry?: () => void;
  /** Callback to continue (return to lesson/module) */
  onContinue: () => void;
  /** Callback to enter review mode */
  onReview?: () => void;
}

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

/**
 * QuizResults component
 *
 * Displays quiz completion results with:
 * - Score display with percentage
 * - Pass/fail indicator with visual feedback
 * - XP earned display
 * - List of incorrect answers with correct answers shown
 * - Retry button (if allowed)
 * - Continue button
 * - Review mode button
 *
 * @example
 * <QuizResults
 *   score={7}
 *   totalQuestions={10}
 *   passed={true}
 *   xpEarned={50}
 *   incorrectQuestions={[...]}
 *   onContinue={() => router.back()}
 *   onReview={() => setReviewMode(true)}
 * />
 */
export function QuizResults({
  score,
  totalQuestions,
  passed,
  xpEarned,
  incorrectQuestions,
  onRetry,
  onContinue,
  onReview,
}: QuizResultsProps) {
  const [showIncorrectAnswers, setShowIncorrectAnswers] = useState(false);
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="fixed inset-0 bg-white flex flex-col overflow-y-auto">
      <main className="flex-1 px-4 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto"
        >
          {/* Score Card */}
          <motion.div
            variants={itemVariants}
            className={`
              rounded-2xl p-8 text-center border-2
              ${passed ? "bg-green-50 border-green-200" : "bg-amber-50 border-amber-200"}
            `}
          >
            {/* Pass/Fail Icon */}
            <div className="flex justify-center mb-4">
              <div
                className={`
                w-16 h-16 rounded-full flex items-center justify-center
                ${passed ? "bg-green-100" : "bg-amber-100"}
              `}
              >
                {passed ? (
                  <CheckCircle className="w-10 h-10 text-[#5BA387]" />
                ) : (
                  <XCircle className="w-10 h-10 text-amber-600" />
                )}
              </div>
            </div>

            {/* Pass/Fail Text */}
            <h2 className="text-2xl font-bold mb-2">
              {passed ? "You Passed!" : "Keep Practicing"}
            </h2>

            {/* Score */}
            <p className="text-5xl font-bold mb-2">{percentage}%</p>

            {/* Score breakdown */}
            <p className="text-gray-600 mb-4">
              {score} of {totalQuestions} correct
            </p>

            {/* XP Earned */}
            {xpEarned > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#007AFF] text-white rounded-full font-semibold"
              >
                <span className="text-lg">+{xpEarned} XP</span>
              </motion.div>
            )}

            {/* Fail message */}
            {!passed && onRetry && (
              <p className="text-sm text-gray-600 mt-4">You need 70% to pass. Try again!</p>
            )}
          </motion.div>

          {/* Incorrect Answers Section */}
          {incorrectQuestions.length > 0 && (
            <motion.div variants={itemVariants} className="mt-8">
              <button
                onClick={() => setShowIncorrectAnswers(!showIncorrectAnswers)}
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900">
                  Review Incorrect Answers ({incorrectQuestions.length})
                </span>
                {showIncorrectAnswers ? (
                  <EyeOff className="w-5 h-5 text-gray-600" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-600" />
                )}
              </button>

              <AnimatePresence>
                {showIncorrectAnswers && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-4 overflow-hidden"
                  >
                    {incorrectQuestions.map((item, index) => (
                      <motion.div
                        key={item.question.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-white rounded-xl border-2 border-red-200"
                      >
                        {/* Question */}
                        <p className="font-semibold text-gray-900 mb-3">{item.question.question}</p>

                        {/* Your answer (incorrect) */}
                        <div className="p-3 bg-red-50 rounded-lg border border-red-200 mb-2">
                          <p className="text-xs font-semibold text-red-700 mb-1">Your answer</p>
                          <p className="text-sm text-gray-800">
                            {item.question.options[item.selectedIndex]}
                          </p>
                        </div>

                        {/* Correct answer */}
                        <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                          <p className="text-xs font-semibold text-green-700 mb-1">
                            Correct answer
                          </p>
                          <p className="text-sm text-gray-800">
                            {item.question.options[item.question.correctAnswer]}
                          </p>
                        </div>

                        {/* Explanation */}
                        {item.question.explanation && (
                          <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <p className="text-xs font-semibold text-blue-700 mb-1">Explanation</p>
                            <p className="text-sm text-gray-700">{item.question.explanation}</p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Perfect Score Message */}
          {incorrectQuestions.length === 0 && passed && (
            <motion.div
              variants={itemVariants}
              className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200 text-center"
            >
              <p className="text-green-800 font-semibold">
                🎉 Perfect score! You&apos;ve mastered this material.
              </p>
            </motion.div>
          )}
        </motion.div>
      </main>

      {/* Footer with action buttons */}
      <footer className="flex-shrink-0 px-4 py-6 border-t border-gray-200 bg-white">
        <div className="max-w-2xl mx-auto space-y-3">
          {/* Primary action: Continue or Retry */}
          {passed ? (
            <ContinueButton onClick={onContinue}>Continue</ContinueButton>
          ) : onRetry ? (
            <ContinueButton onClick={onRetry}>
              <RotateCcw className="w-5 h-5 mr-2" />
              Try Again
            </ContinueButton>
          ) : (
            <ContinueButton onClick={onContinue}>Continue</ContinueButton>
          )}

          {/* Secondary actions */}
          <div className="flex gap-3">
            {/* Review mode button (if passed and has callback) */}
            {passed && onReview && (
              <button
                onClick={onReview}
                className="flex-1 py-3 px-4 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                <Eye className="w-5 h-5 mr-2 inline" />
                Review Quiz
              </button>
            )}

            {/* Continue to lesson (secondary if retry is primary) */}
            {!passed && (
              <button
                onClick={onContinue}
                className="flex-1 py-3 px-4 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Back to Lesson
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
