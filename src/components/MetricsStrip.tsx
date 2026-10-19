import { motion } from 'framer-motion'
import { MetricCard } from '@/components/MetricCard'
import { careerMetrics, MOCK_DISCLAIMER } from '@/data/metrics'

export function MetricsStrip() {
  return (
    <section id="metrics" className="border-b border-slate-800 bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-slate-500">Key metrics</h2>
          <p className="font-mono text-[10px] text-slate-600">{MOCK_DISCLAIMER}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {careerMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
            >
              <MetricCard
                label={metric.label}
                value={metric.value}
                hint={metric.hint}
                tone={metric.tone}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
