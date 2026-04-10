/**
 * Article-Style Slide Component
 *
 * A clean, editorial-style slide with:
 * - Top 1/5 visual header
 * - Scrollable article content below
 * - Support for embedded images between paragraphs
 * - Minimal, focused design
 */

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import type { LessonSlide } from "@/types/content";

interface ArticleSlideProps {
  slide: LessonSlide;
}

export default function ArticleSlide({ slide }: ArticleSlideProps) {
  const { content } = slide;
  const { title, body, imageUrl, paragraphs } = content;

  return (
    <div className="h-full w-full flex flex-col bg-background overflow-hidden">
      {/* Header Image - 1/5 of viewport */}
      {imageUrl && (
        <div className="h-[20vh] w-full relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={title || "Article header"}
            className="object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
        </div>
      )}

      {/* Scrollable Article Content */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <article className="max-w-2xl mx-auto">
          {title && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 leading-tight"
            >
              {title}
            </motion.h1>
          )}

          {/* If using simple body text */}
          {body && !paragraphs && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {body.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-lg text-foreground/90 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          )}

          {/* If using structured paragraphs with embedded images */}
          {paragraphs &&
            paragraphs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {item.type === "text" && (
                  <>
                    {(item.content || "").split("\n\n").map((para, paraIdx) => (
                      <p
                        key={`${idx}-${paraIdx}`}
                        className="text-lg text-foreground/90 leading-relaxed mb-6"
                      >
                        {para}
                      </p>
                    ))}
                  </>
                )}
                {item.type === "heading" && (
                  <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    {item.content}
                  </h2>
                )}
                {item.type === "image" && item.src && (
                  <div className="my-8 rounded-xl overflow-hidden relative h-64 w-full">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.src}
                        alt={item.caption || "Article image"}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    {item.caption && (
                      <p className="text-sm text-muted-foreground italic mt-2 text-center">
                        {item.caption}
                      </p>
                    )}
                  </div>
                )}
                {item.type === "list" && item.items && (
                  <ul className="space-y-3 my-6 ml-6">
                    {item.items.map((listItem, listIdx) => (
                      <li
                        key={listIdx}
                        className="text-lg text-foreground/90 leading-relaxed flex items-start"
                      >
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.type === "prompt-card" && item.promptSections && (
                  <div className="relative bg-muted/50 rounded-xl border border-border p-6 mb-6">
                    {/* Copy button */}
                    <button
                      onClick={() => {
                        const text = item.promptSections?.map((s) => s.content).join("\n\n") || "";
                        navigator.clipboard.writeText(text);
                      }}
                      className="absolute top-4 right-4 px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Copy
                    </button>

                    {/* Sections */}
                    <div className="space-y-4 pr-20">
                      {item.promptSections.map((section, secIdx) => (
                        <div key={secIdx} className="relative group">
                          {/* Section label */}
                          <div
                            className={`text-xs font-bold uppercase tracking-wide mb-2 ${
                              section.color === "blue"
                                ? "text-blue-600"
                                : section.color === "green"
                                  ? "text-green-600"
                                  : section.color === "orange"
                                    ? "text-orange-600"
                                    : section.color === "purple"
                                      ? "text-purple-600"
                                      : "text-gray-600"
                            }`}
                          >
                            {section.label}
                          </div>

                          {/* Section content */}
                          <div
                            className={`p-4 rounded-lg border-l-4 ${
                              section.color === "blue"
                                ? "bg-blue-50 dark:bg-blue-950/30 border-blue-600"
                                : section.color === "green"
                                  ? "bg-green-50 dark:bg-green-950/30 border-green-600"
                                  : section.color === "orange"
                                    ? "bg-orange-50 dark:bg-orange-950/30 border-orange-600"
                                    : section.color === "purple"
                                      ? "bg-purple-50 dark:bg-purple-950/30 border-purple-600"
                                      : "bg-gray-50 dark:bg-gray-950/30 border-gray-600"
                            }`}
                          >
                            <p className="text-sm font-mono text-foreground/90 whitespace-pre-line">
                              {section.content}
                            </p>
                          </div>

                          {/* Explanation tooltip (if provided) */}
                          {section.explanation && (
                            <div className="absolute -right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                              <div className="relative">
                                <div className="bg-foreground text-background text-xs p-2 rounded shadow-lg whitespace-nowrap max-w-xs">
                                  {section.explanation}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
        </article>
      </div>
    </div>
  );
}
