import { api } from './api'

interface GetProjectsResponse {
  projects: {
    name: string
    id: string
    slug: string
    avatarUrl: string | null
    createdAt: string
    ownerId: string
    organizationId: string
    description: string
    owner: {
      name: string | null
      id: string
      avatarUrl: string | null
    }
  }
}

export async function getProjects(
  orgSlug: string,
): Promise<GetProjectsResponse> {
  const response = await api
    .get(`organizations/${orgSlug}/projects`)
    .json<GetProjectsResponse>()

  return response
}
