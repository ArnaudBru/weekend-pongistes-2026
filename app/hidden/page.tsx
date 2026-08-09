import Link from 'next/link'
import { TicketHero } from '@/components/sections/ticket-hero'

export default function HiddenPage() {
  return (
    <>
      <TicketHero />
      <footer className="flex justify-center py-10 bg-[#E9EDEE]">
        <Link
          href="/"
          className="text-sm font-semibold text-[#35424A] underline underline-offset-4 opacity-75 hover:opacity-100 transition-opacity"
        >
          Retour au compte à rebours
        </Link>
      </footer>
    </>
  )
}
