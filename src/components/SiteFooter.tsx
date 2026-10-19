import { profile } from '@/data/profile'

export function SiteFooter() {
  return (
    <footer className="bg-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-12 text-center">
        <p className="font-serif text-xl text-slate-100">{profile.name}</p>
        <p className="font-mono text-xs text-slate-500">
          Applied Math &amp; AI · Low-latency systems · Quantitative research
        </p>
        <div className="flex flex-wrap justify-center gap-4 font-mono text-xs text-slate-400">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200"
          >
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-slate-200">
            Email
          </a>
          <a href={profile.cvHref} target="_blank" rel="noopener noreferrer" className="hover:text-slate-200">
            CV
          </a>
        </div>
        <p className="font-mono text-[10px] text-slate-700">© 2026 {profile.name}</p>
      </div>
    </footer>
  )
}
