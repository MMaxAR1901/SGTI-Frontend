import { Link, useSearchParams } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { categoryNav } from '../config/navigation'

export function CategoryNav() {
  const [params] = useSearchParams()
  const active = params.get('categoria')
  return (
    <nav aria-label="Categorías" className="border-t border-line">
      <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 sm:px-6 lg:px-8">
        {categoryNav.map((item) => {
          const isActive = active && item.to.endsWith(`=${active}`)
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                className={cn(
                  'block border-b-2 px-2.5 py-2.5 text-sm whitespace-nowrap transition-colors',
                  isActive ? 'border-magenta text-ink' : 'border-transparent text-muted hover:text-ink',
                )}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
