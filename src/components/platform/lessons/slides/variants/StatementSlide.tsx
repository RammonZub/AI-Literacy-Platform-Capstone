import { motion } from "framer-motion";
import React from "react";
import type { LessonSlide } from "@/types/content";

interface StatementSlideProps {
  slide: LessonSlide;
}

export default function StatementSlide({ slide }: StatementSlideProps) {
  const { content } = slide;
  const { title, body } = content;

  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-background p-8 overflow-y-auto">
      <div className="max-w-2xl text-center py-12">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-bold uppercase tracking-widest mb-8"
          >
            {title}
          </motion.h2>
        )}

        {body && (
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-xl md:text-3xl font-serif font-medium leading-relaxed text-foreground whitespace-pre-line"
          >
            {body}
          </motion.p>
        )}
      </div>
    </div>
  );
}
