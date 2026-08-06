import Link from 'next/link'
import { HeroSection } from '@/components/sections/hero-section'
import { LocationSection } from '@/components/sections/location-section'
import { ScheduleSection } from '@/components/sections/schedule-section'
import { PackingSection } from '@/components/sections/packing-section'
import { GallerySection } from '@/components/sections/gallery-section'

export default function HiddenPage() {
  return (
    <main className="min-h-screen flex flex-col divide-y divide-border">
      <HeroSection />
      <LocationSection />
      <ScheduleSection />
      <PackingSection />
      <GallerySection />
      <footer className="flex justify-center py-10">
        <Link
          href="/"
          className="text-sm font-semibold text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          Retour au compte à rebours
        </Link>
      </footer>
    </main>
  )
}
