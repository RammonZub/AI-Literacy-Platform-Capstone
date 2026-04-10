/**
 * Redirect `/dashboard` requests to `/platform`.
 */
import { redirect } from "next/navigation";

export default function DashboardPage(): never {
  redirect("/platform");
}
