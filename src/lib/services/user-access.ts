/**
 * User access service — updates `users` row only (has_access, subscription_status).
 * Correlation to Stripe subscriptions uses the Stripe API when the DB has no subscription_id column.
 */

import { stripe } from "@/lib/stripe/client";
import { createServiceClient } from "@/lib/supabase/server";

interface AccessResult {
  success: boolean;
  error?: string;
}

async function resolveUserIdByStripeSubscriptionId(subscriptionId: string): Promise<string | null> {
  const supabaseAdmin = createServiceClient();
  const sub = await stripe.subscriptions.retrieve(subscriptionId);
  const cid = typeof sub.customer === "string" ? sub.customer : sub.customer.id;
  const customer = await stripe.customers.retrieve(cid);
  if (customer.deleted) return null;
  const email = customer.email;
  if (!email) return null;
  const { data } = await supabaseAdmin.from("users").select("id").eq("email", email).maybeSingle();
  return data?.id ?? null;
}

/**
 * Grant platform access after successful checkout.
 */
export async function grantAccess(
  userId: string,
  _subscriptionId: string | null,
  status: string = "active",
  stripeCustomerId?: string | null,
): Promise<AccessResult> {
  try {
    const supabaseAdmin = createServiceClient();

    const { data: currentUser } = await supabaseAdmin
      .from("users")
      .select("has_access, subscription_status")
      .eq("id", userId)
      .maybeSingle();

    if (currentUser?.has_access === true && currentUser.subscription_status === status) {
      return { success: true };
    }

    const { error: dbError } = await supabaseAdmin
      .from("users")
      .update({
        has_access: true,
        subscription_status: status,
      })
      .eq("id", userId);

    if (dbError) {
      console.error("grantAccess: DB update failed:", dbError);
      return { success: false, error: dbError.message };
    }

    const userMetadata: Record<string, unknown> = {
      has_access: true,
      subscription_status: status,
    };
    if (stripeCustomerId) {
      userMetadata.stripe_customer_id = stripeCustomerId;
    }

    const { error: authError } = await supabaseAdmin.auth.admin.updateUserById(userId, {
      user_metadata: userMetadata,
    });

    if (authError) {
      console.error("grantAccess: JWT metadata update failed:", authError);
    }

    return { success: true };
  } catch (error) {
    console.error("grantAccess: Unexpected error:", error);
    return { success: false, error: String(error) };
  }
}

/**
 * Revoke access when Stripe subscription ends.
 */
export async function revokeAccess(subscriptionId: string): Promise<AccessResult> {
  try {
    const userId = await resolveUserIdByStripeSubscriptionId(subscriptionId);
    if (!userId) {
      console.error("revokeAccess: User not found for subscription:", subscriptionId);
      return { success: false, error: "User not found" };
    }

    const supabaseAdmin = createServiceClient();
    const { error: dbError } = await supabaseAdmin
      .from("users")
      .update({
        has_access: false,
        subscription_status: "cancelled",
      })
      .eq("id", userId);

    if (dbError) {
      console.error("revokeAccess: DB update failed:", dbError);
      return { success: false, error: dbError.message };
    }

    await supabaseAdmin.auth.admin.updateUserById(userId, {
      user_metadata: {
        has_access: false,
        subscription_status: "cancelled",
      },
    });

    return { success: true };
  } catch (error) {
    console.error("revokeAccess: Unexpected error:", error);
    return { success: false, error: String(error) };
  }
}

/**
 * Mirror Stripe subscription status onto `users` and JWT metadata.
 */
export async function updateSubscriptionStatus(
  subscriptionId: string,
  stripeStatus: string,
): Promise<AccessResult> {
  try {
    const userId = await resolveUserIdByStripeSubscriptionId(subscriptionId);
    if (!userId) {
      console.error("updateSubscriptionStatus: User not found for subscription:", subscriptionId);
      return { success: false, error: "User not found" };
    }

    const hasAccess = stripeStatus === "active" || stripeStatus === "trialing";
    const supabaseAdmin = createServiceClient();

    const { error: dbError } = await supabaseAdmin
      .from("users")
      .update({
        has_access: hasAccess,
        subscription_status: stripeStatus,
      })
      .eq("id", userId);

    if (dbError) {
      console.error("updateSubscriptionStatus: DB update failed:", dbError);
      return { success: false, error: dbError.message };
    }

    await supabaseAdmin.auth.admin.updateUserById(userId, {
      user_metadata: {
        has_access: hasAccess,
        subscription_status: stripeStatus,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("updateSubscriptionStatus: Unexpected error:", error);
    return { success: false, error: String(error) };
  }
}

/**
 * Helper used by auth flows when no extra linkage work is required.
 */
export async function linkQuizSessionsToUser(
  userId: string,
  email: string,
): Promise<AccessResult> {
  void userId;
  void email;
  return { success: true };
}

export async function checkAccess(
  userId: string,
): Promise<{ hasAccess: boolean; subscriptionStatus: string | null } | null> {
  try {
    const supabaseAdmin = createServiceClient();
    const { data, error } = await supabaseAdmin
      .from("users")
      .select("has_access, subscription_status")
      .eq("id", userId)
      .single();

    if (error || !data) {
      return null;
    }

    return {
      hasAccess: data.has_access ?? false,
      subscriptionStatus: data.subscription_status,
    };
  } catch {
    return null;
  }
}
