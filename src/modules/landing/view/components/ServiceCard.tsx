import { cn } from '@/lib/cn'
import type { Service, ServiceId } from '../../model/landing.types'
import { Icon } from './Icon'

interface ServiceCardProps {
  service: Pick<Service, 'id' | 'icon' | 'name' | 'summary' | 'ctaLabel' | 'featured'>
  onOpenSpecs: (id: ServiceId) => void
}

/**
 * Tarjeta del catálogo técnico (V2): hoja blanca con borde hairline.
 * La variante `featured` lleva borde menta y badge "Destacado".
 */
export function ServiceCard({ service, onOpenSpecs }: ServiceCardProps) {
  const { id, icon, name, summary, ctaLabel, featured } = service

  return (
    <article
      className={cn(
        'group relative flex min-h-[380px] w-[260px] shrink-0 flex-col justify-between gap-6 rounded-xl bg-white p-5 transition-[border-color,box-shadow] duration-200 hover:shadow-sheet sm:min-h-[360px] sm:w-[300px] sm:p-6',
        featured ? 'border-primary-container border-2' : 'border-line hover:border-primary border',
      )}
    >
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-lg">
            <Icon name={icon} className="text-2xl" />
          </div>
          {featured && (
            <span className="bg-primary/10 text-primary rounded px-2 py-0.5 text-xs leading-4 font-semibold tracking-[0.08em] uppercase">
              Destacado
            </span>
          )}
        </div>
        <h3 className="text-on-surface mb-2 text-lg leading-[26px] font-bold">{name}</h3>
        <p className="text-secondary text-[15px] leading-6">{summary}</p>
      </div>
      <button
        type="button"
        onClick={() => onOpenSpecs(id)}
        aria-haspopup="dialog"
        className="text-primary inline-flex cursor-pointer items-center gap-1.5 self-start rounded-sm text-left text-sm font-semibold underline-offset-[3px] hover:underline"
      >
        <span>{ctaLabel}</span>
        <Icon
          name="arrow_forward"
          className="text-base transition-transform duration-150 group-hover:translate-x-1"
        />
      </button>
    </article>
  )
}
