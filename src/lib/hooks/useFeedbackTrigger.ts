/**
 * useFeedbackTrigger Hook
 *
 * PURPOSE: Determine when to show feedback popups based on lesson/streak milestones
 *
 * TRIGGERS:
 * - Lesson milestones: First lesson of day, then 5, 10, 30 total lessons
 * - Streak milestones: 1, 3, 7, 10, 14 day streaks
 * - Module completion: After completing any module
 *
 * COOLDOWN RULES:
 * - After submitting: Don't show again for 72 hours
 * - After dismissing: Don't show again for 168 hours (7 days)
 * - Max 1 popup per session
 *
 * STORAGE:
 * - localStorage: Cooldown timestamps
 * - sessionStorage: Per-session popup tracking
 *
 * @created 2026-03-01
 */

import { useCallback, useEffect, useState } from "react";

// ========================================
// TYPES
// ========================================

export type FeedbackTriggerType =
  | "first_lesson_today"
  | "lesson_milestone"
  | "streak_milestone"
  | "module_completion"
  | "general_support";

export interface FeedbackTrigger {
  type: FeedbackTriggerType;
  milestone?: number; // e.g., 5 for 5 lessons, 7 for 7-day streak
  question: string;
  shouldShow: boolean;
}

interface UseFeedbackTriggerProps {
  /** Total lessons completed by user */
  totalLessonsCompleted: number;
  /** Current streak in days */
  currentStreak: number;
  /** Lessons completed today */
  lessonsCompletedToday: number;
  /** Whether user just completed a module */
  justCompletedModule?: boolean;
  /** Module name if just completed */
  moduleName?: string;
}

interface UseFeedbackTriggerReturn {
  /** Whether to show feedback popup */
  showFeedback: boolean;
  /** Current trigger info */
  trigger: FeedbackTrigger | null;
  /** Call when feedback is submitted */
  onFeedbackSubmitted: () => void;
  /** Call when feedback is dismissed */
  onFeedbackDismissed: () => void;
  /** Manually trigger feedback (e.g., after module completion) */
  triggerFeedback: (type: FeedbackTriggerType, milestone?: number, moduleName?: string) => void;
}

// ========================================
// CONSTANTS
// ========================================

const LESSON_MILESTONES = [5, 10, 30];
const STREAK_MILESTONES = [1, 3, 7, 10, 14];

const COOLDOWN_AFTER_SUBMIT_HOURS = 72;
const COOLDOWN_AFTER_DISMISS_HOURS = 168;

const STORAGE_KEYS = {
  LAST_SUBMIT: "feedback_last_submit",
  LAST_DISMISS: "feedback_last_dismiss",
  SHOWN_MILESTONES: "feedback_shown_milestones",
  SESSION_SHOWN: "feedback_session_shown",
};

// ========================================
// QUESTIONS
// ========================================

const QUESTIONS = {
  first_lesson_today: "How was today's lesson?",
  lesson_milestone: (count: number) =>
    `You've completed ${count} lessons! How's the experience so far?`,
  streak_milestone: (days: number) => `You're on a ${days}-day streak! What keeps you coming back?`,
  module_completion: (name: string) => `You finished "${name}"! What did you think?`,
};

// ========================================
// HELPER FUNCTIONS
// ========================================

function isCooldownActive(key: string, cooldownHours: number): boolean {
  if (typeof window === "undefined") return false;

  const timestamp = localStorage.getItem(key);
  if (!timestamp) return false;

  const lastTime = new Date(timestamp).getTime();
  const cooldownMs = cooldownHours * 60 * 60 * 1000;

  return Date.now() - lastTime < cooldownMs;
}

function setCooldownTimestamp(key: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, new Date().toISOString());
}

function hasShownMilestone(type: string, milestone: number): boolean {
  if (typeof window === "undefined") return false;

  const shown = localStorage.getItem(STORAGE_KEYS.SHOWN_MILESTONES);
  if (!shown) return false;

  try {
    const parsed = JSON.parse(shown);
    return parsed.includes(`${type}_${milestone}`);
  } catch {
    return false;
  }
}

function markMilestoneShown(type: string, milestone: number): void {
  if (typeof window === "undefined") return;

  const shown = localStorage.getItem(STORAGE_KEYS.SHOWN_MILESTONES);
  let parsed: string[] = [];

  try {
    parsed = shown ? JSON.parse(shown) : [];
  } catch {
    parsed = [];
  }

  const key = `${type}_${milestone}`;
  if (!parsed.includes(key)) {
    parsed.push(key);
    localStorage.setItem(STORAGE_KEYS.SHOWN_MILESTONES, JSON.stringify(parsed));
  }
}

function hasShownInSession(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(STORAGE_KEYS.SESSION_SHOWN) === "true";
}

function markShownInSession(): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(STORAGE_KEYS.SESSION_SHOWN, "true");
}

