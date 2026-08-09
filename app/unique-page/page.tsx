'use client'

import { useState } from 'react'
import { MapPin, CalendarDays, Backpack, Users, type LucideIcon } from 'lucide-react'
import { TicketHeader } from '@/components/sections/ticket-header'
import { AccordionItem } from '@/components/sections/accordion-item'
import { LocationSection } from '@/components/sections/location-section'
import { ScheduleSection } from '@/components/sections/schedule-section'
import { PackingSection } from '@/components/sections/packing-section'
import { TeamSection } from '@/components/sections/team-section'
import type { ReactNode } from 'react'

interface Stop {
  key: string
  label: string
  icon: LucideIcon
  content: ReactNode
}

const STOPS: Stop[] = [
  { key: 'lieu', label: 'Où on loge', icon: MapPin, content: <LocationSection /> },
  { key: 'programme', label: 'Le déroulé', icon: CalendarDays, content: <ScheduleSection /> },
  { key: 'emporter', label: 'Quoi emporter', icon: Backpack, content: <PackingSection /> },
  { key: 'equipe', label: 'Équipe', icon: Users, content: <TeamSection /> },
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
