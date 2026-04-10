/**
 * CheckpointSection
 *
 * PURPOSE: Knowledge checkpoint for self-assessment
 *
 * CONTEXT: Interactive quiz component for verifying understanding.
 * Simpler than full quiz - just 2-3 options with immediate feedback.
 *
 * KEY RESPONSIBILITIES:
 * - Display checkpoint question
 * - Provide immediate feedback on answer
 * - Show hint optionally
 *
 * IMPLEMENTATION NOTES:
 * - 2-3 answer options (simpler than full quiz)
 * - Immediate visual feedback on selection
 * - Clean design matching article aesthetic
 * - Focus on knowledge verification, not gamification
 *
 * DEPENDENCIES:
 * - React: useState for answer selection and feedback
 * - ContinueButton: To advance after answering
 *
 * @see ArticleLesson.tsx - Parent component
 * @see QuizSection.tsx - Similar but more quiz-focused
 * @see data/design/tokens.ts - Color definitions
 */

import { useState } from "react";

export interface CheckpointSectionContent {
  /**
   * Checkpoint question
   */
  question: string;

  /**
   * 2-3 answer choices (simpler than full quiz)
   */
  options: string[];

  /**
   * Index of correct answer
   */
  correctAnswer: number;

  /**
   * Optional hint to help user
   */
  hint?: string;
}

interface CheckpointSectionProps {
  content: CheckpointSectionContent;
  onSubmit?: (isCorrect: boolean) => void;
  className?: string;
}

/**
 * CheckpointSection component
 *
 * @example
 * const content = {
 *   question: "What's the best way to give Claude context?",
 *   options: [
 *     "All in one message",
 *     "Start with background, then request"
 *   ],
 *   correctAnswer: 1,
 *   hint: "Think about how you'd explain to a colleague"
 * }
 * <CheckpointSection content={content} onSubmit={(isCorrect) => ...} />
 */
export function CheckpointSection({ content, onSubmit, className = "" }: CheckpointSectionProps) {
  const { question, options, correctAnswer, hint } = content;
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const isCorrect = selectedAnswer === correctAnswer;

  const handleSelect = (index: number) => {
    if (showFeedback) return; // Already answered
    setSelectedAnswer(index);
    setShowFeedback(true);
    onSubmit?.(index === correctAnswer);
  };

  return (
    <section className={`w-full space-y-3 py-4 ${className}`}>
      {/* Header */}
      <h2 className="text-xl font-bold text-black">Quick Checkpoint</h2>

      {/* Question */}
      <p className="text-base text-gray-800 leading-relaxed">{question}</p>

      {/* Answer options */}
      <div className="space-y-2">
        {options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectOption = index === correctAnswer;

          let bgClass = "bg-white border-gray-200 hover:border-gray-300";
          if (showFeedback && isSelected) {
            bgClass = isCorrectOption ? "bg-green-50 border-green-500" : "bg-red-50 border-red-300";
          } else if (showFeedback && isCorrectOption) {
            bgClass = "bg-green-50 border-green-300";
          }

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={showFeedback}
              className={`
                w-full p-4 rounded-lg border-2 text-left transition-all duration-200
                ${bgClass}
                ${showFeedback ? "cursor-default" : "cursor-pointer"}
              `}
            >
              <div className="flex items-start gap-3">
                {/* Radio indicator */}
                <div
                  className={`
                  w-5 h-5 rounded-full border-2 shrink-0 mt-0.5 flex items-center justify-center
                  ${
                    isSelected
                      ? isCorrectOption
                        ? "border-green-500 bg-green-500"
                        : "border-red-300 bg-red-300"
                      : "border-gray-300"
                  }
                `}
                >
                  {isSelected && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  )}
                </div>

                {/* Option text */}
                <span
                  className={`text-sm ${isSelected && isCorrectOption ? "text-green-800 font-medium" : ""}`}
                >
                  {option}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Feedback message */}
      {showFeedback && (
        <div
          className={`
          p-3 rounded-lg text-sm font-medium
          ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
        `}
        >
          {isCorrect
            ? "✓ Correct! Well done."
            : "✗ Not quite. The correct answer is highlighted above."}
        </div>
      )}

      {/* Hint toggle */}
      {hint && !showFeedback && (
        <button
          onClick={() => setShowHint(!showHint)}
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          {showHint ? "Hide hint" : "Need a hint?"}
        </button>
      )}

      {/* Hint content */}
      {showHint && hint && (
        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
          💡 {hint}
        </div>
      )}
    </section>
  );
}
