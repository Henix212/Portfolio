import { ExternalLink, Lock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Project } from '@/data/projects'
import { cn } from '@/lib/utils'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col transition-colors hover:border-slate-700">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-xl">{project.name}</CardTitle>
          {project.private ? (
            <span className="inline-flex items-center gap-1 font-mono text-[10px] text-slate-500">
              <Lock className="size-3" aria-hidden />
              Private
            </span>
          ) : null}
        </div>
        <CardDescription className="font-mono text-xs text-cyan-400/80">
          {project.tagline}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm leading-relaxed text-slate-400">{project.description}</p>

        <div className="grid grid-cols-3 gap-2 rounded-lg border border-slate-800 bg-slate-950/60 p-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="font-mono text-[10px] uppercase text-slate-500">{metric.label}</p>
              <p
                className={cn(
                  'mt-0.5 font-mono text-sm font-semibold',
                  metric.tone === 'profit' && 'text-profit',
                  metric.tone === 'loss' && 'text-loss',
                  metric.tone === 'neutral' && 'text-slate-200',
                )}
              >
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.stack.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-400 hover:text-cyan-300"
          >
            Repository <ExternalLink className="size-3" aria-hidden />
          </a>
        ) : (
          <span className="font-mono text-xs text-slate-600">No public repository</span>
        )}
      </CardContent>
    </Card>
  )
}
