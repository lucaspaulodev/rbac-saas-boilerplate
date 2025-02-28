import { Role } from '@saas/auth/src/roles'

import { api } from './api'

interface GetMembershipResponse {
  membership: {
    id: string
    role: Role
    organizationId: string
    userId: string
  }
}

export async function getMembership(
  slug: string,
): Promise<GetMembershipResponse> {
  const response = await api
    .get(`organizations/${slug}/membership`)
    .json<GetMembershipResponse>()

  return response
}
