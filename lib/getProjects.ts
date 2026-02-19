import projectsData from '../data/projects.json'

export interface Project {
  name: string
  description: string
  category: string
  image: string
  subdomain: string
  url: string
}

export function getProjects(): Project[] {
  return projectsData.map((p) => ({
    ...p,
    url: `https://${p.subdomain}.wanderingparker.com`,
  }))
}

export function getProjectsByCategory(): Record<string, Project[]> {
  const groups: Record<string, Project[]> = {}
  for (const project of getProjects()) {
    if (!groups[project.category]) groups[project.category] = []
    groups[project.category].push(project)
  }
  return groups
}
