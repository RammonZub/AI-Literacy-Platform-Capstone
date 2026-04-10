/**
 * HeroFloatingTags
 *
 * PURPOSE: Rotating testimonial-style quotes that float around the hero image.
 * 4 fixed positions, content swap with fade. Clean, minimal floating look.
 */

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// ==========================================
// DATA
// ==========================================

const ALL_QUOTES: string[] = [
  '"I save 2 hours every day now."',
  '"I finally get what AI can do for me."',
  '"My boss noticed the difference."',
  '"I use Claude for every report now."',
  '"Went from confused to confident."',
  '"5 min/day changed everything."',
  '"I automated my weekly reports."',
  '"AI writes my first drafts now."',
  '"I sound smarter in every meeting."',
  '"My proposals are 3x better."',
  '"I actually enjoy using AI at work."',
  '"No more staring at blank pages."',
  '"My team asks ME for AI tips now."',
  '"I feel 10 years ahead of my peers."',
  '"Clients think I hired an assistant."',
  '"I stopped fearing AI and started using it."',
];

const NUM_TAGS = 4;

/** Fixed positions around the hero — same as original, no rotation */
const TAG_POSITIONS: { className: string; sharpCorner: "tl" | "tr" | "bl" | "br" }[] = [
  { className: "top-[8%] -left-2 sm:-left-8", sharpCorner: "bl" },
  { className: "top-[35%] -right-2 sm:-right-6", sharpCorner: "br" },
  { className: "bottom-[35%] -left-4 sm:-left-10", sharpCorner: "tl" },
  { className: "bottom-[8%] -right-2 sm:-right-6", sharpCorner: "tr" },
];

const CORNER_RADIUS: Record<string, string> = {
  tl: "2px 12px 12px 12px",
  tr: "12px 2px 12px 12px",
  bl: "12px 12px 12px 2px",
  br: "12px 12px 2px 12px",
};

// ==========================================
// COMPONENT
// ==========================================

export default function HeroFloatingTags(): React.JSX.Element {
  const [quoteIndices, setQuoteIndices] = useState<number[]>([0, 1, 2, 3]);
  const [fadingSlot, setFadingSlot] = useState<number | null>(null);
  const nextQuoteRef = useRef(4);

  const rotateTag = useCallback(() => {
    const slotToRotate = nextQuoteRef.current % NUM_TAGS;
    const quoteToShow = nextQuoteRef.current % ALL_QUOTES.length;
    nextQuoteRef.current += 1;

    setFadingSlot(slotToRotate);

    setTimeout(() => {
      setQuoteIndices((prev) => {
        const u = [...prev];
        u[slotToRotate] = quoteToShow;
        return u;
      });
      setFadingSlot(null);
    }, 320);
  }, []);

  useEffect(() => {
    const interval = setInterval(rotateTag, 3800);
    return () => clearInterval(interval);
  }, [rotateTag]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
      {TAG_POSITIONS.map((pos, i) => (
        <div
          key={i}
          className={cn(
            "absolute z-10",
            "max-w-[150px] sm:max-w-[170px]",
            "px-3 py-2.5 sm:px-4 sm:py-3",
            "bg-white/95 backdrop-blur-sm",
            "border border-gray-100",
            "font-body text-[12px] sm:text-[13px] leading-snug font-medium",
            "shadow-lg shadow-gray-200/50",
            "transition-opacity duration-300 ease-in-out",
            fadingSlot === i ? "opacity-0" : "opacity-100",
            pos.className,
          )}
          style={{
            borderRadius: CORNER_RADIUS[pos.sharpCorner],
            color: "#2563EB",
          }}
        >
          {ALL_QUOTES[quoteIndices[i]!]}
        </div>
      ))}
    </div>
  );
}
