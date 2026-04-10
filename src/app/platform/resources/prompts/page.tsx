/**
 * Prompt Library Page
 *
 * PURPOSE: Main page for browsing and searching prompts.
 *
 * ARCHITECTURE:
 * - Server component for data fetching
 * - Client component (PromptsClient) for interactivity
 *
 * @see PromptsClient.tsx - Client-side search and filtering
 */

import type { Metadata } from "next";

import PromptsClient from "./PromptsClient";

export const metadata: Metadata = {
  title: "Prompt Library | AI-Literacy",
  description:
    "Browse 500+ AI prompts for productivity, communication, marketing, and more. Copy-ready prompts tested across ChatGPT, Claude, and Gemini.",
  robots: {
    index: false,
    follow: false,
  },
};

/**
 * Prompt Library page
 *
 * Displays:
 * - Search bar with filters
 * - Domain cards (horizontal scroll)
 * - Prompt grid with pagination
 */
export default function PromptsPage() {
  return <PromptsClient />;
}
