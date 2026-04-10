/**
 * LessonCompletionOverlay
 *
 * PURPOSE: Full-screen celebration overlay shown after completing a lesson
 *
 * CONTEXT: Displays animated success state with XP reward when user completes
 * an article-style lesson. Shows celebration animation then allows user to continue.
 *
 * KEY RESPONSIBILITIES:
 * - Display animated checkmark in green circle (success color)
 * - Show XP points earned in bold text
 * - Auto-dismiss after delay OR on user click
 * - Trigger feedback popup after dismiss
 *
 * @see Lesson.tsx - Parent that triggers this overlay
 * @created 2026-03-01
 */

"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface LessonCompletionOverlayProps {
  /** Title of the completed lesson */
  lessonTitle: string;
  /** XP points earned for completion */
  xpEarned: number;
  /** Callback when overlay is dismissed */
  onDismiss: () => void;
  /** Auto-dismiss delay in milliseconds (default: 2500) */
  autoDismissDelay?: number;
}

export function LessonCompletionOverlay({
  lessonTitle,
  xpEarned,
  onDismiss,
  autoDismissDelay = 2500,
}: LessonCompletionOverlayProps) {
  // Auto-dismiss after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, autoDismissDelay);

    return () => clearTimeout(timer);
  }, [onDismiss, autoDismissDelay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center px-6 z-50 cursor-pointer"
      onClick={onDismiss}
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

        {/* Tap to continue hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.3 }}
          className="text-gray-400 text-sm"
        >
          Tap anywhere to continue
        </motion.p>
      </div>
    </motion.div>
  );
}
