import { portfolio } from '../data/content'

export default function PortfolioSection() {
  return (
    <section className="rounded-3xl border border-[#2f2f2f] bg-[#1c1c1c] p-8 text-brand-50 shadow-2xl shadow-black/50 ring-1 ring-[#242424]">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Recent work</p>
          <h2 className="font-display text-3xl text-white md:text-4xl">Projects built tight.</h2>
          <p className="max-w-2xl text-brand-200">
            A few examples of the insulation systems we install—ready to swap with your project photos.
          </p>
        </div>
        <div className="rounded-full bg-[#2a2a2a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-100">
          Placeholders shown
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {portfolio.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-2xl border border-[#3a3a3a] bg-[#252525] shadow-xl shadow-black/50 transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="h-32 bg-gradient-to-br from-[#2a2a2a] via-[#202020] to-[#171717]" />
            <div className="space-y-2 p-4">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-sm text-brand-200">{item.summary}</p>
              <p className="text-xs text-brand-300">{item.scope}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
