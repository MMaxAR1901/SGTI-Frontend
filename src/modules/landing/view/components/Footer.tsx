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
    <span className="mb-2 font-headline-sm text-base font-bold uppercase tracking-wider text-surface-container-lowest">
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
    <footer id={id} className="mt-auto border-t border-outline/20 bg-inverse-surface text-inverse-on-surface">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-12 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Marca */}
          <div className="flex flex-col items-start gap-4 lg:col-span-2">
            <Logo variant="footer" tagline="Gráficas • Industriales" />
            <p className="max-w-sm font-body-sm text-body-sm text-secondary-fixed-dim">{description}</p>
            <div className="flex items-center gap-3 pt-2 text-secondary-fixed-dim">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  aria-label={s.label}
                  {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-outline/40 bg-inverse-surface text-primary-fixed transition-colors hover:bg-primary-container hover:text-on-surface"
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
                    'font-body-sm text-body-sm transition-colors hover:text-inverse-on-surface',
                    link.highlight ? 'font-bold text-primary-fixed' : 'text-secondary-fixed-dim',
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}

          {/* Taller & ventas */}
          <div className="flex flex-col gap-3">
            <FooterHeading>Taller & Ventas</FooterHeading>
            <div className="flex items-start gap-2 font-body-sm text-body-sm text-secondary-fixed-dim">
              <Icon name="location_on" className="mt-0.5 text-lg text-primary-fixed" />
              <span>{contact.address}</span>
            </div>
            <div className="flex items-center gap-2 font-body-sm text-body-sm text-secondary-fixed-dim">
              <Icon name="phone_in_talk" className="text-lg text-primary-fixed" />
              <span>{contact.phone}</span>
            </div>
            <div className="flex items-center gap-2 font-body-sm text-body-sm text-secondary-fixed-dim">
              <Icon name="mail" className="text-lg text-primary-fixed" />
              <span>{contact.email}</span>
            </div>
            <div className="pt-1 font-label-tech text-label-tech text-primary-fixed">{contact.hours}</div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-outline/30 pt-6 font-label-tech text-label-tech text-secondary-fixed-dim md:flex-row">
          <p>{copyright}</p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-primary-fixed">
                {link.label}
              </a>
            ))}
            <span className="font-bold text-primary-fixed">Hecho en México</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
