/**
 * Lesson Layout
 *
 * Lesson routes replace the standard platform chrome and need to sit flush with
 * the top of the viewport. Keep the route wrapper in normal document flow so
 * article lessons can use native page scrolling instead of a nested scroll box.
 */

import type React from "react";

export default function LessonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative bg-background z-[9999]"
      style={{
        marginTop: "calc(var(--platform-header-height, 4rem) * -1)",
        minHeight: "calc(100vh + var(--platform-header-height, 4rem))",
      }}
      data-lesson-layout
    >
      {children}
    </div>
  );
}
