import type { Client } from '../../model/landing.types'
import { Icon } from './Icon'

function ClientChip({ client }: { client: Client }) {
  return (
    <div className="group flex cursor-default items-center gap-3 rounded-xl border border-outline-variant/40 bg-surface-container-lowest px-6 py-4 shadow-xs transition-all duration-200 hover:border-primary">
      <Icon
        name={client.icon}
        className="text-3xl text-secondary transition-colors group-hover:text-primary"
      />
      <div className="text-left">
        <div className="text-xs font-bold uppercase tracking-wider text-on-surface transition-colors group-hover:text-primary">
          {client.name}
        </div>
        <div className="text-[10px] uppercase tracking-wide text-secondary">{client.sector}</div>
      </div>
    </div>
  )
}

interface ClientMarqueeProps {
  clients: Client[]
  /** Color del degradado lateral; debe coincidir con el fondo de la sección. */
  fadeFromClassName?: string
}

/** Carrusel infinito de clientes. Se pausa al pasar el cursor. */
export function ClientMarquee({
  clients,
  fadeFromClassName = 'from-surface-container-low',
}: ClientMarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r ${fadeFromClassName} to-transparent lg:w-48`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l ${fadeFromClassName} to-transparent lg:w-48`}
      />
      {/* Dos copias idénticas: la animación desplaza -50% para un bucle sin saltos. */}
      <div className="flex w-max animate-marquee items-center gap-8 py-4 hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-8" aria-hidden={copy === 1}>
            {clients.map((client) => (
              <ClientChip key={client.name} client={client} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
