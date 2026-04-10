/**
 * Lesson View Page
 *
 * PURPOSE: Full-screen, scroll-snap lesson reader with TypeScript content
 *
 * KEY RESPONSIBILITIES:
 * - Load lesson data from TypeScript content files (@/data/content)
 * - Render slides in a vertical scroll-snap container
 * - Track current slide via IntersectionObserver
 * - Persist progress and support resume / restart
 * - Show completion screen only when user finishes
 */

"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { completeLesson } from "@/app/platform/progress/actions";
import {
  getLessonInitData,
  updateSlideProgressBatch,
} from "@/app/platform/progress/actions/batch-actions";
import PlatformRail from "@/components/layout/PlatformRail";
import { FeedbackWidget } from "@/components/platform/feedback";
import { LessonCompletionScreen } from "@/components/platform/lessons";
import { Lesson as ArticleLessonComponent } from "@/components/platform/lessons/article";
import SlideRenderer from "@/components/platform/lessons/slides/SlideRenderer";
import Button from "@/components/ui/Button";
import { getModuleById } from "@/data/content";
import { platformPaths } from "@/lib/routes/platform";
import { getNextLessonId } from "@/lib/utils/lesson-navigation";
import type { Lesson, LessonSection, LessonSlide } from "@/types/content";

// ==========================================
// TYPESCRIPT CONTENT
// ==========================================

type LocatedLesson = { lesson: Lesson; chapterId: string } | null;

/**
 * Find a lesson + its chapterId within a module (static content fallback)
 */
function locateLesson(moduleId: string, lessonId: string): LocatedLesson {
  const moduleData = getModuleById(moduleId);
  if (!moduleData) return null;

  for (const chapter of moduleData.chapters) {
    const lesson = chapter.lessons.find((l) => l.id === lessonId);
    if (lesson) return { lesson, chapterId: chapter.id };
  }

  return null;
}

// ==========================================
// ARTICLE LESSON COMPONENT
// ==========================================
function ArticleLessonPage({
  lesson,
  moduleId,
  chapterId,
  onComplete,
  quizStatus,
  challengeStatus,
  initialVisibleCount,
  onSectionChange,
}: {
  lesson: Lesson & {
    sections: LessonSection[];
  };
  moduleId: string;
  chapterId: string;
  onComplete: () => void;
  quizStatus?: { passed: boolean; score?: number } | null;
  challengeStatus?: { completed: boolean } | null;
  initialVisibleCount?: number;
  onSectionChange?: (sectionIndex: number) => void;
}) {
  return (
    <ArticleLessonComponent
      sections={lesson.sections}
      moduleId={moduleId}
      lessonId={lesson.id}
      chapterId={chapterId}
      onComplete={onComplete}
      title={lesson.title}
      quiz={lesson.quiz}
      challenge={lesson.challenge}
      quizStatus={quizStatus}
      challengeStatus={challengeStatus}
      initialVisibleCount={initialVisibleCount}
      onSectionChange={onSectionChange}
    />
  );
}

