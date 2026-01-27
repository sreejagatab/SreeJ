import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

// Secret token for security (set this in your environment variables)
const REVALIDATE_TOKEN = process.env.REVALIDATE_TOKEN || "your-secret-token"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { token } = body

    // Verify the token
    if (token !== REVALIDATE_TOKEN) {
      return NextResponse.json(
        { error: "Invalid token" },
        { status: 401 }
      )
    }

    // Revalidate the home page (which includes projects)
    revalidatePath("/")

    return NextResponse.json({
      revalidated: true,
      message: "Portfolio data refreshed successfully",
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to revalidate" },
      { status: 500 }
    )
  }
}

// Also support GET for easy testing (without token check in dev)
export async function GET(request: NextRequest) {
  const isDev = process.env.NODE_ENV === "development"

  if (!isDev) {
    return NextResponse.json(
      { error: "GET method only available in development" },
      { status: 405 }
    )
  }

  revalidatePath("/")

  return NextResponse.json({
    revalidated: true,
    message: "Portfolio data refreshed (dev mode)",
    timestamp: new Date().toISOString(),
  })
}
