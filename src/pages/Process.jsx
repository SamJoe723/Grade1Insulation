import ProcessSection from '../components/ProcessSection'
import ServicesSection from '../components/ServicesSection'
import ContactSection from '../components/ContactSection'
import SectionDivider from '../components/SectionDivider'
import useSEO from '../hooks/useSEO'

export default function Process() {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  useSEO({
    title: 'Insulation install process | Grade 1 Insulation',
    description:
      'Our process: site visit, clear proposal, scheduled install, and photo verification by insured insulation crews serving New England.',
    url: `${origin}/process`,
  })

  return (
    <>
      <ProcessSection />
      <SectionDivider />
      {/* <ServicesSection />
      <SectionDivider /> */}
      <ContactSection />
    </>
  )
}
