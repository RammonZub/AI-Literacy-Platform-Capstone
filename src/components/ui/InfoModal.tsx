/**
 * Info Modal Component
 *
 * PURPOSE: Reusable pop-up modal for displaying informational content about cards
 *
 * CONTEXT: Used by ModuleCard and LessonCard to show detailed
 * information when users click the info icon in the top-right corner.
 *
 * KEY RESPONSIBILITIES:
 * - Display cover image (hero), title, description, and additional details
 * - Scale-in animation (pop-up) instead of slide-up
 * - Backdrop overlay with dismiss-on-click
 * - Beautiful, immersive design with image header
 *
 * IMPLEMENTATION NOTES:
 * - Uses framer-motion for smooth spring animations
 * - Centered on screen (dialog pattern) rather than bottom sheet
 * - Rounded corners (rounded-2xl)
 */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import type React from "react";
import PlatformRail from "@/components/layout/PlatformRail";

// ==========================================
// TYPES
// ==========================================

interface InfoModalProps {
  /** Controls whether the modal is visible */
  isOpen: boolean;
  /** Callback when modal is closed (backdrop click or close button) */
  onClose: () => void;
  /** Bold heading displayed at top of modal */
  title: string;
  /** Main description content */
  description?: string;
  /** Optional array of additional details to display as bullets */
  details?: string[];
  /** Optional footer content */
  footer?: React.ReactNode;
  /** Optional cover image URL for modal header */
  coverImage?: string;
  /** Optional cover title overlay on image */
  coverTitle?: string;
}

// ==========================================
// COMPONENT
// ==========================================

export function InfoModal({
  isOpen,
  onClose,
  title,
  description,
  details,
  footer,
  coverImage,
  coverTitle,
}: InfoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ==========================================
              BACKDROP OVERLAY
              ========================================== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* ==========================================
              MODAL CONTENT
              ========================================== */}
          <div className="fixed inset-0 z-[201] pointer-events-none">
            <PlatformRail className="h-full flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  duration: 0.2,
                }}
                className="bg-card w-full max-w-md rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* ==========================================
                    COVER IMAGE HEADER
                    ========================================== */}
                {coverImage && (
                  <div className="relative h-48 shrink-0 w-full overflow-hidden">
                    <Image
                      src={coverImage}
                      alt={title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 640px) 100vw, 500px"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Cover title overlay */}
                    {coverTitle && (
                      <div className="absolute bottom-4 left-5 right-5">
                        <h1 className="text-xl font-bold text-white font-serif leading-tight">
                          {coverTitle}
                        </h1>
                      </div>
                    )}

                    {/* Close button */}
                    <button
                      onClick={onClose}
                      className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md transition-all z-20 text-white border border-white/10"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" strokeWidth={2.5} />
                    </button>
                  </div>
                )}

                {/* ==========================================
                    CONTENT SECTION
                    ========================================== */}
                <div className="flex-1 overflow-y-auto p-5 scrollbar-hide">
                  {/* Title (if no cover title) */}
                  {(!coverImage || title !== coverTitle) && (
                    <h2 className="text-xl font-bold text-foreground mb-3 leading-tight">
                      {title}
                    </h2>
                  )}

                  {/* Description */}
                  {description && (
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      {description}
                    </p>
                  )}

                  {/* Details Pills */}
                  {details && details.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {details.map((detail, index) => (
                        <div
                          key={index}
                          className="bg-secondary/50 px-3 py-1.5 rounded-lg border border-border/50"
                        >
                          <p className="text-xs font-medium text-foreground">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Footer */}
                  {footer && (
                    <div className="mt-2 pt-4 border-t border-border/50">
                      {footer}
                    </div>
                  )}
                </div>
              </motion.div>
            </PlatformRail>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default InfoModal;
