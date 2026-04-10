/**
 * Cookie Consent Banner Component
 *
 * PURPOSE: GDPR-compliant cookie consent popup for analytics tracking
 *
 * CONTEXT:
 * GDPR (General Data Protection Regulation) requires explicit user consent before
 * tracking users with analytics cookies. This component displays a small, non-invasive
 * popup on first visit, allowing users to accept or decline non-essential cookies.
 *
 * DESIGN:
 * - Small popup in lower right corner (non-invasive)
 * - White background with subtle shadow (clean, light mode)
 * - Appears once per user (localStorage persistence)
 * - Compact layout with clear actions
 *
 * CONSENT TYPES:
 * - 'all': User accepts optional first-party preferences
 * - 'necessary': Essential only
 * - null: User hasn't made a choice yet (show banner)
 *
 * STORAGE: Uses localStorage to persist consent choice across sessions
 */

"use client";

import { useEffect, useState } from "react";
import { getCookieConsent, setCookieConsent } from "@/lib/analytics/consent";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already made a consent choice
    // This prevents the banner from appearing multiple times
    const consent = getCookieConsent();
    if (!consent) {
      // Small delay for smooth entrance animation
      const timer = setTimeout(() => {
        setShowBanner(true);
        setIsAnimating(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    setCookieConsent("all");

    // Smooth exit animation
    setIsAnimating(false);
    setTimeout(() => setShowBanner(false), 200);
  };

  const rejectNonEssential = () => {
    setCookieConsent("necessary");

    // Smooth exit animation
    setIsAnimating(false);
    setTimeout(() => setShowBanner(false), 200);
  };

  if (!showBanner) return null;

  return (
    <div
      className={`
        fixed bottom-4 right-4 z-[100]
        max-w-xs w-full
        bg-white rounded-xl shadow-lg border border-gray-100
        p-4
        transition-all duration-200 ease-out
        ${isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
      `}
    >
      {/* Cookie icon */}
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 mb-1">Cookie preferences</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Accept optional first-party analytics (page views and engagement). Decline to use only
            essential cookies.{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Learn more
            </a>
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <button
          onClick={rejectNonEssential}
          className="
            flex-1 px-3 py-2 text-xs font-medium
            text-gray-600 bg-gray-50 rounded-lg
            hover:bg-gray-100 hover:text-gray-900
            transition-colors
          "
        >
          Decline
        </button>
        <button
          onClick={acceptAll}
          className="
            flex-1 px-3 py-2 text-xs font-medium
            text-white bg-blue-600 rounded-lg
            hover:bg-blue-700
            transition-colors
          "
        >
          Accept
        </button>
      </div>
    </div>
  );
}
