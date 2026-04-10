/**
 * Redirect `/learn/[slug]` requests to `/courses/[slug]`.
 */

import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CourseLandingPage({ params }: PageProps) {
  const { slug } = await params;
  if (slug === "ai-foundations") {
    redirect("/courses/ai-fundamentals");
  }
  redirect(`/courses/${slug}`);
}
