import type { HeroContent } from '../../model/landing.types'
import { Button, Container, CropMarks, Pill } from '../components'

interface HeroSectionProps {
  id: string
  hero: HeroContent
  quoteHref: string
  catalogHref: string
}

/** Hero V2: fondo liso de papel, titular con la frase clave en verde y foto con marcas de corte. */
export function HeroSection({ id, hero, quoteHref, catalogHref }: HeroSectionProps) {
  return (
    <section id={id} className="w-full">
      <Container className="pt-10 pb-14 sm:pt-16 sm:pb-20 lg:pt-[72px] lg:pb-[88px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div className="flex flex-col items-start">
            <Pill dot="md">{hero.eyebrow}</Pill>
            <h1 className="text-display-hero-mobile text-on-surface lg:text-display-hero mt-6 mb-4 font-bold tracking-tight sm:text-[44px] sm:leading-[52px] xl:text-[52px] xl:leading-[58px]">
              {hero.titleLead}
              <span className="text-primary">{hero.titleHighlight}</span>
            </h1>
            <p className="text-secondary mb-6 max-w-[520px] text-base leading-[26px] sm:mb-8 sm:text-lg sm:leading-7">
              {hero.description}
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button
                href={quoteHref}
                variant="primary"
                size="lg"
                trailingIcon="arrow_forward"
                className="w-full sm:w-auto"
              >
                Cotizar proyecto
              </Button>
              <Button href={catalogHref} variant="surface" size="lg" className="w-full sm:w-auto">
                Ver catálogo
              </Button>
            </div>
            <div className="border-line mt-8 flex w-full flex-wrap gap-x-7 gap-y-4 border-t pt-6 sm:mt-12 sm:gap-x-10">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-on-surface text-[22px] leading-7 font-bold tracking-tight tabular-nums sm:text-[28px] sm:leading-9">
                    {stat.value}
                  </p>
                  <p className="text-secondary text-[13px] leading-5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <CropMarks />
            <div className="bg-surface-container relative aspect-[4/3.4] overflow-hidden rounded-xl">
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                className="h-full w-full object-cover"
              />
              <span className="bg-inverse-surface text-inverse-on-surface absolute bottom-4 left-4 inline-flex items-center gap-3 rounded px-3 py-1.5 font-mono text-[13px] leading-5 tracking-[0.02em] uppercase">
                {hero.imageCaption.label}
                <em className="text-primary-container not-italic">{hero.imageCaption.detail}</em>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
