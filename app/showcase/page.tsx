import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeftIcon, GithubIcon, ExternalLinkIcon, FolderIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { githubRepos, categories } from "@/components/data/github-repos"
import { personalInfo } from "@/components/data/portfolio-data"
import { ShowcaseFilter } from "./showcase-filter"

export const metadata: Metadata = {
  title: "Project Showcase | Sree Jagatab",
  description: "Explore 50+ open source projects by Sree Jagatab - AI automation, multi-agent systems, SaaS platforms, voice assistants, and more.",
  openGraph: {
    title: "Project Showcase | Sree Jagatab",
    description: "Explore 50+ open source projects - AI automation, multi-agent systems, SaaS platforms, and more.",
    url: "https://sreej.jagatab.uk/showcase",
  },
}

export default function ShowcasePage() {
  // Group repos by category
  const reposByCategory = categories.slice(1).map(category => ({
    category,
    repos: githubRepos.filter(repo => repo.category === category),
  })).filter(group => group.repos.length > 0)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeftIcon className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>
          <Button asChild variant="outline" size="sm">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-4 w-4 mr-2" />
              GitHub Profile
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Project Showcase
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore {githubRepos.length}+ open source projects spanning AI automation,
            multi-agent systems, SaaS platforms, voice assistants, and enterprise solutions.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categories.slice(1).map(cat => (
              <Badge key={cat} variant="secondary" className="text-xs">
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <ShowcaseFilter categories={categories} repos={githubRepos} />

          {/* All Projects by Category */}
          <div className="space-y-12">
            {reposByCategory.map(({ category, repos }) => (
              <div key={category}>
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <FolderIcon className="h-5 w-5 text-primary" />
                  {category}
                  <Badge variant="outline" className="ml-2">{repos.length}</Badge>
                </h2>
                <div className="space-y-3">
                  {repos.map((repo) => (
                    <div
                      key={repo.name}
                      className="group border border-border/50 rounded-lg p-4 hover:border-primary/50 hover:bg-muted/30 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {repo.name}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                            {repo.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <Button asChild variant="outline" size="sm">
                            <a href={repo.githubUrl} target="_blank" rel="noopener noreferrer">
                              <GithubIcon className="h-4 w-4 mr-1" />
                              Code
                            </a>
                          </Button>
                          {repo.liveUrl && (
                            <Button asChild size="sm">
                              <a href={repo.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLinkIcon className="h-4 w-4 mr-1" />
                                Live
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-6">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All projects open source on GitHub.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="/" className="hover:text-foreground transition-colors">Portfolio</Link>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
