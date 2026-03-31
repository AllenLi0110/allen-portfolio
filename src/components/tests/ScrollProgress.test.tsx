import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { ScrollProgress } from '../ScrollProgress'

describe('ScrollProgress', () => {
  it('registers scroll listener and removes on unmount', () => {
    const add = vi.spyOn(window, 'addEventListener')
    const remove = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<ScrollProgress />)
    expect(add).toHaveBeenCalledWith('scroll', expect.any(Function))
    unmount()
    expect(remove).toHaveBeenCalledWith('scroll', expect.any(Function))
    add.mockRestore()
    remove.mockRestore()
  })

  it('renders track with inner bar', () => {
    const { container } = render(<ScrollProgress />)
    const outer = container.firstElementChild as HTMLElement
    expect(outer).toBeTruthy()
    expect(outer.querySelector('div')).toBeTruthy()
  })
})
