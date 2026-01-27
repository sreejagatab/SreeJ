'use client'

import { useEffect } from 'react'

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    // Create and append script element
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    script.id = 'json-ld-structured-data'

    // Remove existing JSON-LD if present
    const existing = document.getElementById('json-ld-structured-data')
    if (existing) {
      existing.remove()
    }

    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [data])

  // Also render a noscript version for crawlers that execute JS
  return null
}

// Server-side JSON-LD that will be rendered in the HTML
export function ServerJsonLd({ data }: JsonLdProps) {
  const jsonString = JSON.stringify(data)

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  )
}
