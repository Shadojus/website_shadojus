import { Navigation } from '@/components/molecules/Navigation'
import { Hero } from '@/components/organisms/Hero'
import { BentoBox } from '@/components/organisms/BentoBox'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <BentoBox />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 text-sm">
            © 2025 Shadojus. Made with ❤️ and Next.js
          </p>
        </div>
      </footer>
    </main>
  )
}