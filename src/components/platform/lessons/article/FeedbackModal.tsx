/**
 * FeedbackModal
 *
 * PURPOSE: Modal for users to report issues or provide feedback using predefined questions
 *
 * CONTEXT: When users click the floating feedback icon, this modal slides down
 * from the top with 5 predefined question options. This streamlined approach
 * makes it quick and easy for users to categorize their feedback.
 *
 * KEY RESPONSIBILITIES:
 * - Display modal sliding down from top (not centered popup)
 * - Provide 5 predefined feedback categories
 * - Handle "Other" option with inline text input
 * - Generate mailto links with pre-populated subject/body based on selection
 * - Close on backdrop click, ESC key, or close button
 * - Animate in/out smoothly with slide-down effect
 *
 * IMPLEMENTATION NOTES:
 * - Uses Framer Motion for slide-down animation from top (y: '-100%' → y: 0)
 * - Full-width modal at top (fixed top-0 left-0 right-0)
 * - Backdrop blur for visual separation from content
 * - Z-index: 60 (above flag at 50, below completion screen at 70)
 * - Predefined questions auto-populate email subject and body
 * - "Other" option shows inline textarea (NOT a separate form)
 * - Email opens in new window/tab (target="_blank" + rel="noopener noreferrer")
 * - Design uses iOS blue theme (#007AFF)
 *
 * DEPENDENCIES:
 * - framer-motion: For slide-down animations
 * - React hooks: useState, useEffect for "Other" input and ESC handling
 *
 * Z-INDEX LAYERING:
 * - Content: auto (0)
 * - Continue button: 40
 * - Feedback flag: 50
 * - Feedback modal: 60 (this component)
 * - Completion screen: 70
 *
 * @see FeedbackFlag.tsx - Flag icon that opens this modal
 * @see ArticleLesson.tsx - Parent that manages modal state
 */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import PlatformRail from "@/components/layout/PlatformRail";

export interface FeedbackModalProps {
  /** Whether the modal is currently open */
  isOpen: boolean;

  /** Callback when modal should close */
  onClose: () => void;

  /** Lesson title for email subject */
  lessonTitle?: string;

  /** Lesson ID for tracking */
  lessonId?: string;

  /** Email address to send feedback to */
  feedbackEmail?: string;
}

/**
 * Predefined feedback question type
 *
 * Each question has an icon, label, and generates appropriate email content.
 * The "other" option triggers an inline text input for custom feedback.
 */
type FeedbackQuestionType =
  | "typo"
  | "unclear"
  | "technical"
  | "inappropriate"
  | "other";

/**
 * Feedback question definition
 *
 * @property type - Unique identifier for the question type
 * @property icon - Emoji icon for visual recognition
 * @property label - Display text for the button
 * @property subject - Email subject line (pre-populated)
 * @property bodyPrefix - Email body prefix (pre-populated before user's input)
 */
interface FeedbackQuestion {
  type: FeedbackQuestionType;
  icon: string;
  label: string;
  subject: string;
  bodyPrefix: string;
}

/**
 * FeedbackModal component
 *
 * Displays a slide-down modal with 5 predefined feedback categories:
 * 1. "Typo or grammar error" - For text mistakes
 * 2. "Content is unclear" - For confusing explanations
 * 3. "Technical issue" - For bugs, broken links, etc.
 * 4. "Inappropriate content" - For concerning material
 * 5. "Other" - Shows inline textarea for custom feedback
 *
 * Animation: Slides down from top (y: '-100%' → y: 0)
 * Position: Fixed at top, full width
 *
 * Closes on:
 * - Backdrop click
 * - ESC key press
 * - Close button (X) click
 *
 * Z-index: 60 (above flag, below completion screen)
 *
 * @example
 * const [showFeedback, setShowFeedback] = useState(false)
 *
 * <FeedbackModal
 *   isOpen={showFeedback}
 *   onClose={() => setShowFeedback(false)}
 *   lessonTitle="Claude Basics"
 *   lessonId="lesson-1"
 * />
 */
