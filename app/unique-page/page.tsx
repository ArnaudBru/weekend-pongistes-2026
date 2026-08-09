'use client'

import { useState } from 'react'
import { MapPin, CalendarDays, Backpack, Users, type LucideIcon } from 'lucide-react'
import { TicketHeader } from '@/components/sections/ticket-header'
import { AccordionItem } from '@/components/sections/accordion-item'
import type { ReactNode } from 'react'

function LieuCompact() {
  return (
    <div className="flex flex-col gap-2 pb-4">
      <div className="rounded-xl overflow-hidden border border-[#D9DEDD]">
        <iframe
          title="Carte — Château de Bailly"
          src="https://www.google.com/maps?q=Château+de+Bailly,+Saint-Pierre-lès-Nemours&output=embed"
          className="w-full h-28 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="text-xs font-semibold text-[#35424A]">Château de Bailly</p>
      <p className="text-[11px] text-[#8B9496]">Arrivée ven. 27 nov. · Départ dim. 29 nov.</p>
    </div>
  )
}

function ProgrammeCompact() {
  const days = [
    { label: 'Ven 27', items: 'Arrivée & installation, apéro & dîner' },
    { label: 'Sam 28', items: 'Petit-déj, tournoi de ping-pong 🏓, repas du soir' },
    { label: 'Dim 29', items: 'Petit-déj, temps libre, départ' },
  ]
  return (
    <div className="flex flex-col gap-2 pb-4">
      {days.map((d) => (
        <p key={d.label} className="text-xs text-[#35424A] leading-relaxed">
          <span className="font-semibold">{d.label} — </span>
          <span className="text-[#5A6668]">{d.items}</span>
        </p>
      ))}
    </div>
  )
}

function EmporterCompact() {
  const groups = [
    { label: 'Essentiel', items: 'sac de couchage, trousse de toilette, tenue de rechange' },
    { label: 'Pour jouer', items: 'ta raquette, chaussures de sport, l’envie de gagner 🏓' },
    { label: 'Optionnel', items: 'maillot de bain, jeu de société, bonne humeur' },
  ]
  return (
    <div className="flex flex-col gap-2 pb-4">
      {groups.map((g) => (
        <p key={g.label} className="text-xs text-[#35424A] leading-relaxed">
          <span className="font-semibold">{g.label} — </span>
          <span className="text-[#5A6668]">{g.items}</span>
        </p>
      ))}
    </div>
  )
}

function EquipeCompact() {
  return (
    <p className="pb-4 text-xs text-[#8B9496]">La liste des participants arrive bientôt 👀</p>
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
        <div className="flex flex-col px-6 py-2">
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
