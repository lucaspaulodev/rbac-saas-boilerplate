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
import { signInWithEmailAndPassword } from './actions'

export function SignInForm() {
  const router = useRouter()

  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    signInWithEmailAndPassword,
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
          <Link
            href="/auth/forgot-password"
            className="text-xs font-medium text-foreground hover:underline"
          >
            Forgot Password?
          </Link>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              'Sign In'
            )}
          </Button>
          <Button variant="link" className="w-full" size="sm" asChild>
            <Link href="/auth/sign-up">
              Don&apos;t have an account? Sign Up
            </Link>
          </Button>
        </div>
      </form>

      <Separator />
      <form action={signInWithGithub}>
        <Button variant="outline" className="w-full" type="submit">
          <Image
            src={githubIcon}
            alt="Github logo"
            className="mr-2 size-4 dark:invert"
          />
          Sign In with Github
        </Button>
      </form>
    </div>
  )
}
