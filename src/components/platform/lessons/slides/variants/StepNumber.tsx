/**
 * StepNumber Component
 *
 * PURPOSE: Circular numbered indicator for sequential steps in workflow slides
 *
 * CONTEXT: Used within StepActionSlide to provide visual numbering for steps.
 * Displays either a number or a checkmark when the step is completed.
 *
 * KEY RESPONSIBILITIES:
 * - Render a circular indicator with primary color background
 * - Display step number or checkmark icon
 * - Animate appearance with scale and rotation effects
 * - Apply consistent shadow and styling
 *
 * IMPLEMENTATION NOTES:
 * - Uses design tokens for colors and shadows
 * - Checkmark animation uses spring physics for bouncy effect
 * - Fixed size (w-10 h-10) ensures consistent layout
 * - White text color for contrast against primary background
 *
 * DESIGN DECISIONS:
 * - Circle shape: Universally understood as a step indicator
 * - Checkmark icon: Clear visual confirmation of completion
 * - Spring animation: Adds personality and draws attention
 * - z-10: Ensures the circle appears above the connecting line
 *
 * DEPENDENCIES:
 * - framer-motion: Animation for checkmark reveal
 * - lucide-react: Check icon for completion state
 * - @/data/design/tokens: Design system colors and shadows
 *
 * @see StepActionSlide - Parent component that uses this
 * @see StepActionList - Container that renders multiple StepNumber components
 * @created 2026-02-03
 */

import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";
import { colors, shadows } from "@/data/design/tokens";

// ==========================================
// TYPES
// ==========================================

interface StepNumberProps {
  /** Step number to display (1-indexed) */
  number?: number;
  /** Whether the step is completed (shows checkmark instead of number) */
  completed?: boolean;
}

// ==========================================
// ANIMATION VARIANTS
// ==========================================

// Checkmark animation for completion state
// WHY: Spring animation adds a bouncy, satisfying effect when step completes
const checkmarkVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

// ==========================================
// COMPONENT
// ==========================================

export const StepNumber = React.memo(function StepNumber({
  number,
  completed = false,
}: StepNumberProps) {
  return (
    <div
      className="relative shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-bold z-10"
      style={{
        backgroundColor: colors.primary,
        boxShadow: shadows.sm,
      }}
    >
      {/* Step number or checkmark */}
      {completed ? (
        <motion.div variants={checkmarkVariants} initial="hidden" animate="visible">
          <Check size={20} strokeWidth={3} />
        </motion.div>
      ) : (
        <span>{number}</span>
      )}
    </div>
  );
});
