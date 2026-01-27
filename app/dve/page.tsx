import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeftIcon,
  ExternalLinkIcon,
  GithubIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  CoinsIcon,
  GitPullRequestIcon,
  ScaleIcon,
  DatabaseIcon,
  LayersIcon,
  LockIcon,
  ActivityIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig, getDVESchema, getBreadcrumbSchema } from "@/lib/seo"

// DVE Page SEO Metadata
export const metadata: Metadata = {
  title: 'Distributed Venture Engine (DVE) - Trustless Contribution Tracking Platform',
  description: 'DVE is a trustless platform for tracking contributions with cryptographic evidence and distributing revenue fairly. Features 50+ API endpoints, 85%+ test coverage, RBAC with 32+ permissions. Built with Next.js 14, FastAPI, PostgreSQL.',
  keywords: [
    'Distributed Venture Engine',
    'DVE',
    'Contribution Tracking',
    'Revenue Distribution',
    'Cryptographic Verification',
    'Trustless Platform',
    'RBAC System',
    'Payout Management',
    'Team Collaboration',
    'Open Source',
    'FastAPI',
    'Next.js',
    'PostgreSQL',
    'Startup Equity',
    'DAO Governance',
    'Contractor Management',
  ],
  openGraph: {
    type: 'website',
    title: 'Distributed Venture Engine (DVE) - Trustless Contribution Tracking',
    description: 'A trustless platform for tracking contributions with cryptographic evidence and distributing revenue fairly through auditable payout systems.',
    url: `${siteConfig.url}/dve`,
    images: [
      {
        url: '/dve-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Distributed Venture Engine - Trustless Contribution Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Distributed Venture Engine (DVE)',
    description: 'Trustless contribution tracking with cryptographic evidence. 50+ API endpoints, 85%+ test coverage.',
  },
  alternates: {
    canonical: `${siteConfig.url}/dve`,
  },
}

const stats = [
  { value: "50+", label: "API Endpoints" },
  { value: "32+", label: "RBAC Permissions" },
  { value: "235+", label: "Tests Passing" },
  { value: "85%+", label: "Code Coverage" },
]

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Trustless Contributions",
    description: "All work is evidence-backed using SHA256 hashing. No more relying on claims - every contribution is cryptographically verified.",
  },
  {
    icon: CoinsIcon,
    title: "Fair Distribution",
    description: "Mathematical formula allocates payouts: payout = (user_points / total_points) × pool. Transparent and reproducible.",
  },
  {
    icon: LockIcon,
    title: "Immutable Records",
    description: "Once verified, contributions cannot be altered. Hash-chained audit trails ensure tamper-evident logging.",
  },
  {
    icon: GitPullRequestIcon,
    title: "GitHub Integration",
    description: "Auto-create evidence from merged PRs, track releases, link issues to tasks, and optionally auto-generate contribution units.",
  },
  {
    icon: ScaleIcon,
    title: "Dispute Resolution",
    description: "Formal escalation process from Contributor → Lead → Governor. Evidence attachment and comment threads for resolution.",
  },
  {
    icon: ActivityIcon,
    title: "Stripe Integration",
    description: "Automatic revenue ingestion via webhooks with HMAC signature verification. Real-time financial tracking.",
  },
]

const techStack = {
  backend: ["FastAPI", "Python 3.12+", "PostgreSQL 16+", "Redis 7+", "SQLAlchemy", "JWT Auth"],
  frontend: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  infrastructure: ["Docker", "MinIO (S3)", "nginx/Caddy", "GitHub OAuth", "Stripe Webhooks"],
}

const roles = [
  { name: "Contributor", permissions: "Submit tasks, create units, view data" },
  { name: "Verifier", permissions: "Review and approve contributions" },
  { name: "Ops Lead", permissions: "Manage payouts, configure policies" },
  { name: "Governor", permissions: "Full admin access, dispute resolution" },
]

const workflow = [
  { step: "1", title: "Create Ventures", description: "Set up projects with stages and roles" },
  { step: "2", title: "Define Tasks", description: "Create tasks with clear deliverables" },
  { step: "3", title: "Submit Contributions", description: "Add contribution units with weighted points" },
  { step: "4", title: "Peer Verification", description: "Verify contributions through review" },
  { step: "5", title: "Configure Payouts", description: "Set and lock payout cycle policies" },
  { step: "6", title: "Distribute Rewards", description: "Generate auditable payout statements" },
]

const targetUsers = [
  "Distributed startups tracking equity and payouts",
  "DAOs requiring transparent governance",
  "Agencies managing contractor contributions",
  "Open source projects distributing bounties",
  "Consulting firms tracking time and revenue",
]

export default function DVEPage() {
  const dveSchema = getDVESchema()
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'DVE', url: `${siteConfig.url}/dve` },
  ])

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dveSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Featured Project
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Distributed Venture Engine
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
              A trustless platform for tracking contributions with cryptographic evidence
              and distributing revenue fairly through auditable payout systems.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="https://dve-woad.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLinkIcon className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/sreejagatab/Distributed-Venture-Engine-DVE-" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  View Source
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-destructive">The Problem</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Difficulty quantifying work across time zones",
                  "Limited trust in contribution claims",
                  "Complex revenue attribution in distributed teams",
                  "Unresolved disputes over compensation",
                ].map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-destructive" />
                    <span className="text-muted-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-600">The Solution</h2>
              <p className="mt-6 text-muted-foreground">
                DVE creates an <strong>EVIDENCE → CONTRIBUTION → VERIFICATION → PAYOUT</strong> pipeline
                where every step is cryptographically verified and immutably recorded.
              </p>
              <div className="mt-6 rounded-lg border bg-card p-4">
                <code className="text-sm">
                  payout = (user_points / total_points) × pool
                </code>
                <p className="mt-2 text-xs text-muted-foreground">
                  Transparent, reproducible, and auditable distribution formula
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Core Features</h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need for transparent contribution tracking
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="mt-3 text-muted-foreground">
              Six-step process from contribution to payout
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workflow.map((item) => (
              <div key={item.step} className="flex gap-4 rounded-lg border bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Technology Stack</h2>
            <p className="mt-3 text-muted-foreground">
              Built with modern, production-ready technologies
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <DatabaseIcon className="h-8 w-8 text-green-500" />
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techStack.backend.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <LayersIcon className="h-8 w-8 text-blue-500" />
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techStack.frontend.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <ActivityIcon className="h-8 w-8 text-orange-500" />
                <CardTitle>Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techStack.infrastructure.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RBAC Roles */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Role-Based Access Control</h2>
            <p className="mt-3 text-muted-foreground">
              32+ fine-grained permissions across multiple role levels
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((role) => (
              <Card key={role.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{role.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{role.permissions}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Who It's For</h2>
            <p className="mt-3 text-muted-foreground">
              Built for distributed teams that need transparency
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {targetUsers.map((user) => (
              <Badge key={user} variant="outline" className="px-4 py-2 text-sm">
                <CheckCircleIcon className="mr-2 h-4 w-4 text-green-500" />
                {user}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to Explore DVE?</h2>
          <p className="mt-4 text-primary-foreground/80">
            Check out the live demo or dive into the source code
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://dve-woad.vercel.app/" target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon className="mr-2 h-4 w-4" />
                Try Live Demo
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="https://github.com/sreejagatab/Distributed-Venture-Engine-DVE-" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  )
}
