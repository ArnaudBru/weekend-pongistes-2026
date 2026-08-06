import type { LucideIcon } from 'lucide-react'

interface SectionHeadingProps {
  icon: LucideIcon
  eyebrow: string
  title: string
}

export function SectionHeading({ icon: Icon, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex items-center justify-center size-11 rounded-2xl bg-primary/10 text-primary">
        <Icon className="size-5" />
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {eyebrow}
      </span>
      <h2 className="text-2xl font-extrabold text-foreground tracking-tight">{title}</h2>
    </div>
  )
}
