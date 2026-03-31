import type { TechBadgeProps } from '../types'

export type { TechBadgeProps }

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span style={{
      fontSize: '12px',
      padding: '3px 10px',
      borderRadius: '999px',
      border: '1px solid var(--badge-border)',
      color: 'var(--badge-text)',
      background: 'var(--badge-bg)',
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  )
}