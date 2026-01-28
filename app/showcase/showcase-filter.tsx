"use client"

import { useState } from "react"
import { SearchIcon, GithubIcon, ExternalLinkIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GitHubRepo } from "@/components/data/github-repos"

interface ShowcaseFilterProps {
  categories: string[]
  repos: GitHubRepo[]
}

export function ShowcaseFilter({ categories, repos }: ShowcaseFilterProps) {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredRepos = repos.filter(repo => {
    const matchesSearch = search === "" ||
      repo.name.toLowerCase().includes(search.toLowerCase()) ||
      repo.description.toLowerCase().includes(search.toLowerCase())

    const matchesCategory = selectedCategory === "All" || repo.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const showFiltered = search !== "" || selectedCategory !== "All"

  return (
    <div className="mb-12">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Filtered Results */}
      {showFiltered && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">
            {filteredRepos.length} project{filteredRepos.length !== 1 ? 's' : ''} found
            {search && <span className="text-muted-foreground font-normal"> for "{search}"</span>}
            {selectedCategory !== "All" && <span className="text-muted-foreground font-normal"> in {selectedCategory}</span>}
          </h2>
          <div className="space-y-3">
            {filteredRepos.map((repo) => (
              <div
                key={repo.name}
                className="group border border-border/50 rounded-lg p-4 hover:border-primary/50 hover:bg-muted/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {repo.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs">{repo.category}</Badge>
                    </div>
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
          {filteredRepos.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              No projects found. Try a different search term or category.
            </p>
          )}
        </div>
      )}

      {!showFiltered && (
        <p className="text-sm text-muted-foreground mb-8">
          Use the search box or category filters above to find specific projects, or browse all projects below.
        </p>
      )}
    </div>
  )
}
