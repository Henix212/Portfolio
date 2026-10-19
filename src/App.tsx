import { Hero } from '@/components/Hero'
import { MetricsStrip } from '@/components/MetricsStrip'
import { ProjectsGrid } from '@/components/ProjectsGrid'
import { ResearchList } from '@/components/ResearchList'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { StackBadges } from '@/components/StackBadges'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <SiteHeader />
      <main>
        <Hero />
        <MetricsStrip />
        <ProjectsGrid />
        <StackBadges />
        <ResearchList />
      </main>
      <SiteFooter />
    </div>
  )
}
