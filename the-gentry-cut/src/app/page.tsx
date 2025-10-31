import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PackagesSection from '../components/PackagesSection';
import GallerySection from '../components/GallerySection';
import OwnerSection from '../components/OwnerSection';
import BookingContactSection from '../components/BookingContactSection';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black">
      <HeroSection />
      <ServicesSection />
      <PackagesSection />
      <GallerySection />
      <OwnerSection />
      <BookingContactSection />
    </main>
  );
}
