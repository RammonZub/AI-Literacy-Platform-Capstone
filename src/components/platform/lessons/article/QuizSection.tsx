/**
 * QuizSection
 *
 * PURPOSE: Render multiple choice quiz questions in article-style lessons
 *
 * CONTEXT: Used for periodic knowledge checks throughout the lesson.
 * These sections interrupt the flow to test comprehension before
 * allowing the user to continue.
 *
 * KEY RESPONSIBILITIES:
 * - Display a question prompt
 * - Render multiple choice options (3-4 typical)
 * - Handle option selection with radio button behavior
 * - Enable/disable submit button based on selection
 * - Provide feedback on answer submission
 *
 * IMPLEMENTATION NOTES:
 * - Uses radio button semantics (single selection)
 * - Submit button is disabled until an option is selected
 * - Light gray background distinguishes quiz from content
 * - Clean, minimal design using brand colors
 * - Uses green for correct feedback, red for incorrect
 *
 * DEPENDENCIES:
 * - useState: For managing selected option and submission state
 * - ContinueButton: For the submit action
 *
 * @see ArticleSection.tsx - Router component that renders this
 * @see data/design/tokens.ts - Color definitions
 */

import { clsx } from "clsx";
import DOMPurify from "dompurify";
import { AnimatePresence, motion } from "framer-motion";
import { Check, HelpCircle, X } from "lucide-react";
import { useState } from "react";
import { ContinueButton } from "./ContinueButton";

export interface QuizQuestion {
  /**
   * The question prompt
   * Displayed as bold heading
   */
  question: string;

  /**
   * Array of answer options (3-4 typical)
   * User selects one option
   */
  options: string[];

  /**
   * Index of the correct answer in options array
   * Used for validation
   */
  correctAnswer: number;

  /**
   * Optional explanation shown after answering
   * Explains why the answer is correct
   */
  explanation?: string;

  /**
   * Optional hint shown before answering
   */
  hint?: string;
}

export interface QuizSectionContent {
  /**
   * Quiz question object
   */
  quiz: QuizQuestion;

  /**
   * Optional context text before the question
   * Provides setup for the question
   */
  context?: string;
}

interface QuizSectionProps {
  /** Section content object */
  content: QuizSectionContent;

  /** Callback when user submits answer */
  onSubmit?: (isCorrect: boolean) => void;

  /** Optional additional CSS classes */
  className?: string;
}

/**
 * QuizSection component for article-style lessons
 *
 * Renders a multiple choice question with interactive option cards.
 * Provides immediate visual feedback and explanation.
 */
export function QuizSection({ content, onSubmit, className = "" }: QuizSectionProps) {
  const { quiz, context } = content;
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isShake, setIsShake] = useState(false);

  const isCorrect = selectedOption === quiz.correctAnswer;

  const handleSubmit = () => {
    if (selectedOption === null) return;

    setHasSubmitted(true);

    if (selectedOption !== quiz.correctAnswer) {
      setIsShake(true);
      setTimeout(() => setIsShake(false), 500);
    }

    onSubmit?.(selectedOption === quiz.correctAnswer);
  };

  return (
    <section
      className={clsx(
        "w-full p-5 my-4",
        "bg-white rounded-2xl shadow-sm border border-gray-100",
        "overflow-hidden relative",
        className,
      )}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 pointer-events-none" />

      {/* Optional context */}
      {context && (
        <div
          className="text-base text-gray-600 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(context) }}
        />
      )}

      {/* Question Header */}
      <div className="flex gap-3 mb-4 relative">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
          <HelpCircle size={18} strokeWidth={2.5} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 leading-tight pt-0.5">{quiz.question}</h3>
      </div>

      {/* Options Grid */}
      <div className="space-y-3 mb-4 relative">
        {quiz.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const showCorrect = hasSubmitted && index === quiz.correctAnswer;
          const showIncorrect = hasSubmitted && isSelected && !isCorrect;

          return (
            <motion.button
              key={index}
              onClick={() => !hasSubmitted && setSelectedOption(index)}
              disabled={hasSubmitted}
              whileHover={!hasSubmitted ? { scale: 1.01 } : {}}
              whileTap={!hasSubmitted ? { scale: 0.99 } : {}}
              animate={showIncorrect && isShake ? { x: [-5, 5, -5, 5, 0] } : {}}
              className={clsx(
                "w-full text-left p-4 rounded-xl transition-all duration-200 border-2",
                "flex items-center justify-between group relative overflow-hidden",
                // Unsubmitted states
                !hasSubmitted &&
                  !isSelected &&
                  "border-gray-100 bg-white hover:border-blue-200 hover:bg-blue-50/30",
                !hasSubmitted &&
                  isSelected &&
                  "border-blue-500 bg-blue-50 ring-2 ring-blue-100 ring-offset-1",
                // Submitted states
                hasSubmitted && showCorrect && "border-green-500 bg-green-50",
                hasSubmitted && showIncorrect && "border-red-500 bg-red-50",
                hasSubmitted &&
                  !showCorrect &&
                  !showIncorrect &&
                  "border-gray-100 opacity-50 grayscale",
              )}
            >
              <span
                className={clsx(
                  "font-medium text-base z-10 relative",
                  hasSubmitted && showCorrect
                    ? "text-green-800"
                    : hasSubmitted && showIncorrect
                      ? "text-red-800"
                      : "text-gray-700",
                )}
              >
                {option}
              </span>

              {/* Status Icons */}
              <div className="flex-shrink-0 ml-3 z-10 relative">
                {hasSubmitted && showCorrect && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center">
                      <Check size={14} strokeWidth={3} />
                    </div>
                  </motion.div>
                )}
                {hasSubmitted && showIncorrect && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center">
                      <X size={14} strokeWidth={3} />
                    </div>
                  </motion.div>
                )}
                {!hasSubmitted && isSelected && (
                  <div className="w-5 h-5 rounded-full border-2 border-blue-500 bg-blue-500" />
                )}
                {!hasSubmitted && !isSelected && (
                  <div className="w-5 h-5 rounded-full border-2 border-gray-200 group-hover:border-blue-300" />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Actions & Feedback */}
      <AnimatePresence mode="wait">
        {!hasSubmitted ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ContinueButton
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className={selectedOption === null ? "opacity-50" : ""}
            >
              Submit Answer
            </ContinueButton>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={clsx(
              "p-5 rounded-xl border",
              isCorrect ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100",
            )}
          >
            <div className="flex gap-3">
              <div
                className={clsx(
                  "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5",
                  isCorrect ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600",
                )}
              >
                {isCorrect ? <Check size={14} /> : <X size={14} />}
              </div>
              <div>
                <h4
                  className={clsx("font-bold mb-1", isCorrect ? "text-green-800" : "text-red-800")}
                >
                  {isCorrect ? "That's correct!" : "Not quite right"}
                </h4>
                {quiz.explanation && (
                  <p
                    className={clsx(
                      "text-sm leading-relaxed",
                      isCorrect ? "text-green-700" : "text-red-700",
                    )}
                  >
                    {quiz.explanation}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
