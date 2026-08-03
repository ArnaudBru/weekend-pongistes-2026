import { Countdown } from '@/components/countdown'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, oklch(0.78 0.06 65), transparent 70%)' }}
      />

      <div className="relative flex flex-col items-center gap-14 w-full max-w-md text-center">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Plus que
        </p>

        {/* Countdown */}
        <Countdown />

        {/* Divider */}
        <div className="w-px h-10 bg-border" aria-hidden="true" />

        {/* Message */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight text-balance">
            Quelque chose arrive. 🏓
          </h1>
          <p className="text-sm text-muted-foreground font-normal leading-relaxed text-pretty max-w-xs">
            Les détails seront révélés en temps voulu.
          </p>
        </div>
      </div>
    </main>
  )
}
