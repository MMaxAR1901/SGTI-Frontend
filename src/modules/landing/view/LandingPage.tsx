import { SECTION_IDS, anchor } from '../data/navigation.data'
import { CONTACT_LINKS } from '../vm/contact-links'
import { useLandingVM } from '../vm/useLandingVM'
import { SpecModal } from './components'
import {
  CtaBanner,
  GallerySection,
  HeroSection,
  QuoteSection,
  SectorsSection,
  ServicesSection,
  TechnologySection,
  TrajectorySection,
} from './sections'

/** Landing de SGTI: composición de secciones. Toda la lógica vive en `useLandingVM`. */
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
      <ServicesSection id={SECTION_IDS.catalog} services={vm.services} onOpenSpecs={vm.specModal.open} />
      <CtaBanner
        title="¿Requieres maquila en volumen o desarrollos bajo norma?"
        description="Cotizaciones directas de taller para agencias, plantas industriales y proyectos corporativos."
        ctaLabel="Solicitar Cotización"
        ctaHref={quoteHref}
      />
      <TechnologySection id={SECTION_IDS.technology} substrates={vm.substrates} />
      <GallerySection items={vm.gallery} sampleHref={anchor(SECTION_IDS.contact)} />
      <TrajectorySection id={SECTION_IDS.about} clients={vm.clients} />
      <QuoteSection
        id={SECTION_IDS.quote}
        highlights={vm.quoteHighlights}
        whatsappHref={CONTACT_LINKS.whatsappQuote}
        phone={CONTACT_LINKS.phone}
      />
      <SectorsSection sectors={vm.sectors} />
      <SpecModal vm={vm.specModal} />
    </>
  )
}
