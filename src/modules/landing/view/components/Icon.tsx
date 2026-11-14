import { cn } from '@/lib/cn'
import type { IconName } from '../../model/landing.types'

interface IconProps {
  name: IconName
  /** Variante rellena (FILL 1) de Material Symbols. */
  filled?: boolean
  className?: string
}

/** Ícono de Material Symbols Outlined. Decorativo: oculto para lectores de pantalla. */
export function Icon({ name, filled, className }: IconProps) {
  return (
    <span
      aria-hidden="true"
      translate="no"
      className={cn('icon-symbol', filled && 'icon-symbol-filled', className)}
    >
      {name}
    </span>
  )
}
