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
      className="relative overflow-hidden border-b border-outline-variant/30 bg-linear-to-b from-surface-container-low to-background py-14 lg:py-20"
    >
      <Container className="relative z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start lg:col-span-7">
            <Pill dot="md" tone="faint" className="mb-6">
              {hero.eyebrow}
            </Pill>
            <h1 className="mb-6 font-display-hero text-display-hero-mobile font-extrabold leading-tight tracking-tight text-on-surface lg:text-display-hero">
              {hero.titleLead}
              <span className="text-primary">{hero.titleHighlight}</span>
            </h1>
            <p className="mb-10 max-w-xl font-body-lg text-body-lg leading-relaxed text-secondary">
              {hero.description}
            </p>
            <div className="mb-12 flex flex-wrap items-center gap-4">
              <Button href={quoteHref} variant="primary" size="md" trailingIcon="arrow_forward">
                Cotizar Proyecto
              </Button>
              <Button href={catalogHref} variant="surface" size="md" className="px-6">
                Ver Catálogo
              </Button>
            </div>
            <div className="grid w-full max-w-lg grid-cols-3 gap-8 border-t border-outline-variant/30 pt-8">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className={cn(
                      'text-headline-md font-bold',
                      stat.highlight ? 'text-primary' : 'text-on-surface',
                    )}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-body-sm text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-2 shadow-sm">
              <div className="relative h-80 w-full overflow-hidden rounded-xl lg:h-96">
                <img src={hero.image.src} alt={hero.image.alt} className="h-full w-full object-cover" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg bg-inverse-surface/85 p-3.5 text-inverse-on-surface backdrop-blur-md">
                  <div className="font-mono text-xs uppercase tracking-wider text-primary-fixed">
                    {hero.imageCaption.label}
                  </div>
                  <div className="text-xs text-secondary-fixed-dim">{hero.imageCaption.detail}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
