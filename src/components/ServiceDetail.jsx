import { Link } from 'react-router-dom'

export default function ServiceDetail({ service }) {
  if (!service) return null

  return (
    <section className="rounded-2xl border border-[#2f2f2f] bg-[#1c1c1c] px-5 py-8 text-brand-50 shadow-2xl shadow-black/50 ring-1 ring-[#242424] md:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Service</p>
      <h1 className="mt-2 text-3xl leading-tight text-white md:text-4xl">{service.title}</h1>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Problem it solves</h3>
          <p className="text-base leading-relaxed text-brand-100">{service.problem}</p>
          <h3 className="text-lg font-semibold text-white">Signs you need it</h3>
          <ul className="space-y-2 text-base text-brand-100">
            {service.signs.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="mt-2 block h-2 w-2 rounded-full bg-white" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Why this works</h3>
          <p className="text-base leading-relaxed text-brand-100">{service.whyItWorks}</p>
          <h3 className="text-lg font-semibold text-white">What the install involves</h3>
          <p className="text-base leading-relaxed text-brand-100">{service.install}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-blue px-5 py-3 text-sm font-semibold text-white shadow-md shadow-black/30 transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Book a free estimate
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40"
        >
          Back to services
        </Link>
      </div>
    </section>
  )
}
