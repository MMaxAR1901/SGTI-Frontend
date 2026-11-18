import type { Client } from '../../model/landing.types'
import { ClientMarquee, Container, Pill } from '../components'

interface TrajectorySectionProps {
  id: string
  clients: Client[]
}

/** Trayectoria + carrusel infinito de clientes. */
export function TrajectorySection({ id, clients }: TrajectorySectionProps) {
  return (
    <section id={id} className="border-line w-full border-b py-14 sm:py-[88px]">
      <Container className="mb-8 text-center sm:mb-10">
        <div className="mx-auto max-w-2xl">
          <Pill dot="sm">Nuestra trayectoria</Pill>
          <h2 className="text-headline-xl-mobile text-on-surface lg:text-headline-xl mt-4 mb-3 font-extrabold">
            Más de 10 años en la industria
          </h2>
          <p className="text-secondary text-base leading-[26px] sm:text-lg sm:leading-7">
            Más de 10 años y nuestra trayectoria habla por nosotros.
          </p>
        </div>
      </Container>
      <ClientMarquee clients={clients} />
    </section>
  )
}
