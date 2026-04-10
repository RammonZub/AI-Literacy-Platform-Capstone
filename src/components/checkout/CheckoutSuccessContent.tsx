/**
 * CheckoutSuccessContent — post-Stripe success shell and auth handoff.
 */

import type { ReactNode } from "react";

export interface CheckoutSuccessContentProps {
  sessionId: string;
  isAuthenticated: boolean;
  anonymousAuthComponent: ReactNode;
}

export function CheckoutSuccessContent({
  sessionId: _sessionId,
  isAuthenticated,
  anonymousAuthComponent,
}: CheckoutSuccessContentProps) {
  void _sessionId;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-12">
      {isAuthenticated ? (
        <div className="max-w-md space-y-4 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">Payment successful</h1>
          <p className="text-gray-600">Taking you to onboarding next...</p>
        </div>
      ) : (
        <div className="max-w-md space-y-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">Payment successful</h1>
          <p className="text-gray-600">Finish setting up your account below.</p>
          {anonymousAuthComponent}
        </div>
      )}
    </div>
  );
}
