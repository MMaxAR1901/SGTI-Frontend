import { Clock3, MessageCircle, Ruler } from 'lucide-react'
import { PATHS } from '@/app/router/route-types'
import { useTenant } from '@/app/tenant'
import { Button, ButtonLink, Card, Container, CropMarks, FileDrop, Input, InkStrip, PageHeader, Select, Textarea } from '@/shared/ui'
import { PROJECT_TYPES, useQuoteVM } from '../vm/useQuoteVM'

export function QuotePage() {
  const vm = useQuoteVM()
  const { tenant } = useTenant()

  if (vm.submitted) {
    return (
      <Container size="md" className="py-16">
        <div className="relative mx-auto max-w-xl animate-sheet-in bg-surface px-8 py-12 shadow-sheet sm:px-12">
          <CropMarks inset={-14} />
          <InkStrip />
          <h1 className="mt-6 text-3xl font-semibold">Solicitud {vm.submitted.id} enviada</h1>
          <p className="mt-4 text-muted">
            Un asesor te enviará la cotización a <b className="text-ink">{vm.submitted.email}</b> en menos de 24 horas hábiles.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to={PATHS.catalog}>Ver catálogo</ButtonLink>
            <Button variant="outline" onClick={vm.restart}>Cotizar otro proyecto</Button>
          </div>
        </div>
      </Container>
    )
  }

  const { form } = vm

  return (
    <Container className="py-10">
      <PageHeader
        title="Cotiza un proyecto a la medida"
        description="Para pedidos grandes, materiales especiales o algo que no ves en el catálogo. Responde lo que sepas; un asesor completa el resto contigo."
        breadcrumbs={[{ label: 'Inicio', to: PATHS.home }, { label: 'Cotizar proyecto' }]}
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <Card as="section">
          <form onSubmit={vm.onSubmit} noValidate className="flex flex-col gap-8">
            <fieldset className="flex flex-col gap-4">
              <legend className="mb-2 text-lg font-semibold">El proyecto</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <Select label="Tipo de proyecto" placeholder="Elige una opción" options={PROJECT_TYPES} required {...form.bind('projectType')} />
                <Input label="Cantidad aproximada" placeholder="p. ej. 5,000 piezas" required {...form.bind('quantity')} />
                <Input label="Medidas" placeholder="p. ej. 60 × 90 cm" hint="Opcional" {...form.bind('dimensions')} />
                <Input label="¿Para cuándo lo necesitas?" type="date" min={vm.minDate} hint="Opcional" {...form.bind('dueDate')} />
              </div>
              <Textarea label="Descripción" placeholder="Material, acabados, uso (interior o exterior), si requiere instalación…" required rows={5} {...form.bind('description')} />
              <FileDrop label="Referencias o archivos" hint="Bocetos, fotos del lugar, logotipos · opcional" files={vm.files} onChange={vm.setFiles} />
            </fieldset>

            <fieldset className="flex flex-col gap-4">
              <legend className="mb-2 text-lg font-semibold">Tus datos</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Nombre" autoComplete="name" required {...form.bind('name')} />
                <Input label="Empresa" autoComplete="organization" hint="Opcional" {...form.bind('company')} />
                <Input label="Correo" type="email" autoComplete="email" required {...form.bind('email')} />
                <Input label="Teléfono" type="tel" autoComplete="tel" hint="Opcional, para dudas rápidas" {...form.bind('phone')} />
              </div>
            </fieldset>

            <div className="flex justify-end">
              <Button type="submit" variant="accent" size="lg" loading={form.submitting}>Enviar solicitud</Button>
            </div>
          </form>
        </Card>

        <aside className="flex flex-col gap-6 lg:sticky lg:top-40 lg:self-start">
          <ul className="flex flex-col gap-5 text-sm">
            <li className="flex gap-3"><Clock3 className="mt-0.5 size-5 shrink-0 text-cyan-ink" aria-hidden /><span><b className="block">Respuesta en 24 h hábiles</b><span className="text-muted">Con precio, tiempo de producción y opciones de material.</span></span></li>
            <li className="flex gap-3"><Ruler className="mt-0.5 size-5 shrink-0 text-cyan-ink" aria-hidden /><span><b className="block">Visita técnica</b><span className="text-muted">Medimos el espacio para rotulación y señalética en CDMX y área metropolitana.</span></span></li>
          </ul>
          <a href={`https://wa.me/${tenant.contact.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-line bg-surface p-4 text-sm hover:border-ink">
            <MessageCircle className="size-5 text-success" aria-hidden />
            <span><b className="block">¿Prefieres hablarlo?</b><span className="text-muted">Escríbenos por WhatsApp</span></span>
          </a>
        </aside>
      </div>
    </Container>
  )
}
