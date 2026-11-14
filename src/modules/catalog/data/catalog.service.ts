import { delay, hasApi, http } from '@/lib/http'
import type { CatalogFilters, Product } from '../model/catalog.types'
import { PRODUCTS } from './products.data'
import { startingPrice } from './pricing'

const normalize = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

/** Capa de datos del catálogo. Cambia a la API real definiendo VITE_API_URL. */
export const catalogService = {
  async list(filters: CatalogFilters): Promise<Product[]> {
    if (hasApi) {
      const qs = new URLSearchParams({ q: filters.q, category: filters.category, sort: filters.sort })
      return http<Product[]>(`/products?${qs}`)
    }
    await delay(200)
    const q = normalize(filters.q)
    const list = PRODUCTS.filter(
      (p) =>
        p.active &&
        (!filters.category || p.category === filters.category) &&
        (!filters.fastOnly || p.turnaroundDays <= 2) &&
        (!q || normalize(`${p.name} ${p.summary}`).includes(q)),
    )
    switch (filters.sort) {
      case 'price-asc':
        return list.sort((a, b) => startingPrice(a) - startingPrice(b))
      case 'price-desc':
        return list.sort((a, b) => startingPrice(b) - startingPrice(a))
      case 'turnaround':
        return list.sort((a, b) => a.turnaroundDays - b.turnaroundDays)
      default:
        return list.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
    }
  },

  async bySlug(slug: string): Promise<Product | undefined> {
    if (hasApi) return http<Product>(`/products/${slug}`)
    await delay(150)
    return PRODUCTS.find((p) => p.slug === slug)
  },

  async featured(): Promise<Product[]> {
    if (hasApi) return http<Product[]>('/products?featured=1')
    await delay(150)
    return PRODUCTS.filter((p) => p.featured)
  },

  async related(product: Product, limit = 4): Promise<Product[]> {
    await delay(100)
    return PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, limit)
  },
}
