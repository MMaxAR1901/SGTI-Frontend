import { ReceiptText } from 'lucide-react'
import { PATHS } from '@/app/router/route-types'
import { ButtonLink, Container, DataTable, EmptyState, PageHeader, Skeleton, Tabs } from '@/shared/ui'
import { useOrdersVM, type OrdersTab } from '../vm/useOrdersVM'
import { orderColumns } from './components/ordersColumns'

export function OrdersPage() {
  const vm = useOrdersVM()
  const tabs: { value: OrdersTab; label: string; count: number }[] = [
    { value: 'active', label: 'En curso', count: vm.counts.active },
    { value: 'done', label: 'Concluidos', count: vm.counts.done },
    { value: 'all', label: 'Todos', count: vm.counts.all },
  ]

  return (
    <Container className="py-10">
      <PageHeader
        title="Mis pedidos"
        description="Sigue el avance de cada pedido, desde la revisión del archivo hasta la entrega."
        breadcrumbs={[{ label: 'Inicio', to: PATHS.home }, { label: 'Mis pedidos' }]}
        actions={<ButtonLink to={PATHS.catalog} variant="outline">Hacer otro pedido</ButtonLink>}
      />
      <Tabs items={tabs} value={vm.tab} onChange={vm.setTab} className="mb-6" />
      {vm.loading ? (
        <Skeleton className="h-64" />
      ) : (
        <DataTable
          columns={orderColumns}
          rows={vm.orders}
          rowKey={(o) => o.id}
          onRowClick={vm.open}
          empty={<EmptyState icon={<ReceiptText />} title="No hay pedidos en esta sección" description="Cuando hagas un pedido aparecerá aquí con su avance." action={<ButtonLink to={PATHS.catalog}>Explorar catálogo</ButtonLink>} />}
        />
      )}
    </Container>
  )
}
