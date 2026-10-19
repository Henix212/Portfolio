import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'

export function Hero() {
  return (
    <section id="hero" className="border-b border-slate-800">
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="font-mono text-xs text-slate-500">
            {profile.location} — open to {profile.relocation}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-lg leading-snug text-slate-200 md:text-xl">
            {profile.headline}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects">
              <Button size="lg">Selected work</Button>
            </a>
            <a href={profile.cvHref} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                Download CV
              </Button>
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-slate-500">
            <a href={`mailto:${profile.email}`} className="hover:text-slate-300">
              {profile.email}
            </a>
            <span aria-hidden>/</span>
            <a href={profile.phoneHref} className="hover:text-slate-300">
              {profile.phone}
            </a>
            <span aria-hidden>/</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300"
            >
              LinkedIn
            </a>
            <span aria-hidden>/</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
