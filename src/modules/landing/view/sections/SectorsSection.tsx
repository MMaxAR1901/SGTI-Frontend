import { cn } from '@/lib/cn'
import type { Sector } from '../../model/landing.types'
import { Container, Eyebrow, SectionHeader, SectorBadge } from '../components'

interface SectorsSectionProps {
  sectors: Sector[]
}

/** Sectores estratégicos que atendemos. */
export function SectorsSection({ sectors }: SectorsSectionProps) {
  return (
    <section className="border-outline-variant/30 bg-surface border-t py-12 sm:py-16 lg:py-20">
      <Container className="text-center">
        <SectionHeader
          align="center"
          as="h3"
          className="mb-8 sm:mb-10"
          eyebrow={
            <Eyebrow tone="muted" className="flex justify-center">
              Sectores Estratégicos
            </Eyebrow>
          }
          title="Proveedores de Confianza para Múltiples Industrias"
          titleClassName="font-headline-lg text-headline-md sm:text-headline-lg"
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {sectors.map((sector, i) => (
            <SectorBadge
              key={sector.name}
              sector={sector}
              // Con 5 elementos en 2 columnas, el último ocupa la fila completa en móvil.
              className={cn(
                i === sectors.length - 1 && sectors.length % 2 === 1 && 'col-span-2 md:col-span-1',
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
