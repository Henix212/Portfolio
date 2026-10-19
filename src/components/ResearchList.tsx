import { motion } from 'framer-motion'
import { researchItems } from '@/data/research'

export function ResearchList() {
  return (
    <section id="research" className="border-b border-slate-800">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-serif text-3xl text-slate-50">Publication</h2>
        <div className="mt-3 h-px w-10 bg-bronze" aria-hidden />

        <ul className="mt-10">
          {researchItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="border-l-2 border-bronze pl-6"
            >
              <p className="font-mono text-xs text-slate-500">{item.venue}</p>
              <h3 className="mt-2 max-w-3xl font-serif text-xl text-slate-50">{item.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">{item.summary}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-mono text-xs text-slate-300 hover:text-slate-100"
                >
                  View publication →
                </a>
              ) : null}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
