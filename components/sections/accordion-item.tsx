'use client'

import { ChevronDown, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface AccordionItemProps {
  icon: LucideIcon
  label: string
  open: boolean
  onToggle: () => void
  children: ReactNode
}

export function AccordionItem({ icon: Icon, label, open, onToggle, children }: AccordionItemProps) {
  return (
    <div className="border-b border-dashed border-[#D9DEDD] last:border-none">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center gap-3 py-3 text-left"
      >
        <Icon className="size-[17px] text-[#C98A2C] shrink-0" />
        <span className="text-sm font-semibold text-[#35424A]">{label}</span>
        <ChevronDown
          className={`ml-auto size-4 text-[#9CA6A8] transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="min-h-0 overflow-hidden">{children}</div>
      </div>
    </div>
  )
}
