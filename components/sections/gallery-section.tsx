import { Images } from 'lucide-react'
import { SectionHeading } from '@/components/sections/section-heading'

export function GallerySection() {
  return (
    <section className="flex flex-col items-center gap-5 px-6 py-10">
      <SectionHeading icon={Images} eyebrow="Souvenirs" title="Galerie" />
      <div className="w-full max-w-sm rounded-2xl bg-card p-8 text-center">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Les photos arriveront ici après le weekend 📸
        </p>
      </div>
    </section>
  )
}
