import '@testing-library/jest-dom/vitest'
import { cleanup, configure } from '@testing-library/react'
import { afterEach, beforeEach, vi } from 'vitest'

configure({ reactStrictMode: false })

beforeEach(() => {
  cleanup()
  vi.stubGlobal(
    'matchMedia',
    (query: string) => ({
      matches: String(query).includes('prefers-reduced-motion') && String(query).includes('reduce'),
      media: query,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })
  )
})

afterEach(() => {
  cleanup()
})

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null
  rootMargin = ''
  readonly thresholds: ReadonlyArray<number> = []
  private readonly cb: IntersectionObserverCallback

  constructor(cb: IntersectionObserverCallback) {
    this.cb = cb
  }

  observe(target: Element) {
    this.cb(
      [
        {
          isIntersecting: true,
          target,
          intersectionRatio: 1,
          boundingClientRect: target.getBoundingClientRect(),
          intersectionRect: target.getBoundingClientRect(),
          rootBounds: null,
          time: Date.now(),
        } as IntersectionObserverEntry,
      ],
      this
    )
  }

  unobserve() {}

  disconnect() {}

  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

globalThis.IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver
