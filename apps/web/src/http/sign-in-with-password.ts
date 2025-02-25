import { api } from './api'

interface SignInWithPasswordRequest {
  email: string
  password: string
}

interface SignInWithPasswordResponse {
  token: string
}

export async function signInWithPassword(
  request: SignInWithPasswordRequest,
): Promise<SignInWithPasswordResponse> {
  const response = await api
    .post('sessions/password', {
      json: {
        email: request.email,
        password: request.password,
      },
    })
    .json<SignInWithPasswordResponse>()

  return response
}
