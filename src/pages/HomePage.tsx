import { useCallback, useMemo, useState } from 'react'
import { Hero } from '../components/Hero'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectTechFilter } from '../components/ProjectTechFilter'
import { projects } from '../data/projects'

export type { HomePageProps } from '../types'

export function HomePage() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  const techOptions = useMemo(() => {
    const set = new Set<string>()
    for (const p of projects) {
      for (const t of p.techStack) set.add(t)
    }
    return [...set].sort((a, b) => a.localeCompare(b))
  }, [])

  const filteredProjects = useMemo(() => {
    if (selectedTech === null) return [...projects]
    return projects.filter((p) => p.techStack.includes(selectedTech))
  }, [selectedTech])

  const handleSelectTech = useCallback((tech: string | null) => {
    setSelectedTech(tech)
  }, [])

  return (
    <>
      <Hero />
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '40px' }}>
          Projects
        </h2>
        <ProjectTechFilter
          options={techOptions}
          selected={selectedTech}
          onSelect={handleSelectTech}
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {filteredProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
