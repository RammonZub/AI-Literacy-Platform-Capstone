/**
 * Post-sign-in access endpoint.
 */

import { NextResponse } from "next/server";
// import { checkAccess } from "@/lib/services/user-access";
import { createClient } from "@/lib/supabase/server";

export async function POST() {
  console.log("[API] grant-access-after-signin called");

  try {
    const supabase = await createClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Access remains open after sign-in in the current flow.
    return NextResponse.json({
      alreadyGranted: true,
      email: user.email || "",
      hasAccess: true,
    });

    // const access = await checkAccess(user.id);
    // if (access?.hasAccess) {
    //   return NextResponse.json({
    //     alreadyGranted: true,
    //     email: user.email || "",
    //     hasAccess: true,
    //   });
    // }
    // return NextResponse.json({
    //   noCheckout: true,
    //   email: user.email || "",
    //   hasAccess: false,
    // });
  } catch (err) {
    console.error("[API] Grant access after sign-in error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
