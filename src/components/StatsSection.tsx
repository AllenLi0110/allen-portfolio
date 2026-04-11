import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountUp } from '../hooks/useCountUp'

interface Stat {
  value: number
  prefix?: string
  suffix: string
  label: string
}

const STATS: readonly Stat[] = [
  { value: 500,  suffix: '+', label: 'IoT Devices' },
  { value: 1300, suffix: '+', label: 'Automated Tests' },
  { value: 78,   suffix: '%', label: 'Test Coverage' },
  { value: 170,  suffix: '+', label: 'API Endpoints' },
]

function StatItem({ stat, trigger }: { stat: Stat; trigger: boolean }) {
  const count = useCountUp(stat.value, 1400, trigger)
  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{
        margin: '0 0 4px',
        fontSize: 'clamp(28px, 4vw, 40px)',
        fontWeight: 700,
        color: 'var(--link)',
        lineHeight: 1,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {stat.prefix ?? ''}{count.toLocaleString()}{stat.suffix}
      </p>
      <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
        {stat.label}
      </p>
    </div>
  )
}

export function StatsSection() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      ref={ref}
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 24px 80px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '32px 24px',
        padding: '36px 32px',
        border: '1px solid var(--surface-border)',
        borderRadius: '16px',
        background: 'var(--surface)',
      }}>
        {STATS.map((stat) => (
          <StatItem key={stat.label} stat={stat} trigger={visible} />
        ))}
      </div>
    </section>
  )
}
