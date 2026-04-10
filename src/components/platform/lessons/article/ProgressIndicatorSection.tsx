/**
 * ProgressIndicatorSection
 *
 * PURPOSE: Show users their progress through the lesson for engagement and motivation
 *
 * CONTEXT: Minimal visual element that appears at key points (25%, 50%, 75%) to
 * encourage users and show how far they've come. Not intrusive - subtle design.
 *
 * KEY RESPONSIBILITIES:
 * - Display progress bar or dots showing position in lesson
 * - Show encouraging message based on progress
 * - Optional additional encouragement text
 * - Minimal, non-intrusive design
 *
 * IMPLEMENTATION NOTES:
 * - Uses iOS Blue (#007AFF) for progress bar (primary brand color)
 * - Progress dots show completed/upcoming sections visually
 * - Clean typography matching existing section patterns
 * - Mobile-first responsive design
 *
 * DEPENDENCIES:
 * - data/design/tokens.ts - Color definitions
 *
 * @see LessonSection.tsx - Router that renders this component
 * @see ArticleLesson.tsx - Parent component
 */

export interface ProgressIndicatorSectionContent {
  /**
   * Main progress message
   * Examples: "You're halfway through!", "Almost there!", "Great progress!"
   */
  message: string;

  /**
   * Current section number (1-indexed)
   */
  currentSection: number;

  /**
   * Total sections in lesson
   */
  totalSections: number;

  /**
   * Optional additional encouragement message
   * Example: "Keep going, you're doing great!"
   */
  encouragement?: string;
}

interface ProgressIndicatorSectionProps {
  content: ProgressIndicatorSectionContent;
  className?: string;
}

/**
 * ProgressIndicatorSection component
 *
 * @example
 * const content = {
 *   message: "You're halfway through!",
 *   currentSection: 5,
 *   totalSections: 10,
 *   encouragement: "Keep going, you're doing great!"
 * }
 * <ProgressIndicatorSection content={content} />
 */
export function ProgressIndicatorSection({
  content,
  className = "",
}: ProgressIndicatorSectionProps) {
  const { message, currentSection, totalSections, encouragement } = content;

  // Calculate progress percentage
  const progressPercent = Math.round((currentSection / totalSections) * 100);

  return (
    <section className={`w-full py-4 ${className}`}>
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
        {/* Message */}
        <p className="text-base font-medium text-black text-center mb-3">{message}</p>

        {/* Progress bar */}
        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
          <div
            className="absolute inset-y-0 left-0 bg-[#007AFF] rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-1.5 mb-3">
          {Array.from({ length: totalSections }, (_, index) => {
            const sectionNumber = index + 1;
            const isCompleted = sectionNumber < currentSection;
            const isCurrent = sectionNumber === currentSection;

            return (
              <div
                key={index}
                className={`
                  w-2 h-2 rounded-full transition-colors duration-200
                  ${isCompleted ? "bg-[#007AFF]" : isCurrent ? "bg-[#007AFF]" : "bg-gray-300"}
                `}
                aria-label={`Section ${sectionNumber}${isCompleted ? " completed" : isCurrent ? " current" : ""}`}
              />
            );
          })}
        </div>

        {/* Section counter */}
        <p className="text-sm text-gray-500 text-center">
          Section {currentSection} of {totalSections}
        </p>

        {/* Optional encouragement */}
        {encouragement && (
          <p className="text-sm text-gray-600 text-center mt-2 italic">{encouragement}</p>
        )}
      </div>
    </section>
  );
}
