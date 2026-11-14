import { STATUS_META, type Order, type OrderStatus } from '@/modules/orders'
import { Button } from '@/shared/ui'

interface AdvanceButtonProps {
  order: Order
  next?: OrderStatus
  busy: boolean
  onAdvance: (o: Order) => void
}

export function AdvanceButton({ order, next, busy, onAdvance }: AdvanceButtonProps) {
  if (!next) return <span className="text-xs text-muted">Sin acciones</span>
  return (
    <Button
      size="sm"
      variant="outline"
      loading={busy}
      onClick={(e) => {
        e.stopPropagation()
        onAdvance(order)
      }}
    >
      Marcar: {STATUS_META[next].label.toLowerCase()}
    </Button>
  )
}
