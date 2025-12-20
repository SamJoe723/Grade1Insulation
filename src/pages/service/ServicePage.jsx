import { Navigate, useParams } from 'react-router-dom'
import ServiceDetail from '../../components/ServiceDetail'
import { serviceDetails } from '../../data/content'
import EducationSection from '../../components/EducationSection'
import useSEO from '../../hooks/useSEO'

export default function ServicePage() {
  const { slug } = useParams()
  const service = serviceDetails.find((s) => s.slug === slug)
  if (!service) return <Navigate to="/services" replace />

  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const description = `${service.problem} ${service.whyItWorks} Serving Southern New Hampshire, Maine, and Northern Massachusetts.`
  useSEO({
    title: `${service.title} | Grade 1 Insulation`,
    description,
    url: `${origin}/services/${service.slug}`,
  })

  return (
    <>
      <ServiceDetail service={service} />
      <div className="my-6" />
      <EducationSection />
    </>
  )
}
