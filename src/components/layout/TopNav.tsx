/**
 * Top Navigation Component
 *
 * PURPOSE: Fixed top navigation with minimal styling, streak display, and module selection
 *
 * CONTEXT: The TopNav displays app branding, streak, and profile image.
 * On module pages, it shows the module title with a dropdown selector and back button.
 *
 * KEY RESPONSIBILITIES:
 * - Display app logo/branding OR module title with back button
 * - Menu button only on home page
 * - Back button only on module pages
 * - Show user profile circle with avatar from server
 * - Show side menu with navigation options
 * - Module dropdown selector on module pages
 *
 * IMPLEMENTATION NOTES:
 * - Receives avatarUrl and streak as props from server layout
 * - No client-side data fetching for profile
 * - Module selector uses dropdown with backdrop blur
 */

"use client";

import {
  BookOpen,
  CheckSquare,
  FileText,
  Home,
  Menu,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { getModuleById } from "@/data/content";
import { platformRoutes } from "@/lib/routes/platform";
import { resourceRoutes } from "@/lib/routes/resources";
import { cn } from "@/lib/utils";
import PlatformRail from "./PlatformRail";
import { getPlatformRouteState } from "./platformRouteState";
import { UserStatusBadge } from "./UserStatusBadge";

interface TopNavProps {
  /** Module/challenge title to display (shows with back button) */
  moduleTitle?: string;
  /** Current module/challenge ID */
  moduleId?: string;
  /** Is this a module page? (hides menu, shows back) */
  isModulePage?: boolean;
  /** Is this a challenge page? (hides menu, shows back) */
  isChallengePage?: boolean;
  /** Avatar URL from server */
  avatarUrl?: string | null;
  /** Streak count from server */
  streak?: number;
}

/**
 * TopNav Component
 *
 * @returns Top navigation bar with menu, profile circle, and side navigation
 */
export default function TopNav({
  moduleTitle,
  isModulePage = false,
  isChallengePage = false,
  avatarUrl = null,
  streak = 0,
}: TopNavProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const routeState = getPlatformRouteState(pathname);
  const derivedModuleTitle = routeState.moduleId
    ? (getModuleById(routeState.moduleId)?.title ?? null)
    : null;
  const showModuleChrome = isModulePage || routeState.isModuleJourneyPage;
  const resolvedModuleTitle = moduleTitle ?? derivedModuleTitle ?? "Module";

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  if (routeState.isLessonExperience) {
    return null;
  }

  return (
    <>
      {/* ==========================================
          TOP BAR
          ========================================== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <PlatformRail className="py-3">
          {/* MODULE/CHALLENGE VIEW: Back button + Centered Title */}
          {showModuleChrome || isChallengePage ? (
            <div className="grid grid-cols-[2.25rem_1fr_auto] items-center gap-3">
              {/* Back Button - Small iOS blue shadow */}
              <button
                onClick={() => router.push(platformRoutes.home)}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-card border border-border hover:bg-muted transition-all duration-200 shadow-sm"
                aria-label="Go back"
              >
                <svg
                  className="w-4 h-4 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Centered Module Title - Static (no dropdown) */}
              <h1 className="text-center text-lg font-bold font-serif text-foreground">
                {resolvedModuleTitle}
              </h1>

              {/* Right Side: Streak + Profile */}
              <div className="justify-self-end">
                <UserStatusBadge streak={streak} avatarUrl={avatarUrl} />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-[2.25rem_1fr_auto] items-center gap-3">
              {/* DEFAULT VIEW: Menu button + Centered Logo + Streak + Profile Circle */}
              {/* Menu Button (mobile/tablet only) */}
              <div className="flex items-center justify-start">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={cn(
                    "w-9 h-9 flex items-center justify-center rounded-lg",
                    "hover:bg-muted transition-colors text-foreground",
                    "xl:hidden",
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>

              {/* Centered Logo */}
              <h1 className="text-center text-lg font-bold font-serif text-foreground">
                AI Literacy
              </h1>

              {/* Right Side: Streak + Profile */}
              <div className="justify-self-end">
                <UserStatusBadge streak={streak} avatarUrl={avatarUrl} />
              </div>
            </div>
          )}
        </PlatformRail>
      </nav>

      {/* ==========================================
          SIDE MENU - Only on home page
          ========================================== */}
      {isMenuOpen && !showModuleChrome && !isChallengePage && (
        <>
          {/* Backdrop - Higher z-index to cover everything */}
          <div
            className="fixed inset-0 bg-black/20 z-9998 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Panel - Highest z-index with iOS blue hard offset shadow */}
          <div className="fixed top-0 left-0 bottom-0 w-80 bg-background z-9999 border-r border-border shadow-2xl">
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "mb-8 w-10 h-10 flex items-center justify-center rounded-lg",
                  "hover:bg-muted transition-colors",
                  "text-foreground",
                )}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Menu Items */}
              <nav className="space-y-2">
                {/* Home Link */}
                <Link
                  href={platformRoutes.home}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all border",
                    pathname === platformRoutes.home
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border hover:bg-muted",
                  )}
                >
                  <Home className="w-5 h-5" />
                  <span className="font-semibold font-serif">Home</span>
                </Link>

                {/* Courses Link */}
                <Link
                  href={platformRoutes.library}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all border",
                    pathname === platformRoutes.library
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border hover:bg-muted",
                  )}
                >
                  <BookOpen className="w-5 h-5" />
                  <span className="font-semibold font-serif">Modules</span>
                </Link>

                <Link
                  href={resourceRoutes.resources}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all border",
                    pathname.startsWith("/platform/resources")
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border hover:bg-muted",
                  )}
                >
                  <FileText className="w-5 h-5" />
                  <span className="font-semibold font-serif">Resources</span>
                </Link>

                <Link
                  href={platformRoutes.tasks}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all border",
                    pathname === platformRoutes.tasks
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border hover:bg-muted",
                  )}
                >
                  <CheckSquare className="w-5 h-5" />
                  <span className="font-semibold font-serif">Tasks</span>
                </Link>

                <Link
                  href={platformRoutes.profile}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all border",
                    pathname === platformRoutes.profile
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border hover:bg-muted",
                  )}
                >
                  <User className="w-5 h-5" />
                  <span className="font-semibold font-serif">Profile</span>
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
