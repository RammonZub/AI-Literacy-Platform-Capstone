/**
 * User Status Badge Component
 *
 * PURPOSE: Display user streak and avatar in a consistent, elegant way
 *
 * CONTEXT: Used in TopNav for both default and module/challenge views.
 * Extracted to eliminate duplication and ensure consistency.
 */

import { Flame, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { platformRoutes } from "@/lib/routes/platform";

interface UserStatusBadgeProps {
  /** Current streak count */
  streak: number;
  /** Avatar URL from user profile */
  avatarUrl?: string | null;
}

/**
 * UserStatusBadge Component
 *
 * Displays streak counter and profile avatar with consistent styling.
 */
export function UserStatusBadge({ streak, avatarUrl }: UserStatusBadgeProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Streak Display - Clean & Minimal */}
      <div className="flex items-center gap-1.5 px-3 h-9 bg-card border border-border rounded-full shadow-sm">
        <Flame className="w-4 h-4 text-orange-500 fill-orange-500" strokeWidth={2} />
        <span className="text-sm font-bold text-foreground">{streak}</span>
      </div>

      {/* Profile Circle - Clean Border */}
      <Link href={platformRoutes.profile}>
        <div className="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden bg-muted border border-border hover:border-primary/50 transition-colors shadow-sm">
          {avatarUrl ? (
            <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <User className="w-4 h-4 text-muted-foreground" />
          )}
        </div>
      </Link>
    </div>
  );
}
