import { Backpack } from 'lucide-react'
import { SectionHeading } from '@/components/sections/section-heading'

interface PackingGroup {
  label: string
  items: string[]
}

const PACKING: PackingGroup[] = [
  {
    label: 'Essentiel',
    items: ['Sac de couchage / linge de lit', 'Affaires de toilette', 'Une tenue de rechange'],
  },
  {
    label: 'Pour jouer',
    items: ['Ta raquette si tu en as une', 'Des chaussures de sport', 'Ton envie de gagner 🏓'],
  },
  {
    label: 'Optionnel',
    items: ['Maillot de bain', 'Un jeu de société', 'Ta bonne humeur'],
  },
]

export function PackingSection() {
  return (
    <section className="flex flex-col items-center gap-5 px-6 py-10">
      <SectionHeading icon={Backpack} eyebrow="Check-list" title="Quoi emporter" />
      <div className="w-full max-w-sm flex flex-col gap-4">
        {PACKING.map((group) => (
          <div key={group.label} className="rounded-2xl bg-card p-5">
            <h3 className="text-sm font-bold text-foreground mb-3">{group.label}</h3>
            <ul className="flex flex-col gap-1.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
