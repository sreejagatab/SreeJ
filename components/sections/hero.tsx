"use client"

import Image from "next/image"
import { ArrowDownIcon, GithubIcon, LinkedinIcon, GlobeIcon, CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { personalInfo, stats } from "@/components/data/portfolio-data"
import { images } from "@/lib/images"

// Product Hunt icon component
function ProductHuntIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 5v10h2v-4h2.5c1.933 0 3.5-1.567 3.5-3.5S17.433 6 15.5 6H11zm2 2h2.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H13V9z"/>
    </svg>
  )
}

const socialLinks = [
  { href: personalInfo.github, icon: GithubIcon, label: "GitHub" },
  { href: personalInfo.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: personalInfo.website, icon: GlobeIcon, label: "Website" },
  { href: "https://www.producthunt.com/@sreeganesh_jagatab", icon: ProductHuntIcon, label: "Product Hunt" },
]

export function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Status Badge */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500 inline-block animate-pulse" />
                Available for Projects • {stats.clients} Clients Served
              </Badge>
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              AI Automation Engineer
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {personalInfo.name}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
              Save 5+ Hours Daily with Intelligent Automation
            </p>
            <p className="mt-6 text-muted-foreground">
              {personalInfo.tagline}
            </p>

            {/* Key Metrics */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">{stats.savings}</span>
                <span className="text-muted-foreground">Client Savings</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">{stats.rating}</span>
                <span className="text-muted-foreground">Rating</span>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">{stats.yearsExp} Yrs</span>
                <span className="text-muted-foreground">Experience</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center lg:items-start justify-center gap-4 sm:flex-row">
              <Button size="lg" onClick={() => handleScrollTo("#projects")}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={personalInfo.calendly} target="_blank" rel="noopener noreferrer">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Book Free Call
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Location */}
            <p className="mt-6 text-sm text-muted-foreground">
              Based in {personalInfo.location} • Serving clients worldwide
            </p>
          </div>

          {/* Image/Animation */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 blur-2xl" />
              <Image
                src={images.codingGif}
                alt="Coding Animation"
                width={400}
                height={400}
                className="relative rounded-lg"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleScrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to about section"
      >
        <ArrowDownIcon className="h-6 w-6" />
      </button>
    </section>
  )
}
