import { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import { contactInfo, heroImages } from '../data/content'

const navLinkClass =
  'transition hover:text-white text-base font-semibold text-slate-200' +
  ' [&.active]:text-white [&.active]:underline [&.active]:underline-offset-4'

export default function MainLayout() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#171717] text-brand-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-[url('/truck2.jpg')] bg-cover bg-center opacity-80">
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-[#171717]" />
      </div>

      <header className="relative border-b border-[#2f2f2f] backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex shrink-0 items-center justify-center shadow-lg shadow-black/30">
              <img
                src={heroImages.logo}
                alt="Grade 1 Insulation badge"
                className="h-14 w-14 md:h-16 md:w-16 object-contain"
              />
            </div>
            <div>
              <p className="text-base uppercase tracking-[0.32em] text-slate-100">Grade 1 Insulation</p>
              <p className="text-sm font-semibold text-white">Premium Residential + Commercial</p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 md:hidden">
            <button
              onClick={() => setNavOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            <Link
              to="/contact"
              onClick={() => setNavOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-900 shadow-lg shadow-black/40 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book a call or free estimate
            </Link>
          </div>

          <nav
            className={`flex flex-col gap-3 md:flex md:flex-row md:flex-wrap md:items-center md:gap-4 ${
              navOpen ? 'mt-2 rounded-xl border border-white/10 bg-black/70 p-4 shadow-lg shadow-black/40' : 'hidden'
            } md:mt-0 md:border-0 md:bg-transparent md:p-0 md:shadow-none md:block`}
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
              <NavLink to="/" className={navLinkClass} end onClick={() => setNavOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/services" className={navLinkClass} onClick={() => setNavOpen(false)}>
                Services
              </NavLink>
              <NavLink to="/projects" className={navLinkClass} onClick={() => setNavOpen(false)}>
                Projects
              </NavLink>
              <NavLink to="/process" className={navLinkClass} onClick={() => setNavOpen(false)}>
                Process
              </NavLink>
              <NavLink to="/testimonials" className={navLinkClass} onClick={() => setNavOpen(false)}>
                Testimonials
              </NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setNavOpen(false)}>
                About
              </NavLink>
              <NavLink to="/contact" className={navLinkClass} onClick={() => setNavOpen(false)}>
                Contact
              </NavLink>
            </div>
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
              <a
                href={`tel:${contactInfo.phone.replace(/[^\\d]/g, '')}`}
                className="inline-flex items-center gap-2 font-semibold text-white transition hover:opacity-90"
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
                className="inline-flex items-center gap-2 transition hover:opacity-90"
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
                  Get a free estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
