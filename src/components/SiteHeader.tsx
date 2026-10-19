import { Button } from '@/components/ui/button'

const links = [
  { href: '#metrics', label: 'Metrics' },
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
  { href: '#research', label: 'Research' },
]

const CV_HREF = './files/Hugo_Pereira_de_Almeida_CV_Quant.pdf'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#hero" className="font-mono text-sm font-medium text-slate-200">
          HP<span className="text-cyan-400">/</span>Quant
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-slate-400 transition-colors hover:text-slate-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href={CV_HREF} target="_blank" rel="noopener noreferrer">
          <Button size="sm" variant="outline">
            CV
          </Button>
        </a>
      </div>
    </header>
  )
}
