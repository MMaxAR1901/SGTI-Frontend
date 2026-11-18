import type { IconName } from '../../model/landing.types'
import { Icon } from './Icon'

interface FeatureCardProps {
  icon: IconName
  title: string
  description: string
}

/** Tile V2 alineado a la izquierda (sustratos compatibles, características). */
export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="border-line bg-surface-container-low flex flex-col items-start gap-3 rounded-xl border p-4 sm:p-6">
      <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
        <Icon name={icon} className="text-[22px]" />
      </div>
      <h3 className="text-on-surface text-[15px] leading-6 font-semibold">{title}</h3>
      <p className="text-secondary text-[13px] leading-5">{description}</p>
    </div>
  )
}

/** Alias semántico para la sección de sustratos. */
export const SubstrateCard = FeatureCard
