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
        'group relative flex flex-col justify-between rounded-xl bg-surface-container-lowest p-8 shadow-xs transition-all hover:border-primary',
        featured ? 'border-2 border-primary-container' : 'border border-outline-variant/40',
      )}
    >
      <div className="mb-6">
        {featured ? (
          <div className="mb-6 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon name={icon} className="text-2xl" />
            </div>
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Destacado
            </span>
          </div>
        ) : (
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-low text-primary transition-colors group-hover:bg-primary-container group-hover:text-on-surface">
            <Icon name={icon} className="text-2xl" />
          </div>
        )}
        <h3 className="mb-2 text-headline-sm font-bold text-on-surface">{name}</h3>
        <p className="text-body-md leading-relaxed text-secondary">{summary}</p>
      </div>
      <button
        type="button"
        onClick={() => onOpenSpecs(id)}
        aria-haspopup="dialog"
        className="inline-flex cursor-pointer items-center gap-1.5 text-left text-label-lg font-semibold text-primary group-hover:underline focus:outline-none"
      >
        <span>{ctaLabel}</span>
        <Icon name="arrow_forward" className="text-sm transition-transform group-hover:translate-x-1" />
      </button>
    </article>
  )
}
