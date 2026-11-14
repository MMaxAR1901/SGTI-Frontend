import { promoMessages } from '../data/layout.data'

export function PromoBar() {
  return (
    <div className="bg-ink text-white">
      <ul className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-4 py-1.5 text-[13px]">
        {promoMessages.map((m, i) => (
          <li key={m} className={i > 0 ? 'hidden sm:block' : undefined}>{m}</li>
        ))}
      </ul>
    </div>
  )
}
