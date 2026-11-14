import { useEffect, useState } from 'react'
import { CONTACT } from '@/shared/config/contact.config'
import { MAIN_NAV, SECTION_IDS } from '../data/navigation.data'
import { CONTACT_LINKS } from './contact-links'
import { useMobileMenu } from './useMobileMenu'

/**
 * Marca como activo el enlace de la sección visible (scroll-spy).
 * Busca las secciones en cada scroll (no al montar), porque la página se carga en diferido
 * dentro del layout y sus secciones aún no existen cuando el header se monta.
 */
function useActiveSection(ids: string[], initial: string) {
  const [active, setActive] = useState(initial)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const probe = window.innerHeight * 0.4
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      let current: string | null = null
      let lastTop = -Infinity

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const { top, bottom } = el.getBoundingClientRect()
        if (atBottom && bottom <= window.innerHeight + 1 && top > lastTop) {
          // Al final de la página gana la sección más baja visible (p. ej. el footer).
          current = id
          lastTop = top
        } else if (!atBottom && top <= probe && bottom > probe) {
          current = id
        }
      }
      if (current) setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return active
}

const NAV_IDS = MAIN_NAV.map((l) => l.href.replace('#', ''))

export function useNavBarVM() {
  const activeId = useActiveSection(NAV_IDS, SECTION_IDS.home)
  const menu = useMobileMenu()

  return {
    links: MAIN_NAV.map((link) => ({ ...link, active: link.href === `#${activeId}` })),
    phone: CONTACT_LINKS.phone,
    email: CONTACT_LINKS.quotesEmail,
    whatsapp: CONTACT_LINKS.whatsappQuote,
    businessHours: CONTACT.businessHours,
    quoteHref: `#${SECTION_IDS.quote}`,
    menu,
  }
}

export type NavBarVM = ReturnType<typeof useNavBarVM>
