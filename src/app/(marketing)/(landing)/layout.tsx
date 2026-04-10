/**
 * Landing Route Group Layout
 *
 * PURPOSE: Namespace public-facing destination pages that are part of the
 * broader marketing site but are not direct-response funnels.
 *
 * EXAMPLES:
 * - Homepage (`/`)
 * - Public program or offer pages (`/learn`)
 *
 * NOTE:
 * Keep this layout intentionally light. Page-specific chrome such as navbars
 * and footers should remain controlled by the page or its local sub-layout.
 */

export default function MarketingLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
