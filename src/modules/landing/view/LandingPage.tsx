import { SECTION_IDS, anchor } from '../data/navigation.data'
import { CONTACT_LINKS } from '../vm/contact-links'
import { useLandingVM } from '../vm/useLandingVM'
import { SpecModal } from './components'
import {
  CtaBanner,
  HeroSection,
  ProcessSection,
  ServicesSection,
  TechnologySection,
  TrajectorySection,
} from './sections'

/**
 * Landing de SGTI (rediseño V2): composición de secciones.
 * Toda la lógica vive en `useLandingVM`. El banner final es el destino de "Cotizar proyecto"
 * y su CTA abre WhatsApp con el mensaje de cotización.
 */
export function LandingPage() {
  const vm = useLandingVM()
  const quoteHref = anchor(SECTION_IDS.quote)

  return (
    <>
      <HeroSection
        id={SECTION_IDS.home}
        hero={vm.hero}
        quoteHref={quoteHref}
        catalogHref={anchor(SECTION_IDS.catalog)}
      />
      <ServicesSection
        id={SECTION_IDS.catalog}
        services={vm.services}
        onOpenSpecs={vm.specModal.open}
      />
      <TechnologySection
        id={SECTION_IDS.technology}
        substrates={vm.substrates}
        datasheetHref={quoteHref}
      />
      <TrajectorySection id={SECTION_IDS.about} clients={vm.clients} />
      <ProcessSection steps={vm.process} />
      <CtaBanner
        id={SECTION_IDS.quote}
        title="¿Requieres maquila en volumen o desarrollos bajo norma?"
        description="Cotizaciones directas de taller para agencias, plantas industriales y proyectos corporativos."
        ctaLabel="Solicitar cotización"
        ctaHref={CONTACT_LINKS.whatsappQuote}
        external
      />

      <SpecModal vm={vm.specModal} />
    </>
  )
}
