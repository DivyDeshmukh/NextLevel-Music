import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MusicTestimonials from "@/components/TestimonialCard";
import Instructors from "@/components/ui/instructors";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] w-full">
      {/* <h1 className="text-2xl text-center ">Chai aur code</h1> */}
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
