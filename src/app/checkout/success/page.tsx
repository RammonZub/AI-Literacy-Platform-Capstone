/**
 * Post-payment success at `/checkout/success`.
 */

import { redirect } from "next/navigation";
import { AnonymousUserAuth, CheckoutSuccessContent } from "@/components/checkout";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;

  if (!params.session_id) {
    redirect("/");
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const isAuthenticated = !!user;

  return (
    <CheckoutSuccessContent
      sessionId={params.session_id}
      isAuthenticated={isAuthenticated}
      anonymousAuthComponent={<AnonymousUserAuth sessionId={params.session_id} />}
    />
  );
}
