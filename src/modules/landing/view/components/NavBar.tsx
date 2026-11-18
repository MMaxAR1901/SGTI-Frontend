import { useEffect, useRef } from 'react'
import { cn } from '@/lib/cn'
import type { NavBarVM } from '../../vm/useNavBarVM'
import { Icon } from './Icon'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'

const MENU_ID = 'mobile-menu'

type NavBarProps = NavBarVM

/**
 * Header fijo V2: fondo blanco liso con borde hairline, sin sombra ni desenfoque.
 * Mobile-first: en teléfono muestra logo + CTA de ícono + hamburguesa;
 * desde `lg` aparece la navegación completa y se oculta la hamburguesa.
 */
export function NavBar({ links, phone, businessHours, quoteHref, menu }: NavBarProps) {
  const toggleRef = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)

  // Devuelve el foco a la hamburguesa al cerrar el menú.
  useEffect(() => {
    if (wasOpen.current && !menu.isOpen) toggleRef.current?.focus({ preventScroll: true })
    wasOpen.current = menu.isOpen
  }, [menu.isOpen])

  return (
    <>
      <header className="border-line sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex min-h-[72px] w-full max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-12">
          <Logo />

          <nav aria-label="Principal" className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={link.active ? 'location' : undefined}
                className={cn(
                  'relative py-1 text-sm font-semibold transition-colors',
                  link.active
                    ? 'text-primary after:bg-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full'
                    : 'text-secondary hover:text-on-surface',
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={quoteHref}
              title="Contáctanos"
              className="bg-primary-container text-on-surface hover:bg-inverse-primary inline-flex h-10 w-10 items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-colors sm:h-9 sm:w-auto sm:px-4"
            >
              <Icon name="request_quote" className="text-lg" />
              <span className="sr-only sm:not-sr-only">Contáctanos</span>
            </a>
            <button
              ref={toggleRef}
              type="button"
              onClick={menu.toggle}
              aria-expanded={menu.isOpen}
              aria-controls={MENU_ID}
              aria-label={menu.isOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="border-line text-on-surface hover:bg-surface-container inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border transition-colors lg:hidden"
            >
              <Icon name={menu.isOpen ? 'close' : 'menu'} className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Fuera del header para que el panel `fixed` cubra toda la pantalla. */}
      <MobileMenu
        id={MENU_ID}
        isOpen={menu.isOpen}
        onClose={menu.close}
        links={links}
        phone={phone}
        quoteHref={quoteHref}
        businessHours={businessHours}
      />
    </>
  )
}
