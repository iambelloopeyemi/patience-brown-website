import Testimonial from "../components/TestimonialComponent";
import HeroSection from "../components/about/HeroSection";
import SectionOne from "../components/about/SectionOne";
import SectionTwo from "../components/about/SectionTwo";

export default function AboutPage() {
  return (
    <div>
      <HeroSection />
      <SectionOne />
      <Testimonial />
      <SectionTwo />
    </div>
  );
}
