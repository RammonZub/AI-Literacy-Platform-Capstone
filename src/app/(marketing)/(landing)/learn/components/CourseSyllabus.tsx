/**
 * CourseSyllabus Component
 *
 * PURPOSE: Display course syllabus with expandable chapter accordions on course landing pages.
 *
 * DESIGN: Clean, professional, shows all modules by default.
 */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Clock } from "lucide-react";
import { useState } from "react";

// ==========================================
// TYPES
// ==========================================

export interface SyllabusLesson {
  id: string;
  title: string;
  estimatedMinutes: number;
}

export interface SyllabusChapter {
  id: string;
  title: string;
  description?: string;
  lessons: SyllabusLesson[];
}

export interface CourseSyllabusProps {
  chapters: SyllabusChapter[];
}

// ==========================================
// UTILITIES
// ==========================================

function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours > 0 && mins > 0) {
    return `${hours}h ${mins}m`;
  }
  if (hours > 0) {
    return `${hours}h`;
  }
  return `${mins}m`;
}

function calculateTotals(chapters: SyllabusChapter[]) {
  const totalLessons = chapters.reduce((sum, chapter) => sum + chapter.lessons.length, 0);

  const totalMinutes = chapters.reduce((sum, chapter) => {
    return (
      sum + chapter.lessons.reduce((lessonSum, lesson) => lessonSum + lesson.estimatedMinutes, 0)
    );
  }, 0);

  const totalHours = Math.round((totalMinutes / 60) * 10) / 10;

  return { totalLessons, totalHours };
}

// ==========================================
// SUBCOMPONENTS
// ==========================================

interface ChapterItemProps {
  chapter: SyllabusChapter;
  chapterNumber: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function ChapterItem({ chapter, chapterNumber, isExpanded, onToggle }: ChapterItemProps) {
  const lessonCount = chapter.lessons.length;
  const totalChapterMinutes = chapter.lessons.reduce(
    (sum, lesson) => sum + lesson.estimatedMinutes,
    0,
  );

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-4 text-left">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
            Module {chapterNumber}
          </span>
          <h3 className="text-base font-semibold text-gray-900">{chapter.title}</h3>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">
            {lessonCount} lesson{lessonCount !== 1 ? "s" : ""} /{" "}
            {formatDuration(totalChapterMinutes)}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-400"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 py-4 border-t border-gray-100 bg-white">
              {chapter.description && (
                <p className="text-sm text-gray-500 mb-4">{chapter.description}</p>
              )}

              <div className="space-y-2">
                {chapter.lessons.map((lesson, lessonIndex) => {
                  const lessonNumber = `${chapterNumber}.${lessonIndex + 1}`;
                  return (
                    <div
                      key={lesson.id}
                      className="flex justify-between items-center py-2 px-3 rounded hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-gray-400 w-8">{lessonNumber}</span>
                        <span className="text-sm text-gray-700">{lesson.title}</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        <span>{formatDuration(lesson.estimatedMinutes)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function CourseSyllabus({ chapters }: CourseSyllabusProps) {
  const { totalLessons, totalHours } = calculateTotals(chapters);

  // All chapters collapsed by default
  const [expandedChapterIds, setExpandedChapterIds] = useState<Set<string>>(new Set());

  const toggleChapter = (chapterId: string) => {
    setExpandedChapterIds((prev) => {
      const next = new Set(prev);
      if (next.has(chapterId)) {
        next.delete(chapterId);
      } else {
        next.add(chapterId);
      }
      return next;
    });
  };

  return (
    <section id="syllabus" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Course Syllabus</h2>
          <p className="mt-1 text-gray-500">
            {totalLessons} lessons / {totalHours} hours total
          </p>
        </div>

        {/* Chapters List - Show ALL by default */}
        <div className="space-y-3">
          {chapters.map((chapter, index) => (
            <ChapterItem
              key={chapter.id}
              chapter={chapter}
              chapterNumber={index + 1}
              isExpanded={expandedChapterIds.has(chapter.id)}
              onToggle={() => toggleChapter(chapter.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
