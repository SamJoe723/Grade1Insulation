import { NavLink, Outlet, Link } from 'react-router-dom'
import { contactInfo, heroImages } from '../data/content'

const navLinkClass =
  'transition hover:text-white text-sm font-medium text-slate-200' +
  ' [&.active]:text-white [&.active]:underline [&.active]:underline-offset-4'

export default function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#171717] text-brand-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-[url('/truck2.jpg')] bg-cover bg-center opacity-80">
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-[#171717]" />
      </div>

      <header className="relative border-b border-[#2f2f2f] backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-3xl bg-[#1f1f1f] ring-1 ring-white/10 shadow-lg shadow-black/30">
              <img src={heroImages.logo} alt="Grade 1 Insulation badge" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-md uppercase tracking-[0.3em] text-slate-100">Grade 1 Insulation</p>
              <p className="text-md font-semibold text-white">Premium Residential + Commercial</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-4">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
            <NavLink to="/process" className={navLinkClass}>
              Process
            </NavLink>
            <NavLink to="/testimonials" className={navLinkClass}>
              Testimonials
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
            <a
              href={`tel:${contactInfo.phone.replace(/[^\\d]/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-900 shadow-lg shadow-black/40 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Call {contactInfo.phone}
            </a>
          </nav>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-6 pb-20 pt-12">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-brand-900/90">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-200">
          <div className="grid gap-4 md:grid-cols-2 md:items-start">
            <div className="space-y-1">
              <p className="font-semibold text-white">Grade 1 Insulation</p>
              <p className="text-slate-300">Residential • Commercial • Remodels • New Construction</p>
              <p className="text-slate-300">Serving New England</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 font-semibold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                  <path
                    d="M5 4h4l2 5-3 2c.8 1.5 2.1 2.8 3.6 3.6l2-3 5 2v4a2 2 0 0 1-2 2c-8.3 0-15-6.7-15-15a2 2 0 0 1 2-2Z"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {contactInfo.phone}
              </span>
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                  <path
                    d="M4 6h16c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1Z"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path d="m4 7 8 5 8-5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {contactInfo.email}
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.facebook.com/Grade1InsulationLLC"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 underline underline-offset-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M22 12.07C22 6.49 17.52 2 11.93 2 6.35 2 1.86 6.49 1.86 12.07c0 4.93 3.6 9.02 8.31 9.88v-6.99H7.9v-2.89h2.27V9.95c0-2.24 1.33-3.48 3.38-3.48.98 0 2 .17 2 .17v2.21h-1.13c-1.12 0-1.47.7-1.47 1.42v1.71h2.5l-.4 2.89h-2.1v6.99c4.71-.86 8.31-4.95 8.31-9.88Z" />
                  </svg>
                  Facebook
                </a>
                <Link to="/contact" className="underline underline-offset-4">
                  Book a call or visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
