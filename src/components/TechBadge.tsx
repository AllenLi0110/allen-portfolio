interface Props {
  label: string
}

export function TechBadge({ label }: Props) {
  return (
    <span style={{
      fontSize: '12px',
      padding: '3px 10px',
      borderRadius: '999px',
      border: '1px solid #d1d5db',
      color: '#374151',
      background: '#f9fafb',
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  )
}