import type { Service, ServiceId } from '../../model/landing.types'
import { Container, Eyebrow, SectionHeader, ServiceCard } from '../components'

interface ServicesSectionProps {
  id: string
  services: Service[]
  onOpenSpecs: (id: ServiceId) => void
}

export function ServicesSection({ id, services, onOpenSpecs }: ServicesSectionProps) {
  return (
    <Container as="section" id={id} className="bg-surface w-full py-12 sm:py-16 lg:py-24">
      <SectionHeader
        className="border-outline-variant/40 mb-8 gap-4 border-b pb-6 sm:mb-12 sm:gap-6"
        eyebrow={<Eyebrow icon="apps">Catálogo Técnico de Especialidades</Eyebrow>}
        title="Nuestras Soluciones de Manufactura y Gráfica"
        titleClassName="tracking-tight"
        description="Módulos integrales para corporativos, plantas de manufactura, agencias publicitarias y proyectos especiales bajo norma."
      />
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} onOpenSpecs={onOpenSpecs} />
        ))}
      </div>
    </Container>
  )
}
