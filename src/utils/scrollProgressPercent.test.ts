import { describe, expect, it } from 'vitest'
import { getScrollProgressPercent } from './scrollProgressPercent'

describe('getScrollProgressPercent', () => {
  it('returns 0 when there is no scrollable range', () => {
    expect(getScrollProgressPercent(0, 800, 800)).toBe(0)
    expect(getScrollProgressPercent(10, 600, 800)).toBe(0)
  })

  it('returns rounded percentage of scroll through document', () => {
    expect(getScrollProgressPercent(0, 2000, 800)).toBe(0)
    expect(getScrollProgressPercent(600, 2000, 800)).toBe(50)
    expect(getScrollProgressPercent(1200, 2000, 800)).toBe(100)
  })
})
