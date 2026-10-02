import { nav, profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="py-10 text-center">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-4 flex flex-wrap justify-center gap-5 text-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-brand-muted hover:text-brand-blue-light">
              {n.label}
            </a>
          ))}
        </div>
        <div className="mb-3 flex justify-center gap-5 text-sm">
          <a href={`mailto:${profile.email}`} className="hover:text-brand-blue-light">
            Email
          </a>
          {profile.linkedin && (
            <a href={profile.linkedin} className="hover:text-brand-blue-light">
              LinkedIn
            </a>
          )}
          {profile.github && (
            <a href={profile.github} className="hover:text-brand-blue-light">
              GitHub
            </a>
          )}
        </div>
        <p className="text-xs text-brand-muted">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
