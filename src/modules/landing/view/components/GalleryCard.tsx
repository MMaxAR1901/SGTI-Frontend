import type { ImageAsset } from '../../model/landing.types'

interface GalleryCardProps {
  image: ImageAsset
  title: string
  description: string
}

/** Muestra de material: foto + título + descripción corta. */
export function GalleryCard({ image, title, description }: GalleryCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-outline-variant/40 bg-surface-container-lowest shadow-xs">
      <div className="h-48 w-full overflow-hidden bg-surface-container">
        <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <h4 className="font-bold text-on-surface">{title}</h4>
        <p className="mt-1 text-xs text-secondary">{description}</p>
      </div>
    </div>
  )
}
