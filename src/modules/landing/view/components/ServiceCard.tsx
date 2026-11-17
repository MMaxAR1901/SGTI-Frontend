import { cn } from '@/lib/cn'
import type { Service, ServiceId } from '../../model/landing.types'
import { Icon } from './Icon'

interface ServiceCardProps {
  service: Pick<Service, 'id' | 'icon' | 'name' | 'summary' | 'ctaLabel' | 'featured'>
  onOpenSpecs: (id: ServiceId) => void
}

/** Tarjeta modular del catálogo técnico. La variante `featured` lleva borde menta y badge. */
export function ServiceCard({ service, onOpenSpecs }: ServiceCardProps) {
  const { id, icon, name, summary, ctaLabel, featured } = service

  return (
    <article
      className={cn(
        'group bg-surface-container-lowest hover:border-primary relative flex flex-col justify-between rounded-xl p-6 shadow-xs transition-all sm:p-8 w-[250px] h-[400px] lg:h-auto lg:w-auto',
        featured ? 'border-primary-container border-2' : 'border-outline-variant/40 border',
      )}
    >
      <div className="mb-6">
        {featured ? (
          <div className="mb-6 flex items-center justify-between">
            <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-lg">
              <Icon name={icon} className="text-2xl" />
            </div>
            <span className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wider uppercase">
              Destacado
            </span>
          </div>
        ) : (
          <div className="bg-surface-container-low text-primary group-hover:bg-primary-container group-hover:text-on-surface mb-6 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
            <Icon name={icon} className="text-2xl" />
          </div>
        )}
        <h3 className="text-headline-sm text-on-surface mb-2 font-bold">{name}</h3>
        <p className="text-body-md text-secondary leading-relaxed">{summary}</p>
      </div>
      <button
        type="button"
        onClick={() => onOpenSpecs(id)}
        aria-haspopup="dialog"
        className="text-label-lg text-primary inline-flex cursor-pointer items-center gap-1.5 text-left font-semibold group-hover:underline focus:outline-none"
      >
        <span>{ctaLabel}</span>
        <Icon
          name="arrow_forward"
          className="text-sm transition-transform group-hover:translate-x-1"
        />
      </button>
    </article>
  )
}
