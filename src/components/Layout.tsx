import { Outlet, useLocation } from 'react-router-dom'
import { BackToTop } from './BackToTop'
import { ErrorBoundary } from './ErrorBoundary'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollProgress } from './ScrollProgress'
import { ScrollToTop } from './ScrollToTop'
import { SectionDots } from './SectionDots'

export type { LayoutProps } from '../types'

export function Layout() {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Header />
      <main style={{ background: 'transparent', minHeight: '100vh' }}>
        <ErrorBoundary>
          {/* key forces remount on route change, triggering the CSS entry animation */}
          <div key={pathname} className="page-transition">
            <Outlet />
          </div>
        </ErrorBoundary>
      </main>
      <Footer />
      <BackToTop />
      <SectionDots />
    </>
  )
}
