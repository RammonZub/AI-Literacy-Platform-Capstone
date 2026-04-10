/**
 * Chapter Accordion Component
 *
 * PURPOSE: Collapsible chapter section for module journey with lesson cards grid
 *
 * CONTEXT: Part of the redesigned module journey view (Phase 2A). Groups lessons
 * by chapter in collapsible accordion sections, replacing the flat S-wave layout.
 *
 * KEY RESPONSIBILITIES:
 * - Display chapter title with optional icon
 * - Show chapter progress (e.g., "3/5 lessons completed")
 * - Collapse/expand with smooth framer-motion animation
 * - Render grid of LessonCard components for all lessons in chapter
 * - Rotate chevron icon when expanded/collapsed
 * - Default first chapter expanded, others collapsed
 *
 * IMPLEMENTATION NOTES:
 * - Uses framer-motion AnimatePresence for smooth enter/exit animations
 * - Chevron rotates 180deg when expanded
 * - Grid layout: 1 column (mobile), 2 (sm), 3 (md), 4 (lg)
 * - Calculates completed/total for progress display
 *
 * DESIGN RATIONALE:
 * - Accordion pattern allows users to focus on current chapter
 * - Progress summary shows completion at-a-glance
 * - Smooth animation feels premium and polished
 * - Grid layout makes efficient use of space
 * - Chevron rotation provides clear visual feedback
 *
 * @see /data/design/tokens.ts for design tokens
 * @see LessonCard.tsx for individual lesson cards
 */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { colors } from "@/data/design/tokens";
import type { LessonStatus } from "@/types/progress";
import { LessonCard } from "./LessonCard";

// ==========================================
// TYPES
// ==========================================

/** Lesson interface from API response */
interface APILesson {
  id: string;
  title: string;
  chapterId: string;
  description: string;
  estimatedMinutes: number;
  xpReward: number;
  status: string;
  slides: unknown[];
}

/** Chapter interface from API response */
interface APIChapter {
  id: string;
  title: string;
  lessons: APILesson[];
}

/** Props for ChapterAccordion component */
export interface ChapterAccordionProps {
  /** Chapter data from API */
  chapter: APIChapter;
  /** Map of lesson ID to status */
  lessonStatusMap: Map<string, LessonStatus>;
  /** Callback when lesson is clicked */
  onLessonClick: (lessonId: string, status: LessonStatus) => void;
  /** Whether this accordion starts expanded */
  defaultExpanded?: boolean;
  /** Optional icon/emoji for chapter header */
  chapterIcon?: string;
}

// ==========================================
// COMPONENT
// ==========================================

/**
 * ChapterAccordion Component
 *
 * Collapsible chapter section with lesson cards grid.
 * Displays progress summary and animates expand/collapse with framer-motion.
 */
export function ChapterAccordion({
  chapter,
  lessonStatusMap,
  onLessonClick,
  defaultExpanded = false,
  chapterIcon,
}: ChapterAccordionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  /**
   * Calculate chapter progress
   */
  const progress = chapter.lessons.reduce(
    (acc, lesson) => {
      const status = lessonStatusMap.get(lesson.id);
      if (status === "completed") {
        acc.completed++;
      }
      return acc;
    },
    { completed: 0, total: chapter.lessons.length },
  );

  /**
   * Toggle accordion expansion
   */
  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  /**
   * Handle lesson card click
   */
  const handleLessonClick = (lessonId: string) => {
    const status = lessonStatusMap.get(lessonId) || "locked";
    if (status !== "locked") {
      onLessonClick(lessonId, status);
    }
  };

  return (
    <div className="w-full mb-4">
      {/* ==========================================
          ACCORDION HEADER
          ========================================== */}
      <button
        onClick={toggleExpanded}
        className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200"
        style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)" }}
      >
        {/* Left side: Icon + Title + Progress */}
        <div className="flex items-center gap-3">
          {/* Chapter Icon (optional) */}
          {chapterIcon && (
            <span className="text-2xl" role="img" aria-label="Chapter icon">
              {chapterIcon}
            </span>
          )}

          {/* Chapter Title */}
          <div className="text-left">
            <h3 className="text-base font-bold text-black">{chapter.title}</h3>
            {/* Progress Summary */}
            <p className="text-xs text-gray-500 mt-0.5">
              {progress.completed}/{progress.total} lessons completed
            </p>
          </div>
        </div>

        {/* Chevron Icon (rotates when expanded) */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-500"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      {/* ==========================================
          ACCORDION CONTENT (Animated)
          ========================================== */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.2 }}
              className="pt-4 px-1"
            >
              {/* Lesson Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {chapter.lessons.map((lesson, index) => {
                  const status = lessonStatusMap.get(lesson.id) || "locked";

                  // Calculate lesson number
                  const lessonNumber = `${index + 1}`;

                  return (
                    <LessonCard
                      key={lesson.id}
                      lessonNumber={lessonNumber}
                      title={lesson.title}
                      status={status}
                      onClick={() => handleLessonClick(lesson.id)}
                      isActive={status === "in_progress"}
                      duration={lesson.estimatedMinutes}
                      xpReward={lesson.xpReward}
                      description={lesson.description}
                    />
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ChapterAccordion;
