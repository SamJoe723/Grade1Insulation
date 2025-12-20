import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import WhySection from '../components/WhySection'
import ProcessSection from '../components/ProcessSection'
import MapSection from '../components/MapSection'
import PortfolioSection from '../components/PortfolioSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import SectionDivider from '../components/SectionDivider'
import useSEO from '../hooks/useSEO'

export default function Home() {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  useSEO({
    title: 'Grade 1 Insulation | Spray foam, blown-in, mineral wool in New England',
    description:
      'Premium insulation installs for homes, remodels, and commercial projects across Southern New Hampshire, Maine, and Northern Massachusetts.',
    url: `${origin}/`,
  })

  return (
    <>
      <Hero />
      <SectionDivider />
      {/* <ServicesSection />
      <SectionDivider /> */}
      <WhySection />
      <SectionDivider />
      <MapSection />
      {/* <SectionDivider />
      <PortfolioSection /> */}
      {/* <SectionDivider />
      <ProcessSection /> */}
      {/* <SectionDivider />
      <TestimonialsSection /> */}
      <SectionDivider />
      <ContactSection />
    </>
  )
}
