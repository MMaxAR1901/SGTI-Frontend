import { useMemo, useState } from 'react'
import { PRODUCTS, type Product } from '@/modules/catalog'
import { toast } from '@/shared/ui'

/** En modo demo las ediciones viven en memoria; conecta aquí el endpoint de productos. */
export function useAdminProductsVM() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS)
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    return term ? products.filter((p) => p.name.toLowerCase().includes(term)) : products
  }, [products, q])

  const toggleActive = (p: Product) => {
    setProducts((list) => list.map((x) => (x.id === p.id ? { ...x, active: !x.active } : x)))
    toast.info(`${p.name} ${p.active ? 'oculto de' : 'visible en'} la tienda`)
  }

  return { products: filtered, total: products.length, q, setQ, toggleActive }
}
