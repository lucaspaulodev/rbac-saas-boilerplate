'use server'

import { signInWithPassword } from '@/http/sign-in-with-password'

export async function signInWithEmailAndPassword(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')

  const result = await signInWithPassword({
    email: String(email),
    password: String(password),
  })

  console.log(result)
}
