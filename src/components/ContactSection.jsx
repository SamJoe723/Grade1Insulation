import { contactInfo } from '../data/content'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="grid gap-6 rounded-3xl border border-[#2f2f2f] bg-[#1c1c1c] p-8 text-brand-50 shadow-2xl shadow-black/50 ring-1 ring-[#242424] lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Contact Us</p>
        <h2 className="text-3xl text-white md:text-4xl">Request a site visit or call.</h2>
        <p className="max-w-2xl text-brand-200">
          Tell us about your home, remodel, or commercial project. We&apos;ll get in touch with you to confirm scope, perform site visits if necessary, and
          deliver a clear proposal. Prefer direct contact? Reach us below.
        </p>
        <div className="flex flex-wrap gap-3 text-brand-100">
          <a
            href={`tel:${contactInfo.phone.replace(/[^\\d]/g, '')}`}
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold transition hover:border-white/30 hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
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
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold transition hover:border-white/30 hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
              <path
                d="M4 6h16c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1Z"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="m4 7 8 5 8-5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {contactInfo.email}
          </a>
        </div>
      </div>

      <div className="rounded-2xl border border-[#2f2f2f] bg-white p-6 text-brand-900 shadow-xl shadow-black/30">
        <form className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-brand-800" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-brand-100 bg-white px-3 py-3 text-sm text-brand-900 outline-none ring-2 ring-transparent transition focus:border-brand-300 focus:ring-brand-100"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-brand-800" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder={contactInfo.phone}
                className="w-full rounded-xl border border-brand-100 bg-white px-3 py-3 text-sm text-brand-900 outline-none ring-2 ring-transparent transition focus:border-brand-300 focus:ring-brand-100"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-brand-800" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder={contactInfo.email}
                className="w-full rounded-xl border border-brand-100 bg-white px-3 py-3 text-sm text-brand-900 outline-none ring-2 ring-transparent transition focus:border-brand-300 focus:ring-brand-100"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-brand-800" htmlFor="service">
                Service needed
              </label>
              <select
                id="service"
                className="w-full rounded-xl border border-brand-100 bg-white px-3 py-3 text-sm text-brand-900 outline-none ring-2 ring-transparent transition focus:border-brand-300 focus:ring-brand-100"
              >
                <option>Spray Foam</option>
                <option>Fiberglass Batts</option>
                <option>Blown-In / Dense Pack</option>
                <option>Rigid Sheathing</option>
                <option>Mineral Wool</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-800" htmlFor="project">
              Project details
            </label>
            <textarea
              id="project"
              rows="4"
              placeholder="Tell us about the space, timeline, and address."
              className="w-full rounded-xl border border-brand-100 bg-white px-3 py-3 text-sm text-brand-900 outline-none ring-2 ring-transparent transition focus:border-brand-300 focus:ring-brand-100"
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-accent-blue px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Send my request
          </button>
          <p className="text-center text-xs text-brand-600">
            Prefer to talk now? Call <span className="font-semibold text-brand-900">{contactInfo.phone}</span>.
          </p>
        </form>
      </div>
    </section>
  )
}
