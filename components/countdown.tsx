'use client'

import { useEffect, useState } from 'react'

const TARGET_DATE = new Date('2026-09-27T00:00:00')

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
  dim?: boolean
}

function Unit({ value, label, dim }: UnitProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span
        className={`text-5xl sm:text-6xl font-bold tabular-nums leading-none transition-all duration-500 ${
          dim ? 'text-muted-foreground/80' : 'text-foreground'
        }`}
      >
        {pad(value)}
      </span>
      <span
        className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
          dim ? 'text-muted-foreground/60' : 'text-muted-foreground'
        }`}
      >
        {label}
      </span>
    </div>
  )
}

function Separator() {
  return (
    <span className="text-3xl sm:text-4xl font-light text-muted-foreground/50 pb-5 select-none">
      ·
    </span>
  )
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTimeLeft(getTimeLeft())
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const isOver =
    timeLeft !== null &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0

  if (timeLeft === null) {
    return (
      <div className="flex items-end gap-4 sm:gap-6 justify-center">
        {['J', 'H', 'M', 'S'].map((l) => (
          <div key={l} className="flex flex-col items-center gap-2">
            <div className="w-12 h-14 rounded bg-muted/30 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/30">{l}</span>
          </div>
        ))}
      </div>
    )
  }

  if (isOver) {
    return (
      <p className="text-xl font-semibold text-primary tracking-wide text-center">
        C&apos;est maintenant.
      </p>
    )
  }

  return (
    <div className="flex items-end gap-4 sm:gap-6 justify-center">
      <Unit value={timeLeft.days} label="jours" />
      <Separator />
      <Unit value={timeLeft.hours} label="heures" dim />
      <Separator />
      <Unit value={timeLeft.minutes} label="minutes" dim />
      <Separator />
      <Unit value={timeLeft.seconds} label="secondes" dim />
    </div>
  )
}
