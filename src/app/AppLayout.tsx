import { Outlet } from 'react-router'
import { Navbar } from '@/features/navigation'
import { Footer, QuickActions } from '@/features/contact'
import { ScrollManager } from './ScrollManager'

export function AppLayout() {
  return (
    <>
      <ScrollManager />
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Outlet />
      </main>
      <Footer />
      <QuickActions />
    </>
  )
}
