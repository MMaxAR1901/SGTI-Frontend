import type { BadgeTone } from '@/shared/ui'
import type { OrderStatus, PaymentMethod, ShippingMethod } from '../model/order.types'

/** Flujo de producción de una imprenta: el orden importa. */
export const STATUS_FLOW: OrderStatus[] = ['file_review', 'proof_sent', 'in_production', 'shipped', 'delivered']

export const STATUS_META: Record<OrderStatus, { label: string; description: string; tone: BadgeTone }> = {
  file_review: { label: 'Revisando archivo', description: 'Validamos medidas, resolución y rebases.', tone: 'cyan' },
  proof_sent: { label: 'Prueba enviada', description: 'Te enviamos la prueba digital: apruébala para imprimir.', tone: 'yellow' },
  in_production: { label: 'En producción', description: 'Tu pedido está en máquina.', tone: 'magenta' },
  shipped: { label: 'Enviado', description: 'Va en camino.', tone: 'neutral' },
  delivered: { label: 'Entregado', description: 'Pedido entregado.', tone: 'success' },
  cancelled: { label: 'Cancelado', description: 'El pedido fue cancelado.', tone: 'danger' },
}

export const SHIPPING_META: Record<ShippingMethod, { label: string; description: string; cost: number | null }> = {
  pickup: { label: 'Recoger en sucursal', description: 'Sin costo. Te avisamos cuando esté listo.', cost: 0 },
  standard: { label: 'Envío estándar', description: '3 a 5 días hábiles después de producción.', cost: null },
  express: { label: 'Envío express', description: '1 a 2 días hábiles después de producción.', cost: 289 },
}

export const PAYMENT_META: Record<PaymentMethod, { label: string; description: string }> = {
  card: { label: 'Tarjeta de crédito o débito', description: 'Pago seguro en la pasarela; aceptamos meses sin intereses.' },
  transfer: { label: 'Transferencia SPEI', description: 'Te enviamos la CLABE; el pedido inicia al confirmar el pago.' },
  oxxo: { label: 'Efectivo en OXXO', description: 'Recibirás una referencia válida por 48 horas.' },
}
