import type { OptionSelection, PriceQuote, Product } from '../model/catalog.types'

const round2 = (n: number) => Math.round(n * 100) / 100

/** Selección inicial: la primera opción de cada grupo. */
export function defaultSelection(product: Product): OptionSelection {
  return Object.fromEntries(product.options.map((o) => [o.id, o.choices[0].id]))
}

export function tierFor(product: Product, qty: number) {
  return [...product.tiers].reverse().find((t) => qty >= t.minQty) ?? product.tiers[0]
}

function optionsFactor(product: Product, selection: OptionSelection) {
  return product.options.reduce((acc, opt) => {
    const choice = opt.choices.find((c) => c.id === selection[opt.id])
    return acc * (choice?.factor ?? 1)
  }, 1)
}

/** Calcula precio unitario y total según cantidad y opciones. Fuente única de verdad. */
export function quotePrice(product: Product, qty: number, selection: OptionSelection): PriceQuote {
  const factor = optionsFactor(product, selection)
  const unitPrice = round2(tierFor(product, qty).unitPrice * factor)
  const baseUnitPrice = round2(product.tiers[0].unitPrice * factor)
  return { unitPrice, baseUnitPrice, total: round2(unitPrice * qty) }
}

/** Precio "desde" para tarjetas de catálogo (cantidad mínima, opciones base). */
export function startingPrice(product: Product) {
  return quotePrice(product, product.quantities[0], defaultSelection(product)).total
}

export function describeSelection(product: Product, selection: OptionSelection): string[] {
  return product.options.map((opt) => {
    const choice = opt.choices.find((c) => c.id === selection[opt.id])
    return `${opt.label}: ${choice?.label ?? '—'}`
  })
}
