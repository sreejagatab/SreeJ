import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

// GitHub webhook secret (set this in your environment variables)
const GITHUB_WEBHOOK_SECRET = process.env.GITHUB_WEBHOOK_SECRET

function verifySignature(payload: string, signature: string | null): boolean {
  if (!GITHUB_WEBHOOK_SECRET || !signature) {
    // In development, allow without verification
    return process.env.NODE_ENV === "development"
  }

  const hmac = crypto.createHmac("sha256", GITHUB_WEBHOOK_SECRET)
  const digest = "sha256=" + hmac.update(payload).digest("hex")

  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature))
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.text()
    const signature = request.headers.get("x-hub-signature-256")
    const event = request.headers.get("x-github-event")

    // Verify the webhook signature
    if (!verifySignature(payload, signature)) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      )
    }

    // Only revalidate on relevant events
    const relevantEvents = [
      "push",           // Code pushed
      "create",         // Branch/tag created
      "repository",     // Repo created/deleted/updated
      "release",        // New release
      "star",           // Repo starred
      "public",         // Repo made public
    ]

    if (event && relevantEvents.includes(event)) {
      // Revalidate the home page
      revalidatePath("/")

      return NextResponse.json({
        revalidated: true,
        event,
        message: `Portfolio refreshed due to ${event} event`,
        timestamp: new Date().toISOString(),
      })
    }

    return NextResponse.json({
      revalidated: false,
      event,
      message: `Event ${event} does not trigger revalidation`,
    })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    )
  }
}
