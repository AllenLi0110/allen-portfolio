import { Outlet } from 'react-router-dom'
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
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
