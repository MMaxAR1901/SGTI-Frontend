import { cn } from '@/lib/cn'

/** Desvanecidos laterales de los carruseles infinitos. */
export function MarqueeFades({ fromClassName }: { fromClassName: string }) {
  const base = 'pointer-events-none absolute inset-y-0 z-10 w-12 to-transparent sm:w-24 lg:w-48'
  return (
    <>
      <div aria-hidden="true" className={cn(base, 'left-0 bg-linear-to-r', fromClassName)} />
      <div aria-hidden="true" className={cn(base, 'right-0 bg-linear-to-l', fromClassName)} />
    </>
  )
}
