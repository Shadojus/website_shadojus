interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  variant?: 'hero' | 'title' | 'subtitle' | 'body' | 'caption'
  glow?: boolean
  className?: string
  children: React.ReactNode
}

export function Text({ 
  as: Component = 'p', 
  variant = 'body', 
  glow = false,
  className = '',
  children 
}: TextProps) {
  const variants = {
    hero: 'text-4xl md:text-6xl lg:text-7xl font-bold leading-tight',
    title: 'text-2xl md:text-3xl lg:text-4xl font-bold',
    subtitle: 'text-lg md:text-xl lg:text-2xl font-medium',
    body: 'text-base md:text-lg leading-relaxed',
    caption: 'text-sm md:text-base text-white/70'
  }
  
  const glowClass = glow ? 'text-glow' : ''
  
  return (
    <Component className={`${variants[variant]} ${glowClass} ${className}`}>
      {children}
    </Component>
  )
}