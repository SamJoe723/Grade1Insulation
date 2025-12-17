import { contactInfo } from '../data/content'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="grid gap-6 rounded-3xl border border-[#2f2f2f] bg-[#1c1c1c] p-8 text-brand-50 shadow-2xl shadow-black/50 ring-1 ring-[#242424] lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Book an assessment</p>
        <h2 className=" text-3xl text-white md:text-4xl">Request a site visit or call.</h2>
        <p className="max-w-2xl text-brand-200">
          Tell us about your project—home, remodel, or commercial. We&apos;ll schedule a visit, confirm scope, and
          deliver a clear proposal.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-brand-200">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-white" />
            Licensed & insured
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-white" />
            Clean site protection
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-white" />
            Photo verification
          </span>
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
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/30 transition hover:-translate-y-0.5 hover:shadow-xl"
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
