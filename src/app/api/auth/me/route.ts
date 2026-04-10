import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { checkRateLimit, getRateLimitIdentifier } from "@/lib/rate-limit";
import { createClient } from "@/lib/supabase/server";

// Sanitize error messages for production - don't expose internal details
function sanitizeError(error: unknown): { message: string } {
  if (process.env.NODE_ENV === "production") {
    return { message: "An error occurred" };
  }
  return { message: error instanceof Error ? error.message : "Unknown error" };
}

export async function GET(request: NextRequest) {
  // Rate limiting check
  const identifier = getRateLimitIdentifier(request);
  const { success, resetTime } = checkRateLimit(identifier);

  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "X-RateLimit-Reset": String(resetTime),
          "Retry-After": String(Math.ceil((resetTime - Date.now()) / 1000)),
        },
      },
    );
  }
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: existingProfile, error: profileError } = await supabase
      .from("users")
      .select("*")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError) {
      console.error("Profile fetch error:", profileError);
      return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 });
    }

    let profile = existingProfile;

    if (!profile) {
      const { data: createdProfile, error: createError } = await supabase
        .from("users")
        .insert({
          id: user.id,
          email: user.email,
          full_name: user.user_metadata?.full_name || user.email,
          total_xp: 0,
          current_level: 1,
          current_streak: 0,
          longest_streak: 0,
        })
        .select("*")
        .single();

      if (createError) {
        console.error("Profile creation error:", createError);
        return NextResponse.json({ error: "Failed to create profile" }, { status: 500 });
      }

      profile = createdProfile;
    }

    return NextResponse.json({ user, profile });
  } catch (error) {
    console.error("User resolution error:", error);
    return NextResponse.json({ error: "Failed to resolve authenticated user" }, { status: 500 });
  }
}
