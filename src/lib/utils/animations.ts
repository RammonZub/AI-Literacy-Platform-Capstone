/**
 * iOS Animation Utilities
 *
 * PURPOSE: Reusable iOS-native animation configurations
 *
 * CONTEXT: iOS-Native UI/UX Redesign - Provides spring physics animations
 * that match Apple's Human Interface Guidelines for motion.
 *
 * KEY RESPONSIBILITIES:
 * - Export iOS spring animation configs for Framer Motion
 * - Provide consistent animation timing across the app
 * - Match iOS native app behavior
 *
 * IMPLEMENTATION NOTES:
 * - iOS uses spring physics (stiffness + damping) not CSS easing
 * - Stiffness 300-500 creates snappy, responsive feel
 * - Damping 25-30 prevents oscillation while maintaining bounce
 * - These values match iOS native animations
 *
 * DESIGN RATIONALE:
 * - Spring animations feel more natural than CSS easing
 * - Overshoot (scale > 1) creates "pop" effect iOS is known for
 * - Short durations (300-500ms) match iOS responsiveness
 *
 * @see Apple HIG: https://developer.apple.com/design/human-interface-guidelines/motion
 * @see globals.css for CSS animation implementations
 */

// ============================================
// SPRING ANIMATIONS (Framer Motion)
// ============================================

/**
 * iOS Spring Animation Configurations
 *
 * PURPOSE: Spring physics for Framer Motion animations
 *
 * DESIGN RATIONALE:
 * - stiffness: Controls "snap" - higher = snappier
 * - damping: Controls "bounciness" - lower = more bounce
 * - These values match iOS native spring behavior
 */
export const iosAnimations = {
  /**
   * Spring In - Entrance with overshoot
   *
   * USE: Cards, modals, important elements appearing
   * EFFECT: Scales from 0.9 → 1.02 → 1.0 (overshoot creates "pop")
   */
  spring: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  },

  /**
   * Slide Up - Content entrance
   *
   * USE: Page content, list items, sheets
   * EFFECT: Slides up from 20px below
   */
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 25,
    },
  },

  /**
   * Press - Button/card press feedback
   *
   * USE: Interactive elements on touch/click
   * EFFECT: Scales down to 0.98 immediately
   */
  press: {
    scale: 0.98,
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 25,
    },
  },

  /**
   * Hover - Subtle lift on hover
   *
   * USE: Cards, list items on desktop hover
   * EFFECT: Scales up to 1.01
   */
  hover: {
    scale: 1.01,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 20,
    },
  },
} as const;

// ============================================
// CSS CLASS NAMES (for Tailwind)
// ============================================

/**
 * CSS Animation Classes
 *
 * PURPOSE: Ready-to-use Tailwind classes for iOS animations
 *
 * USAGE: Add these classes directly to elements
 * - className="animate-spring-in"
 * - className="animate-slide-up-ios"
 *
 * STAGGER: Use inline style for delay: style={{ animationDelay: '0.1s' }}
 */
export const iosAnimationClasses = {
  springIn: "animate-spring-in",
  slideUpIos: "animate-slide-up-ios",
  fadeIn: "animate-fade-in",
  scaleIn: "animate-scale-in",
} as const;

// ============================================
// STAGGER DELAYS
// ============================================

/**
 * Stagger Delay Values
 *
 * PURPOSE: Delays for sequential animations
 *
 * DESIGN RATIONALE:
 * - Staggering creates visual hierarchy
 * - 0.1s increments is standard iOS pattern
 * - Each item appears slightly after the previous
 */
export const staggerDelays = {
  item1: "0s",
  item2: "0.1s",
  item3: "0.2s",
  item4: "0.3s",
  item5: "0.4s",
  item6: "0.5s",
} as const;

/**
 * Get stagger delay for index
 *
 * PURPOSE: Calculate delay for list item at given index
 *
 * @param index - Zero-based index in list
 * @returns CSS delay string (e.g., "0.2s")
 *
 * @example
 * // In a map:
 * items.map((item, index) => (
 *   <div key={item.id} style={{ animationDelay: getStaggerDelay(index) }}>
 *     {item.content}
 *   </div>
 * ))
 */
export function getStaggerDelay(index: number): string {
  return `${index * 0.1}s`;
}

// ============================================
// TRANSITION DURATIONS (iOS-style)
// ============================================

/**
 * iOS Transition Durations
 *
 * PURPOSE: Standard iOS animation timings
 *
 * DESIGN RATIONALE:
 * - iOS uses shorter durations than web (150-300ms typical)
 * - Fast transitions feel more responsive
 * - These match iOS native app behavior
 */
export const iosDurations = {
  instant: 150, // Micro-interactions (button press)
  fast: 200, // Quick transitions (hover)
  base: 300, // Standard transitions (page load)
  slow: 400, // Deliberate animations (modal open)
  slower: 500, // Complex animations (multiple elements)
} as const;

// ============================================
// TYPE EXPORTS
// ============================================

export type IosAnimation = keyof typeof iosAnimations;
export type IosAnimationClass = keyof typeof iosAnimationClasses;
export type IosDuration = keyof typeof iosDurations;
