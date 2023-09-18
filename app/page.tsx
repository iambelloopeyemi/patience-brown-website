import HeroSection from "./components/home/HeroSection";
import BenefitSection from "./components/home/BenefitSection";
import CollaborationSection from "./components/home/CollaborationSection";
import ProcessSection from "./components/home/ProcessSection";
import TestimonialSection from "./components/home/TestimonialSection";
import ConsultationSection from "./components/home/ConsultationSection";
import EmpowermentSection from "./components/home/EmpowermentSection";

export default function Home(): JSX.Element {
  return (
    <>
      <HeroSection />
      <BenefitSection />
      <CollaborationSection />
      <ProcessSection />
      <TestimonialSection />
      <ConsultationSection />
      <EmpowermentSection />
    </>
  );
}
