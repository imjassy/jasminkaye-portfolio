import { motion } from 'framer-motion'
import { achievements } from '../data/content'

export default function Achievements() {
  return (
    <section id="achievements" className="border-t border-brand-line/80 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-brand-muted">
          <span className="h-px w-7 bg-brand-line" /> Achievements
        </div>
        <h2 className="mb-9 text-3xl font-bold">Impact & initiatives</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-brand-line p-5 transition hover:-translate-y-0.5 hover:border-brand-blue-light"
            >
              <h3 className="mb-2 font-semibold text-brand-blue-light">{a.title}</h3>
              <p className="text-sm text-neutral-300">{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
