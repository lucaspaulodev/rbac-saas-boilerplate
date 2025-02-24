import Image from 'next/image'
import Link from 'next/link'

import githubIcon from '@/assets/github-icon.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function SignUpPage() {
  return (
    <form action="">
      <div className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input name="name" type="name" id="name" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input name="email" type="email" id="email" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input name="password" type="password" id="password" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input name="confirmPassword" type="password" id="confirmPassword" />
        </div>

        <Button type="submit" className="w-full">
          Create Account
        </Button>
        <Button variant="link" className="w-full" size="sm" asChild>
          <Link href="/auth/sign-in">Already have an account? Sign In</Link>
        </Button>
        <Separator />
        <Button variant="outline" className="w-full">
          <Image
            src={githubIcon}
            alt="Github logo"
            className="mr-2 size-4 dark:invert"
          />
          Sign Up with Github
        </Button>
      </div>
    </form>
  )
}
