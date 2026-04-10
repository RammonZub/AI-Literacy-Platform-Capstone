/**
 * ResourcesBanner
 *
 * PURPOSE: Horizontal banner card linking to the Resources library (prompts, workflows, etc.)
 *
 * CONTEXT: Positioned on the platform home page after the WeeklyCalendar.
 * This is a wider, shorter card style for quick access to resources.
 *
 * LAYOUT:
 * - Horizontal flex layout with icon left, content right
 * - Full-width within container
 * - White-to-blue gradient background for visual appeal
 *
 * KEY RESPONSIBILITIES:
 * - Showcase the Resources library with an attractive card
 * - Drive traffic to /platform/resources/prompts
 * - Maintain visual consistency with platform design
 */

import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

// ==========================================
// COMPONENT
// ==========================================

export default function ResourcesBanner() {
  return (
    <section className="mb-6">
      <Link href="/platform/resources/prompts" className="group block">
        <div
          className="relative overflow-hidden rounded-xl transition-all duration-200 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #FFFFFF 0%, #DBEAFE 50%, #BFDBFE 100%)",
            boxShadow: "0 2px 8px rgba(0, 122, 255, 0.08)",
          }}
        >
          {/* Subtle hover overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 122, 255, 0.03) 0%, rgba(0, 122, 255, 0.08) 100%)",
            }}
          />

          {/* Content */}
          <div className="relative p-4 flex items-center gap-4">
            {/* Left: Icon */}
            <div
              className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(180deg, #4DA3FF 0%, #007AFF 100%)",
                boxShadow: "0 4px 12px rgba(0, 122, 255, 0.25)",
              }}
            >
              <BookOpen className="w-6 h-6 text-white" />
            </div>

            {/* Center: Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-gray-900 tracking-tight">
                Library of 500+ Prompts
              </h3>
              <p className="text-sm text-gray-600 mt-0.5">
                Ready-to-use prompts for productivity, creativity, and more
              </p>
            </div>

            {/* Right: Arrow */}
            <div className="shrink-0 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-sm group-hover:bg-white group-hover:shadow-md transition-all duration-200">
              <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
