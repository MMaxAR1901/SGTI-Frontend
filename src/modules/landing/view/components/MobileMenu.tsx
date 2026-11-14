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
  email: { href: string; label: string }
  whatsapp: string
  quoteHref: string
  businessHours: string
}

/** Panel lateral de navegación para móvil/tablet (< lg). */
export function MobileMenu({
  id,
  isOpen,
  onClose,
  links,
  phone,
  email,
  whatsapp,
  quoteHref,
  businessHours,
}: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen) closeRef.current?.focus()
  }, [isOpen])

  if (!isOpen) return null

  const contactRows = [
    { href: phone.href, label: phone.label, icon: 'phone_in_talk' },
    { href: email.href, label: email.label, icon: 'mail' },
    { href: whatsapp, label: 'WhatsApp directo', icon: 'chat', external: true, filled: true },
  ]

  return (
    <div
      className="fixed inset-0 z-[60] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menú principal"
    >
      {/* Fondo */}
      <div
        className="animate-fade-in bg-inverse-surface/60 absolute inset-0 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        id={id}
        className="animate-drawer-in border-outline-variant/40 bg-surface-container-lowest absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col border-l shadow-2xl"
      >
        <div className="border-outline-variant/40 flex items-center justify-between gap-4 border-b px-5 py-3">
          <Logo href="#inicio" />
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

        <nav
          aria-label="Principal móvil"
          className="custom-scroll flex-1 overflow-y-auto px-3 py-4"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  aria-current={link.active ? 'location' : undefined}
                  className={cn(
                    'font-label-lg text-body-md flex items-center justify-between rounded-lg border-l-2 px-4 py-3 transition-colors',
                    link.active
                      ? 'border-primary bg-primary/5 text-primary font-bold'
                      : 'text-on-surface hover:bg-surface-container-low border-transparent font-semibold',
                  )}
                >
                  {link.label}
                  <Icon name="chevron_right" className="text-outline text-xl" />
                </a>
              </li>
            ))}
          </ul>

          <div className="border-outline-variant/40 mt-6 border-t px-1 pt-5">
            <span className="font-label-tech text-label-tech text-secondary mb-3 block px-3 uppercase">
              Contacto directo
            </span>
            <ul className="flex flex-col gap-1">
              {contactRows.map((row) => (
                <li key={row.label}>
                  <a
                    href={row.href}
                    {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-body-sm text-on-surface hover:bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium transition-colors"
                  >
                    <span className="bg-surface-container-low text-primary flex h-9 w-9 items-center justify-center rounded-lg">
                      <Icon name={row.icon} filled={row.filled} className="text-lg" />
                    </span>
                    {row.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="border-outline-variant/40 border-t p-5">
          <Button
            href={quoteHref}
            onClick={onClose}
            size="md"
            leadingIcon="request_quote"
            className="w-full"
          >
            Cotizar Proyecto
          </Button>
          <p className="font-label-tech text-label-tech text-secondary mt-3 text-center">
            {businessHours}
          </p>
        </div>
      </div>
    </div>
  )
}
