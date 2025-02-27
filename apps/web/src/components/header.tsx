import { Slash } from 'lucide-react'

import { OrganizationSwitcher } from '@/components/organization-switcher'
import { ProfileButton } from '@/components/profile-button'

export function Header() {
  return (
    <header className="mx-auto flex max-w-[1280px] items-center justify-between">
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-2xl font-bold">Logo</h1>
        <Slash className="size-3 -rotate-[30deg] text-border" />
        <OrganizationSwitcher />
      </div>
      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </header>
  )
}
