/**
 * Courses Layout
 *
 * PURPOSE: Layout wrapper for public course landing pages at `/courses`.
 *
 * CONTEXT:
 * Shared public layout for the course catalog pages.
 */

import { ErrorTracker } from "@/components/analytics";
import Footer from "@/components/landing/Footer";
import { LearnCourseNavbar } from "@/components/landing/learn";

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <LearnCourseNavbar />
      <ErrorTracker />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
