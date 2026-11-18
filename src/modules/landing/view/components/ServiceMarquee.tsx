import type { Service, ServiceId } from '../../model/landing.types'
import { MarqueeFades } from './MarqueeFades'
import { ServiceCard } from './ServiceCard'

interface ServiceMarqueeProps {
  services: Service[]
  /** Clase `from-*` del desvanecido lateral; debe coincidir con el fondo de la sección. */
  fadeFromClassName?: string
  onOpenSpecs: (id: ServiceId) => void
}

/** Carrusel infinito de servicios (55 s por vuelta). Se pausa al pasar el cursor. */
export function ServiceMarquee({
  services,
  fadeFromClassName = 'from-background',
  onOpenSpecs,
}: ServiceMarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <MarqueeFades fromClassName={fadeFromClassName} />
      {/*
        Dos copias idénticas: la animación desplaza -50% para un bucle sin saltos.
        Cada copia lleva su propio espacio final (pr) en lugar de un `gap` entre copias,
        así el -50% cae justo al inicio de la segunda copia.
      */}
      <div className="animate-marquee-services flex w-max items-stretch py-4 hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-stretch gap-4 pr-4 sm:gap-8 sm:pr-8"
            aria-hidden={copy === 1 || undefined}
            inert={copy === 1}
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} onOpenSpecs={onOpenSpecs} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
