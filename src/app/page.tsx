import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
