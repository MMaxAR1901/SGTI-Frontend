import { Link } from 'react-router-dom'
import { PATHS } from '@/app/router/route-types'
import { ProductArt, type Category } from '@/modules/catalog'
import { Container } from '@/shared/ui'

const TINTS = ['#00a0dc', '#e5007d', '#ffb800', '#15181f']

export function CategoriesSection({ categories }: { categories: Category[] }) {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-semibold">¿Qué vas a imprimir?</h2>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {categories.map((c, i) => (
            <li key={c.id}>
              <Link to={PATHS.category(c.id)} className="group block rounded-lg border border-line bg-surface p-3 transition-colors hover:border-ink">
                <div className="aspect-[4/3] rounded-md bg-paper">
                  <ProductArt variant={c.art} tint={TINTS[i % TINTS.length]} />
                </div>
                <p className="mt-3 font-medium group-hover:underline group-hover:underline-offset-2">{c.name}</p>
                <p className="line-clamp-2 text-[13px] text-muted">{c.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
