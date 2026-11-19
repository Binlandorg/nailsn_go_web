import { Route, Routes } from 'react-router'
import { HomePage } from '@/pages/HomePage'
import { ServicesPage } from '@/pages/ServicesPage'
import { AppLayout } from './AppLayout'

export function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="servicios" element={<ServicesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
