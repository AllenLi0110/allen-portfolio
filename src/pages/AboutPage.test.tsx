import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AboutPage } from './AboutPage'

function renderAbout() {
  return render(
    <MemoryRouter>
      <AboutPage />
    </MemoryRouter>
  )
}

describe('AboutPage', () => {
  it('renders intro and narrative', () => {
    renderAbout()
    expect(screen.getByRole('heading', { level: 1, name: /嗨，我是 Allen/ })).toBeInTheDocument()
    expect(screen.getByText(/Vue/)).toBeInTheDocument()
    expect(screen.getByText(/React/)).toBeInTheDocument()
    expect(screen.getByText(/LeetCode/)).toBeInTheDocument()
  })

  it('renders outbound links', () => {
    renderAbout()
    expect(screen.getByRole('link', { name: /GitHub/ })).toHaveAttribute('href', 'https://github.com/AllenLi0110')
    expect(screen.getByRole('link', { name: /Blog/ })).toHaveAttribute('href', 'https://www.allenliservice.site')
    expect(screen.getByRole('link', { name: /Email/ })).toHaveAttribute('href', 'mailto:allen.li.service@gmail.com')
  })

  it('links back to home', () => {
    renderAbout()
    const h1 = screen.getByRole('heading', { level: 1 })
    const section = h1.closest('section')!
    const home = within(section).getByRole('link', { name: /^Home$/ })
    expect(home).toHaveAttribute('href', '/')
  })
})
