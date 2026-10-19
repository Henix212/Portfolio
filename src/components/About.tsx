import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

export function About() {
  return (
    <section id="about" className="border-b border-slate-800">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="font-serif text-3xl text-slate-50">Profile</h2>
          <div className="mt-3 h-px w-10 bg-bronze" aria-hidden />
        </motion.div>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_240px] md:items-start">
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-slate-400">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="mt-8 border-t border-slate-800">
              {profile.languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-baseline justify-between gap-4 border-b border-slate-800 py-3 text-sm"
                >
                  <span className="font-medium text-slate-200">{lang.name}</span>
                  <span className="font-mono text-xs text-slate-500">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="justify-self-start md:justify-self-end">
            <img
              src="./profile.jpg"
              alt={profile.name}
              className="aspect-[4/5] w-full max-w-[220px] rounded-sm border border-slate-800 object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
