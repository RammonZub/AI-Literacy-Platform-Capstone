/**
 * Module Error Boundary
 *
 * Catches errors in module pages and displays a friendly error message.
 */

"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { platformRoutes } from "@/lib/routes/platform";

export default function ModuleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error("Module error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-error"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-3">Failed to load module</h2>
        <p className="text-muted-foreground mb-8">
          {error.message || "Could not load this module. Please try again."}
        </p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-secondary text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-md"
          >
            Try again
          </button>
          <button
            onClick={() => router.push(platformRoutes.home)}
            className="px-6 py-3 bg-card text-foreground border border-border rounded-xl font-semibold hover:bg-muted transition-colors"
          >
            Go home
          </button>
        </div>
      </div>
    </div>
  );
}
