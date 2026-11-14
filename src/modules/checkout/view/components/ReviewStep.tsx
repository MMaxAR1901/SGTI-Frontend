import { CartLine } from '@/modules/cart'
import { PAYMENT_META, SHIPPING_META } from '@/modules/orders'
import type { useCheckoutVM } from '../../vm/useCheckoutVM'

type VM = ReturnType<typeof useCheckoutVM>

export function ReviewStep({ vm }: { vm: VM }) {
  const a = vm.address.values
  const block = 'flex items-start justify-between gap-4 border-b border-line py-4'
  return (
    <div>
      <div className={block}>
        <div>
          <p className="text-sm text-muted">Entrega</p>
          <p className="font-medium">{SHIPPING_META[vm.shippingMethod].label}</p>
          <p className="text-sm">{a.fullName} · {a.phone}</p>
          {vm.needsAddress && <p className="text-sm text-muted">{a.street}, {a.neighborhood}, {a.city}, {a.state} {a.postalCode}</p>}
        </div>
        <button type="button" onClick={() => vm.goTo(0)} className="text-sm font-medium underline underline-offset-2">Cambiar</button>
      </div>
      <div className={block}>
        <div>
          <p className="text-sm text-muted">Pago</p>
          <p className="font-medium">{PAYMENT_META[vm.paymentMethod].label}</p>
        </div>
        <button type="button" onClick={() => vm.goTo(1)} className="text-sm font-medium underline underline-offset-2">Cambiar</button>
      </div>
      <div className="divide-y divide-line">
        {vm.items.map((i) => <CartLine key={i.lineId} item={i} compact />)}
      </div>
    </div>
  )
}
