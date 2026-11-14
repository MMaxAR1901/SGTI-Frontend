import { Search } from 'lucide-react'
import { formatCurrency } from '@/lib/format'
import { getCategory, startingPrice } from '@/modules/catalog'
import { Badge, Button, DataTable, EmptyState, Input, PageHeader } from '@/shared/ui'
import { useAdminProductsVM } from '../vm/useAdminProductsVM'

export function AdminProductsPage() {
  const vm = useAdminProductsVM()
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader title="Productos" description={`${vm.total} productos en el catálogo.`} />
      <Input aria-label="Buscar producto" placeholder="Buscar por nombre" leftIcon={<Search className="size-4" />} value={vm.q} onChange={(e) => vm.setQ(e.target.value)} containerClassName="mb-5 max-w-sm" />
      <DataTable
        columns={[
          { key: 'name', header: 'Producto', render: (p) => <span className="font-medium">{p.name}</span> },
          { key: 'cat', header: 'Categoría', render: (p) => getCategory(p.category)?.name },
          { key: 'price', header: 'Desde', align: 'right', render: (p) => <span className="tabular-nums">{formatCurrency(startingPrice(p))}</span> },
          { key: 'days', header: 'Entrega', align: 'right', render: (p) => `${p.turnaroundDays} d` },
          { key: 'status', header: 'Estado', render: (p) => (p.active ? <Badge tone="success" dot>Visible</Badge> : <Badge dot>Oculto</Badge>) },
          { key: 'action', header: '', align: 'right', render: (p) => <Button size="sm" variant="ghost" onClick={() => vm.toggleActive(p)}>{p.active ? 'Ocultar' : 'Mostrar'}</Button> },
        ]}
        rows={vm.products}
        rowKey={(p) => p.id}
        empty={<EmptyState title="Ningún producto coincide" description="Prueba con otro nombre." />}
      />
    </div>
  )
}
