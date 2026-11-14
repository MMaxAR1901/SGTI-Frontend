import { Icon } from './Icon'

interface TopBarProps {
  status: string
  phone: { href: string; label: string }
  email: { href: string; label: string }
  whatsapp: { href: string; label: string }
}

/** Barra superior de contacto directo (estado de planta, teléfono, correo, WhatsApp). */
export function TopBar({ status, phone, email, whatsapp }: TopBarProps) {
  return (
    <aside className="w-full border-b border-outline/20 bg-inverse-surface px-6 py-2 font-label-md text-label-md text-inverse-on-surface lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-xs tracking-wide text-secondary-fixed-dim">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2 font-medium text-primary-fixed">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
            {status}
          </span>
          <span className="hidden text-outline/40 md:inline">•</span>
          <a
            href={phone.href}
            className="hidden items-center gap-1.5 transition-colors hover:text-surface md:inline-flex"
          >
            {phone.label}
          </a>
          <span className="hidden text-outline/40 sm:inline">•</span>
          <a
            href={email.href}
            className="hidden items-center gap-1.5 transition-colors hover:text-surface sm:inline-flex"
          >
            {email.label}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-medium text-primary-fixed hover:underline"
          >
            <span>{whatsapp.label}</span>
            <Icon name="arrow_outward" className="text-xs" />
          </a>
        </div>
      </div>
    </aside>
  )
}
