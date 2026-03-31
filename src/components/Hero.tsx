export function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 24px',
      maxWidth: '680px',
      margin: '0 auto',
    }}>
      <p style={{ margin: '0 0 12px', fontSize: '14px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
        Hi, I'm
      </p>
      <h1 style={{ margin: '0 0 16px', fontSize: 'clamp(40px, 8vw, 64px)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.1 }}>
        Allen Li
      </h1>
      <p style={{ margin: '0 0 32px', fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '540px' }}>
        Software Engineer，熟悉 <strong>Vue 3、Node.js、TypeScript、AWS</strong>。<br />
        具備 IoT SaaS 平台開發與 AI 工具整合（LangChain、RAG）經驗。
      </p>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <a href="https://github.com/AllenLi0110" target="_blank" rel="noreferrer"
          style={linkStyle('var(--text-primary)')}>GitHub ↗</a>
        <a href="https://www.linkedin.com/in/allen-li-service" target="_blank" rel="noreferrer"
          style={linkStyle('var(--link)')}>LinkedIn ↗</a>
        <a href="mailto:allen.li.service@gmail.com"
          style={linkStyle('var(--text-muted)')}>Email ↗</a>
      </div>
    </section>
  )
}

function linkStyle(color: string): React.CSSProperties {
  return { fontSize: '15px', color, textDecoration: 'none', fontWeight: 500 }
}