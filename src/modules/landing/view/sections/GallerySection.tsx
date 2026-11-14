import type { GalleryItem } from '../../model/landing.types'
import { Container, Eyebrow, GalleryCard, SectionHeader } from '../components'

interface GallerySectionProps {
  items: GalleryItem[]
  sampleHref: string
}

/** Muestrario de aplicaciones y sustratos industriales. */
export function GallerySection({ items, sampleHref }: GallerySectionProps) {
  return (
    <Container as="section" className="bg-surface w-full py-12 sm:py-16 lg:py-24">
      <SectionHeader
        className="mb-8 gap-4 sm:mb-10"
        eyebrow={<Eyebrow className="mb-1 flex">Muestrario de Materiales</Eyebrow>}
        title="Compatibilidad y Acabados de Planta"
        aside={
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-body-sm text-body-sm text-secondary">
              ¿Requieres prueba física sobre tu material?
            </span>
            <a
              href={sampleHref}
              className="font-label-md text-label-md text-primary font-bold hover:underline"
            >
              Solicitar Muestra
            </a>
          </div>
        }
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {items.map((item) => (
          <GalleryCard
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Container>
  )
}
