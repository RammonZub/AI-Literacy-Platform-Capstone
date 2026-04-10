/**
 * Prompt Domain Page
 *
 * PURPOSE: Display all prompts within a specific domain with search and filtering.
 *
 * FEATURES:
 * - Hero section with domain gradient and emoji
 * - Search prompts within domain
 * - Filter by category, difficulty, and tool
 * - Organized prompt cards
 *
 * @see src/app/platform/resources/prompts/ - Parent library
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPromptDomainById, getPromptsByDomain } from "@/data/content/resources";
import DomainClient from "./DomainClient";

interface DomainPageProps {
  params: Promise<{
    domainId: string;
  }>;
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }: DomainPageProps): Promise<Metadata> {
  const { domainId } = await params;
  const domain = getPromptDomainById(domainId);

  if (!domain) {
    return {
      title: "Domain Not Found | Prompt Library | AI-Literacy",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${domain.title} Prompts | Prompt Library | AI-Literacy`,
    description: domain.description,
    robots: {
      index: false,
      follow: false,
    },
  };
}

/**
 * Domain detail page
 *
 * Displays all prompts in a domain with search and filtering capabilities.
 */
export default async function DomainPage({ params }: DomainPageProps) {
  const { domainId } = await params;
  const domain = getPromptDomainById(domainId);

  if (!domain) {
    notFound();
  }

  const prompts = getPromptsByDomain(domainId);

  return <DomainClient domain={domain} prompts={prompts} />;
}
