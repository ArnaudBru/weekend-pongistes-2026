import { CalendarDays } from 'lucide-react'
import { SectionHeading } from '@/components/sections/section-heading'

interface ScheduleItem {
  time: string
  label: string
}

interface ScheduleDay {
  day: string
  items: ScheduleItem[]
}

const SCHEDULE: ScheduleDay[] = [
  {
    day: 'Samedi',
    items: [
      { time: '?', label: 'Arrivée & installation' },
      { time: '?', label: 'Tournoi de ping-pong 🏓' },
      { time: '?', label: 'Repas du soir' },
    ],
  },
  {
    day: 'Dimanche',
    items: [
      { time: '?', label: 'Petit-déjeuner' },
      { time: '?', label: 'Temps libre' },
      { time: '?', label: 'Départ' },
    ],
  },
]

export function ScheduleSection() {
  return (
    <section className="flex flex-col items-center gap-5 px-6 py-10">
      <SectionHeading icon={CalendarDays} eyebrow="Programme provisoire" title="Le déroulé" />
      <div className="w-full max-w-sm flex flex-col gap-4">
        {SCHEDULE.map((day) => (
          <div key={day.day} className="rounded-2xl bg-card p-5">
            <h3 className="text-sm font-bold text-foreground mb-3">{day.day}</h3>
            <ul className="flex flex-col gap-2">
              {day.items.map((item) => (
                <li key={item.label} className="flex items-baseline gap-3 text-sm">
                  <span className="text-muted-foreground tabular-nums w-8 shrink-0">{item.time}</span>
                  <span className="text-foreground">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground text-center max-w-sm">
        Horaires et activités à préciser plus près de la date.
      </p>
    </section>
  )
}
