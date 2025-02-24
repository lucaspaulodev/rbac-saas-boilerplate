import Image from 'next/image'
import Link from 'next/link'

import githubIcon from '@/assets/github-icon.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function SignInPage() {
  return (
    <form action="">
      <div className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input name="email" type="email" id="email" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input name="password" type="password" id="password" />
        </div>
        <Link
          href="/auth/forgot-password"
          className="text-xs font-medium text-foreground hover:underline"
        >
          Forgot Password?
        </Link>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
        <Separator />
        <Button variant="outline" className="w-full">
          <Image
            src={githubIcon}
            alt="Github logo"
            className="mr-2 size-4 dark:invert"
          />
          Sign In with Github
        </Button>
      </div>
    </form>
  )
}
