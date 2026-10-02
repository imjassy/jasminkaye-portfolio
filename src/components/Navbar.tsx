import { useEffect, useState } from 'react'
import { nav, profile } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isLight, setIsLight] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('jks-theme')
    if (saved === 'light') {
      document.documentElement.classList.add('light')
      setIsLight(true)
    }
  }, [])

  useEffect(() => {
    const sections = nav.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const toggleTheme = () => {
    const next = !isLight
    setIsLight(next)
    document.documentElement.classList.toggle('light', next)
    localStorage.setItem('jks-theme', next ? 'light' : 'dark')
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-brand-line/80 bg-brand-dark/90 backdrop-blur-md"
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <span className="font-bold">{profile.name}</span>
        <button
          onClick={toggleTheme}
          aria-label="Toggle light and dark theme"
          className="ml-auto h-8 w-8 rounded-full border border-brand-line text-sm hover:border-brand-blue-light"
        >
          {isLight ? '◑' : '◐'}
        </button>
        <button
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
        <ul
          className={`gap-6 text-sm md:flex ${
            open
              ? 'fixed left-0 right-0 top-14 flex flex-col border-b border-brand-line bg-brand-dark p-6'
              : 'hidden'
          }`}
        >
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className={`relative pb-0.5 hover:text-brand-blue-light ${
                  active === n.href ? 'text-brand-blue-light after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-brand-blue-light after:content-[""]' : ''
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
