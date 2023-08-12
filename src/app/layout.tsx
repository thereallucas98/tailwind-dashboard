import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Sidebar } from '@/components/Sidebar'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DashWind',
  description: 'A Tailwind dashboard application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid-cols-app grid min-h-screen">
          <Sidebar />
          <main className="px-8 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
