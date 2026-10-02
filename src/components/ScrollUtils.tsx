import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      setPct((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div
      className="fixed left-0 top-0 z-[60] h-0.5 bg-brand-blue-light transition-[width] duration-100"
      style={{ width: `${pct}%` }}
    />
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(document.documentElement.scrollTop > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-[55] flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-lg text-white shadow-lg transition-opacity ${
        show ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      ↑
    </button>
  )
}
