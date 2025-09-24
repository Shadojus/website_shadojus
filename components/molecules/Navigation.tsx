import Link from 'next/link'
import { Button } from '@/components/atoms/Button'

export function Navigation() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]
  
  return (
    <nav className="glass fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 glow">
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 glass rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-lg text-white">Shadojus</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          {links.map(({ href, label }) => (
            <Link 
              key={href}
              href={href} 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {label}
            </Link>
          ))}
        </div>
        
        <Link 
          href="https://instagram.com/shadojus"
          target="_blank"
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl transition-all duration-300"
        >
          Instagram
        </Link>
      </div>
    </nav>
  )
}