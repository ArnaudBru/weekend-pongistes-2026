import Link from 'next/link'
import { MapPin, CalendarDays, Backpack, Users, type LucideIcon } from 'lucide-react'

interface Stop {
  href: string
  label: string
  icon: LucideIcon
}

const STOPS: Stop[] = [
  { href: '/hidden/lieu', label: 'Où on loge', icon: MapPin },
  { href: '/hidden/programme', label: 'Le déroulé', icon: CalendarDays },
  { href: '/hidden/emporter', label: 'Quoi emporter', icon: Backpack },
  { href: '/hidden/equipe', label: 'Équipe', icon: Users },
]

export function TicketHero() {
  return (
    <section className="flex flex-col items-center gap-6 bg-[#E9EDEE] px-6 pt-12 pb-8 min-h-[calc(100vh-5rem)]">
      <div className="w-full max-w-sm rounded-2xl bg-white border border-[#D9DEDD] shadow-lg shadow-[#35424A]/10 overflow-hidden">
        <div className="flex flex-col items-center gap-2 text-center px-6 pt-6 pb-5">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9CA6A8]">
            Billet de weekend
          </span>
          <h1
            style={{ fontFamily: 'var(--font-slab), serif' }}
            className="text-2xl font-bold text-[#35424A] tracking-tight text-balance"
          >
            Un weekend entre potes 🏓
          </h1>
          <span className="font-mono text-xs tracking-wide tabular-nums text-[#C98A2C]">
            → Saint-Pierre-lès-Nemours · 27–29 nov. 2026
          </span>
        </div>

        <div
          aria-hidden="true"
          className="h-4 bg-[radial-gradient(circle_at_center,_#E9EDEE_5px,_transparent_5.5px)] [background-size:18px_16px] bg-repeat-x bg-center"
        />

        <nav className="flex flex-col px-6 py-2">
          {STOPS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 py-3 border-b border-dashed border-[#D9DEDD] last:border-none hover:opacity-70 transition-opacity"
            >
              <Icon className="size-[17px] text-[#C98A2C] shrink-0" />
              <span className="text-sm font-semibold text-[#35424A]">{label}</span>
              <span className="ml-auto text-sm text-[#9CA6A8]">→</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}
