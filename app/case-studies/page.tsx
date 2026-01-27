import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeftIcon, ArrowRightIcon, TrendingUpIcon, CheckCircleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { caseStudies, personalInfo } from "@/components/data/portfolio-data"
import { siteConfig } from "@/lib/seo"

export const metadata: Metadata = {
  title: 'Case Studies - AI Automation Success Stories',
  description: 'Real-world examples of AI automation projects delivering measurable results. From 90% reduction in manual work to £2,000/month revenue generation.',
  keywords: [
    'AI Automation Case Studies',
    'Automation Success Stories',
    'Business Automation Results',
    'AI ROI Examples',
    'Process Automation Case Study',
  ],
  openGraph: {
    title: 'Case Studies | Sree Jagatab',
    description: 'Real-world AI automation success stories with measurable results.',
    url: `${siteConfig.url}/case-studies`,
  },
  alternates: {
    canonical: `${siteConfig.url}/case-studies`,
  },
}

const industryColors: Record<string, string> = {
  'Accounting': 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
  'E-commerce': 'bg-green-500/10 text-green-700 dark:text-green-400',
  'SaaS': 'bg-purple-500/10 text-purple-700 dark:text-purple-400',
  'Marketing': 'bg-orange-500/10 text-orange-700 dark:text-orange-400',
  'Retail': 'bg-pink-500/10 text-pink-700 dark:text-pink-400',
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
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
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Success Stories
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Case Studies
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
              Real-world examples of AI automation delivering measurable results for businesses across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/30 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">£2.1M+</p>
              <p className="mt-1 text-sm text-muted-foreground">Total Client Savings</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">50+</p>
              <p className="mt-1 text-sm text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">90%</p>
              <p className="mt-1 text-sm text-muted-foreground">Avg. Manual Work Reduction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">4.9/5</p>
              <p className="mt-1 text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Card key={study.id} className="group overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className={industryColors[study.industry] || 'bg-gray-500/10 text-gray-700'}>
                      {study.industry}
                    </Badge>
                    <TrendingUpIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{study.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {study.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Result */}
                  <div className="mb-4 rounded-lg bg-green-500/10 p-4">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-700 dark:text-green-400">
                        {study.result}
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to Achieve Similar Results?</h2>
          <p className="mt-4 text-primary-foreground/80">
            Let's discuss how AI automation can transform your business operations.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href={personalInfo.calendly} target="_blank" rel="noopener noreferrer">
                Book Free Consultation
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href={`mailto:${personalInfo.email}`}>
                Contact Me
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
