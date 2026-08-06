import { Users } from 'lucide-react'
import { SectionHeading } from '@/components/sections/section-heading'

export function TeamSection() {
  return (
    <section className="flex flex-col items-center gap-5 px-6 py-10">
      <SectionHeading icon={Users} eyebrow="Qui vient" title="Équipe" />
      <div className="w-full max-w-sm rounded-2xl bg-card p-8 text-center">
        <p className="text-sm text-muted-foreground leading-relaxed">
          La liste des participants arrive bientôt 👀
        </p>
      </div>
    </section>
  )
}
