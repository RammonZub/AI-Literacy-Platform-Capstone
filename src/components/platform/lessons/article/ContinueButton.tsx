/**
 * ContinueButton
 *
 * PURPOSE: Primary call-to-action button for advancing through article-style lessons
 *
 * CONTEXT: Used in article-style lessons to reveal the next section of content.
 * This button uses iOS Blue (#007AFF) with 3D block shadow effect.
 *
 * KEY RESPONSIBILITIES:
 * - Render a clickable button with blue background and 3D effect
 * - Display "Continue" text by default, customizable
 * - Handle click events to trigger content reveal
 * - Show loading state when processing
 * - Provide tactile feedback with press animations
 *
 * IMPLEMENTATION NOTES:
 * - Uses Tailwind CSS for styling
 * - iOS Blue (#007AFF) background for brand consistency
 * - 6px border-bottom in darker blue creates 3D "button" appearance
 * - Active state reduces to 2px border and translates Y for press animation
 * - Hover: Border color darkens slightly
 * - Active: Background darkens for press effect
 * - Full-width for easy mobile tapping
 * - Rounded-full for modern, friendly aesthetic
 * - Shadow with blue tint for depth
 *
 * DESIGN RATIONALE:
 * - Using iOS Blue (#007AFF) for brand consistency
 * - 3D block shadow effect provides tactile, clickable feel
 * - Press animation (active state) mimics real button press
 * - Larger touch target (h-14) improves mobile UX
 *
 * DEPENDENCIES:
 * - React: ButtonHTMLAttributes for type safety
 *
 * @see ArticleLesson.tsx - Parent component that uses this button
 * @see components/ui/Button.tsx - Main Button component with shared styles
 */

import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ContinueButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  /**
   * Button text - defaults to "Continue"
   * Can be customized for quiz sections ("Submit", etc.)
   */
  children?: ReactNode;

  /**
   * Whether the button is in a loading/disabled state
   * Used during quiz submission or content loading
   */
  disabled?: boolean;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * ContinueButton component for article-style lessons
 *
 * DESIGN: iOS Blue (#007AFF) with 3D block shadow effect
 * - Base: 6px border-bottom (#0056CC)
 * - Hover: Border darkens to #0044AA
 * - Active: Background darkens to #0056CC, border compresses to 2px
 *
 * @example
 * // Basic usage
 * <ContinueButton onClick={handleContinue} />
 *
 * @example
 * // With custom text (for quiz sections)
 * <ContinueButton onClick={handleSubmit}>Submit</ContinueButton>
 *
 * @example
 * // Disabled state
 * <ContinueButton disabled={isLoading}>Continue</ContinueButton>
 */
export function ContinueButton({
  children = "Continue",
  disabled = false,
  onClick,
  className = "",
  ...props
}: ContinueButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        relative overflow-hidden
        font-extrabold
        transition-all duration-200
        active:translate-y-[2px]
        active:border-b-2
        flex items-center justify-center
        tracking-tight
        bg-[#007AFF]
        text-white
        border-[#007AFF]
        border-b-[6px]
        border-b-[#0056CC]
        hover:border-b-[#0044AA]
        active:bg-[#0056CC]
        py-4
        w-full
        h-14
        text-lg
        rounded-full
        shadow-xl
        shadow-[#007AFF]/20
        text-center
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
