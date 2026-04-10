"use client";

/**
 * Platform Sidebar Component
 *
 * PURPOSE: Desktop-only left navigation for platform routes.
 *
 * CONTEXT: On larger screens, users have extra horizontal space while
 * content remains width-constrained for readability. This sidebar uses
 * that space and replaces reliance on the mobile hamburger menu.
 *
 * KEY RESPONSIBILITIES:
 * - Render desktop navigation links for core platform areas
 * - Highlight active route for orientation
 * - Keep visual style consistent with the existing light iOS-blue theme
 *
 * @see src/app/platform/layout.tsx
 * @module components/layout
 */

import { BookOpen, CheckSquare, FileText, Home, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType } from "react";

import { platformRoutes } from "@/lib/routes/platform";
import { resourceRoutes } from "@/lib/routes/resources";
import { cn } from "@/lib/utils";
import { getPlatformRouteState } from "./platformRouteState";

interface SidebarItem {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  { label: "Home", href: platformRoutes.home, icon: Home },
  { label: "Modules", href: platformRoutes.library, icon: BookOpen },
  { label: "Resources", href: resourceRoutes.resources, icon: FileText },
  { label: "Tasks", href: platformRoutes.tasks, icon: CheckSquare },
  { label: "Profile", href: platformRoutes.profile, icon: User },
];

export default function PlatformSidebar() {
  const pathname = usePathname();
  const routeState = getPlatformRouteState(pathname);

  if (routeState.isLessonExperience) {
    return null;
  }

  return (
    <aside
      className="hidden xl:block fixed bottom-0 border-r border-border bg-background/95 backdrop-blur-sm z-40"
      style={{
        top: "var(--platform-header-height)",
        width: "var(--platform-sidebar-width)",
        left: "max(1rem, calc(50vw - var(--platform-rail-max) / 2 - var(--platform-sidebar-width) - var(--platform-sidebar-gap)))",
      }}
      data-platform-sidebar="desktop"
    >
      <div className="px-4 py-6">
        <p className="px-2 text-xs uppercase tracking-wide text-muted-foreground font-semibold">
          Navigation
        </p>

        <nav className="mt-3 space-y-1">
          {SIDEBAR_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium border transition-all",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:bg-muted",
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
