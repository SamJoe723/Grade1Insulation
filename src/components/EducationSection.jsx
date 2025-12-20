export default function EducationSection() {
  const comparisons = [
    { name: 'Spray Foam', bestFor: 'Air sealing + high R-value', notes: 'Great for rim joists, hard-to-reach spots' },
    { name: 'Fiberglass Batts', bestFor: 'Cost-effective coverage', notes: 'Good for walls/ceilings with proper air sealing' },
    { name: 'Cellulose / Blown-In', bestFor: 'Even coverage in attics/walls', notes: 'Minimal tear-out, good for retrofits' },
  ]

  const problems = [
    { title: 'Cold rooms / drafts', fix: 'Air seal leaks and insulate attics, rim joists, and walls' },
    { title: 'Ice dams', fix: 'Attic air sealing + insulation to stop heat loss' },
    { title: 'High energy bills', fix: 'Seal major leaks, add proper R-value, and balance ventilation' },
  ]

  return (
    <section className="rounded-2xl border border-[#2f2f2f] bg-[#1c1c1c] px-5 py-8 text-brand-50 shadow-2xl shadow-black/50 ring-1 ring-[#242424] md:px-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Insulation basics</p>
        <h2 className="text-2xl text-white md:text-3xl">R-value, types, and common fixes.</h2>
        <p className="max-w-3xl text-base leading-relaxed text-brand-200">
          R-value measures resistance to heat flow. Higher R-value means better insulation. In New England, attics often
          target R-49 to R-60; walls vary by assembly and code. We help choose the right material and approach for each
          space.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {comparisons.map((item) => (
          <div key={item.name} className="rounded-xl border border-[#2f2f2f] bg-[#202020] p-4 text-sm text-brand-100">
            <p className="text-white">{item.name}</p>
            <p className="mt-1 text-brand-200 text-xs uppercase tracking-[0.16em]">Best for</p>
            <p className="text-brand-100">{item.bestFor}</p>
            <p className="mt-2 text-brand-200 text-xs uppercase tracking-[0.16em]">Notes</p>
            <p className="text-brand-100">{item.notes}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-[#2f2f2f] bg-[#202020] p-4">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">Common problems</p>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {problems.map((item) => (
            <div key={item.title} className="rounded-lg border border-[#2f2f2f] bg-[#1f1f1f] p-3 text-sm text-brand-100">
              <p className="font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-brand-200">{item.fix}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
