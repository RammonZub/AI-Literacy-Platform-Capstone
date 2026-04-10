/**
 * Learn Layout
 *
 * PURPOSE: Layout wrapper for course landing pages with navbar, footer, and analytics.
 *
 * CONTEXT:
 * This layout provides the Navbar and Footer for all course landing pages,
 * plus analytics tracking for UTM capture and error monitoring.
 *
 * DESIGN:
 * - Navbar with course-specific links
 * - Footer consistent with main landing page
 * - UTM capture for marketing attribution
 * - Error tracking for monitoring
 *
 * @see /learn/[slug]/page.tsx for course landing pages
 */

import { ErrorTracker } from "@/components/analytics";
import Footer from "@/components/landing/Footer";
import { LearnCourseNavbar } from "@/components/landing/learn";

/**
 * Learn Layout Component
 *
 * Provides Navbar, Footer, and analytics tracking for all course landing pages.
 */
export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <LearnCourseNavbar />

      {/* Analytics */}
      <ErrorTracker />

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
