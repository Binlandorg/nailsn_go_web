import { ServicesCatalog } from '@/features/services'
import { BookingSection } from '@/features/contact'
import { useDocumentTitle } from '@/shared/hooks/useDocumentTitle'

export function ServicesPage() {
  useDocumentTitle('Servicios | Nails & Go Studio')
  return (
    <>
      <ServicesCatalog />
      <BookingSection />
    </>
  )
}
