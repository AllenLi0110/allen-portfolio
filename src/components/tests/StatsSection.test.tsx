import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsSection } from '../StatsSection'

describe('StatsSection', () => {
  it('renders all stat labels', () => {
    render(<StatsSection />)
    expect(screen.getByText('IoT Devices')).toBeInTheDocument()
    expect(screen.getByText('Automated Tests')).toBeInTheDocument()
    expect(screen.getByText('Test Coverage')).toBeInTheDocument()
    expect(screen.getByText('API Endpoints')).toBeInTheDocument()
  })

  it('renders final values immediately (reduced motion in tests)', () => {
    render(<StatsSection />)
    // IntersectionObserver mock fires immediately, so trigger=true and reduced motion=true
    // means final values are shown
    expect(screen.getByText(/500/)).toBeInTheDocument()
    expect(screen.getByText(/78/)).toBeInTheDocument()
  })
})
