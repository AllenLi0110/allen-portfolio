import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TechBadge } from '../TechBadge'

describe('TechBadge', () => {
  it('displays label text', () => {
    render(<TechBadge label="TypeScript" />)
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })
})
