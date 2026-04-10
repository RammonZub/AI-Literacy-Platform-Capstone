/**
 * Marketing route group layout
 *
 * Public marketing pages (landing, /courses, /learn). No funnel error boundary
 * or third-party init here—keep shell minimal.
 */

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
