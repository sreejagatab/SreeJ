import { CodeIcon, ServerIcon, WrenchIcon, BrainIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { skills } from "@/components/data/portfolio-data"

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: BrainIcon,
    skills: skills.ai,
    color: "text-purple-500",
  },
  {
    title: "Frontend",
    icon: CodeIcon,
    skills: skills.frontend,
    color: "text-blue-500",
  },
  {
    title: "Backend",
    icon: ServerIcon,
    skills: skills.backend,
    color: "text-green-500",
  },
  {
    title: "Tools & DevOps",
    icon: WrenchIcon,
    skills: skills.tools,
    color: "text-orange-500",
  },
]

export function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle="Technologies I work with"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => (
          <Card key={category.title}>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <category.icon className={`h-5 w-5 ${category.color}`} />
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
