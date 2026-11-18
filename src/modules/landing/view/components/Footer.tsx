import type { FooterColumn, NavLink } from '../../model/landing.types'
import { Icon } from './Icon'
import { InkStrip } from './InkStrip'
import { Logo } from './Logo'

interface FooterProps {
  id?: string
  description: string
  columns: FooterColumn[]
  contact: {
    address: string
    phone: { href: string; label: string }
    email: { href: string; label: string }
    hours: string
  }
  legalLinks: NavLink[]
  copyright: string
}

function FooterHeading({ children }: { children: string }) {
  return (
    <span className="mb-1 text-[11px] leading-[14px] font-bold tracking-[0.08em] uppercase opacity-80">
      {children}
    </span>
  )
}

/** Footer V2: marca, columnas de enlaces, contacto y barra legal con la tira de tintas. */
export function Footer({ id, description, columns, contact, legalLinks, copyright }: FooterProps) {
  return (
    <footer id={id} className="bg-inverse-surface text-inverse-on-surface mt-auto">
      <div className="mx-auto w-full max-w-7xl px-4 pt-14 pb-8 sm:px-6 sm:pt-16 lg:px-12 ">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Marca */}
          <div className="flex flex-col items-start gap-4 p-3">
            <Logo variant="footer" href="#inicio" />
            <p className="max-w-[260px] text-[13px] leading-5 opacity-80">{description}</p>
          </div>

          {/* Columnas de enlaces */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-2.5 text-sm">
              <FooterHeading>{col.title}</FooterHeading>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-inverse-on-surface hover:text-primary-fixed transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ))}

          {/* Contacto */}
          <div className="flex flex-col gap-2.5 text-sm sm:col-span-2 lg:col-span-1">
            <FooterHeading>Contacto</FooterHeading>
            <a
              href={contact.phone.href}
              className="hover:text-primary-fixed flex items-center gap-2 transition-colors"
            >
              <Icon name="phone_in_talk" className="text-primary-fixed text-lg" />
              {contact.phone.label}
            </a>
            <a
              href={contact.email.href}
              className="hover:text-primary-fixed flex items-center gap-2 break-all transition-colors"
            >
              <Icon name="mail" className="text-primary-fixed text-lg" />
              {contact.email.label}
            </a>
            <p className="flex items-start gap-2">
              <Icon name="location_on" className="text-primary-fixed mt-0.5 text-lg" />
              <span>{contact.address}</span>
            </p>
            <p className="text-primary-fixed pt-1 text-[11px] leading-[14px] font-bold tracking-[0.08em] uppercase">
              {contact.hours}
            </p>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-[13px] leading-5 md:flex-row md:items-center md:justify-between">
          <p className="opacity-80">{copyright}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
            <InkStrip keyClassName="bg-inverse-on-surface" />
          </div>
        </div>
      </div>
    </footer>
  )
}
