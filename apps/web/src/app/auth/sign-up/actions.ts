'use server'

import { HTTPError } from 'ky'
import { z } from 'zod'

import { signUp as signUpHttp } from '@/http/sign-up'

const signUpSchema = z
  .object({
    name: z.string().refine((value) => value.split(' ').length >= 2, {
      message: 'Please, enter your full name',
    }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Confirm password is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  })

export async function signUpAction(formData: FormData) {
  const result = signUpSchema.safeParse(Object.fromEntries(formData))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors
    return { success: false, message: null, errors }
  }

  const { name, email, password } = result.data

  try {
    await signUpHttp({
      name,
      email,
      password,
    })
  } catch (error) {
    if (error instanceof HTTPError) {
      const { message } = await error.response.json()
      return {
        success: false,
        message,
        errors: null,
      }
    }

    return {
      success: false,
      message: 'An unexpected error occurred',
      errors: null,
    }
  }

  return {
    success: true,
    message: null,
    errors: null,
  }
}
