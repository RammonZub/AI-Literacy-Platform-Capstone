/**
 * CourseHighlights Component
 *
 * PURPOSE: Display "What You'll Learn" section with learning outcomes on course landing pages.
 *
 * CONTEXT: Part of the course landing page design. Shows 4 key learning outcomes
 * in a bento grid layout, helping prospective learners understand course value.
 *
 * KEY RESPONSIBILITIES:
 * - Display section header with customizable title
 * - Render 4 highlight cards in responsive bento grid
 * - Show numbered circles for each highlight
 * - Provide hover effects for interactivity
 *
 * IMPLEMENTATION NOTES:
 * - Server Component (no useState/useEffect)
 * - Responsive grid: 1 col mobile, 2 cols tablet, 4 cols desktop
 * - Clean, scannable layout with hover effects
 *
 * DESIGN RATIONALE:
 * - Bento grid pattern provides visual interest and hierarchy
 * - Numbered circles create clear progression
 * - Hover effects add interactivity without client-side JS
 * - Gray background separates from adjacent sections
 */

import React from "react";

// ==========================================
// TYPES
// ==========================================

export interface CourseHighlightsProps {
  /** Array of 4 learning outcome descriptions */
  highlights: string[];
  /** Optional custom title, defaults to "What You'll Learn" */
  title?: string;
}

// ==========================================
// COMPONENT
// ==========================================

/**
 * CourseHighlights Component
 *
 * Displays learning outcomes in a responsive bento grid layout.
 * Each highlight features a numbered circle and description text.
 */
export default function CourseHighlights({
  highlights,
  title = "What You'll Learn",
}: CourseHighlightsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>

      {/* Bento Grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl hover:shadow-md transition-shadow duration-200"
          >
            {/* Numbered Circle Icon */}
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4 font-semibold">
              {index + 1}
            </div>

            {/* Highlight Text */}
            <p className="text-gray-700 leading-relaxed">{highlight}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
