/**
 * Glossary Schema Generators
 *
 * PURPOSE: Generate JSON-LD structured data for glossary term pages
 *
 * This file provides schema generators for:
 * - DefinedTerm: Schema.org type for glossary definitions
 * - FAQPage: For "What is X?" FAQ-style rich snippets
 *
 * @see docs/SEO/mini-plans/01-ai-glossary.md for implementation plan
 */

import { SITE_BRAND_NAME, siteAbsoluteUrl } from "@/lib/site-brand";

export interface GlossaryTerm {
  term: string;
  definition: string;
  slug: string;
}

/**
 * Generate DefinedTerm schema for individual glossary terms
 *
 * PURPOSE: Creates Schema.org DefinedTerm structured data for SEO
 *
 * @param term - Glossary term object with definition data
 * @returns JSON-LD DefinedTerm schema object
 *
 * @see https://schema.org/DefinedTerm
 */
export function generateDefinedTermSchema(term: GlossaryTerm) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${SITE_BRAND_NAME} AI Glossary`,
      url: siteAbsoluteUrl("/glossary"),
    },
  };
}

/**
 * Generate FAQPage schema for glossary terms
 *
 * PURPOSE: Creates FAQ-style structured data for "What is X?" searches
 * This helps capture featured snippets and rich results in Google
 *
 * @param term - Glossary term object with definition data
 * @returns JSON-LD FAQPage schema object
 *
 * @see https://schema.org/FAQPage
 */
export function generateGlossaryFAQSchema(term: GlossaryTerm) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: {
      "@type": "Question",
      name: `What is ${term.term}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: term.definition,
      },
    },
  };
}

/**
 * Generate BreadcrumbList schema for glossary term pages
 *
 * PURPOSE: Creates breadcrumb navigation structured data
 *
 * @param termName - Name of the glossary term
 * @param termSlug - URL slug for the term
 * @returns JSON-LD BreadcrumbList schema object
 */
export function generateGlossaryBreadcrumbSchema(termName: string, termSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Glossary",
        item: siteAbsoluteUrl("/glossary"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: termName,
        item: siteAbsoluteUrl(`/glossary/${termSlug}`),
      },
    ],
  };
}

/**
 * Generate combined schemas for a glossary term page
 *
 * PURPOSE: Returns all applicable schemas for a term page in one call
 *
 * @param term - Glossary term object
 * @returns Object containing DefinedTerm, FAQPage, and Breadcrumb schemas
 */
export function generateGlossarySchemas(term: GlossaryTerm) {
  return {
    definedTermSchema: generateDefinedTermSchema(term),
    faqSchema: generateGlossaryFAQSchema(term),
    breadcrumbSchema: generateGlossaryBreadcrumbSchema(term.term, term.slug),
  };
}
