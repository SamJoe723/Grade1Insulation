import SectionDivider from '../components/SectionDivider'
import ContactSection from '../components/ContactSection'
import { serviceAreas, nap } from '../data/content'
import useSEO from '../hooks/useSEO'

export default function About() {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  useSEO({
    title: 'About Grade 1 Insulation | Licensed, insured crews',
    description:
      'Trade-professional insulation team serving Southern New Hampshire and New England with licensed and insured crews, clean sites, and documented installs.',
    url: `${origin}/about`,
  })

  return (
    <>
      <section className="rounded-3xl border border-[#2f2f2f] bg-[#1c1c1c] p-8 text-brand-50 shadow-2xl shadow-black/50 ring-1 ring-[#242424]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">About</p>
        <h1 className="mt-2 text-3xl text-white md:text-4xl">Grade 1 Insulation</h1>
        <p className="mt-3 max-w-3xl text-brand-200">
          Grade 1 Insulation is a no-nonsense, trade-professional team delivering premium insulation systems across New
          England. We handle residential, commercial, and remodel projects with airtight installs, clean job sites, and
          clear communication from first visit through inspection.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#2f2f2f] bg-[#202020] p-4">
            <p className="text-sm font-semibold text-white">What we bring</p>
            <p className="mt-2 text-sm text-brand-200">Certified crews, insured operations, and documentation for inspectors and rebates.</p>
          </div>
          <div className="rounded-2xl border border-[#2f2f2f] bg-[#202020] p-4">
            <p className="text-sm font-semibold text-white">How we work</p>
            <p className="mt-2 text-sm text-brand-200">Site visits, clear proposals, scheduled installs, photo verification, and tidy wrap-up.</p>
          </div>
          <div className="rounded-2xl border border-[#2f2f2f] bg-[#202020] p-4">
            <p className="text-sm font-semibold text-white">Where we serve</p>
            <p className="mt-2 text-sm text-brand-200">{serviceAreas.join(' • ')}</p>
          </div>
        </div>
        <div className="mt-6 space-y-2 text-sm text-brand-200">
          <p className="font-semibold text-white">Trust signals</p>
          <ul className="space-y-1">
            <li>Years in business: 5</li>
            <li>Licensed & insured crews</li>
            <li>Local focus: {nap.address}</li>
          </ul>
        </div>
      </section>

      <SectionDivider />
      <ContactSection />
    </>
  )
}
