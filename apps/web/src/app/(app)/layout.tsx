import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'

export default async function AppLayout({
  children,
  teste,
}: Readonly<{
  children: React.ReactNode
  teste: React.ReactNode
}>) {
  const isAuth = await isAuthenticated()

  if (!isAuth) {
    redirect('/auth/sign-in')
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-4">
      <main className="mx-auto w-full max-w-[1200px] sm:px-4">
        {children}
        {teste}
      </main>
    </div>
  )
}
