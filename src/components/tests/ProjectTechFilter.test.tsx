import { describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProjectTechFilter } from '../ProjectTechFilter'

describe('ProjectTechFilter', () => {
  it('calls onSelect with null for All and tech name for chips', async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()
    render(
      <ProjectTechFilter options={['Alpha', 'Beta']} selected={null} onSelect={onSelect} />
    )
    const toolbar = screen.getByRole('toolbar', { name: /Filter projects by technology/i })
    await user.click(within(toolbar).getByRole('button', { name: 'Alpha' }))
    expect(onSelect).toHaveBeenLastCalledWith('Alpha')
    await user.click(within(toolbar).getByRole('button', { name: 'All' }))
    expect(onSelect).toHaveBeenLastCalledWith(null)
  })
})
