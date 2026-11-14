export type CategoryId = 'tarjetas' | 'lonas' | 'vinil' | 'stickers' | 'impresos' | 'senaletica' | 'empaques' | 'diseno'

/** Variante de ilustración para ProductArt. */
export type ArtVariant = 'cards' | 'banner' | 'vinyl' | 'stickers' | 'flyers' | 'sign' | 'box' | 'design'

export interface Category {
  id: CategoryId
  name: string
  description: string
  art: ArtVariant
}

export interface OptionChoice {
  id: string
  label: string
  description?: string
  /** Multiplicador sobre el precio unitario (1 = sin cambio). */
  factor?: number
}

export interface ProductOption {
  id: string
  label: string
  choices: OptionChoice[]
}

export interface PriceTier {
  minQty: number
  unitPrice: number
}

export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: CategoryId
  summary: string
  description: string
  unitLabel: string
  quantities: number[]
  tiers: PriceTier[]
  options: ProductOption[]
  specs: ProductSpec[]
  turnaroundDays: number
  requiresArtwork: boolean
  featured?: boolean
  badge?: string
  /** Color principal de la ilustración (CSS). */
  tint: string
  active: boolean
}

export type OptionSelection = Record<string, string>

export interface PriceQuote {
  unitPrice: number
  total: number
  /** Precio por pieza sin descuento por volumen (para mostrar ahorro). */
  baseUnitPrice: number
}

export type SortKey = 'relevance' | 'price-asc' | 'price-desc' | 'turnaround'

export interface CatalogFilters {
  q: string
  category: CategoryId | ''
  sort: SortKey
  fastOnly: boolean
}
