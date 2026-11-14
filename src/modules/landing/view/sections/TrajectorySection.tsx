import type { Client } from '../../model/landing.types'
import { ClientMarquee, Container, Pill, SectionHeader } from '../components'

interface TrajectorySectionProps {
  id: string
  clients: Client[]
}

/** Trayectoria + marquee de clientes. */
export function TrajectorySection({ id, clients }: TrajectorySectionProps) {
  return (
    <section
      id={id}
      className="border-outline-variant/30 bg-surface-container-low relative w-full overflow-hidden border-y py-14 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeader
          align="center"
          className="mb-8 sm:mb-12"
          eyebrow={
            <Pill dot="sm" className="mb-4">
              Nuestra Trayectoria
            </Pill>
          }
          title="Más de 10 Años en la Industria"
          titleClassName="mb-3 font-extrabold tracking-tight"
          description="Más de 10 años y nuestra trayectoria habla por nosotros"
          descriptionClassName="mx-auto mt-0 max-w-2xl font-body-lg text-body-md font-medium sm:text-body-lg"
        />
      </Container>
      <ClientMarquee clients={clients} />
    </section>
  )
}
