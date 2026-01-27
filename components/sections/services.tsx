import { CodeIcon, BotIcon, GlobeIcon, RocketIcon, TrendingUpIcon, PenToolIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { services, personalInfo } from "@/components/data/portfolio-data"

const serviceIcons = [
  CodeIcon,      // Python Automation Scripts
  BotIcon,       // AI Chatbots & GPT Integration
  GlobeIcon,     // Website Development + SEO
  RocketIcon,    // Micro SaaS Development
  TrendingUpIcon, // SEO + Marketing Automation
  PenToolIcon,   // AI Content Creation
]

export function Services() {
  return (
    <SectionWrapper
      id="services"
      title="Services"
      subtitle="Tailored solutions to automate your business"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = serviceIcons[index] || CodeIcon
          const isRecurring = service.type === "recurring"

          return (
            <Card key={service.name} className="group relative overflow-hidden transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <Badge variant={isRecurring ? "default" : "secondary"}>
                    {isRecurring ? "Monthly" : "One-time"}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  {isRecurring && <span className="text-sm text-muted-foreground">/month</span>}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-xl border bg-muted/50 p-8 text-center">
        <h3 className="text-xl font-semibold">Need a Custom Solution?</h3>
        <p className="mt-2 text-muted-foreground">
          Every business is unique. Let's discuss your specific automation needs.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href={`mailto:${personalInfo.email}?subject=Custom%20Automation%20Inquiry`}>
              Get Custom Quote
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
