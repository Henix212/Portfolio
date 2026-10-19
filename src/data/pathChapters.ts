import { experience } from '@/data/experience'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { researchItems } from '@/data/research'

export type PathChapter = {
  id: string
  start: number
  end: number
  label: string
  title: string
  body: string[]
  cta?: { href: string; text: string }
}

/** Plateau opacity inside [start, end]; fade in/out at edges. */
export function chapterOpacity(progress: number, start: number, end: number): number {
  const fade = Math.min(0.06, (end - start) / 4)
  if (progress < start || progress > end) return 0
  if (progress < start + fade) return (progress - start) / fade
  if (progress > end - fade) return (end - progress) / fade
  return 1
}

const experienceLines = experience.map(
  (item) => `${item.company} — ${item.role} (${item.dates})`,
)

const projectLines = projects.map((p) => `${p.name} — ${p.tagline}${p.private ? ' · Private' : ''}`)

const research = researchItems[0]

export const pathChapters: PathChapter[] = [
  {
    id: 'intro',
    start: 0,
    end: 0.2,
    label: 'Intro',
    title: profile.name,
    body: [
      profile.headline,
      `${profile.location} — open to ${profile.relocation}`,
    ],
  },
  {
    id: 'experience',
    start: 0.2,
    end: 0.4,
    label: 'Experience',
    title: 'Experience',
    body: experienceLines,
  },
  {
    id: 'projects',
    start: 0.4,
    end: 0.65,
    label: 'Projects',
    title: 'Projects & Research',
    body: projectLines,
  },
  {
    id: 'research',
    start: 0.65,
    end: 0.85,
    label: 'Publication',
    title: 'Publication',
    body: research
      ? [research.title, research.venue]
      : [],
    cta: research?.href
      ? { href: research.href, text: 'View publication' }
      : undefined,
  },
  {
    id: 'close',
    start: 0.85,
    end: 1,
    label: 'Close',
    title: 'Continue below',
    body: [
      'Full experience, projects, education, and skills follow this path.',
      `Contact: ${profile.email}`,
    ],
    cta: {
      href: profile.cvHref,
      text: 'Download CV',
    },
  },
]
