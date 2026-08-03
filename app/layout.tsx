import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const _nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Bientôt.',
  description: 'Quelque chose arrive.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
