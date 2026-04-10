"use client";

function JourneyNodeSkeleton({
  align = "center",
}: {
  align?: "left" | "center" | "right";
}) {
  const alignmentClass =
    align === "left"
      ? "justify-start"
      : align === "right"
        ? "justify-end"
        : "justify-center";

  return (
    <div className={`flex w-full ${alignmentClass}`}>
      <div className="flex flex-col items-center gap-3">
        <div className="h-20 w-20 rounded-2xl bg-muted" />
        <div className="h-3 w-20 rounded bg-muted" />
      </div>
    </div>
  );
}

function JourneyPairRowSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <JourneyNodeSkeleton align="center" />
      <JourneyNodeSkeleton align="center" />
    </div>
  );
}

export default function ModuleJourneySkeleton() {
  return (
    <div className="animate-pulse space-y-8">
      {[0, 1].map((chapterIndex) => (
        <section key={chapterIndex} className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-3 h-4 w-24 rounded-full bg-muted" />
            <div className="mb-2 h-7 w-48 rounded-xl bg-muted" />
            <div className="h-4 w-5/6 rounded bg-muted" />
          </div>

          <div className="space-y-8 px-2">
            <JourneyPairRowSkeleton />
            <JourneyNodeSkeleton align="center" />
            <JourneyPairRowSkeleton />
            <JourneyNodeSkeleton align="center" />
          </div>
        </section>
      ))}

      <section className="rounded-3xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between gap-4">
          <div className="h-4 w-28 rounded-full bg-muted" />
          <div className="h-4 w-12 rounded bg-muted" />
        </div>
        <div className="mb-5 h-2.5 w-full rounded-full bg-muted" />

        <div className="rounded-3xl border border-dashed border-border bg-background p-5">
          <div className="mb-4 h-5 w-40 rounded-xl bg-muted" />
          <div className="h-40 rounded-2xl bg-muted/80" />
        </div>
      </section>
    </div>
  );
}
