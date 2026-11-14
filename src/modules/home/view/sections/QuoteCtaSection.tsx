import { PATHS } from '@/app/router/route-types'
import { ButtonLink, Container, InkStrip } from '@/shared/ui'

export function QuoteCtaSection() {
  return (
    <section className="py-8">
      <Container>
        <div className="flex flex-col items-start gap-6 rounded-lg bg-ink px-8 py-12 text-white sm:px-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <InkStrip />
            <h2 className="mt-5 text-3xl font-semibold text-white">¿Un proyecto grande o fuera de catálogo?</h2>
            <p className="mt-3 text-white/70">
              Rotulación de flotillas, señalética de oficinas, empaques a la medida. Cuéntanos y te cotizamos en 24 horas hábiles.
            </p>
          </div>
          <ButtonLink to={PATHS.quote} variant="accent" size="lg">Cotizar un proyecto</ButtonLink>
        </div>
      </Container>
    </section>
  )
}
