import { Link } from 'react-router-dom'
import { badges, contactInfo, heroImages } from '../data/content'

export default function Hero() {
  return (
    <section className="relative grid gap-10 overflow-hidden rounded-2xl border border-[#2f2f2f] bg-[#0f0f0f]/85 px-5 py-8 text-brand-50 shadow-2xl shadow-black/50 ring-1 ring-[#242424] md:grid-cols-[1.15fr_0.85fr] md:px-8">
      <div className="absolute inset-0 bg-[url('/truck2.jpg')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#0f0f0f]/85 to-[#0f0f0f]/90" />

      <div className="relative space-y-6 animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-md bg-[#222222] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200 ring-1 ring-[#2f2f2f]">
          Premium • Quality • New England
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold text-brand-100">Building-tight energy solutions</p>
          <h1 className=" text-4xl leading-tight text-white md:text-5xl">
            Insulation for homes, remodels, and commercial projects across New England.
          </h1>
          <p className="text-lg text-brand-100">
            Spray foam, fiberglass batts, blown-in, rigid sheathing, and mineral wool installs completed with a premium
            finish, clear communication, and customer satisfaction.
          </p>
        </div>
        <div />
        <Link
          to="/services"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-blue px-4 py-2 text-sm font-semibold text-white shadow-md shadow-black/40 transition hover:-translate-y-0.5 hover:shadow-lg md:w-fit"
        >
          View all services
        </Link>

        <div className="flex flex-wrap gap-2">
          {badges.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-100"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div
        className="relative space-y-5 rounded-2xl border border-[#2f2f2f] bg-[#232323]/95 p-6 shadow-xl shadow-black/50 ring-1 ring-[#242424] animate-fade-up"
        style={{ animationDelay: '140ms' }}
      >
        <div>
          {[heroImages.truck1].map((src, idx) => (
            <div key={src} className="relative overflow-hidden rounded-xl border border-white/10 bg-black/30">
              <img
                src={src}
                alt={idx === 0 ? 'Grade 1 Insulation truck at job site' : 'Grade 1 Insulation fleet vehicle'}
                className="h-40 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 to-transparent" />
              <p className="absolute bottom-2 left-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-100">
                On-site, clean, professional
              </p>
            </div>
          ))}
        </div>

        <div className="relative space-y-3 rounded-xl border border-[#2f2f2f] bg-[#1a1a1a] p-4 text-sm">
          <div className="flex items-center justify-between text-white">
            <span className="text-xs uppercase tracking-[0.22em] text-brand-200">Call Now for an Energy-Efficiency Consultation</span>
            {/* <span className="rounded-full bg-[#1f1f1f] px-3 py-1 text-xs font-semibold text-white">
              Fast response
            </span> */}
          </div>
          <a
            href={`tel:${contactInfo.phone.replace(/[^\\d]/g, '')}`}
            className="flex items-center gap-2 text-2xl font-semibold text-white transition hover:opacity-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
              <path
                d="M5 4h4l2 5-3 2c.8 1.5 2.1 2.8 3.6 3.6l2-3 5 2v4a2 2 0 0 1-2 2c-8.3 0-15-6.7-15-15a2 2 0 0 1 2-2Z"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {contactInfo.phone}
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2 text-brand-100 transition hover:opacity-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
              <path
                d="M4 6h16c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1Z"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="m4 7 8 5 8-5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {contactInfo.email}
          </a>
          <div className="mt-3 grid gap-2 text-sm">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-blue px-4 py-2 font-semibold text-white shadow-md shadow-black/40 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>Get a Free Estimate</span>
            </Link>
          </div>
                  <div className="rounded-xl border border-white/15 bg-white/5 p-4 text-sm text-slate-100">
          <p className="font-semibold text-white">Looking for a partner?</p>
          <p className="text-slate-200">
            We coordinate with GCs, remodelers, and homeowners to slot insulation precisely into your build schedule.
          </p>
        </div>
        </div>
      </div>
    </section>
  )
}
