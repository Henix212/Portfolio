import { ExternalLink, Lock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Project } from '@/data/projects'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <CardTitle>{project.name}</CardTitle>
          {project.private ? (
            <span className="inline-flex items-center gap-1 font-mono text-[10px] text-slate-500">
              <Lock className="size-3" aria-hidden />
              Private
            </span>
          ) : (
            <span className="font-mono text-[10px] text-slate-500">Personal</span>
          )}
        </div>
        <CardDescription>{project.tagline}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {project.bullets.map((bullet) => (
            <li
              key={bullet}
              className="relative max-w-3xl pl-3 text-sm leading-relaxed text-slate-400 before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-1.5 before:bg-slate-600 before:content-['']"
            >
              {bullet}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 hover:text-slate-100"
          >
            Repository <ExternalLink className="size-3" aria-hidden />
          </a>
        ) : (
          <p className="mt-4 font-mono text-xs text-slate-600">No public repository</p>
        )}
      </CardContent>
    </Card>
  )
}
