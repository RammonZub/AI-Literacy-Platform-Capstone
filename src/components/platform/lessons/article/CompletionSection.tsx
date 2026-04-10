/**
 * CompletionSection
 *
 * PURPOSE: Lesson completion screen with XP reward - simple final slide
 *
 * CONTEXT: Non-quiz completion marker that celebrates lesson completion.
 * Used when lesson ends with celebration rather than knowledge check.
 *
 * KEY RESPONSIBILITIES:
 * - Display completion message
 * - Show XP reward earned
 * - Celebratory but not over-gamified
 *
 * IMPLEMENTATION NOTES:
 * - XP shown as badge to celebrate completion
 * - Clean design matching article aesthetic
 * - No button - sticky Continue button in Lesson.tsx handles navigation
 *
 * @see ArticleLesson.tsx - Parent component
 * @see CheckpointSection.tsx - Similar but with quiz
 * @see data/design/tokens.ts - Color definitions
 */

export interface CompletionSectionContent {
  /**
   * Completion heading/title
   */
  title: string;

  /**
   * Completion message/description
   */
  description: string;

  /**
   * XP reward for completion
   */
  xpReward: number;

  /**
   * Optional button label field kept in the content shape.
   */
  buttonText?: string;
}

interface CompletionSectionProps {
  content: CompletionSectionContent;
  className?: string;
}

/**
 * CompletionSection component
 *
 * @example
 * const content = {
 *   title: "Lesson Complete!",
 *   description: "You've learned the fundamentals of ChatGPT.",
 *   xpReward: 100
 * }
 * <CompletionSection content={content} />
 */
export function CompletionSection({ content, className = "" }: CompletionSectionProps) {
  const { title, description, xpReward } = content;

  return (
    <section className={`w-full space-y-3 py-4 ${className}`}>
      {/* Header with title and XP badge */}
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-xl font-bold text-black flex-1">{title}</h2>
        {/* XP Badge - celebration */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-100 rounded-full shrink-0">
          <span className="text-lg">🎉</span>
          <span className="text-sm font-semibold text-green-700">+{xpReward} XP</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-base text-gray-800 leading-relaxed">{description}</p>
    </section>
  );
}