// ========================================
// MAIN HOOK
// ========================================

export function useFeedbackTrigger({
  totalLessonsCompleted,
  currentStreak,
  lessonsCompletedToday,
  justCompletedModule = false,
  moduleName,
}: UseFeedbackTriggerProps): UseFeedbackTriggerReturn {
  const [showFeedback, setShowFeedback] = useState(false);
  const [trigger, setTrigger] = useState<FeedbackTrigger | null>(null);

  // Check if we're in cooldown
  const isInSubmitCooldown = isCooldownActive(
    STORAGE_KEYS.LAST_SUBMIT,
    COOLDOWN_AFTER_SUBMIT_HOURS,
  );
  const isInDismissCooldown = isCooldownActive(
    STORAGE_KEYS.LAST_DISMISS,
    COOLDOWN_AFTER_DISMISS_HOURS,
  );
  const alreadyShownInSession = hasShownInSession();

  // Determine which trigger to show
  const checkTriggers = useCallback(() => {
    // Skip if in cooldown or already shown this session
    if (isInSubmitCooldown || isInDismissCooldown || alreadyShownInSession) {
      return null;
    }

    // Priority 1: Module completion (highest priority - celebration moment)
    if (justCompletedModule && moduleName) {
      return {
        type: "module_completion" as FeedbackTriggerType,
        question: QUESTIONS.module_completion(moduleName),
        shouldShow: true,
      };
    }

    // Priority 2: First lesson of the day
    if (lessonsCompletedToday === 1) {
      return {
        type: "first_lesson_today" as FeedbackTriggerType,
        question: QUESTIONS.first_lesson_today,
        shouldShow: true,
      };
    }

    // Priority 3: Lesson milestones
    for (const milestone of LESSON_MILESTONES) {
      if (totalLessonsCompleted === milestone && !hasShownMilestone("lesson", milestone)) {
        return {
          type: "lesson_milestone" as FeedbackTriggerType,
          milestone,
          question: QUESTIONS.lesson_milestone(milestone),
          shouldShow: true,
        };
      }
    }

    // Priority 4: Streak milestones
    for (const milestone of STREAK_MILESTONES) {
      if (currentStreak === milestone && !hasShownMilestone("streak", milestone)) {
        return {
          type: "streak_milestone" as FeedbackTriggerType,
          milestone,
          question: QUESTIONS.streak_milestone(milestone),
          shouldShow: true,
        };
      }
    }

    return null;
  }, [
    isInSubmitCooldown,
    isInDismissCooldown,
    alreadyShownInSession,
    justCompletedModule,
    moduleName,
    lessonsCompletedToday,
    totalLessonsCompleted,
    currentStreak,
  ]);

  // Check triggers on mount and when dependencies change
  useEffect(() => {
    const detectedTrigger = checkTriggers();
    if (detectedTrigger) {
      const timer = window.setTimeout(() => {
        setTrigger(detectedTrigger);
        setShowFeedback(true);
        markShownInSession();

        if (detectedTrigger.milestone) {
          const type = detectedTrigger.type === "lesson_milestone" ? "lesson" : "streak";
          markMilestoneShown(type, detectedTrigger.milestone);
        }
      }, 0);

      return () => window.clearTimeout(timer);
    }
  }, [checkTriggers]);

  // Handlers
  const onFeedbackSubmitted = useCallback(() => {
    setCooldownTimestamp(STORAGE_KEYS.LAST_SUBMIT);
    setShowFeedback(false);
    setTrigger(null);
  }, []);

  const onFeedbackDismissed = useCallback(() => {
    setCooldownTimestamp(STORAGE_KEYS.LAST_DISMISS);
    setShowFeedback(false);
    setTrigger(null);
  }, []);

  const triggerFeedback = useCallback(
    (type: FeedbackTriggerType, milestone?: number, name?: string) => {
      if (isInSubmitCooldown || isInDismissCooldown || alreadyShownInSession) {
        return;
      }

      let question: string;
      switch (type) {
        case "module_completion":
          question = QUESTIONS.module_completion(name || "this module");
          break;
        case "lesson_milestone":
          question = QUESTIONS.lesson_milestone(milestone || 0);
          break;
        case "streak_milestone":
          question = QUESTIONS.streak_milestone(milestone || 0);
          break;
        default:
          question = QUESTIONS.first_lesson_today;
      }

      setTrigger({ type, milestone, question, shouldShow: true });
      setShowFeedback(true);
      markShownInSession();

      if (milestone) {
        const triggerType = type === "lesson_milestone" ? "lesson" : "streak";
        markMilestoneShown(triggerType, milestone);
      }
    },
    [isInSubmitCooldown, isInDismissCooldown, alreadyShownInSession],
  );

  return {
    showFeedback,
    trigger,
    onFeedbackSubmitted,
    onFeedbackDismissed,
    triggerFeedback,
  };
}
