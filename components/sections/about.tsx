import Image from "next/image"
import { DownloadIcon, MapPinIcon, BriefcaseIcon, CheckCircleIcon, UsersIcon, PiggyBankIcon, StarIcon, ClockIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { personalInfo, stats, valuePropositions } from "@/components/data/portfolio-data"
import { getGitHubStats, githubConfig } from "@/lib/github"
import { images } from "@/lib/images"

const quickFacts = [
  { icon: MapPinIcon, label: "Location", value: personalInfo.location },
  { icon: BriefcaseIcon, label: "Experience", value: `${stats.yearsExp} Years` },
  { icon: StarIcon, label: "Rating", value: stats.rating },
]

export async function About() {
  let githubStats = null
  try {
    githubStats = await getGitHubStats()
  } catch (error) {
    console.error('Failed to fetch GitHub stats:', error)
    // Continue rendering without GitHub stats
  }

  const impactStats = [
    { icon: UsersIcon, label: "Clients Served", value: stats.clients },
    { icon: PiggyBankIcon, label: "Client Savings", value: stats.savings },
    { icon: StarIcon, label: "Avg Rating", value: stats.rating },
    { icon: ClockIcon, label: "Response Time", value: personalInfo.responseTime },
  ]

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="AI Automation Expert based in Cambridgeshire, UK"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-md opacity-50" />
            <Image
              src={images.avatar}
              alt={personalInfo.name}
              width={280}
              height={280}
              className="relative rounded-full border-4 border-background shadow-xl"
              priority
            />
          </div>

          {/* GitHub Stats Card */}
          <Card className="w-full max-w-md">
            <CardContent className="pt-4">
              <Image
                src={images.githubStats(githubConfig.username)}
                alt="GitHub Stats"
                width={400}
                height={150}
                className="w-full"
                unoptimized
              />
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold">
            Helping Businesses Save Time Through Intelligent Automation
          </h3>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              I&apos;m an AI Automation Engineer based in Cambridgeshire, UK, specializing in
              building intelligent systems that help businesses save 5+ hours daily. From
              GPT-powered chatbots to custom Python automation scripts, I create solutions
              that eliminate repetitive tasks and drive real ROI.
            </p>
            <p>
              With {stats.yearsExp} years of experience and {stats.clients} successful projects,
              I&apos;ve helped clients achieve over {stats.savings} in documented cost savings.
              My approach combines technical expertise with a deep understanding of business
              processes to deliver automation that actually works.
            </p>
            <p>
              I offer both one-time projects and ongoing support, with face-to-face consultations
              available across Cambridgeshire and remote services worldwide. Every project comes
              with a 100% satisfaction guarantee.
            </p>
          </div>

          {/* Value Propositions */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {valuePropositions.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-xl font-bold text-primary">{item.metric}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Impact Stats */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {impactStats.map((stat) => (
              <Card key={stat.label} size="sm">
                <CardContent className="flex flex-col items-center gap-1 pt-3 pb-3">
                  <stat.icon className="h-4 w-4 text-primary" />
                  <p className="text-lg font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground text-center">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {githubStats && (
            <p className="mt-3 text-center text-xs text-muted-foreground">
              {githubStats.publicRepos} repos on GitHub @{githubConfig.username}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild>
              <a href={personalInfo.website} target="_blank" rel="noopener noreferrer">
                Visit Jagatab.uk
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <DownloadIcon className="mr-2 h-4 w-4" />
                View LinkedIn
              </a>
            </Button>
            {personalInfo.available && (
              <Badge variant="secondary" className="px-3 py-1">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500 inline-block" />
                Available for Projects
              </Badge>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
