import { Navbar } from '@/features/navigation'
import { Hero } from '@/features/hero'
import { ServicesSection } from '@/features/services'
import { GallerySection } from '@/features/gallery'
import { TestimonialsSection } from '@/features/testimonials'
import { StudioSection } from '@/features/studio'
import { PromotionsSection } from '@/features/promotions'
import { FaqSection } from '@/features/faq'
import { GlamBand } from '@/shared/components/ui/GlamBand'
import { BookingSection, Footer, LocationSection, QuickActions } from '@/features/contact'

export function App() {
  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
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
      </main>
      <Footer />
      <QuickActions />
    </>
  )
}
