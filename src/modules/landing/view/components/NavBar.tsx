import { useEffect, useRef } from 'react'
import { cn } from '@/lib/cn'
import type { NavBarVM } from '../../vm/useNavBarVM'
import { Button } from './Button'
import { Icon } from './Icon'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'

const MENU_ID = 'mobile-menu'

type NavBarProps = NavBarVM

/**
 * Header fijo. Mobile-first: en teléfono muestra logo + CTA compacto + hamburguesa;
 * desde `lg` aparece la navegación completa y se oculta la hamburguesa.
 */
export function NavBar({
  links,
  phone,
  email,
  whatsapp,
  businessHours,
  quoteHref,
  menu,
}: NavBarProps) {
  const toggleRef = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)

  // Devuelve el foco a la hamburguesa al cerrar el menú.
  useEffect(() => {
    if (wasOpen.current && !menu.isOpen) toggleRef.current?.focus({ preventScroll: true })
    wasOpen.current = menu.isOpen
  }, [menu.isOpen])

  return (
    <>
      <header className="border-outline-variant/40 bg-surface-container-lowest/90 sticky top-0 z-50 border-b shadow-sm backdrop-blur-md transition-all duration-200">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-6 sm:py-3 lg:px-12">
          <Logo />

          <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex xl:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={link.active ? 'location' : undefined}
                className={cn(
                  'font-label-lg text-label-lg border-b-2 pb-1 transition-colors',
                  link.active
                    ? 'border-primary text-primary font-bold'
                    : 'text-secondary hover:text-on-surface border-transparent',
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-3">
         
            <Button
              href={quoteHref}
              leadingIcon="request_quote"
              title="Contactanos"
              className="gap-0 px-3 shadow-xs sm:gap-2 sm:px-5"
            >
              <span className="sr-only sm:not-sr-only">Contactanos</span>
            </Button>
            <button
              ref={toggleRef}
              type="button"
              onClick={menu.toggle}
              aria-expanded={menu.isOpen}
              aria-controls={MENU_ID}
              aria-label={menu.isOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="border-outline-variant/40 text-on-surface hover:bg-surface-container inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border transition-colors lg:hidden"
            >
              <Icon name={menu.isOpen ? 'close' : 'menu'} className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Fuera del header: su backdrop-filter rompería el `position: fixed` del panel. */}
      <MobileMenu
        id={MENU_ID}
        isOpen={menu.isOpen}
        onClose={menu.close}
        links={links}
        phone={phone}
        email={email}
        whatsapp={whatsapp}
        quoteHref={quoteHref}
        businessHours={businessHours}
      />
    </>
  )
}
