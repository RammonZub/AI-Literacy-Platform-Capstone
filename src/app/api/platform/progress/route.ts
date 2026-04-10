import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const moduleId = request.nextUrl.searchParams.get("moduleId");

    let query = supabase.from("lesson_progress").select("*").eq("user_id", user.id);

    if (moduleId) {
      query = query.eq("module_id", moduleId);
    }

    const { data: rows, error } = await query;

    if (error) {
      return NextResponse.json(
        { error: "Failed to fetch progress", details: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ rows: rows || [] });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unexpected progress API failure",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
