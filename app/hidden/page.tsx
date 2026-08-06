'use client'

import { useRouter } from 'next/navigation'

export default function EasterEggPage() {
  const router = useRouter()

  return (
    <main className="h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-50"
        style={{ background: 'radial-gradient(circle, oklch(0.92 0.06 72), transparent 70%)' }}
      />

      <div className="relative flex flex-col items-center gap-8 w-full max-w-sm text-center">
        <span className="text-7xl" role="img" aria-label="ping pong">🏓</span>

        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl font-extrabold text-foreground tracking-tight">
            Tu as trouvé le code secret.
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Retenez bien la date — ça va être mémorable.
          </p>
        </div>

        <button
          onClick={() => router.push('/')}
          className="mt-2 text-sm font-semibold text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
          type="button"
        >
          Retour au compte à rebours
        </button>
      </div>
    </main>
  )
}
