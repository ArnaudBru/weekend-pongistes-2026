import type { ReactNode } from 'react'
import { HiddenNav } from '@/components/hidden-nav'

export default function HiddenLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col pb-20">
      {children}
      <HiddenNav />
    </div>
  )
}
