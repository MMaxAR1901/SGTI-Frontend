import { useEffect, useRef } from 'react'
import { cn } from '@/lib/cn'
import type { NavLink } from '../../model/landing.types'
import { Button } from './Button'
import { Icon } from './Icon'
import { Logo } from './Logo'

interface MobileMenuProps {
  id: string
  isOpen: boolean
  onClose: () => void
  links: (NavLink & { active: boolean })[]
  phone: { href: string; label: string }
  quoteHref: string
  businessHours: string
}

/**
 * Panel lateral de navegación para móvil/tablet (< lg). Entra de derecha a izquierda.
 * Contacto directo: solo teléfono; el horario va bajo el botón de cotizar.
 */
export function MobileMenu({
  id,
  isOpen,
  onClose,
  links,
  phone,
  quoteHref,
  businessHours,
}: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen) closeRef.current?.focus()
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menú principal"
    >
      {/* Fondo */}
      <div
        className="animate-fade-in bg-inverse-surface/60 absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        id={id}
        className="animate-drawer-in border-line absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col border-l bg-white shadow-[-12px_0_32px_rgba(11,28,48,0.18)]"
      >
        <div className="border-line flex items-center justify-between gap-4 border-b px-5 py-3">
          <Logo href="#inicio" onClick={onClose} hideTagline />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar menú"
            className="text-secondary hover:bg-surface-container hover:text-on-surface flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg transition-colors"
          >
            <Icon name="close" className="text-2xl" />
          </button>
        </div>

        <nav aria-label="Principal móvil" className="custom-scroll flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  aria-current={link.active ? 'location' : undefined}
                  className={cn(
                    'flex items-center justify-between rounded-lg border-l-2 px-4 py-3 text-[15px] transition-colors',
                    link.active
                      ? 'border-primary bg-primary/10 text-primary font-bold'
                      : 'text-on-surface hover:bg-surface-container-low border-transparent font-semibold',
                  )}
                >
                  {link.label}
                  <Icon
                    name="chevron_right"
                    className={cn('text-xl', link.active ? 'text-primary' : 'text-secondary')}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="border-line mt-6 border-t px-1 pt-5">
            <span className="text-secondary mb-3 block px-3 text-[11px] leading-[14px] font-bold tracking-[0.08em] uppercase">
              Contacto directo
            </span>
            <a
              href={phone.href}
              className="text-on-surface hover:bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
            >
              <span className="bg-primary/10 text-primary flex h-9 w-9 items-center justify-center rounded-lg">
                <Icon name="phone_in_talk" className="text-lg" />
              </span>
              {phone.label}
            </a>
          </div>
        </nav>

        <div className="border-line border-t p-5">
          <Button
            href={quoteHref}
            onClick={onClose}
            variant="primary"
            size="md"
            leadingIcon="request_quote"
            className="w-full"
          >
            Cotizar proyecto
          </Button>
          <p className="text-secondary mt-3 text-center text-[11px] leading-[14px] font-bold tracking-[0.08em] uppercase">
            {businessHours}
          </p>
        </div>
      </div>
    </div>
  )
}
