/**
 * Button Component
 *
 * PURPOSE: Reusable button component with Modern Clean styling
 *
 * CONTEXT: Modern Clean Design - Vibrant Blue primary buttons with
 * subtle shadows and clean interactions.
 *
 * KEY RESPONSIBILITIES:
 * - Provide consistent button styling across the app
 * - Support multiple variants for different use cases
 * - Use new Design System (Vibrant Blue, Soft Shadows, Pill Shape)
 *
 * IMPLEMENTATION NOTES:
 * - Primary: Vibrant Blue background, white text, subtle shadow
 * - Secondary: White background, gray border, text foreground
 * - Ghost: Transparent with hover background
 * - Outline: Border only
 * - Destructive: Red background/text variants
 *
 * DESIGN DECISIONS:
 * - Rounded-full (Pill) for all main actions
 * - Scale transform on active (0.98) for tactile feel without layout shift
 * - Clean focus rings for accessibility
 */

import type React from "react";
import { cn } from "@/lib/utils";

// ==========================================
// TYPES
// ==========================================

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "destructive" | "link";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  dataFbIgnore?: boolean;
  children: React.ReactNode;
}

// ==========================================
// VARIANT STYLES
// ==========================================

const getVariantStyles = (variant: ButtonVariant): string => {
  switch (variant) {
    case "primary":
      return cn(
        "bg-primary text-primary-foreground",
        "shadow-sm hover:shadow-md hover:bg-primary/90",
        "border border-transparent",
      );

    case "secondary":
      return cn(
        "bg-card text-foreground border border-border",
        "shadow-sm hover:shadow-md hover:bg-muted/50",
      );

    case "ghost":
      return cn("bg-transparent text-foreground hover:bg-muted", "shadow-none border-transparent");

    case "outline":
      return cn(
        "bg-transparent text-foreground border-2 border-primary/20",
        "hover:bg-primary/5 hover:border-primary/50",
      );

    case "destructive":
      return cn("bg-red-500 text-white hover:bg-red-600", "shadow-sm hover:shadow-md");

    case "link":
      return cn(
        "text-primary underline-offset-4 hover:underline",
        "bg-transparent shadow-none p-0 h-auto",
      );

    default:
      return "";
  }
};

// ==========================================
// SIZE STYLES
// ==========================================

const getSizeStyles = (size: ButtonSize, variant: ButtonVariant): string => {
  // Link variant doesn't need standard padding
  if (variant === "link") return "";

  switch (size) {
    case "sm":
      return "h-9 px-4 text-xs font-semibold rounded-full";
    case "md":
      return "h-11 px-6 text-sm font-bold rounded-full";
    case "lg":
      return "h-14 px-8 text-base font-bold rounded-full";
    case "icon":
      return "h-10 w-10 p-0 rounded-full flex items-center justify-center";
    default:
      return "h-11 px-6 text-sm font-bold rounded-full";
  }
};

// ==========================================
// COMPONENT
// ==========================================

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled,
  className = "",
  dataFbIgnore,
  onClick,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2",
    "transition-all duration-200 active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
  );

  const variantStyles = getVariantStyles(variant);
  const sizeStyles = getSizeStyles(size, variant);
  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={cn(baseStyles, variantStyles, sizeStyles, widthStyles, className)}
      disabled={disabled || loading}
      data-fb-ignore={dataFbIgnore ? "true" : undefined}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
}

export type { ButtonProps };
