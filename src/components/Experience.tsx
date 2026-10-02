import { motion } from 'framer-motion'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-brand-line/80 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-brand-muted">
          <span className="h-px w-7 bg-brand-line" /> Experience
        </div>
        <h2 className="mb-9 text-3xl font-bold">Career journey</h2>

        <div className="ml-1.5 border-l-2 border-brand-line">
          {experience.map((job, i) => (
            <motion.div
              key={job.company + i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.4 }}
              className="group relative py-0 pb-10 pl-7 transition-[padding] last:pb-0 hover:pl-9"
            >
              <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-brand-blue-light" />
              <h3 className="text-lg font-semibold">
                {job.role} — {job.company}
              </h3>
              <div className="mb-2.5 mt-1 font-mono text-xs text-brand-muted">{job.meta}</div>
              <ul className="space-y-2 text-[15px] text-neutral-300">
                {job.bullets.map((b) => (
                  <li key={b} className="relative pl-6">
                    <span className="absolute left-0 font-bold text-brand-blue-light">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
