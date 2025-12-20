import ServicesSection from '../components/ServicesSection'
import ProcessSection from '../components/ProcessSection'
import ContactSection from '../components/ContactSection'
import SectionDivider from '../components/SectionDivider'
import useSEO from '../hooks/useSEO'

export default function Services() {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  useSEO({
    title: 'Insulation services | Grade 1 Insulation',
    description:
      'Spray foam, fiberglass batts, blown-in cellulose, rigid sheathing, and mineral wool installs by insured crews serving Southern New Hampshire and New England.',
    url: `${origin}/services`,
  })

  return (
    <>
      <ServicesSection />
      {/* <SectionDivider />
      <ProcessSection /> */}
      <SectionDivider />
      <ContactSection />
    </>
  )
}
