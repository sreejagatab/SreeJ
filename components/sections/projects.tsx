import Image from "next/image"
import Link from "next/link"
import { ExternalLinkIcon, GithubIcon, StarIcon, ArrowRightIcon, SparklesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { getProjects, Project, githubConfig } from "@/lib/github"
import { projects as fallbackProjects } from "@/components/data/portfolio-data"
import { getProjectImage } from "@/lib/images"

function getFallbackProjects(): Project[] {
  return fallbackProjects.map(p => ({
    ...p,
    stars: 0,
    forks: 0,
    language: p.tech[0] || null,
    updatedAt: new Date().toISOString(),
  }))
}

function getRepoName(githubUrl: string): string {
  const match = githubUrl.match(/github\.com\/[^/]+\/([^/]+)/)
  return match ? match[1] : ""
}

// DVE highlight card component
function DVEHighlightCard() {
  return (
    <Card className="col-span-full overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="grid md:grid-cols-2">
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <SparklesIcon className="h-5 w-5 text-primary" />
            <Badge variant="default">Flagship Project</Badge>
          </div>
          <h3 className="text-2xl font-bold md:text-3xl">
            Distributed Venture Engine
          </h3>
          <p className="mt-3 text-muted-foreground">
            A trustless platform for tracking contributions with cryptographic evidence
            and distributing revenue fairly through auditable payout systems.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <div>
              <span className="text-2xl font-bold text-primary">50+</span>
              <span className="ml-1 text-muted-foreground">API Endpoints</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-primary">85%+</span>
              <span className="ml-1 text-muted-foreground">Test Coverage</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-primary">32+</span>
              <span className="ml-1 text-muted-foreground">Permissions</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Next.js 14", "FastAPI", "PostgreSQL", "TypeScript", "Redis"].map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/dve">
                View Case Study
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://dve-woad.vercel.app/" target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="https://github.com/sreejagatab/Distributed-Venture-Engine-DVE-" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" />
                Source
              </a>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center bg-muted/50 p-8">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-primary text-4xl font-bold text-primary-foreground">
              DVE
            </div>
            <p className="text-sm text-muted-foreground">Distributed Venture Engine</p>
            <p className="text-xs text-muted-foreground mt-1">Production-grade • Open Source • MIT License</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export async function Projects() {
  let projects: Project[] = []
  let isLive = false

  try {
    projects = await getProjects()
    isLive = projects.length > 0
  } catch (error) {
    console.error("Failed to fetch projects:", error)
  }

  if (projects.length === 0) {
    projects = getFallbackProjects()
  }

  // Filter out DVE from regular projects since we show it separately
  const filteredProjects = projects.filter(p =>
    !p.title.toLowerCase().includes('distributed-venture') &&
    !p.title.toLowerCase().includes('dve')
  )

  const featuredProjects = filteredProjects.filter((p) => p.featured).slice(0, 4)
  const otherProjects = filteredProjects.filter((p) => !p.featured).slice(0, 6)

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle={isLive ? `Auto-synced from GitHub @${githubConfig.username}` : "Some of my recent work"}
      className="bg-muted/30"
    >
      {/* Open to Work Banner */}
      <div className="mb-8 text-center">
        <p className="text-xl font-bold text-primary underline decoration-double decoration-2">
          Open To Work - Lets Collaborate To Build & Earn
        </p>
      </div>

      {/* DVE Highlight */}
      <DVEHighlightCard />

      {/* Featured Projects */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {featuredProjects.map((project) => {
          const repoName = getRepoName(project.githubUrl) || project.title.toLowerCase().replace(/\s+/g, '-')

          return (
            <Card key={project.id} className="group overflow-hidden">
              <div className="aspect-video bg-muted overflow-hidden">
                <Image
                  src={getProjectImage(repoName)}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    {project.stars > 0 && (
                      <Badge variant="outline" className="gap-1">
                        <StarIcon className="h-3 w-3" />
                        {project.stars}
                      </Badge>
                    )}
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                </div>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-3">
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="mr-1.5 h-3.5 w-3.5" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-1.5 h-3.5 w-3.5" />
                    Source
                  </a>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div className="mt-12">
          <h3 className="mb-6 text-center text-xl font-semibold">More Projects</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => {
              const repoName = getRepoName(project.githubUrl) || project.title.toLowerCase().replace(/\s+/g, '-')

              return (
                <Card key={project.id} size="sm" className="group overflow-hidden">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <Image
                      src={getProjectImage(repoName)}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      {project.stars > 0 && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <StarIcon className="h-3 w-3" />
                          {project.stars}
                        </div>
                      )}
                    </div>
                    <CardDescription className="line-clamp-2 text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon className="mr-1 h-3 w-3" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="mr-1 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* View All on GitHub */}
      <div className="mt-12 text-center">
        <Button variant="outline" size="lg" asChild>
          <a
            href={`https://github.com/${githubConfig.username}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="mr-2 h-4 w-4" />
            View All Repositories on GitHub
          </a>
        </Button>
      </div>
    </SectionWrapper>
  )
}
