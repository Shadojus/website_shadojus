export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-8">
      {/* Background Effects - Mobile Optimized */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 w-40 h-40 sm:w-72 sm:h-72 bg-purple-500/20 rounded-full blur-2xl sm:blur-3xl float" />
        <div className="absolute bottom-10 right-4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        {/* Avatar - Mobile First */}
        <div className="mb-6 sm:mb-8">
          <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto glass-card pulse-glow rounded-full flex items-center justify-center mb-3 sm:mb-4">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-glow">S</span>
          </div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full mx-auto animate-pulse" />
        </div>
        
        {/* Main Text - Mobile First Typography */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 text-glow leading-tight">
          Hey, ich bin{' '}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Shadojus
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
          Digital Creator & Developer aus Deutschland. 
          Ich entwickle moderne Weblösungen und schaffe digitale Erlebnisse.
        </p>
        
        {/* Vision Statement */}
        <div className="glass-card p-4 sm:p-6 mb-8 sm:mb-12 max-w-2xl mx-auto">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">Meine Vision</h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            Ich entwickle nicht nur Code, sondern schaffe Lösungen, die Menschen verbinden 
            und Unternehmen voranbringen. Von der Idee bis zur Umsetzung - 
            mit modernen Technologien und kreativem Design.
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}