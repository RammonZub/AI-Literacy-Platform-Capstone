/**
 * Settings Form Component
 *
 * User account settings form.
 */

"use client";

import { useState } from "react";

interface SettingsFormProps {
  className?: string;
}

export default function SettingsForm({ className = "" }: SettingsFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form className={className}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none bg-background"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none bg-background"
            placeholder="you@example.com"
          />
        </div>
      </div>
    </form>
  );
}
