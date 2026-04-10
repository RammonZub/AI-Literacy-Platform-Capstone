/**
 * Anonymous User Authentication Component
 *
 * PURPOSE: Handles immediate server-side authentication for anonymous users after Stripe checkout
 *
 * CONTEXT: When users complete checkout without being logged in, they arrive at the success
 * page as anonymous users. This component calls the immediate auth API to sign them in.
 *
 * FLOW:
 * 1. Call /api/auth/create-and-signin-from-checkout on mount
 * 2. API verifies payment, creates/grants access, sets cookies server-side
 * 3. API returns `redirectUrl` (typically `/platform` after subscription)
 * 4. Client navigates there — cookies are set on the API response
 *
 * WHY THIS APPROACH:
 * - Server-side sign-in with cookies is INSTANT (no email delay)
 * - Uses signInWithOTP which sets cookies directly in HTTP response
 * - No magic link timing issues or hash fragment complexities
 * - User experiences seamless authentication (~2-3 seconds total)
 *
 * @see src/app/checkout/success/page.tsx — parent component
 * @see src/app/api/auth/create-and-signin-from-checkout/route.ts - API endpoint
 */

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { SITE_SUPPORT_EMAIL } from "@/lib/site-brand";

const isDev = process.env.NODE_ENV === "development";

export function AnonymousUserAuth({ sessionId }: { sessionId: string }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authenticateAnonymousUser = async () => {
      if (!sessionId) {
        setError("No session ID found");
        setIsLoading(false);
        return;
      }

      try {
        if (isDev) console.log("[ANON-AUTH] Calling immediate auth API for session:", sessionId);

        const response = await fetch("/api/auth/create-and-signin-from-checkout", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });

        if (!response.ok) {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const errorData = await response.json();
            if (isDev) console.error("[ANON-AUTH] API error:", errorData);
            setError(errorData.error || "Unable to create your account");
          } else {
            if (isDev)
              console.error("[ANON-AUTH] API error:", response.status, response.statusText);
            setError(
              `Server error (${response.status}). Your payment succeeded, but sign-in did not finish. Please contact support.`,
            );
          }
          setIsLoading(false);
          return;
        }

        const { redirectUrl, email, isNewUser } = await response.json();
        if (isDev) {
          console.log("[ANON-AUTH] Success! Redirecting to:", redirectUrl, {
            email,
            isNewUser,
          });
        }

        // Follow API redirect — session cookies should already be on the response
        router.replace(redirectUrl);
      } catch (err) {
        if (isDev) console.error("[ANON-AUTH] Request failed:", err);
        setError("Unable to create your account. Please contact support.");
        setIsLoading(false);
      }
    };

    authenticateAnonymousUser();
  }, [sessionId, router]);

  if (error) {
    return (
      <div className="space-y-4">
        <div className="rounded-lg bg-red-50 p-4 text-center">
          <p className="text-red-800">{error}</p>
          <p className="mt-2 text-sm text-red-600">
            Please contact{" "}
            <a href={`mailto:${SITE_SUPPORT_EMAIL}`} className="underline">
              support
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-black" />
        </div>
        <p className="text-sm text-gray-400 text-center">
          Setting up your account and signing you in...
        </p>
        <p className="text-xs text-gray-500 text-center">This only takes a few seconds...</p>
      </div>
    );
  }

  return null;
}
