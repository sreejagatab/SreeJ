"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpIcon, GithubIcon, LinkedinIcon, MailIcon, GlobeIcon, SendIcon, CheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { personalInfo } from "@/components/data/portfolio-data"

const socialLinks = [
  { href: personalInfo.github, icon: GithubIcon, label: "GitHub" },
  { href: personalInfo.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: personalInfo.website, icon: GlobeIcon, label: "Website" },
  { href: `mailto:${personalInfo.email}`, icon: MailIcon, label: "Email" },
]

const footerLinks = [
  { href: "/dve", label: "DVE Project" },
  { href: "/case-studies", label: "Case Studies" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // In production, integrate with email service (Mailchimp, ConvertKit, etc.)
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 rounded-xl border bg-card p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-lg font-semibold">Stay Updated</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Get AI automation tips and insights delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" disabled={subscribed}>
                {subscribed ? (
                  <>
                    <CheckIcon className="mr-2 h-4 w-4" />
                    Subscribed
                  </>
                ) : (
                  <>
                    <SendIcon className="mr-2 h-4 w-4" />
                    Subscribe
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold">
              {personalInfo.name.split(" ")[0]}
              <span className="text-primary">.</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              AI Automation Engineer helping businesses save time through intelligent automation.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={personalInfo.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold">Connect</h4>
            <div className="mt-3 flex gap-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="gap-2"
          >
            Back to top
            <ArrowUpIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
