import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'

export function StatusBanner() {
  return (
    <section id="status" className="border-b border-slate-800 bg-slate-900/40">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="font-mono text-xs text-bronze">Availability</p>
          <h2 className="mt-2 font-serif text-2xl text-slate-50">Open to relocation</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
            {profile.relocation}
            <br />
            AI Engineer Apprentice at SNCF Voyageurs Matériel · Quant Finance / AI Intern at IUM
            Monaco · graduating ESEO 2027.
          </p>
        </div>
        <a href={`mailto:${profile.email}?subject=Relocation%20%2F%20Opportunity`}>
          <Button>Get in touch</Button>
        </a>
      </div>
    </section>
  )
}
