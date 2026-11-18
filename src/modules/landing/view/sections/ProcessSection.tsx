import type { ProcessStep } from '../../model/landing.types'
import { Container, Eyebrow } from '../components'

interface ProcessSectionProps {
  steps: ProcessStep[]
}

/** "Cómo trabajamos": pasos numerados separados por una línea superior. */
export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <Container as="section" className="py-14 sm:py-24">
      <Eyebrow>Cómo trabajamos</Eyebrow>
      <h2 className="text-headline-xl-mobile text-on-surface lg:text-headline-xl mt-1 mb-8 font-bold sm:mb-10">
        Tres pasos, sin sorpresas
      </h2>
      <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="border-line flex flex-col gap-3 border-t pt-6">
            <span className="text-secondary font-mono text-[13px] leading-5 font-medium">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-on-surface text-lg leading-[26px] font-semibold">{step.title}</h3>
            <p className="text-secondary text-[15px] leading-6">{step.description}</p>
          </li>
        ))}
      </ol>
    </Container>
  )
}
