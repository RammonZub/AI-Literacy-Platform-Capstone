"use client";

/**
 * Challenge Page Route - REDIRECT to /task
 *
 * PURPOSE: Redirects `/challenge` requests to the lesson task route.
 *
 * CONTEXT: End-of-lesson activities use the "task" label
 * to avoid confusion with the 28-Day AI Challenge course (Module 10).
 */

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ChallengePage() {
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    // Redirect to /task
    router.replace(`/platform/module/${params.moduleId}/lesson/${params.lessonId}/task`);
  }, [params.moduleId, params.lessonId, router]);

  return (
    <div className="h-full bg-background flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground">Redirecting to task...</div>
    </div>
  );
}
