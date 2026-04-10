/**
 * /learn Redirect Page
 *
 * PURPOSE: Redirect `/learn` to the public course entry.
 *
 * Since there is no dedicated catalog index, `/learn` lands on the same
 * primary course as `/courses`.
 */

import { redirect } from "next/navigation";

export default function LearnPage() {
  redirect("/courses/ai-fundamentals");
}
