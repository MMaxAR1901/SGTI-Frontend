import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useTenant } from '@/app/tenant'
import { InkStrip } from '@/shared/ui'
import { footerColumns } from '../data/layout.data'
import { Logo } from './Logo'

export function StoreFooter() {
  const { tenant } = useTenant()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm text-muted">
            Imprimimos lo que tu marca necesita para verse en la calle, en el mostrador y en la mano de tus clientes.
          </p>
          <InkStrip className="mt-6" />
        </div>
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h2 className="mb-3 font-sans text-sm font-semibold">{col.title}</h2>
            <ul className="flex flex-col gap-2">
              {col.links.map((l) => (
                <li key={l.label}><Link to={l.to} className="text-sm text-muted hover:text-ink">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="mb-3 font-sans text-sm font-semibold">Contacto</h2>
          <ul className="flex flex-col gap-2.5 text-sm text-muted">
            <li className="flex gap-2"><Phone className="mt-0.5 size-4 shrink-0" aria-hidden /><a href={`tel:${tenant.contact.phone.replace(/\s/g, '')}`} className="hover:text-ink">{tenant.contact.phone}</a></li>
            <li className="flex gap-2"><Mail className="mt-0.5 size-4 shrink-0" aria-hidden /><a href={`mailto:${tenant.contact.email}`} className="hover:text-ink">{tenant.contact.email}</a></li>
            <li className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />{tenant.contact.address}</li>
            <li className="pl-6">{tenant.contact.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-4 py-5 text-[13px] text-muted sm:px-6 lg:px-8">
          © {year} {tenant.name}. Precios en pesos mexicanos con IVA incluido.
        </p>
      </div>
    </footer>
  )
}
