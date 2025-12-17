import { testimonials } from '../data/content'

export default function TestimonialsSection() {
  return (
    <section className="rounded-3xl border border-[#2f2f2f] bg-[#1c1c1c] p-8 text-brand-50 shadow-2xl shadow-black/50 ring-1 ring-[#242424]">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Testimonials</p>
          <h2 className="text-3xl text-white md:text-4xl">Positive results, steady crews.</h2>
          <p className="max-w-2xl text-brand-200">Swap these with real client quotes when you’re ready.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.quote}
            className="flex h-full flex-col justify-between rounded-2xl border border-[#3a3a3a] bg-[#252525] p-5 text-brand-100 shadow-lg shadow-black/50"
          >
            <p className="text-base text-brand-50">&ldquo;{item.quote}&rdquo;</p>
            <div className="mt-4">
              <p className="font-semibold text-white">{item.name}</p>
              <p className="text-sm text-brand-300">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
