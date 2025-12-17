import ProcessSection from '../components/ProcessSection'
import ServicesSection from '../components/ServicesSection'
import ContactSection from '../components/ContactSection'
import SectionDivider from '../components/SectionDivider'

export default function Process() {
  return (
    <>
      <ProcessSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <ContactSection />
    </>
  )
}
