import { Icon } from './Icon'

interface FloatingWhatsAppProps {
  href: string
  label?: string
}

/** Acceso flotante a un asesor técnico por WhatsApp (oculto en móvil muy pequeño). */
export function FloatingWhatsApp({ href, label = 'Asesor Técnico en Línea' }: FloatingWhatsAppProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group hidden items-center gap-2.5 rounded-full border border-outline/40 bg-inverse-surface py-2.5 pl-3.5 pr-4 text-inverse-on-surface shadow-lg transition-all hover:border-primary-container sm:flex"
      >
        <span className="h-2.5 w-2.5 animate-ping rounded-full bg-primary-container" />
        <span className="font-body-sm text-body-sm font-semibold transition-colors group-hover:text-primary-fixed">
          {label}
        </span>
        <span className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-container text-on-surface">
          <Icon name="chat" filled className="text-lg" />
        </span>
      </a>
    </div>
  )
}
