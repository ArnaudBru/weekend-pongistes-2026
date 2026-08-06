import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const _nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Weekend Pongistes 2026',
  description: 'Un weekend entre amis. Bientôt.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f0e4',
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
