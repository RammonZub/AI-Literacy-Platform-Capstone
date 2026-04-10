import type React from "react";
import { platformLayout } from "@/data/design/tokens";
import { cn } from "@/lib/utils/cn";

export type PlatformRailVariant = "default" | "lesson";

export interface PlatformRailProps {
  children: React.ReactNode;
  className?: string;
  variant?: PlatformRailVariant;
}

export default function PlatformRail({
  children,
  className,
  variant = "default",
}: PlatformRailProps) {
  const maxWidth =
    variant === "lesson"
      ? `var(--platform-lesson-rail-max, ${platformLayout.lessonRailMax})`
      : `var(--platform-rail-max, ${platformLayout.railMax})`;

  return (
    <div
      className={cn("w-full mx-auto px-4", className)}
      style={{ maxWidth }}
      data-platform-rail={variant}
    >
      {children}
    </div>
  );
}
