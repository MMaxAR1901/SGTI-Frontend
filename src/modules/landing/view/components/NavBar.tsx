import { cn } from '@/lib/cn'
import type { NavLink } from '../../model/landing.types'
import { Button } from './Button'
import { Icon } from './Icon'
import { Logo } from './Logo'

interface NavBarProps {
  links: (NavLink & { active: boolean })[]
  phone: { href: string }
  email: { href: string }
  quoteHref: string
}

/** Header fijo con logo, navegación por anclas y acciones rápidas. */
export function NavBar({ links, phone, email, quoteHref }: NavBarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/40 bg-surface-container-lowest/90 shadow-sm backdrop-blur-md transition-all duration-200">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-12">
        <Logo />

        <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.active ? 'location' : undefined}
              className={cn(
                'pb-1 font-label-lg text-label-lg transition-colors',
                link.active
                  ? 'border-b-2 border-primary font-bold text-primary'
                  : 'border-b-2 border-transparent text-secondary hover:text-on-surface',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={phone.href}
            title="Llamada Directa"
            aria-label="Llamada Directa"
            className="hidden rounded-lg p-2 text-secondary transition-colors hover:bg-surface-container hover:text-primary sm:inline-flex"
          >
            <Icon name="phone_in_talk" />
          </a>
          <a
            href={email.href}
            title="Enviar Especificaciones"
            aria-label="Enviar Especificaciones"
            className="hidden rounded-lg p-2 text-secondary transition-colors hover:bg-surface-container hover:text-primary sm:inline-flex"
          >
            <Icon name="mail" />
          </a>
          <Button href={quoteHref} leadingIcon="request_quote" className="shadow-xs">
            Cotizar Proyecto
          </Button>
        </div>
      </div>
    </header>
  )
}
