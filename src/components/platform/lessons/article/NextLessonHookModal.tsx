/**
 * NextLessonHookModal
 *
 * PURPOSE: Teaser modal shown before navigating to the next lesson
 *
 * CONTEXT: When user clicks "Next Lesson", this modal shows a preview
 * of what's coming next to build anticipation and keep engagement.
 *
 * KEY RESPONSIBILITIES:
 * - Show next lesson title and brief description
 * - Provide "Let's go" and "Maybe later" options
 * - Call onContinue or onDismiss callbacks
 *
 * @see LessonCTAs.tsx - Triggers this modal
 * @created 2026-03-01
 */

"use client";

import { motion } from "framer-motion";
import PlatformRail from "@/components/layout/PlatformRail";
import Button from "@/components/ui/Button";

interface NextLessonHookModalProps {
  /** Title of the next lesson */
  nextLessonTitle: string;
  /** Callback when user wants to continue */
  onContinue: () => void;
  /** Callback when user wants to dismiss */
  onDismiss: () => void;
}

export function NextLessonHookModal({
  nextLessonTitle,
  onContinue,
  onDismiss,
}: NextLessonHookModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
      onClick={onDismiss}
    >
      <PlatformRail className="h-full flex items-end sm:items-center justify-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Icon */}
          <div className="w-12 h-12 bg-[#007AFF]/10 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-[#007AFF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>

          {/* Heading */}
          <h3 className="text-lg font-bold text-black mb-2">Up Next</h3>

          {/* Next lesson title */}
          <p className="text-gray-800 font-medium mb-1">{nextLessonTitle}</p>
          <p className="text-gray-500 text-sm mb-6">
            Ready to continue your learning journey?
          </p>

          {/* Actions */}
          <div className="flex gap-3">
            <Button variant="secondary" onClick={onDismiss} className="flex-1">
              Maybe later
            </Button>
            <Button variant="primary" onClick={onContinue} className="flex-1">
              Let&apos;s go
            </Button>
          </div>
        </motion.div>
      </PlatformRail>
    </motion.div>
  );
}
