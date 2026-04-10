/**
 * Client signup — email + password, immediate session (no verification email).
 *
 * @see page.tsx — Suspense wrapper for useSearchParams
 */

"use client";

import { Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { readStoredOnboardingSession } from "@/lib/personalization/context";
import { isCompleteOnboardingAnswers } from "@/lib/personalization/onboarding-db";
import { getSafeRedirect } from "@/lib/security/redirect-validation";

export default function SignupPageClient() {
  const searchParams = useSearchParams();
  const afterSignupPath = getSafeRedirect(searchParams.get("redirect"), "/platform");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const storedOnboardingSession = readStoredOnboardingSession();
      const completeOnboardingSession =
        storedOnboardingSession &&
        storedOnboardingSession.result &&
        isCompleteOnboardingAnswers(storedOnboardingSession.answers)
          ? storedOnboardingSession
          : null;

      const response = await fetch("/api/auth/register", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          fullName,
          onboardingSession: completeOnboardingSession,
          redirect: afterSignupPath,
        }),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          typeof payload.error === "string" ? payload.error : "Failed to sign up",
        );
      }

      const nextPath =
        typeof payload.redirect === "string" ? payload.redirect : afterSignupPath;

      // Full navigation so auth cookies from the register response are visible to the next document
      // and server actions (onboarding sync) on /platform — client-only router transitions can race.
      window.location.assign(nextPath);
    } catch (err: Error | unknown) {
      const message = err instanceof Error ? err.message : "Failed to sign up";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black">Create Account</h1>
          <p className="text-gray-500 mt-2">
            Save your progress with email and password. You are signed in as soon as you submit.
          </p>
          <p className="text-sm text-gray-600 mt-4">
            New here?{" "}
            <Link href="/onboarding" className="font-medium text-primary hover:underline">
              Take the free assessment first
            </Link>{" "}
            (no account required).
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          {error && (
            <div
              className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600"
              role="alert"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Your full name"
                autoComplete="name"
                className="w-full h-14 pl-12 pr-4 border-2 border-gray-200 rounded-xl text-base text-black placeholder-gray-400 outline-none transition-all focus:border-black focus:shadow-md"
              />
            </div>

            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full h-14 pl-12 pr-4 border-2 border-gray-200 rounded-xl text-base text-black placeholder-gray-400 outline-none transition-all focus:border-black focus:shadow-md"
              />
            </div>

            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                placeholder="••••••••"
                autoComplete="new-password"
                className="w-full h-14 pl-12 pr-4 border-2 border-gray-200 rounded-xl text-base text-black placeholder-gray-400 outline-none transition-all focus:border-black focus:shadow-md"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              loading={loading}
              disabled={loading}
              className="h-14 text-lg"
            >
              {loading ? "Creating account..." : "Create Account"}
            </Button>
          </form>

          <div className="text-center mt-4">
            <span className="text-gray-500">Already have an account? </span>
            <Link href="/login" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </div>

          <div className="text-center mt-4">
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
