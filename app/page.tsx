import { Countdown } from '@/components/countdown'

export default function Page() {
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
            Les premières infos arrivent...
          </p>
        </div>

        {/* Countdown */}
        <Countdown />
      </div>
    </main>
  )
}
