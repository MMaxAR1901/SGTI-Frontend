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
    <section
      id={id}
      className="border-outline-variant/30 bg-surface-container-low border-t py-12 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 sm:py-12">
        <div className="border-outline-variant/40 bg-surface-container-lowest relative overflow-hidden rounded-2xl border p-6 text-center shadow-xs sm:p-8 lg:p-12">
          <Pill dot="md" pulse className="mb-4 text-[11px] leading-snug sm:text-xs">
            Atención Técnica Inmediata • Tiempo de respuesta &lt; 15 min
          </Pill>
          <h3 className="font-headline-xl text-headline-xl-mobile text-on-surface lg:text-headline-xl mb-4 font-bold">
            Cotizador Directo de Proyectos
          </h3>
          <p className="font-body-lg text-body-md sm:text-body-lg text-secondary mx-auto mb-6 max-w-2xl leading-relaxed sm:mb-8">
            Evita formularios lentos. Conéctate al instante con un ingeniero o asesor técnico de
            planta para cotizar tus piezas, sustratos y tiempos de entrega con atención
            personalizada.
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:mb-10 sm:flex-row sm:gap-4">
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
          <div className="border-outline-variant/30 grid grid-cols-1 gap-3 border-t pt-6 text-left sm:gap-4 sm:pt-8 md:grid-cols-3">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="bg-surface-container-low/50 flex items-start gap-3 rounded-lg p-3"
              >
                <Icon name={h.icon} className="text-primary mt-0.5 text-xl" />
                <div>
                  <div className="text-label-lg text-on-surface font-bold">{h.title}</div>
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
