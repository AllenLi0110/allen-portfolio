import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BackToTop } from '../BackToTop'

describe('BackToTop', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { writable: true, value: 0 })
    window.scrollTo = vi.fn()
  })

  it('is invisible when scrollY is below threshold', () => {
    render(<BackToTop />)
    const btn = screen.getByRole('button', { name: /Back to top/i })
    // opacity:0 and pointerEvents:none when not visible
    expect(btn).toHaveStyle({ opacity: '0', pointerEvents: 'none' })
  })

  it('becomes visible when scrollY exceeds threshold', () => {
    Object.defineProperty(window, 'scrollY', { writable: true, value: 500 })
    render(<BackToTop />)
    fireEvent.scroll(window)
    const btn = screen.getByRole('button', { name: /Back to top/i })
    expect(btn).toHaveStyle({ opacity: '1', pointerEvents: 'auto' })
  })

  it('calls scrollTo on click', () => {
    Object.defineProperty(window, 'scrollY', { writable: true, value: 500 })
    render(<BackToTop />)
    fireEvent.scroll(window)
    fireEvent.click(screen.getByRole('button', { name: /Back to top/i }))
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
