import { Service, ServiceId } from "../../model/landing.types"
import { ServiceCard } from "./ServiceCard"

interface ServiceMarqueeProps {
  id: string
  services: Service[]
  fadeFromClassName?: string
  onOpenSpecs: (id: ServiceId) => void
}

export function ServiceMarquee({
  services,
  fadeFromClassName = 'from-surface-container-low',onOpenSpecs
}: ServiceMarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r ${fadeFromClassName} to-transparent sm:w-24 lg:w-48`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l ${fadeFromClassName} to-transparent sm:w-24 lg:w-48`}
      />
      {/* Dos copias idénticas: la animación desplaza -50% para un bucle sin saltos. */}
      <div className="animate-marquee flex w-max items-center gap-4 py-4 hover:[animation-play-state:paused] sm:gap-8">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center gap-4 sm:gap-8"
            aria-hidden={copy === 1}
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

