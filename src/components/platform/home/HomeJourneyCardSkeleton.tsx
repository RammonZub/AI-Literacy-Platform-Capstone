"use client";

export default function HomeJourneyCardSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 h-4 w-28 rounded-full bg-muted" />
      <div className="mb-3 h-8 w-3/4 rounded-xl bg-muted" />
      <div className="mb-2 h-4 w-full rounded bg-muted" />
      <div className="mb-5 h-4 w-5/6 rounded bg-muted" />
      <div className="mb-5 h-2.5 w-full rounded-full bg-muted" />
      <div className="flex items-center gap-3">
        <div className="h-11 flex-1 rounded-xl bg-muted" />
        <div className="h-11 w-16 rounded-xl bg-muted" />
      </div>
    </div>
  );
}
