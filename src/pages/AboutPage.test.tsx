import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AboutPage } from './AboutPage'

describe('AboutPage', () => {
  it('renders title and bio', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    expect(screen.getAllByRole('heading', { level: 1, name: /^About$/ })[0]).toBeInTheDocument()
    expect(screen.getByText(/Allen/)).toBeInTheDocument()
    expect(screen.getByText(/專注在 Vue/)).toBeInTheDocument()
  })

  it('links back to home', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    const heading = screen.getAllByRole('heading', { level: 1, name: /^About$/ })[0]
    const section = heading.closest('section')!
    const home = within(section).getByRole('link', { name: /^Home$/ })
    expect(home).toHaveAttribute('href', '/')
  })
})
