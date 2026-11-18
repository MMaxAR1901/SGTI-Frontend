import { Icon } from './Icon'

interface FloatingWhatsAppProps {
  href: string
  label?: string
}

/**
 * Acceso flotante a un asesor técnico por WhatsApp.
 * Mobile-first: en teléfono es solo el botón circular; desde `sm` se expande a píldora con texto.
 */
export function FloatingWhatsApp({ href, label = 'Asesor técnico' }: FloatingWhatsAppProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} por WhatsApp`}
      className="group bg-inverse-surface text-inverse-on-surface hover:border-primary-container fixed right-4 bottom-4 z-40 flex items-center gap-2.5 rounded-full border border-white/15 p-1.5 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] transition-colors sm:right-6 sm:bottom-6 sm:pl-3.5"
    >
      <span aria-hidden="true" className="bg-primary-container hidden h-2.5 w-2.5 rounded-full sm:block" />
      <span className="hidden text-[13px] leading-5 font-semibold sm:inline">{label}</span>
      <span className="bg-primary-container text-on-surface flex h-12 w-12 items-center justify-center rounded-full sm:h-8 sm:w-8">
        <Icon name="chat" filled className="text-2xl sm:text-lg" />
      </span>
    </a>
  )
}
