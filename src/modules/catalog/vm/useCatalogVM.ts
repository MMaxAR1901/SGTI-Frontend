import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '@/shared/hooks'
import { catalogService } from '../data/catalog.service'
import { CATEGORIES, getCategory } from '../data/categories.data'
import type { CatalogFilters, CategoryId, SortKey } from '../model/catalog.types'
import { useAsync } from './useAsync'

export const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'relevance', label: 'Recomendados' },
  { value: 'price-asc', label: 'Precio: menor a mayor' },
  { value: 'price-desc', label: 'Precio: mayor a menor' },
  { value: 'turnaround', label: 'Entrega más rápida' },
]

/** Los filtros viven en la URL: compartibles y compatibles con "atrás". */
export function useCatalogVM() {
  const [params, setParams] = useSearchParams()

  const filters: CatalogFilters = {
    q: params.get('q') ?? '',
    category: (params.get('categoria') as CategoryId) ?? '',
    sort: (params.get('orden') as SortKey) ?? 'relevance',
    fastOnly: params.get('rapido') === '1',
  }
  const debouncedQ = useDebounce(filters.q, 250)

  const { data: products = [], loading } = useAsync(
    () => catalogService.list({ ...filters, q: debouncedQ }),
    [debouncedQ, filters.category, filters.sort, filters.fastOnly],
  )

  const update = (patch: Record<string, string | null>) => {
    const next = new URLSearchParams(params)
    Object.entries(patch).forEach(([k, v]) => (v ? next.set(k, v) : next.delete(k)))
    setParams(next, { replace: true })
  }

  const category = filters.category ? getCategory(filters.category) : undefined
  const activeCount = useMemo(
    () => [filters.category, filters.q, filters.fastOnly].filter(Boolean).length,
    [filters.category, filters.q, filters.fastOnly],
  )

  return {
    filters,
    products,
    loading,
    category,
    categories: CATEGORIES,
    activeCount,
    setCategory: (id: string) => update({ categoria: id || null }),
    setQuery: (q: string) => update({ q: q || null }),
    setSort: (s: SortKey) => update({ orden: s === 'relevance' ? null : s }),
    setFastOnly: (v: boolean) => update({ rapido: v ? '1' : null }),
    clear: () => setParams(new URLSearchParams(), { replace: true }),
  }
}
