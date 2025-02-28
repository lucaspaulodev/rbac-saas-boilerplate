import { Slash } from 'lucide-react'

import { ability } from '@/auth/auth'
import { OrganizationSwitcher } from '@/components/organization-switcher'
import { ProfileButton } from '@/components/profile-button'

export async function Header() {
  const permissions = await ability()
  return (
    <header className="mx-auto flex max-w-[1280px] items-center justify-between">
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-2xl font-bold">Logo</h1>
        <Slash className="size-3 -rotate-[30deg] text-border" />
        <OrganizationSwitcher />
        {permissions?.can('get', 'Project') && <p>Projects</p>}
      </div>
      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </header>
  )
}
