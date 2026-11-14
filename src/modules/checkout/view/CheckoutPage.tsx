import { Navigate } from 'react-router-dom'
import { PATHS } from '@/app/router/route-types'
import { OrderSummary } from '@/modules/cart'
import { SHIPPING_META } from '@/modules/orders'
import { Button, Card, Container, Stepper } from '@/shared/ui'
import { useCheckoutVM } from '../vm/useCheckoutVM'
import { DeliveryStep } from './components/DeliveryStep'
import { PaymentStep } from './components/PaymentStep'
import { ReviewStep } from './components/ReviewStep'

export function CheckoutPage() {
  const vm = useCheckoutVM()
  if (vm.items.length === 0 && !vm.placing && !vm.completed) return <Navigate to={PATHS.cart} replace />

  const isLast = vm.step === vm.steps.length - 1

  return (
    <Container size="lg" className="py-10">
      <h1 className="text-3xl font-semibold">Finalizar compra</h1>
      <Stepper steps={vm.steps} current={vm.step} className="mt-6 mb-10" />

      <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
        <Card>
          <h2 className="mb-6 text-xl font-semibold">{vm.steps[vm.step]}</h2>
          {vm.step === 0 && <DeliveryStep vm={vm} />}
          {vm.step === 1 && <PaymentStep vm={vm} />}
          {vm.step === 2 && <ReviewStep vm={vm} />}

          <div className="mt-8 flex justify-between gap-3">
            {vm.step > 0 ? <Button variant="ghost" onClick={vm.back}>Volver</Button> : <span />}
            {isLast ? (
              <Button variant="accent" size="lg" loading={vm.placing} onClick={vm.placeOrder}>Confirmar pedido</Button>
            ) : (
              <Button size="lg" onClick={vm.next}>Continuar</Button>
            )}
          </div>
        </Card>
        <div className="lg:sticky lg:top-40 lg:self-start">
          <OrderSummary totals={vm.totals} shippingLabel={SHIPPING_META[vm.shippingMethod].label} />
        </div>
      </div>
    </Container>
  )
}
