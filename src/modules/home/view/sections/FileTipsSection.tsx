import { Container } from '@/shared/ui'
import { FILE_TIPS } from '../../data/home.data'

export function FileTipsSection() {
  return (
    <section className="py-16">
      <Container className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-3xl font-semibold">Prepara tu archivo</h2>
          <p className="mt-3 text-muted">Si algo no cumple, te avisamos en la prueba digital y lo corregimos juntos.</p>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          {FILE_TIPS.map((tip) => (
            <div key={tip.title} className="rounded-lg border border-line bg-surface p-5">
              <dt className="font-semibold">{tip.title}</dt>
              <dd className="mt-1 text-sm text-muted">{tip.body}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
