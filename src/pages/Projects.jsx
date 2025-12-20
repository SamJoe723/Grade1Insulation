import PortfolioSection from '../components/PortfolioSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import SectionDivider from '../components/SectionDivider'
import useSEO from '../hooks/useSEO'

export default function Projects() {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  useSEO({
    title: 'Insulation project portfolio | Grade 1 Insulation',
    description:
      'See spray foam, blown-in, rigid board, and mineral wool insulation projects delivered for homeowners, remodelers, and commercial builders.',
    url: `${origin}/projects`,
  })

  return (
    <>
      <PortfolioSection />
      <SectionDivider />
      {/* <TestimonialsSection />
      <SectionDivider /> */}
      <ContactSection />
    </>
  )
}
