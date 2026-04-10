/**
 * /courses Redirect Page
 *
 * PURPOSE: Redirect `/courses` to the primary canonical public course while we
 * still use direct-entry course pages instead of a full catalog index.
 */

import { redirect } from "next/navigation";

export default function CoursesPage() {
  redirect("/courses/ai-fundamentals");
}
