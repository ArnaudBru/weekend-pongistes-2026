'use client'

import { useState } from 'react'
import { MapPin, CalendarDays, Backpack, Users, Navigation, TrainFront, Car, type LucideIcon } from 'lucide-react'
import { TicketHeader } from '@/components/sections/ticket-header'
import { AccordionItem } from '@/components/sections/accordion-item'
import { VENUE_NAME, VENUE_MAPS_QUERY } from '@/lib/venue'
import type { ReactNode } from 'react'

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="text-sm font-medium text-[#35424A] bg-[#F1F3F3] rounded-full px-3.5 py-2">
      {children}
    </span>
  )
}

function TransportCard({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon
  label: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5">
        <Icon className="size-4 text-[#C98A2C] shrink-0" />
        <p className="text-sm font-bold text-[#35424A]">{label}</p>
      </div>
      {children}
    </div>
  )
}

const LIEU_MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${VENUE_MAPS_QUERY}`

async function handleYAller() {
  if (navigator.share) {
    try {
      await navigator.share({ title: VENUE_NAME, url: LIEU_MAPS_URL })
    } catch {
      // utilisateur a annulé le partage — rien à faire
    }
  } else {
    window.open(LIEU_MAPS_URL, '_blank', 'noopener,noreferrer')
  }
}

function LieuCompact() {
  return (
    <div className="flex flex-col gap-3 pb-6">
      <div className="rounded-xl overflow-hidden border border-[#D9DEDD]">
        <iframe
          title={`Carte — ${VENUE_NAME}`}
          src={`https://www.google.com/maps?q=${VENUE_MAPS_QUERY}&output=embed`}
          className="w-full h-48 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="text-base font-bold text-[#35424A]">{VENUE_NAME}</p>

      <TransportCard icon={TrainFront} label="En train">
        <p className="text-sm text-[#5A6668]">
          Gare Nemours – Saint-Pierre · ~50 min depuis Paris + 5 min de route (ou 15 min à vélo)
        </p>
      </TransportCard>

      <TransportCard icon={Car} label="En voiture">
        <p className="text-sm text-[#5A6668]">~1h15 depuis Paris · ~4h depuis Lyon · ~5h45 depuis Bordeaux</p>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleYAller}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#C98A2C] text-white text-sm font-semibold px-3.5 py-2"
          >
            <Navigation className="size-4" />
            Y aller
          </button>
        </div>
      </TransportCard>
    </div>
  )
}

function ProgrammeCompact() {
  const days = [
    { label: 'Vendredi 27', items: ['Arrivée & installation', 'Apéro & dîner'] },
    { label: 'Samedi 28', items: ['Petit-déj', 'Tournoi de ping-pong 🏓', 'Repas du soir'] },
    { label: 'Dimanche 29', items: ['Petit-déj', 'Temps libre', 'Départ'] },
  ]
  return (
    <div className="flex flex-col gap-5 pb-6">
      {days.map((d) => (
        <div key={d.label} className="flex flex-col gap-2.5">
          <p className="text-base font-bold text-[#35424A]">{d.label}</p>
          <div className="flex flex-wrap gap-2.5">
            {d.items.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function EmporterCompact() {
  const groups = [
    { label: 'Essentiel', items: ['Sac de couchage', 'Trousse de toilette', 'Tenue de rechange'] },
    { label: 'Pour jouer', items: ['Ta raquette', 'Chaussures de sport', 'L’envie de gagner 🏓'] },
    { label: 'Optionnel', items: ['Maillot de bain', 'Jeu de société', 'Bonne humeur'] },
  ]
  return (
    <div className="flex flex-col gap-5 pb-6">
      {groups.map((g) => (
        <div key={g.label} className="flex flex-col gap-2.5">
          <p className="text-base font-bold text-[#35424A]">{g.label}</p>
          <div className="flex flex-wrap gap-2.5">
            {g.items.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function EquipeCompact() {
  return (
    <div className="mb-6 rounded-xl border border-dashed border-[#D9DEDD] py-10 text-center">
      <p className="text-base text-[#8B9496]">La liste des participants arrive bientôt 👀</p>
    </div>
  )
}

interface Stop {
  key: string
  label: string
  icon: LucideIcon
  content: ReactNode
}

const STOPS: Stop[] = [
  { key: 'lieu', label: 'Où on loge', icon: MapPin, content: <LieuCompact /> },
  { key: 'programme', label: 'Le déroulé', icon: CalendarDays, content: <ProgrammeCompact /> },
  { key: 'emporter', label: 'Quoi emporter', icon: Backpack, content: <EmporterCompact /> },
  { key: 'equipe', label: 'Équipe', icon: Users, content: <EquipeCompact /> },
]

export default function UniquePage() {
  const [openKey, setOpenKey] = useState<string | null>(null)

  return (
    <section className="flex flex-col items-center gap-6 bg-[#E9EDEE] px-6 pt-12 pb-8 min-h-screen">
      <div className="w-full max-w-sm rounded-2xl bg-white border border-[#D9DEDD] shadow-lg shadow-[#35424A]/10 overflow-hidden">
        <TicketHeader />
        <div className="flex flex-col px-6 py-3">
          {STOPS.map((stop) => (
            <AccordionItem
              key={stop.key}
              icon={stop.icon}
              label={stop.label}
              open={openKey === stop.key}
              onToggle={() => setOpenKey((k) => (k === stop.key ? null : stop.key))}
            >
              {stop.content}
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  )
}
