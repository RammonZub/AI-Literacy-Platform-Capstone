/**
 * KnowledgeCheckSection
 *
 * PURPOSE: Inline knowledge verification without gamification
 *
 * CONTEXT: Unlike QuizSection (which has context) or CheckpointSection (with XP),
 * this is a simple, lightweight check for understanding. No scores, no celebration,
 * just immediate feedback on whether the user understood the content.
 *
 * KEY RESPONSIBILITIES:
 * - Present a simple question with 2-4 options
 * - Provide immediate feedback (correct/incorrect)
 * - Show explanation for both correct and incorrect answers
 * - Track completion state (but no XP/score)
 *
 * IMPLEMENTATION NOTES:
 * - Single-select only (no multi-select)
 * - Shows explanation after any answer
 * - Visual feedback: green for correct, amber for incorrect
 * - No "try again" - just show the right answer
 *
 * DEPENDENCIES:
 * - React: useState for selection state
 * - lucide-react: CheckCircle and XCircle icons
 * - InlineMarkdownRenderer: For explanation text
 *
 * @see LessonSection.tsx - Router that calls this component
 * @see QuizSection.tsx - Similar but with context and gamification
 * @see CheckpointSection.tsx - Similar but with XP reward
 */

import { CheckCircle, HelpCircle, XCircle } from "lucide-react";
import { useState } from "react";
import { InlineMarkdownRenderer } from "./MarkdownRenderer";

export interface KnowledgeCheckSectionContent {
  /**
   * The question prompt
   */
  question: string;

  /**
   * Answer options (2-4)
   */
  options: string[];

  /**
   * Index of the correct answer (0-based)
   */
  correctAnswer: number;

  /**
   * Explanation shown after answering
   */
  explanation: string;

  /**
   * Optional hint before answering
   */
  hint?: string;
}

interface KnowledgeCheckSectionProps {
  content: KnowledgeCheckSectionContent;
  className?: string;
}

/**
 * KnowledgeCheckSection component
 *
 * @example
 * const content = {
 *   question: "Which AI tool is best for real-time web search?",
 *   options: ["ChatGPT", "Claude", "Gemini", "Midjourney"],
 *   correctAnswer: 2,
 *   explanation: "Gemini (with grounding) can attach retrievable links when your policy allows; always verify before citing.",
 *   hint: "Think about which tool emphasizes current information..."
 * }
 * <KnowledgeCheckSection content={content} />
 */
export function KnowledgeCheckSection({ content, className = "" }: KnowledgeCheckSectionProps) {
  const { question, options, correctAnswer, explanation, hint } = content;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSelect = (index: number) => {
    if (hasAnswered) return; // Prevent changing answer

    setSelectedIndex(index);
    setHasAnswered(true);
  };

  const isCorrect = selectedIndex === correctAnswer;

  return (
    <section className={`w-full py-4 ${className}`}>
      {/* Question card */}
      <div className="p-5 rounded-xl border-2 border-gray-200 bg-white">
        {/* Header with icon */}
        <div className="flex items-start gap-3 mb-4">
          <HelpCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Quick Check
            </span>
            <h3 className="text-base font-semibold text-black mt-1">{question}</h3>
          </div>
        </div>

        {/* Hint (shown before answering) */}
        {hint && !hasAnswered && (
          <p className="text-sm text-gray-500 italic mb-4 pl-8">💡 {hint}</p>
        )}

        {/* Options */}
        <div className="space-y-2 pl-8">
          {options.map((option, idx) => {
            const isSelected = selectedIndex === idx;
            const isCorrectOption = idx === correctAnswer;

            // Determine styling based on state
            let optionStyle = "border-gray-200 hover:border-gray-300 hover:bg-gray-50";
            if (hasAnswered) {
              if (isCorrectOption) {
                optionStyle = "border-green-300 bg-green-50";
              } else if (isSelected && !isCorrect) {
                optionStyle = "border-amber-300 bg-amber-50";
              } else {
                optionStyle = "border-gray-200 opacity-60";
              }
            } else if (isSelected) {
              optionStyle = "border-blue-300 bg-blue-50";
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={hasAnswered}
                className={`
                  w-full text-left p-3 rounded-lg border-2 transition-all duration-200
                  ${optionStyle}
                  ${hasAnswered ? "cursor-default" : "cursor-pointer"}
                `}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-gray-700">{option}</span>

                  {/* Result icon (shown after answering) */}
                  {hasAnswered && (
                    <>
                      {isCorrectOption && (
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      )}
                      {isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      )}
                    </>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation (shown after answering) */}
        {hasAnswered && (
          <div
            className={`
              mt-4 p-4 rounded-lg
              ${isCorrect ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"}
            `}
          >
            <p
              className={`text-sm font-medium mb-1 ${isCorrect ? "text-green-700" : "text-amber-700"}`}
            >
              {isCorrect ? "✓ Correct!" : "Not quite right"}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <InlineMarkdownRenderer>{explanation}</InlineMarkdownRenderer>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
