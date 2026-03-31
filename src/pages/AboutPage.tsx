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
        嗨，我是 Allen。我主要寫網頁，平常使用 <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Vue</strong>、
        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}> TypeScript</strong>、
        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}> Node</strong> 較多；在 IoT
        SaaS 待過一陣子，也接 WordPress、PHP 的網站開發。同時我在 Buildmoat 擔任課程助理，偶爾在社群裡和學生刷題、回答問題。
      </p>
      <p
        style={{
          margin: '0 0 20px',
          fontSize: '18px',
          lineHeight: 1.75,
          color: 'var(--text-secondary)',
        }}
      >
        這個站是用 <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>React</strong> 實做的，
        主要練習路徑管理、Lazy Loading、Error Boundary 等前端技術，以及測試與 CI/CD，透過實作讓我快速了解不同語言的實際應用。
      </p>
      <p
        style={{
          margin: '0 0 32px',
          fontSize: '18px',
          lineHeight: 1.75,
          color: 'var(--text-secondary)',
        }}
      >
        LeetCode 和 JS 筆記會丟在部落格；想聊聊工作、合作或單純打聲招呼，用下面連結找我即可。
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
        想看專案細節，請回{' '}
        <Link to="/" style={{ color: 'var(--link)', fontWeight: 600, textDecoration: 'none' }}>
          Home
        </Link>
        。
      </p>
    </section>
  )
}

export default AboutPage
