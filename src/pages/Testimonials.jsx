import TestimonialsSection from '../components/TestimonialsSection'
import PortfolioSection from '../components/PortfolioSection'
import ContactSection from '../components/ContactSection'
import SectionDivider from '../components/SectionDivider'
import useSEO from '../hooks/useSEO'

export default function TestimonialsPage() {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  useSEO({
    title: 'Client reviews | Grade 1 Insulation',
    description: 'Hear from homeowners, remodelers, and builders about our clean job sites, tight schedules, and premium insulation work.',
    url: `${origin}/testimonials`,
  })

  return (
    <>
      <TestimonialsSection />
      <SectionDivider />
      {/* <PortfolioSection />
      <SectionDivider /> */}
      <ContactSection />
    </>
  )
}
