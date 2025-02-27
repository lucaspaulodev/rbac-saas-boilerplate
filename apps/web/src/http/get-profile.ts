import { api } from './api'

interface GetProfileResponse {
  user: {
    id: string
    name: string | null
    email: string
    avatar_url: string | null
  }
}

export async function getProfile(): Promise<GetProfileResponse> {
  const response = await api.get('profile').json<GetProfileResponse>()

  return response
}
