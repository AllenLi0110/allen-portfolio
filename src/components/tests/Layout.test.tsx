import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { Route, Routes } from 'react-router-dom'
import { renderWithProviders } from '../../test/test-utils'
import { Layout } from '../Layout'

describe('Layout', () => {
  it('renders header, outlet content, and footer', () => {
    renderWithProviders(
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<p data-testid="outlet-slot">Outlet OK</p>} />
        </Route>
      </Routes>,
      { route: '/' }
    )
    expect(screen.getByRole('navigation', { name: /Main/i })).toBeInTheDocument()
    expect(screen.getByTestId('outlet-slot')).toHaveTextContent('Outlet OK')
    expect(screen.getByText(/Built with React/)).toBeInTheDocument()
  })
})
