import { cn } from '@/lib/cn'
import { Checkbox } from '@/shared/ui'
import type { Category } from '../../model/catalog.types'

interface CatalogFiltersProps {
  categories: Category[]
  activeCategory: string
  onCategory: (id: string) => void
  fastOnly: boolean
  onFastOnly: (v: boolean) => void
}

export function CatalogFilters({ categories, activeCategory, onCategory, fastOnly, onFastOnly }: CatalogFiltersProps) {
  const item = (active: boolean) =>
    cn(
      'flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors',
      active ? 'bg-ink text-white' : 'text-ink hover:bg-ink/5',
    )
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="mb-2 px-3 font-sans text-sm font-semibold">Categoría</h2>
        <ul className="flex flex-col gap-0.5">
          <li>
            <button type="button" className={item(!activeCategory)} onClick={() => onCategory('')}>Todos los productos</button>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <button type="button" className={item(activeCategory === c.id)} onClick={() => onCategory(c.id)} aria-pressed={activeCategory === c.id}>
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-3">
        <h2 className="mb-3 font-sans text-sm font-semibold">Entrega</h2>
        <Checkbox label="Listo en 48 h o menos" checked={fastOnly} onChange={(e) => onFastOnly(e.target.checked)} />
      </div>
    </div>
  )
}
