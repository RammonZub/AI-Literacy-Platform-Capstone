/**
 * Certificate Server Actions
 *
 * ============================================================================
 * OVERVIEW
 * ============================================================================
 * Server-side actions for certificate generation and management using Supabase.
 *
 * ============================================================================
 * DATA MODEL
 * ============================================================================
 * Uses the dedicated `certificates` table in Supabase:
 * - `id`: Certificate identifier
 * - `user_id`: Certificate owner
 * - `module_id`: Completed module
 * - `issued_at`: Issued timestamp
 *
 * The app enriches those rows with module display names and module XP totals so
 * certificate screens can stay presentation-friendly without duplicating course
 * data inside the table itself.
 *
 * ============================================================================
 * ACTIONS
 * ============================================================================
 * - generateCertificate: Create a new certificate when module is completed
 * - getCertificate: Retrieve a specific certificate by module ID
 * - getUserCertificates: Get all certificates for the current user
 * ============================================================================
 */

"use server";

import { revalidatePath } from "next/cache";
import { platformPaths, platformRoutes } from "@/lib/routes/platform";
import { createClient } from "@/lib/supabase/server";
import { getModuleName } from "@/lib/utils/module-utils";

// ============================================================================
// TYPES
// ============================================================================

/**
 * Enriched certificate shape used by the application.
 *
 * WHY this type exists:
 * - Keeps certificate rendering independent from raw database column names
 * - Adds derived display data (`moduleName`, `xpEarned`) not stored on the row
 * - Provides one stable shape for certificate-related UI and actions
 */
export interface StoredCertificate {
  /** Module identifier (e.g., "module1-foundation") */
  moduleId: string;
  /** Human-readable module name (e.g., "AI Foundations") */
  moduleName: string;
  /** ISO timestamp of when the module was completed */
  completedAt: string;
  /** Unique certificate identifier (UUID v4) */
  certificateId: string;
  /** Total XP earned from all lessons in the module */
  xpEarned: number;
}

/**
 * Return type for generateCertificate action
 *
 * WHY: Provides detailed feedback about certificate generation
 * - success: Whether the operation completed
 * - certificate: The generated certificate data
 * - alreadyExists: Whether a certificate already existed for this module
 */
export interface GenerateCertificateResult {
  success: boolean;
  certificate?: StoredCertificate;
  alreadyExists?: boolean;
}

interface CertificateRow {
  id: string;
  issued_at: string;
  module_id: string;
  user_id: string;
}

/**
 * Computes total earned XP for one module from completed lesson rows.
 */
async function getModuleXpEarned(userId: string, moduleId: string): Promise<number> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("lesson_progress")
    .select("xp_earned")
    .eq("user_id", userId)
    .eq("module_id", moduleId)
    .eq("status", "completed");

  if (error) {
    throw new Error(`Failed to load XP for certificate module ${moduleId}: ${error.message}`);
  }

  return data?.reduce((sum, lesson) => sum + (lesson.xp_earned || 0), 0) || 0;
}

/**
 * Converts a `certificates` table row into the app's enriched certificate shape.
 */
async function hydrateCertificate(row: CertificateRow): Promise<StoredCertificate> {
  return {
    moduleId: row.module_id,
    moduleName: getModuleName(row.module_id),
    completedAt: row.issued_at,
    certificateId: row.id,
    xpEarned: await getModuleXpEarned(row.user_id, row.module_id),
  };
}

// ============================================================================
// SERVER ACTIONS
// ============================================================================

/**
 * Generate Certificate
 *
 * DETAILED EXPLANATION:
 * Creates a certificate when a user completes a module (100% progress).
 * The certificate is stored as a row in the `certificates` table.
 *
 * DESIGN RATIONALE:
 * - Checks if certificate already exists to prevent duplicates
 * - Calculates total XP from all completed lessons in the module
 * - Revalidates module and profile paths for cache consistency
 *
 * WHEN to call:
 * - When completedCount === totalCount in LessonJourneyClient
 * - After the final lesson in a module is marked complete
 *
 * @param {string} moduleId - The module ID to generate certificate for (e.g., 'module1-foundation')
 * @returns {Promise<GenerateCertificateResult>} Certificate data or already exists flag
 *
 * @example
 * // Generate certificate for completed module
 * const result = await generateCertificate('module1-foundation')
 * if (result.success && !result.alreadyExists) {
 *   console.log('New certificate:', result.certificate)
 * }
 *
 * @see getModuleName for module name lookup
 * @see public.certificates table in Supabase schema
 */
