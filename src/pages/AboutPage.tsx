import { Link } from 'react-router-dom'

export type { AboutPageProps } from '../types'

export function AboutPage() {
  return (
    <section
      style={{
        maxWidth: '560px',
        margin: '0 auto',
        padding: '120px 24px 80px',
      }}
    >
      <h1
        style={{
          margin: '0 0 28px',
          fontSize: 'clamp(28px, 5vw, 36px)',
          fontWeight: 600,
          lineHeight: 1.25,
          color: 'var(--text-primary)',
        }}
      >
        About
      </h1>

      <p
        style={{
          margin: '0 0 20px',
          fontSize: '18px',
          lineHeight: 1.75,
          color: 'var(--text-secondary)',
        }}
      >
        Hi, I'm Allen. I primarily build web applications with{' '}
        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Vue</strong>,{' '}
        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>TypeScript</strong>, and{' '}
        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Node.js</strong>. I spent
        time in an IoT SaaS company and also do WordPress and PHP freelance work. I currently serve
        as a teaching assistant at Buildmoat, helping students with coding problems and questions in
        the community.
      </p>
      <p
        style={{
          margin: '0 0 20px',
          fontSize: '18px',
          lineHeight: 1.75,
          color: 'var(--text-secondary)',
        }}
      >
        This portfolio is built with{' '}
        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>React</strong> and
        TypeScript — a deliberate choice to step outside my primary Vue stack and compare developer
        experience firsthand. It covers routing, lazy loading, Error Boundary, Vitest component
        tests, and a full CI/CD pipeline on GitHub Actions.
      </p>
      <p
        style={{
          margin: '0 0 32px',
          fontSize: '18px',
          lineHeight: 1.75,
          color: 'var(--text-secondary)',
        }}
      >
        My LeetCode solutions and JS notes live on my blog. If you'd like to talk about work,
        collaboration, or just say hi — reach out via the links below.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '18px',
          marginBottom: '40px',
        }}
      >
        <a
          href="https://github.com/AllenLi0110"
          target="_blank"
          rel="noreferrer"
          className="hero-cta-link"
          style={{ color: 'var(--text-primary)' }}
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/allen-li-service"
          target="_blank"
          rel="noreferrer"
          className="hero-cta-link"
          style={{ color: 'var(--link)' }}
        >
          LinkedIn ↗
        </a>
        <a
          href="https://www.allenliservice.site"
          target="_blank"
          rel="noreferrer"
          className="hero-cta-link"
          style={{ color: 'var(--text-secondary)' }}
        >
          Blog ↗
        </a>
        <a
          href="mailto:allen.li.service@gmail.com"
          className="hero-cta-link"
          style={{ color: 'var(--text-muted)' }}
        >
          Email ↗
        </a>
      </div>

      <p style={{ margin: 0, fontSize: '16px', color: 'var(--text-muted)' }}>
        See project details on the{' '}
        <Link to="/" style={{ color: 'var(--link)', fontWeight: 600, textDecoration: 'none' }}>
          Home
        </Link>{' '}
        page.
      </p>
    </section>
  )
}

export default AboutPage
