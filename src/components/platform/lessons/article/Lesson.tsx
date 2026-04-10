/**
 * Lesson
 *
 * PURPOSE: Main container component for lessons (article-style)
 *
 * CONTEXT: Lessons use an incremental reveal approach, inspired by Coursiv's design.
 * Content is revealed below previous sections when the user clicks "Continue",
 * rather than swiping through full-page slides.
 *
 * KEY RESPONSIBILITIES:
 * - Manage which sections are currently visible
 * - Handle "Continue" button clicks to reveal next section
 * - Auto-scroll to newly revealed content
 * - Render progress bar at top
 * - Handle quiz submissions
 * - Track lesson completion
 *
 * IMPLEMENTATION NOTES:
 * - Sections are revealed one at a time by incrementing visibleCount
 * - "Continue" button appears after each section (except last)
 * - Smooth scroll animation when new content is revealed
 * - Progress bar updates as sections are revealed
 *
 * BEHAVIOR:
 * 1. Lesson starts with only first section visible
 * 2. User reads content, clicks "Continue"
 * 3. Next section appears below with smooth animation
 * 4. Page auto-scrolls to new content
 * 5. Process repeats until all sections are visible
 * 6. Last section shows "Complete" or similar action
 *
 * DEPENDENCIES:
 * - useState: For managing visible sections count
 * - useRef: For section and CTA scroll targets
 * - useEffect: For auto-scroll behavior
 * - LessonSection: Renders individual sections
 * - ContinueButton: Primary CTA
 *
 * @see /app/(platform)/module/[moduleId]/lesson/[lessonId]/page.tsx - Route component
 */

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { recordCheckpointAttempt } from "@/app/platform/progress/actions";
import { getFeedbackStats } from "@/app/platform/progress/actions/feedback-actions";
import PlatformRail from "@/components/layout/PlatformRail";
import { useFeedbackTrigger } from "@/lib/hooks/useFeedbackTrigger";
import { platformPaths } from "@/lib/routes/platform";
import {
  getNextLessonId,
  getNextLessonInfo,
} from "@/lib/utils/lesson-navigation";
import FeedbackPopup from "../../feedback/FeedbackPopup";
import { ContinueButton } from "./ContinueButton";
import { FeedbackFlag } from "./FeedbackFlag";
import { FeedbackModal } from "./FeedbackModal";
import { LessonCompletionOverlay } from "./LessonCompletionOverlay";
import { LessonCTAs } from "./LessonCTAs";
import type { LessonSection as LessonSectionType } from "./LessonSection";
import type { LessonSectionType as LessonSectionVariant } from "./LessonSection";
import { LessonSection } from "./LessonSection";
import { NextLessonHookModal } from "./NextLessonHookModal";

interface LessonProps {
  /** Array of lesson sections */
  sections: LessonSectionType[];

  /** Module ID for navigation */
  moduleId: string;

  /** Lesson ID for tracking */
  lessonId: string;

  /** Chapter ID (telemetry + progress) */
  chapterId?: string;

  /** Callback when lesson is completed */
  onComplete?: () => void;

  /** Lesson title (for feedback and completion) */
  title?: string;

  /** Optional quiz data (new architecture) */
  quiz?: {
    id: string;
    title?: string;
    description?: string;
    questions: Array<{
      id: string;
      question: string;
      options: string[];
      correctAnswer: number;
      explanation: string;
      hint?: string;
    }>;
    passingScore?: number;
    xpReward?: number;
    retryAllowed?: boolean;
  };

  /** Optional challenge data (new architecture) */
  challenge?: {
    id: string;
    title: string;
    purpose: string;
    instructions: string[];
    deliverable: string;
    estimatedTime?: string;
    starterPrompt?: string;
    successCriteria: string[];
    xpReward?: number;
    level?: string;
    skill?: string;
    focus?: string;
  };

  /** Quiz completion status */
  quizStatus?: {
    passed: boolean;
    score?: number;
  } | null;

  /** Challenge completion status */
  challengeStatus?: {
    completed: boolean;
  } | null;

  /** Initial number of visible sections (for restoring saved progress) */
  initialVisibleCount?: number;

  /** Callback when section visibility changes (for progress tracking) */
  onSectionChange?: (sectionIndex: number) => void;
}

