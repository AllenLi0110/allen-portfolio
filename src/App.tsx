import { Hero } from './components/Hero'
import { ProjectCard } from './components/ProjectCard'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { projects } from './data/projects'
import { ScrollProgress } from './components/ScrollProgress'

function App() {
  return (
    <main style={{ background: 'transparent', minHeight: '100vh' }}>
      <ScrollProgress />
      <Header />
      <Hero />
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '40px' }}>
          Projects
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default App