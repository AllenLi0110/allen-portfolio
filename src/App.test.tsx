import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import App from './App'

function renderApp(initial = '/') {
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={[initial]}>
        <App />
      </MemoryRouter>
    </ThemeProvider>
  )
}

describe('App routing', () => {
  it('renders home at /', () => {
    renderApp('/')
    expect(screen.getByRole('heading', { name: /Allen Li/i })).toBeInTheDocument()
  })

  it('navigates to About and shows page', async () => {
    const user = userEvent.setup()
    renderApp('/')
    const aboutLinks = screen.getAllByRole('link', { name: /^About$/ })
    await user.click(aboutLinks[0])
    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1, name: /^About$/ })).toBeInTheDocument()
    })
  })

  it('redirects unknown paths to home', async () => {
    renderApp('/this-route-does-not-exist')
    await waitFor(() => {
      expect(screen.getAllByRole('heading', { name: /Allen Li/i }).length).toBeGreaterThan(0)
    })
  })
})
