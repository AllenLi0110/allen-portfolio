import { describe, expect, it } from 'vitest'
import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '../../test/test-utils'
import { Header } from '../Header'

describe('Header', () => {
  it('renders section anchor links and About on home page', () => {
    renderWithProviders(<Header />, { route: '/' })
    expect(screen.getByRole('link', { name: /^Home$/ })).toHaveAttribute('href', '#hero')
    expect(screen.getByRole('link', { name: /^Experience$/ })).toHaveAttribute('href', '#experience')
    expect(screen.getByRole('link', { name: /^Projects$/ })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('link', { name: /^About$/ })).toHaveAttribute('href', '/about')
  })

  it('renders Home route link and About on non-home pages', () => {
    renderWithProviders(<Header />, { route: '/about' })
    expect(screen.getByRole('link', { name: /^Home$/ })).toHaveAttribute('href', '/')
    expect(screen.queryByRole('link', { name: /^Experience$/ })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /^Projects$/ })).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^About$/ })).toHaveAttribute('href', '/about')
  })

  it('renders theme toggle button', () => {
    renderWithProviders(<Header />)
    expect(screen.getByRole('button', { name: /Toggle dark mode/i })).toHaveTextContent(/Dark|Light/)
  })

  it('toggles theme label on click', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Header />)
    const nav = screen.getAllByRole('navigation', { name: /Main/i })[0]
    const headerEl = nav.closest('header')
    expect(headerEl).toBeTruthy()
    const btn = within(headerEl!).getByRole('button', { name: /Toggle dark mode/i })
    const before = btn.textContent
    await user.click(btn)
    expect(btn.textContent).not.toBe(before)
  })
})
