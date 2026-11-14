import { Icon } from './Icon'

interface TopBarProps {
  status: string
  phone: { href: string; label: string }
  email: { href: string; label: string }
  whatsapp: { href: string; label: string; shortLabel: string }
}

/** Barra superior de contacto directo (estado de planta, teléfono, correo, WhatsApp). */
export function TopBar({ status, phone, email, whatsapp }: TopBarProps) {
  return (
    <aside className="border-outline/20 bg-inverse-surface font-label-md text-label-md text-inverse-on-surface w-full border-b px-4 py-2 sm:px-6 lg:px-12">
      <div className="text-secondary-fixed-dim mx-auto flex max-w-7xl items-center justify-between gap-3 text-[11px] tracking-wide sm:text-xs">
        <div className="flex min-w-0 items-center gap-6">
          <span className="text-primary-fixed inline-flex items-center gap-2 font-medium whitespace-nowrap">
            <span className="bg-primary-container h-1.5 w-1.5 rounded-full" />
            {status}
          </span>
          <span className="text-outline/40 hidden lg:inline">•</span>
          <a
            href={phone.href}
            className="hover:text-surface hidden items-center gap-1.5 whitespace-nowrap transition-colors lg:inline-flex"
          >
            {phone.label}
          </a>
          <span className="text-outline/40 hidden md:inline">•</span>
          <a
            href={email.href}
            className="hover:text-surface hidden items-center gap-1.5 whitespace-nowrap transition-colors md:inline-flex"
          >
            {email.label}
          </a>
        </div>
        <div className="flex shrink-0 items-center gap-4">
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-fixed flex items-center gap-1 font-medium hover:underline"
          >
            <span className="sm:hidden">{whatsapp.shortLabel}</span>
            <span className="hidden sm:inline">{whatsapp.label}</span>
            <Icon name="arrow_outward" className="text-xs" />
          </a>
        </div>
      </div>
    </aside>
  )
}
