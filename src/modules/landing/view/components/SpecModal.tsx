import { useEffect, useRef } from 'react'
import type { SpecModalVM } from '../../vm/useSpecModalVM'
import { Button } from './Button'
import { Carousel } from './Carousel'
import { Icon } from './Icon'

function SubHeading({ icon, children }: { icon: string; children: string }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <Icon name={icon} className="text-primary text-xl" />
      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">{children}</h4>
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
      className="bg-inverse-surface/70 fixed inset-0 z-50 flex items-end justify-center overflow-y-auto backdrop-blur-sm sm:items-center sm:p-6 md:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-modal-in border-outline-variant/60 bg-surface-container-lowest relative flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl border shadow-2xl sm:my-auto sm:max-h-[92vh] sm:rounded-2xl"
      >
        {/* Header */}
        <div className="border-outline-variant/40 bg-surface-container-lowest sticky top-0 z-20 flex items-start justify-between gap-4 border-b px-4 py-4 sm:px-6 sm:py-5">
          <div>
            <div className="mb-1.5 flex flex-wrap items-center gap-2">
              <span className="border-primary/20 bg-primary/10 text-primary inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wider uppercase">
                {detail.category}
              </span>
              {service.featured && (
                <span className="bg-primary-container/20 text-primary rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wider uppercase">
                  Destacado
                </span>
              )}
            </div>
            <h3
              id="spec-modal-title"
              className="font-headline-lg text-headline-md sm:text-headline-lg text-on-surface leading-tight font-bold"
            >
              {detail.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            aria-label="Cerrar ventana"
            onClick={close}
            className="text-secondary hover:bg-surface-container hover:text-on-surface flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg transition-colors"
          >
            <Icon name="close" className="text-2xl" />
          </button>
        </div>

        {/* Body */}
        <div className="custom-scroll flex-1 space-y-6 overflow-y-auto p-4 sm:space-y-8 sm:p-6 lg:p-8">
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
                  className="border-outline-variant/40 bg-surface-container-low/70 flex items-start gap-3.5 rounded-xl border p-4"
                >
                  <div className="border-outline-variant/30 bg-surface-container-lowest text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border">
                    <Icon name={spec.icon} className="text-lg" />
                  </div>
                  <div>
                    <span className="font-label-tech text-secondary block text-[11px] leading-[14px] font-bold tracking-wider uppercase">
                      {spec.label}
                    </span>
                    <p className="text-body-sm text-on-surface mt-0.5 font-medium">{spec.value}</p>
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
                  className="border-outline-variant/40 bg-surface-container-low flex flex-col justify-between rounded-lg border p-3.5"
                >
                  <div>
                    <span className="text-primary mb-1 block text-[10px] font-bold tracking-wider uppercase">
                      Variante {i + 1}
                    </span>
                    <h5 className="text-body-sm text-on-surface mb-1 font-bold">{variant.title}</h5>
                    <p className="text-secondary text-xs leading-normal">{variant.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-primary/25 bg-primary/5 flex items-start gap-3.5 rounded-xl border p-4 sm:p-5">
            <Icon name="info" filled className="text-primary mt-0.5 shrink-0 text-2xl" />
            <div>
              <span className="font-label-tech text-label-tech text-primary mb-1 block font-bold tracking-wider uppercase">
                Aclaración Técnica de Planta
              </span>
              <p className="text-body-sm text-on-surface leading-relaxed">
                <span className="text-on-surface font-bold">Nota:</span> Todos los diseños, medidas
                y acabados son 100% a petición del cliente y previa consulta con nuestros
                especialistas de planta para garantizar tolerancias y durabilidad.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-outline-variant/40 bg-surface-container-lowest sticky bottom-0 z-20 flex flex-col-reverse items-center justify-between gap-3 border-t px-4 py-3 sm:flex-row sm:px-6 sm:py-4">
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
