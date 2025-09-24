import { BentoCard } from '@/components/atoms/BentoCard'

export function BentoBox() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-glow">
            Meine Services & Projekte
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Entdecke meine Welt der digitalen Lösungen - von kommerziellen Projekten bis hin zu innovativen Experimenten
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          
          {/* Commercial Projects - Large Card */}
          <BentoCard
            title="Pipeline buchen"
            description="Professionelle Webentwicklung für dein Unternehmen. Von der Konzeption bis zur Umsetzung - maßgeschneiderte Lösungen mit modernsten Technologien."
            href="/commercial"
            icon="💼"
            size="large"
            gradient="bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
          >
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <span>• Next.js & React</span>
              <span>• E-Commerce</span>
              <span>• Custom Solutions</span>
            </div>
          </BentoCard>

          {/* Portfolio/Skills Showcase */}
          <BentoCard
            title="Portfolio"
            description="Meine besten Projekte und Skills im Überblick. Perfekt für Unternehmen und Recruiter."
            href="/portfolio"
            icon="🚀"
            size="medium"
            gradient="bg-gradient-to-br from-blue-500/10 to-purple-500/10"
          />

          {/* GitHub */}
          <BentoCard
            title="GitHub"
            description="Open Source Projekte, Code-Beispiele und meine Development Journey."
            href="https://github.com/Shadojus"
            icon="⚡"
            size="medium"
            gradient="bg-gradient-to-br from-gray-500/10 to-slate-500/10"
          />

          {/* Instagram */}
          <BentoCard
            title="Instagram"
            description="Behind-the-Scenes, Coding-Tips und meine Creator Journey. Folge mir für Daily Content!"
            href="https://instagram.com/shadojus"
            icon="📱"
            size="medium"
            gradient="bg-gradient-to-br from-pink-500/10 to-rose-500/10"
          />

          {/* Blog/Insights */}
          <BentoCard
            title="Insights"
            description="Meine Gedanken zu Webentwicklung, Design Trends und der Zukunft des Internets."
            href="/blog"
            icon="📝"
            size="medium"
            gradient="bg-gradient-to-br from-amber-500/10 to-orange-500/10"
          />

          {/* Contact */}
          <BentoCard
            title="Let's Connect"
            description="Bereit für dein nächstes Projekt? Lass uns über deine Ideen sprechen!"
            href="mailto:shadojus@gmail.com"
            icon="✉️"
            size="large"
            gradient="bg-gradient-to-br from-indigo-500/10 to-blue-500/10"
          >
            <div className="flex flex-col space-y-2 text-sm">
              <a href="mailto:shadojus@gmail.com" className="text-white/80 hover:text-white transition-colors">
                📧 shadojus@gmail.com
              </a>
              <span className="text-white/60">Antwort innerhalb 24h garantiert</span>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  )
}