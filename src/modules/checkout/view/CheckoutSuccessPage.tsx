import { useParams } from 'react-router-dom'
import { PATHS } from '@/app/router/route-types'
import { InkStrip, ButtonLink, Container, CropMarks } from '@/shared/ui'

export function CheckoutSuccessPage() {
  const { orderId = '' } = useParams()
  return (
    <Container size="md" className="py-16">
      <div className="relative mx-auto max-w-xl animate-sheet-in bg-surface px-8 py-12 shadow-sheet sm:px-12">
        <CropMarks inset={-14} />
        <InkStrip />
        <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">Recibimos tu pedido {orderId}</h1>
        <p className="mt-4 text-muted">
          Nuestro equipo revisará tus archivos y te enviará una prueba digital por correo. La producción inicia en cuanto la apruebes.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to={PATHS.order(orderId)}>Ver avance del pedido</ButtonLink>
          <ButtonLink to={PATHS.catalog} variant="outline">Seguir comprando</ButtonLink>
        </div>
      </div>
    </Container>
  )
}
