import { Link } from 'react-router-dom'

export type { AboutPageProps } from '../types'

export function AboutPage() {
  return (
    <section style={{
      maxWidth: '640px',
      margin: '0 auto',
      padding: '120px 24px 80px',
    }}>
      <h1 style={{
        margin: '0 0 20px',
        fontSize: 'clamp(32px, 6vw, 44px)',
        fontWeight: 700,
        color: 'var(--text-primary)',
      }}>
        About
      </h1>
      <p style={{
        margin: '0 0 16px',
        fontSize: '17px',
        lineHeight: 1.75,
        color: 'var(--text-secondary)',
      }}>
        我是 Allen，軟體工程師，專注在 Vue / Node / TypeScript 與雲端、IoT 相關產品開發，也做過 Discord 上的 AI 課程助理與 RAG 整合。
      </p>
      <p style={{
        margin: '0 0 28px',
        fontSize: '17px',
        lineHeight: 1.75,
        color: 'var(--text-secondary)',
      }}>
        若你想看專案與技術棧篩選，請回到{' '}
        <Link to="/" style={{ color: 'var(--link)', fontWeight: 600 }}>
          Home
        </Link>
        。
      </p>
    </section>
  )
}

export default AboutPage
