/**
 * Simple Page Tracker — first-party page_view telemetry only (no UTM / ad click IDs).
 * Fires only after the user accepts optional cookies via `CookieConsent` (`hasAnalyticsConsent`).
 */

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MutableRefObject } from "react";
import {
  COOKIE_CONSENT_UPDATED_EVENT,
  hasAnalyticsConsent,
} from "@/lib/analytics/consent";
import { derivePageTypeFromPath } from "@/lib/analytics/page-view-utils";
import { ensureBrowserVisitorId } from "@/lib/visitor-session";

const isDev = process.env.NODE_ENV === "development";
const devLog = (...args: unknown[]) => isDev && console.log(...args);
const devError = (...args: unknown[]) => isDev && console.error(...args);

function getOrCreateVisitorId(): string {
  return ensureBrowserVisitorId();
}

function sendEngagementData(
  visitorId: string,
  pagePath: string,
  pageType: string,
  timeOnPageSeconds: number,
  scrollDepthPercent: number,
): void {
  const payload = {
    visitor_id: visitorId,
    page_path: pagePath,
    page_type: pageType,
    time_on_page_seconds: timeOnPageSeconds,
    scroll_depth_percent: scrollDepthPercent,
    is_exit: true,
    referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
  };

  devLog("[PageTracker] ⏱️ Sending engagement data:", JSON.stringify(payload, null, 2));

  if (navigator.sendBeacon) {
    const blob = new Blob([JSON.stringify(payload)], {
      type: "application/json",
    });
    const sent = navigator.sendBeacon("/api/analytics/page-view", blob);
    if (!sent) {
      devError("[PageTracker] ❌ sendBeacon failed, data may be lost");
    } else {
      devLog("[PageTracker] ✅ Engagement data sent via sendBeacon");
    }
    return;
  }

  fetch("/api/analytics/page-view", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch((e) => {
    devError("[PageTracker] ❌ Fallback fetch failed:", e);
  });
}

function useTimeOnPageTracking(
  visitorIdRef: MutableRefObject<string>,
  pathname: string,
  isEnabled: boolean,
): void {
  useEffect(() => {
    const visitorId = visitorIdRef.current;

    if (!isEnabled || !visitorId) {
      return;
    }

    let visibleTime = 0;
    let lastVisible = document.visibilityState === "visible" ? Date.now() : null;
    let maxScroll = 0;
    let hasFlushed = false;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        lastVisible = Date.now();
      } else if (lastVisible) {
        visibleTime += Date.now() - lastVisible;
        lastVisible = null;
      }
    };

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);
        maxScroll = Math.max(maxScroll, Math.min(scrollPercent, 100));
      }
    };

    const flushEngagement = () => {
      if (hasFlushed) return;
      hasFlushed = true;

      if (lastVisible) {
        visibleTime += Date.now() - lastVisible;
        lastVisible = null;
      }

      const timeSeconds = Math.round(visibleTime / 1000);
      const scrollPercent = maxScroll;

      sendEngagementData(
        visitorId,
        pathname,
        derivePageTypeFromPath(pathname),
        timeSeconds,
        scrollPercent,
      );
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pagehide", flushEngagement);
    window.addEventListener("beforeunload", flushEngagement);

    return () => {
      flushEngagement();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pagehide", flushEngagement);
      window.removeEventListener("beforeunload", flushEngagement);
    };
  }, [visitorIdRef, pathname, isEnabled]);
}

export function SimplePageTracker() {
  const pathname = usePathname();
  const lastTrackedRef = useRef<string>("");
  const visitorIdRef = useRef<string>("");
  const [consentAllowsAnalytics, setConsentAllowsAnalytics] = useState(false);

  useEffect(() => {
    const sync = () => setConsentAllowsAnalytics(hasAnalyticsConsent());
    sync();
    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, sync);
  }, []);

  const canTrack = consentAllowsAnalytics && typeof document !== "undefined";

  useEffect(() => {
    let isCancelled = false;
    const trackingKey = pathname;

    if (!canTrack) {
      devLog("[PageTracker] Skipping (analytics consent not granted):", pathname);
      return;
    }

    if (lastTrackedRef.current === trackingKey) {
      devLog("[PageTracker] ⏭️ Skip duplicate:", trackingKey);
      return;
    }

    const visitorId = getOrCreateVisitorId();

    if (!visitorId) {
      devError("[PageTracker] ❌ No visitor ID!");
      return;
    }

    visitorIdRef.current = visitorId;

    const payload = {
      visitor_id: visitorId,
      page_path: pathname,
      page_title: document.title,
      page_type: derivePageTypeFromPath(pathname),
      referrer: document.referrer || undefined,
    };

    devLog("[PageTracker] 📦 Payload:", JSON.stringify(payload, null, 2));

    fetch("/api/analytics/page-view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    })
      .then((r) => {
        if (isCancelled) return;
        if (r.ok) {
          lastTrackedRef.current = trackingKey;
        }
        return r.json();
      })
      .catch((e) => {
        if (!isCancelled) {
          devError("[PageTracker] ❌ Error:", e);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [pathname, canTrack]);

  useTimeOnPageTracking(visitorIdRef, pathname, canTrack);

  return null;
}
