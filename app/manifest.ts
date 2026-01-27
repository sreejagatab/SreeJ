import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sree Jagatab - AI Automation Engineer',
    short_name: 'Sree Jagatab',
    description: 'AI Automation Engineer helping businesses save 5+ hours daily. Expert in Python, GPT Bots, Web Scrapers, and Data Engineering. Based in Cambridgeshire, UK.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-GB',
    categories: ['business', 'technology', 'productivity'],
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  }
}
