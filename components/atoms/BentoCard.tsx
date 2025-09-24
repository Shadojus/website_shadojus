interface BentoCardProps {
  title: string
  description: string
  href?: string
  icon?: string
  size?: 'small' | 'medium' | 'large'
  gradient?: string
  children?: React.ReactNode
}

export function BentoCard({ 
  title, 
  description, 
  href, 
  icon = '✨',
  size = 'medium',
  gradient,
  children 
}: BentoCardProps) {
  const sizeClasses = {
    small: 'min-h-[200px]',
    medium: 'min-h-[250px]',
    large: 'min-h-[300px] bento-item-large'
  }
  
  const Component = href ? 'a' : 'div'
  const linkProps = href ? { href, target: href.startsWith('http') ? '_blank' : '_self' } : {}
  
  return (
    <Component
      className={`
        glass-card glass-hover bento-item ${sizeClasses[size]}
        ${gradient || 'gradient-bg'}
        group relative
      `}
      {...linkProps}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-4 text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-xl font-bold text-white group-hover:text-glow transition-all duration-300">
            {title}
          </h3>
        </div>
        
        <p className="text-white/80 text-sm leading-relaxed mb-6 group-hover:text-white/90 transition-colors">
          {description}
        </p>
        
        {children}
      </div>
      
      {/* Hover indicator */}
      {href && (
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white/60 text-sm">→</span>
        </div>
      )}
    </Component>
  )
}