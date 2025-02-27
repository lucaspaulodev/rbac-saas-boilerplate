import { ProfileButton } from '@/components/profile-button'

export function Header() {
  return (
    <header className="mx-auto flex max-w-[1280px] items-center justify-between">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>
      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </header>
  )
}
