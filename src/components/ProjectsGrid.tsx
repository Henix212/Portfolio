import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export function ProjectsGrid() {
  return (
    <section id="projects" className="border-b border-slate-800">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-serif text-3xl text-slate-50">Projects &amp; Research</h2>
        <div className="mt-3 h-px w-10 bg-bronze" aria-hidden />
        <p className="mt-4 max-w-2xl text-sm text-slate-400">
          Selected systems aligned with the CV — infrastructure, commodity research, derivatives
          pricing, and systematic strategy pipelines.
        </p>

        <div className="mt-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.04, duration: 0.35 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
