import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import WhySection from '../components/WhySection'
import ProcessSection from '../components/ProcessSection'
import PortfolioSection from '../components/PortfolioSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import SectionDivider from '../components/SectionDivider'

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <WhySection />
      <SectionDivider />
      <PortfolioSection />
      <SectionDivider />
      <ProcessSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <ContactSection />
    </>
  )
}
