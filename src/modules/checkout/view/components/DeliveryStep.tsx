import { formatCurrency } from '@/lib/format'
import { SHIPPING_META, type ShippingMethod } from '@/modules/orders'
import { Input, OptionGroup, Select } from '@/shared/ui'
import type { useCheckoutVM } from '../../vm/useCheckoutVM'
import { MEXICAN_STATES } from './mexicanStates'

type VM = ReturnType<typeof useCheckoutVM>

export function DeliveryStep({ vm }: { vm: VM }) {
  const { address } = vm
  const shippingOptions = (Object.keys(SHIPPING_META) as ShippingMethod[]).map((key) => {
    const meta = SHIPPING_META[key]
    const cost = meta.cost === null ? (vm.totals.missingForFreeShipping === 0 ? 0 : 149) : meta.cost
    return { value: key, label: meta.label, description: meta.description, aside: cost === 0 ? 'Gratis' : formatCurrency(cost) }
  })

  return (
    <div className="flex flex-col gap-8">
      <OptionGroup legend="¿Cómo quieres recibirlo?" name="shipping" value={vm.shippingMethod} onChange={(v) => vm.setShippingMethod(v as ShippingMethod)} options={shippingOptions} columns={1} />

      <fieldset className="flex flex-col gap-4">
        <legend className="mb-1 text-sm font-medium">{vm.needsAddress ? 'Dirección de entrega' : 'Quién recoge'}</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Nombre completo" autoComplete="name" required {...address.bind('fullName')} />
          <Input label="Teléfono" type="tel" autoComplete="tel" required {...address.bind('phone')} />
        </div>
        {vm.needsAddress && (
          <>
            <Input label="Calle y número" autoComplete="street-address" required {...address.bind('street')} />
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Colonia" required {...address.bind('neighborhood')} />
              <Input label="Código postal" inputMode="numeric" autoComplete="postal-code" maxLength={5} required {...address.bind('postalCode')} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Ciudad o alcaldía" autoComplete="address-level2" required {...address.bind('city')} />
              <Select label="Estado" placeholder="Elige un estado" options={MEXICAN_STATES} required {...address.bind('state')} />
            </div>
            <Input label="Referencias" hint="Opcional: entre calles, color de fachada…" {...address.bind('references')} />
          </>
        )}
      </fieldset>
    </div>
  )
}
