import { Hero } from '@/features/hero'
import { ServicesSection } from '@/features/services'
import { GallerySection } from '@/features/gallery'
import { TestimonialsSection } from '@/features/testimonials'
import { StudioSection } from '@/features/studio'
import { PromotionsSection } from '@/features/promotions'
import { FaqSection } from '@/features/faq'
import { BookingSection, LocationSection } from '@/features/contact'
import { GlamBand } from '@/shared/components/ui/GlamBand'
import { useDocumentTitle } from '@/shared/hooks/useDocumentTitle'

export function HomePage() {
  useDocumentTitle('Nails & Go Studio | Salón spa en Comas, Lima Norte')
  return (
    <>
      <Hero />
      <GlamBand />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <StudioSection />
      <PromotionsSection />
      <BookingSection />
      <FaqSection />
      <LocationSection />
    </>
  )
}
