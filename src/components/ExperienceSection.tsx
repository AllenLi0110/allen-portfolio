import { useScrollReveal } from '../hooks/useScrollReveal'
import { experiences } from '../data/experience'
import type { ExperienceItem } from '../data/experience'

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const { ref, visible } = useScrollReveal()
  const delay = `${index * 0.1}s`

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${delay}, transform 0.5s ease ${delay}`,
        display: 'flex',
        gap: '24px',
      }}
    >
      {/* timeline spine */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'var(--link)',
            marginTop: '6px',
            flexShrink: 0,
          }}
        />
        {index < experiences.length - 1 && (
          <div
            style={{
              width: '1px',
              flex: 1,
              background: 'var(--surface-border)',
              marginTop: '8px',
              transformOrigin: 'top center',
              transform: visible ? 'scaleY(1)' : 'scaleY(0)',
              transition: `transform 0.5s ease ${delay}`,
            }}
          />
        )}
      </div>

      {/* content */}
      <div style={{ paddingBottom: index < experiences.length - 1 ? '40px' : 0 }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            gap: '8px',
            marginBottom: '4px',
          }}
        >
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}>
            {item.role}
          </h3>
          <span style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>@ {item.company}</span>
        </div>
        <p style={{ margin: '0 0 12px', fontSize: '13px', color: 'var(--text-muted)' }}>
          {item.period} · {item.location}
        </p>
        <ul
          style={{
            margin: '0 0 12px',
            paddingLeft: '18px',
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
          }}
        >
          {item.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        {item.techStack && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {item.techStack.map((t) => (
              <span
                key={t}
                className="tech-badge"
                style={{
                  fontSize: '11px',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  border: '1px solid var(--badge-border)',
                  background: 'var(--badge-bg)',
                  color: 'var(--badge-text)',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function ExperienceSection() {
  const { ref, visible } = useScrollReveal()

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>
      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.55s ease, transform 0.55s ease',
          marginBottom: '40px',
        }}
      >
        <h2 style={{ fontSize: '28px', fontWeight: 600, margin: 0 }}>Experience</h2>
      </div>
      <div>
        {experiences.map((item, i) => (
          <ExperienceCard key={item.company + item.role} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
