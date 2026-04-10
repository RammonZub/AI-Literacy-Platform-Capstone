/**
 * Feedback Popup Component
 *
 * Simple feedback popup that can be triggered by:
 * - Lesson completions
 * - Streak milestones
 * - Dev testing (window.devShowFeedback())
 */

"use client";

import { useCallback, useEffect, useState } from "react";
import { createFeedbackAction } from "@/app/platform/progress/actions/feedback-actions";
import PlatformRail from "@/components/layout/PlatformRail";
import type { FeedbackTriggerType } from "@/lib/hooks/useFeedbackTrigger";

interface FeedbackPopupProps {
  question?: string;
  triggerType?: FeedbackTriggerType;
  lessonId?: string;
  moduleId?: string;
  onSubmitted?: () => void;
  onDismiss?: () => void;
  onClose?: () => void;
  /** Whether popup is open - defaults to true when rendered */
  isOpen?: boolean;
}

export function FeedbackPopup({
  question = "How's your experience?",
  onSubmitted,
  onDismiss,
  onClose,
  isOpen: isOpenProp = true,
}: FeedbackPopupProps) {
  const [isOpen, setIsOpen] = useState(isOpenProp);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setRating(0);
    setFeedback("");
    setSubmitted(false);
    onClose?.();
  }, [onClose]);

  const handleDismiss = useCallback(() => {
    onDismiss?.();
    handleClose();
  }, [onDismiss, handleClose]);

  const handleSubmit = async () => {
    if (rating === 0) return;

    setIsSubmitting(true);
    try {
      await createFeedbackAction({
        rating,
        feedback_text: feedback || null,
      });
      setSubmitted(true);
      onSubmitted?.();
      setTimeout(handleClose, 2000);
    } catch (error) {
      console.error("Failed to submit feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Listen for dev test event
  useEffect(() => {
    const handleDevShow = () => {
      setIsOpen(true);
    };

    window.addEventListener("dev:show-feedback", handleDevShow);
    return () => window.removeEventListener("dev:show-feedback", handleDevShow);
  }, []);

  // Don't return null - keep component mounted so event listener works
  // Use a fragment to keep the component in the tree even when closed
  if (!isOpen) return <></>;

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <PlatformRail className="h-full flex items-center justify-center">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-md w-full shadow-xl">
          {submitted ? (
            <div className="text-center py-4">
              <div className="text-2xl mb-2">🙏</div>
              <p className="text-lg font-medium">
                Thank you for your feedback!
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-semibold mb-4">{question}</h3>

              {/* Star Rating */}
              <div className="flex gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="text-3xl transition-transform hover:scale-110"
                  >
                    {star <= rating ? "⭐" : "☆"}
                  </button>
                ))}
              </div>

              {/* Feedback Text */}
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Any additional comments? (optional)"
                className="w-full border rounded-md p-3 text-sm resize-none h-24 mb-4 dark:bg-gray-800"
              />

              {/* Actions */}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  Skip
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={rating === 0 || isSubmitting}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </>
          )}
        </div>
      </PlatformRail>
    </div>
  );
}

export default FeedbackPopup;
