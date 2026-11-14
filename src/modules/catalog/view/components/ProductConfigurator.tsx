import { formatCurrency } from '@/lib/format'
import { OptionGroup, QuantityStepper } from '@/shared/ui'
import { tierFor } from '../../data/pricing'
import type { OptionSelection, Product } from '../../model/catalog.types'

interface ProductConfiguratorProps {
  product: Product
  selection: OptionSelection
  onOption: (groupId: string, choiceId: string) => void
  quantity: number
  onQuantity: (q: number) => void
}

/** Configurador de opciones + cantidad con precios por volumen visibles. */
export function ProductConfigurator({ product, selection, onOption, quantity, onQuantity }: ProductConfiguratorProps) {
  const isCustomQty = !product.quantities.includes(quantity)
  return (
    <div className="flex flex-col gap-6">
      {product.options.map((opt) => (
        <OptionGroup
          key={opt.id}
          legend={opt.label}
          name={opt.id}
          value={selection[opt.id] ?? ''}
          onChange={(v) => onOption(opt.id, v)}
          columns={opt.choices.length === 3 ? 3 : 2}
          options={opt.choices.map((c) => ({
            value: c.id,
            label: c.label,
            description: c.description,
            aside: c.factor && c.factor !== 1 ? `${c.factor > 1 ? '+' : '−'}${Math.round(Math.abs(c.factor - 1) * 100)}%` : undefined,
          }))}
        />
      ))}

      {product.quantities.length > 1 && (
        <OptionGroup
          legend={`Cantidad (${product.unitLabel})`}
          name="quantity"
          value={isCustomQty ? '' : String(quantity)}
          onChange={(v) => onQuantity(Number(v))}
          columns={product.quantities.length >= 4 ? 4 : 3}
          options={product.quantities.map((q) => ({
            value: String(q),
            label: q.toLocaleString('es-MX'),
            aside: `${formatCurrency(tierFor(product, q).unitPrice)} c/u`,
          }))}
        />
      )}

      {product.quantities.length > 1 && (
        <div className="flex items-center justify-between gap-4 rounded-md bg-paper px-3 py-2.5">
          <span className="text-sm text-muted">¿Otra cantidad?</span>
          <QuantityStepper value={quantity} onChange={onQuantity} min={product.quantities[0]} step={product.quantities[0]} size="sm" />
        </div>
      )}
    </div>
  )
}
