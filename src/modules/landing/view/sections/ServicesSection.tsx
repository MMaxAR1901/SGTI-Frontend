import type { Service, ServiceId } from '../../model/landing.types'
import { Container, Eyebrow, ServiceMarquee } from '../components'

interface ServicesSectionProps {
  id: string
  services: Service[]
  onOpenSpecs: (id: ServiceId) => void
}

/** Catálogo técnico: encabezado con línea inferior + carrusel infinito a todo el ancho. */
export function ServicesSection({ id, services, onOpenSpecs }: ServicesSectionProps) {
  return (
    <section id={id} className="w-full pb-14 sm:pb-24">
      <Container>
        <div className="border-line mb-6 border-b pb-6">
          <div className="max-w-2xl">
            <Eyebrow>Catálogo técnico de especialidades</Eyebrow>
            <h2 className="text-headline-xl-mobile text-on-surface lg:text-headline-xl mt-1 mb-2 font-bold">
              Nuestras soluciones de manufactura y gráfica
            </h2>
            <p className="text-secondary text-base leading-[26px] sm:text-lg sm:leading-7">
              Módulos integrales para corporativos, plantas de manufactura, agencias publicitarias y
              proyectos especiales bajo norma.
            </p>
          </div>
        </div>
      </Container>
      <ServiceMarquee services={services} onOpenSpecs={onOpenSpecs} />
    </section>
  )
}
