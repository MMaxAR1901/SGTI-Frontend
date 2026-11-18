import { Button, Container } from '../components'

interface CtaBannerProps {
  /** Ancla de la sección (hoy es el destino de "Cotizar proyecto"). */
  id?: string
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  /** Abre el CTA en otra pestaña (p. ej. WhatsApp). */
  external?: boolean
}

/** Banda oscura de conversión con el CTA menta. */
export function CtaBanner({ id, title, description, ctaLabel, ctaHref, external }: CtaBannerProps) {
  return (
    <Container as="section" id={id} className="w-full pb-14 sm:pb-24">
      <div className="border-line bg-inverse-surface text-inverse-on-surface flex flex-col items-start justify-between gap-6 rounded-xl border p-6 sm:p-10 md:flex-row md:items-center lg:p-12">
        <div className="max-w-2xl">
          <h2 className="mb-3 text-[22px] leading-[30px] font-semibold tracking-tight sm:text-[28px] sm:leading-9">
            {title}
          </h2>
          <p className="text-[15px] leading-6 opacity-80">{description}</p>
        </div>
        <Button
          href={ctaHref}
          external={external}
          variant="accent"
          size="lg"
          leadingIcon="request_quote"
          className="w-full shrink-0 md:w-auto"
        >
          {ctaLabel}
        </Button>
      </div>
    </Container>
  )
}
