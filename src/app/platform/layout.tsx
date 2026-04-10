/**
 * Platform Layout Component
 *
 * PURPOSE: Main layout wrapper for all platform pages with access control
 *
 * CONTEXT: This layout wraps authenticated learning routes (home, library, modules, etc.)
 * It provides the TopNav and main content area with proper spacing.
 *
 * KEY RESPONSIBILITIES:
 * - Provide TopNav for navigation with profile data
 * - Set up proper spacing for content below nav
 * - Apply theme-aware background color
 * - Enforce consistent width constraints across all platform pages
 * - Handle authentication errors gracefully
 * - Default: subscription paywall **open** (`hasAccess` true) for testing.
 * - Set `NEXT_PUBLIC_ENFORCE_PAYWALL=1` or `true` to require `users.has_access`.
 *
 * ========================================
 * ACCESS CONTROL POLICY
 * ========================================
 * See `NEXT_PUBLIC_ENFORCE_PAYWALL` in `.env` / Vercel.
 *
 * ========================================
 *
 * IMPLEMENTATION NOTES:
 * - Uses Container component for consistent max-width (448→512→576px)
 * - Mobile-first responsive design
 * - All platform pages inherit these width constraints automatically
 * - Falls back to basic layout if auth service fails (SECURE: denies access)
 *
 * DESIGN DECISION:
 * - Main content area has max-width constraint to prevent full-width on desktop
 * - This creates better reading experience and consistent layout
 * - Individual pages can override if needed (e.g., cinematic slides)
 *
 * @see src/proxy.ts - First line of defense (authentication)
 * @see src/components/layout/PlatformLayoutClient.tsx - Paywall enforcement
 * @see src/components/platform/PaywallPopup.tsx - Non-dismissible paywall UI
 */

import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type React from "react";
import { Suspense } from "react";
import {
  PlatformLayoutClient,
  PlatformSidebar,
  TopNav,
} from "@/components/layout";
import { SyncOnboardingSession } from "@/components/platform/onboarding/SyncOnboardingSession";
import { platformLayout } from "@/data/design/tokens";
import { createClient } from "@/lib/supabase/server";

function readEnforcePaywallFromEnv(): boolean {
  const v = (process.env.NEXT_PUBLIC_ENFORCE_PAYWALL ?? "").trim().toLowerCase();
  return v === "1" || v === "true" || v === "yes";
}

/**
 * Platform pages should NOT be indexed by search engines.
 *
 * REASONS:
 * 1. Content is behind authentication paywall
 * 2. Content is personalized per user
 * 3. Could be seen as cloaking (showing different content to bots vs users)
 */
export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let avatarUrl: string | null = null;
  let streak = 0;
  const enforcePaywall = readEnforcePaywallFromEnv();
  let hasAccess = !enforcePaywall;

  // Try to fetch user data, fall back to unauthenticated state if service fails
  try {
    const supabase = await createClient();

    // Fetch user and profile data server-side
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      // ========================================
      // ACCESS CONTROL: Fetch user profile with access fields
      // ========================================
      // WHY: Middleware checks JWT metadata, but this is a backup DB check.
      // If JWT metadata is stale (e.g., just-revoked access), this catches it.
      // This is defense-in-depth: even if one layer fails, this layer protects.
      const { data: profile, error: profileError } = await supabase
        .from("users")
        .select("current_streak, has_access")
        .eq("id", user.id)
        .single();

      // Log profile fetch errors for debugging (but don't expose to user)
      if (profileError) {
        console.error("Platform layout: Failed to fetch user profile", {
          userId: user.id,
          error: profileError.message,
          code: profileError.code,
        });
      }

      if (profile) {
        avatarUrl =
          typeof user.user_metadata?.avatar_url === "string"
            ? user.user_metadata.avatar_url
            : null;
        streak = profile.current_streak ?? 0;

        if (enforcePaywall) {
          hasAccess = profile.has_access === true;
        } else {
          hasAccess = true;
        }
      }
    } else {
      const h = await headers();
      const returnPath =
        h.get("x-internal-pathname")?.trim() || "/platform";
      redirect(`/login?redirect=${encodeURIComponent(returnPath)}`);
    }
  } catch (error) {
    // Log error for debugging but don't expose details to user
    console.error("Platform layout: Failed to load user data", error);
    // Fall through to render with default values
  }

  return (
    <>
      {/* Runs for any authenticated platform visit, including paywall — sessionStorage → onboarding_sessions */}
      <SyncOnboardingSession />
      <PlatformLayoutClient hasAccess={hasAccess}>
        <div
          className="min-h-screen bg-background"
          id="platform-root"
          style={
            {
              "--platform-rail-max": platformLayout.railMax,
              "--platform-lesson-rail-max": platformLayout.lessonRailMax,
              "--platform-sidebar-width": platformLayout.sidebarWidth,
              "--platform-sidebar-gap": platformLayout.sidebarGap,
              "--platform-header-height": platformLayout.headerHeight,
            } as React.CSSProperties
          }
        >
          <TopNav avatarUrl={avatarUrl} streak={streak} />
          <PlatformSidebar />
          <main className="min-h-screen pt-16">
            <Suspense fallback={<div />}>{children}</Suspense>
          </main>
        </div>
      </PlatformLayoutClient>
    </>
  );
}
