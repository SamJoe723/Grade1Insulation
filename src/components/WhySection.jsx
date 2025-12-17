import { serviceAreas, heroImages } from '../data/content'

export default function WhySection() {
  return (
    <section className="grid gap-6 rounded-3xl border border-[#2f2f2f] bg-[#1c1c1c] p-8 text-brand-50 shadow-2xl shadow-black/50 ring-1 ring-[#242424] lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Why Grade 1</p>
        <h3 className="text-3xl leading-tight text-white">Premium finish, start to seal.</h3>
        <p className="text-sm text-brand-200">
          From material selection to cleanup, we manage every step with a premium standard—keeping timelines tight and
          communication clear for homeowners, remodelers, and commercial builders.
        </p>
        <div className="space-y-2 text-sm text-brand-100">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white" />
            Fully insured crews with project managers on site
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white" />
            Clean job sites and careful protection of finishes
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white" />
            Documentation for inspectors and rebate programs
          </div>
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-[#2f2f2f] bg-[#171717] p-6">
        <div className="grid gap-4 md:grid-cols-3">
          {serviceAreas.slice(0, 3).map((area) => (
            <div key={area} className="rounded-xl border border-[#2f2f2f] bg-[#1f1f1f] p-4 text-sm text-brand-100">
              <p className="font-semibold text-white">{area}</p>
              <p className="text-xs text-brand-300">Local crews, quick mobilization</p>
            </div>
          ))}
        </div>
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
        <div className="rounded-xl border border-white/15 bg-white/5 p-4 text-sm text-slate-100">
          <p className="font-semibold text-white">Looking for a partner?</p>
          <p className="text-slate-200">
            We coordinate with GCs, remodelers, and homeowners to slot insulation precisely into your build schedule.
          </p>
        </div>
      </div>
    </section>
  )
}
