import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '@/app/router/route-types'
import { analytics } from '@/lib/analytics'
import { phoneMx, postalCodeMx, required } from '@/lib/validators'
import { useAuth } from '@/modules/auth'
import { useCart, useCartTotals } from '@/modules/cart'
import { ordersService, SHIPPING_META, type PaymentMethod, type ShippingMethod } from '@/modules/orders'
import { useForm } from '@/shared/hooks'
import { toast } from '@/shared/ui'
import { CHECKOUT_STEPS } from '../model/checkout.types'

export function useCheckoutVM() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { items, clear } = useCart()

  const [step, setStep] = useState(0)
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('standard')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card')
  const [notes, setNotes] = useState('')
  const [placing, setPlacing] = useState(false)
  /** Evita que el carrito vacío redirija a /carrito justo después de confirmar. */
  const [completed, setCompleted] = useState(false)

  const shippingCost = SHIPPING_META[shippingMethod].cost ?? undefined
  const totals = useCartTotals(shippingCost)
  const needsAddress = shippingMethod !== 'pickup'

  const address = useForm(
    {
      fullName: user?.name ?? '',
      phone: user?.phone ?? '',
      street: '',
      neighborhood: '',
      city: '',
      state: '',
      postalCode: '',
      references: '',
    },
    needsAddress
      ? {
          fullName: [required('¿Quién recibe?')],
          phone: [required('Escribe un teléfono'), phoneMx()],
          street: [required('Escribe calle y número')],
          neighborhood: [required('Escribe la colonia')],
          city: [required('Escribe la ciudad o alcaldía')],
          state: [required('Elige el estado')],
          postalCode: [required('Escribe el código postal'), postalCodeMx()],
        }
      : { fullName: [required('¿Quién recoge?')], phone: [required('Escribe un teléfono'), phoneMx()] },
  )

  const next = () => {
    if (step === 0 && !address.validate()) return
    if (step === 0) analytics.track('begin_checkout', { value: totals.total })
    setStep((s) => Math.min(s + 1, CHECKOUT_STEPS.length - 1))
  }
  const back = () => setStep((s) => Math.max(0, s - 1))

  const placeOrder = async () => {
    if (!user) return
    setPlacing(true)
    try {
      const order = await ordersService.create({
        customerName: user.company || user.name,
        customerEmail: user.email,
        items,
        totals,
        shippingMethod,
        paymentMethod,
        address: needsAddress ? address.values : undefined,
        notes,
      })
      analytics.track('purchase', { id: order.id, value: order.totals.total })
      setCompleted(true)
      navigate(PATHS.checkoutSuccess(order.id), { replace: true })
      clear()
    } catch {
      toast.error('No pudimos registrar tu pedido. Tu carrito sigue intacto; intenta de nuevo.')
    } finally {
      setPlacing(false)
    }
  }

  return {
    items,
    totals,
    step,
    steps: [...CHECKOUT_STEPS],
    next,
    back,
    goTo: (s: number) => s < step && setStep(s),
    shippingMethod,
    setShippingMethod,
    paymentMethod,
    setPaymentMethod,
    needsAddress,
    address,
    notes,
    setNotes,
    placing,
    completed,
    placeOrder,
  }
}
