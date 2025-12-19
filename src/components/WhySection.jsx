import { serviceAreas, heroImages } from '../data/content'

export default function WhySection() {
  return (
    <section className="grid gap-6 rounded-2xl border border-[#2f2f2f] bg-[#1c1c1c] px-5 py-8 text-brand-50 shadow-2xl shadow-black/50 ring-1 ring-[#242424] lg:grid-cols-[0.9fr_1.1fr] md:px-8">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Why Grade 1</p>
        <h3 className="text-2xl leading-tight text-white md:text-3xl">Premium finish, start to seal.</h3>
        <p className="text-base leading-relaxed text-brand-200">
          From material selection to cleanup, we manage every step with a premium standard—keeping timelines tight and
          communication clear for homeowners, remodelers, and commercial builders.
        </p>
        <div className="space-y-3 text-base text-brand-100">
          <div className="flex items-start gap-2">
            <span className="mt-2 block h-2 w-2 rounded-full bg-white" />
            <span>Fully insured crews with management on site</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-2 block h-2 w-2 rounded-full bg-white" />
            <span>Clean job sites and careful protection of finishes</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-2 block h-2 w-2 rounded-full bg-white" />
            <span>Documentation for inspectors and rebate programs</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-[#2f2f2f] bg-[#171717] p-6">
        <div className="grid gap-4 md:grid-cols-3">
          {serviceAreas.slice(0, 3).map((area) => (
            <div key={area} className="rounded-xl border border-[#2f2f2f] bg-[#1f1f1f] p-4 text-base text-brand-100">
              <p className="font-semibold text-white">{area}</p>
              <p className="text-sm text-brand-300">Local crews, quick mobilization</p>
            </div>
          ))}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {['/work-samples/work-sample1.jpg', '/work-samples/work-sample2.jpg'].map((src, idx) => (
            <div key={src} className="relative overflow-hidden rounded-xl border border-white/10 bg-black/30">
              <img src={src} alt={`Grade 1 work sample ${idx + 1}`} className="h-40 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
