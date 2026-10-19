import { motion } from 'framer-motion'
import { education } from '@/data/education'

export function Education() {
  return (
    <section id="education" className="border-b border-slate-800">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="font-serif text-3xl text-slate-50">Education</h2>
        <div className="mt-3 h-px w-10 bg-bronze" aria-hidden />

        <div className="mt-8">
          {education.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.3 }}
              className="grid gap-2 border-b border-slate-800 py-7 last:border-b-0 md:grid-cols-[160px_1fr] md:gap-10"
            >
              <p className="font-mono text-xs text-bronze">{item.dates}</p>
              <div>
                <h3 className="font-serif text-lg font-semibold text-slate-50">{item.title}</h3>
                <p className="mt-1 font-mono text-xs text-steel">{item.school}</p>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">{item.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
