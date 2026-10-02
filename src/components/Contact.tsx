import { useState } from 'react'
import { profile } from '../data/content'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // No backend is wired up yet — connect this to an email service (e.g. Formspree,
    // EmailJS, or your own API route) to actually receive messages.
    setSent(true)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section id="contact" className="border-t border-brand-line/80 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-brand-muted">
          <span className="h-px w-7 bg-brand-line" /> Contact
        </div>
        <h2 className="mb-5 text-3xl font-bold">Let's build what's next.</h2>
        <p className="max-w-xl text-neutral-300">
          Interested in cloud operations, application support, or observability engineering? Reach
          out.
        </p>

        <div className="mt-8 flex items-center justify-between border-y border-brand-line py-4 text-sm">
          <span className="text-brand-muted">Email</span>
          <span className="flex items-center gap-2.5">
            <a href={`mailto:${profile.email}`} className="font-bold text-white hover:text-brand-blue-light">
              {profile.email}
            </a>
            <button
              onClick={copyEmail}
              className="rounded border border-brand-line px-2 py-0.5 font-mono text-[11px] text-brand-muted hover:border-brand-blue-light hover:text-brand-blue-light"
            >
              Copy
            </button>
          </span>
        </div>

        {!profile.location ? null : (
          <div className="flex items-center justify-between border-b border-brand-line py-4 text-sm">
            <span className="text-brand-muted">Location</span>
            <span className="font-bold">{profile.location}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 max-w-lg space-y-4">
          <div>
            <label className="mb-1.5 block text-sm text-brand-muted">Name</label>
            <input
              required
              className="w-full rounded border border-brand-line bg-brand-panel px-3 py-2.5 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue-light"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-brand-muted">Email</label>
            <input
              type="email"
              required
              className="w-full rounded border border-brand-line bg-brand-panel px-3 py-2.5 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue-light"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-brand-muted">Message</label>
            <textarea
              required
              rows={4}
              className="w-full rounded border border-brand-line bg-brand-panel px-3 py-2.5 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue-light"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg border-none bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(46,10,194,.6)] transition hover:-translate-y-0.5"
          >
            Send message
          </button>
          {sent && (
            <p className="text-sm text-brand-blue-light">
              Thanks — this form isn't wired to a server yet, so connect an email service to
              receive messages.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
