/**
 * Feedback Widget
 *
 * Widget that triggers feedback popup based on lesson progress.
 * Used in lesson pages.
 */

"use client";

import { useEffect, useState } from "react";
import { FeedbackPopup } from "./FeedbackPopup";

interface FeedbackWidgetProps {
  triggerOnMount?: boolean;
  lessonId?: string;
  moduleId?: string;
}

export function FeedbackWidget({ triggerOnMount = false }: FeedbackWidgetProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (triggerOnMount) {
      // Small delay to not interrupt lesson flow
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [triggerOnMount]);

  if (!show) return null;

  return <FeedbackPopup triggerType="first_lesson_today" onClose={() => setShow(false)} />;
}

export default FeedbackWidget;
