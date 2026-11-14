import { cn } from '@/lib/cn'
import type { ServiceImage } from '../../model/landing.types'
import { Icon } from './Icon'

interface CarouselProps {
  images: ServiceImage[]
  index: number
  onPrev: () => void
  onNext: () => void
  onSelect: (index: number) => void
  captionLabel?: string
}

const arrowClasses =
  'absolute top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-inverse-surface/75 text-inverse-on-surface shadow-md backdrop-blur-md transition-all hover:scale-105 hover:bg-inverse-surface active:scale-95'

/** Carrusel de imágenes controlado (el estado vive en el ViewModel). */
export function Carousel({
  images,
  index,
  onPrev,
  onNext,
  onSelect,
  captionLabel = 'Muestra de Acabado',
}: CarouselProps) {
  const current = images[index]
  if (!current) return null

  return (
    <div
      className="group/carousel relative overflow-hidden rounded-xl border border-outline-variant/40 bg-surface-container-low shadow-inner"
      aria-roledescription="carrusel"
    >
      <div className="relative h-64 w-full overflow-hidden bg-black/5 sm:h-80 md:h-96">
        <img
          key={current.url + index}
          src={current.url}
          alt={current.caption}
          className="h-full w-full object-cover transition-all duration-300"
        />

        {images.length > 1 && (
          <>
            <button type="button" aria-label="Imagen anterior" onClick={onPrev} className={cn(arrowClasses, 'left-3')}>
              <Icon name="chevron_left" className="text-xl" />
            </button>
            <button type="button" aria-label="Siguiente imagen" onClick={onNext} className={cn(arrowClasses, 'right-3')}>
              <Icon name="chevron_right" className="text-xl" />
            </button>
          </>
        )}

        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start justify-between gap-3 bg-linear-to-t from-inverse-surface/90 via-inverse-surface/60 to-transparent p-4 text-inverse-on-surface sm:flex-row sm:items-center">
          <div>
            <span className="block font-label-tech text-[10px] font-bold uppercase leading-[14px] tracking-wider text-primary-fixed">
              {captionLabel}
            </span>
            <p className="mt-0.5 text-body-sm font-semibold text-surface-container-lowest" aria-live="polite">
              {current.caption}
            </p>
          </div>
          <div className="flex items-center gap-1.5 self-center sm:self-auto">
            {images.map((img, i) => (
              <button
                key={img.url + i}
                type="button"
                aria-label={`Ir a la imagen ${i + 1}`}
                aria-current={i === index}
                onClick={() => onSelect(i)}
                className={cn(
                  'h-2.5 cursor-pointer rounded-full transition-all',
                  i === index
                    ? 'w-6 bg-primary-container'
                    : 'w-2.5 bg-surface-container-lowest/60 hover:bg-surface-container-lowest',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
