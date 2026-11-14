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
          ? 'group focus:ring-primary-container shrink-0 rounded focus:ring-2 focus:outline-none'
          : 'border-outline/30 bg-surface-container-lowest rounded-lg border p-2',
        className,
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center">
        <img src={IMAGES.logo} alt="" className="h-12 w-auto object-contain" />
      </div>
      <div className="flex flex-col text-left">
        <span className="font-headline-sm text-headline-sm text-on-surface leading-none font-bold tracking-tight">
          {CONTACT.company.shortName}
        </span>
        <span
          className={cn(
            'font-label-tech text-secondary mt-1 text-[10px] leading-[14px] font-bold tracking-widest uppercase',
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
