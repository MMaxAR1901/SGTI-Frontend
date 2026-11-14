import type { FormEvent } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/cn'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onSubmit: (e: FormEvent) => void
  className?: string
}

export function SearchBar({ value, onChange, onSubmit, className }: SearchBarProps) {
  return (
    <form role="search" onSubmit={onSubmit} className={cn('relative', className)}>
      <label htmlFor="site-search" className="sr-only">Buscar productos</label>
      <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" aria-hidden />
      <input
        id="site-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Busca tarjetas, lonas, stickers…"
        className="h-10 w-full rounded-md border border-line-strong bg-paper pr-3 pl-9 text-sm placeholder:text-muted/80 focus:border-ink focus:bg-surface focus:outline-none"
      />
    </form>
  )
}
