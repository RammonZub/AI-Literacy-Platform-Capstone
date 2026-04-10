/**
 * Conversation-Style Slide Component
 *
 * PURPOSE: Chat-style dialogue slides showing user-AI interactions
 *
 * WHY THIS DESIGN:
 * - Everyone understands chat UI (iMessage, WhatsApp)
 * - Shows dialogue naturally, not as a "diagram"
 * - Feels authentic and relatable, not corporate
 * - No borders, cards, or UI chrome - just messages
 *
 * KEY RESPONSIBILITIES:
 * - Chat bubbles on alternating sides (user right, AI left)
 * - User messages in primary color (blue), AI in neutral (gray)
 * - No borders - colored backgrounds only
 * - Optional timestamps for realism
 * - Scrollable if many messages
 * - Minimal, familiar interface
 *
 * IMPLEMENTATION NOTES:
 * - User bubble: bg-primary with rounded-tr-sm (no top-right corner)
 * - AI bubble: bg-muted with rounded-tl-sm (no top-left corner)
 * - Max width: max-w-[80%] for bubbles (natural chat feel)
 * - Flex-col-reverse for auto-scroll to bottom (like real chat apps)
 * - No click-to-reveal or expand - all messages visible directly
 *
 * ANTI-TEMPLATE PRINCIPLES:
 * - No "callout" boxes or highlight badges
 * - No icons or decorations in bubbles
 * - No borders or shadows on bubbles
 * - Just pure conversation, like a real chat screenshot
 *
 * DEPENDENCIES:
 * - @/types/content: LessonSlide interface
 * - @/lib/utils/cn: className utility
 *
 * @see StatementSlide - Similar minimal approach but for quotes
 * @see ArticleSlide - For longer-form content
 * @created 2026-02-03
 */

"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils/cn";
import type { LessonSlide } from "@/types/content";

interface ConversationSlideProps {
  slide: LessonSlide;
}

interface Message {
  role: "user" | "ai";
  text: string;
  time?: string;
}

function normalizeMessage(input: unknown): Message {
  if (!input || typeof input !== "object") {
    return { role: "ai", text: "" };
  }

  const record = input as Partial<Message>;

  return {
    role: record.role === "user" ? "user" : "ai",
    text: typeof record.text === "string" ? record.text : "",
    time: typeof record.time === "string" ? record.time : undefined,
  };
}

export default function ConversationSlide({ slide }: ConversationSlideProps) {
  const { content } = slide;
  const { title, messages } = content;

  // Type guard for messages array
  const chatMessages: Message[] =
    messages && Array.isArray(messages)
      ? messages.map((msg) => normalizeMessage(msg))
      : [];

  if (chatMessages.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-background p-8">
        <p className="text-muted-foreground">No conversation messages found</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col bg-background overflow-hidden">
      {/* =====================================================
          OPTIONAL HEADER - Title above chat
          ===================================================== */}
      {title && (
        <div className="flex-shrink-0 px-6 pt-8 pb-4">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-serif font-bold text-foreground text-center"
          >
            {title}
          </motion.h2>
        </div>
      )}

      {/* =====================================================
          CHAT CONTAINER - Scrollable message list
          ===================================================== */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="max-w-2xl mx-auto space-y-4">
          {chatMessages.map((message, index) => {
            const isUser = message.role === "user";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={cn(
                  "flex w-full",
                  // User messages on right, AI on left
                  isUser ? "justify-end" : "justify-start",
                )}
              >
                {/* =====================================================
                    CHAT BUBBLE
                    ===================================================== */}
                <div
                  className={cn(
                    "max-w-[80%] px-4 py-3",
                    // User bubble: primary color, rounded top-right
                    isUser && "bg-primary text-primary-foreground rounded-2xl rounded-tr-sm",
                    // AI bubble: neutral gray, rounded top-left
                    !isUser && "bg-muted text-foreground rounded-2xl rounded-tl-sm",
                  )}
                >
                  {/* =====================================================
                      MESSAGE TEXT
                      ===================================================== */}
                  <p
                    className={cn(
                      "text-sm leading-relaxed whitespace-pre-wrap",
                      // Larger text for short messages
                      message.text.length < 50 && "text-base",
                    )}
                  >
                    {message.text}
                  </p>

                  {/* =====================================================
                      OPTIONAL TIMESTAMP
                      ===================================================== */}
                  {message.time && (
                    <p
                      className={cn(
                        "text-xs mt-1 opacity-70",
                        isUser ? "text-primary-foreground/70" : "text-muted-foreground",
                      )}
                    >
                      {message.time}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          OPTIONAL: GRADIENT FADE AT BOTTOM
          ===================================================== */}
      <div className="flex-shrink-0 h-8 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
