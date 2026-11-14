import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'
import { formatDate } from '@/lib/format'
import { STATUS_FLOW, STATUS_META } from '../../data/order-status'
import type { Order } from '../../model/order.types'

/** Línea de tiempo del flujo de producción con los eventos reales del pedido. */
export function OrderTimeline({ order }: { order: Order }) {
  const currentIndex = STATUS_FLOW.indexOf(order.status)
  return (
    <ol className="flex flex-col">
      {STATUS_FLOW.map((status, i) => {
        const event = order.events.find((e) => e.status === status)
        const done = i < currentIndex || (i === currentIndex && status === 'delivered')
        const current = i === currentIndex && !done
        return (
          <li key={status} className="relative flex gap-4 pb-6 last:pb-0">
            {i < STATUS_FLOW.length - 1 && (
              <span className={cn('absolute top-7 left-[13px] h-[calc(100%-28px)] w-px', i < currentIndex ? 'bg-ink' : 'bg-line-strong')} aria-hidden />
            )}
            <span
              className={cn(
                'relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full border',
                done && 'border-ink bg-ink text-white',
                current && 'border-magenta bg-magenta/10',
                !done && !current && 'border-line-strong bg-surface',
              )}
            >
              {done ? <Check className="size-3.5" /> : current ? <span className="size-2 rounded-full bg-magenta" /> : null}
            </span>
            <div className="pt-0.5">
              <p className={cn('text-sm font-medium', !done && !current && 'text-muted')}>{STATUS_META[status].label}</p>
              {current && <p className="text-[13px] text-muted">{STATUS_META[status].description}</p>}
              {event && <p className="text-xs text-muted">{formatDate(event.at)}{event.note ? ` · ${event.note}` : ''}</p>}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
