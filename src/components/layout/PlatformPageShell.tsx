import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import PlatformRail, { type PlatformRailVariant } from "./PlatformRail";

export interface PlatformPageShellProps {
  children: ReactNode;
  className?: string;
  railClassName?: string;
  railVariant?: PlatformRailVariant;
  as?: ElementType;
}

export default function PlatformPageShell({
  children,
  className,
  railClassName,
  railVariant = "default",
  as: Component = "div",
}: PlatformPageShellProps) {
  return (
    <Component
      className={cn("min-h-screen w-full bg-background", className)}
      data-platform-page-shell={railVariant}
    >
      <PlatformRail variant={railVariant} className={cn("py-6", railClassName)}>
        {children}
      </PlatformRail>
    </Component>
  );
}
