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
    <Container as="section" className="w-full pb-16">
      <div className="flex flex-col items-center justify-between gap-8 rounded-2xl border border-outline/20 bg-inverse-surface p-10 text-inverse-on-surface md:flex-row lg:p-14">
        <div className="max-w-2xl">
          <h3 className="mb-3 text-headline-lg font-bold leading-tight text-surface-container-lowest">
            {title}
          </h3>
          <p className="text-body-md text-secondary-fixed-dim">{description}</p>
        </div>
        <div className="shrink-0">
          <Button
            href={ctaHref}
            size="md"
            leadingIcon="assignment"
            leadingIconClassName="text-lg"
            className="border-0 font-semibold"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </Container>
  )
}
