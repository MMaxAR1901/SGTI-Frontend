import { Clock, FileCheck2, ShoppingBag, Truck } from 'lucide-react'
import { PATHS } from '@/app/router/route-types'
import { formatCurrency } from '@/lib/format'
import { Badge, Button, ButtonLink, Card, Checkbox, Container, CropMarks, EmptyState, FileDrop, PageLoader, PriceTag, Breadcrumbs } from '@/shared/ui'
import { ProductArt, ProductConfigurator, ProductGrid, turnaroundLabel } from './components'
import { useProductDetailVM } from '../vm/useProductDetailVM'

export function ProductDetailPage() {
  const vm = useProductDetailVM()

  if (vm.loading) return <PageLoader />
  if (!vm.product) {
    return (
      <Container className="py-16">
        <EmptyState
          title="Este producto ya no está disponible"
          description="Puede que lo hayamos retirado o cambiado de nombre. Revisa el catálogo para ver opciones similares."
          action={<ButtonLink to={PATHS.catalog}>Ir al catálogo</ButtonLink>}
        />
      </Container>
    )
  }

  const { product, category, price } = vm

  return (
    <Container className="py-8">
      <Breadcrumbs
        className="mb-6"
        items={[
          { label: 'Inicio', to: PATHS.home },
          { label: category?.name ?? 'Catálogo', to: category ? PATHS.category(category.id) : PATHS.catalog },
          { label: product.name },
        ]}
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        {/* Visual */}
        <div className="lg:sticky lg:top-40 lg:self-start">
          <div className="relative m-3 rounded-[2px] bg-surface">
            <CropMarks inset={-12} />
            <div className="aspect-[4/3]">
              <ProductArt variant={category?.art ?? 'cards'} tint={product.tint} />
            </div>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
            {product.specs.map((s) => (
              <div key={s.label}>
                <dt className="text-[13px] text-muted">{s.label}</dt>
                <dd className="text-sm font-medium">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Configuración */}
        <div>
          {product.badge && <Badge tone="yellow" className="mb-3">{product.badge}</Badge>}
          <h1 className="text-3xl font-semibold sm:text-4xl">{product.name}</h1>
          <p className="mt-3 max-w-prose text-muted">{product.description}</p>

          <div className="mt-8">
            <ProductConfigurator product={product} selection={vm.selection} onOption={vm.setOption} quantity={vm.quantity} onQuantity={vm.setQuantity} />
          </div>

          {product.requiresArtwork && (
            <div className="mt-8 flex flex-col gap-3">
              <FileDrop
                label="Tu archivo de impresión"
                hint="PDF, AI, PSD, PNG o JPG · máx. 50 MB"
                accept=".pdf,.ai,.psd,.png,.jpg,.jpeg,.svg,.eps"
                files={vm.artwork}
                onChange={vm.setArtwork}
              />
              <Checkbox
                label="Enviaré mi archivo después"
                description="Te pediremos el archivo al confirmar tu pedido. La producción inicia cuando lo apruebes."
                checked={vm.artworkLater}
                onChange={(e) => vm.setArtworkLater(e.target.checked)}
              />
            </div>
          )}

          <Card className="mt-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-muted">
                  {vm.quantity.toLocaleString('es-MX')} {product.unitLabel} · {price && formatCurrency(price.unitPrice)} c/u
                </p>
                {price && <PriceTag amount={price.total} size="lg" />}
                {vm.savings > 0 && <p className="mt-1 text-sm text-success">Ahorras {formatCurrency(vm.savings)} por volumen</p>}
              </div>
            </div>
            <Button variant="accent" size="lg" fullWidth className="mt-5" leftIcon={<ShoppingBag className="size-5" />} onClick={vm.addToCart}>
              Agregar al carrito
            </Button>
            <ul className="mt-5 flex flex-col gap-2 text-sm text-muted">
              <li className="flex items-center gap-2"><Clock className="size-4" aria-hidden /> {turnaroundLabel(product.turnaroundDays)} después de aprobar la prueba</li>
              <li className="flex items-center gap-2"><FileCheck2 className="size-4" aria-hidden /> Revisión de archivo y prueba digital incluidas</li>
              <li className="flex items-center gap-2"><Truck className="size-4" aria-hidden /> Envío a todo México o recolección en sucursal</li>
            </ul>
          </Card>
        </div>
      </div>

      {vm.related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 text-2xl font-semibold">También en {category?.name.toLowerCase()}</h2>
          <ProductGrid products={vm.related} />
        </section>
      )}
    </Container>
  )
}
