import { Container } from '@/shared/ui'
import { PROCESS_STEPS } from '../../data/home.data'

/** El proceso sí es secuencial: la numeración comunica orden real. */
export function ProcessSection() {
  return (
    <section className="border-y border-line bg-surface py-16">
      <Container>
        <h2 className="max-w-lg text-3xl font-semibold">Del archivo al pedido entregado, en cuatro pasos</h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.title} className="border-t-2 border-ink pt-4">
              <span className="font-display text-sm font-semibold text-magenta tabular-nums">Paso {i + 1}</span>
              <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