/**
 * Lesson main component
 *
 * Manages the state of which sections are visible and handles
 * the incremental reveal behavior.
 *
 * @example
 * const sections = [
 *   { id: "1", type: "text", content: { paragraphs: ["Intro"] } },
 *   { id: "2", type: "textWithBullets", content: {...} },
 *   { id: "3", type: "quiz", content: {...} }
 * ]
 * <Lesson
 *   sections={sections}
 *   moduleId="module1-foundation"
 *   lessonId="lesson-1"
 *   onComplete={() => router.push('/module/module1-foundation')}
 * />
 */
export function Lesson({
  sections,
  moduleId,
  lessonId,
  chapterId = "",
  onComplete,
  title,
  quiz,
  challenge,
  quizStatus,
  challengeStatus,
  initialVisibleCount = 1,
  onSectionChange,
}: LessonProps) {
  const router = useRouter();

  // Track how many sections are currently visible.
  // NOTE: Parent controls restore by remounting this component with a key when
  // initialVisibleCount becomes available from async progress load.
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  // Controls when the inline CTA section (quiz card, challenge card, nav buttons) is shown.
  // Becomes true when user clicks Continue on the final content section.
  // Lesson is marked complete (via onComplete) at the same moment — fire-and-forget.
  const [showCTA, setShowCTA] = useState(false);

  // Track quiz submissions (for analytics/validation)
  const [quizResults, setQuizResults] = useState<Record<string, boolean>>({});

  // Track feedback modal visibility (the flag-based feedback modal)
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  // ─── COMPLETION OVERLAY STATE ───
  // Show celebration overlay when lesson is first completed
  const [showCompletionOverlay, setShowCompletionOverlay] = useState(false);

  // ─── FEEDBACK POPUP STATE ───
  // Show feedback popup after completion overlay or on navigation actions
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);
  const [feedbackStats, setFeedbackStats] = useState<{
    totalLessonsCompleted: number;
    currentStreak: number;
    lessonsCompletedToday: number;
  } | null>(null);

  // ─── NEXT LESSON HOOK MODAL STATE ───
  // Show teaser modal before navigating to next lesson
  const [showNextLessonHook, setShowNextLessonHook] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<
    "next" | "module" | null
  >(null);

  const sectionRefs = useRef(new Map<string, HTMLDivElement | null>());
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const pendingScrollTargetRef = useRef<
    { type: "section"; id: string } | { type: "cta" } | null
  >(null);

  /**
   * Auto-scroll to newly revealed content
   * Targets the newly revealed section directly so long sections remain
   * manually readable instead of jumping by an arbitrary viewport amount.
   */
  useEffect(() => {
    const pendingTarget = pendingScrollTargetRef.current;
    if (!pendingTarget) return;

    const scrollToSection = () => {
      const targetElement =
        pendingTarget.type === "cta"
          ? ctaRef.current
          : sectionRefs.current.get(pendingTarget.id);

      targetElement?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      pendingScrollTargetRef.current = null;
    };

    let frameId = 0;
    let nestedFrameId = 0;

    frameId = window.requestAnimationFrame(() => {
      nestedFrameId = window.requestAnimationFrame(scrollToSection);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      window.cancelAnimationFrame(nestedFrameId);
    };
  }, [visibleCount, showCTA]);

  /**
   * Notify parent when section visibility changes
   * Used for progress persistence
   */
  useEffect(() => {
    // visibleCount is 1-indexed for display (1 = first section visible)
    // Convert to 0-indexed for storage (0 = first section)
    onSectionChange?.(visibleCount - 1);
  }, [visibleCount, onSectionChange]);

  // ─── FEEDBACK STATS FETCHING ───
  // Fetch user stats for feedback trigger logic when CTA is shown
  useEffect(() => {
    if (!showCTA) return;

    async function fetchStats() {
      try {
        const stats = await getFeedbackStats();
        setFeedbackStats(stats);
      } catch (error) {
        console.error("Failed to fetch feedback stats:", error);
      }
    }

    fetchStats();
  }, [showCTA]);

  // ─── FEEDBACK TRIGGER HOOK ───
  const { showFeedback, trigger, onFeedbackSubmitted, onFeedbackDismissed } =
    useFeedbackTrigger({
      totalLessonsCompleted: feedbackStats?.totalLessonsCompleted || 0,
      currentStreak: feedbackStats?.currentStreak || 0,
      lessonsCompletedToday: feedbackStats?.lessonsCompletedToday || 0,
    });

  /**
   * Handle "Continue" button click.
   *
   * While there are unrevealed content sections → reveals next section.
   * On the FINAL Continue click (all content revealed) → fires lesson
   * completion (fire-and-forget via onComplete) and shows the COMPLETION OVERLAY.
   * The overlay auto-dismisses and shows the CTA section.
   */
  const handleContinue = () => {
    const contentSectionCount = sections.filter(
      (s) => s.type !== "actionableTask" && s.type !== "actionableChallenge",
    ).length;

    if (visibleCount < contentSectionCount) {
      const nextSection = contentSections[visibleCount];
      if (nextSection) {
        pendingScrollTargetRef.current = {
          type: "section",
          id: nextSection.id,
        };
      }
      setVisibleCount((prev) => prev + 1);
    } else {
      // All content revealed — mark lesson complete and show completion overlay
      onComplete?.();
      setShowCompletionOverlay(true);
    }
  };

  /**
   * Handle completion overlay dismiss - shows CTA section
   */
  const handleCompletionOverlayDismiss = () => {
    pendingScrollTargetRef.current = { type: "cta" };
    setShowCompletionOverlay(false);
    setShowCTA(true);
  };

  /**
   * Handle "Next Lesson" click - shows hook modal first
   */
  const handleNextLessonClick = () => {
    setShowNextLessonHook(true);
    setPendingNavigation("next");
  };

  /**
   * Handle "Complete" (Back to module) click - shows feedback popup then navigates
   */
  const handleCompleteClick = () => {
    setPendingNavigation("module");
    // Show feedback popup if trigger conditions are met
    if (showFeedback && trigger) {
      setShowFeedbackPopup(true);
    } else {
      // No feedback to show, navigate directly
      router.push(platformPaths.module(moduleId));
    }
  };

  /**
   * Handle hook modal continue - shows feedback popup then navigates
   */
  const handleHookModalContinue = () => {
    setShowNextLessonHook(false);
    // Show feedback popup if trigger conditions are met
    if (showFeedback && trigger) {
      setShowFeedbackPopup(true);
    } else {
      // No feedback to show, navigate directly
      navigateToNextLesson();
    }
  };

  /**
   * Handle hook modal dismiss - just close the modal
   */
  const handleHookModalDismiss = () => {
    setShowNextLessonHook(false);
    setPendingNavigation(null);
  };

  /**
   * Navigate to next lesson
   */
  const navigateToNextLesson = () => {
    const nextId = getNextLessonId(moduleId, lessonId);
    if (nextId) {
      router.push(platformPaths.lesson(moduleId, nextId));
    } else {
      router.push(platformPaths.module(moduleId));
    }
  };

  /**
   * Handle feedback popup submitted
   */
  const handleFeedbackSubmitted = () => {
    onFeedbackSubmitted();
    setShowFeedbackPopup(false);
    // Navigate after feedback
    if (pendingNavigation === "next") {
      navigateToNextLesson();
    } else if (pendingNavigation === "module") {
      router.push(platformPaths.module(moduleId));
    }
    setPendingNavigation(null);
  };

  /**
   * Handle feedback popup dismissed
   */
  const handleFeedbackDismissed = () => {
    onFeedbackDismissed();
    setShowFeedbackPopup(false);
    // Navigate after dismiss
    if (pendingNavigation === "next") {
      navigateToNextLesson();
    } else if (pendingNavigation === "module") {
      router.push(platformPaths.module(moduleId));
    }
    setPendingNavigation(null);
  };

  /**
   * Handle quiz submission
   */
  const handleQuizSubmit = (
    sectionId: string,
    sectionType: LessonSectionVariant,
    isCorrect: boolean,
  ) => {
    if (sectionType === "checkpoint" && chapterId) {
      void recordCheckpointAttempt({
        lessonId,
        moduleId,
        chapterId,
        sectionId,
        correct: isCorrect,
      });
    }
    setQuizResults((prev) => ({
      ...prev,
      [sectionId]: isCorrect,
    }));
  };

  // Content sections only (excludes inline challenge/task sections)
  const contentSections = sections.filter(
    (s) => s.type !== "actionableTask" && s.type !== "actionableChallenge",
  );
  const hasInlineChallenge = sections.some(
    (s) => s.type === "actionableTask" || s.type === "actionableChallenge",
  );

  // Progress: 100% once CTA is shown, otherwise proportional to revealed sections
  const progress = showCTA
    ? 100
    : (visibleCount / contentSections.length) * 100;

  // Get the currently visible sections (content only)
  const visibleSections = contentSections.slice(0, visibleCount);

  // Block Continue if the last visible section is an unanswered inline quiz
  const lastSection = visibleSections[visibleSections.length - 1];
  const isLastSectionQuiz = lastSection?.type === "quiz";
  const lastQuizResult = lastSection ? quizResults[lastSection.id] : undefined;
  const canContinue = !isLastSectionQuiz || lastQuizResult !== undefined;

  // Show sticky Continue button while CTA section hasn't appeared yet and quiz gate isn't blocking
  const showContinueButton = !showCTA && canContinue;

  // Next lesson ID used by LessonCTAs for navigation
  const nextLessonId = getNextLessonId(moduleId, lessonId);

  return (
    <>
      {/* Main lesson container */}
      <div className="min-h-screen bg-white">
        {/* Sticky header with progress bar and close button */}
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
          <PlatformRail variant="lesson">
            <div className="flex items-center justify-between py-3">
              {/* Close button */}
              <button
                onClick={() => router.push(platformPaths.module(moduleId))}
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Close lesson"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Progress bar - thicker and animated */}
              <div className="flex-1 mx-4">
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#007AFF] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Spacer to balance layout */}
              <div className="w-5" />
            </div>
          </PlatformRail>
        </header>

        {/* Main content area follows the document scroll so long sections stay readable. */}
        <main>
          <PlatformRail
            variant="lesson"
            className="pt-6 pb-40 md:pt-8 md:pb-40"
          >
            {/* Hero media should come from lesson sections so article content has one source of truth. */}
            <AnimatePresence mode="popLayout">
              {visibleSections.map((section, index) => {
                const isLastVisible = index === visibleSections.length - 1;

                return (
                  <motion.div
                    key={section.id}
                    data-section-index={index}
                    ref={(element) => {
                      sectionRefs.current.set(section.id, element);
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                      delay: isLastVisible ? 0.05 : 0,
                    }}
                    className="mb-4 scroll-mt-24 pointer-events-auto"
                  >
                    <LessonSection
                      section={section}
                      onQuizSubmit={(isCorrect) =>
                        handleQuizSubmit(section.id, section.type, isCorrect)
                      }
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Inline CTA section — appears only after the final Continue click */}
            {showCTA && (
              <motion.div
                ref={ctaRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="scroll-mt-24"
              >
                <LessonCTAs
                  moduleId={moduleId}
                  lessonId={lessonId}
                  quiz={quiz}
                  challenge={challenge}
                  quizStatus={quizStatus}
                  challengeStatus={challengeStatus}
                  hasInlineChallenge={hasInlineChallenge}
                  nextLessonId={nextLessonId}
                  onNextLessonClick={handleNextLessonClick}
                  onCompleteClick={handleCompleteClick}
                />
              </motion.div>
            )}
          </PlatformRail>
        </main>

        {/* Sticky Continue button at bottom - with gradient fade */}
        <AnimatePresence>
          {showContinueButton && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed bottom-0 left-0 right-0 z-40"
            >
              {/* Gradient fade to prevent text cut-off */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent -top-12 h-32 pointer-events-none" />

              <PlatformRail
                variant="lesson"
                className="relative px-6 pt-6 pb-8"
              >
                <ContinueButton onClick={handleContinue}>
                  Continue
                </ContinueButton>
              </PlatformRail>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Feedback system - floating flag and modal */}
      <FeedbackFlag
        onClick={() => setShowFeedbackModal(true)}
        className={showCTA ? "hidden" : ""}
      />

      <FeedbackModal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        lessonTitle={title || "Lesson"}
        lessonId={lessonId}
      />

      {/* ─── COMPLETION OVERLAY ─── */}
      <AnimatePresence>
        {showCompletionOverlay && (
          <LessonCompletionOverlay
            lessonTitle={title || "Lesson"}
            xpEarned={50}
            onDismiss={handleCompletionOverlayDismiss}
            autoDismissDelay={2500}
          />
        )}
      </AnimatePresence>

      {/* ─── NEXT LESSON HOOK MODAL ─── */}
      <AnimatePresence>
        {showNextLessonHook && (
          <NextLessonHookModal
            nextLessonTitle={
              getNextLessonInfo(moduleId, lessonId)?.title || "Next Lesson"
            }
            onContinue={handleHookModalContinue}
            onDismiss={handleHookModalDismiss}
          />
        )}
      </AnimatePresence>

      {/* ─── FEEDBACK POPUP ─── */}
      <AnimatePresence>
        {showFeedbackPopup && trigger && (
          <FeedbackPopup
            question={trigger.question}
            triggerType={trigger.type}
            lessonId={lessonId}
            moduleId={moduleId}
            onSubmitted={handleFeedbackSubmitted}
            onDismiss={handleFeedbackDismissed}
          />
        )}
      </AnimatePresence>
    </>
  );
}
