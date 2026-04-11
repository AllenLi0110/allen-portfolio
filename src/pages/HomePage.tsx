import { useCallback, useMemo, useState } from 'react'
import { Hero } from '../components/Hero'
import { ExperienceSection } from '../components/ExperienceSection'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectTechFilter } from '../components/ProjectTechFilter'
import { projects } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

export type { HomePageProps } from '../types'

function ProjectsIntro({
  techOptions,
  selectedTech,
  onSelectTech,
}: {
  techOptions: string[]
  selectedTech: string | null
  onSelectTech: (tech: string | null) => void
}) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className="projects-intro-reveal"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
      }}
    >
      <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '40px' }}>
        Projects
      </h2>
      <ProjectTechFilter
        options={techOptions}
        selected={selectedTech}
        onSelect={onSelectTech}
      />
    </div>
  )
}

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
      <ExperienceSection />
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>
        <ProjectsIntro
          techOptions={techOptions}
          selectedTech={selectedTech}
          onSelectTech={handleSelectTech}
        />
        <div className="projects-grid">
          {filteredProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
