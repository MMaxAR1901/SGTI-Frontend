import { Link } from 'react-router-dom'
import { PATHS } from '@/app/router/route-types'
import { ProductGrid, type Product } from '@/modules/catalog'
import { Container } from '@/shared/ui'

export function FeaturedSection({ products, loading }: { products: Product[]; loading: boolean }) {
  return (
    <section className="py-16">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold">Lo que más se pide</h2>
          <Link to={PATHS.catalog} className="text-sm font-medium underline underline-offset-4">Ver todo el catálogo</Link>
        </div>
        <div className="mt-8">
          <ProductGrid products={products.slice(0, 6)} loading={loading} skeletons={3} />
        </div>
      </Container>
    </section>
  )
}
