import { AnimatePresence, motion } from "framer-motion";
import { Info } from "lucide-react";
import React, { memo, useState } from "react";
import { cn } from "@/lib/utils/cn";
import type { LessonSlide } from "@/types/content";

interface StatCounterSlideProps {
  slide: LessonSlide;
}

// Simple counter animation component
function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <>{count}</>;
}

export default memo(function StatCounterSlide({ slide }: StatCounterSlideProps) {
  const { content } = slide;
  const { title, stats, visual, caption } = content;
  const [expandedStat, setExpandedStat] = useState<number | null>(null);

  if (!stats) return null;

  return (
    <div className="h-full w-full flex flex-col bg-background p-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-serif font-bold text-foreground mb-8 text-center"
      >
        {title}
      </motion.h2>

      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.3, type: "spring" }}
            className={cn(
              "flex flex-col items-center text-center p-6 rounded-2xl w-full max-w-sm cursor-pointer transition-all",
              stat.highlight
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "bg-card border border-border",
              stat.context && "hover:scale-105",
            )}
            onClick={() => stat.context && setExpandedStat(expandedStat === idx ? null : idx)}
          >
            <span
              className={cn(
                "text-sm font-bold uppercase tracking-wider mb-2",
                stat.highlight ? "text-primary-foreground/80" : "text-muted-foreground",
              )}
            >
              {stat.label}
            </span>

            <div className="text-5xl font-mono font-bold mb-1">
              <Counter value={stat.value} duration={2 + idx * 0.5} />
              {stat.unit === "%" && "%"}
            </div>

            <span
              className={cn(
                "text-sm font-medium",
                stat.highlight ? "text-primary-foreground/90" : "text-foreground",
              )}
            >
              {stat.unit}
            </span>

            {/* Context tooltip/expansion */}
            {stat.context && (
              <div className="mt-3 flex items-center gap-2 text-xs opacity-70">
                <Info className="w-4 h-4" />
                <span>Tap for details</span>
              </div>
            )}

            {/* Expanded context */}
            <AnimatePresence>
              {expandedStat === idx && stat.context && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-current/20"
                >
                  <p
                    className={cn(
                      "text-sm",
                      stat.highlight ? "text-primary-foreground/90" : "text-foreground/80",
                    )}
                  >
                    {stat.context}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {/* Visual representation (Circles) */}
        {visual === "circles" && (
          <div className="flex flex-wrap justify-center gap-2 max-w-xs mt-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + i * 0.1 }}
                className="w-4 h-4 rounded-full bg-primary"
              />
            ))}
            {caption && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="w-full text-center text-sm text-muted-foreground mt-2 italic"
              >
                {caption}
              </motion.p>
            )}
          </div>
        )}
      </div>
    </div>
  );
});
