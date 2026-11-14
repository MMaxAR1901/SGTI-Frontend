import { Icon } from './Icon'

interface FloatingWhatsAppProps {
  href: string
  label?: string
}

/**
 * Acceso flotante a un asesor técnico por WhatsApp.
 * Mobile-first: en teléfono es un botón circular; desde `sm` se expande a píldora con texto.
 */
export function FloatingWhatsApp({
  href,
  label = 'Asesor Técnico en Línea',
}: FloatingWhatsAppProps) {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex items-end gap-3 sm:right-6 sm:bottom-6">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="group border-outline/40 bg-inverse-surface text-inverse-on-surface hover:border-primary-container flex items-center gap-2.5 rounded-full border p-1.5 shadow-lg transition-all sm:py-2.5 sm:pr-4 sm:pl-3.5"
      >
        <span className="bg-primary-container hidden h-2.5 w-2.5 animate-ping rounded-full sm:block" />
        <span className="font-body-sm text-body-sm group-hover:text-primary-fixed hidden font-semibold transition-colors sm:inline">
          {label}
        </span>
        <span className="bg-primary-container text-on-surface flex h-12 w-12 items-center justify-center rounded-full sm:ml-1 sm:h-8 sm:w-8">
          <Icon name="chat" filled className="text-2xl sm:text-lg" />
        </span>
      </a>
    </div>
  )
}
