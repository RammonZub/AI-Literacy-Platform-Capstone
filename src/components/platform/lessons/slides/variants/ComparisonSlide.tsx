import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import React, { memo } from "react";
import { cn } from "@/lib/utils/cn";
import type { LessonSlide } from "@/types/content";

interface ComparisonSlideProps {
  slide: LessonSlide;
}

export default memo(function ComparisonSlide({ slide }: ComparisonSlideProps) {
  const { content } = slide;
  const { leftSide, rightSide, title } = content;

  if (!leftSide || !rightSide) return null;

  return (
    <div className="h-full w-full flex flex-col bg-background p-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-serif font-bold text-foreground mb-6 text-center"
      >
        {title}
      </motion.h2>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 h-full overflow-y-auto">
        {/* Left Side - The "Before" or "Casual" */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card/50 rounded-2xl p-6 border border-border flex flex-col h-full"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <span className="text-sm font-bold text-muted-foreground">
                {leftSide.badge || "A"}
              </span>
            </div>
            <h3 className="font-bold text-muted-foreground">{leftSide.label}</h3>
          </div>

          <ul className="space-y-4 flex-1">
            {leftSide.items.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <X className="w-5 h-5 shrink-0 mt-0.5 opacity-50" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {leftSide.image && (
            <div className="mt-4 rounded-xl overflow-hidden h-32 w-full relative">
              {/* Use a real Next/Image in production, simple img for now */}
              <img
                src={leftSide.image}
                alt="Before"
                className="object-cover w-full h-full opacity-60 grayscale"
              />
            </div>
          )}
        </motion.div>

        {/* Right Side - The "After" or "Pro" */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-primary/5 rounded-2xl p-6 border-2 border-primary/20 flex flex-col h-full relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-2">
            <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
              {rightSide.badge === "95%" ? "PRO" : "NEW"}
            </span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">
                {rightSide.badge || "B"}
              </span>
            </div>
            <h3 className="font-bold text-foreground">{rightSide.label}</h3>
          </div>

          <ul className="space-y-4 flex-1">
            {rightSide.items.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="flex items-start gap-3 text-foreground"
              >
                <Check className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {rightSide.image && (
            <div className="mt-4 rounded-xl overflow-hidden h-32 w-full relative">
              <img src={rightSide.image} alt="After" className="object-cover w-full h-full" />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
});
