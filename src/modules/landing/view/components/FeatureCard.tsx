import type { IconName } from '../../model/landing.types'
import { Icon } from './Icon'

interface FeatureCardProps {
  icon: IconName
  title: string
  description: string
}

/** Tarjeta centrada con ícono circular (sustratos compatibles, características). */
export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-6 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-low text-primary">
        <Icon name={icon} className="text-2xl" />
      </div>
      <h4 className="mb-2 text-headline-sm font-bold text-on-surface">{title}</h4>
      <p className="text-body-sm text-secondary">{description}</p>
    </div>
  )
}

/** Alias semántico para la sección de sustratos. */
export const SubstrateCard = FeatureCard
