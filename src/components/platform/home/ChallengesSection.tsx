/**
 * Challenges Section Component
 *
 * PURPOSE: Dedicated section for displaying challenge modules on the home page
 *
 * CONTEXT: Part of the home page redesign, this section showcases challenge-based
 * learning modules (primarily the 28-Day AI Challenge). Reuses the existing
 * ChallengeCard component for consistency.
 *
 * KEY RESPONSIBILITIES:
 * - Display section header with "Challenges" title
 * - Provide "See All" link to /platform/challenges
 * - Render ChallengeCard for the primary challenge module
 * - Handle empty state when no challenge module exists
 *
 * IMPLEMENTATION NOTES:
 * - Uses getChallengeModule() to find modules with courseType: 'challenge'
 * - Returns null if no challenge module exists (clean empty state)
 * - Follows platform design patterns for section headers
 * - Consistent spacing with other home page sections (mb-6)
 */

import Link from "next/link";
import React from "react";
import ChallengeCard from "@/components/platform/learning/ChallengeCard";
import { getChallengeModule } from "@/data/content";

/**
 * ChallengesSection Component
 *
 * Displays the featured challenge module with a "See All" link
 *
 * @returns Challenge section component or null if no challenges exist
 */
export default function ChallengesSection() {
  const challengeModule = getChallengeModule();

  // Return null if no challenge module exists (clean empty state)
  if (!challengeModule) {
    return null;
  }

  return (
    <section className="mb-6">
      {/* Section Header with Title and See All Link */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">Challenges</h2>
        <Link
          href="/platform/challenges"
          className="text-sm font-medium text-primary hover:underline"
        >
          See All
        </Link>
      </div>

      {/* Challenge Card */}
      <ChallengeCard />
    </section>
  );
}
