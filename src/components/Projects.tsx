import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, projectCategories } from '../data/content'

export default function Projects() {
  const [filter, setFilter] = useState<string>('All')
  const [openIdx, setOpenIdx] = useState<Set<number>>(new Set())

  const visible = filter === 'All' ? projects : projects.filter((p) => p.cat === filter)
  const allOpen = visible.length > 0 && visible.every((p) => openIdx.has(projects.indexOf(p)))

  const toggle = (i: number) =>
    setOpenIdx((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })

  const toggleAll = () => {
    setOpenIdx((prev) => {
      if (allOpen) return new Set()
      return new Set(visible.map((p) => projects.indexOf(p)))
    })
  }

  return (
    <section id="projects" className="border-t border-brand-line/80 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-brand-muted">
          <span className="h-px w-7 bg-brand-line" /> Projects
        </div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            Selected work <span className="font-mono text-base font-normal text-brand-muted">— click to expand</span>
          </h2>
        </div>

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition ${
                  filter === c
                    ? 'border-brand-blue-light bg-brand-blue-light/10 text-white'
                    : 'border-brand-line text-brand-muted hover:border-brand-blue-light hover:text-brand-blue-light'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <button
            onClick={toggleAll}
            className="rounded border border-brand-line px-3 py-1.5 font-mono text-xs text-brand-muted hover:border-brand-blue-light hover:text-brand-blue-light"
          >
            {allOpen ? 'Collapse all' : 'Expand all'}
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {visible.map((p) => {
            const idx = projects.indexOf(p)
            const open = openIdx.has(idx)
            return (
              <motion.div
                key={p.title}
                layout
                role="button"
                tabIndex={0}
                aria-expanded={open}
                onClick={() => toggle(idx)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), toggle(idx))}
                className="cursor-pointer rounded-xl border border-brand-line p-6 transition hover:border-brand-blue-light hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(46,10,194,.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue-light"
              >
                <span className="mb-1.5 block font-mono text-xs tracking-wide text-brand-blue-light">
                  PROJECT {p.num}
                </span>
                <h3 className="flex items-center justify-between gap-3 text-lg font-semibold">
                  {p.title}
                  <span
                    className="font-mono text-sm text-brand-blue-light transition-transform"
                    style={{ transform: open ? 'rotate(180deg)' : 'none' }}
                  >
                    ▾
                  </span>
                </h3>
                <p className="mt-2 text-[15px] text-neutral-300">{p.summary}</p>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 border-t border-brand-line pt-3 text-sm text-neutral-300">
                        {p.detail}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded border border-brand-line px-2.5 py-1 font-mono text-xs text-brand-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
