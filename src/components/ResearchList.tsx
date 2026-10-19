import { motion } from 'framer-motion'
import { BookOpen, FileText } from 'lucide-react'
import { researchItems } from '@/data/research'

export function ResearchList() {
  return (
    <section id="research" className="border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50">Research</h2>
        <p className="mt-2 text-sm text-slate-400">Publications and notebook-style research summaries.</p>

        <ul className="mt-8 divide-y divide-slate-800 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
          {researchItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="flex gap-4 p-5"
            >
              <div className="mt-1 text-cyan-400">
                {item.kind === 'publication' ? (
                  <FileText className="size-4" aria-hidden />
                ) : (
                  <BookOpen className="size-4" aria-hidden />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  {item.venue}
                </p>
                <h3 className="mt-1 text-base font-medium text-slate-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.summary}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-mono text-xs text-cyan-400 hover:text-cyan-300"
                  >
                    View publication →
                  </a>
                ) : null}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
