import { MailIcon, MapPinIcon, PhoneIcon, GithubIcon, LinkedinIcon, GlobeIcon, MessageCircleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { personalInfo } from "@/components/data/portfolio-data"

// Product Hunt icon component
function ProductHuntIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 5v10h2v-4h2.5c1.933 0 3.5-1.567 3.5-3.5S17.433 6 15.5 6H11zm2 2h2.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H13V9z"/>
    </svg>
  )
}

const contactInfo = [
  { icon: MailIcon, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: PhoneIcon, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: MapPinIcon, label: "Location", value: personalInfo.location },
  { icon: GlobeIcon, label: "Website", value: "jagatab.uk", href: personalInfo.website },
]

const socialLinks = [
  { href: personalInfo.github, icon: GithubIcon, label: "GitHub" },
  { href: personalInfo.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: `https://wa.me/${personalInfo.phone?.replace(/\+/g, '')}`, icon: MessageCircleIcon, label: "WhatsApp" },
  { href: "https://www.producthunt.com/@sreeganesh_jagatab", icon: ProductHuntIcon, label: "Product Hunt" },
]

export function Contact() {
  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Let's discuss your automation needs"
    >
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-medium hover:text-primary"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-xl font-semibold">Service Hours</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Monday - Friday: 8am - 8pm</p>
                <p>Saturday: 9am - 6pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Social Links & Availability */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((link) => (
                <Button key={link.label} variant="outline" size="lg" className="justify-start" asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="mr-2 h-4 w-4" />
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>

            {personalInfo.available && (
              <Card className="mt-8 border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
                <CardContent className="flex items-center gap-4 pt-6">
                  <div className="flex h-3 w-3 items-center justify-center">
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative h-2 w-2 rounded-full bg-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-green-800 dark:text-green-200">
                      Available for New Projects
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Face-to-face in Cambridgeshire • Remote worldwide
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="mt-8 rounded-lg border bg-muted/50 p-6 text-center">
              <p className="text-lg font-semibold">Quick Response Guaranteed</p>
              <p className="mt-2 text-3xl font-bold text-primary">24 Hours</p>
              <p className="mt-1 text-sm text-muted-foreground">Average response time</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
