import type { GalleryItem } from '../../model/landing.types'
import { Container, Eyebrow, GalleryCard, SectionHeader } from '../components'

interface GallerySectionProps {
  items: GalleryItem[]
  sampleHref: string
}

/** Muestrario de aplicaciones y sustratos industriales. */
export function GallerySection({ items, sampleHref }: GallerySectionProps) {
  return (
    <Container as="section" className="w-full bg-surface py-16 lg:py-24">
      <SectionHeader
        className="mb-10 gap-4"
        eyebrow={<Eyebrow className="mb-1 flex">Muestrario de Materiales</Eyebrow>}
        title="Compatibilidad y Acabados de Planta"
        aside={
          <div className="flex items-center gap-2">
            <span className="font-body-sm text-body-sm text-secondary">
              ¿Requieres prueba física sobre tu material?
            </span>
            <a
              href={sampleHref}
              className="font-label-md text-label-md font-bold text-primary hover:underline"
            >
              Solicitar Muestra
            </a>
          </div>
        }
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <GalleryCard key={item.title} image={item.image} title={item.title} description={item.description} />
        ))}
      </div>
    </Container>
  )
}
