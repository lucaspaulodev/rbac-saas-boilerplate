'use client'

import { AlertTriangle, Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import githubIcon from '@/assets/github-icon.svg'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useFormState } from '@/hooks/use-form-state'

import { signInWithGithub } from '../actions'
import { signUpAction } from './actions'

export function SignUpForm() {
  const router = useRouter()

  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    signUpAction,
    () => {
      router.push('/')
    },
  )
  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit}>
        {success === false && message && (
          <Alert variant="destructive">
            <AlertTriangle className="size-4" />
            <AlertTitle>Sign in failed</AlertTitle>
            <AlertDescription>
              <p>{message}</p>
            </AlertDescription>
          </Alert>
        )}
        <div className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input name="name" type="name" id="name" />
            {errors?.name && (
              <p className="text-xs text-destructive">{errors.name[0]}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input name="email" type="email" id="email" />
            {errors?.email && (
              <p className="text-xs text-destructive">{errors.email[0]}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input name="password" type="password" id="password" />
            {errors?.password && (
              <p className="text-xs text-destructive">{errors.password[0]}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              name="confirmPassword"
              type="password"
              id="confirmPassword"
            />
            {errors?.confirmPassword && (
              <p className="text-xs text-destructive">
                {errors.confirmPassword[0]}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              'Create Account'
            )}
          </Button>
          <Button variant="link" className="w-full" size="sm" asChild>
            <Link href="/auth/sign-in">Already have an account? Sign In</Link>
          </Button>
        </div>
      </form>

      <Separator />

      <form action={signInWithGithub}>
        <Button variant="outline" className="w-full">
          <Image
            src={githubIcon}
            alt="Github logo"
            className="mr-2 size-4 dark:invert"
          />
          Sign Up with Github
        </Button>
      </form>
    </div>
  )
}
