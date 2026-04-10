/**
 * Stripe Customer Management Utilities
 *
 * PURPOSE: Helper functions for creating and managing Stripe customers
 *
 * CONTEXT: Used during checkout to ensure proper customer linkage
 *
 * KEY RESPONSIBILITIES:
 * - Get or create Stripe customers by email
 * - Prevent duplicate customer creation
 * - Enable customer portal access for all paying users
 *
 * DESIGN RATIONALE:
 * - Create customers BEFORE checkout (not after) to enable:
 *   - Customer portal access
 *   - Payment method reuse
 *   - Subscription management
 *   - Clean payment history tracking
 * - Reuse existing customers by email to prevent duplicates
 * - Customers who abandon checkout are acceptable (industry standard)
 *
 * WHY CUSTOMERS BEFORE CHECKOUT:
 * - Stripe requires Customer object for subscriptions
 * - Guest customers (customer_email) can't use Customer Portal
 * - Pre-created customers are fully manageable via API
 * - Enables abandoned cart recovery
 *
 * @see https://docs.stripe.com/payments/accept-a-payment
 * @see https://github.com/t3dotgg/stripe-recommendations
 * @author Claude Code
 * @created 2026-03-03
 */

import type Stripe from "stripe";
import { stripe } from "./client";

/**
 * Get or create a Stripe customer by email
 *
 * PURPOSE: Ensures a Stripe customer exists for the given email,
 * reusing existing customers to prevent duplicates.
 *
 * WHY REUSE: Creating multiple customers for the same email causes:
 * - Fragmented payment history
 * - Duplicate customer records
 * - Confusing Stripe dashboard
 * - Broken customer portal (uses wrong customer)
 *
 * DESIGN:
 * 1. Search for existing customer by email
 * 2. If found, return existing customer ID (reuse)
 * 3. If not found, create new customer with metadata
 * 4. Return customer ID for use in checkout session
 *
 * @param email - Customer email address
 * @param metadata - Optional metadata to attach to customer
 * @returns Stripe customer ID (cus_xxx)
 *
 * @example
 * // In checkout flow
 * const customerId = await getOrCreateStripeCustomer(email, {
 *   quiz_session_id: checkoutId,
 * });
 *
 * const session = await stripe.checkout.sessions.create({
 *   customer: customerId, // Use customer ID instead of customer_email
 *   // ...
 * });
 */
export async function getOrCreateStripeCustomer(
  email: string,
  metadata?: Record<string, string>,
): Promise<string> {
  console.log("[Stripe Customer] Looking up customer for email:", email);

  // Step 1: Search for existing customer by email
  // WHY: Prevents duplicate customers for the same email
  const existingCustomers = await stripe.customers.list({
    email,
    limit: 1,
  });

  if (existingCustomers.data.length > 0) {
    const existingCustomer = existingCustomers.data[0];
    console.log(
      "[Stripe Customer] ✅ Found existing customer:",
      existingCustomer.id,
    );

    // Optionally update metadata if provided
    // WHY: Allows adding new metadata (like quiz_session_id) to existing customers
    if (metadata && Object.keys(metadata).length > 0) {
      await stripe.customers.update(existingCustomer.id, {
        metadata: {
          ...existingCustomer.metadata,
          ...metadata,
        },
      });
      console.log("[Stripe Customer] Updated customer metadata");
    }

    return existingCustomer.id;
  }

  // Step 2: Create new customer if not found
  console.log("[Stripe Customer] Creating new customer for:", email);

  const newCustomer = await stripe.customers.create({
    email,
    metadata: metadata || {},
  });

  console.log("[Stripe Customer] ✅ Created new customer:", newCustomer.id);

  return newCustomer.id;
}

/**
 * Update Stripe customer with user ID after account creation
 *
 * PURPOSE: Links the Stripe customer to the Supabase user account
 * after the user is created post-payment.
 *
 * WHEN TO USE: Called after user account is created (via webhook or
 * immediate auth API) to update the Stripe customer metadata with
 * the user_id.
 *
 * @param stripeCustomerId - Stripe customer ID (cus_xxx)
 * @param userId - Supabase auth user ID
 * @param additionalMetadata - Optional additional metadata
 *
 * @example
 * // In webhook after user creation
 * await updateCustomerWithUserId(customerId, userId);
 */
export async function updateCustomerWithUserId(
  stripeCustomerId: string,
  userId: string,
  additionalMetadata?: Record<string, string>,
): Promise<void> {
  console.log(
    "[Stripe Customer] Updating customer with user_id:",
    stripeCustomerId,
    "->",
    userId,
  );

  // CRITICAL: Fetch existing customer first to MERGE metadata, not replace
  // WHY: Customer may already have metadata like quiz_session_id, checkout_id
  // If we just set { user_id, ...additionalMetadata }, we WIPE existing data
  const existingCustomer = await stripe.customers.retrieve(stripeCustomerId);

  if (existingCustomer.deleted) {
    console.error("[Stripe Customer] Cannot update deleted customer:", stripeCustomerId);
    return;
  }

  // Merge: existing metadata + user_id + additional metadata (latter overrides)
  await stripe.customers.update(stripeCustomerId, {
    metadata: {
      ...existingCustomer.metadata,
      user_id: userId,
      ...additionalMetadata,
    },
  });

  console.log("[Stripe Customer] ✅ Customer updated with user_id (metadata merged)");
}

/**
 * Retrieve Stripe customer by ID
 *
 * PURPOSE: Fetch customer details from Stripe
 *
 * @param customerId - Stripe customer ID (cus_xxx)
 * @returns Stripe customer object or null if not found
 */
export async function getStripeCustomer(
  customerId: string,
): Promise<Stripe.Customer | null> {
  try {
    const customer = await stripe.customers.retrieve(customerId);
    if (customer.deleted) {
      return null;
    }
    return customer;
  } catch (error) {
    console.error("[Stripe Customer] Error retrieving customer:", error);
    return null;
  }
}
