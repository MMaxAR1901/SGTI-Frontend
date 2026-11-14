import type { Product } from '../../model/catalog.types'
import { ProductCard, ProductCardSkeleton } from './ProductCard'

export function ProductGrid({ products, loading, skeletons = 6 }: { products: Product[]; loading?: boolean; skeletons?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {loading
        ? Array.from({ length: skeletons }, (_, i) => <ProductCardSkeleton key={i} />)
        : products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}
