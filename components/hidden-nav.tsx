'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, MapPin, CalendarDays, Backpack, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

const ITEMS = [
  { href: '/hidden', label: 'Accueil', icon: Home },
  { href: '/hidden/lieu', label: 'Lieu', icon: MapPin },
  { href: '/hidden/programme', label: 'Programme', icon: CalendarDays },
  { href: '/hidden/emporter', label: 'Emporter', icon: Backpack },
  { href: '/hidden/equipe', label: 'Équipe', icon: Users },
] as const

export function HiddenNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-10 flex justify-around border-t border-border bg-background/95 backdrop-blur-sm px-2 pt-2"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
    >
      {ITEMS.map(({ href, label, icon: Icon }) => {
        const active = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex flex-col items-center gap-1 px-3 py-1 text-[11px] font-semibold transition-colors',
              active ? 'text-primary' : 'text-muted-foreground',
            )}
          >
            <Icon className="size-5" />
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
