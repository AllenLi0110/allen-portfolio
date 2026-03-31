import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ErrorBoundary } from '../ErrorBoundary'

let throwOnRender = false

function FlakyChild() {
  if (throwOnRender) {
    throw new Error('render boom')
  }
  return <p data-testid="ok">OK</p>
}

describe('ErrorBoundary', () => {
  beforeEach(() => {
    throwOnRender = false
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.mocked(console.error).mockRestore()
  })

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <p data-testid="child">Child</p>
      </ErrorBoundary>
    )
    expect(screen.getByTestId('child')).toHaveTextContent('Child')
  })

  it('shows fallback UI when a child throws', () => {
    throwOnRender = true
    render(
      <ErrorBoundary>
        <FlakyChild />
      </ErrorBoundary>
    )
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument()
    expect(screen.queryByTestId('ok')).not.toBeInTheDocument()
  })

  it('calls onError with error and component stack', () => {
    throwOnRender = true
    const onError = vi.fn()
    render(
      <ErrorBoundary onError={onError}>
        <FlakyChild />
      </ErrorBoundary>
    )
    expect(onError).toHaveBeenCalledTimes(1)
    const [err, info] = onError.mock.calls[0]!
    expect(err).toBeInstanceOf(Error)
    expect(err.message).toBe('render boom')
    expect(info).toMatchObject({ componentStack: expect.any(String) })
  })

  it('uses custom fallback when provided', () => {
    throwOnRender = true
    render(
      <ErrorBoundary fallback={<div data-testid="custom">Custom</div>}>
        <FlakyChild />
      </ErrorBoundary>
    )
    expect(screen.getByTestId('custom')).toHaveTextContent('Custom')
    expect(screen.queryByText(/Something went wrong/i)).not.toBeInTheDocument()
  })

  it('Try again resets and re-renders children when error is cleared', async () => {
    const user = userEvent.setup()
    throwOnRender = true
    render(
      <ErrorBoundary>
        <FlakyChild />
      </ErrorBoundary>
    )
    expect(screen.getByRole('alert')).toBeInTheDocument()
    throwOnRender = false
    await user.click(screen.getByRole('button', { name: /try again/i }))
    expect(screen.getByTestId('ok')).toHaveTextContent('OK')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
