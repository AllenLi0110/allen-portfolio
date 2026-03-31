import { describe, expect, it } from 'vitest'
import { render, within } from '@testing-library/react'
import { Hero } from '../Hero'

function renderHeroInSection() {
  const view = render(<Hero />)
  const section = view.container.querySelector('section')
  if (!section) throw new Error('Hero section missing')
  return { section, ...view }
}

describe('Hero', () => {
  it('renders greeting and name', () => {
    const { section } = renderHeroInSection()
    expect(within(section).getByText("Hi, I'm")).toBeInTheDocument()
    expect(within(section).getByRole('heading', { name: /Allen Li/i })).toBeInTheDocument()
  })

  it('renders role summary', () => {
    const { section } = renderHeroInSection()
    expect(within(section).getByText(/Software Engineer/)).toBeInTheDocument()
    expect(within(section).getByText(/Vue 3/)).toBeInTheDocument()
  })

  it('renders outbound links', () => {
    const { section } = renderHeroInSection()
    const gh = within(section).getByRole('link', { name: /GitHub/ })
    expect(gh).toHaveAttribute('href', 'https://github.com/AllenLi0110')
    expect(gh).toHaveAttribute('target', '_blank')
    expect(within(section).getByRole('link', { name: /LinkedIn/ })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/allen-li-service'
    )
    expect(within(section).getByRole('link', { name: /Email/ })).toHaveAttribute(
      'href',
      'mailto:allen.li.service@gmail.com'
    )
  })
})
