import { cn } from '@/lib/cn'
import type { FooterColumn, NavLink } from '../../model/landing.types'
import { Icon } from './Icon'
import { Logo } from './Logo'

interface SocialLink {
  href: string
  label: string
  icon: string
  filled?: boolean
  external?: boolean
}

interface FooterProps {
  id?: string
  description: string
  socials: SocialLink[]
  columns: FooterColumn[]
  contact: { address: string; phone: string; email: string; hours: string }
  legalLinks: NavLink[]
  copyright: string
}

function FooterHeading({ children }: { children: string }) {
  return (
    <span className="font-headline-sm text-surface-container-lowest mb-2 text-base font-bold tracking-wider uppercase">
      {children}
    </span>
  )
}

/** Footer industrial: marca, columnas de enlaces, datos de taller y barra legal. */
export function Footer({
  id,
  description,
  socials,
  columns,
  contact,
  legalLinks,
  copyright,
}: FooterProps) {
  return (
    <footer
      id={id}
      className="border-outline/20 bg-inverse-surface text-inverse-on-surface mt-auto border-t"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:px-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-5">
          {/* Marca */}
          <div className="col-span-2 flex flex-col items-start gap-4">
            <Logo variant="footer" tagline="Gráficas • Industriales" />
            <p className="font-body-sm text-body-sm text-secondary-fixed-dim max-w-sm">
              {description}
            </p>
            <div className="text-secondary-fixed-dim flex items-center gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  aria-label={s.label}
                  {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="border-outline/40 bg-inverse-surface text-primary-fixed hover:bg-primary-container hover:text-on-surface flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
                >
                  <Icon name={s.icon} filled={s.filled} className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Columnas de enlaces */}
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-2">
              <FooterHeading>{col.title}</FooterHeading>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'font-body-sm text-body-sm hover:text-inverse-on-surface transition-colors',
                    link.highlight ? 'text-primary-fixed font-bold' : 'text-secondary-fixed-dim',
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}

          {/* Taller & ventas */}
          <div className="col-span-2 flex flex-col gap-3 lg:col-span-1">
            <FooterHeading>Taller & Ventas</FooterHeading>
            <div className="font-body-sm text-body-sm text-secondary-fixed-dim flex items-start gap-2">
              <Icon name="location_on" className="text-primary-fixed mt-0.5 text-lg" />
              <span>{contact.address}</span>
            </div>
            <div className="font-body-sm text-body-sm text-secondary-fixed-dim flex items-center gap-2">
              <Icon name="phone_in_talk" className="text-primary-fixed text-lg" />
              <span>{contact.phone}</span>
            </div>
            <div className="font-body-sm text-body-sm text-secondary-fixed-dim flex items-center gap-2">
              <Icon name="mail" className="text-primary-fixed text-lg" />
              <span>{contact.email}</span>
            </div>
            <div className="font-label-tech text-label-tech text-primary-fixed pt-1">
              {contact.hours}
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-outline/30 font-label-tech text-label-tech text-secondary-fixed-dim flex flex-col items-center justify-between gap-4 border-t pt-6 text-center md:flex-row md:text-left">
          <p>{copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-primary-fixed transition-colors"
              >
                {link.label}
              </a>
            ))}
            <span className="text-primary-fixed font-bold">Hecho en México</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
