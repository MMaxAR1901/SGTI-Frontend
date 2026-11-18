import type { Substrate } from '../../model/landing.types'
import { Button, Container, Eyebrow, Icon, SubstrateCard } from '../components'

interface TechnologySectionProps {
  id: string
  substrates: Substrate[]
  /** Destino del botón de ficha técnica (hoy, el cotizador). */
  datasheetHref: string
}

const BENEFITS = [
  'Curado UV instantáneo, sin tiempos de secado',
  'Relieve táctil y barniz selectivo',
  'Resistente a rayones, agua y uso diario',
]

/** Innovación DTF UV: texto + beneficios a la izquierda, sustratos compatibles a la derecha. */
export function TechnologySection({ id, substrates, datasheetHref }: TechnologySectionProps) {
  return (
    <section id={id} className="border-line w-full border-y bg-white">
      <Container className="grid grid-cols-1 items-center gap-10 py-14 sm:py-24 lg:grid-cols-2 lg:gap-14">
        <div>
          <Eyebrow>Tecnología y materiales</Eyebrow>
          <h2 className="text-headline-xl-mobile text-on-surface lg:text-headline-xl mt-1 mb-4 font-bold">
            Imprime sobre casi cualquier superficie
          </h2>
          <p className="text-secondary mb-6 max-w-[520px] text-base leading-[26px] sm:text-lg sm:leading-7">
            El DTF UV cura al instante y se adhiere sin primer a vidrio, metal, madera y plástico.
            Ideal para piezas promocionales, herramientas y señalética.
          </p>
          <ul className="mb-8 flex flex-col gap-3">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="text-on-surface flex items-center gap-3 text-[15px]">
                <Icon name="check_circle" className="text-primary text-xl" />
                {benefit}
              </li>
            ))}
          </ul>
          <Button href={datasheetHref} variant="surface" size="md" trailingIcon="arrow_forward">
            Solicitar ficha técnica
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
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
