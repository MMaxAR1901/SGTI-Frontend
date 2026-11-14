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
        'border-outline-variant/60 bg-surface-container-lowest flex flex-col items-center justify-center rounded-xl border p-4 text-center shadow-xs sm:p-5',
        className,
      )}
    >
      <Icon name={sector.icon} className="text-primary mb-2 text-3xl" />
      <span className="font-headline-sm text-on-surface text-xs font-bold uppercase sm:text-sm">
        {sector.name}
      </span>
      <span className="font-label-tech text-label-tech text-secondary mt-1">{sector.focus}</span>
    </div>
  )
}
