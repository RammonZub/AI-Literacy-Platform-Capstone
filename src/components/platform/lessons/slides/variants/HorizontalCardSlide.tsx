/**
 * Horizontal Card Slide Component
 *
 * PURPOSE: Horizontal scrolling cards - NO animations, instant response
 *
 * CONTEXT: Used for side-scrolling card content
 *
 * KEY RESPONSIBILITIES:
 * - Render horizontally scrollable cards
 * - Handle card expansion state instantly
 * - NO animations - instant state changes
 *
 * IMPLEMENTATION NOTES:
 * - Simple CSS-only transitions for hover states
 * - Instant expansion/collapse - no lag
 */

import { Brain, ChevronRight, FileText, Lightbulb, Mail, Search } from "lucide-react";
import type React from "react";
import { memo, useState } from "react";
import { cn } from "@/lib/utils/cn";
import type { LessonSlide } from "@/types/content";

interface HorizontalCardSlideProps {
  slide: LessonSlide;
}

const ICONS: Record<string, React.ReactNode> = {
  mail: <Mail className="w-6 h-6" />,
  search: <Search className="w-6 h-6" />,
  file: <FileText className="w-6 h-6" />,
  brain: <Brain className="w-6 h-6" />,
  lightbulb: <Lightbulb className="w-6 h-6" />,
};

export default memo(function HorizontalCardSlide({ slide }: HorizontalCardSlideProps) {
  const { content } = slide;
  const { title, cards } = content;
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  if (!cards) return null;

  return (
    <div className="h-full w-full flex flex-col bg-background p-6">
      <h2 className="text-2xl font-serif font-bold text-foreground mb-6">{title}</h2>

      <div className="flex-1 overflow-x-auto pb-6 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory flex items-center gap-4">
        {cards.map((card, idx) => {
          const isExpanded = expandedCard === idx;
          const Icon =
            card.front.icon && ICONS[card.front.icon] ? (
              ICONS[card.front.icon]
            ) : (
              <FileText className="w-6 h-6" />
            );

          return (
            <div
              key={idx}
              onClick={() => setExpandedCard(isExpanded ? null : idx)}
              className={cn(
                "snap-center shrink-0 bg-card border border-border rounded-2xl p-6 shadow-sm cursor-pointer relative overflow-hidden group transition-colors duration-150",
                isExpanded
                  ? "w-[85vw] md:w-[400px]"
                  : "w-[280px] h-[320px] hover:border-primary/50",
              )}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-150",
                      isExpanded
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary",
                    )}
                  >
                    {Icon}
                  </div>
                  {card.front.stat && (
                    <span className="font-mono text-xs font-bold bg-muted px-2 py-1 rounded-md text-muted-foreground">
                      {card.front.stat}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-150">
                  {card.front.title}
                </h3>

                {/* Content - Instant show/hide - NO animation */}
                <div className="flex-1">
                  {isExpanded ? (
                    <p className="text-base text-foreground leading-relaxed">{card.back.detail}</p>
                  ) : (
                    <p className="text-sm text-muted-foreground line-clamp-4">{card.back.detail}</p>
                  )}
                </div>

                {/* Footer / CTA */}
                <div className="mt-auto pt-4 flex items-center text-primary text-sm font-medium">
                  {isExpanded ? "Tap to close" : "Tap to learn more"}
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 ml-1 transition-transform duration-150",
                      isExpanded ? "rotate-90" : "group-hover:translate-x-1",
                    )}
                  />
                </div>
              </div>
            </div>
          );
        })}

        {/* Spacer for right padding */}
        <div className="w-2 shrink-0" />
      </div>
    </div>
  );
});
