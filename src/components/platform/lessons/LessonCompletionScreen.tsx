/**
 * Lesson Completion Screen Component
 *
 * PURPOSE: Full-screen completion celebration shown after finishing a lesson
 *
 * CONTEXT: Displays animated success state with XP reward when user completes
 * a lesson. Uses iOS blue theme to match primary color palette.
 *
 * KEY RESPONSIBILITIES:
 * - Display animated checkmark in green circle (success color)
 * - Show XP points earned in black bold text
 * - Provide Continue button to return to module (user clicks manually)
 * - Use Framer Motion for smooth entrance animations
 *
 * IMPLEMENTATION NOTES:
 * - Staggered animations: checkmark → heading → XP → button
 * - Spring physics for natural feel
 * - Full-screen overlay with centered content
 * - Green circle for checkmark (#5BA387 - sage green)
 * - Black bold text for XP earned (clean, high contrast)
 * - Clean, appropriately-sized button (not oversized)
 *
 * DEPENDENCIES:
 * - framer-motion: For animations
 * - Button: Reusable UI component
 *
 * @see ArticleLesson.tsx - Parent that triggers completion
 * @see data/design/tokens.ts - Color definitions
 */

"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { platformPaths } from "@/lib/routes/platform";

interface LessonCompletionScreenProps {
  /** Title of the completed lesson */
  lessonTitle: string;
  /** XP points earned for completion */
  xpEarned: number;
  /** Module ID for navigation */
  moduleId: string;
  /** Optional next lesson ID for direct navigation */
  nextLessonId?: string | null;
  /** Optional custom continue handler */
  onContinue?: () => void;
}

/**
 * LessonCompletionScreen component
 *
 * @example
 * <LessonCompletionScreen
 *   lessonTitle="Claude Basics"
 *   xpEarned={50}
 *   moduleId="module1-foundation"
 *   onContinue={() => router.push('/module/module1-foundation')}
 * />
 */
export default function LessonCompletionScreen({
  lessonTitle,
  xpEarned,
  moduleId,
  nextLessonId,
  onContinue,
}: LessonCompletionScreenProps) {
  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    } else if (nextLessonId) {
      // Navigate to next lesson
      window.location.href = platformPaths.lesson(moduleId, nextLessonId);
    } else {
      // No next lesson, go back to module
      window.location.href = platformPaths.module(moduleId);
    }
  };

  const buttonText = nextLessonId ? "Next Lesson" : "Continue";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center px-6 z-50"
    >
      {/* Centered container */}
      <div className="flex flex-col items-center justify-center max-w-sm w-full">
        {/* Animated checkmark circle - green for success */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.1,
          }}
          className="w-20 h-20 bg-[#5BA387] rounded-full flex items-center justify-center mb-6 shadow-lg"
        >
          {/* Animated checkmark path */}
          <svg
            className="w-10 h-10 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="text-2xl font-bold text-black mb-2 text-center"
        >
          Lesson Complete
        </motion.h1>

        {/* Lesson title */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="text-gray-600 text-center mb-8"
        >
          {lessonTitle}
        </motion.p>

        {/* XP earned - black bold text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="mb-8 text-center"
        >
          <motion.p
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            className="text-4xl font-bold text-black"
          >
            +{xpEarned}
          </motion.p>
          <p className="text-gray-500 text-sm mt-1">XP earned</p>
        </motion.div>

        {/* Continue button - appropriately sized, not oversized */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          <Button variant="primary" onClick={handleContinue}>
            {buttonText}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
