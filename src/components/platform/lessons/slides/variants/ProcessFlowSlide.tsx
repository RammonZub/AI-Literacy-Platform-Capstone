import { AnimatePresence, motion } from "framer-motion";
import React, { memo, useCallback, useMemo, useState } from "react";
import { cn } from "@/lib/utils/cn";
import type { LessonSlide } from "@/types/content";

interface ProcessFlowSlideProps {
  slide: LessonSlide;
}

export default memo(function ProcessFlowSlide({ slide }: ProcessFlowSlideProps) {
  const { content } = slide;
  const { title, steps } = content;
  const [activeIdx, setActiveIdx] = useState<number | null>(0);
  const safeSteps = useMemo(() => (steps ?? []).filter(Boolean), [steps]);

  const toggleStep = useCallback((idx: number) => {
    setActiveIdx((prev) => (prev === idx ? null : idx));
  }, []);

  if (safeSteps.length === 0) return null;

  return (
    <div className="h-full w-full flex flex-col bg-background p-6">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="text-2xl font-serif font-bold text-foreground mb-2 text-center"
      >
        {title}
      </motion.h2>
      <p className="text-center text-sm text-muted-foreground mb-6">
        Tap a step to reveal details.
      </p>

      {/* Journey Container */}
      <div className="flex-1 relative max-w-lg mx-auto w-full">
        {/* Continuous Path Line */}
        <div className="absolute left-[23px] top-4 bottom-12 w-0.5 bg-linear-to-b from-primary/20 via-primary/40 to-primary/5 rounded-full" />

        <div className="space-y-10 relative pb-12">
          {safeSteps.map((step, idx) => {
            const isActive = activeIdx === idx;

            return (
              <motion.div
                key={`${step.label}-${idx}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04, duration: 0.25, ease: "easeOut" }}
                className="flex gap-5"
              >
                {/* Node / Marker */}
                <div className="relative shrink-0">
                  <motion.button
                    type="button"
                    onClick={() => toggleStep(idx)}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center border-4 border-background z-10 relative shadow-sm transition-colors duration-200",
                      "font-bold font-mono",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-foreground hover:bg-muted",
                    )}
                  >
                    {step.icon || step.number}
                  </motion.button>

                  {/* Subtle glow */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-full scale-150 transition-opacity duration-300",
                      isActive ? "opacity-100 bg-primary/20" : "opacity-0",
                    )}
                  />
                </div>

                {/* Content Card */}
                <div className="flex-1 pt-1">
                  <button
                    type="button"
                    onClick={() => toggleStep(idx)}
                    className={cn(
                      "w-full text-left rounded-xl p-5 shadow-sm border backdrop-blur-sm transition-all duration-200",
                      isActive
                        ? "bg-card border-primary/30 shadow-md"
                        : "bg-card/50 border-border/50 hover:bg-card hover:shadow-md hover:border-primary/20",
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-bold text-lg text-foreground">{step.label}</h3>
                      <span className="text-xs font-medium text-primary">
                        {isActive ? "Hide" : "Tap"}
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive ? (
                        <motion.p
                          key="detail"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="text-muted-foreground text-sm leading-relaxed mt-2 overflow-hidden"
                        >
                          {step.detail}
                        </motion.p>
                      ) : (
                        <motion.p
                          key="teaser"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="text-muted-foreground text-sm leading-relaxed mt-2 line-clamp-1"
                        >
                          {step.detail}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* End Cap */}
        <div className="absolute left-[19px] bottom-0 w-3 h-3 rounded-full bg-primary/20" />
      </div>
    </div>
  );
});
