import { Navigation } from '@/components/molecules/Navigation'
import { Hero } from '@/components/organisms/Hero'
import { Projects } from '@/components/organisms/Projects'
import { Contact } from '@/components/organisms/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <Contact />
    </main>
  )
}