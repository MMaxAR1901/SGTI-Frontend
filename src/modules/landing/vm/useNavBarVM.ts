import { useEffect, useState } from 'react'
import { MAIN_NAV, SECTION_IDS } from '../data/navigation.data'
import { CONTACT_LINKS } from './contact-links'

/** Marca como activo el enlace de la sección visible (scroll-spy). */
function useActiveSection(ids: string[], initial: string) {
  const [active, setActive] = useState(initial)

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [ids])

  return active
}

const NAV_IDS = MAIN_NAV.map((l) => l.href.replace('#', ''))

export function useNavBarVM() {
  const activeId = useActiveSection(NAV_IDS, SECTION_IDS.home)
  return {
    links: MAIN_NAV.map((link) => ({ ...link, active: link.href === `#${activeId}` })),
    phone: CONTACT_LINKS.phone,
    email: CONTACT_LINKS.quotesEmail,
    quoteHref: `#${SECTION_IDS.quote}`,
  }
}
