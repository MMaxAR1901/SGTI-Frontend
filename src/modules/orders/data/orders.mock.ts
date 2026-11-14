import type { Order } from '../model/order.types'

const daysAgo = (d: number) => new Date(Date.now() - d * 86_400_000).toISOString()

const item = (over: Partial<Order['items'][number]>): Order['items'][number] => ({
  lineId: crypto.randomUUID(),
  productId: 'p-001',
  slug: 'tarjetas-presentacion-clasicas',
  name: 'Tarjetas de presentación clásicas',
  category: 'tarjetas',
  tint: '#00a0dc',
  quantity: 500,
  unitLabel: 'tarjetas',
  selection: {},
  selectionLabels: ['Impresión: Frente y vuelta', 'Acabado: Laminado mate'],
  unitPrice: 1.86,
  total: 930,
  artworkNames: ['tarjeta-frente.pdf'],
  ...over,
})

const totals = (subtotal: number, shipping = 0) => ({
  itemCount: 1,
  subtotal,
  shipping,
  total: subtotal + shipping,
  taxIncluded: Math.round(((subtotal + shipping) - (subtotal + shipping) / 1.16) * 100) / 100,
  missingForFreeShipping: 0,
})

/** Pedidos de ejemplo (customerEmail "demo" = visibles para cualquier cuenta en modo demo). */
export const MOCK_ORDERS: Order[] = [
  {
    id: 'SG-10482',
    createdAt: daysAgo(1),
    status: 'proof_sent',
    customerName: 'Café Altamira',
    customerEmail: 'demo',
    items: [item({})],
    totals: totals(930, 149),
    shippingMethod: 'standard',
    paymentMethod: 'card',
    events: [
      { status: 'file_review', at: daysAgo(1) },
      { status: 'proof_sent', at: daysAgo(0.5), note: 'Ajustamos el rebase a 3 mm.' },
    ],
  },
  {
    id: 'SG-10471',
    createdAt: daysAgo(4),
    status: 'in_production',
    customerName: 'Gimnasio Forja',
    customerEmail: 'demo',
    items: [item({ productId: 'p-003', slug: 'lona-front-13oz', name: 'Lona front 13 oz', category: 'lonas', tint: '#e5007d', quantity: 2, unitLabel: 'piezas', selectionLabels: ['Medida: 3 × 1.5 m', 'Acabado: Ojillos'], unitPrice: 1312, total: 2624, artworkNames: ['lona-fachada.pdf'] })],
    totals: totals(2624),
    shippingMethod: 'pickup',
    paymentMethod: 'transfer',
    events: [
      { status: 'file_review', at: daysAgo(4) },
      { status: 'proof_sent', at: daysAgo(3.6) },
      { status: 'in_production', at: daysAgo(3) },
    ],
  },
  {
    id: 'SG-10433',
    createdAt: daysAgo(15),
    status: 'delivered',
    customerName: 'Despacho Rivera',
    customerEmail: 'demo',
    items: [item({ productId: 'p-007', slug: 'stickers-troquelados', name: 'Stickers troquelados', category: 'stickers', tint: '#e5007d', quantity: 250, unitLabel: 'stickers', selectionLabels: ['Tamaño: 7.5 cm', 'Material: Vinil blanco'], unitPrice: 5.46, total: 1365, artworkNames: ['sticker.ai'] })],
    totals: totals(1365, 149),
    shippingMethod: 'standard',
    paymentMethod: 'oxxo',
    events: [
      { status: 'file_review', at: daysAgo(15) },
      { status: 'proof_sent', at: daysAgo(14.7) },
      { status: 'in_production', at: daysAgo(14) },
      { status: 'shipped', at: daysAgo(12) },
      { status: 'delivered', at: daysAgo(9) },
    ],
  },
]
