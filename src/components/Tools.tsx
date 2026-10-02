import { useState } from 'react'
import { motion } from 'framer-motion'
import { tools, toolCategories } from '../data/content'

export default function Tools() {
  const [filter, setFilter] = useState<string>('All')
  const visible = filter === 'All' ? tools : tools.filter((t) => t.cat === filter)

  return (
    <section id="tools" className="border-t border-brand-line/80 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-brand-muted">
          <span className="h-px w-7 bg-brand-line" /> Toolkit
        </div>
        <h2 className="mb-6 text-3xl font-bold">Tools & platforms</h2>

        <div className="mb-7 flex flex-wrap gap-2">
          {toolCategories.map((c) => (
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

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {visible.map((tool) => (
            <motion.div
              key={tool.name}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-brand-line p-5 text-center transition hover:-translate-y-1 hover:border-brand-blue-light hover:shadow-[0_12px_24px_-14px_rgba(46,10,194,.5)]"
            >
              <div
                className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-lg font-head text-sm font-extrabold text-white"
                style={{ background: tool.color }}
              >
                {tool.mono}
              </div>
              <h4 className="text-sm font-semibold">{tool.name}</h4>
              <span className="font-mono text-[11px] text-brand-muted">{tool.cat}</span>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-xs text-brand-muted">
          Badges use each platform's brand color with a short monogram rather than official logo
          artwork, since those are trademarked assets — swap in real SVG logo files here if you have
          licensed access to them.
        </p>
      </div>
    </section>
  )
}
