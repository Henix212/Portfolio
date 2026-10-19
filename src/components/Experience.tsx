import { motion } from 'framer-motion'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="border-b border-slate-800">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-serif text-3xl text-slate-50">Experience</h2>
        <div className="mt-3 h-px w-10 bg-bronze" aria-hidden />

        <div className="mt-10">
          {experience.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.04, duration: 0.35 }}
              className="grid gap-2 border-b border-slate-800 py-8 last:border-b-0 md:grid-cols-[160px_1fr] md:gap-10"
            >
              <div>
                <p className="font-mono text-xs text-bronze">{item.dates}</p>
                <p className="mt-1 font-mono text-xs text-slate-500">{item.location}</p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-slate-50">{item.role}</h3>
                <p className="mt-1 font-mono text-xs text-steel">{item.company}</p>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative max-w-3xl pl-3 text-sm leading-relaxed text-slate-400 before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-1.5 before:bg-slate-600 before:content-['']"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
