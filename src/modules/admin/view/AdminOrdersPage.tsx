import { orderColumns, STATUS_FLOW, STATUS_META } from '@/modules/orders'
import { DataTable, EmptyState, PageHeader, Skeleton, Tabs, type TabItem } from '@/shared/ui'
import { useAdminOrdersVM, type StatusFilter } from '../vm/useAdminOrdersVM'
import { AdvanceButton } from './components/AdvanceButton'

export function AdminOrdersPage() {
  const vm = useAdminOrdersVM()
  const tabs: TabItem<StatusFilter>[] = [
    { value: 'all', label: 'Todos', count: vm.orders.length },
    ...STATUS_FLOW.map((s) => ({ value: s, label: STATUS_META[s].label, count: vm.countBy(s) })),
  ]
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader title="Pedidos" description="Avanza cada pedido por el flujo de producción." />
      <Tabs items={tabs} value={vm.filter} onChange={vm.setFilter} className="mb-6" />
      {vm.loading ? (
        <Skeleton className="h-72" />
      ) : (
        <DataTable
          columns={[
            { key: 'customer', header: 'Cliente', render: (o) => o.customerName },
            ...orderColumns,
            { key: 'action', header: '', align: 'right', render: (o) => <AdvanceButton order={o} next={vm.nextStatus(o.status)} busy={vm.busy === o.id} onAdvance={vm.advance} /> },
          ]}
          rows={vm.filtered}
          rowKey={(o) => o.id}
          empty={<EmptyState title="No hay pedidos en este estado" />}
        />
      )}
    </div>
  )
}
