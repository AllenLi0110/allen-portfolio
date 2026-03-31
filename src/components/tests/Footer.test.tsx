import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer'

describe('Footer', () => {
  it('renders stack and deploy note', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toHaveTextContent('React + TypeScript')
    expect(screen.getByRole('contentinfo')).toHaveTextContent('GitHub Pages')
  })
})
