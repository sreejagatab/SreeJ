// Image URLs for the portfolio

export const images = {
  // Profile/Avatar
  avatar: "https://avatars.githubusercontent.com/u/62333948?v=4",

  // Animated decorative images from GitHub
  heroAnimation: "https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28505053ee.gif",
  collaborationGif: "https://user-images.githubusercontent.com/74038190/212257468-1e9a91f1-b626-4baa-b15d-5c385b7383ef.gif",
  innovationGif: "https://user-images.githubusercontent.com/74038190/212257454-16e3712e-945a-4ca2-b238-408ad0bf87e6.gif",
  codingGif: "https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif",

  // GitHub achievement badges
  badges: {
    pairExtraordinaire: "https://github.githubassets.com/assets/pair-extraordinaire-default-579438a20e01.png",
    pullShark: "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
    yolo: "https://github.githubassets.com/assets/yolo-default-be0bbff04951.png",
  },

  // GitHub stats widgets
  githubStats: (username: string) =>
    `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default&hide_border=true`,

  githubStreak: (username: string) =>
    `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=default&hide_border=true`,

  topLanguages: (username: string) =>
    `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=default&hide_border=true`,

  // Generate OpenGraph image for a GitHub repo
  repoOgImage: (username: string, repo: string) =>
    `https://opengraph.githubassets.com/1/${username}/${repo}`,

  // Placeholder for projects without images
  projectPlaceholder: (letter: string, color: string = "6366f1") =>
    `https://via.placeholder.com/600x400/${color}/ffffff?text=${letter}`,
}

// Black and white color schemes for project cards
const projectColors = [
  "1a1a1a,ffffff", // Dark black, white text
  "2d2d2d,e5e5e5", // Charcoal, light gray text
  "404040,d4d4d4", // Dark gray, silver text
  "171717,f5f5f5", // Near black, off-white text
  "262626,fafafa", // Dark charcoal, white text
  "0a0a0a,e0e0e0", // Almost black, light text
]

// Get a consistent color for a project based on its name
function getProjectColor(name: string): string {
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return projectColors[hash % projectColors.length]
}

// Generate project image - uses black and white placeholder
export const getProjectImage = (repoName: string, title?: string): string => {
  const displayName = title || repoName.replace(/-/g, ' ').replace(/_/g, ' ')
  const colors = getProjectColor(repoName)
  const [bg, fg] = colors.split(',')

  // Use black and white placeholder with project initial
  return `https://placehold.co/600x300/${bg}/${fg}?text=${encodeURIComponent(displayName.substring(0, 2).toUpperCase())}&font=roboto`
}