export default function LessonPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);

  const moduleId = params.moduleId as string;
  const lessonId = params.lessonId as string;
  const shouldRestart = searchParams.get("restart") === "true";

  // ==========================================
  // STATE
  // ==========================================

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [chapterId, setChapterId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lessonIdForProgress, setLessonIdForProgress] =
    useState<string>(lessonId);

  // Quiz and challenge status (populated from batch call)
  const [userId, setUserId] = useState<string | null>(null);
  const [quizStatus, setQuizStatus] = useState<{
    passed: boolean;
    score?: number;
  } | null>(null);
  const [challengeStatus, setChallengeStatus] = useState<{
    completed: boolean;
  } | null>(null);

  // Article lesson progress state
  const [articleInitialVisibleCount, setArticleInitialVisibleCount] = useState<
    number | undefined
  >(undefined);
  const [isProgressLoading, setIsProgressLoading] = useState(true);
  const articleUpdateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentArticleSectionRef = useRef<number>(0);

  const hasLoadedProgressRef = useRef(false);
  const updateTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Reset body opacity
  useEffect(() => {
    document.body.style.opacity = "1";
    document.body.style.transition = "";
  }, []);

  const slides: LessonSlide[] = lesson?.slides ?? [];
  const totalSlides = slides.length;
  const isOnLastSlide =
    totalSlides > 0 && currentSlideIndex === totalSlides - 1;

  // ==========================================
  // LOAD LESSON
  // ==========================================

  useEffect(() => {
    const loadLesson = () => {
      try {
        setIsLoading(true);
        setError(null);

        const located = locateLesson(moduleId, lessonId);

        if (located) {
          setLesson(located.lesson);
          setChapterId(located.chapterId);
          setLessonIdForProgress(located.lesson.id);
        } else {
          console.error(
            `Lesson not found: moduleId=${moduleId}, lessonId=${lessonId}`,
          );
          throw new Error(`Lesson not found`);
        }
      } catch (err) {
        console.error("Failed to load lesson:", err);
        setError(
          `Failed to load lesson: ${err instanceof Error ? err.message : "Unknown error"}`,
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadLesson();
  }, [lessonId, moduleId]);

  // ==========================================
  // PROGRESS SAVING (OPTIMIZED - uses cached userId)
  // ==========================================

  const updateProgress = useCallback(
    (slideIndex: number) => {
      if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);

      updateTimeoutRef.current = setTimeout(() => {
        // Use batch version with cached userId to skip re-verification
        updateSlideProgressBatch({
          lessonId: lessonIdForProgress,
          currentSlide: slideIndex,
          userId: userId ?? undefined,
        }).catch(console.error);
      }, 750);
    },
    [lessonIdForProgress, userId],
  );

  useEffect(() => {
    if (!lesson) return;
    updateProgress(currentSlideIndex);
  }, [currentSlideIndex, lesson, updateProgress]);

  const updateArticleProgress = useCallback(
    (sectionIndex: number) => {
      if (showCompletion) return;
      currentArticleSectionRef.current = sectionIndex;

      if (articleUpdateTimeoutRef.current)
        clearTimeout(articleUpdateTimeoutRef.current);

      articleUpdateTimeoutRef.current = setTimeout(() => {
        // Use batch version with cached userId to skip re-verification
        updateSlideProgressBatch({
          lessonId: lessonIdForProgress,
          currentSlide: sectionIndex,
          userId: userId ?? undefined,
        }).catch(console.error);
      }, 750);
    },
    [lessonIdForProgress, showCompletion, userId],
  );

  useEffect(() => {
    const capturedLessonId = lessonIdForProgress;
    return () => {
      if (articleUpdateTimeoutRef.current)
        clearTimeout(articleUpdateTimeoutRef.current);
      const idx = currentArticleSectionRef.current;
      if (idx > 0 && capturedLessonId) {
        void updateSlideProgressBatch({
          lessonId: capturedLessonId,
          currentSlide: idx,
          userId: userId ?? undefined,
        });
      }
    };
  }, [lessonIdForProgress, userId]);

  // ==========================================
  // RESUME / START LESSON (OPTIMIZED - SINGLE BATCH CALL)
  // ==========================================
  // BEFORE: 14-18 DB calls (getLessonProgress + startLesson + getQuizProgress + getTaskProgress)
  // AFTER: 3-4 DB calls (single getLessonInitData call)

  useEffect(() => {
    if (!lesson || hasLoadedProgressRef.current) return;
    hasLoadedProgressRef.current = true;

    const init = async () => {
      let initialCount = 1;

      try {
        // Calculate content count for article lessons
        const contentCount =
          lesson.format === "article" && lesson.sections
            ? lesson.sections.filter(
                (s) =>
                  s.type !== "actionableTask" &&
                  s.type !== "actionableChallenge",
              ).length
            : totalSlides;

        // SINGLE BATCH CALL - returns ALL data needed
        const initData = await getLessonInitData({
          lessonId: lessonIdForProgress,
          moduleId,
          chapterId,
          totalSlides: contentCount,
          shouldRestart,
        });

        // Store userId for optimized progress updates
        setUserId(initData.userId);

        // Set quiz/challenge status from batch response
        if (initData.quizStatus) {
          setQuizStatus(initData.quizStatus);
        }
        if (initData.challengeStatus) {
          setChallengeStatus(initData.challengeStatus);
        }

        // Handle resume position
        const existingProgress = initData.lessonProgress;
        if (!shouldRestart && existingProgress) {
          const isArticle =
            lesson.format === "article" &&
            lesson.sections &&
            lesson.sections.length > 0;
          const contentSectionCount = isArticle
            ? (lesson.sections?.filter(
                (s) =>
                  s.type !== "actionableTask" &&
                  s.type !== "actionableChallenge",
              )?.length ?? 0)
            : 0;

          if (existingProgress.status === "completed") {
            initialCount = isArticle ? contentSectionCount : 1;
          } else if (
            existingProgress.current_slide != null &&
            existingProgress.current_slide > 0
          ) {
            if (isArticle) {
              initialCount = Math.min(
                existingProgress.current_slide + 1,
                contentSectionCount,
              );
            } else {
              // Scroll to last position for slide-based lessons
              setTimeout(() => {
                const targetSlide = Math.min(
                  existingProgress.current_slide as number,
                  totalSlides - 1,
                );
                const el = containerRef.current?.querySelector(
                  `[data-slide-index="${targetSlide}"]`,
                );
                el?.scrollIntoView({ behavior: "smooth" });
              }, 250);
            }
          }
        }
      } catch (err) {
        console.warn("Lesson init error:", err);
      } finally {
        setArticleInitialVisibleCount(initialCount);
        setIsProgressLoading(false);
      }
    };

    void init();
  }, [
    chapterId,
    lesson,
    lessonIdForProgress,
    moduleId,
    shouldRestart,
    totalSlides,
  ]);

  // ==========================================
  // SLIDE TRACKING
  // ==========================================

  useEffect(() => {
    if (!containerRef.current || totalSlides === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = Number(entry.target.getAttribute("data-slide-index"));
          if (!Number.isNaN(index)) setCurrentSlideIndex(index);
        }
      },
      { threshold: 0.5, root: containerRef.current },
    );

    const els = containerRef.current.querySelectorAll("[data-slide-index]");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [totalSlides]);

  // ==========================================
  // HANDLERS
  // ==========================================

  const handleExit = useCallback(() => {
    router.push(platformPaths.module(moduleId));
  }, [router, moduleId]);

  const handleComplete = useCallback(async () => {
    if (!lesson || isCompleting) return;

    setIsCompleting(true);

    try {
      const xp = 50;
      const quizId = lesson.quiz?.id;
      const challengeId = lesson.challenge?.id;
      const isArticle =
        lesson.format === "article" &&
        lesson.sections &&
        lesson.sections.length > 0;

      const result = await completeLesson({
        lessonId: lessonIdForProgress,
        moduleId,
        chapterId,
        xp,
        quizId,
        challengeId,
      });

      if (result && "success" in result && result.success === false) {
        console.error("Completion blocked:", result.error);
        setIsCompleting(false);
        return;
      }

      if (!isArticle) {
        setShowCompletion(true);
      }
    } catch (err) {
      console.error("Completion error:", err);
    } finally {
      setIsCompleting(false);
    }
  }, [chapterId, isCompleting, lesson, lessonIdForProgress, moduleId]);

  // ==========================================
  // LOADING STATE
  // ==========================================

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
      </div>
    );
  }

  // ==========================================
  // ERROR STATE
  // ==========================================

  if (error || !lesson) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-foreground font-semibold mb-2">Error</p>
          <p className="text-sm text-muted-foreground mb-6">
            {error || "Lesson not found"}
          </p>
          <Button variant="secondary" onClick={handleExit}>
            Back to module
          </Button>
        </div>
      </div>
    );
  }

  // ==========================================
  // FORMAT DETECTION
  // ==========================================
  const isArticleLesson =
    lesson?.format === "article" &&
    lesson.sections &&
    lesson.sections.length > 0;

  if (isArticleLesson) {
    if (isProgressLoading) {
      return (
        <div className="fixed inset-0 bg-background flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
        </div>
      );
    }

    return (
      <ArticleLessonPage
        key={`${lesson.id}-${articleInitialVisibleCount ?? 1}`}
        lesson={
          lesson as Lesson & {
            sections: LessonSection[];
          }
        }
        moduleId={moduleId}
        chapterId={chapterId}
        onComplete={handleComplete}
        quizStatus={quizStatus}
        challengeStatus={challengeStatus}
        initialVisibleCount={articleInitialVisibleCount ?? 1}
        onSectionChange={updateArticleProgress}
      />
    );
  }

  // ==========================================
  // COMPLETION SCREEN
  // ==========================================

  if (showCompletion) {
    const nextLessonId = getNextLessonId(moduleId, lessonIdForProgress);
    return (
      <>
        <LessonCompletionScreen
          lessonTitle={lesson.title}
          xpEarned={50}
          moduleId={moduleId}
          nextLessonId={nextLessonId}
          onContinue={() =>
            router.push(
              nextLessonId
                ? platformPaths.lesson(moduleId, nextLessonId)
                : platformPaths.module(moduleId),
            )
          }
        />
        {/* Feedback widget - shows popup based on triggers */}
        <FeedbackWidget
          triggerOnMount={true}
          lessonId={lessonIdForProgress}
          moduleId={moduleId}
        />
      </>
    );
  }

  // ==========================================
  // MAIN RENDER (Slide Format)
  // ==========================================

  return (
    <div className="lesson-view-active fixed inset-0 bg-background flex flex-col md:justify-center">
      {/* Constrained Container on Desktop */}
      <PlatformRail variant="lesson" className="h-full px-0 md:h-auto md:px-4">
        <div className="w-full h-screen md:h-[calc(100vh-2rem)] md:my-4 md:rounded-3xl md:overflow-hidden md:border md:border-border md:shadow-2xl relative bg-white">
          {/* Exit Button - Updated for Modern Clean */}
          <div className="fixed top-4 right-4 z-50 md:absolute md:top-6 md:right-6">
            <Button
              variant="secondary"
              size="icon"
              onClick={handleExit}
              className="rounded-full h-10 w-10 bg-white/80 backdrop-blur-sm border-border shadow-sm hover:bg-white hover:shadow-md"
              aria-label="Exit lesson"
            >
              <X className="w-5 h-5 text-foreground" />
            </Button>
          </div>

          {/* Scrollable Container */}
          <div
            ref={containerRef}
            className="h-full overflow-y-auto snap-y snap-mandatory scroll-smooth pb-24 scroll-pb-24 no-scrollbar"
          >
            {slides.map((slide, idx) => (
              <motion.section
                key={slide.id}
                data-slide-index={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: Math.min(idx * 0.1, 0.3),
                }}
                className="h-screen w-full snap-start relative flex flex-col"
              >
                <SlideRenderer
                  slide={slide}
                  currentSlide={idx + 1}
                  totalSlides={totalSlides}
                />

                {idx < totalSlides - 1 && (
                  <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce opacity-30 pointer-events-none">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                )}
              </motion.section>
            ))}
          </div>

          {/* Finish button (only on last slide) */}
          {isOnLastSlide && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-background via-background/90 to-transparent">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => void handleComplete()}
              >
                Finish Lesson
              </Button>
            </div>
          )}
        </div>
      </PlatformRail>
    </div>
  );
}
