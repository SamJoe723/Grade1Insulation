import ContactSection from '../components/ContactSection'
import useSEO from '../hooks/useSEO'

export default function Contact() {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  useSEO({
    title: 'Contact Grade 1 Insulation | Free site visit',
    description: 'Request a site visit or insulation quote. Serving Southern New Hampshire, Maine, and Northern Massachusetts with insured crews.',
    url: `${origin}/contact`,
  })

  return <ContactSection />
}
