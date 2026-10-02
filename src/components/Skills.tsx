import { motion } from 'framer-motion'
import { skillCategories } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-brand-line/80 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-brand-muted">
          <span className="h-px w-7 bg-brand-line" /> Capabilities
        </div>
        <h2 className="mb-9 text-3xl font-bold">Technical expertise</h2>

        <div className="grid gap-7 sm:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-brand-line p-5 transition hover:-translate-y-0.5 hover:border-brand-blue-light"
            >
              <span className="mb-1.5 block font-mono text-sm text-brand-blue-light">{cat.num}</span>
              <h3 className="mb-3 font-semibold text-brand-blue-light">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 rounded border border-brand-line px-2.5 py-1 font-mono text-xs text-brand-muted transition hover:border-brand-blue-light hover:text-brand-blue-light"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-light opacity-60" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
