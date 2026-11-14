import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface PillProps {
  children: ReactNode
  /** Punto de estado a la izquierda. */
  dot?: 'sm' | 'md'
  /** Animación de "en línea" sobre el punto. */
  pulse?: boolean
  /** Intensidad del fondo menta. */
  tone?: 'faint' | 'soft'
  className?: string
}

/** Etiqueta técnica redondeada (status / categoría). */
export function Pill({ children, dot, pulse, tone = 'soft', className }: PillProps) {
  return (
    <span
      className={cn(
        'border-primary/20 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase',
        tone === 'faint' ? 'bg-primary/5' : 'bg-primary/10',
        className,
      )}
    >
      {dot && (
        <span
          className={cn(
            'bg-primary rounded-full',
            dot === 'sm' ? 'h-1.5 w-1.5' : 'h-2 w-2',
            pulse && 'animate-ping',
          )}
        />
      )}
      {children}
    </span>
  )
}
