import { Text } from '@/components/atoms/Text'
import { Button } from '@/components/atoms/Button'
import { GlassCard } from '@/components/atoms/GlassCard'
import Link from 'next/link'

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Text variant="title" glow className="mb-4">
          Let&apos;s Connect
        </Text>
        <Text variant="body" className="text-white/70 mb-12 max-w-2xl mx-auto">
          Interesse an einer Zusammenarbeit oder einfach nur Hallo sagen? 
          Ich freue mich auf deine Nachricht!
        </Text>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <GlassCard hover>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 glass rounded-full flex items-center justify-center">
                <span className="text-xl">📧</span>
              </div>
              <Text variant="subtitle" className="mb-2 text-sm">E-Mail</Text>
              <Link 
                href="mailto:shadojus@gmail.com"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                shadojus@gmail.com
              </Link>
            </div>
          </GlassCard>
          
          <GlassCard hover>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 glass rounded-full flex items-center justify-center">
                <span className="text-xl">📱</span>
              </div>
              <Text variant="subtitle" className="mb-2 text-sm">Instagram</Text>
              <Link 
                href="https://instagram.com/shadojus"
                target="_blank"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                @shadojus
              </Link>
            </div>
          </GlassCard>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="mailto:shadojus@gmail.com">
            <Button size="lg">
              📧 E-Mail senden
            </Button>
          </Link>
          <Link href="https://instagram.com/shadojus" target="_blank">
            <Button variant="secondary" size="lg">
              📱 Instagram folgen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}