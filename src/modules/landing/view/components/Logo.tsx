import { cn } from '@/lib/cn'
import { CONTACT } from '@/shared/config/contact.config'
import { IMAGES } from '../../data/images.data'

interface LogoProps {
  /** Línea descriptiva bajo "SGTI". */
  tagline?: string
  /** `header`: limpio; `footer`: encapsulado en tarjeta blanca sobre fondo oscuro. */
  variant?: 'header' | 'footer'
  /** Oculta la línea descriptiva (p. ej. dentro del menú móvil). */
  hideTagline?: boolean
  href?: string
  onClick?: () => void
  className?: string
}

/**
 * Marca SGTI: emblema circular + nombre + tagline técnico.
 * `IMAGES.logo` es el logotipo vertical completo (emblema arriba, texto abajo); el recorte
 * cuadrado con `object-top` deja solo el emblema, que es lo que se lee a 48px.
 */
export function Logo({
  tagline = 'Gráficas • Tecnológicas • Industriales',
  variant = 'header',
  hideTagline = false,
  href = '#',
  onClick,
  className,
}: LogoProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={`${CONTACT.company.shortName}, inicio`}
      className={cn(
        'flex shrink-0 items-center gap-3 rounded-lg',
        variant === 'footer' && 'border-line self-start border bg-white py-2 pr-4 pl-2',
        className,
      )}
    >
      <img
        src={IMAGES.logo}
        alt=""
        width={48}
        height={48}
        className="h-11 w-11 object-cover object-top sm:h-12 sm:w-12"
      />
      <span className="flex flex-col text-left">
        <span className="text-on-surface text-lg leading-5 font-bold tracking-tight">
          {CONTACT.company.shortName}
        </span>
        {!hideTagline && (
          <span
            className={cn(
              'text-secondary mt-1 text-[10px] leading-[14px] font-bold tracking-[0.14em] uppercase',
              // En el header móvil se oculta para que el CTA y la hamburguesa quepan.
              variant === 'header' && 'hidden sm:block',
            )}
          >
            {tagline}
          </span>
        )}
      </span>
    </a>
  )
}
