import { PATHS } from '@/app/router/route-types'
import { ButtonLink, Container, CropMarks } from '@/shared/ui'

export function NotFoundPage() {
  return (
    <Container size="md" className="py-20">
      <div className="relative mx-auto max-w-lg bg-surface px-8 py-14 text-center shadow-sheet">
        <CropMarks inset={-14} />
        <p className="font-display text-7xl font-bold text-ink/15">404</p>
        <h1 className="mt-4 text-2xl font-semibold">Esta página no existe</h1>
        <p className="mt-2 text-muted">Puede que el enlace esté mal escrito o que la página se haya movido.</p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink to={PATHS.home}>Ir al inicio</ButtonLink>
          <ButtonLink to={PATHS.catalog} variant="outline">Ver catálogo</ButtonLink>
        </div>
      </div>
    </Container>
  )
}
