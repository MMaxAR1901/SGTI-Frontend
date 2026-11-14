import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { PATHS } from '@/app/router/route-types'
import { Badge, PriceTag } from '@/shared/ui'
import { getCategory } from '../../data/categories.data'
import { startingPrice } from '../../data/pricing'
import type { Product } from '../../model/catalog.types'
import { ProductArt } from './ProductArt'
import { turnaroundLabel } from './turnaround'

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category)
  return (
    <Link
      to={PATHS.product(product.slug)}
      className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors hover:border-ink"
    >
      <div className="relative aspect-[4/3] bg-paper">
        <ProductArt variant={category?.art ?? 'cards'} tint={product.tint} />
        {product.badge && (
          <Badge tone="yellow" className="absolute top-3 left-3">{product.badge}</Badge>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="text-[13px] text-muted">{category?.name}</p>
        <h3 className="font-sans text-[15px] leading-snug font-semibold group-hover:underline group-hover:underline-offset-2">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm text-muted">{product.summary}</p>
        <div className="mt-auto flex items-end justify-between pt-3">
          <span className="flex flex-col">
            <span className="text-xs text-muted">
              {product.quantities[0] === 1 ? 'Desde' : `${product.quantities[0].toLocaleString('es-MX')} ${product.unitLabel}, desde`}
            </span>
            <PriceTag amount={startingPrice(product)} />
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Clock className="size-3.5" aria-hidden /> {turnaroundLabel(product.turnaroundDays)}
          </span>
        </div>
      </div>
    </Link>
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-surface">
      <div className="aspect-[4/3] animate-pulse bg-ink/6" />
      <div className="flex flex-col gap-2 p-4">
        <div className="h-3 w-1/3 animate-pulse rounded bg-ink/8" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-ink/8" />
        <div className="h-3 w-full animate-pulse rounded bg-ink/8" />
        <div className="mt-3 h-5 w-1/4 animate-pulse rounded bg-ink/8" />
      </div>
    </div>
  )
}
