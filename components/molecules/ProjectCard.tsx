import { GlassCard } from '@/components/atoms/GlassCard'
import { Text } from '@/components/atoms/Text'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link?: string
  status?: 'live' | 'development' | 'coming-soon'
}

export function ProjectCard({ title, description, tags, link, status = 'live' }: ProjectCardProps) {
  const statusColors = {
    live: 'bg-green-500',
    development: 'bg-yellow-500',
    'coming-soon': 'bg-gray-500'
  }
  
  const statusLabels = {
    live: 'Live',
    development: 'In Development',
    'coming-soon': 'Coming Soon'
  }
  
  return (
    <GlassCard hover className="group">
      <div className="flex justify-between items-start mb-4">
        <Text variant="title" className="text-lg font-semibold">
          {title}
        </Text>
        <div className={`w-2 h-2 rounded-full ${statusColors[status]}`} />
      </div>
      
      <Text variant="body" className="text-white/70 mb-6 text-sm leading-relaxed">
        {description}
      </Text>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-xs text-white/50">
          {statusLabels[status]}
        </span>
        
        {link && (
          <Link 
            href={link}
            className="text-white/80 hover:text-white text-sm font-medium transition-colors group-hover:translate-x-1 transform duration-300"
          >
            View →
          </Link>
        )}
      </div>
    </GlassCard>
  )
}