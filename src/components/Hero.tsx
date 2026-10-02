import { motion } from 'framer-motion'
import { profile } from '../data/content'

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 pb-16 pt-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(46,10,194,.5) 0%, rgba(46,10,194,0) 70%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-3 font-mono text-xs uppercase tracking-wide text-brand-blue-light"
      >
        {profile.eyebrow}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-4xl font-extrabold tracking-tight sm:text-5xl"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-5 max-w-xl text-lg text-neutral-300"
      >
        {profile.lead}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <a
          href="#projects"
          className="rounded-lg border border-brand-blue bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(46,10,194,.6)] transition hover:-translate-y-0.5"
        >
          View Projects
        </a>
        <a
          href={profile.resumeUrl}
          className="rounded-lg border border-brand-line px-5 py-3 text-sm font-semibold transition hover:border-brand-blue-light hover:text-brand-blue-light"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-brand-line px-5 py-3 text-sm font-semibold transition hover:border-brand-blue-light hover:text-brand-blue-light"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  )
}
