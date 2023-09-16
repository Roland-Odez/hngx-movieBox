import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { ErrorBoundary } from "react-error-boundary";


const dm_Sans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie Box',
  description: 'Search and view movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dm_Sans.className}>{children}</body>
    </html>
  )
}
