/**
 * FeedbackFlag
 *
 * PURPOSE: Floating feedback icon for users to report issues or provide feedback
 *
 * CONTEXT: Part of the feedback system that allows users to easily report
 * problems or suggestions while taking a lesson. The button is always visible
 * during the lesson and clicking it opens a modal with predefined categories.
 *
 * KEY RESPONSIBILITIES:
 * - Display a floating feedback button in the bottom-right corner
 * - Provide visual feedback on hover
 * - Trigger the feedback modal on click
 * - Use appropriate z-index to appear above content but below modals
 *
 * IMPLEMENTATION NOTES:
 * - Fixed positioning: bottom-20 right-6 (80px from bottom, 24px from right)
 * - z-index: 50 (above content at auto, below completion screen at 70)
 * - White background, square with rounded-lg borders
 * - Speech bubble emoji (💬) for clear "feedback" semantics
 * - Blue border on hover (matching iOS theme)
 * - Subtle shadow and hover scale effect
 * - Positioned 8px above continue button (bottom-20 + h-14 button + 8px gap = bottom-36)
 *
 * DESIGN DECISIONS:
 * - Speech bubble (💬) icon chosen for clear "give feedback" meaning
 * - Blue border on hover matches iOS theme (#007AFF)
 *
 * DEPENDENCIES:
 * - React: None needed (stateless component)
 * - Parent component: Lesson (provides onClick handler)
 *
 * Z-INDEX LAYERING:
 * - Content: auto (0)
 * - Continue button: 40
 * - Feedback flag: 50 (this component)
 * - Feedback modal: 60
 * - Completion screen: 70
 *
 * @see FeedbackModal.tsx - Modal component that opens on click
 * @see Lesson.tsx - Parent that renders this component
 */

interface FeedbackFlagProps {
  /** Callback when feedback button is clicked */
  onClick: () => void;

  /** Optional additional CSS classes */
  className?: string;
}

/**
 * FeedbackFlag floating icon component
 *
 * Renders a fixed-position feedback button in the bottom-right corner.
 * White background, square with rounded-lg borders, positioned above continue button.
 *
 * Z-index: 50 (above content, below modal and completion screen)
 *
 * @example
 * <FeedbackFlag onClick={() => setShowFeedback(true)} />
 */
export function FeedbackFlag({ onClick, className = "" }: FeedbackFlagProps) {
  return (
    <div className={`fixed bottom-20 right-6 z-50 ${className}`}>
      <button
        onClick={onClick}
        className={`
          h-12 w-12
          rounded-lg
          bg-white
          border-2
          border-gray-200
          hover:border-[#007AFF]
          flex
          items-center
          justify-center
          shadow-lg
          hover:shadow-xl
          transition-all
          duration-200
          active:scale-95
        `}
        aria-label="Report an issue or provide feedback"
      >
        <span className="text-xl" role="img" aria-label="Feedback icon">
          💬
        </span>
      </button>
    </div>
  );
}

export default FeedbackFlag;
