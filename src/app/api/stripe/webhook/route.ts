/**
 * Stripe webhook — updates `users` only. Optional dedup via `telemetry_events`.
 *
 * Guest checkout: create the Supabase user without invite emails; the success page
 * signs them in via `/api/auth/create-and-signin-from-checkout`.
 */

import { randomBytes } from "crypto";
import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { grantAccess, revokeAccess, updateSubscriptionStatus } from "@/lib/services/user-access";
import { stripe } from "@/lib/stripe/client";
import { createServiceClient } from "@/lib/supabase/server";
import { persistTelemetryRow } from "@/lib/telemetry";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
const GUEST_CHECKOUT_TEMP_PASSWORD_BYTES = 32;

function isAuthUserAlreadyExistsMessage(message: string | undefined): boolean {
  if (!message) return false;
  const m = message.toLowerCase();
  return (
    m.includes("already been registered") ||
    m.includes("already registered") ||
    m.includes("email_exists") ||
    m.includes("user already registered") ||
    m.includes("database error finding user")
  );
}

async function resolveUserIdByEmail(
  admin: ReturnType<typeof createServiceClient>,
  email: string,
): Promise<string | null> {
  const { data: row } = await admin.from("users").select("id").eq("email", email).maybeSingle();
  if (row?.id) return row.id;
  const { data: page, error } = await admin.auth.admin.listUsers({ page: 1, perPage: 200 });
  if (error) {
    console.error("[Webhook] listUsers fallback:", error.message);
    return null;
  }
  const normalized = email.trim().toLowerCase();
  const match = page?.users?.find((u) => u.email?.trim().toLowerCase() === normalized);
  return match?.id ?? null;
}

async function isWebhookProcessed(eventId: string): Promise<boolean> {
  const admin = createServiceClient();
  const { data } = await admin
    .from("telemetry_events")
    .select("id")
    .eq("event_type", "stripe_webhook_processed")
    .filter("payload->>id", "eq", eventId)
    .maybeSingle();
  return !!data;
}

async function markWebhookProcessed(event: Stripe.Event): Promise<void> {
  await persistTelemetryRow(null, "stripe_webhook_processed", {
    id: event.id,
    type: event.type,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const headersList = await headers();
    const signature = headersList.get("stripe-signature");
    if (!signature) {
      return NextResponse.json({ error: "No signature" }, { status: 400 });
    }

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      const error = err as Error;
      console.error("[Webhook] Signature verification failed:", error.message);
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    if (await isWebhookProcessed(event.id)) {
      return NextResponse.json({ received: true, idempotent: true });
    }

    const supabaseAdmin = createServiceClient();

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.user_id;
        const subscriptionId = session.subscription as string | null;
        const customerEmail = session.customer_details?.email;
        const stripeCustomerId =
          typeof session.customer === "string" ? session.customer : session.customer?.id || null;

        if (userId && userId !== "anonymous") {
          const result = await grantAccess(userId, subscriptionId, "active", stripeCustomerId);
          if (!result.success) {
            console.error("[Webhook] grantAccess:", result.error);
          }
          if (stripeCustomerId) {
            try {
              const { updateCustomerWithUserId } = await import("@/lib/stripe/customer");
              await updateCustomerWithUserId(stripeCustomerId, userId);
            } catch (err) {
              console.error("[Webhook] updateCustomerWithUserId:", err);
            }
          }
        } else if (customerEmail) {
          const paymentMode = session.metadata?.payment_mode || session.mode;
          const tempPassword = randomBytes(GUEST_CHECKOUT_TEMP_PASSWORD_BYTES).toString("base64");

          const { data: created, error: createError } = await supabaseAdmin.auth.admin.createUser({
            email: customerEmail,
            password: tempPassword,
            email_confirm: true,
            user_metadata: {
              stripe_customer_id: session.customer as string,
              checkout_session_id: session.id,
              plan_id: session.metadata?.plan_id,
              granted_from_checkout: true,
              created_from_checkout_webhook: true,
            },
          });

          let guestUserId: string | null = null;
          if (!createError && created.user) {
            guestUserId = created.user.id;
          } else if (createError && isAuthUserAlreadyExistsMessage(createError.message)) {
            guestUserId = await resolveUserIdByEmail(supabaseAdmin, customerEmail);
          } else if (createError) {
            console.error("[Webhook] Guest checkout createUser:", createError.message);
          }

          if (
            guestUserId &&
            (subscriptionId || paymentMode === "payment")
          ) {
            const result = await grantAccess(
              guestUserId,
              subscriptionId,
              "active",
              stripeCustomerId,
            );
            if (!result.success) {
              console.error("[Webhook] grantAccess (guest):", result.error);
            }
          }

          if (guestUserId && stripeCustomerId) {
            try {
              const { updateCustomerWithUserId } = await import("@/lib/stripe/customer");
              await updateCustomerWithUserId(stripeCustomerId, guestUserId);
            } catch (err) {
              console.error("[Webhook] updateCustomerWithUserId (guest):", err);
            }
          }
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await revokeAccess(subscription.id);
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const subscriptionId = (invoice as unknown as Record<string, unknown>)
          .subscription as string;
        if (subscriptionId) {
          await updateSubscriptionStatus(subscriptionId, "past_due");
        }
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        const subscriptionId = (invoice as unknown as Record<string, unknown>)
          .subscription as string;
        if (subscriptionId) {
          await updateSubscriptionStatus(subscriptionId, "active");
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        await updateSubscriptionStatus(subscription.id, subscription.status);
        break;
      }

      default:
        break;
    }

    await markWebhookProcessed(event);
    return NextResponse.json({ received: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[Webhook] Handler error:", message);
    return NextResponse.json(
      { error: "Webhook handler failed", details: message },
      { status: 500 },
    );
  }
}
