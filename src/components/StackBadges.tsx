import { motion } from 'framer-motion'
import { skillGroups } from '@/data/stack'

export function StackBadges() {
  return (
    <section id="skills" className="border-b border-slate-800 bg-slate-900/30">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-serif text-3xl text-slate-50">Technical Skills</h2>
        <div className="mt-3 h-px w-10 bg-bronze" aria-hidden />

        <motion.div
          className="mt-10 grid gap-8 sm:grid-cols-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="border-b border-slate-800 pb-2 font-mono text-xs text-bronze">
                {group.title}
              </h3>
              <ul className="mt-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-slate-800/80 py-2 text-sm text-slate-400 last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
