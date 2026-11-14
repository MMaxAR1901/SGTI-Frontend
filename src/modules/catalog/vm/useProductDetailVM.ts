import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { analytics } from '@/lib/analytics'
import { useCart } from '@/modules/cart'
import { toast } from '@/shared/ui'
import { catalogService } from '../data/catalog.service'
import { defaultSelection, describeSelection, quotePrice } from '../data/pricing'
import { getCategory } from '../data/categories.data'
import type { OptionSelection, Product } from '../model/catalog.types'
import { useAsync } from './useAsync'

export function useProductDetailVM() {
  const { slug = '' } = useParams()
  const { data: product, loading } = useAsync(() => catalogService.bySlug(slug), [slug])
  const { data: related = [] } = useAsync(
    () => (product ? catalogService.related(product) : Promise.resolve([] as Product[])),
    [product?.id],
  )

  const [selection, setSelection] = useState<OptionSelection>({})
  const [quantity, setQuantity] = useState(0)
  const [artwork, setArtwork] = useState<File[]>([])
  const [artworkLater, setArtworkLater] = useState(false)

  // Reinicia configuración al cambiar de producto.
  useEffect(() => {
    if (!product) return
    setSelection(defaultSelection(product))
    setQuantity(product.quantities[0])
    setArtwork([])
    setArtworkLater(false)
    analytics.track('view_item', { id: product.id, name: product.name })
  }, [product])

  const price = useMemo(
    () => (product && quantity ? quotePrice(product, quantity, selection) : undefined),
    [product, quantity, selection],
  )
  const savings = price ? Math.max(0, (price.baseUnitPrice - price.unitPrice) * quantity) : 0

  const { addItem } = useCart()
  const needsArtwork = Boolean(product?.requiresArtwork && artwork.length === 0 && !artworkLater)

  const addToCart = () => {
    if (!product || !price) return
    if (needsArtwork) {
      toast.error('Sube tu archivo o marca que lo enviarás después.')
      return
    }
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      category: product.category,
      tint: product.tint,
      quantity,
      unitLabel: product.unitLabel,
      selection,
      selectionLabels: describeSelection(product, selection),
      unitPrice: price.unitPrice,
      total: price.total,
      artworkNames: artwork.map((f) => f.name),
    })
    toast.success(`${product.name} se agregó al carrito`)
  }

  return {
    product,
    loading,
    related,
    category: product ? getCategory(product.category) : undefined,
    selection,
    setOption: (groupId: string, choiceId: string) => setSelection((s) => ({ ...s, [groupId]: choiceId })),
    quantity,
    setQuantity,
    price,
    savings,
    artwork,
    setArtwork,
    artworkLater,
    setArtworkLater,
    needsArtwork,
    addToCart,
  }
}
