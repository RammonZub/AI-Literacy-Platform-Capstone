/**
 * Feedback Test Helper (Dev Only)
 *
 * Exposes window.devShowFeedback() for testing the feedback popup in development.
 */

"use client";

import { useEffect } from "react";

type WindowWithDevFeedback = Window & {
  devShowFeedback?: () => void;
};

export default function FeedbackTestHelper() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const appWindow = window as WindowWithDevFeedback;

    appWindow.devShowFeedback = () => {
      // Dispatch a custom event that FeedbackPopup listens to
      window.dispatchEvent(new CustomEvent("dev:show-feedback"));
      console.log("[Dev] Feedback popup triggered");
    };

    return () => {
      delete appWindow.devShowFeedback;
    };
  }, []);

  return null;
}
