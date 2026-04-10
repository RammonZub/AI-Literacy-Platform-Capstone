/**
 * Grid Card Slide Component
 *
 * PURPOSE: Simple grid of expandable cards - NO animations, instant response
 *
 * CONTEXT: Used for presenting concepts that users can explore by tapping
 *
 * KEY RESPONSIBILITIES:
 * - Render grid of cards with front/back content
 * - Handle card expansion state instantly
 * - NO animations - instant state changes
 *
 * IMPLEMENTATION NOTES:
 * - Simple CSS-only transitions for hover states
 * - Instant expansion/collapse - no lag
 */

import { Brain, ChevronRight, FileText, Lightbulb, Mail, Search, Shield } from "lucide-react";
import type React from "react";
import { memo, useState } from "react";
import { cn } from "@/lib/utils/cn";
import type { LessonSlide } from "@/types/content";

interface GridCardSlideProps {
  slide: LessonSlide;
}

const ICONS: Record<string, React.ReactNode> = {
  mail: <Mail className="w-6 h-6" />,
  search: <Search className="w-6 h-6" />,
  file: <FileText className="w-6 h-6" />,
  brain: <Brain className="w-6 h-6" />,
  lightbulb: <Lightbulb className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
};

export default memo(function GridCardSlide({ slide }: GridCardSlideProps) {
  const { content } = slide;
  const { title, cards } = content;
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  if (!cards) return null;

  return (
    <div className="h-full w-full flex flex-col bg-background p-6">
      <h2 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">{title}</h2>

      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
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
                  "bg-card border border-border rounded-2xl p-6 shadow-sm cursor-pointer overflow-hidden relative group transition-colors duration-150",
                  isExpanded
                    ? "md:col-span-2 row-span-2 bg-primary/5 border-primary/20"
                    : "hover:border-primary/50",
                )}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-150",
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

                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-150">
                    {card.front.title}
                  </h3>

                  {/* Instant show/hide - NO animation */}
                  {isExpanded ? (
                    <div>
                      <p className="text-base text-foreground leading-relaxed mt-2">
                        {card.back.detail}
                      </p>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium">
                        Tap to close <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground line-clamp-2">{card.back.detail}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});
