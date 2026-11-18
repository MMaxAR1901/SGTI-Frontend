import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface PillProps {
  children: ReactNode
  /** Punto de estado a la izquierda. */
  dot?: 'sm' | 'md'
  /** Animación de "en línea" sobre el punto. */
  pulse?: boolean
  /** Intensidad del fondo verde. */
  tone?: 'faint' | 'soft'
  className?: string
}

/** Chip eyebrow V2: verde suave, mayúsculas con tracking y punto opcional. */
export function Pill({ children, dot, pulse, tone = 'soft', className }: PillProps) {
  return (
    <span
      className={cn(
        'text-primary inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] leading-[14px] font-bold tracking-[0.08em] uppercase',
        tone === 'faint' ? 'bg-primary/5' : 'bg-primary/10',
        className,
      )}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn(
            'bg-primary shrink-0 rounded-full',
            dot === 'sm' ? 'h-1.5 w-1.5' : 'h-2 w-2',
            pulse && 'animate-ping',
          )}
        />
      )}
      {children}
    </span>
  )
}
