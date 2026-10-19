import { motion } from 'framer-motion'
import { certs } from '@/data/certs'

export function Certs() {
  return (
    <section id="certs" className="border-b border-slate-800">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="font-serif text-3xl text-slate-50">Certifications</h2>
        <div className="mt-3 h-px w-10 bg-bronze" aria-hidden />

        <ul className="mt-8">
          {certs.map((cert, index) => (
            <motion.li
              key={cert.id}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.3 }}
              className="flex flex-col justify-between gap-1 border-b border-slate-800 py-4 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <span className="font-mono text-xs text-slate-500">{cert.issuer}</span>
              <span className="text-sm text-slate-200 sm:text-right">{cert.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
