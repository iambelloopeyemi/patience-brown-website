import EmpowermentComponent from "../components/EmpowermentComponent";
import TestimonialComponent from "../components/TestimonialComponent";
import HeroSection from "../components/about/HeroSection";
import SectionOne from "../components/about/SectionOne";
import SectionTwo from "../components/about/SectionTwo";

export default function AboutPage() {
  return (
    <div>
      <HeroSection />
      <SectionOne />
      <TestimonialComponent />
      <SectionTwo />
      <EmpowermentComponent
        heading="Let's Write Your Book."
        message="Share your message with the people that need it the most."
      />
    </div>
  );
}
