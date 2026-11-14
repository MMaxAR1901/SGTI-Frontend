import { SearchX, SlidersHorizontal } from 'lucide-react'
import { PATHS } from '@/app/router/route-types'
import { pluralize } from '@/lib/format'
import { useDisclosure } from '@/shared/hooks'
import { Button, ButtonLink, Container, Drawer, EmptyState, PageHeader, Select } from '@/shared/ui'
import { CatalogFilters, ProductGrid } from './components'
import { SORT_OPTIONS, useCatalogVM } from '../vm/useCatalogVM'

export function CatalogPage() {
  const vm = useCatalogVM()
  const filtersDrawer = useDisclosure()

  const title = vm.filters.q ? `Resultados para “${vm.filters.q}”` : (vm.category?.name ?? 'Catálogo')
  const description = vm.category?.description ?? 'Todo lo que imprimimos, con precio por volumen y tiempos de entrega claros.'

  const filters = (
    <CatalogFilters
      categories={vm.categories}
      activeCategory={vm.filters.category}
      onCategory={(id) => {
        vm.setCategory(id)
        filtersDrawer.close()
      }}
      fastOnly={vm.filters.fastOnly}
      onFastOnly={vm.setFastOnly}
    />
  )

  return (
    <Container className="py-10">
      <PageHeader
        title={title}
        description={description}
        breadcrumbs={[{ label: 'Inicio', to: PATHS.home }, { label: 'Catálogo', to: vm.category ? PATHS.catalog : undefined }, ...(vm.category ? [{ label: vm.category.name }] : [])]}
      />

      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">{filters}</aside>

        <section aria-label="Productos">
          <div className="mb-5 flex items-center justify-between gap-3">
            <p className="text-sm text-muted" aria-live="polite">
              {vm.loading ? 'Buscando…' : pluralize(vm.products.length, 'producto')}
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="lg:hidden" leftIcon={<SlidersHorizontal className="size-4" />} onClick={filtersDrawer.open}>
                Filtros{vm.activeCount ? ` (${vm.activeCount})` : ''}
              </Button>
              <div className="w-52">
                <Select aria-label="Ordenar por" value={vm.filters.sort} onChange={(e) => vm.setSort(e.target.value as never)} options={SORT_OPTIONS} />
              </div>
            </div>
          </div>

          {!vm.loading && vm.products.length === 0 ? (
            <EmptyState
              icon={<SearchX />}
              title="No encontramos productos con esos filtros"
              description="Quita algún filtro o cuéntanos qué necesitas y te enviamos una cotización a la medida."
              action={
                <div className="flex gap-2">
                  <Button variant="outline" onClick={vm.clear}>Quitar filtros</Button>
                  <ButtonLink to={PATHS.quote}>Cotizar proyecto</ButtonLink>
                </div>
              }
            />
          ) : (
            <ProductGrid products={vm.products} loading={vm.loading} />
          )}
        </section>
      </div>

      <Drawer open={filtersDrawer.isOpen} onClose={filtersDrawer.close} title="Filtros" side="left">
        {filters}
      </Drawer>
    </Container>
  )
}
