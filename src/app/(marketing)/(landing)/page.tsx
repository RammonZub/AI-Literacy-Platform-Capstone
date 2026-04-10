/**
 * Landing Page
 *
 * PURPOSE: Public thesis-artifact homepage that introduces the evaluated
 * microlearning platform and directs visitors into onboarding.
 *
 * CONTEXT: Public homepage in `(marketing)/(landing)`. CTAs drive to onboarding.
 * Server Component composition; interactive sections use 'use client' internally.
 */

import type { Metadata } from "next";
import { ErrorTracker } from "@/components/analytics";
import {
  AIAdvantageCard,
  CertificateSection,
  ChallengeSection,
  CourseTypesSection,
  ExpertSection,
  FAQSection,
  FloatingLogoBlocks,
  Footer,
  HeroSection,
  Navbar,
  WhyUsSectionV2,
} from "@/components/landing";
import HashRedirect from "@/components/shared/HashRedirect";
import { FAQ_ITEMS } from "@/data/seo/faq-data";
import { getPageConfig } from "@/lib/seo/config";
import { PRIMARY_KEYWORDS, SKILL_KEYWORDS, TOOL_KEYWORDS } from "@/lib/seo/keywords";
import { generateFAQPageSchema, generateOrganizationSchema } from "@/lib/seo/schemas";

// ==========================================
// METADATA
// ==========================================

export const metadata: Metadata = getPageConfig("home", {
  keywords: [
    ...PRIMARY_KEYWORDS,
    ...TOOL_KEYWORDS.chatgpt,
    ...TOOL_KEYWORDS.claude,
    ...TOOL_KEYWORDS.gemini,
    ...SKILL_KEYWORDS.prompting,
    ...SKILL_KEYWORDS.productivity,
  ],
  openGraph: {
    images: [
      {
        url: "/og-image.png",
        width: 3600,
        height: 1890,
      },
    ],
  },
  twitter: {
    images: ["/og-image.png"],
  },
});

// ==========================================
// PAGE
// ==========================================

export default function LandingPage(): React.JSX.Element {
  const faqSchema = generateFAQPageSchema(FAQ_ITEMS);
  const orgSchema = generateOrganizationSchema();

  return (
    <main className="min-h-screen bg-white">
      {/* Analytics: Capture UTM params and track errors */}
      {/* Page tracking is handled by SimplePageTracker in root layout */}
      <ErrorTracker />

      {/* JSON-LD Structured Data for SEO - Separate schemas for clarity */}

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            ...orgSchema,
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: orgSchema.url,
              },
            ],
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            ...faqSchema,
          }),
        }}
      />
      {/* Catches Supabase implicit-flow redirects (/#access_token=...) and
          forwards them to /auth/callback. Renders nothing when no hash. */}
      <HashRedirect />
      <Navbar />
      <HeroSection />
      <FloatingLogoBlocks />
      <AIAdvantageCard />
      <CourseTypesSection />
      <WhyUsSectionV2 />
      <ChallengeSection />
      <CertificateSection />
      <ExpertSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
