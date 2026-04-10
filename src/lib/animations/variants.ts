/**
 * Framer Motion Variants
 *
 * PURPOSE: Reusable animation variants for slide components
 *
 * DESIGN PHILOSOPHY:
 * - Light animations only (fade, scale, stagger)
 * - Educational purpose: reinforce concepts, don't distract
 * - 60fps performance target
 * - Reduced motion support
 *
 * @module lib/animations
 */

import type { Variants as MotionVariants } from "framer-motion";

// ===========================================================================
// TYPES
// ===========================================================================

export interface StaggerConfig {
  staggerChildren?: number;
  delayChildren?: number;
}

// ===========================================================================
// FADE VARIANTS
// ===========================================================================

/**
 * Simple fade-in with optional upward motion
 *
 * USE CASE: Slide entrances, content reveals
 */
export const fadeIn: MotionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Fade in with upward slide motion
 *
 * USE CASE: List items, cards, content sections
 */
export const fadeInUp: MotionVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for smooth feel
    },
  },
};

/**
 * Fade in with downward slide motion
 *
 * USE CASE: Dropdown reveals, expanding content
 */
export const fadeInDown: MotionVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ===========================================================================
// SCALE VARIANTS
// ===========================================================================

/**
 * Subtle scale-up on entrance
 *
 * USE CASE: Cards, stats, emphasis elements
 */
export const scaleIn: MotionVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Scale on hover (subtle)
 *
 * USE CASE: Interactive cards, buttons
 */
export const scaleOnHover: MotionVariants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

// ===========================================================================
// STAGGER VARIANTS
// ===========================================================================

/**
 * Staggered children fade-in with upward motion
 *
 * USE CASE: List items, step-by-step reveals
 *
 * CONFIG:
 * - staggerChildren: Delay between each child (default: 0.1s)
 * - delayChildren: Initial delay before first child (default: 0s)
 */
export const staggerFadeInUp: MotionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Individual child animation for staggerFadeInUp
 */
export const staggerItem: MotionVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Slower stagger for sequential storytelling
 *
 * USE CASE: Process flows, multi-step reveals
 */
export const staggerSlow: MotionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// ===========================================================================
// COUNTER ANIMATION
// ===========================================================================

/**
 * Number counting animation variant
 *
 * USE CASE: StatCounterSlide, number displays
 *
 * NOTE: This works with useCountAnimation hook for actual number tweening
 */
export const counterReveal: MotionVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ===========================================================================
// PROGRESS FILL VARIANTS
// ===========================================================================

/**
 * Progress bar/circle fill animation
 *
 * USE CASE: ProcessFlow connecting lines, stat circles
 */
export const progressFill: MotionVariants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Circular progress fill
 *
 * USE CASE: Stat circles, progress indicators
 */
export const progressCircle: MotionVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1], // Subtle bounce
    },
  },
};

// ===========================================================================
// SLIDE TRANSITION VARIANTS
// ===========================================================================

/**
 * Slide entrance from right (next slide)
 */
export const slideFromRight: MotionVariants = {
  enter: {
    x: [300, 0],
    opacity: [0, 1],
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    x: [0, -300],
    opacity: [1, 0],
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

/**
 * Slide entrance from left (previous slide)
 */
export const slideFromLeft: MotionVariants = {
  enter: {
    x: [-300, 0],
    opacity: [0, 1],
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    x: [0, 300],
    opacity: [1, 0],
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// ===========================================================================
// UTILITY VARIANTS
// ===========================================================================

/**
 * No animation (reduced motion preference)
 */
export const none: MotionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0,
    },
  },
};

/**
 * Export all variants with TypeScript type
 */
export type VariantName =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "scaleIn"
  | "staggerFadeInUp"
  | "staggerSlow"
  | "counterReveal"
  | "progressFill"
  | "progressCircle"
  | "slideFromRight"
  | "slideFromLeft"
  | "none";

export const variants: Record<VariantName, MotionVariants> = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  scaleIn,
  staggerFadeInUp,
  staggerSlow,
  counterReveal,
  progressFill,
  progressCircle,
  slideFromRight,
  slideFromLeft,
  none,
};
