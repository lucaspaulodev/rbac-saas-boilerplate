import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saas with role based access control boilerplate',
  description: 'Saas with role based access control boilerplate',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`dark antialiased`}>{children}</body>
    </html>
  )
}
