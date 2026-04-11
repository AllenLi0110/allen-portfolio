import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ExperienceSection } from '../ExperienceSection'

describe('ExperienceSection', () => {
  it('renders section heading', () => {
    render(<ExperienceSection />)
    expect(screen.getByRole('heading', { name: /^Experience$/ })).toBeInTheDocument()
  })

  it('renders all experience entries', () => {
    render(<ExperienceSection />)
    expect(screen.getByText(/Infodeck/)).toBeInTheDocument()
    expect(screen.getAllByText(/Buildmoat/)[0]).toBeInTheDocument()
    expect(screen.getByText(/ALPHA Camp/)).toBeInTheDocument()
    expect(screen.getByText(/Unimicron/)).toBeInTheDocument()
  })

  it('renders role titles', () => {
    render(<ExperienceSection />)
    const roles = screen.getAllByRole('heading', { level: 3 })
    expect(roles.length).toBeGreaterThanOrEqual(3)
  })
})
