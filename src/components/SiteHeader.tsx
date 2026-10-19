import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#skills', label: 'Skills' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-6">
        <a href="#hero" className="font-serif text-base text-slate-100">
          Hugo <span className="text-steel">Gabriel</span>
        </a>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-slate-500 transition-colors hover:text-slate-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href={profile.cvHref} target="_blank" rel="noopener noreferrer">
          <Button size="sm" variant="outline">
            CV
          </Button>
        </a>
      </div>
    </header>
  )
}
