import Hero from "./components/home/hero";
import EmpowermentSection from "./components/home/EmpowermentSection";
import ConsultationSection from "./components/home/ConsultationSection";
import SectionOne from "./components/home/sectionOne";
import SectionThree from "./components/home/sectionThree";
import SectionTwo from "./components/home/sectionTwo";
import TestimonialSection from "./components/home/TestimonialSection";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <TestimonialSection />
      <ConsultationSection />
      <EmpowermentSection />
    </>
  );
}
