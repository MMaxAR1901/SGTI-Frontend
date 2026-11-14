import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export type BadgeTone = 'neutral' | 'cyan' | 'magenta' | 'yellow' | 'success' | 'warning' | 'danger'

const tones: Record<BadgeTone, string> = {
  neutral: 'bg-ink/6 text-ink-soft',
  cyan: 'bg-cyan/12 text-cyan-ink',
  magenta: 'bg-magenta/10 text-magenta-ink',
  yellow: 'bg-yellow/30 text-ink',
  success: 'bg-success/12 text-success',
  warning: 'bg-warning/12 text-warning',
  danger: 'bg-danger/10 text-danger',
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone
  dot?: boolean
}

export function Badge({ tone = 'neutral', dot, className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn('inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 text-xs font-medium', tones[tone], className)}
      {...rest}
    >
      {dot && <span className="size-1.5 rounded-full bg-current" aria-hidden />}
      {children}
    </span>
  )
}
