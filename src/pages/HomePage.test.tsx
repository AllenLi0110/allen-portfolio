import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HomePage } from './HomePage'

function projectsPanel() {
  const projectsHeading = screen.getAllByRole('heading', { name: /^Projects$/ })[0]
  const section = projectsHeading.closest('section')
  if (!section) throw new Error('Projects section missing')
  return section
}

describe('HomePage', () => {
  it('renders hero and projects section', () => {
    render(<HomePage />)
    expect(screen.getByRole('heading', { name: /Allen Li/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^Projects$/ })).toBeInTheDocument()
  })

  it('lists all projects by default', () => {
    render(<HomePage />)
    const panel = projectsPanel()
    expect(within(panel).getByRole('heading', { name: 'Infodeck IoT Platform' })).toBeInTheDocument()
    expect(within(panel).getByRole('heading', { name: 'Buildmoat Course Bot' })).toBeInTheDocument()
    expect(within(panel).getByRole('heading', { name: 'Buildmoat Teaching Assistant' })).toBeInTheDocument()
    expect(within(panel).getByRole('heading', { name: 'AmieRoad' })).toBeInTheDocument()
    expect(within(panel).getByRole('heading', { name: 'AlphaLab' })).toBeInTheDocument()
    expect(within(panel).getByRole('heading', { name: 'Portfolio Website' })).toBeInTheDocument()
  })

  it('filters projects when a tech chip is selected', async () => {
    const user = userEvent.setup()
    render(<HomePage />)
    const panel = projectsPanel()
    const toolbar = within(panel).getByRole('toolbar', { name: /Filter projects by technology/i })
    await user.click(within(toolbar).getByRole('button', { name: 'WordPress' }))
    expect(within(panel).queryByRole('heading', { name: 'Infodeck IoT Platform' })).not.toBeInTheDocument()
    expect(within(panel).getByRole('heading', { name: 'AmieRoad' })).toBeInTheDocument()
    expect(within(panel).getByRole('heading', { name: 'AlphaLab' })).toBeInTheDocument()
    await user.click(within(toolbar).getByRole('button', { name: 'All' }))
    expect(within(panel).getByRole('heading', { name: 'Infodeck IoT Platform' })).toBeInTheDocument()
  })
})
