import { api } from './api'

interface SignInWithGithubResponse {
  token: string
}

export async function signInWithGithub(
  code: string,
): Promise<SignInWithGithubResponse> {
  const response = await api
    .post('sessions/github', {
      json: {
        code,
      },
    })
    .json<SignInWithGithubResponse>()

  return response
}
