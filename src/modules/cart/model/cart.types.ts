export interface CartItem {
  /** Id de la línea (un mismo producto con distintas opciones = líneas distintas). */
  lineId: string
  productId: string
  slug: string
  name: string
  category: string
  tint: string
  quantity: number
  unitLabel: string
  selection: Record<string, string>
  selectionLabels: string[]
  unitPrice: number
  total: number
  artworkNames: string[]
}

export type NewCartItem = Omit<CartItem, 'lineId'>

export interface CartTotals {
  itemCount: number
  subtotal: number
  shipping: number
  total: number
  /** IVA contenido en el total (precios con IVA incluido). */
  taxIncluded: number
  /** Cuánto falta para envío gratis (0 si ya aplica). */
  missingForFreeShipping: number
}
