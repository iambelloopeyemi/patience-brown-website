import Hero from "../components/Hero";
import MeetPatience from "../components/about/MeetPatience";
import Testimonial from "../components/TestimonialContainer";
import PreviousWork from "../components/about/PreviousWork";
import Empowerment from "../components/Empowerment";

export default function AboutPage() {
  return (
    <>
      <Hero
        heading="Patience Brown"
        message="A writer with a passion for helping others."
      />
      <MeetPatience />
      <Testimonial />
      <PreviousWork />
      <Empowerment
        heading="Let's Write Your Book."
        message="Share your message with the people that need it the most."
      />
    </>
  );
}
