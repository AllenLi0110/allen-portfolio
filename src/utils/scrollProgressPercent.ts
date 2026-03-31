export function getScrollProgressPercent(
  scrollTop: number,
  scrollHeight: number,
  viewportHeight: number
): number {
  const docHeight = scrollHeight - viewportHeight
  if (docHeight <= 0) return 0
  return Math.round((scrollTop / docHeight) * 100)
}
