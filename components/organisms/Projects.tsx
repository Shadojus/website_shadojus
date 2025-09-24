import { Text } from '@/components/atoms/Text'
import { ProjectCard } from '@/components/molecules/ProjectCard'

export function Projects() {
  const projects = [
    {
      title: 'Shadojus Website',
      description: 'Moderne Website mit Next.js 15, TypeScript und Liquid Glass Design. Zero-overhead Development mit atomic design pattern.',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
      link: 'https://github.com/shadojus/website',
      status: 'live' as const
    },
    {
      title: 'Next Project',
      description: 'Innovative Webanwendung mit modernsten Technologien. Fokus auf Performance und User Experience.',
      tags: ['React', 'Node.js', 'Database'],
      status: 'development' as const
    },
    {
      title: 'Future Vision',
      description: 'Experimentelle Projekte und neue Technologien. Stay tuned für spannende Entwicklungen.',
      tags: ['AI', 'Web3', 'Innovation'],
      status: 'coming-soon' as const
    }
  ]
  
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Text variant="title" glow className="mb-4">
            Projekte
          </Text>
          <Text variant="body" className="text-white/70 max-w-2xl mx-auto">
            Eine Auswahl meiner aktuellen Projekte und Experimente
          </Text>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}