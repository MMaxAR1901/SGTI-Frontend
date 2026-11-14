import type { Substrate } from '../../model/landing.types'
import { Container, Eyebrow, SectionHeader, SubstrateCard } from '../components'

interface TechnologySectionProps {
  id: string
  substrates: Substrate[]
}

/** Innovación DTF UV: "imprime en cualquier superficie". */
export function TechnologySection({ id, substrates }: TechnologySectionProps) {
  return (
    <section
      id={id}
      className="border-outline-variant/30 bg-surface-container-low border-y py-12 sm:py-16 lg:py-24"
    >
      <Container className="sm:py-8 lg:py-12">
        <SectionHeader
          align="center"
          className="mx-auto mb-10 max-w-2xl sm:mb-16"
          eyebrow={
            <Eyebrow className="font-body-md block text-xs">Tecnología de Vanguardia</Eyebrow>
          }
          title="Impresión DTF UV sin Límites"
          titleClassName="font-body-md text-headline-xl-mobile sm:text-headline-xl lg:text-headline-xl"
          description="Adherencia inmediata con curado instantáneo sobre cualquier superficie sin necesidad de tratamientos químicos previos."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {substrates.map((s) => (
            <SubstrateCard
              key={s.title}
              icon={s.icon}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
