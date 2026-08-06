import Link from 'next/link'
import { MapPin, CalendarDays, Backpack, Users, type LucideIcon } from 'lucide-react'

interface QuickLink {
  href: string
  label: string
  icon: LucideIcon
}

const LINKS: QuickLink[] = [
  { href: '/hidden/lieu', label: 'Où on loge', icon: MapPin },
  { href: '/hidden/programme', label: 'Le déroulé', icon: CalendarDays },
  { href: '/hidden/emporter', label: 'Quoi emporter', icon: Backpack },
  { href: '/hidden/equipe', label: 'Équipe', icon: Users },
]

export function QuickLinks() {
  return (
    <div className="w-full max-w-sm grid grid-cols-2 gap-3 px-6">
      {LINKS.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className="flex flex-col items-center gap-2 rounded-2xl bg-card p-5 text-center hover:opacity-80 transition-opacity"
        >
          <Icon className="size-6 text-primary" />
          <span className="text-sm font-semibold text-foreground">{label}</span>
        </Link>
      ))}
    </div>
  )
}
