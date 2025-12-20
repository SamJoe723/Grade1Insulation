import { useRef } from 'react'

const proofPoints = [
  'Licensed & insured crews with on-site project leads',
  'Clean job sites with surface protection and daily tidy-up',
  'Photo verification for homeowners, GCs, and inspectors',
  'Material guidance to hit code + rebate targets',
  'Coordinated scheduling with remodels and new builds',
]

const numbers = [
  { label: 'Years in business', value: '5+', detail: 'Local, owner-led team' },
  { label: 'Turnaround', value: '48 hr', detail: 'Typical site visit window' },
  { label: 'Service area', value: 'Southern NH', detail: 'Plus ME & Northern MA' },
]

const photos = ['/work-samples/work-sample1.jpg', '/work-samples/work-sample2.jpg', '/work-samples/work-sample3.jpg', '/work-samples/work-sample4.jpg']

export default function WhySection() {
  const carouselRef = useRef(null)

  const scrollBy = (delta) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: delta, behavior: 'smooth' })
    }
  }

  return (
    <section className="grid gap-6 rounded-2xl border border-[#2f2f2f] bg-[#121212] px-5 py-8 text-brand-50 shadow-2xl shadow-black/50 ring-1 ring-[#242424] lg:grid-cols-[1.05fr_0.95fr] md:gap-8 md:px-8">
      <div className="space-y-5 animate-fade-up">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Why Grade 1</p>
        <div className="space-y-3">
          <h3 className="text-3xl leading-tight text-white md:text-4xl">Premium finish, start to seal.</h3>
          <p className="text-base leading-relaxed text-brand-200">
            We run insulation the way builders and homeowners expect: tight scheduling, clear communication, and clean,
            photo-verified installs. From spray foam to rigid sheathing, we tailor assemblies to your structure and
            timeline.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {proofPoints.map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-xl border border-[#242424] bg-[#1a1a1a] px-4 py-3">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand-100" />
              <p className="text-sm text-brand-100">{point}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {numbers.map((item) => (
            <div key={item.label} className="rounded-xl border border-[#242424] bg-[#1a1a1a] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">{item.label}</p>
              <p className="mt-1 text-2xl font-semibold text-white">{item.value}</p>
              <p className="text-xs text-brand-200">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[#242424] bg-[#181818] p-5 animate-fade-up" style={{ animationDelay: '140ms' }}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-white">Recent installs</p>
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scrollBy(-340)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="Previous photo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                <path d="m14 6-6 6 6 6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scrollBy(340)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="Next photo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                <path d="m10 6 6 6-6 6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-12 left-0 w-10 bg-gradient-to-r from-[#181818] via-[#181818]/60 to-transparent md:inset-y-10" />
        <div className="pointer-events-none absolute inset-y-12 right-0 w-10 bg-gradient-to-l from-[#181818] via-[#181818]/60 to-transparent md:inset-y-10" />

        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto pb-1 pt-1 snap-x snap-mandatory scroll-smooth"
          style={{ scrollPadding: '1rem' }}
        >
          {photos.map((src, idx) => (
            <div
              key={src}
              className="relative h-48 w-80 shrink-0 snap-center overflow-hidden rounded-xl border border-[#2a2a2a] bg-black/40 md:h-52 md:w-96"
            >
              <img src={src} alt={`Grade 1 work sample ${idx + 1}`} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-xs text-brand-300">
          <p className="md:hidden">Swipe to browse more photos</p>
          <p className="hidden md:block">On-site, clean, professional installs</p>
        </div>
      </div>
    </section>
  )
}
