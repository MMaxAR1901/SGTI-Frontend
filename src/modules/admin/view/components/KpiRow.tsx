import type { Kpi } from '../../model/admin.types'

export function KpiRow({ items }: { items: Kpi[] }) {
  return (
    <dl className="grid divide-y divide-line rounded-lg border border-line bg-surface sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
      {items.map((k) => (
        <div key={k.label} className="px-5 py-4">
          <dt className="text-sm text-muted">{k.label}</dt>
          <dd className="mt-1 font-display text-2xl font-semibold tabular-nums">{k.value}</dd>
          {k.hint && <dd className="text-xs text-muted">{k.hint}</dd>}
        </div>
      ))}
    </dl>
  )
}
