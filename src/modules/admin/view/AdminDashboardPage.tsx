import { Inbox } from 'lucide-react'
import { formatDate } from '@/lib/format'
import { orderColumns } from '@/modules/orders'
import { getCategory } from '@/modules/catalog'
import { Card, CardHeader, DataTable, EmptyState, PageHeader } from '@/shared/ui'
import { useAdminDashboardVM } from '../vm/useAdminDashboardVM'
import { KpiRow } from './components/KpiRow'
import { AdvanceButton } from './components/AdvanceButton'

export function AdminDashboardPage() {
  const vm = useAdminDashboardVM()
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader title="Resumen" description="Lo que necesita atención hoy en producción y ventas." />
      <KpiRow items={vm.kpis} />

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-semibold">Cola de producción</h2>
        <DataTable
          columns={[
            ...orderColumns.filter((c) => c.key !== 'date'),
            { key: 'action', header: '', align: 'right', render: (o) => <AdvanceButton order={o} next={vm.nextStatus(o.status)} busy={vm.busy === o.id} onAdvance={vm.advance} /> },
          ]}
          rows={vm.queue}
          rowKey={(o) => o.id}
          empty={<EmptyState icon={<Inbox />} title="Sin pedidos pendientes" description="Los pedidos nuevos aparecerán aquí en cuanto se confirmen." />}
        />
      </section>

      <Card className="mt-10">
        <CardHeader title="Cotizaciones nuevas" description="Responde en menos de 24 h hábiles." />
        {vm.newQuotes.length === 0 ? (
          <p className="text-sm text-muted">No hay cotizaciones por responder.</p>
        ) : (
          <ul className="divide-y divide-line">
            {vm.newQuotes.map((q) => (
              <li key={q.id} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-medium">{q.id} · {q.company || q.name}</p>
                  <p className="line-clamp-1 text-sm text-muted">{getCategory(q.projectType)?.name ?? 'Otro'}: {q.description}</p>
                </div>
                <span className="text-sm text-muted">{formatDate(q.createdAt)}</span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  )
}
