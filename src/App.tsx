import { About } from '@/components/About'
import { Certs } from '@/components/Certs'
import { Education } from '@/components/Education'
import { Experience } from '@/components/Experience'
import { Hero } from '@/components/Hero'
import { ProjectsGrid } from '@/components/ProjectsGrid'
import { ResearchList } from '@/components/ResearchList'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { StackBadges } from '@/components/StackBadges'
import { StatusBanner } from '@/components/StatusBanner'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <SiteHeader />
      <main>
        <Hero />
        <StatusBanner />
        <About />
        <Experience />
        <ProjectsGrid />
        <ResearchList />
        <Education />
        <StackBadges />
        <Certs />
      </main>
      <SiteFooter />
    </div>
  )
}
