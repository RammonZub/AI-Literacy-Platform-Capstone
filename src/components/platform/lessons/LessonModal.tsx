/**
 * Lesson Modal Component
 *
 * PURPOSE: Slides up from bottom to show lesson overview before starting
 *
 * CONTEXT: Modal displays lesson information when user clicks on a lesson node.
 * Redesigned with image header and clean, minimal layout.
 *
 * KEY RESPONSIBILITIES:
 * - Display lesson header with AI-themed gradient and title overlay
 * - Show lesson metadata (read time, ideas count)
 * - Display lesson preview/listing without black circle icons
 * - Provide start/restart/continue buttons
 *
 * IMPLEMENTATION NOTES:
 * - Full-width image header at top with gradient background
 * - Lesson title overlay on the image (not below)
 * - No black circle icons - use clean colored badges
 * - Theme colors for badges (soft red, gem blue)
 * - Simplified, minimal layout
 */

"use client";

import { BookOpen, Clock, Lightbulb, Play, Star, Target, X, Zap } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { platformPaths } from "@/lib/routes/platform";
import { getFallbackImage } from "@/lib/utils/lesson-images";
import type { Lesson, LessonSlide } from "@/types/content";
import type { LessonStatus } from "@/types/progress";

/**
 * Lesson data structure from the API
 * Matches the response from /api/modules/[moduleId]
 */
export interface LessonFromAPI {
  id: string;
  title: string;
  chapterId: string;
  description: string;
  estimatedMinutes: number;
  xpReward: number;
  status: string;
  slides: LessonSlide[]; // Full slides array from Notion
}

interface LessonModalProps {
  lesson: Lesson | LessonFromAPI; // Accept either type
  moduleId: string;
  isOpen: boolean;
  onClose: () => void;
  status?: LessonStatus;
}

export default function LessonModal({
  lesson,
  moduleId,
  isOpen,
  onClose,
  status = "unlocked",
}: LessonModalProps) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const timeoutId = window.setTimeout(() => setIsVisible(true), 10);
    return () => window.clearTimeout(timeoutId);
  }, [isOpen]);

  const handleStartReading = () => {
    // Navigate immediately (skip body opacity transition delay)
    // If lesson is completed and user clicks "Review", restart from beginning
    if (status === "completed") {
      router.push(platformPaths.lesson(moduleId, lesson.id, { restart: true }));
    } else {
      // Otherwise continue from where they left off
      router.push(platformPaths.lesson(moduleId, lesson.id));
    }
  };

  if (!isOpen) return null;

  // Get cover slide data (handle both article and slide formats)
  const slides = lesson.slides || [];
  const coverSlide = slides.length > 0 ? slides[0] : null;
  // Calculate stats
  const readTime = lesson.estimatedMinutes || 5;
  const ideaCount = Math.max(1, slides.length - 1); // Exclude cover

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-200 transition-opacity duration-300 backdrop-blur-sm ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`fixed bottom-0 left-1/2 -translate-x-1/2 z-201 w-full max-w-md bg-background rounded-t-3xl overflow-hidden transition-transform duration-500 ease-out ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          height: "85vh",
          boxShadow: "0 -10px 40px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-colors hover:bg-black/40"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto pb-32 no-scrollbar">
          {/* ==========================================
              HEADER IMAGE (User requested to keep this style)
              ========================================== */}
          <div className="relative h-72 w-full">
            <Image
              src={getFallbackImage("abstract")}
              alt={lesson.title}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-background via-black/40 to-transparent" />

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pt-12">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-white uppercase bg-primary/90 rounded-full backdrop-blur-sm shadow-sm">
                Lesson {"order" in lesson ? lesson.order : 1}
              </span>
              <h1 className="text-3xl font-bold font-serif text-white leading-tight drop-shadow-sm">
                {lesson.title}
              </h1>
            </div>
          </div>

          {/* ==========================================
              CONTENT BODY
              ========================================== */}
          <div className="px-6 pt-2">
            {/* Metadata Row */}
            <div className="flex items-center gap-6 mb-8 text-sm font-medium text-muted-foreground border-b border-border/50 pb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                <span>{ideaCount} Key Ideas</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-warning fill-warning" />
                <span>4.9</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-foreground mb-3">About this lesson</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {coverSlide?.content?.body ||
                  "Learn the fundamentals of AI and how to apply them to your daily workflow. This lesson covers key concepts, practical examples, and actionable steps to get started."}
              </p>
            </div>

            {/* Key Insights / What You'll Learn */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-foreground mb-4">Key Insights</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Master the Basics</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                      Understand the core mechanisms behind AI tools.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Practical Application</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                      Learn specific prompts for your daily tasks.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Future Proofing</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                      Stay ahead of the curve in your industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapter List */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">What&apos;s Inside</h3>
              <div className="space-y-2">
                {slides.slice(1).map((slide, index) => (
                  <div
                    key={slide.id}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-colors"
                  >
                    <span className="text-lg font-bold text-muted-foreground/50 w-6 text-center font-mono">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">
                        {slide.content?.title || `Part ${index + 1}`}
                      </p>
                      {slide.content?.body && (
                        <p className="text-xs text-muted-foreground truncate mt-0.5">
                          {slide.content.body}
                        </p>
                      )}
                    </div>
                    {/* Visual indicator dot */}
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary/30" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            FLOATING ACTION BAR
            ========================================== */}
        <div className="absolute bottom-8 left-0 right-0 px-6 flex justify-center z-50 pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-2 p-1.5 bg-foreground rounded-full shadow-2xl w-full max-w-sm mx-auto backdrop-blur-md">
            {/* Read Button */}
            <button
              onClick={handleStartReading}
              className="flex-1 flex items-center justify-center gap-2 bg-background text-foreground font-bold py-3.5 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
            >
              <BookOpen className="w-5 h-5" />
              <span>{status === "completed" ? "Review Lesson" : "Read Lesson"}</span>
            </button>

            {/* Play Button (Placeholder for audio) */}
            <button
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-background hover:bg-white/20 transition-colors"
              aria-label="Play Audio"
            >
              <Play className="w-5 h-5 fill-current" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
