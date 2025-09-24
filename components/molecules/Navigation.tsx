import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="glass-card fixed top-3 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 px-3 sm:px-6 py-2 sm:py-3 pulse-glow">
      <div className="flex items-center justify-between space-x-4 sm:space-x-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 glass-card rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs sm:text-sm">S</span>
          </div>
          <span className="font-bold text-sm sm:text-lg text-white hidden xs:block">Shadojus</span>
        </Link>
        
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Mobile Instagram Link */}
          <Link 
            href="https://instagram.com/shadojus"
            target="_blank"
            className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg sm:rounded-xl transition-all duration-300"
          >
            <span className="sm:hidden">📱</span>
            <span className="hidden sm:inline">Instagram</span>
          </Link>
          
          {/* Contact Button */}
          <Link 
            href="mailto:shadojus@gmail.com"
            className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white/80 hover:text-white glass-hover rounded-lg sm:rounded-xl transition-all duration-300"
          >
            <span className="sm:hidden">✉️</span>
            <span className="hidden sm:inline">Kontakt</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}