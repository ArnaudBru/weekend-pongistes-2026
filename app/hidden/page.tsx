import Link from 'next/link'
import { HeroSection } from '@/components/sections/hero-section'
import { QuickLinks } from '@/components/sections/quick-links'

export default function HiddenPage() {
  return (
    <>
      <HeroSection />
      <QuickLinks />
      <footer className="flex justify-center py-10">
        <Link
          href="/"
          className="text-sm font-semibold text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          Retour au compte à rebours
        </Link>
      </footer>
    </>
  )
}
