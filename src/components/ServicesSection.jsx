import { services } from '../data/content'

const serviceIcons = {
  'Spray Foam': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
      <path d="M12 3v4" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 7.5h10l-.8 8.5c-.1 1-1 1.9-2.2 1.9H10c-1.1 0-2.1-.9-2.2-1.9L7 7.5Z" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 12h6" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  'Fiberglass Batts': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
      <rect x="5" y="5" width="14" height="14" rx="2" strokeWidth="1.8" />
      <path d="M9 5v14m6-14v14" strokeWidth="1.8" />
    </svg>
  ),
  'Blown-In & Dense Pack': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
      <path d="M4 14c2 0 3.5-2 5.5-2S13 14 15 14s3.5-2 5.5-2" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 10c2 0 3.5-2 5.5-2S13 10 15 10s3.5-2 5.5-2" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 18c2 0 3.5-2 5.5-2S13 18 15 18s3.5-2 5.5-2" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  'Rigid Sheathing': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
      <rect x="6" y="4" width="12" height="16" rx="1.5" strokeWidth="1.8" />
      <path d="M8 8h8m-8 4h8m-8 4h8" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  'Mineral Wool': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
      <path d="M12 4c-2 2-3 3.5-3 5.5S11 13 12 14c1-1 3-2.5 3-4.5S13.5 6 12 4Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 14c0 3 2.5 5 6 6 3.5-1 6-3 6-6" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
}

export default function ServicesSection() {
  return (
    <section className="rounded-2xl border border-[#2f2f2f] bg-[#1c1c1c] px-5 py-8 text-brand-50 shadow-2xl shadow-black/50 ring-1 ring-[#242424] md:px-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Services</p>
          <h2 className="text-2xl leading-tight text-white md:text-4xl">Built for quality installs.</h2>
          <p className="max-w-2xl text-base leading-relaxed text-brand-200">
            Grade 1 Insulation provides spray foam, fiberglass batts, blown-in, rigid sheathing, and mineral wool
            installs for homeowners, builders, remodelers, and commercial projects.
          </p>
        </div>
        <div className="rounded-full bg-[#2a2a2a] text-brand-50 px-4 py-2 text-sm font-semibold shadow-md shadow-black/40">
          Premium finish • Clean job sites • On-schedule crews
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative overflow-hidden rounded-2xl border border-[#3a3a3a] bg-[#252525] p-5 text-brand-50 shadow-xl shadow-black/50 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70"
          >
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#242424] transition group-hover:scale-110" />
            <div className="relative inline-flex items-center gap-2 rounded-md bg-[#1f1f1f] px-3 py-1.5 text-base font-semibold text-white shadow-md shadow-black/40">
              {serviceIcons[service.title] || <span className="h-3.5 w-3.5 rounded-full bg-white" />}
              {service.title}
            </div>
            <p className="relative mt-3 text-base leading-relaxed text-brand-100">{service.description}</p>
            <div className="relative mt-4 space-y-2 text-base text-brand-100">
              {service.points.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
