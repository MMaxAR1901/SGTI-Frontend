import type { QuoteHighlight } from '../../model/landing.types'
import { Button, Icon, Pill } from '../components'

interface QuoteSectionProps {
  id: string
  highlights: QuoteHighlight[]
  whatsappHref: string
  phone: { href: string; label: string }
}

/** Cotizador directo: conecta por WhatsApp o teléfono en vez de un formulario. */
export function QuoteSection({ id, highlights, whatsappHref, phone }: QuoteSectionProps) {
  return (
    <section id={id} className="border-t border-outline-variant/30 bg-surface-container-low py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="relative overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-8 text-center shadow-xs lg:p-12">
          <Pill dot="md" pulse className="mb-4">
            Atención Técnica Inmediata • Tiempo de respuesta &lt; 15 min
          </Pill>
          <h3 className="mb-4 font-headline-xl text-headline-xl-mobile font-bold text-on-surface lg:text-headline-xl">
            Cotizador Directo de Proyectos
          </h3>
          <p className="mx-auto mb-8 max-w-2xl font-body-lg text-body-lg leading-relaxed text-secondary">
            Evita formularios lentos. Conéctate al instante con un ingeniero o asesor técnico de planta
            para cotizar tus piezas, sustratos y tiempos de entrega con atención personalizada.
          </p>
          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={whatsappHref}
              external
              size="lg"
              leadingIcon="chat"
              leadingIconFilled
              leadingIconClassName="text-2xl transition-transform group-hover:scale-110"
              trailingIcon="arrow_forward"
              className="group w-full shadow-sm sm:w-auto"
            >
              Cotizar vía WhatsApp
            </Button>
            <Button
              href={phone.href}
              variant="soft"
              size="lg"
              leadingIcon="phone_in_talk"
              leadingIconClassName="text-xl text-primary"
              className="w-full gap-2 px-6 sm:w-auto"
            >
              {phone.label}
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4 border-t border-outline-variant/30 pt-8 text-left md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="flex items-start gap-3 rounded-lg bg-surface-container-low/50 p-3">
                <Icon name={h.icon} className="mt-0.5 text-xl text-primary" />
                <div>
                  <div className="text-label-lg font-bold text-on-surface">{h.title}</div>
                  <div className="text-body-sm text-secondary">{h.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
