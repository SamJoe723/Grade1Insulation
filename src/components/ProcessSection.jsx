import { process } from '../data/content'

export default function ProcessSection() {
  return (
    <section className="rounded-2xl border border-[#2f2f2f] bg-[#1c1c1c] px-5 py-8 text-brand-50 shadow-2xl shadow-black/50 ring-1 ring-[#242424] md:px-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Process</p>
        <h2 className="text-2xl text-white md:text-4xl">Clear steps, tight timelines.</h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-200">
          A premium process for insulation projects of any size—residential, remodel, or commercial.
        </p>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {process.map((step, index) => (
          <div
            key={step.title}
            className="rounded-2xl border border-[#2f2f2f] bg-[#202020] p-6 text-brand-100 shadow-lg shadow-black/50"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f0f0f] text-white">
                {index + 1}
              </span>
              <p className="font-semibold text-white">{step.title}</p>
            </div>
            <p className="mt-3 text-base leading-relaxed text-brand-200">{step.detail}</p>
            <div className="mt-4 h-1 rounded-full bg-gradient-to-r from-brand-400 via-brand-50 to-brand-700" />
          </div>
        ))}
      </div>
    </section>
  )
}
