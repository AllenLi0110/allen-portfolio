import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import type { Project } from '../../types'
import { ProjectCard } from '../ProjectCard'

const sample: Project = {
  title: 'Sample App',
  description: 'Does things',
  techStack: ['React', 'TypeScript'],
  highlights: ['Shipped v1', 'Tests'],
  liveUrl: 'https://example.com',
  category: 'Demo',
}

describe('ProjectCard', () => {
  it('renders project fields and live link', async () => {
    render(<ProjectCard project={sample} index={0} />)
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Sample App' })).toBeVisible()
    })
    expect(screen.getByText('Demo')).toBeInTheDocument()
    expect(screen.getByText('Does things')).toBeInTheDocument()
    expect(screen.getByText('Shipped v1')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    const live = screen.getByRole('link', { name: /Live Demo/ })
    expect(live).toHaveAttribute('href', 'https://example.com')
  })

  it('shows no public links when urls missing', async () => {
    const minimal: Project = {
      title: 'Private',
      description: 'No links',
      techStack: ['Go'],
      highlights: ['Internal'],
    }
    render(<ProjectCard project={minimal} index={0} />)
    await waitFor(() => {
      expect(screen.getByText('No public links')).toBeInTheDocument()
    })
  })
})
