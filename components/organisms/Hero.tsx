import { Text } from '@/components/atoms/Text'
import { Button } from '@/components/atoms/Button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto glass glow rounded-full flex items-center justify-center mb-4">
            <span className="text-4xl font-bold text-glow">S</span>
          </div>
          <div className="w-4 h-4 bg-green-400 rounded-full mx-auto animate-pulse" />
        </div>
        
        {/* Main Text */}
        <Text variant="hero" glow className="mb-6">
          Hey, ich bin{' '}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Shadojus
          </span>
        </Text>
        
        <Text variant="subtitle" className="text-white/80 mb-12 max-w-2xl mx-auto">
          Digital Creator & Developer aus Deutschland. 
          Ich entwickle moderne Weblösungen und teile meine Journey.
        </Text>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="#projects">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500">
              Projekte ansehen
            </Button>
          </Link>
          
          <Link href="mailto:shadojus@gmail.com">
            <Button variant="ghost" size="lg">
              Kontakt aufnehmen
            </Button>
          </Link>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}