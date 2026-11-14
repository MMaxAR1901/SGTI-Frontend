import { ShieldCheck } from 'lucide-react'
import { PAYMENT_META, type PaymentMethod } from '@/modules/orders'
import { OptionGroup, Textarea } from '@/shared/ui'
import type { useCheckoutVM } from '../../vm/useCheckoutVM'

type VM = ReturnType<typeof useCheckoutVM>

export function PaymentStep({ vm }: { vm: VM }) {
  const options = (Object.keys(PAYMENT_META) as PaymentMethod[]).map((key) => ({
    value: key,
    label: PAYMENT_META[key].label,
    description: PAYMENT_META[key].description,
  }))
  return (
    <div className="flex flex-col gap-8">
      <OptionGroup legend="Forma de pago" name="payment" value={vm.paymentMethod} onChange={(v) => vm.setPaymentMethod(v as PaymentMethod)} options={options} columns={1} />
      <p className="flex items-start gap-2 rounded-md bg-paper px-3 py-2.5 text-[13px] text-muted">
        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
        No guardamos datos de tarjeta. El cobro se realiza en la pasarela de pago al confirmar.
      </p>
      <Textarea label="Notas para producción" hint="Opcional: colores Pantone, fecha límite, instrucciones de empaque…" value={vm.notes} onChange={(e) => vm.setNotes(e.target.value)} rows={3} />
    </div>
  )
}
