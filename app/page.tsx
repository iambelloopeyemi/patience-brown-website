import Hero from "./components/home/hero";
import EmpowermentSection from "./components/home/EmpowermentSection";
import ConsultationSection from "./components/home/ConsultationSection";
import SectionOne from "./components/home/sectionOne";
import SectionThree from "./components/home/sectionThree";
import SectionTwo from "./components/home/sectionTwo";
import Testimonial from "./components/home/testimonial";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Testimonial />
      <ConsultationSection />
      <EmpowermentSection />
    </>
  );
}
