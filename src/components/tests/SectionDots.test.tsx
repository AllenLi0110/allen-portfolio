import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../test/test-utils'
import { SectionDots } from '../SectionDots'

describe('SectionDots', () => {
  it('renders all section buttons on home page', () => {
    renderWithProviders(<SectionDots />, { route: '/' })
    expect(screen.getByRole('button', { name: /Go to Home/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Go to Experience/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Go to Projects/i })).toBeInTheDocument()
  })

  it('renders nothing on non-home pages', () => {
    renderWithProviders(<SectionDots />, { route: '/about' })
    expect(screen.queryByRole('navigation', { name: /Page sections/i })).not.toBeInTheDocument()
  })
})
