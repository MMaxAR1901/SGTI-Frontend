import type { ImageAsset } from '../../model/landing.types'

interface GalleryCardProps {
  image: ImageAsset
  title: string
  description: string
}

/** Muestra de material: foto + título + descripción corta. */
export function GalleryCard({ image, title, description }: GalleryCardProps) {
  return (
    <div className="border-outline-variant/40 bg-surface-container-lowest overflow-hidden rounded-xl border shadow-xs">
      <div className="bg-surface-container h-48 w-full overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="text-on-surface font-bold">{title}</h4>
        <p className="text-secondary mt-1 text-xs">{description}</p>
      </div>
    </div>
  )
}
