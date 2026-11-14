import { cn } from '@/lib/cn'
import type { HeroContent } from '../../model/landing.types'
import { Button, Container, Pill } from '../components'

interface HeroSectionProps {
  id: string
  hero: HeroContent
  quoteHref: string
  catalogHref: string
}

export function HeroSection({ id, hero, quoteHref, catalogHref }: HeroSectionProps) {
  return (
    <section
      id={id}
      className="border-outline-variant/30 from-surface-container-low to-background relative overflow-hidden border-b bg-linear-to-b py-6 sm:py-14 lg:py-20"
    >
      <Container className="relative z-10 py-8 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start lg:col-span-7">
            <Pill dot="md" tone="faint" className="mb-5 text-[11px] sm:mb-6 sm:text-xs">
              {hero.eyebrow}
            </Pill>
            <h1 className="font-display-hero text-display-hero-mobile text-on-surface lg:text-display-hero mb-6 leading-tight font-extrabold tracking-tight">
              {hero.titleLead}
              <span className="text-primary">{hero.titleHighlight}</span>
            </h1>
            <p className="font-body-lg text-body-md sm:text-body-lg text-secondary mb-8 max-w-xl leading-relaxed sm:mb-10">
              {hero.description}
            </p>
            <div className="mb-10 flex w-full flex-col gap-3 sm:mb-12 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button
                href={quoteHref}
                variant="primary"
                size="md"
                trailingIcon="arrow_forward"
                className="w-full sm:w-auto"
              >
                Cotizar Proyecto
              </Button>
              <Button
                href={catalogHref}
                variant="surface"
                size="md"
                className="w-full px-6 sm:w-auto"
              >
                Ver Catálogo
              </Button>
            </div>
            <div className="border-outline-variant/30 grid w-full max-w-lg grid-cols-3 gap-4 border-t pt-6 sm:gap-8 sm:pt-8">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className={cn(
                      'text-headline-sm sm:text-headline-md font-bold',
                      stat.highlight ? 'text-primary' : 'text-on-surface',
                    )}
                  >
                    {stat.value}
                  </div>
                  <div className="text-secondary sm:text-body-sm mt-0.5 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-outline-variant/40 bg-surface-container-lowest overflow-hidden rounded-2xl border p-2 shadow-sm">
              <div className="relative h-64 w-full overflow-hidden rounded-xl sm:h-80 lg:h-96">
                <img
                  src={hero.image.src}
                  alt={hero.image.alt}
                  className="h-full w-full object-cover"
                />
                <div className="bg-inverse-surface/85 text-inverse-on-surface absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-lg p-3 backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:p-3.5">
                  <div className="text-primary-fixed font-mono text-[11px] tracking-wider uppercase sm:text-xs">
                    {hero.imageCaption.label}
                  </div>
                  <div className="text-secondary-fixed-dim text-[11px] sm:text-xs">
                    {hero.imageCaption.detail}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
