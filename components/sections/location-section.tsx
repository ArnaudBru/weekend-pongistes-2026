import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/sections/section-heading'

export function LocationSection() {
  return (
    <section className="flex flex-col items-center gap-5 px-6 py-10">
      <SectionHeading icon={MapPin} eyebrow="Exemple — lieu à confirmer" title="Où on loge" />

      <div className="w-full max-w-sm rounded-2xl bg-card p-5 flex flex-col gap-3 text-center">
        <p className="text-sm font-bold text-foreground">Château de Vincennes</p>
        <p className="text-sm text-muted-foreground">Avenue de Paris, 94300 Vincennes</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Adresse d&apos;exemple pour tester la mise en page — le vrai lieu sera partagé dans le
          groupe 💬
        </p>
      </div>

      <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-border">
        <iframe
          title="Carte — Château de Vincennes"
          src="https://www.google.com/maps?q=Château+de+Vincennes,+94300+Vincennes&output=embed"
          className="w-full h-52 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="w-full max-w-sm rounded-2xl bg-card p-5 grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-semibold">
            Arrivée
          </p>
          <p className="text-sm text-foreground font-bold mt-1">Ven. 27 nov.</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-semibold">
            Départ
          </p>
          <p className="text-sm text-foreground font-bold mt-1">Dim. 29 nov.</p>
        </div>
      </div>

      <div className="w-full max-w-sm rounded-2xl bg-card p-5 text-center">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Covoiturage à organiser entre nous — qui prend sa voiture ? 🚗
        </p>
      </div>
    </section>
  )
}
