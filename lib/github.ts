// GitHub API integration for automatic repo syncing

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
  fork: boolean
  archived: boolean
  visibility: string
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
  stars: number
  forks: number
  language: string | null
  updatedAt: string
}

// Configuration for your GitHub profile
export const githubConfig = {
  username: "sreejagatab",
  // Repos to always feature (by name) - partial match supported
  featuredRepos: [
    "Distributed-Venture-Engine",
    "DVE",
    "UnifyAI",
    "AINXAgent",
    "chatbot",
    "fininsight",
    "videoprocessing",
    "Sankalpa",
    "Medical-Voice",
    "learning-platform",
    "codebridge",
    "typeform2pdf",
  ],
  // Repos to exclude from portfolio
  excludedRepos: [
    ".github",
    "sreejagatab",  // Profile repo
  ],
  // Minimum stars to auto-feature
  minStarsToFeature: 3,
  // Max repos to show
  maxRepos: 24,
}

export interface GitHubUserStats {
  publicRepos: number
  followers: number
  following: number
  totalStars: number
  totalForks: number
}

// Language to tech stack mapping (for better display)
const languageToTech: Record<string, string[]> = {
  "TypeScript": ["TypeScript", "Node.js"],
  "JavaScript": ["JavaScript", "Node.js"],
  "Python": ["Python"],
  "Go": ["Go"],
  "Rust": ["Rust"],
  "Java": ["Java"],
  "C#": ["C#", ".NET"],
  "PHP": ["PHP"],
  "Ruby": ["Ruby"],
  "Swift": ["Swift", "iOS"],
  "Kotlin": ["Kotlin", "Android"],
}

// Topic to tech mapping
const topicToTech: Record<string, string> = {
  "react": "React",
  "nextjs": "Next.js",
  "next": "Next.js",
  "vue": "Vue.js",
  "angular": "Angular",
  "svelte": "Svelte",
  "tailwindcss": "Tailwind CSS",
  "tailwind": "Tailwind CSS",
  "nodejs": "Node.js",
  "express": "Express",
  "fastapi": "FastAPI",
  "django": "Django",
  "flask": "Flask",
  "postgresql": "PostgreSQL",
  "postgres": "PostgreSQL",
  "mongodb": "MongoDB",
  "mysql": "MySQL",
  "redis": "Redis",
  "docker": "Docker",
  "kubernetes": "Kubernetes",
  "aws": "AWS",
  "gcp": "Google Cloud",
  "azure": "Azure",
  "openai": "OpenAI",
  "gpt": "GPT",
  "langchain": "LangChain",
  "tensorflow": "TensorFlow",
  "pytorch": "PyTorch",
  "machine-learning": "ML",
  "ai": "AI",
  "llm": "LLM",
  "api": "REST API",
  "graphql": "GraphQL",
  "websocket": "WebSocket",
  "vercel": "Vercel",
}

function extractTechFromRepo(repo: GitHubRepo): string[] {
  const tech: Set<string> = new Set()

  // Add language-based tech
  if (repo.language && languageToTech[repo.language]) {
    languageToTech[repo.language].forEach(t => tech.add(t))
  } else if (repo.language) {
    tech.add(repo.language)
  }

  // Add topic-based tech
  repo.topics.forEach(topic => {
    const lowerTopic = topic.toLowerCase()
    if (topicToTech[lowerTopic]) {
      tech.add(topicToTech[lowerTopic])
    }
  })

  // Infer from repo name/description
  const text = `${repo.name} ${repo.description || ""}`.toLowerCase()

  if (text.includes("react")) tech.add("React")
  if (text.includes("next")) tech.add("Next.js")
  if (text.includes("openai") || text.includes("gpt")) tech.add("OpenAI")
  if (text.includes("claude")) tech.add("Claude")
  if (text.includes("llm") || text.includes("ai agent")) tech.add("LLM")
  if (text.includes("docker")) tech.add("Docker")
  if (text.includes("aws")) tech.add("AWS")

  return Array.from(tech).slice(0, 6) // Max 6 tech tags
}

function formatRepoName(name: string): string {
  return name
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/demo$/i, "")
    .replace(/\s+/g, " ")
    .trim()
}

export function transformRepoToProject(repo: GitHubRepo): Project {
  const isFeatured =
    githubConfig.featuredRepos.some(f =>
      repo.name.toLowerCase().includes(f.toLowerCase())
    ) ||
    repo.stargazers_count >= githubConfig.minStarsToFeature

  return {
    id: repo.id,
    title: formatRepoName(repo.name),
    description: repo.description || `A ${repo.language || "software"} project`,
    image: `/projects/${repo.name.toLowerCase()}.jpg`,
    tech: extractTechFromRepo(repo),
    liveUrl: repo.homepage || `https://github.com/${repo.full_name}`,
    githubUrl: repo.html_url,
    featured: isFeatured,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language,
    updatedAt: repo.updated_at,
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${githubConfig.username}/repos?per_page=100&sort=updated`,
    {
      headers: {
        "Accept": "application/vnd.github.v3+json",
        // Add token for higher rate limits (optional)
        ...(process.env.GITHUB_TOKEN && {
          "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`
        })
      },
      next: {
        revalidate: 3600, // Cache for 1 hour
      }
    }
  )

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`)
  }

  const repos: GitHubRepo[] = await response.json()

  return repos
    .filter(repo =>
      !repo.fork &&
      !repo.archived &&
      repo.visibility === "public" &&
      !githubConfig.excludedRepos.includes(repo.name)
    )
    .sort((a, b) => {
      // Sort by: featured first, then by stars, then by update date
      const aFeatured = githubConfig.featuredRepos.some(f =>
        a.name.toLowerCase().includes(f.toLowerCase())
      )
      const bFeatured = githubConfig.featuredRepos.some(f =>
        b.name.toLowerCase().includes(f.toLowerCase())
      )

      if (aFeatured && !bFeatured) return -1
      if (!aFeatured && bFeatured) return 1

      if (a.stargazers_count !== b.stargazers_count) {
        return b.stargazers_count - a.stargazers_count
      }

      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    })
    .slice(0, githubConfig.maxRepos)
}

export async function getProjects(): Promise<Project[]> {
  try {
    const repos = await fetchGitHubRepos()
    return repos.map(transformRepoToProject)
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error)
    // Return empty array on error - fallback handled in component
    return []
  }
}

export async function getGitHubStats(): Promise<GitHubUserStats | null> {
  try {
    // Fetch user profile
    const userResponse = await fetch(
      `https://api.github.com/users/${githubConfig.username}`,
      {
        headers: {
          "Accept": "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN && {
            "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`
          })
        },
        next: {
          revalidate: 3600, // Cache for 1 hour
        }
      }
    )

    if (!userResponse.ok) {
      throw new Error(`GitHub API error: ${userResponse.status}`)
    }

    const user = await userResponse.json()

    // Fetch repos to calculate total stars and forks
    const repos = await fetchGitHubRepos()
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0)

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      totalStars,
      totalForks,
    }
  } catch (error) {
    console.error("Failed to fetch GitHub stats:", error)
    return null
  }
}
