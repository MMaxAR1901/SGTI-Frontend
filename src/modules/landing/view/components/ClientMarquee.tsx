import type { Client } from '../../model/landing.types'
import { Icon } from './Icon'
import { MarqueeFades } from './MarqueeFades'

function ClientChip({ client }: { client: Client }) {
  return (
    <li className="border-line flex shrink-0 cursor-default items-center gap-3 rounded-xl border bg-white px-4 py-3 sm:px-6 sm:py-4">
      <Icon name={client.icon} className="text-primary text-[28px]" />
      <span className="flex flex-col gap-0.5 text-left">
        <span className="text-on-surface text-xs leading-4 font-bold tracking-[0.08em] whitespace-nowrap uppercase">
          {client.name}
        </span>
        <span className="text-secondary text-[11px] leading-[14px] tracking-[0.06em] whitespace-nowrap uppercase">
          {client.sector}
        </span>
      </span>
    </li>
  )
}

interface ClientMarqueeProps {
  clients: Client[]
  /** Clase `from-*` del desvanecido lateral; debe coincidir con el fondo de la sección. */
  fadeFromClassName?: string
}

/** Carrusel infinito de clientes (20 s por vuelta). Se pausa al pasar el cursor. */
export function ClientMarquee({ clients, fadeFromClassName = 'from-background' }: ClientMarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <MarqueeFades fromClassName={fadeFromClassName} />
      {/* Dos copias idénticas con espacio final propio: el -50% da un bucle continuo. */}
      <div className="animate-marquee flex w-max items-center py-4 hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center gap-4 pr-4 sm:gap-8 sm:pr-8"
            aria-hidden={copy === 1 || undefined}
          >
            {clients.map((client) => (
              <ClientChip key={client.name} client={client} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