export function FeedbackModal({
  isOpen,
  onClose,
  lessonTitle = "Lesson",
  lessonId = "unknown",
  feedbackEmail = "support@example.com",
}: FeedbackModalProps) {
  // Track whether "Other" textarea is visible
  const [showOtherInput, setShowOtherInput] = useState(false);
  // Track user's custom feedback text
  const [otherFeedback, setOtherFeedback] = useState("");

  const handleClose = useCallback(() => {
    setShowOtherInput(false);
    setOtherFeedback("");
    onClose();
  }, [onClose]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleClose, isOpen]);

  /**
   * Predefined feedback questions
   *
   * Each question type generates appropriate email content when clicked.
   * The lesson title and ID are automatically included in the email body.
   */
  const feedbackQuestions: FeedbackQuestion[] = [
    {
      type: "typo",
      icon: "📝",
      label: "Typo or grammar error",
      subject: `Typo Report: ${lessonTitle}`,
      bodyPrefix: `Lesson ID: ${lessonId}\n\nI found a typo or grammar error:\n\n`,
    },
    {
      type: "unclear",
      icon: "🤔",
      label: "Content is unclear",
      subject: `Unclear Content: ${lessonTitle}`,
      bodyPrefix: `Lesson ID: ${lessonId}\n\nThis part of the lesson is unclear:\n\n`,
    },
    {
      type: "technical",
      icon: "🔧",
      label: "Technical issue",
      subject: `Technical Issue: ${lessonTitle}`,
      bodyPrefix: `Lesson ID: ${lessonId}\n\nI encountered a technical issue:\n\n`,
    },
    {
      type: "inappropriate",
      icon: "🚩",
      label: "Inappropriate content",
      subject: `Inappropriate Content: ${lessonTitle}`,
      bodyPrefix: `Lesson ID: ${lessonId}\n\nI found inappropriate content:\n\n`,
    },
    {
      type: "other",
      icon: "💬",
      label: "Other",
      subject: `Feedback: ${lessonTitle}`,
      bodyPrefix: `Lesson ID: ${lessonId}\n\nOther feedback:\n\n`,
    },
  ];

  /**
   * Handle feedback question selection
   *
   * For predefined questions (typo, unclear, technical, inappropriate):
   * - Opens email client with pre-populated subject and body
   * - Opens in new tab/window (target="_blank" + rel="noopener noreferrer")
   * - Closes modal after triggering email
   *
   * For "Other" option:
   * - Shows inline textarea for custom input
   * - Does NOT open email immediately
   * - User must click "Send Feedback" after typing
   */
  const handleQuestionSelect = (question: FeedbackQuestion) => {
    if (question.type === "other") {
      setShowOtherInput(true);
      return;
    }

    // Encode email content for mailto link
    const subject = encodeURIComponent(question.subject);
    const body = encodeURIComponent(question.bodyPrefix);
    const mailtoLink = `mailto:${feedbackEmail}?subject=${subject}&body=${body}`;

    // Open email in new window/tab
    window.open(mailtoLink, "_blank", "noopener,noreferrer");
    handleClose();
  };

  /**
   * Handle "Other" feedback submission
   *
   * Opens email client with:
   * - Pre-populated subject line
   * - Body prefix + user's custom feedback text
   * - Opens in new tab/window
   */
  const handleOtherSubmit = () => {
    const question = feedbackQuestions.find((q) => q.type === "other")!;
    const fullBody = question.bodyPrefix + otherFeedback;

    const subject = encodeURIComponent(question.subject);
    const body = encodeURIComponent(fullBody);
    const mailtoLink = `mailto:${feedbackEmail}?subject=${subject}&body=${body}`;

    window.open(mailtoLink, "_blank", "noopener,noreferrer");
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60"
            aria-hidden="true"
          />

          {/* Modal - Slides down from top */}
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.32, 0.72, 0, 1], // Custom easing for smooth slide
            }}
            className="fixed top-0 left-0 right-0 z-60 bg-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-title"
          >
            {/* Modal Content */}
            <PlatformRail className="py-6">
              {/* Header with Close button */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-2xl"
                      role="img"
                      aria-label="Feedback icon"
                    >
                      💬
                    </span>
                    <h2
                      id="feedback-title"
                      className="text-xl font-bold text-black"
                    >
                      Report an Issue
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm">
                    What would you like to report?
                  </p>
                </div>

                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mt-2 -mr-2"
                  aria-label="Close feedback modal"
                >
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Predefined Question Buttons */}
              {!showOtherInput ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {feedbackQuestions.map((question) => (
                    <button
                      key={question.type}
                      onClick={() => handleQuestionSelect(question)}
                      className={`
                        flex items-center gap-3 px-4 py-4
                        rounded-xl border-2
                        min-h-[52px]
                        text-left
                        transition-all duration-200
                        ${
                          question.type === "other"
                            ? "border-[#007AFF] text-[#007AFF] hover:bg-blue-50"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        }
                      `}
                    >
                      <span
                        className="text-2xl shrink-0"
                        role="img"
                        aria-label={question.label}
                      >
                        {question.icon}
                      </span>
                      <span className="font-medium text-base">
                        {question.label}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                /* "Other" inline input */
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="other-feedback"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Please describe your issue or suggestion:
                    </label>
                    <textarea
                      id="other-feedback"
                      value={otherFeedback}
                      onChange={(e) => setOtherFeedback(e.target.value)}
                      placeholder="Type your feedback here..."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#007AFF] focus:outline-none resize-none min-h-[120px]"
                      autoFocus
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={handleOtherSubmit}
                      disabled={!otherFeedback.trim()}
                      className="
                        flex-1 px-6 py-3.5
                        bg-[#007AFF] text-white
                        font-semibold text-base
                        rounded-xl
                        hover:bg-[#0056CC]
                        disabled:opacity-50 disabled:cursor-not-allowed
                        transition-colors duration-200
                        min-h-[52px]
                      "
                    >
                      Send Feedback
                    </button>
                    <button
                      onClick={() => {
                        setShowOtherInput(false);
                        setOtherFeedback("");
                      }}
                      className="
                        px-6 py-3.5
                        border-2 border-gray-200 text-gray-700
                        font-semibold text-base
                        rounded-xl
                        hover:bg-gray-50
                        transition-colors duration-200
                        min-h-[52px]
                      "
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {/* Footer text */}
              {!showOtherInput && (
                <p className="text-xs text-gray-400 text-center mt-4">
                  We appreciate your feedback!
                </p>
              )}
            </PlatformRail>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default FeedbackModal;
