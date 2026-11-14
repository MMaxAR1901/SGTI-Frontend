import type { Substrate } from '../../model/landing.types'
import { Container, Eyebrow, SectionHeader, SubstrateCard } from '../components'

interface TechnologySectionProps {
  id: string
  substrates: Substrate[]
}

/** Innovación DTF UV: "imprime en cualquier superficie". */
export function TechnologySection({ id, substrates }: TechnologySectionProps) {
  return (
    <section id={id} className="border-y border-outline-variant/30 bg-surface-container-low py-16 lg:py-24">
      <Container className="py-8 lg:py-12">
        <SectionHeader
          align="center"
          className="mx-auto mb-16 max-w-2xl"
          eyebrow={
            <Eyebrow className="block font-body-md text-xs">Tecnología de Vanguardia</Eyebrow>
          }
          title="Impresión DTF UV sin Límites"
          titleClassName="font-body-md text-headline-xl lg:text-headline-xl"
          description="Adherencia inmediata con curado instantáneo sobre cualquier superficie sin necesidad de tratamientos químicos previos."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {substrates.map((s) => (
            <SubstrateCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
          ))}
        </div>
      </Container>
    </section>
  )
}
