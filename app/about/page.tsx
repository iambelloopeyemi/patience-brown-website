import HeroComponent from "../components/HeroComponent";
import SectionOne from "../components/about/SectionOne";
import TestimonialComponent from "../components/TestimonialComponent";
import SectionTwo from "../components/about/SectionTwo";
import EmpowermentComponent from "../components/EmpowermentComponent";

export default function AboutPage(): JSX.Element {
  return (
    <>
      <HeroComponent
        heading="Patience Brown"
        message="A writer with a passion for helping others."
      />
      <SectionOne />
      <TestimonialComponent />
      <SectionTwo />
      <EmpowermentComponent
        heading="Let's Write Your Book."
        message="Share your message with the people that need it the most."
      />
    </>
  );
}
