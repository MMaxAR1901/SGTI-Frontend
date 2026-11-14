import { cn } from '@/lib/cn'
import { CONTACT } from '@/shared/config/contact.config'
import { IMAGES } from '../../data/images.data'

interface LogoProps {
  /** Línea descriptiva bajo "SGTI". */
  tagline?: string
  /** `header`: limpio; `footer`: encapsulado en tarjeta blanca sobre fondo oscuro. */
  variant?: 'header' | 'footer'
  href?: string
  className?: string
}

/** Marca SGTI: isotipo + nombre + tagline técnico. */
export function Logo({
  tagline = 'Gráficas • Tecnológicas • Industriales',
  variant = 'header',
  href = '#',
  className,
}: LogoProps) {
  return (
    <a
      href={href}
      aria-label={`${CONTACT.company.shortName} — inicio`}
      className={cn(
        'flex items-center gap-3',
        variant === 'header'
          ? 'group shrink-0 rounded focus:outline-none focus:ring-2 focus:ring-primary-container'
          : 'rounded-lg border border-outline/30 bg-surface-container-lowest p-2',
        className,
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center">
        <img src={IMAGES.logo} alt="" className="h-12 w-auto object-contain" />
      </div>
      <div className="flex flex-col text-left">
        <span className="font-headline-sm text-headline-sm font-bold leading-none tracking-tight text-on-surface">
          {CONTACT.company.shortName}
        </span>
        <span
          className={cn(
            'mt-1 font-label-tech text-[10px] font-bold uppercase leading-[14px] tracking-widest text-secondary',
            // En el header móvil se oculta para que el CTA quepa sin scroll horizontal.
            variant === 'header' && 'hidden sm:block',
          )}
        >
          {tagline}
        </span>
      </div>
    </a>
  )
}
