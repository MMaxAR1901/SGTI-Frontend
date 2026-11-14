import { Button, Container } from '../components'

interface CtaBannerProps {
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
}

/** Banner técnico intermedio (panel oscuro con CTA). */
export function CtaBanner({ title, description, ctaLabel, ctaHref }: CtaBannerProps) {
  return (
    <Container as="section" className="w-full pb-12 sm:pb-16">
      <div className="border-outline/20 bg-inverse-surface text-inverse-on-surface flex flex-col items-start justify-between gap-6 rounded-2xl border p-6 sm:gap-8 sm:p-10 md:flex-row md:items-center lg:p-14">
        <div className="max-w-2xl">
          <h3 className="text-headline-md sm:text-headline-lg text-surface-container-lowest mb-3 leading-tight font-bold">
            {title}
          </h3>
          <p className="text-body-md text-secondary-fixed-dim">{description}</p>
        </div>
        <div className="w-full shrink-0 md:w-auto">
          <Button
            href={ctaHref}
            size="md"
            leadingIcon="assignment"
            leadingIconClassName="text-lg"
            className="w-full border-0 font-semibold md:w-auto"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </Container>
  )
}
