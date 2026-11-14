import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { useTenant } from '@/app/tenant'

/** Monograma: tres tintas superpuestas (multiply) + nombre del tenant. */
export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  const { tenant } = useTenant()
  return (
    <Link to="/" className={cn('group inline-flex items-center gap-2.5', className)} aria-label={`${tenant.name}, inicio`}>
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden>
        <g style={{ mixBlendMode: inverted ? 'screen' : 'multiply' }}>
          <circle cx="12" cy="12.5" r="7" fill="var(--color-cyan)" />
          <circle cx="20" cy="12.5" r="7" fill="var(--color-magenta)" />
          <circle cx="16" cy="19.5" r="7" fill="var(--color-yellow)" />
        </g>
      </svg>
      <span className="flex flex-col leading-none">
        <span className={cn('font-display text-xl font-bold tracking-tight', inverted ? 'text-white' : 'text-ink')}>
          {tenant.name}
        </span>
        <span className={cn('text-[11px]', inverted ? 'text-white/60' : 'text-muted')}>{tenant.tagline}</span>
      </span>
    </Link>
  )
}
