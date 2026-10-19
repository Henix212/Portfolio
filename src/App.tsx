import { useCallback, useRef, useState } from 'react'
import { About } from '@/components/About'
import { Certs } from '@/components/Certs'
import { Education } from '@/components/Education'
import { Experience } from '@/components/Experience'
import { Hero } from '@/components/Hero'
import { MarketPathStory } from '@/components/MarketPathStory'
import { ProjectsGrid } from '@/components/ProjectsGrid'
import { ResearchList } from '@/components/ResearchList'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { StackBadges } from '@/components/StackBadges'
import { StatusBanner } from '@/components/StatusBanner'

export default function App() {
  const [pathOpen, setPathOpen] = useState(false)
  const pathAnchorRef = useRef<HTMLDivElement>(null)

  const openPath = useCallback(() => {
    setPathOpen(true)
    requestAnimationFrame(() => {
      pathAnchorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [])

  const closePath = useCallback(() => {
    setPathOpen(false)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950">
      <SiteHeader />
      <main>
        <Hero pathOpen={pathOpen} onOpenPath={openPath} onClosePath={closePath} />
        <div ref={pathAnchorRef}>
          {pathOpen ? <MarketPathStory onClose={closePath} /> : null}
        </div>
        <div className="relative z-10 bg-slate-950">
          <StatusBanner />
          <About />
          <Experience />
          <ProjectsGrid />
          <ResearchList />
          <Education />
          <StackBadges />
          <Certs />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
