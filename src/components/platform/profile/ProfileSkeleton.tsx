"use client";

export default function ProfileSkeleton() {
  return (
    <div className="animate-pulse space-y-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-24 w-24 rounded-full bg-muted" />
        <div className="h-7 w-48 rounded-xl bg-muted" />
        <div className="h-4 w-64 rounded bg-muted" />
      </div>

      <div className="h-36 rounded-3xl bg-muted" />

      <div className="grid grid-cols-2 gap-4">
        <div className="h-28 rounded-3xl bg-muted" />
        <div className="h-28 rounded-3xl bg-muted" />
      </div>

      <div className="h-48 rounded-3xl bg-muted" />
    </div>
  );
}
