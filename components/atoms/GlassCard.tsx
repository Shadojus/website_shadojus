interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  const hoverClass = hover ? 'glass-hover' : ''
  
  return (
    <div className={`glass ${hoverClass} p-6 ${className}`}>
      {children}
    </div>
  )
}