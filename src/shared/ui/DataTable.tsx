import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface Column<T> {
  key: string
  header: string
  render: (row: T) => ReactNode
  align?: 'left' | 'right' | 'center'
  className?: string
}

interface DataTableProps<T> {
  columns: Column<T>[]
  rows: T[]
  rowKey: (row: T) => string
  empty?: ReactNode
  onRowClick?: (row: T) => void
}

const alignClass = { left: 'text-left', right: 'text-right', center: 'text-center' }

/** Tabla genérica tipada. Define columnas una vez y reutilízala en admin, pedidos, cotizaciones… */
export function DataTable<T>({ columns, rows, rowKey, empty, onRowClick }: DataTableProps<T>) {
  if (rows.length === 0 && empty) return <>{empty}</>
  return (
    <div className="overflow-x-auto rounded-lg border border-line bg-surface">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-line bg-paper/60">
            {columns.map((c) => (
              <th key={c.key} scope="col" className={cn('px-4 py-2.5 font-medium text-muted', alignClass[c.align ?? 'left'])}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={rowKey(row)}
              onClick={onRowClick ? () => onRowClick(row) : undefined}
              className={cn('border-b border-line last:border-0', onRowClick && 'cursor-pointer hover:bg-paper/60')}
            >
              {columns.map((c) => (
                <td key={c.key} className={cn('px-4 py-3', alignClass[c.align ?? 'left'], c.className)}>
                  {c.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
