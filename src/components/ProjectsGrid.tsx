import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/ProjectCard'
import { MOCK_DISCLAIMER } from '@/data/metrics'
import { projects } from '@/data/projects'

export function ProjectsGrid() {
  return (
    <section id="projects" className="border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50">Projects / Strategies</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Real research systems from the CV. Backtest figures below are demo placeholders for UI
              density — not live performance.
            </p>
          </div>
          <p className="font-mono text-[10px] text-slate-600">{MOCK_DISCLAIMER}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
