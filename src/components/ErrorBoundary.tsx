import { Component, type ErrorInfo } from 'react'

import type { ErrorBoundaryProps } from '../types/error-boundary'

type State = {
  hasError: boolean
  error: Error | null
}

export type { ErrorBoundaryProps }

export class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  static displayName = 'ErrorBoundary'

  state: State = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError?.(error, info)
  }

  reset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback != null) {
        return this.props.fallback
      }
      return (
        <div
          role="alert"
          aria-live="assertive"
          style={{
            padding: '2rem 1.25rem',
            maxWidth: '36rem',
            margin: '0 auto',
            color: 'var(--text-primary)',
          }}
        >
          <h2
            style={{
              margin: '0 0 0.75rem',
              fontSize: '1.25rem',
              fontWeight: 600,
            }}
          >
            Something went wrong
          </h2>
          <p style={{ margin: '0 0 1rem', color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.5 }}>
            This section crashed. You can try again, or go back home from the header.
          </p>
          {import.meta.env.DEV && this.state.error != null ? (
            <pre
              style={{
                margin: '0 0 1rem',
                padding: '0.75rem',
                fontSize: '12px',
                overflow: 'auto',
                borderRadius: '6px',
                background: 'var(--badge-bg)',
                border: '1px solid var(--surface-border)',
                color: 'var(--text-secondary)',
              }}
            >
              {this.state.error.message}
            </pre>
          ) : null}
          <button
            type="button"
            onClick={this.reset}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              borderRadius: '6px',
              border: '1px solid var(--surface-border)',
              background: 'var(--surface)',
              color: 'var(--text-primary)',
            }}
          >
            Try again
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
