import Hero from "@/app/components/ui/Hero";
import MeetPatience from "@/app/components/pages/about/MeetPatience";
import Testimonial from "@/app/components/ui/TestimonialContainer";
import PreviousWork from "@/app/components/pages/about/PreviousWork";
import Empowerment from "@/app/components/ui/Empowerment";

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
