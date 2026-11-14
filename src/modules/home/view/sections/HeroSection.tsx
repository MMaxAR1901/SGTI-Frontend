import { PATHS } from '@/app/router/route-types'
import { ProductArt } from '@/modules/catalog'
import { ButtonLink, Container, CropMarks, InkStrip } from '@/shared/ui'

/** Hero: un pliego impreso con imposición de piezas, el objeto más característico de una imprenta. */
export function HeroSection() {
  const pieces = [
    { variant: 'cards', tint: '#00a0dc' },
    { variant: 'stickers', tint: '#e5007d' },
    { variant: 'banner', tint: '#15181f' },
    { variant: 'flyers', tint: '#ffb800' },
  ] as const

  return (
    <section className="overflow-hidden border-b border-line bg-surface">
      <Container className="grid items-center gap-12 py-14 lg:grid-cols-[1fr_1.05fr] lg:py-20">
        <div className="max-w-xl">
          <h1 className="text-[2.6rem] leading-[1.02] font-semibold sm:text-6xl">
            Imprime tu marca. Revisamos cada archivo antes de que toque el papel.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted">
            Tarjetas, lonas, vinil, stickers y señalética con precio al instante y prueba digital sin costo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to={PATHS.catalog} variant="accent" size="lg">Ver catálogo</ButtonLink>
            <ButtonLink to={PATHS.quote} variant="outline" size="lg">Cotizar un proyecto</ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mr-0">
          <div className="relative m-6 animate-sheet-in bg-paper p-4 shadow-sheet sm:p-6">
            <CropMarks inset={-18} size={18} />
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {pieces.map((p) => (
                <div key={p.variant} className="aspect-[4/3] bg-surface">
                  <ProductArt variant={p.variant} tint={p.tint} />
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-[11px] text-muted">
              <InkStrip />
              <span className="tabular-nums">Pliego 1 de 1 · 4/4 tintas</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
