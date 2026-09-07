import { redirect } from 'next/navigation'
import { Countdown } from '@/components/countdown'
import { TARGET_DATE } from '@/lib/event-date'

// This page's redirect depends on the current time, so it must be computed
// fresh on every request rather than prerendered once at build/deploy time.
export const dynamic = 'force-dynamic'

export default async function Page() {
  if (Date.now() >= TARGET_DATE.getTime()) {
    redirect('/unique-page')
  }

  return (
    <main className="h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Warm ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-40"
        style={{ background: 'radial-gradient(circle, oklch(0.92 0.06 72), transparent 70%)' }}
      />

      <div className="relative flex flex-col items-center gap-10 w-full max-w-md text-center">
        {/* Message */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight text-balance">
            Un weekend entre amis 🏓
          </h1>
          <p className="text-base text-muted-foreground font-medium">
            Les prochaines infos arrivent dans
          </p>
        </div>

        {/* Countdown */}
        <Countdown />
      </div>
    </main>
  )
}
