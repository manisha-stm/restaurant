import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import PopularDishes from "./_components/PopularDishes";
import InstagramGallery from "./_components/InstagramGallery";
import WhyChooseUs from "./_components/WhyChooseUs";
import Testimonials from "./_components/Testimonials";
import ReservationSection from "./_components/ReservationSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PopularDishes />
        <WhyChooseUs />
        <InstagramGallery />
        <Testimonials />
        <ReservationSection />
      </main>
      <Footer />
    </>
  );
}
