import { AnnouncementBar, Navbar } from '../features/navigation'
import { Hero } from '../features/hero'
import { ServicesSection } from '../features/services'
import { StudioSection } from '../features/studio'
import { GallerySection } from '../features/gallery'
import { BookingSection, FloatingBooking, Footer } from '../features/contact'
import { GlamBand } from '../shared/components/ui/GlamBand'

export function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <GlamBand />
        <ServicesSection />
        <StudioSection />
        <GallerySection />
        <BookingSection />
      </main>
      <Footer />
      <FloatingBooking />
    </>
  )
}
