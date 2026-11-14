import { cn } from '@/lib/cn'
import type { Sector } from '../../model/landing.types'
import { Icon } from './Icon'

interface SectorBadgeProps {
  sector: Sector
  className?: string
}

/** Insignia de sector industrial atendido. */
export function SectorBadge({ sector, className }: SectorBadgeProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-xl border border-outline-variant/60 bg-surface-container-lowest p-5 text-center shadow-xs',
        className,
      )}
    >
      <Icon name={sector.icon} className="mb-2 text-3xl text-primary" />
      <span className="font-headline-sm text-sm font-bold uppercase text-on-surface">
        {sector.name}
      </span>
      <span className="mt-1 font-label-tech text-label-tech text-secondary">{sector.focus}</span>
    </div>
  )
}
