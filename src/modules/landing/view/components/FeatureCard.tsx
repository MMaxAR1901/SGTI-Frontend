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
    <div className="border-outline-variant/40 bg-surface-container-lowest rounded-xl border p-4 text-center sm:p-6">
      <div className="bg-surface-container-low text-primary mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full sm:mb-4 sm:h-12 sm:w-12">
        <Icon name={icon} className="text-xl sm:text-2xl" />
      </div>
      <h4 className="text-label-lg sm:text-headline-sm text-on-surface mb-1 font-bold sm:mb-2">
        {title}
      </h4>
      <p className="text-secondary sm:text-body-sm text-xs">{description}</p>
    </div>
  )
}

/** Alias semántico para la sección de sustratos. */
export const SubstrateCard = FeatureCard
