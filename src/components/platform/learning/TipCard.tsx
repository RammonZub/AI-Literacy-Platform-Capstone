/**
 * Tip Card Component
 *
 * Displays daily tips, insights, or helpful information.
 */

import React from "react";

interface TipCardProps {
  title: string;
  content: string;
  icon?: string;
  variant?: "default" | "warning" | "info" | "success";
  className?: string;
}

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case "warning":
      return "bg-gradient-to-br from-warning/10 to-warning/5 border-warning/30";
    case "info":
      return "bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30";
    case "success":
      return "bg-gradient-to-br from-success/10 to-success/5 border-success/30";
    default:
      return "bg-muted border-border";
  }
};

export default function TipCard({
  title,
  content,
  icon = "💡",
  variant = "default",
  className = "",
}: TipCardProps) {
  const variantStyles = getVariantStyles(variant);

  return (
    <div className={`${variantStyles} rounded-xl p-4 border ${className}`}>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-warning rounded-lg flex items-center justify-center shrink-0">
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
          <p className="text-foreground text-sm leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}
