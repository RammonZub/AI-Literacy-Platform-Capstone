/**
 * Footer Component
 *
 * PURPOSE: Professional footer with branded CTA section and organized links
 *
 * LAYOUT:
 *   - Desktop: Brand section (left) + Links grid (right) - horizontal
 *   - Mobile: Brand section (top) + Links grid (bottom) - stacked
 *
 * SECTIONS:
 *   - Brand: Logo, tagline, CTA button
 *   - AI Tools Courses: ChatGPT, Claude, Gemini, Midjourney
 *   - Foundations & Skills: AI Foundations, Prompt Engineering, etc.
 *   - Resources: Blog, Glossary, All Courses
 *   - Company: Contact, For Companies
 *   - Legal: Terms, Privacy, Refunds
 */

import Link from "next/link";

import { BrandGrainMark } from "@/components/shared/BrandGrainMark";
import { gemColors } from "@/data/design/tokens";
import { SITE_BRAND_NAME } from "@/lib/site-brand";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const aiToolsCourses = [
    { slug: "chatgpt", title: "ChatGPT" },
    { slug: "claude", title: "Claude" },
    { slug: "gemini", title: "Gemini" },
    { slug: "midjourney", title: "Midjourney" },
  ];

  const foundationsCourses = [
    { slug: "ai-fundamentals", title: "AI Fundamentals" },
    { slug: "prompt-engineering", title: "Prompt Engineering" },
    { slug: "ai-productivity", title: "AI Productivity" },
    { slug: "ai-content-creation", title: "AI Content Creation" },
    { slug: "28-day-ai-challenge", title: "28-Day Challenge" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4 text-left">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <BrandGrainMark size="md" className="rounded-lg" />
              <span className="font-semibold text-xl text-gray-900">{SITE_BRAND_NAME}</span>
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed mb-5 max-w-xs">
              Master AI tools like ChatGPT, Claude, and Midjourney with hands-on courses
              designed for non-tech professionals.
            </p>

            <Link
              href="/onboarding"
              className="inline-flex items-center justify-center text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: gemColors.blue }}
            >
              Get Started Free
            </Link>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-3">AI Tools</h4>
                <ul className="space-y-2">
                  {aiToolsCourses.map((course) => (
                    <li key={course.slug}>
                      <Link
                        href={`/courses/${course.slug}`}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {course.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-3">Foundations</h4>
                <ul className="space-y-2">
                  {foundationsCourses.map((course) => (
                    <li key={course.slug}>
                      <Link
                        href={`/courses/${course.slug}`}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {course.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/blog"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/glossary"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      AI Glossary
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/courses"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      All Courses
                    </Link>
                  </li>
                </ul>

                <h4 className="font-semibold text-sm text-gray-900 mb-3 mt-6">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-3">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/refund-policy"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-xs text-gray-500">
            © {currentYear} {SITE_BRAND_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
