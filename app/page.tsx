import Hero from "./components/home/hero";
import EmpowermentSection from "./components/home/EmpowermentSection";
import ConsultationSection from "./components/home/ConsultationSection";
import BenefitSection from "./components/home/BenefitSection";
import ProcessSection from "./components/home/ProcessSection";
import CollaborationSection from "./components/home/CollaborationSection";
import TestimonialSection from "./components/home/TestimonialSection";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <BenefitSection />
      <CollaborationSection />
      <ProcessSection />
      <TestimonialSection />
      <ConsultationSection />
      <EmpowermentSection />
    </>
  );
}
