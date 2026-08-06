import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/sections/section-heading'

export function LocationSection() {
  return (
    <section className="flex flex-col items-center gap-5 px-6 py-10">
      <SectionHeading icon={MapPin} eyebrow="Le point de chute" title="Où on loge" />
      <div className="w-full max-w-sm rounded-2xl bg-card p-5 text-center">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Lieu à confirmer. L&apos;adresse exacte sera partagée dans le groupe 💬
        </p>
      </div>
    </section>
  )
}
