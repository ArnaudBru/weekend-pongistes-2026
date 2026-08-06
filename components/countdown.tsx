'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'

const TARGET_DATE = new Date('2026-09-27T00:00:00')

// Correct sequence: heures → minutes → jours
const SEQUENCE = ['heures', 'minutes', 'jours'] as const
type Step = typeof SEQUENCE[number]

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const diff = TARGET_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

interface UnitProps {
  value: number
  label: string
  onClick?: () => void
}

function Unit({ value, label, onClick }: UnitProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        onClick={onClick}
        className="bg-card rounded-2xl px-4 py-3 min-w-[72px] cursor-default select-none"
      >
        <span className="text-5xl sm:text-6xl font-extrabold tabular-nums leading-none text-foreground">
          {pad(value)}
        </span>
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const [progress, setProgress] = useState<Step[]>([])
  const router = useRouter()

  useEffect(() => {
    setTimeLeft(getTimeLeft())
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const handleClick = useCallback((unit: Step) => {
    setProgress((prev) => {
      const expected = SEQUENCE[prev.length]
      if (unit === expected) {
        const next = [...prev, unit]
        if (next.length === SEQUENCE.length) {
          // Sequence complete — navigate after a short delay
          setTimeout(() => router.push('/hidden'), 200)
          return []
        }
        return next
      }
      // Wrong step — reset
      return unit === SEQUENCE[0] ? [unit] : []
    })
  }, [router])

  const isOver =
    timeLeft !== null &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0

  if (timeLeft === null) {
    return (
      <div className="flex items-end gap-3 sm:gap-4 justify-center">
        {['J', 'H', 'M', 'S'].map((l) => (
          <div key={l} className="flex flex-col items-center gap-2">
            <div className="w-[72px] h-[76px] rounded-2xl bg-card animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/50">{l}</span>
          </div>
        ))}
      </div>
    )
  }

  if (isOver) {
    return (
      <p className="text-2xl font-extrabold text-primary tracking-wide text-center">
        {"C'est parti ! 🎉"}
      </p>
    )
  }

  return (
    <div className="flex items-start gap-3 sm:gap-4 justify-center">
      <Unit value={timeLeft.days} label="jours" onClick={() => handleClick('jours')} />
      <Unit value={timeLeft.hours} label="heures" onClick={() => handleClick('heures')} />
      <Unit value={timeLeft.minutes} label="minutes" onClick={() => handleClick('minutes')} />
      <Unit value={timeLeft.seconds} label="secondes" />
    </div>
  )
}
