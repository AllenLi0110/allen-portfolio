import { Outlet } from 'react-router-dom'
import { BackToTop } from './BackToTop'
import { ErrorBoundary } from './ErrorBoundary'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollProgress } from './ScrollProgress'

export type { LayoutProps } from '../types'

export function Layout() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main style={{ background: 'transparent', minHeight: '100vh' }}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
