import { useHomeVM } from '../vm/useHomeVM'
import { CategoriesSection, FeaturedSection, FileTipsSection, HeroSection, ProcessSection, QuoteCtaSection } from './sections'

export function HomePage() {
  const vm = useHomeVM()
  return (
    <>
      <HeroSection />
      <CategoriesSection categories={vm.categories} />
      <ProcessSection />
      <FeaturedSection products={vm.featured} loading={vm.loading} />
      <QuoteCtaSection />
      <FileTipsSection />
    </>
  )
}
