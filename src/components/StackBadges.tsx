import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { stackTools } from '@/data/stack'

export function StackBadges() {
  return (
    <section id="stack" className="border-b border-slate-800 bg-slate-900/30">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50">Stack / Tools</h2>
        <p className="mt-2 text-sm text-slate-400">Languages, quant tooling, and systems used across research and infra.</p>
        <motion.div
          className="mt-8 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {stackTools.map((tool) => (
            <Badge key={tool} className="px-3 py-1.5 text-sm">
              {tool}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
