import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Tools from './components/Tools'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ScrollProgress, BackToTop } from './components/ScrollUtils'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-dark"
          >
            <span className="font-head text-xl font-extrabold tracking-wide text-brand-blue-light">
              JKS
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Tools />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
