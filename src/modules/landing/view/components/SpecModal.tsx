import { useEffect, useRef } from 'react'
import type { SpecModalVM } from '../../vm/useSpecModalVM'
import { Button } from './Button'
import { Carousel } from './Carousel'
import { Icon } from './Icon'

function SubHeading({ icon, children }: { icon: string; children: string }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <Icon name={icon} className="text-xl text-primary" />
      <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">{children}</h4>
    </div>
  )
}

interface SpecModalProps {
  vm: SpecModalVM
}

/** Ficha técnica de un servicio: carrusel, especificaciones, variantes y CTA a WhatsApp. */
export function SpecModal({ vm }: SpecModalProps) {
  const { isOpen, service, close, carousel, images, specs, whatsappUrl, whatsappLabel } = vm
  const closeRef = useRef<HTMLButtonElement>(null)

  // Mueve el foco al abrir para que Esc / flechas y lectores de pantalla funcionen de inmediato.
  useEffect(() => {
    if (isOpen) closeRef.current?.focus()
  }, [isOpen, service?.id])

  if (!isOpen || !service) return null
  const { detail } = service

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="spec-modal-title"
      onClick={close}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-inverse-surface/70 p-4 backdrop-blur-sm sm:p-6 md:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto flex max-h-[92vh] w-full max-w-4xl animate-modal-in flex-col overflow-hidden rounded-2xl border border-outline-variant/60 bg-surface-container-lowest shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-start justify-between gap-4 border-b border-outline-variant/40 bg-surface-container-lowest px-6 py-5">
          <div>
            <div className="mb-1.5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
                {detail.category}
              </span>
              {service.featured && (
                <span className="rounded-full bg-primary-container/20 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  Destacado
                </span>
              )}
            </div>
            <h3
              id="spec-modal-title"
              className="font-headline-lg text-headline-lg font-bold leading-tight text-on-surface"
            >
              {detail.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            aria-label="Cerrar ventana"
            onClick={close}
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg text-secondary transition-colors hover:bg-surface-container hover:text-on-surface"
          >
            <Icon name="close" className="text-2xl" />
          </button>
        </div>

        {/* Body */}
        <div className="custom-scroll flex-1 space-y-8 overflow-y-auto p-6 lg:p-8">
          <Carousel
            images={images}
            index={carousel.index}
            onPrev={carousel.prev}
            onNext={carousel.next}
            onSelect={carousel.goTo}
          />

          <div>
            <SubHeading icon="tune">Especificaciones de Fabricación</SubHeading>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {specs.map((spec) => (
                <div
                  key={spec.key}
                  className="flex items-start gap-3.5 rounded-xl border border-outline-variant/40 bg-surface-container-low/70 p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-outline-variant/30 bg-surface-container-lowest text-primary">
                    <Icon name={spec.icon} className="text-lg" />
                  </div>
                  <div>
                    <span className="block font-label-tech text-[11px] font-bold uppercase leading-[14px] tracking-wider text-secondary">
                      {spec.label}
                    </span>
                    <p className="mt-0.5 text-body-sm font-medium text-on-surface">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SubHeading icon="view_carousel">Variantes de Configuración de Trabajo</SubHeading>
            <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
              {detail.variants.map((variant, i) => (
                <div
                  key={variant.title}
                  className="flex flex-col justify-between rounded-lg border border-outline-variant/40 bg-surface-container-low p-3.5"
                >
                  <div>
                    <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-primary">
                      Variante {i + 1}
                    </span>
                    <h5 className="mb-1 text-body-sm font-bold text-on-surface">{variant.title}</h5>
                    <p className="text-xs leading-normal text-secondary">{variant.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3.5 rounded-xl border border-primary/25 bg-primary/5 p-4 sm:p-5">
            <Icon name="info" filled className="mt-0.5 shrink-0 text-2xl text-primary" />
            <div>
              <span className="mb-1 block font-label-tech text-label-tech font-bold uppercase tracking-wider text-primary">
                Aclaración Técnica de Planta
              </span>
              <p className="text-body-sm leading-relaxed text-on-surface">
                <span className="font-bold text-on-surface">Nota:</span> Todos los diseños, medidas y
                acabados son 100% a petición del cliente y previa consulta con nuestros especialistas de
                planta para garantizar tolerancias y durabilidad.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 z-20 flex flex-col-reverse items-center justify-between gap-3 border-t border-outline-variant/40 bg-surface-container-lowest px-6 py-4 sm:flex-row">
          <Button variant="ghost" onClick={close} className="w-full sm:w-auto">
            Cerrar
          </Button>
          <Button
            href={whatsappUrl}
            external
            leadingIcon="chat"
            leadingIconFilled
            leadingIconClassName="text-lg"
            trailingIcon="arrow_outward"
            trailingIconClassName="text-sm"
            className="w-full gap-2.5 px-6 shadow-xs sm:w-auto"
          >
            {whatsappLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}
