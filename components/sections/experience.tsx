import { BriefcaseIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { experience } from "@/components/data/portfolio-data"

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Work Experience"
      subtitle="My professional journey"
      className="bg-muted/30"
    >
      <div className="relative mx-auto max-w-3xl">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-1/2" />

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={job.id}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 hidden h-4 w-4 rounded-full border-4 border-primary bg-background md:left-1/2 md:block md:-translate-x-1/2" />

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <BriefcaseIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{job.role}</CardTitle>
                        <CardDescription>{job.company}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {job.period}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {job.description}
                    </p>
                    <ul className="space-y-2 text-sm">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {job.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