export async function generateCertificate(moduleId: string): Promise<GenerateCertificateResult> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User not authenticated");
  }

  const { data: existingRow, error: existingError } = await supabase
    .from("certificates")
    .select("id, issued_at, module_id, user_id")
    .eq("user_id", user.id)
    .eq("module_id", moduleId)
    .maybeSingle();

  if (existingError) {
    throw new Error(
      `Failed to check existing certificate for module ${moduleId}: ${existingError.message}`,
    );
  }

  if (existingRow) {
    // Certificate already exists, return it
    return {
      success: true,
      certificate: await hydrateCertificate(existingRow),
      alreadyExists: true,
    };
  }

  // Calculate XP earned from all completed lessons in this module
  const { data: lessonProgress } = await supabase
    .from("lesson_progress")
    .select("xp_earned")
    .eq("user_id", user.id)
    .eq("module_id", moduleId)
    .eq("status", "completed");

  const xpEarned = lessonProgress?.reduce((sum, lesson) => sum + (lesson.xp_earned || 0), 0) || 0;

  const { data: insertedRow, error } = await supabase
    .from("certificates")
    .insert({
      user_id: user.id,
      module_id: moduleId,
    })
    .select("id, issued_at, module_id, user_id")
    .single();

  if (error) {
    console.error("Error generating certificate:", error);
    throw new Error("Failed to generate certificate");
  }

  // Revalidate paths
  revalidatePath(platformPaths.module(moduleId));
  revalidatePath(platformRoutes.profile);

  return {
    success: true,
    certificate: {
      moduleId: insertedRow.module_id,
      moduleName: getModuleName(insertedRow.module_id),
      completedAt: insertedRow.issued_at,
      certificateId: insertedRow.id,
      xpEarned,
    },
    alreadyExists: false,
  };
}

/**
 * Get Certificate
 *
 * DETAILED EXPLANATION:
 * Retrieves a specific certificate by module ID for the current user.
 * Used to check if a certificate exists and retrieve its data.
 *
 * DESIGN RATIONALE:
 * - Returns null if certificate doesn't exist
 * - Used before generating to prevent duplicates
 * - Used in certificate display components
 *
 * @param {string} moduleId - The module ID to get certificate for
 * @returns {Promise<StoredCertificate | null>} Certificate data or null
 *
 * @example
 * // Check if certificate exists
 * const cert = await getCertificate('module1-foundation')
 * if (cert) {
 *   console.log('Certificate ID:', cert.certificateId)
 * }
 */
export async function getCertificate(moduleId: string): Promise<StoredCertificate | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User not authenticated");
  }

  const { data: certificateRow, error } = await supabase
    .from("certificates")
    .select("id, issued_at, module_id, user_id")
    .eq("user_id", user.id)
    .eq("module_id", moduleId)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to load certificate for module ${moduleId}: ${error.message}`);
  }

  if (!certificateRow) {
    return null;
  }

  return hydrateCertificate(certificateRow);
}

/**
 * Get User Certificates
 *
 * DETAILED EXPLANATION:
 * Retrieves all certificates for the current user. Used in profile page
 * and certificate gallery views.
 *
 * DESIGN RATIONALE:
 * - Returns empty array if no certificates exist
 * - Sorted by completion date (newest first)
 * - Used to display user's achievement history
 *
 * @returns {Promise<StoredCertificate[]>} Array of all user certificates
 *
 * @example
 * // Get all certificates for profile display
 * const certs = await getUserCertificates()
 * certs.forEach(cert => {
 *   console.log(`${cert.moduleName}: ${cert.xpEarned} XP`)
 * })
 */
export async function getUserCertificates(): Promise<StoredCertificate[]> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User not authenticated");
  }

  const { data: certificateRows, error } = await supabase
    .from("certificates")
    .select("id, issued_at, module_id, user_id")
    .eq("user_id", user.id)
    .order("issued_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to load user certificates: ${error.message}`);
  }

  if (!certificateRows || certificateRows.length === 0) {
    return [];
  }

  return Promise.all(certificateRows.map((row) => hydrateCertificate(row)));
}
