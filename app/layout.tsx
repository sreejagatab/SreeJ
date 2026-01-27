import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { siteConfig } from "@/lib/seo";
import { GoogleAnalytics, Clarity } from "@/components/analytics";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  // Robots directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - AI Automation Engineer`,
        type: 'image/jpeg',
      },
      {
        url: 'https://avatars.githubusercontent.com/u/62333948?v=4',
        width: 400,
        height: 400,
        alt: siteConfig.name,
        type: 'image/png',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@SavingBargain',
    creator: '@SavingBargain',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og-image.jpg'],
  },

  // Alternates
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-GB': siteConfig.url,
      'en-US': siteConfig.url,
    },
  },

  // Verification - Add codes via environment variables when available
  // verification: {
  //   google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  //   yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  // },

  // App-specific
  applicationName: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Category
  category: 'technology',

  // Other meta
  other: {
    'geo.region': 'GB-CAM',
    'geo.placename': 'Wisbech, Cambridgeshire',
    'geo.position': '52.6667;0.1596',
    'ICBM': '52.6667, 0.1596',
    'rating': 'general',
    'revisit-after': '7 days',
    'author': siteConfig.name,
    'copyright': `Copyright ${new Date().getFullYear()} ${siteConfig.name}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://avatars.githubusercontent.com" />
        <link rel="preconnect" href="https://api.github.com" />

        {/* DNS Prefetch for additional domains */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Clarity />
        {children}
      </body>
    </html>
  );
}
