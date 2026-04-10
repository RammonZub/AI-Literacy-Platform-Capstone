/**
 * Individual Prompt Page
 *
 * PURPOSE: Display a single prompt with full details and quick actions.
 *
 * FEATURES:
 * - Full prompt text with copy button
 * - Quick action buttons to open AI tools
 * - Example output and customization tips
 * - Breadcrumb navigation
 *
 * @see src/app/platform/resources/prompts/ - Parent library
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPromptById, getPromptCategory, getPromptDomainById } from "@/data/content/resources";
import { getAllAIToolConfigs } from "@/lib/ai-tools/urls";
import { PromptDetailClient } from "./PromptDetailClient";

interface PromptPageProps {
  params: Promise<{
    promptId: string;
  }>;
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }: PromptPageProps): Promise<Metadata> {
  const { promptId } = await params;
  const prompt = getPromptById(promptId);

  if (!prompt) {
    return {
      title: "Prompt Not Found | AI-Literacy",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${prompt.title} | Prompt Library | AI-Literacy`,
    description: prompt.description,
    robots: {
      index: false,
      follow: false,
    },
  };
}

/**
 * Individual Prompt page
 *
 * Displays full prompt details with copy and quick actions.
 */
export default async function PromptPage({ params }: PromptPageProps) {
  const { promptId } = await params;
  const prompt = getPromptById(promptId);

  if (!prompt) {
    notFound();
  }

  const domain = getPromptDomainById(prompt.domainId);
  const category = domain ? getPromptCategory(prompt.domainId, prompt.categoryId) : undefined;
  const aiTools = getAllAIToolConfigs();

  return (
    <PromptDetailClient prompt={prompt} domain={domain} category={category} aiTools={aiTools} />
  );
}
