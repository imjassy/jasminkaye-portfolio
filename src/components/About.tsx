import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { about } from '../data/content'

function Counter({ target }: { target: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20%' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const step = Math.max(1, Math.round(target / 24))
    const id = setInterval(() => {
      setVal((v) => {
        const next = v + step
        if (next >= target) {
          clearInterval(id)
          return target
        }
        return next
      })
    }, 40)
    return () => clearInterval(id)
  }, [inView, target])

  return (
    <b ref={ref} className="block font-head text-3xl text-brand-blue-light">
      {val}
    </b>
  )
}

export default function About() {
  return (
    <section id="about" className="border-t border-brand-line/80 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-brand-muted">
            <span className="h-px w-7 bg-brand-line" /> About
          </div>
          <p className="max-w-2xl text-neutral-300">{about.paragraph}</p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {about.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-transparent p-3 transition hover:-translate-y-0.5 hover:border-brand-line"
              >
                <Counter target={s.value} />
                <span className="text-xs text-brand-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
