import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/sections/section-heading'

export function LocationSection() {
  return (
    <section className="flex flex-col items-center gap-5 px-6 py-10">
      <SectionHeading icon={MapPin} eyebrow="Le point de chute" title="Où on loge" />

      <div className="w-full max-w-sm rounded-2xl bg-card p-5 flex flex-col gap-3 text-center">
        <p className="text-sm font-bold text-foreground">Saint-Pierre-lès-Nemours</p>
        <p className="text-sm text-muted-foreground">77140 Saint-Pierre-lès-Nemours, Île-de-France</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          L&apos;adresse exacte est partagée dans le groupe 💬
        </p>
      </div>

      <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-border">
        <iframe
          title="Carte — Saint-Pierre-lès-Nemours"
          src="https://www.google.com/maps?q=77140+Saint-Pierre-lès-Nemours&output=embed"
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
