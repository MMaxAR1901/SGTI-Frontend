import type { Client } from '../../model/landing.types'
import { Icon } from './Icon'

function ClientChip({ client }: { client: Client }) {
  return (
    <div className="group border-outline-variant/40 bg-surface-container-lowest hover:border-primary flex cursor-default items-center gap-3 rounded-xl border px-4 py-3 shadow-xs transition-all duration-200 sm:px-6 sm:py-4">
      <Icon
        name={client.icon}
        className="text-secondary group-hover:text-primary text-2xl transition-colors sm:text-3xl"
      />
      <div className="text-left">
        <div className="text-on-surface group-hover:text-primary text-xs font-bold tracking-wider uppercase transition-colors">
          {client.name}
        </div>
        <div className="text-secondary text-[10px] tracking-wide uppercase">{client.sector}</div>
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
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r ${fadeFromClassName} to-transparent sm:w-24 lg:w-48`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l ${fadeFromClassName} to-transparent sm:w-24 lg:w-48`}
      />
      {/* Dos copias idénticas: la animación desplaza -50% para un bucle sin saltos. */}
      <div className="animate-marquee flex w-max items-center gap-4 py-4 hover:[animation-play-state:paused] sm:gap-8">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center gap-4 sm:gap-8"
            aria-hidden={copy === 1}
          >
            {clients.map((client) => (
              <ClientChip key={client.name} client={client} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
