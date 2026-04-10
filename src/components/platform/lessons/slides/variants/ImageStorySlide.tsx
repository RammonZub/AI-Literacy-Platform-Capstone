import { motion } from "framer-motion";
import Image from "next/image";
import React, { memo } from "react";
import { cn } from "@/lib/utils/cn";
import type { LessonSlide } from "@/types/content";

interface ImageStorySlideProps {
  slide: LessonSlide;
}

export default memo(function ImageStorySlide({ slide }: ImageStorySlideProps) {
  const { content } = slide;
  const {
    title,
    body,
    imageUrl,
    imagePosition = "center",
    overlay = "gradient",
    textPosition = "bottom",
    coverStyle = "full-bleed",
  } = content;

  if (!imageUrl) return null;

  // =====================================================
  // COVER CARD STYLE (rounded top image + overlapping panel)
  // =====================================================
  if (coverStyle === "rounded-overlay") {
    return (
      <div className="h-full w-full bg-background px-6 pt-10 pb-8 flex flex-col">
        <div className="w-full max-w-md mx-auto flex-1 min-h-0 flex flex-col">
          {/* Image (rounded top corners only) */}
          <div className="relative h-72 rounded-t-3xl overflow-hidden bg-black">
            <Image
              src={imageUrl}
              alt={title || "Lesson cover"}
              className={cn(
                "object-cover opacity-90",
                imagePosition === "top" && "object-top",
                imagePosition === "bottom" && "object-bottom",
                imagePosition === "center" && "object-center",
                imagePosition === "left" && "object-left",
                imagePosition === "right" && "object-right",
              )}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 480px"
            />

            {/* Keep overlay subtle so it feels “clean” */}
            {overlay !== "none" && (
              <div
                className={cn(
                  "absolute inset-0",
                  overlay === "gradient" &&
                    "bg-linear-to-t from-black/70 via-black/25 to-transparent",
                  overlay === "solid" && "bg-black/30",
                )}
              />
            )}
          </div>

          {/* Overlapping content panel */}
          <div className="-mt-8 rounded-t-3xl bg-background border border-border shadow-sm px-6 pt-6 pb-6 flex-1 min-h-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={cn(textPosition === "center" && "text-center")}
            >
              {title && (
                <h2 className="text-3xl font-serif font-bold text-foreground leading-tight tracking-tight">
                  {title}
                </h2>
              )}
              {body && (
                <p className="mt-3 text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {body}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full relative overflow-hidden bg-black text-white">
      {/* Background Image with subtle parallax/scale */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={imageUrl}
          alt={title || "Slide background"}
          className={cn(
            "object-cover opacity-80",
            imagePosition === "top" && "object-top",
            imagePosition === "bottom" && "object-bottom",
            imagePosition === "center" && "object-center",
          )}
          fill
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      {overlay !== "none" && (
        <div
          className={cn(
            "absolute inset-0 z-10",
            overlay === "gradient" && "bg-linear-to-t from-black/90 via-black/40 to-transparent",
            overlay === "solid" && "bg-black/40",
          )}
        />
      )}

      {/* Content */}
      <div
        className={cn(
          "absolute inset-0 z-20 flex flex-col p-8",
          textPosition === "bottom" && "justify-end",
          textPosition === "top" && "justify-start pt-20",
          textPosition === "center" && "justify-center text-center",
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title && (
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight tracking-tight">
              {title}
            </h2>
          )}
          {body && (
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed whitespace-pre-wrap">
              {body}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
});
