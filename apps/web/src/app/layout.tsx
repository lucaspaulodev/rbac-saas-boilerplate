import './globals.css'

import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
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
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute={'class'}
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
