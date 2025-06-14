// import { Separator } from '@radix-ui/react-separator'
import { Slash } from 'lucide-react'

import { ability } from '@/auth/auth'
import { OrganizationSwitcher } from '@/components/organization-switcher'
import { ProfileButton } from '@/components/profile-button'
import { ThemeSwitcher } from '@/components/theme/theme-switcher'

import { ProjectSwitcher } from './project-switcher'
import { Separator } from './ui/separator'

export async function Header() {
  const permissions = await ability()
  return (
    <header className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between space-y-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-2xl font-bold">Logo</h1>
          <Slash className="size-3 -rotate-[30deg] text-border" />
          <OrganizationSwitcher />
          {permissions?.can('get', 'Project') && (
            <>
              <Slash className="size-3 -rotate-[30deg] text-border" />
              <ProjectSwitcher />
            </>
          )}
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <Separator orientation="vertical" className="h-5" />
          <ProfileButton />
        </div>
      </div>
      <Separator />
    </header>
  )
}
