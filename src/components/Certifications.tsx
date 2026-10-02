import { motion } from 'framer-motion'
import { certifications, awards } from '../data/content'

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-brand-line/80 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-9 text-3xl font-bold">Certifications & Awards</h2>
        <div className="grid gap-10 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="mb-1.5 font-mono text-sm text-brand-muted">Certifications</h3>
            <ul>
              {certifications.map((c) => (
                <li key={c.name} className="border-b border-brand-line py-3.5">
                  <b className="block">{c.name}</b>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="mb-1.5 font-mono text-sm text-brand-muted">Awards</h3>
            <ul>
              {awards.map((a) => (
                <li key={a.name} className="border-b border-brand-line py-3.5">
                  <b className="block">{a.name}</b>
                  <span className="text-sm text-brand-muted">{a.note}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
