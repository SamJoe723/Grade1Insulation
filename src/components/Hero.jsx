import { Link } from 'react-router-dom'
import { badges, contactInfo, heroImages } from '../data/content'

export default function Hero() {
  return (
    <section className="relative grid gap-10 overflow-hidden rounded-2xl border border-[#2f2f2f] bg-[#0f0f0f]/85 px-5 py-8 text-brand-50 shadow-2xl shadow-black/50 ring-1 ring-[#242424] md:grid-cols-[1.15fr_0.85fr] md:px-8">
      <div className="absolute inset-0 bg-[url('/truck2.jpg')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#0f0f0f]/85 to-[#0f0f0f]/90" />

      <div className="relative space-y-6">
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
            finish, clear communication, and photo verification.
          </p>
        </div>
        <div />
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

      <div className="relative space-y-5 rounded-2xl border border-[#2f2f2f] bg-[#232323]/95 p-6 shadow-xl shadow-black/50 ring-1 ring-[#242424]">
          <img
            src={heroImages.badge}
            alt="Grade 1 Insulation brand badge"
            // className="mx-auto h-40 w-full max-w-xs object-contain opacity-95"
          />

        <div className="relative space-y-3 rounded-xl border border-[#2f2f2f] bg-[#1a1a1a] p-4 text-sm">
          <div className="flex items-center justify-between text-white">
            <span className="text-xs uppercase tracking-[0.22em] text-brand-200">Direct line</span>
            <span className="rounded-full bg-[#1f1f1f] px-3 py-1 text-xs font-semibold text-white">
              Fast response
            </span>
          </div>
          <div className="flex items-center gap-2 text-2xl font-semibold text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
              <path
                d="M5 4h4l2 5-3 2c.8 1.5 2.1 2.8 3.6 3.6l2-3 5 2v4a2 2 0 0 1-2 2c-8.3 0-15-6.7-15-15a2 2 0 0 1 2-2Z"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {contactInfo.phone}
          </div>
          <div className="flex items-center gap-2 text-brand-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
              <path
                d="M4 6h16c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1Z"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="m4 7 8 5 8-5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {contactInfo.email}
          </div>
          <div className="mt-3 grid gap-2 text-sm">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 font-semibold text-brand-900 shadow-md shadow-black/40 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>Book a site visit</span>
            </Link>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#3a3a3a] px-4 py-2 font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#5a5a5a]"
            >
              Email the team
            </a>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-brand-100">
            <div className="flex items-center gap-2 rounded-lg border border-[#2f2f2f] bg-[#1f1f1f] px-3 py-2 text-brand-100">
              <span className="h-2 w-2 rounded-full bg-white" />
              Fully insured crews
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-[#2f2f2f] bg-[#1f1f1f] px-3 py-2 text-brand-100">
              <span className="h-2 w-2 rounded-full bg-white" />
              Photo verification
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
