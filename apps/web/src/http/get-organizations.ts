import { api } from './api'

type Organization = {
  id: string
  name: string
  slug: string
  avatarUrl: string | null
}

interface GetOrganizationsResponse {
  organizations: Organization[]
}

export async function getOrganizations(): Promise<GetOrganizationsResponse> {
  const response = await api
    .get('organizations')
    .json<GetOrganizationsResponse>()

  return response
}
