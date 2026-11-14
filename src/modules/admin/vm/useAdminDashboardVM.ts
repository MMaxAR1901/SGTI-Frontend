import { useMemo } from 'react'
import { useAsync } from '@/modules/catalog'
import { quotesService, useQuotesStore } from '@/modules/quotes'
import { formatCurrency } from '@/lib/format'
import type { Kpi } from '../model/admin.types'
import { useAdminOrdersVM } from './useAdminOrdersVM'

export function useAdminDashboardVM() {
  const ordersVM = useAdminOrdersVM()
  const quotesVersion = useQuotesStore((s) => s.quotes)
  const { data: quotes = [] } = useAsync(() => quotesService.list(), [quotesVersion])

  const kpis: Kpi[] = useMemo(() => {
    const { orders } = ordersVM
    const month = new Date().getMonth()
    const sales = orders
      .filter((o) => new Date(o.createdAt).getMonth() === month && o.status !== 'cancelled')
      .reduce((acc, o) => acc + o.totals.total, 0)
    return [
      { label: 'Archivos por revisar', value: String(ordersVM.countBy('file_review')), hint: 'Prioridad del día' },
      { label: 'Pruebas sin aprobar', value: String(ordersVM.countBy('proof_sent')), hint: 'Esperando al cliente' },
      { label: 'En producción', value: String(ordersVM.countBy('in_production')) },
      { label: 'Ventas del mes', value: formatCurrency(sales) },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ordersVM.orders])

  const queue = ordersVM.orders.filter((o) => ['file_review', 'proof_sent', 'in_production'].includes(o.status))
  const newQuotes = quotes.filter((q) => q.status === 'new')

  return { kpis, queue, newQuotes, advance: ordersVM.advance, busy: ordersVM.busy, nextStatus: ordersVM.nextStatus, loading: ordersVM.loading }
}
